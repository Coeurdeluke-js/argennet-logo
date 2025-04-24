import React from 'react';
import { FaShieldAlt, FaTools, FaExchangeAlt, FaHeadset, FaClock, FaCheckCircle } from 'react-icons/fa';

const Warranty = () => {
  const warrantyPolicies = [
    {
      title: 'Garantía Estándar',
      description: 'Todos nuestros productos cuentan con garantía de fábrica por 12 meses.',
      icon: <FaShieldAlt className="text-4xl" />,
      details: [
        'Cobertura de defectos de fabricación',
        'Repuestos originales',
        'Servicio técnico autorizado',
        'Documentación completa'
      ]
    },
    {
      title: 'Servicio Técnico',
      description: 'Red de servicio técnico en todo el país con atención personalizada.',
      icon: <FaTools className="text-4xl" />,
      details: [
        'Técnicos certificados',
        'Diagnóstico sin cargo',
        'Repuestos originales',
        'Garantía en reparaciones'
      ]
    },
    {
      title: 'Cambios y Devoluciones',
      description: 'Política flexible de cambios y devoluciones para tu tranquilidad.',
      icon: <FaExchangeAlt className="text-4xl" />,
      details: [
        '30 días para cambios',
        'Devolución del dinero',
        'Sin preguntas',
        'Proceso simplificado'
      ]
    }
  ];

  const serviceProcess = [
    {
      step: 1,
      title: 'Contacto Inicial',
      description: 'Comunícate con nuestro servicio al cliente por teléfono o email.',
      icon: <FaHeadset className="text-2xl" />
    },
    {
      step: 2,
      title: 'Diagnóstico',
      description: 'Nuestros técnicos evaluarán el producto y determinarán la solución.',
      icon: <FaTools className="text-2xl" />
    },
    {
      step: 3,
      title: 'Reparación',
      description: 'Realizamos la reparación con repuestos originales y garantía.',
      icon: <FaCheckCircle className="text-2xl" />
    },
    {
      step: 4,
      title: 'Entrega',
      description: 'Devolvemos el producto reparado y garantizado.',
      icon: <FaClock className="text-2xl" />
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">Garantías y Servicio Post-Venta</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tu tranquilidad es nuestra prioridad. Ofrecemos garantías completas y un servicio 
            post-venta de excelencia para todos nuestros productos.
          </p>
        </div>

        {/* Warranty Policies */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {warrantyPolicies.map((policy, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                  {policy.icon}
                </div>
                <h2 className="text-xl font-bold">{policy.title}</h2>
              </div>
              <p className="text-gray-600 mb-4">{policy.description}</p>
              <ul className="space-y-2">
                {policy.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Service Process */}
        <div className="bg-primary/5 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Proceso de Servicio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceProcess.map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  {step.icon}
                </div>
                <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">¿Necesitas ayuda con tu garantía?</h2>
          <p className="text-gray-600 mb-6">
            Nuestro equipo de servicio al cliente está disponible para ayudarte.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+1234567890" className="btn btn-primary">
              Llamar al Servicio Técnico
            </a>
            <a href="mailto:servicio@argennet.com" className="btn btn-outline">
              Enviar Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Warranty; 