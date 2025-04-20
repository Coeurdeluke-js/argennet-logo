import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import { FaShoppingCart } from 'react-icons/fa';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Argennet Logo" className="h-12 w-auto" />
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary">
              Inicio
            </Link>
            <Link to="/products" className="text-gray-700 hover:text-primary">
              Productos
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-primary">
              Nosotros
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-primary">
              Contacto
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link to="/cart" className="relative">
              <FaShoppingCart className="h-6 w-6 text-gray-700 hover:text-primary" />
              <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Link>
            <Link
              to="/login"
              className="hidden md:inline-block text-gray-700 hover:text-primary"
            >
              Iniciar Sesión
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 