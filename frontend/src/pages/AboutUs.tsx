import React from 'react';
import { FaUsers, FaHandshake, FaChartLine, FaAward } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Quiénes Somos</h1>
        
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
            <div className="md:w-1/2">
              <img 
                src="/images/about-us.jpg" 
                alt="Equipo ArgenNet" 
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold mb-4">Nuestra Historia</h2>
              <p className="text-gray-700 mb-4">
                ArgenNet nació en 2010 con la misión de acercar la tecnología a todos los argentinos. 
                Desde entonces, hemos crecido de un pequeño local a una de las empresas líderes en 
                venta de productos informáticos y servicios técnicos en Argentina.
              </p>
              <p className="text-gray-700">
                Nuestro compromiso con la calidad, la atención personalizada y los precios competitivos 
                nos ha permitido construir una base de clientes fieles que confían en nosotros para 
                todas sus necesidades tecnológicas.
              </p>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold mb-6 text-center">Nuestros Valores</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <FaUsers className="text-primary text-xl" />
                </div>
                <h3 className="text-xl font-semibold">Compromiso con el Cliente</h3>
              </div>
              <p className="text-gray-700">
                Ponemos al cliente en el centro de todo lo que hacemos, ofreciendo soluciones 
                personalizadas y un servicio de atención excepcional.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <FaHandshake className="text-primary text-xl" />
                </div>
                <h3 className="text-xl font-semibold">Integridad</h3>
              </div>
              <p className="text-gray-700">
                Actuamos con honestidad y transparencia en todas nuestras operaciones, 
                estableciendo relaciones de confianza con nuestros clientes y proveedores.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <FaChartLine className="text-primary text-xl" />
                </div>
                <h3 className="text-xl font-semibold">Innovación</h3>
              </div>
              <p className="text-gray-700">
                Nos mantenemos a la vanguardia de la tecnología, ofreciendo productos y 
                servicios de última generación que satisfacen las necesidades cambiantes de nuestros clientes.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <FaAward className="text-primary text-xl" />
                </div>
                <h3 className="text-xl font-semibold">Excelencia</h3>
              </div>
              <p className="text-gray-700">
                Buscamos la excelencia en cada aspecto de nuestro negocio, desde la selección 
                de productos hasta la atención al cliente y el servicio técnico.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Nuestro Equipo</h2>
          <p className="text-gray-700 mb-6 text-center">
            Contamos con un equipo de profesionales altamente capacitados y apasionados por la tecnología, 
            listos para brindarte la mejor atención y asesoramiento.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4">
                <img 
                  src="/images/team-1.jpg" 
                  alt="Miembro del equipo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">Carlos Rodríguez</h3>
              <p className="text-gray-600">CEO & Fundador</p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4">
                <img 
                  src="/images/team-2.jpg" 
                  alt="Miembro del equipo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">Laura Martínez</h3>
              <p className="text-gray-600">Directora de Ventas</p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4">
                <img 
                  src="/images/team-3.jpg" 
                  alt="Miembro del equipo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">Juan Pérez</h3>
              <p className="text-gray-600">Jefe de Servicio Técnico</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs; 