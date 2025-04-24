import React from 'react';
import { FaTimes, FaBuilding, FaChartLine, FaCheckCircle } from 'react-icons/fa';

interface SuccessCase {
  id: number;
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  image: string;
}

interface SuccessCasesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const successCases: SuccessCase[] = [
  {
    id: 1,
    company: 'Empresa Financiera XYZ',
    industry: 'Finanzas',
    challenge: 'Necesitaban modernizar su infraestructura IT para mejorar la seguridad y eficiencia operativa.',
    solution: 'Implementamos una solución integral que incluyó migración a la nube, seguridad perimetral y capacitación del personal.',
    results: [
      'Reducción del 40% en tiempo de respuesta de sistemas',
      'Mejora del 60% en seguridad de datos',
      'Ahorro del 25% en costos operativos'
    ],
    image: '/images/success-cases/finance-company.jpg'
  },
  {
    id: 2,
    company: 'Retail ABC',
    industry: 'Comercio Minorista',
    challenge: 'Buscaban optimizar su red de tiendas con un sistema de gestión centralizado.',
    solution: 'Desarrollamos una solución de red empresarial con gestión centralizada y monitoreo en tiempo real.',
    results: [
      'Integración exitosa de 15 sucursales',
      'Mejora del 35% en eficiencia operativa',
      'Reducción del 20% en costos de mantenimiento'
    ],
    image: '/images/success-cases/retail-company.jpg'
  },
  {
    id: 3,
    company: 'Industria Tecnológica DEF',
    industry: 'Tecnología',
    challenge: 'Requerían una solución de ciberseguridad robusta para proteger su propiedad intelectual.',
    solution: 'Implementamos un sistema de seguridad multicapa con firewalls avanzados y detección de amenazas.',
    results: [
      'Eliminación del 99% de intentos de acceso no autorizado',
      'Cumplimiento de normativas internacionales',
      'Mejora del 50% en tiempo de respuesta a incidentes'
    ],
    image: '/images/success-cases/tech-company.jpg'
  }
];

const SuccessCasesModal: React.FC<SuccessCasesModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Casos de Éxito</h2>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              <FaTimes className="text-xl" />
            </button>
          </div>
          
          <div className="space-y-8">
            {successCases.map(case_ => (
              <div key={case_.id} className="bg-gray-50 rounded-lg p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <div className="h-48 bg-gray-200 rounded-lg overflow-hidden">
                      <img 
                        src={case_.image} 
                        alt={case_.company} 
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = 'https://via.placeholder.com/400x300?text=Imagen+no+disponible';
                        }}
                      />
                    </div>
                  </div>
                  
                  <div className="md:w-2/3">
                    <div className="flex items-center mb-2">
                      <FaBuilding className="text-primary mr-2" />
                      <h3 className="text-xl font-bold">{case_.company}</h3>
                    </div>
                    <p className="text-gray-600 mb-2">{case_.industry}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-bold mb-1">Desafío:</h4>
                      <p className="text-gray-700">{case_.challenge}</p>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-bold mb-1">Solución:</h4>
                      <p className="text-gray-700">{case_.solution}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-bold mb-2">Resultados:</h4>
                      <ul className="space-y-2">
                        {case_.results.map((result, index) => (
                          <li key={index} className="flex items-start">
                            <FaCheckCircle className="text-primary mt-1 mr-2 flex-shrink-0" />
                            <span className="text-gray-700">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <button 
              onClick={onClose}
              className="btn btn-primary"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessCasesModal; 