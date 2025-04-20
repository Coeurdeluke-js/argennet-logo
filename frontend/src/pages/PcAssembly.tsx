import React, { useState } from 'react';
import { FaTools, FaCheck, FaClock, FaShieldAlt, FaWrench, FaCog } from 'react-icons/fa';

interface AssemblyStep {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const assemblySteps: AssemblyStep[] = [
  {
    title: 'Diagnóstico Inicial',
    description: 'Evaluamos tus necesidades y requerimientos específicos para recomendar la mejor configuración.',
    icon: <FaTools className="w-6 h-6" />
  },
  {
    title: 'Selección de Componentes',
    description: 'Elegimos los componentes más adecuados según tu presupuesto y necesidades.',
    icon: <FaCog className="w-6 h-6" />
  },
  {
    title: 'Armado Profesional',
    description: 'Realizamos el armado con los más altos estándares de calidad y cuidado.',
    icon: <FaWrench className="w-6 h-6" />
  },
  {
    title: 'Pruebas y Optimización',
    description: 'Realizamos pruebas exhaustivas y optimizamos el rendimiento del sistema.',
    icon: <FaCheck className="w-6 h-6" />
  }
];

const serviceFeatures = [
  {
    title: 'Garantía Extendida',
    description: 'Todos nuestros armados incluyen garantía extendida por 12 meses.',
    icon: <FaShieldAlt className="w-6 h-6" />
  },
  {
    title: 'Soporte Técnico',
    description: 'Asistencia técnica post-venta y soporte remoto incluido.',
    icon: <FaTools className="w-6 h-6" />
  },
  {
    title: 'Tiempo de Entrega',
    description: 'Armado y entrega en 48-72 horas hábiles.',
    icon: <FaClock className="w-6 h-6" />
  }
];

function PcAssembly() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    budget: '',
    useCase: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implementar lógica de envío del formulario
    alert('Solicitud enviada con éxito. Nos contactaremos contigo pronto.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-dark mb-4">Servicio de Armado de PC</h1>
          <p className="text-xl text-gray-600">
            Armamos tu PC a medida con los mejores componentes y garantía profesional
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-6">Proceso de Armado</h2>
            <div className="space-y-6">
              {assemblySteps.map((step, index) => (
                <div key={index} className="flex items-start">
                  <div className="text-primary mr-4">
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-6">Beneficios</h2>
            <div className="space-y-6">
              {serviceFeatures.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="text-primary mr-4">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold mb-6">Solicitar Presupuesto</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="input"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="input"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Teléfono *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="input"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                  Presupuesto aproximado
                </label>
                <input
                  type="text"
                  id="budget"
                  name="budget"
                  className="input"
                  value={formData.budget}
                  onChange={handleChange}
                  placeholder="Ej: $150,000 - $200,000"
                />
              </div>
            </div>

            <div>
              <label htmlFor="useCase" className="block text-sm font-medium text-gray-700 mb-2">
                Uso principal de la PC *
              </label>
              <select
                id="useCase"
                name="useCase"
                required
                className="input"
                value={formData.useCase}
                onChange={handleChange}
              >
                <option value="">Selecciona una opción</option>
                <option value="gaming">Gaming</option>
                <option value="trabajo">Trabajo/Ofimática</option>
                <option value="diseño">Diseño/Edición</option>
                <option value="estudio">Estudio</option>
                <option value="otro">Otro</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Mensaje adicional
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="input"
                value={formData.message}
                onChange={handleChange}
                placeholder="Describe tus necesidades específicas o requisitos adicionales"
              />
            </div>

            <div className="text-center">
              <button type="submit" className="btn btn-primary">
                Enviar Solicitud
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PcAssembly; 