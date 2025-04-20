from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from typing import List

from ..database.database import get_db
from ..models.cart import Cart, CartItem
from ..models.product import Product
from ..models.user import User
from ..schemas.cart import CartItemCreate, CartItemUpdate, Cart as CartSchema, CartItem as CartItemSchema
from ..utils.auth import get_current_active_user

router = APIRouter()

@router.get("/", response_model=CartSchema)
def get_cart(current_user: User = Depends(get_current_active_user), db: Session = Depends(get_db)):
    cart = db.query(Cart).filter(Cart.user_id == current_user.id).first()
    if not cart:
        # Crear un carrito vacío si no existe
        cart = Cart(user_id=current_user.id)
        db.add(cart)
        db.commit()
        db.refresh(cart)
    return cart

@router.post("/items", response_model=CartItemSchema)
def add_item_to_cart(
    item: CartItemCreate,
    current_user: User = Depends(get_current_active_user),
    db: Session = Depends(get_db)
):
    # Verificar si el producto existe
    product = db.query(Product).filter(Product.id == item.product_id).first()
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")
    
    # Verificar si hay suficiente stock
    if product.stock < item.quantity:
        raise HTTPException(status_code=400, detail="Not enough stock")
    
    # Obtener o crear el carrito del usuario
    cart = db.query(Cart).filter(Cart.user_id == current_user.id).first()
    if not cart:
        cart = Cart(user_id=current_user.id)
        db.add(cart)
        db.commit()
        db.refresh(cart)
    
    # Verificar si el producto ya está en el carrito
    cart_item = db.query(CartItem).filter(
        CartItem.cart_id == cart.id,
        CartItem.product_id == item.product_id
    ).first()
    
    if cart_item:
        # Actualizar la cantidad si el producto ya está en el carrito
        cart_item.quantity += item.quantity
    else:
        # Crear un nuevo item en el carrito
        cart_item = CartItem(
            cart_id=cart.id,
            product_id=item.product_id,
            quantity=item.quantity
        )
        db.add(cart_item)
    
    db.commit()
    db.refresh(cart_item)
    return cart_item

@router.put("/items/{item_id}", response_model=CartItemSchema)
def update_cart_item(
    item_id: int,
    item_update: CartItemUpdate,
    current_user: User = Depends(get_current_active_user),
    db: Session = Depends(get_db)
):
    # Obtener el carrito del usuario
    cart = db.query(Cart).filter(Cart.user_id == current_user.id).first()
    if not cart:
        raise HTTPException(status_code=404, detail="Cart not found")
    
    # Obtener el item del carrito
    cart_item = db.query(CartItem).filter(
        CartItem.id == item_id,
        CartItem.cart_id == cart.id
    ).first()
    if not cart_item:
        raise HTTPException(status_code=404, detail="Cart item not found")
    
    # Verificar si hay suficiente stock
    product = db.query(Product).filter(Product.id == cart_item.product_id).first()
    if product.stock < item_update.quantity:
        raise HTTPException(status_code=400, detail="Not enough stock")
    
    # Actualizar la cantidad
    cart_item.quantity = item_update.quantity
    db.commit()
    db.refresh(cart_item)
    return cart_item

@router.delete("/items/{item_id}", status_code=status.HTTP_204_NO_CONTENT)
def remove_item_from_cart(
    item_id: int,
    current_user: User = Depends(get_current_active_user),
    db: Session = Depends(get_db)
):
    # Obtener el carrito del usuario
    cart = db.query(Cart).filter(Cart.user_id == current_user.id).first()
    if not cart:
        raise HTTPException(status_code=404, detail="Cart not found")
    
    # Obtener el item del carrito
    cart_item = db.query(CartItem).filter(
        CartItem.id == item_id,
        CartItem.cart_id == cart.id
    ).first()
    if not cart_item:
        raise HTTPException(status_code=404, detail="Cart item not found")
    
    # Eliminar el item
    db.delete(cart_item)
    db.commit()
    return None

@router.delete("/", status_code=status.HTTP_204_NO_CONTENT)
def clear_cart(
    current_user: User = Depends(get_current_active_user),
    db: Session = Depends(get_db)
):
    # Obtener el carrito del usuario
    cart = db.query(Cart).filter(Cart.user_id == current_user.id).first()
    if not cart:
        raise HTTPException(status_code=404, detail="Cart not found")
    
    # Eliminar todos los items del carrito
    db.query(CartItem).filter(CartItem.cart_id == cart.id).delete()
    db.commit()
    return None 