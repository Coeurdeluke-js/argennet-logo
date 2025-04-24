import React from 'react';
import { FaFileContract, FaShieldAlt, FaUserLock, FaShoppingCart, FaTruck, FaUndo } from 'react-icons/fa';

const TermsAndConditions = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Términos y Condiciones</h1>
        
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-8">
              Última actualización: {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <FaFileContract className="text-primary mr-2" />
                1. Introducción
              </h2>
              <p className="text-gray-700 mb-4">
                Bienvenido a ArgenNet. Al acceder y utilizar nuestro sitio web y servicios, 
                aceptas estar sujeto a estos términos y condiciones. Por favor, léelos 
                cuidadosamente antes de proceder con cualquier compra o uso de nuestros servicios.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <FaShieldAlt className="text-primary mr-2" />
                2. Uso del Sitio
              </h2>
              <p className="text-gray-700 mb-4">
                El sitio web de ArgenNet está destinado únicamente para uso personal y no 
                comercial. No está permitido modificar, copiar, distribuir, transmitir, 
                mostrar, realizar, reproducir, publicar, licenciar, crear trabajos derivados, 
                transferir o vender cualquier información obtenida de este sitio web.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <FaUserLock className="text-primary mr-2" />
                3. Privacidad y Datos Personales
              </h2>
              <p className="text-gray-700 mb-4">
                Tu privacidad es importante para nosotros. Al utilizar nuestros servicios, 
                aceptas que ArgenNet puede recopilar, usar y divulgar tu información personal 
                de acuerdo con nuestra Política de Privacidad. Nos comprometemos a proteger 
                tus datos personales y a utilizarlos solo para los fines especificados.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <FaShoppingCart className="text-primary mr-2" />
                4. Compras y Pagos
              </h2>
              <div className="space-y-4">
                <p className="text-gray-700">
                  Al realizar una compra en nuestro sitio, aceptas:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Proporcionar información precisa y completa</li>
                  <li>Ser mayor de 18 años o tener autorización de un tutor</li>
                  <li>Pagar todos los cargos aplicables</li>
                  <li>Aceptar nuestros métodos de pago disponibles</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <FaTruck className="text-primary mr-2" />
                5. Envíos y Entregas
              </h2>
              <p className="text-gray-700 mb-4">
                Nos esforzamos por entregar los productos en el tiempo estimado. Sin embargo, 
                los tiempos de entrega pueden variar según la ubicación y el método de envío 
                seleccionado. No nos hacemos responsables por retrasos en la entrega que estén 
                fuera de nuestro control.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <FaUndo className="text-primary mr-2" />
                6. Devoluciones y Reembolsos
              </h2>
              <div className="space-y-4">
                <p className="text-gray-700">
                  Aceptamos devoluciones dentro de los siguientes plazos:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>30 días para productos sin uso y en su empaque original</li>
                  <li>15 días para productos con defectos de fábrica</li>
                  <li>7 días para productos en oferta o liquidación</li>
                </ul>
                <p className="text-gray-700">
                  Los reembolsos se procesarán dentro de los 15 días hábiles siguientes a 
                  la recepción del producto devuelto.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">7. Limitación de Responsabilidad</h2>
              <p className="text-gray-700 mb-4">
                ArgenNet no será responsable por daños indirectos, incidentales, especiales 
                o consecuentes que resulten del uso o la imposibilidad de usar nuestros 
                servicios.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">8. Modificaciones</h2>
              <p className="text-gray-700 mb-4">
                Nos reservamos el derecho de modificar estos términos y condiciones en 
                cualquier momento. Los cambios entrarán en vigor inmediatamente después de 
                su publicación en el sitio web.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">9. Contacto</h2>
              <p className="text-gray-700 mb-4">
                Si tienes alguna pregunta sobre estos términos y condiciones, por favor 
                contáctanos a través de nuestro formulario de contacto o envíanos un 
                correo electrónico a legal@argennet.com.ar
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions; 