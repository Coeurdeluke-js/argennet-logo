import React from 'react';
import { FaCheckCircle, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

interface AddToCartModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
}

const AddToCartModal: React.FC<AddToCartModalProps> = ({ isOpen, onClose, productName }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 transform transition-all">
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <FaTimes className="w-5 h-5" />
          </button>
        </div>
        
        <div className="text-center mb-6">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
            <FaCheckCircle className="h-6 w-6 text-green-600" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            ¡Producto agregado al carrito!
          </h3>
          <p className="text-sm text-gray-500">
            {productName} ha sido agregado a tu carrito de compras
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2 text-sm font-medium text-primary bg-primary/10 rounded-md hover:bg-primary/20 transition-colors"
          >
            Seguir comprando
          </button>
          <Link
            to="/carrito"
            className="flex-1 px-4 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-primary-dark transition-colors text-center"
          >
            Ver carrito
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AddToCartModal; 