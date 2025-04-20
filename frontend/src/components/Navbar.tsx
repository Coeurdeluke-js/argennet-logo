import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu } from '@headlessui/react';
import { ShoppingCartIcon, UserIcon } from '@heroicons/react/24/outline';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem('token')
  );

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    navigate('/login');
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-heading font-bold text-primary">
              ArgenNet
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/products"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Productos
            </Link>
            <Link
              to="/cart"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              <ShoppingCartIcon className="h-6 w-6" />
            </Link>

            {isAuthenticated ? (
              <Menu as="div" className="relative">
                <Menu.Button className="flex items-center text-gray-600 hover:text-primary transition-colors">
                  <UserIcon className="h-6 w-6" />
                </Menu.Button>
                <Menu.Items className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="/profile"
                        className={`block px-4 py-2 text-sm ${
                          active ? 'bg-gray-100' : ''
                        }`}
                      >
                        Mi Perfil
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="/orders"
                        className={`block px-4 py-2 text-sm ${
                          active ? 'bg-gray-100' : ''
                        }`}
                      >
                        Mis Pedidos
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={handleLogout}
                        className={`block w-full text-left px-4 py-2 text-sm ${
                          active ? 'bg-gray-100' : ''
                        }`}
                      >
                        Cerrar Sesión
                      </button>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Menu>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  to="/login"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Iniciar Sesión
                </Link>
                <Link
                  to="/register"
                  className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition-colors"
                >
                  Registrarse
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 