import React, { useState } from 'react';
import { FaBuilding, FaServer, FaNetworkWired, FaShieldAlt, FaHeadset, FaChartLine, FaComments, FaStar } from 'react-icons/fa';
import ConsultationModal from '../components/ConsultationModal';
import SuccessCasesModal from '../components/SuccessCasesModal';

const BusinessSolutions = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [isSuccessCasesModalOpen, setIsSuccessCasesModalOpen] = useState(false);

  const services = [
    {
      id: 'infrastructure',
      title: 'Infraestructura IT',
      icon: <FaServer className="text-4xl" />,
      description: 'Soluciones completas de infraestructura tecnológica para tu empresa.',
      features: [
        'Servidores y almacenamiento',
        'Redes empresariales',
        'Sistemas de respaldo',
        'Virtualización',
        'Cloud computing'
      ]
    },
    {
      id: 'security',
      title: 'Ciberseguridad',
      icon: <FaShieldAlt className="text-4xl" />,
      description: 'Protección integral contra amenazas digitales.',
      features: [
        'Firewalls y antivirus empresariales',
        'Seguridad perimetral',
        'Backup y recuperación',
        'Auditorías de seguridad',
        'Cumplimiento normativo'
      ]
    },
    {
      id: 'networking',
      title: 'Redes y Conectividad',
      icon: <FaNetworkWired className="text-4xl" />,
      description: 'Soluciones de red optimizadas para tu negocio.',
      features: [
        'Diseño e implementación de redes',
        'WiFi empresarial',
        'VPN y acceso remoto',
        'Telefonía IP',
        'Monitoreo de red'
      ]
    },
    {
      id: 'support',
      title: 'Soporte Técnico',
      icon: <FaHeadset className="text-4xl" />,
      description: 'Atención técnica especializada para empresas.',
      features: [
        'Soporte 24/7',
        'Mesa de ayuda',
        'Mantenimiento preventivo',
        'Resolución de incidencias',
        'Capacitación de personal'
      ]
    },
    {
      id: 'consulting',
      title: 'Consultoría IT',
      icon: <FaChartLine className="text-4xl" />,
      description: 'Asesoramiento estratégico en tecnología.',
      features: [
        'Análisis de necesidades',
        'Planificación tecnológica',
        'Optimización de procesos',
        'Gestión de proyectos',
        'Auditorías técnicas'
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">Soluciones Empresariales</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transformamos la tecnología en ventajas competitivas para tu empresa. 
            Ofrecemos soluciones integrales adaptadas a las necesidades específicas 
            de tu negocio.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map(service => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => setSelectedService(service.id)}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                  {service.icon}
                </div>
                <h2 className="text-xl font-bold">{service.title}</h2>
              </div>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="bg-primary/5 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">¿Necesitas una solución personalizada?</h2>
          <p className="text-gray-600 mb-6">
            Nuestro equipo de expertos está listo para ayudarte a encontrar la mejor 
            solución para tu empresa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mt-8">
            <button
              className="btn btn-primary"
              onClick={() => setIsConsultationModalOpen(true)}
            >
              <FaComments className="mr-2" />
              Solicitar Consulta
            </button>
            <button
              className="btn btn-outline"
              onClick={() => setIsSuccessCasesModalOpen(true)}
            >
              <FaStar className="mr-2" />
              Ver Casos de Éxito
            </button>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8 text-center">¿Por qué elegir nuestras soluciones empresariales?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaBuilding className="text-2xl text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Experiencia Comprobada</h3>
              <p className="text-gray-600">
                Más de 10 años brindando soluciones tecnológicas a empresas de diversos sectores.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaShieldAlt className="text-2xl text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Garantía de Calidad</h3>
              <p className="text-gray-600">
                Trabajamos con las mejores marcas y garantizamos la calidad de nuestros servicios.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHeadset className="text-2xl text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Soporte Dedicado</h3>
              <p className="text-gray-600">
                Equipo de soporte especializado disponible para resolver tus necesidades.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      <ConsultationModal 
        isOpen={isConsultationModalOpen} 
        onClose={() => setIsConsultationModalOpen(false)} 
      />
      
      <SuccessCasesModal 
        isOpen={isSuccessCasesModalOpen} 
        onClose={() => setIsSuccessCasesModalOpen(false)} 
      />
    </div>
  );
};

export default BusinessSolutions; 