from pydantic import BaseModel, Field
from typing import Optional, List
from datetime import datetime

class ProductBase(BaseModel):
    name: str
    description: str
    price: float = Field(gt=0)
    stock: int = Field(ge=0)
    category_id: int
    image_url: Optional[str] = None
    is_active: bool = True

class ProductCreate(ProductBase):
    pass

class ProductUpdate(BaseModel):
    name: Optional[str] = None
    description: Optional[str] = None
    price: Optional[float] = Field(None, gt=0)
    stock: Optional[int] = Field(None, ge=0)
    category_id: Optional[int] = None
    image_url: Optional[str] = None
    is_active: Optional[bool] = None

class ProductInDB(ProductBase):
    id: int
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True

class Product(ProductBase):
    id: int
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True 