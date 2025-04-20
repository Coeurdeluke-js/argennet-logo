import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">ArgenNet</h3>
            <p className="text-gray-400">
              Tu tienda de tecnología de confianza. Encontrá los mejores productos al mejor precio.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-white transition-colors">
                  Productos
                </Link>
              </li>
              <li>
                <Link to="/cart" className="text-gray-400 hover:text-white transition-colors">
                  Carrito
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Mi Cuenta</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/profile" className="text-gray-400 hover:text-white transition-colors">
                  Mi Perfil
                </Link>
              </li>
              <li>
                <Link to="/orders" className="text-gray-400 hover:text-white transition-colors">
                  Mis Pedidos
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-gray-400 hover:text-white transition-colors">
                  Iniciar Sesión
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Email: info@argennet.com</li>
              <li>Teléfono: (011) 4444-5555</li>
              <li>Dirección: Av. Corrientes 1234, CABA</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} ArgenNet. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 