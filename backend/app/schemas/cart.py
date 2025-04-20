from pydantic import BaseModel, Field
from typing import Optional, List
from datetime import datetime

class CartItemBase(BaseModel):
    product_id: int
    quantity: int = Field(gt=0)

class CartItemCreate(CartItemBase):
    pass

class CartItemUpdate(BaseModel):
    quantity: int = Field(gt=0)

class CartItemInDB(CartItemBase):
    id: int
    cart_id: int
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True

class CartItem(CartItemBase):
    id: int
    product_name: str
    product_price: float
    total_price: float
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True

class CartBase(BaseModel):
    user_id: int

class CartCreate(CartBase):
    pass

class CartInDB(CartBase):
    id: int
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True

class Cart(CartBase):
    id: int
    items: List[CartItem] = []
    total_price: float = 0.0
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True 