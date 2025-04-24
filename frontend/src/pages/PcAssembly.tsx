import React, { useState } from 'react';
import { FaDesktop, FaMicrochip, FaMemory, FaHdd, FaBolt, FaFan, FaTools, FaCheckCircle } from 'react-icons/fa';

interface BuildOption {
  id: string;
  title: string;
  description: string;
  price: string;
  specs: string[];
  recommended: string;
}

const PcAssembly = () => {
  const [selectedBuild, setSelectedBuild] = useState<string | null>(null);

  const buildOptions: BuildOption[] = [
    {
      id: 'home',
      title: 'PC Home & Office',
      description: 'Perfecta para trabajo y uso diario',
      price: 'Desde $250.000',
      specs: [
        'Procesador Intel Core i3/Ryzen 3',
        'RAM 8GB DDR4',
        'SSD 240GB',
        'Gabinete con flujo de aire optimizado',
        'Fuente certificada 500W'
      ],
      recommended: 'Ideal para: Ofimática, navegación, streaming'
    },
    {
      id: 'gaming',
      title: 'PC Gaming',
      description: 'Configurada para gaming de alto rendimiento',
      price: 'Desde $650.000',
      specs: [
        'Procesador Intel Core i5/Ryzen 5',
        'RAM 16GB DDR4',
        'SSD 500GB + HDD 1TB',
        'Placa de video RTX 3060',
        'Fuente certificada 650W'
      ],
      recommended: 'Ideal para: Gaming 1080p/1440p, streaming, edición'
    },
    {
      id: 'workstation',
      title: 'Workstation Pro',
      description: 'Máximo rendimiento para profesionales',
      price: 'Desde $950.000',
      specs: [
        'Procesador Intel Core i7/Ryzen 7',
        'RAM 32GB DDR4',
        'SSD NVMe 1TB + HDD 2TB',
        'Placa de video RTX 4070',
        'Fuente certificada 750W'
      ],
      recommended: 'Ideal para: Renderizado 3D, desarrollo, edición 4K'
    }
  ];

  const benefits = [
    {
      icon: <FaTools className="text-3xl text-primary" />,
      title: 'Armado Profesional',
      description: 'Técnicos certificados con años de experiencia'
    },
    {
      icon: <FaCheckCircle className="text-3xl text-primary" />,
      title: 'Garantía Total',
      description: '12 meses de garantía en partes y armado'
    },
    {
      icon: <FaBolt className="text-3xl text-primary" />,
      title: 'Testing Completo',
      description: 'Pruebas de estabilidad y rendimiento'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">Armado de PC a Medida</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Configuramos la PC perfecta para tus necesidades. Componentes de primera calidad, 
            armado profesional y garantía completa.
          </p>
        </div>

        {/* Build Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {buildOptions.map((option) => (
            <div 
              key={option.id}
              className={`bg-white rounded-lg shadow-md p-6 border-2 transition-all cursor-pointer
                ${selectedBuild === option.id ? 'border-primary scale-105' : 'border-transparent hover:border-primary/50'}
              `}
              onClick={() => setSelectedBuild(option.id)}
            >
              <h2 className="text-2xl font-bold mb-2">{option.title}</h2>
              <p className="text-gray-600 mb-4">{option.description}</p>
              <p className="text-xl font-bold text-primary mb-4">{option.price}</p>
              <ul className="space-y-2 mb-4">
                {option.specs.map((spec, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    {spec}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-gray-500">{option.recommended}</p>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-primary/5 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">¿Por qué elegir nuestro servicio?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">¿Listo para armar tu PC?</h2>
          <p className="text-gray-600 mb-6">
            Nuestros expertos te ayudarán a elegir los mejores componentes para tu presupuesto.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contacto" className="btn btn-primary">
              Solicitar Presupuesto
            </a>
            <a href="/productos" className="btn btn-outline">
              Ver Componentes
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PcAssembly; 