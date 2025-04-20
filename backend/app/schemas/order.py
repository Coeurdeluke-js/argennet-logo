from pydantic import BaseModel, Field
from typing import Optional, List
from datetime import datetime
from enum import Enum

class OrderStatus(str, Enum):
    PENDING = "pending"
    PROCESSING = "processing"
    SHIPPED = "shipped"
    DELIVERED = "delivered"
    CANCELLED = "cancelled"

class OrderItemBase(BaseModel):
    product_id: int
    quantity: int = Field(gt=0)
    price: float = Field(gt=0)

class OrderItemCreate(OrderItemBase):
    pass

class OrderItemInDB(OrderItemBase):
    id: int
    order_id: int
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True

class OrderItem(OrderItemBase):
    id: int
    product_name: str
    total_price: float
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True

class OrderBase(BaseModel):
    user_id: int
    status: OrderStatus = OrderStatus.PENDING
    shipping_address: str
    payment_method: str
    total_amount: float = Field(gt=0)

class OrderCreate(OrderBase):
    items: List[OrderItemCreate]

class OrderUpdate(BaseModel):
    status: Optional[OrderStatus] = None
    shipping_address: Optional[str] = None
    payment_method: Optional[str] = None

class OrderInDB(OrderBase):
    id: int
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True

class Order(OrderBase):
    id: int
    items: List[OrderItem] = []
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True 