import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const faqItems: FAQItem[] = [
    {
      category: 'compras',
      question: '¿Cómo realizo una compra en la tienda online?',
      answer: 'Para realizar una compra, simplemente navega por nuestro catálogo, selecciona los productos que deseas y agrégalos al carrito. Luego, procede al checkout donde podrás elegir el método de pago y envío. Recibirás una confirmación por email una vez completada la compra.'
    },
    {
      category: 'compras',
      question: '¿Qué métodos de pago aceptan?',
      answer: 'Aceptamos múltiples formas de pago: tarjetas de crédito (Visa, Mastercard, American Express), Mercado Pago, transferencia bancaria y pago en efectivo a través de diversos medios.'
    },
    {
      category: 'envios',
      question: '¿Cuánto tarda en llegar mi pedido?',
      answer: 'Los tiempos de entrega varían según tu ubicación. Para CABA y GBA el tiempo estimado es de 24-48 horas. Para el interior del país, entre 3-7 días hábiles. Podrás hacer seguimiento de tu pedido a través de nuestra web.'
    },
    {
      category: 'envios',
      question: '¿Realizan envíos a todo el país?',
      answer: 'Sí, realizamos envíos a todo el territorio argentino a través de empresas de logística confiables. Los costos y tiempos varían según la localidad de destino.'
    },
    {
      category: 'garantias',
      question: '¿Qué garantía tienen los productos?',
      answer: 'Todos nuestros productos cuentan con garantía oficial del fabricante por 12 meses. Además, ofrecemos 30 días de garantía de satisfacción con posibilidad de cambio o devolución.'
    },
    {
      category: 'garantias',
      question: '¿Cómo gestiono una garantía?',
      answer: 'Para gestionar una garantía, contacta a nuestro servicio técnico a través del formulario en la sección de Garantías o llamando al 0800-555-1234. Te guiaremos en todo el proceso.'
    },
    {
      category: 'servicios',
      question: '¿Qué servicios técnicos ofrecen?',
      answer: 'Ofrecemos una amplia gama de servicios técnicos: reparación de equipos, mantenimiento preventivo, instalación de software, recuperación de datos, armado de PC y más.'
    },
    {
      category: 'servicios',
      question: '¿Cómo solicito un servicio técnico?',
      answer: 'Puedes solicitar un servicio técnico a través de nuestro formulario online en la sección de Servicios, llamando al 0800-555-1234 o visitando cualquiera de nuestras sucursales.'
    }
  ];

  const categories = [
    { id: 'all', name: 'Todas las Preguntas' },
    { id: 'compras', name: 'Compras' },
    { id: 'envios', name: 'Envíos' },
    { id: 'garantias', name: 'Garantías' },
    { id: 'servicios', name: 'Servicios Técnicos' }
  ];

  const filteredFAQs = activeCategory === 'all' 
    ? faqItems 
    : faqItems.filter(item => item.category === activeCategory);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-6">Preguntas Frecuentes</h1>
          <p className="text-xl text-gray-600">
            Encuentra respuestas a las preguntas más comunes sobre nuestros productos y servicios.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full transition-colors ${
                activeCategory === category.id
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {filteredFAQs.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <span className="font-semibold">{item.question}</span>
                {activeIndex === index ? (
                  <FaChevronUp className="text-primary" />
                ) : (
                  <FaChevronDown className="text-gray-400" />
                )}
              </button>
              {activeIndex === index && (
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-12 text-center bg-primary/5 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">¿No encontraste lo que buscabas?</h2>
          <p className="text-gray-600 mb-6">
            Nuestro equipo de atención al cliente está disponible para ayudarte.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0800-555-1234" className="btn btn-primary">
              Llamar al 0800-555-1234
            </a>
            <a href="mailto:contacto@argennet.com.ar" className="btn btn-outline">
              Enviar Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ; 