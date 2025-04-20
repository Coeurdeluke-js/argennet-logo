import express from 'express';
import { Order } from '../models/Order';
import { Product } from '../models/Product';
import { authenticateToken } from '../middleware/auth';

const router = express.Router();

// Get all orders for the authenticated user
router.get('/', authenticateToken, async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id })
      .populate('items.product')
      .sort({ createdAt: -1 });
    res.json(orders);
  } catch (error) {
    console.error('Error al obtener órdenes:', error);
    res.status(500).json({ message: 'Error al obtener las órdenes' });
  }
});

// Get a specific order by ID
router.get('/:id', authenticateToken, async (req, res) => {
  try {
    const order = await Order.findOne({
      _id: req.params.id,
      user: req.user._id
    }).populate('items.product');

    if (!order) {
      return res.status(404).json({ message: 'Orden no encontrada' });
    }

    res.json(order);
  } catch (error) {
    console.error('Error al obtener la orden:', error);
    res.status(500).json({ message: 'Error al obtener la orden' });
  }
});

// Create a new order
router.post('/', authenticateToken, async (req, res) => {
  try {
    const {
      items,
      shippingAddress,
      paymentMethod
    } = req.body;

    // Validate items and calculate total
    let totalAmount = 0;
    const orderItems = [];

    for (const item of items) {
      const product = await Product.findById(item.product);
      if (!product) {
        return res.status(400).json({
          message: `Producto no encontrado: ${item.product}`
        });
      }

      if (product.stock < item.quantity) {
        return res.status(400).json({
          message: `Stock insuficiente para ${product.name}`
        });
      }

      orderItems.push({
        product: item.product,
        quantity: item.quantity,
        price: product.price
      });

      totalAmount += product.price * item.quantity;

      // Update product stock
      await Product.findByIdAndUpdate(item.product, {
        $inc: { stock: -item.quantity }
      });
    }

    const order = new Order({
      user: req.user._id,
      items: orderItems,
      totalAmount,
      shippingAddress,
      paymentMethod,
      status: 'pending',
      paymentStatus: 'pending'
    });

    await order.save();

    res.status(201).json(order);
  } catch (error) {
    console.error('Error al crear la orden:', error);
    res.status(500).json({ message: 'Error al crear la orden' });
  }
});

// Update order status (Admin only)
router.patch('/:id/status', authenticateToken, async (req, res) => {
  try {
    const { status } = req.body;
    
    if (!req.user.isAdmin) {
      return res.status(403).json({ message: 'No autorizado' });
    }

    const order = await Order.findById(req.params.id);
    if (!order) {
      return res.status(404).json({ message: 'Orden no encontrada' });
    }

    order.status = status;
    await order.save();

    res.json(order);
  } catch (error) {
    console.error('Error al actualizar el estado de la orden:', error);
    res.status(500).json({ message: 'Error al actualizar el estado de la orden' });
  }
});

// Cancel order
router.patch('/:id/cancel', authenticateToken, async (req, res) => {
  try {
    const order = await Order.findOne({
      _id: req.params.id,
      user: req.user._id,
      status: 'pending'
    });

    if (!order) {
      return res.status(404).json({
        message: 'Orden no encontrada o no puede ser cancelada'
      });
    }

    // Restore product stock
    for (const item of order.items) {
      await Product.findByIdAndUpdate(item.product, {
        $inc: { stock: item.quantity }
      });
    }

    order.status = 'cancelled';
    await order.save();

    res.json(order);
  } catch (error) {
    console.error('Error al cancelar la orden:', error);
    res.status(500).json({ message: 'Error al cancelar la orden' });
  }
});

export default router; 