import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { Product } from '../models/Product';

dotenv.config();

const sampleProducts = [
  {
    name: 'iPhone 14 Pro',
    description: 'El último iPhone con cámara profesional y pantalla ProMotion',
    price: 999.99,
    category: 'Smartphones',
    imageUrl: 'https://placeholder.co/600x400?text=iPhone+14',
    stock: 15,
    isActive: true
  },
  {
    name: 'Samsung Galaxy S23 Ultra',
    description: 'Smartphone Android premium con S Pen y cámara de 108MP',
    price: 1199.99,
    category: 'Smartphones',
    imageUrl: 'https://placeholder.co/600x400?text=Galaxy+S23',
    stock: 8,
    isActive: true
  },
  {
    name: 'MacBook Pro M2',
    description: 'Laptop Apple con chip M2 y pantalla Retina XDR',
    price: 1499.99,
    category: 'Notebooks',
    imageUrl: 'https://placeholder.co/600x400?text=MacBook+Pro',
    stock: 10,
    isActive: true
  },
  {
    name: 'Dell XPS 15',
    description: 'Laptop premium con Intel Core i9 y RTX 3050 Ti',
    price: 1799.99,
    category: 'Notebooks',
    imageUrl: 'https://placeholder.co/600x400?text=Dell+XPS',
    stock: 5,
    isActive: true
  },
  {
    name: 'Monitor LG 27" 4K',
    description: 'Monitor UHD 4K con HDR y 95% DCI-P3',
    price: 499.99,
    category: 'Monitores',
    imageUrl: 'https://placeholder.co/600x400?text=LG+Monitor',
    stock: 12,
    isActive: true
  },
  {
    name: 'Teclado Mecánico Logitech G Pro',
    description: 'Teclado gaming con switches GX Blue y RGB',
    price: 129.99,
    category: 'Periféricos',
    imageUrl: 'https://placeholder.co/600x400?text=Logitech+Keyboard',
    stock: 20,
    isActive: true
  }
];

async function initDb() {
  try {
    // Conectar a MongoDB
    const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/argennet';
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    // Limpiar la colección de productos
    await Product.deleteMany({});
    console.log('Cleared products collection');

    // Insertar productos de prueba
    await Product.insertMany(sampleProducts);
    console.log('Inserted sample products');

    console.log('Database initialized successfully');
    process.exit(0);
  } catch (error) {
    console.error('Error initializing database:', error);
    process.exit(1);
  }
}

initDb(); 