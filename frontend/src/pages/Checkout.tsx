import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface ShippingAddress {
  fullName: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  phone: string;
}

interface PaymentMethod {
  cardNumber: string;
  cardHolder: string;
  expiryDate: string;
  cvv: string;
}

const Checkout: React.FC = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [shippingAddress, setShippingAddress] = useState<ShippingAddress>({
    fullName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    phone: '',
  });
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>({
    cardNumber: '',
    cardHolder: '',
    expiryDate: '',
    cvv: '',
  });

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const handlePaymentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          shipping_address: `${shippingAddress.address}, ${shippingAddress.city}, ${shippingAddress.state} ${shippingAddress.zipCode}`,
          payment_method: 'credit_card',
        }),
      });

      if (!response.ok) {
        throw new Error('Error al procesar el pedido');
      }

      const order = await response.json();
      navigate(`/orders/${order.id}`);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-heading font-bold mb-8">Checkout</h1>

      <div className="flex mb-8">
        <div className={`flex-1 text-center ${step === 1 ? 'text-primary' : ''}`}>
          <span className="inline-block w-8 h-8 rounded-full bg-primary text-white mb-2">1</span>
          <p>Dirección de Envío</p>
        </div>
        <div className={`flex-1 text-center ${step === 2 ? 'text-primary' : ''}`}>
          <span className="inline-block w-8 h-8 rounded-full bg-gray-300 text-white mb-2">2</span>
          <p>Método de Pago</p>
        </div>
      </div>

      {step === 1 ? (
        <form onSubmit={handleShippingSubmit} className="max-w-lg mx-auto">
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="fullName">
              Nombre Completo
            </label>
            <input
              type="text"
              id="fullName"
              value={shippingAddress.fullName}
              onChange={(e) => setShippingAddress({ ...shippingAddress, fullName: e.target.value })}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="address">
              Dirección
            </label>
            <input
              type="text"
              id="address"
              value={shippingAddress.address}
              onChange={(e) => setShippingAddress({ ...shippingAddress, address: e.target.value })}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="city">
                Ciudad
              </label>
              <input
                type="text"
                id="city"
                value={shippingAddress.city}
                onChange={(e) => setShippingAddress({ ...shippingAddress, city: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="state">
                Estado/Provincia
              </label>
              <input
                type="text"
                id="state"
                value={shippingAddress.state}
                onChange={(e) => setShippingAddress({ ...shippingAddress, state: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="zipCode">
                Código Postal
              </label>
              <input
                type="text"
                id="zipCode"
                value={shippingAddress.zipCode}
                onChange={(e) => setShippingAddress({ ...shippingAddress, zipCode: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="phone">
                Teléfono
              </label>
              <input
                type="tel"
                id="phone"
                value={shippingAddress.phone}
                onChange={(e) => setShippingAddress({ ...shippingAddress, phone: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 px-4 rounded-lg transition-colors"
          >
            Continuar al Pago
          </button>
        </form>
      ) : (
        <form onSubmit={handlePaymentSubmit} className="max-w-lg mx-auto">
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="cardNumber">
              Número de Tarjeta
            </label>
            <input
              type="text"
              id="cardNumber"
              value={paymentMethod.cardNumber}
              onChange={(e) => setPaymentMethod({ ...paymentMethod, cardNumber: e.target.value })}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="cardHolder">
              Titular de la Tarjeta
            </label>
            <input
              type="text"
              id="cardHolder"
              value={paymentMethod.cardHolder}
              onChange={(e) => setPaymentMethod({ ...paymentMethod, cardHolder: e.target.value })}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="expiryDate">
                Fecha de Vencimiento
              </label>
              <input
                type="text"
                id="expiryDate"
                value={paymentMethod.expiryDate}
                onChange={(e) => setPaymentMethod({ ...paymentMethod, expiryDate: e.target.value })}
                placeholder="MM/YY"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="cvv">
                CVV
              </label>
              <input
                type="text"
                id="cvv"
                value={paymentMethod.cvv}
                onChange={(e) => setPaymentMethod({ ...paymentMethod, cvv: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
          </div>

          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 px-4 rounded-lg transition-colors"
            >
              Volver
            </button>
            <button
              type="submit"
              className="flex-1 bg-primary hover:bg-primary-dark text-white font-bold py-3 px-4 rounded-lg transition-colors"
            >
              Finalizar Compra
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Checkout; 