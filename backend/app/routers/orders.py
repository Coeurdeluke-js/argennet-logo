from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from typing import List

from ..database.database import get_db
from ..models.order import Order, OrderItem, OrderStatus
from ..models.cart import Cart, CartItem
from ..models.product import Product
from ..models.user import User
from ..schemas.order import OrderCreate, OrderUpdate, Order as OrderSchema, OrderItem as OrderItemSchema
from ..utils.auth import get_current_active_user

router = APIRouter()

@router.get("/", response_model=List[OrderSchema])
def get_orders(
    current_user: User = Depends(get_current_active_user),
    db: Session = Depends(get_db)
):
    orders = db.query(Order).filter(Order.user_id == current_user.id).all()
    return orders

@router.get("/{order_id}", response_model=OrderSchema)
def get_order(
    order_id: int,
    current_user: User = Depends(get_current_active_user),
    db: Session = Depends(get_db)
):
    order = db.query(Order).filter(
        Order.id == order_id,
        Order.user_id == current_user.id
    ).first()
    if not order:
        raise HTTPException(status_code=404, detail="Order not found")
    return order

@router.post("/", response_model=OrderSchema)
def create_order(
    order: OrderCreate,
    current_user: User = Depends(get_current_active_user),
    db: Session = Depends(get_db)
):
    # Obtener el carrito del usuario
    cart = db.query(Cart).filter(Cart.user_id == current_user.id).first()
    if not cart:
        raise HTTPException(status_code=400, detail="Cart is empty")
    
    # Obtener los items del carrito
    cart_items = db.query(CartItem).filter(CartItem.cart_id == cart.id).all()
    if not cart_items:
        raise HTTPException(status_code=400, detail="Cart is empty")
    
    # Verificar el stock de los productos
    for item in cart_items:
        product = db.query(Product).filter(Product.id == item.product_id).first()
        if product.stock < item.quantity:
            raise HTTPException(
                status_code=400,
                detail=f"Not enough stock for product {product.name}"
            )
    
    # Crear la orden
    db_order = Order(
        user_id=current_user.id,
        status=OrderStatus.PENDING,
        shipping_address=order.shipping_address,
        payment_method=order.payment_method,
        total_amount=0  # Se actualizará después
    )
    db.add(db_order)
    db.commit()
    db.refresh(db_order)
    
    # Crear los items de la orden y actualizar el stock
    total_amount = 0
    for item in cart_items:
        product = db.query(Product).filter(Product.id == item.product_id).first()
        
        # Crear el item de la orden
        order_item = OrderItem(
            order_id=db_order.id,
            product_id=item.product_id,
            quantity=item.quantity,
            price=product.price
        )
        db.add(order_item)
        
        # Actualizar el stock
        product.stock -= item.quantity
        
        # Actualizar el total
        total_amount += product.price * item.quantity
    
    # Actualizar el total de la orden
    db_order.total_amount = total_amount
    db.commit()
    
    # Limpiar el carrito
    db.query(CartItem).filter(CartItem.cart_id == cart.id).delete()
    db.commit()
    
    return db_order

@router.put("/{order_id}", response_model=OrderSchema)
def update_order(
    order_id: int,
    order_update: OrderUpdate,
    current_user: User = Depends(get_current_active_user),
    db: Session = Depends(get_db)
):
    # Obtener la orden
    order = db.query(Order).filter(
        Order.id == order_id,
        Order.user_id == current_user.id
    ).first()
    if not order:
        raise HTTPException(status_code=404, detail="Order not found")
    
    # Solo se puede actualizar si la orden está pendiente
    if order.status != OrderStatus.PENDING:
        raise HTTPException(status_code=400, detail="Cannot update order in current status")
    
    # Actualizar la orden
    update_data = order_update.dict(exclude_unset=True)
    for key, value in update_data.items():
        setattr(order, key, value)
    
    db.commit()
    db.refresh(order)
    return order

@router.delete("/{order_id}", status_code=status.HTTP_204_NO_CONTENT)
def cancel_order(
    order_id: int,
    current_user: User = Depends(get_current_active_user),
    db: Session = Depends(get_db)
):
    # Obtener la orden
    order = db.query(Order).filter(
        Order.id == order_id,
        Order.user_id == current_user.id
    ).first()
    if not order:
        raise HTTPException(status_code=404, detail="Order not found")
    
    # Solo se puede cancelar si la orden está pendiente
    if order.status != OrderStatus.PENDING:
        raise HTTPException(status_code=400, detail="Cannot cancel order in current status")
    
    # Actualizar el estado de la orden
    order.status = OrderStatus.CANCELLED
    
    # Devolver los productos al stock
    order_items = db.query(OrderItem).filter(OrderItem.order_id == order.id).all()
    for item in order_items:
        product = db.query(Product).filter(Product.id == item.product_id).first()
        product.stock += item.quantity
    
    db.commit()
    return None 