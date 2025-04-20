import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTrash, FaMinus, FaPlus, FaTruck, FaCreditCard, FaShieldAlt } from 'react-icons/fa';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
  stock: number;
  warranty: string;
}

// Datos de ejemplo - En producción vendrían de un contexto o estado global
const initialItems: CartItem[] = [
  {
    id: '1',
    name: 'Notebook Lenovo ThinkPad X1 Carbon',
    price: 850000,
    quantity: 1,
    imageUrl: '/images/products/thinkpad.jpg',
    stock: 5,
    warranty: '12 meses'
  },
  {
    id: '2',
    name: 'Monitor Samsung Odyssey G5 27"',
    price: 180000,
    quantity: 1,
    imageUrl: '/images/products/monitor.jpg',
    stock: 8,
    warranty: '36 meses'
  }
];

function Cart() {
  const [items, setItems] = useState<CartItem[]>(initialItems);
  const [couponCode, setCouponCode] = useState('');
  const [shippingMethod, setShippingMethod] = useState<'standard' | 'express'>('standard');

  const updateQuantity = (id: string, newQuantity: number) => {
    setItems(items.map(item => 
      item.id === id 
        ? { ...item, quantity: Math.min(Math.max(1, newQuantity), item.stock) }
        : item
    ));
  };

  const removeItem = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shippingCost = shippingMethod === 'standard' ? 2500 : 5000;
  const total = subtotal + shippingCost;

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center py-16">
          <h2 className="text-2xl font-bold mb-4">Tu carrito está vacío</h2>
          <p className="text-gray-600 mb-8">¿No sabés qué comprar? ¡Tenemos muchas opciones para vos!</p>
          <Link to="/productos" className="btn btn-primary">
            Ver Productos
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-heading font-bold text-dark mb-8">Carrito de Compras</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Lista de productos */}
        <div className="flex-grow">
          <div className="bg-white rounded-lg shadow-md">
            {items.map(item => (
              <div key={item.id} className="flex flex-col md:flex-row items-center gap-4 p-6 border-b border-gray-200 last:border-b-0">
                <div className="w-24 h-24 bg-gray-100 rounded-lg overflow-hidden">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-grow">
                  <h3 className="font-bold text-lg mb-1">{item.name}</h3>
                  <p className="text-gray-600 text-sm mb-2">Garantía: {item.warranty}</p>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center border rounded-md">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="px-3 py-1 hover:bg-gray-100"
                        disabled={item.quantity <= 1}
                      >
                        <FaMinus className="w-3 h-3" />
                      </button>
                      <span className="px-3 py-1 border-x">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-3 py-1 hover:bg-gray-100"
                        disabled={item.quantity >= item.stock}
                      >
                        <FaPlus className="w-3 h-3" />
                      </button>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold">
                    ${(item.price * item.quantity).toLocaleString('es-AR')}
                  </p>
                  <p className="text-sm text-gray-600">
                    ${item.price.toLocaleString('es-AR')} c/u
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Resumen y checkout */}
        <div className="lg:w-96">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">Resumen de compra</h2>
            
            {/* Envío */}
            <div className="mb-6">
              <h3 className="font-bold mb-3">Método de envío</h3>
              <div className="space-y-2">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="shipping"
                    value="standard"
                    checked={shippingMethod === 'standard'}
                    onChange={() => setShippingMethod('standard')}
                    className="text-primary"
                  />
                  <span>Estándar (3-5 días hábiles)</span>
                  <span className="ml-auto">$2.500</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="shipping"
                    value="express"
                    checked={shippingMethod === 'express'}
                    onChange={() => setShippingMethod('express')}
                    className="text-primary"
                  />
                  <span>Express (24-48 horas)</span>
                  <span className="ml-auto">$5.000</span>
                </label>
              </div>
            </div>

            {/* Cupón */}
            <div className="mb-6">
              <h3 className="font-bold mb-3">Cupón de descuento</h3>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  placeholder="Ingresá tu código"
                  className="input flex-grow"
                />
                <button className="btn btn-secondary">
                  Aplicar
                </button>
              </div>
            </div>

            {/* Totales */}
            <div className="space-y-2 mb-6">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toLocaleString('es-AR')}</span>
              </div>
              <div className="flex justify-between">
                <span>Envío</span>
                <span>${shippingCost.toLocaleString('es-AR')}</span>
              </div>
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>${total.toLocaleString('es-AR')}</span>
              </div>
            </div>

            {/* Botón de checkout */}
            <Link to="/checkout" className="btn btn-primary w-full mb-4">
              Finalizar Compra
            </Link>

            {/* Beneficios */}
            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <FaTruck className="text-primary" />
                <span>Envío gratis en compras mayores a $100.000</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCreditCard className="text-primary" />
                <span>12 cuotas sin interés con tarjetas bancarias</span>
              </div>
              <div className="flex items-center gap-2">
                <FaShieldAlt className="text-primary" />
                <span>Garantía oficial en todos los productos</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart; 