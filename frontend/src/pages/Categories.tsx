import { Link } from 'react-router-dom';
import { FaLaptop, FaDesktop, FaMemory, FaTools, FaKeyboard, FaHeadphones, FaMicrochip, FaNetworkWired } from 'react-icons/fa';

interface Category {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  subcategories: string[];
}

const categories: Category[] = [
  {
    id: 'notebooks',
    name: 'Notebooks',
    description: 'Laptops para gaming, trabajo y estudio',
    icon: <FaLaptop className="w-8 h-8" />,
    subcategories: ['Gaming', 'Trabajo', 'Estudiantes', 'Ultrabooks']
  },
  {
    id: 'pc-escritorio',
    name: 'PCs de Escritorio',
    description: 'Computadoras armadas y a medida',
    icon: <FaDesktop className="w-8 h-8" />,
    subcategories: ['Gaming', 'Oficina', 'Workstation', 'All-in-One']
  },
  {
    id: 'componentes',
    name: 'Componentes',
    description: 'Hardware y repuestos',
    icon: <FaMemory className="w-8 h-8" />,
    subcategories: ['Procesadores', 'Motherboards', 'Memorias RAM', 'Almacenamiento']
  },
  {
    id: 'servicios',
    name: 'Servicios Técnicos',
    description: 'Reparación y mantenimiento',
    icon: <FaTools className="w-8 h-8" />,
    subcategories: ['Reparación PC', 'Reparación Notebook', 'Mantenimiento', 'Upgrades']
  },
  {
    id: 'perifericos',
    name: 'Periféricos',
    description: 'Teclados, mouse, monitores y más',
    icon: <FaKeyboard className="w-8 h-8" />,
    subcategories: ['Teclados', 'Mouse', 'Monitores', 'Webcams']
  },
  {
    id: 'gaming',
    name: 'Gaming',
    description: 'Productos especializados para gamers',
    icon: <FaHeadphones className="w-8 h-8" />,
    subcategories: ['Auriculares', 'Sillas Gaming', 'Controles', 'Streaming']
  },
  {
    id: 'hardware-especial',
    name: 'Hardware Especializado',
    description: 'Componentes para usos específicos',
    icon: <FaMicrochip className="w-8 h-8" />,
    subcategories: ['Servidores', 'Minería', 'Renderizado', 'Machine Learning']
  },
  {
    id: 'redes',
    name: 'Redes',
    description: 'Equipamiento de conectividad',
    icon: <FaNetworkWired className="w-8 h-8" />,
    subcategories: ['Routers', 'Switches', 'Access Points', 'Cables']
  }
];

function Categories() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-heading font-bold text-dark mb-4">Categorías</h1>
        <p className="text-gray-600">Explora nuestra amplia gama de productos y servicios</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <div key={category.id} className="card hover:shadow-lg transition-shadow h-full flex flex-col">
            <div className="p-6 flex-grow">
              <div className="flex items-center mb-4">
                <div className="text-primary mr-3">
                  {category.icon}
                </div>
                <h2 className="text-xl font-bold">{category.name}</h2>
              </div>
              <p className="text-gray-600 mb-4">{category.description}</p>
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
            <div className="px-6 pb-4 mt-auto">
              <Link
                to={`/productos?categoria=${category.id}`}
                className="btn btn-primary w-full text-center"
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
            <Link to="/contacto" className="btn btn-primary">
              Contactar Asesor
            </Link>
            <Link to="/servicios/armado-pc" className="btn btn-secondary">
              Servicio de Armado de PC
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories; 