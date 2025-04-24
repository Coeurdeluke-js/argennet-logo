import { useState } from 'react';
import { FaTools, FaLaptop, FaDesktop, FaCog, FaRocket, FaShieldAlt, FaServer, FaWrench, FaExclamationTriangle, FaCalendarAlt } from 'react-icons/fa';

interface Service {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  price: string;
  timeEstimate: string;
}

const services: Service[] = [
  {
    id: 'diagnostico',
    name: 'Diagnóstico Completo',
    description: 'Evaluación exhaustiva de tu equipo para identificar problemas',
    icon: <FaTools className="w-8 h-8" />,
    features: [
      'Análisis de hardware y software',
      'Pruebas de rendimiento',
      'Detección de malware',
      'Informe detallado'
    ],
    price: 'Gratuito',
    timeEstimate: '24 horas'
  },
  {
    id: 'reparacion-notebook',
    name: 'Reparación de Notebooks',
    description: 'Solución de problemas en laptops de todas las marcas',
    icon: <FaLaptop className="w-8 h-8" />,
    features: [
      'Cambio de pantalla',
      'Reparación de teclado',
      'Solución de problemas de energía',
      'Recuperación de datos'
    ],
    price: 'Desde $15.000',
    timeEstimate: '2-5 días'
  },
  {
    id: 'reparacion-pc',
    name: 'Reparación de PCs',
    description: 'Servicio técnico especializado para computadoras de escritorio',
    icon: <FaDesktop className="w-8 h-8" />,
    features: [
      'Reparación de componentes',
      'Actualización de hardware',
      'Limpieza profunda',
      'Optimización de rendimiento'
    ],
    price: 'Desde $12.000',
    timeEstimate: '1-3 días'
  },
  {
    id: 'mantenimiento',
    name: 'Mantenimiento Preventivo',
    description: 'Servicio regular para mantener tu equipo en óptimas condiciones',
    icon: <FaCog className="w-8 h-8" />,
    features: [
      'Limpieza de componentes',
      'Actualización de software',
      'Optimización del sistema',
      'Respaldo de datos'
    ],
    price: 'Desde $8.000',
    timeEstimate: '24 horas'
  },
  {
    id: 'upgrade',
    name: 'Actualización de Hardware',
    description: 'Mejora el rendimiento de tu equipo con nuevos componentes',
    icon: <FaRocket className="w-8 h-8" />,
    features: [
      'Asesoramiento personalizado',
      'Instalación de componentes',
      'Configuración optimizada',
      'Pruebas de rendimiento'
    ],
    price: 'Según componentes',
    timeEstimate: '1-2 días'
  },
  {
    id: 'software',
    name: 'Instalación de Software',
    description: 'Configuración de programas y sistemas operativos',
    icon: <FaShieldAlt className="w-8 h-8" />,
    features: [
      'Instalación de Windows/Linux',
      'Programas específicos',
      'Antivirus y seguridad',
      'Drivers actualizados'
    ],
    price: 'Desde $6.000',
    timeEstimate: '24 horas'
  },
  {
    id: 'empresas',
    name: 'Servicios para Empresas',
    description: 'Soluciones técnicas para negocios y organizaciones',
    icon: <FaServer className="w-8 h-8" />,
    features: [
      'Mantenimiento de redes',
      'Soporte técnico',
      'Servidores y backups',
      'Consultoría IT'
    ],
    price: 'Consultar',
    timeEstimate: 'Personalizado'
  },
  {
    id: 'domicilio',
    name: 'Servicio a Domicilio',
    description: 'Asistencia técnica en tu hogar u oficina',
    icon: <FaWrench className="w-8 h-8" />,
    features: [
      'Atención personalizada',
      'Horarios flexibles',
      'Diagnóstico in situ',
      'Soluciones inmediatas'
    ],
    price: 'Desde $10.000',
    timeEstimate: 'Según disponibilidad'
  }
];

function Services() {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [showEmergencyModal, setShowEmergencyModal] = useState(false);
  const [showRequestModal, setShowRequestModal] = useState(false);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-heading font-bold text-dark mb-4">Servicios Técnicos</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Expertos en reparación y mantenimiento de equipos informáticos.
          Soluciones rápidas y garantizadas para todos tus problemas técnicos.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className={`card hover:shadow-lg transition-all cursor-pointer ${
              selectedService === service.id ? 'ring-2 ring-primary' : ''
            }`}
            onClick={() => setSelectedService(service.id)}
          >
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="text-primary mr-3">
                  {service.icon}
                </div>
                <h2 className="text-xl font-bold">{service.name}</h2>
              </div>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2 mb-4">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="flex justify-between items-center text-sm font-medium">
                <span className="text-primary">{service.price}</span>
                <span className="text-gray-500">Tiempo est.: {service.timeEstimate}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-gray-50 rounded-lg p-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">¿Necesitas ayuda urgente?</h2>
          <p className="text-gray-600 mb-6">
            Contamos con técnicos disponibles para asistencia inmediata.
            También ofrecemos servicios de emergencia 24/7 para casos críticos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mt-6">
            <button
              className="btn btn-primary"
              onClick={() => setShowEmergencyModal(true)}
            >
              <FaExclamationTriangle className="mr-2" />
              Servicio de Emergencia
            </button>
            <button
              className="btn btn-outline"
              onClick={() => setShowRequestModal(true)}
            >
              <FaCalendarAlt className="mr-2" />
              Solicitar Servicio Regular
            </button>
          </div>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center">
          <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <FaShieldAlt className="w-8 h-8 text-primary" />
          </div>
          <h3 className="font-bold mb-2">Garantía de Servicio</h3>
          <p className="text-gray-600">
            Todos nuestros trabajos cuentan con garantía de 90 días
          </p>
        </div>
        <div className="text-center">
          <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <FaTools className="w-8 h-8 text-primary" />
          </div>
          <h3 className="font-bold mb-2">Técnicos Certificados</h3>
          <p className="text-gray-600">
            Personal altamente capacitado y con años de experiencia
          </p>
        </div>
        <div className="text-center">
          <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <FaRocket className="w-8 h-8 text-primary" />
          </div>
          <h3 className="font-bold mb-2">Respuesta Rápida</h3>
          <p className="text-gray-600">
            Atención inmediata y soluciones en el menor tiempo posible
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services; 