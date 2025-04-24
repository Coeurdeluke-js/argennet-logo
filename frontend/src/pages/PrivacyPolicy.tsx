import React from 'react';
import { FaShieldAlt, FaUserLock, FaDatabase, FaCookie } from 'react-icons/fa';

const PrivacyPolicy = () => {
  const sections = [
    {
      icon: <FaShieldAlt className="text-3xl text-primary" />,
      title: 'Protección de Datos',
      content: `
        En ArgenNet nos comprometemos a proteger la privacidad de nuestros usuarios. 
        Recopilamos y procesamos datos personales de acuerdo con la Ley de Protección 
        de Datos Personales (Ley 25.326) y demás normativa aplicable.
      `
    },
    {
      icon: <FaUserLock className="text-3xl text-primary" />,
      title: 'Información que Recolectamos',
      content: `
        • Datos de registro: nombre, email, teléfono
        • Información de compras y pedidos
        • Datos de facturación y envío
        • Historial de servicios técnicos
        • Preferencias y configuraciones
        • Información técnica del dispositivo
      `
    },
    {
      icon: <FaDatabase className="text-3xl text-primary" />,
      title: 'Uso de la Información',
      content: `
        Utilizamos la información recopilada para:
        • Procesar pedidos y transacciones
        • Brindar soporte técnico
        • Mejorar nuestros productos y servicios
        • Enviar comunicaciones relevantes
        • Prevenir fraudes y actividades ilícitas
        • Cumplir con obligaciones legales
      `
    },
    {
      icon: <FaCookie className="text-3xl text-primary" />,
      title: 'Cookies y Tecnologías Similares',
      content: `
        Utilizamos cookies y tecnologías similares para:
        • Mantener tu sesión activa
        • Recordar tus preferencias
        • Analizar el uso del sitio
        • Personalizar contenido
        • Mejorar la experiencia de usuario
      `
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">Política de Privacidad</h1>
          <p className="text-xl text-gray-600">
            Tu privacidad es importante para nosotros. Esta política describe cómo 
            recopilamos, usamos y protegemos tu información personal.
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-12">
          {sections.map((section, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                  {section.icon}
                </div>
                <h2 className="text-2xl font-bold">{section.title}</h2>
              </div>
              <div className="prose max-w-none">
                {section.content.split('\n').map((line, i) => (
                  <p key={i} className="text-gray-600 whitespace-pre-line">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Derechos del Usuario */}
        <div className="mt-12 bg-primary/5 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Tus Derechos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">Derecho de Acceso</h3>
              <p className="text-gray-600">
                Puedes solicitar información sobre los datos personales que tenemos sobre ti.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Derecho de Rectificación</h3>
              <p className="text-gray-600">
                Puedes solicitar la corrección de datos inexactos o incompletos.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Derecho de Cancelación</h3>
              <p className="text-gray-600">
                Puedes solicitar la eliminación de tus datos personales.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Derecho de Oposición</h3>
              <p className="text-gray-600">
                Puedes oponerte al tratamiento de tus datos personales.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold mb-4">¿Tienes preguntas sobre tu privacidad?</h2>
          <p className="text-gray-600 mb-6">
            Contáctanos para cualquier consulta relacionada con el tratamiento de tus datos personales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:privacidad@argennet.com.ar" className="btn btn-primary">
              Contactar al Oficial de Privacidad
            </a>
            <a href="/preguntas-frecuentes" className="btn btn-outline">
              Ver Preguntas Frecuentes
            </a>
          </div>
        </div>

        {/* Última actualización */}
        <div className="mt-12 text-center text-gray-500">
          <p>Última actualización: {new Date().toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy; 