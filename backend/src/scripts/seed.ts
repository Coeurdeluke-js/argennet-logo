import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { Product } from '../models/Product';

dotenv.config();

const products = [
  {
    name: 'Notebook Lenovo ThinkPad X1',
    description: 'Potente notebook para profesionales con procesador Intel i7',
    price: 1299.99,
    category: 'Notebooks',
    imageUrl: 'https://placehold.co/600x400?text=ThinkPad+X1',
    stock: 10,
    isActive: true,
  },
  {
    name: 'iPhone 14 Pro',
    description: 'El último iPhone con cámara profesional y pantalla ProMotion',
    price: 999.99,
    category: 'Smartphones',
    imageUrl: 'https://placehold.co/600x400?text=iPhone+14',
    stock: 15,
    isActive: true,
  },
  {
    name: 'Samsung Galaxy S23 Ultra',
    description: 'Smartphone Android premium con S Pen y cámara de 108MP',
    price: 1199.99,
    category: 'Smartphones',
    imageUrl: 'https://placehold.co/600x400?text=Galaxy+S23',
    stock: 8,
    isActive: true,
  },
  {
    name: 'MacBook Pro M2',
    description: 'Laptop Apple con chip M2 y pantalla Retina XDR',
    price: 1499.99,
    category: 'Notebooks',
    imageUrl: 'https://placehold.co/600x400?text=MacBook+Pro',
    stock: 5,
    isActive: true,
  }
];

async function seedDatabase() {
  try {
    const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/argennet';
    
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    // Limpiar la colección de productos
    await Product.deleteMany({});
    console.log('Productos anteriores eliminados');

    // Insertar nuevos productos
    await Product.insertMany(products);
    console.log('Productos de prueba insertados correctamente');

    await mongoose.connection.close();
    console.log('Conexión a MongoDB cerrada');
    
    process.exit(0);
  } catch (error) {
    console.error('Error al poblar la base de datos:', error);
    process.exit(1);
  }
}

seedDatabase(); 