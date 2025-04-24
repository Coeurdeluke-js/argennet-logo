import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaLaptop, 
  FaDesktop, 
  FaKeyboard, 
  FaHeadset, 
  FaMicrochip, 
  FaNetworkWired,
  FaTools,
  FaServer
} from 'react-icons/fa';

interface Category {
  id: string;
  name: string;
  description: string;
  icon: JSX.Element;
  subcategories: string[];
}

const categories: Category[] = [
  {
    id: 'notebooks',
    name: 'Notebooks',
    description: 'Equipos portátiles para todos los usos',
    icon: <FaLaptop size={24} />,
    subcategories: [
      'Gaming',
      'Trabajo',
      'Estudiantes',
      'Ultrabooks'
    ]
  },
  {
    id: 'pcs',
    name: 'PCs de Escritorio',
    description: 'Computadoras de escritorio y All-in-One',
    icon: <FaDesktop size={24} />,
    subcategories: [
      'Home Office',
      'Gaming',
      'Workstation',
      'All-in-One'
    ]
  },
  {
    id: 'componentes',
    name: 'Componentes',
    description: 'Partes y piezas para tu PC',
    icon: <FaMicrochip size={24} />,
    subcategories: [
      'Procesadores',
      'Placas de Video',
      'Memorias RAM',
      'Almacenamiento'
    ]
  },
  {
    id: 'perifericos',
    name: 'Periféricos',
    description: 'Teclados, mouse, monitores y más',
    icon: <FaKeyboard size={24} />,
    subcategories: [
      'Teclados',
      'Mouse',
      'Monitores',
      'Webcams'
    ]
  },
  {
    id: 'gaming',
    name: 'Gaming',
    description: 'Productos especializados para gamers',
    icon: <FaHeadset size={24} />,
    subcategories: [
      'Auriculares',
      'Sillas Gaming',
      'Controles',
      'Streaming'
    ]
  },
  {
    id: 'hardware-especializado',
    name: 'Hardware Especializado',
    description: 'Componentes para usos específicos',
    icon: <FaServer size={24} />,
    subcategories: [
      'Servidores',
      'Minería',
      'Renderizado',
      'Machine Learning'
    ]
  },
  {
    id: 'redes',
    name: 'Redes',
    description: 'Equipamiento de conectividad',
    icon: <FaNetworkWired size={24} />,
    subcategories: [
      'Routers',
      'Switches',
      'Access Points',
      'Cables'
    ]
  },
  {
    id: 'servicios',
    name: 'Servicios Técnicos',
    description: 'Soporte y mantenimiento profesional',
    icon: <FaTools size={24} />,
    subcategories: [
      'Reparación',
      'Instalación',
      'Mantenimiento',
      'Upgrades'
    ]
  }
];

function Categories() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Categorías</h1>
        <p className="text-gray-600">Explora nuestra amplia gama de productos y servicios</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <div 
            key={category.id} 
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            {/* Contenido principal */}
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-primary">
                  {category.icon}
                </div>
                <h2 className="text-xl font-semibold">{category.name}</h2>
              </div>
              <p className="text-gray-600 text-sm mb-4 min-h-[40px]">
                {category.description}
              </p>
              <div className="space-y-2">
                {category.subcategories.map((sub) => (
                  <Link
                    key={sub}
                    to={`/productos?categoria=${category.id}&subcategoria=${sub.toLowerCase()}`}
                    className="block text-sm text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md px-3 py-2 transition-colors"
                  >
                    {sub}
                  </Link>
                ))}
              </div>
            </div>

            {/* Botón Ver todo */}
            <div className="px-6 pb-6">
              <Link
                to={`/productos?categoria=${category.id}`}
                className="block w-full bg-primary hover:bg-primary-dark text-white text-center py-2 rounded-md transition-colors"
              >
                Ver todo en {category.name}
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-primary/5 rounded-lg p-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">¿Necesitas ayuda para elegir?</h2>
          <p className="text-gray-600 mb-6">
            Nuestro equipo de expertos está disponible para asesorarte en la elección
            de los productos que mejor se adapten a tus necesidades.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contacto" 
              className="w-full sm:w-48 bg-primary hover:bg-primary-dark text-white text-center py-2 rounded-md transition-colors"
            >
              Contactar Asesor
            </Link>
            <Link 
              to="/servicios/armado-pc" 
              className="w-full sm:w-48 border-2 border-primary text-primary hover:bg-primary hover:text-white text-center py-2 rounded-md transition-colors"
            >
              Servicio de Armado
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories; 