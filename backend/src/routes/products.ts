import express from 'express';
import { Product } from '../models/Product';

const router = express.Router();

// Get featured products
router.get('/featured', async (req, res) => {
  try {
    const featuredProducts = await Product.find({ isActive: true })
      .limit(4)
      .select('name price imageUrl description stock category');
    
    res.json(featuredProducts);
  } catch (error) {
    console.error('Error fetching featured products:', error);
    res.status(500).json({ 
      message: 'Error al obtener productos destacados',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

// Get all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find({ isActive: true })
      .select('name price imageUrl description category stock');
    
    if (!products) {
      return res.status(404).json({ message: 'No se encontraron productos' });
    }
    
    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ 
      message: 'Error al obtener productos',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

// Get product by ID
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }
    res.json(product);
  } catch (error) {
    console.error('Error fetching product:', error);
    res.status(500).json({ 
      message: 'Error al obtener el producto',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

// Create new product
router.post('/', async (req, res) => {
  try {
    const { name, description, price, category, imageUrl, stock } = req.body;
    
    const newProduct = new Product({
      name,
      description,
      price,
      category,
      imageUrl,
      stock,
      isActive: true
    });

    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(500).json({ 
      message: 'Error al crear el producto',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

// Update product
router.put('/:id', async (req, res) => {
  try {
    const { name, description, price, category, imageUrl, stock, isActive } = req.body;
    
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        name,
        description,
        price,
        category,
        imageUrl,
        stock,
        isActive
      },
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }

    res.json(updatedProduct);
  } catch (error) {
    console.error('Error updating product:', error);
    res.status(500).json({ 
      message: 'Error al actualizar el producto',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

// Delete product (soft delete)
router.delete('/:id', async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      { isActive: false },
      { new: true }
    );

    if (!product) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }

    res.json({ message: 'Producto eliminado exitosamente' });
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).json({ 
      message: 'Error al eliminar el producto',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

export default router; 