import React, { useState } from 'react';
import { FaBriefcase, FaUsers, FaRocket, FaHandshake } from 'react-icons/fa';

const WorkWithUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    message: '',
    resume: null
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({
        ...prev,
        resume: e.target.files![0]
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    alert('¡Gracias por tu interés! Te contactaremos pronto.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      position: '',
      experience: '',
      message: '',
      resume: null
    });
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Trabajá con Nosotros</h1>
        
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">¿Por qué unirte a ArgenNet?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <FaRocket className="text-primary text-xl" />
                </div>
                <h3 className="text-xl font-semibold">Crecimiento Profesional</h3>
              </div>
              <p className="text-gray-700">
                Ofrecemos oportunidades de desarrollo y capacitación continua para que puedas 
                crecer profesionalmente junto a nosotros.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <FaUsers className="text-primary text-xl" />
                </div>
                <h3 className="text-xl font-semibold">Ambiente Dinámico</h3>
              </div>
              <p className="text-gray-700">
                Trabajamos en un ambiente colaborativo y dinámico, donde las ideas innovadoras 
                son bienvenidas y valoradas.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <FaBriefcase className="text-primary text-xl" />
                </div>
                <h3 className="text-xl font-semibold">Beneficios Competitivos</h3>
              </div>
              <p className="text-gray-700">
                Ofrecemos un paquete de beneficios atractivo que incluye salud, vacaciones, 
                días de estudio y más.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <FaHandshake className="text-primary text-xl" />
                </div>
                <h3 className="text-xl font-semibold">Equilibrio Vida-Trabajo</h3>
              </div>
              <p className="text-gray-700">
                Valoramos el equilibrio entre la vida personal y profesional, ofreciendo 
                horarios flexibles y políticas que promueven el bienestar.
              </p>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold mb-6 text-center">Posiciones Abiertas</h2>
          
          <div className="space-y-4 mb-8">
            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold">Vendedor/a de Productos Tecnológicos</h3>
              <p className="text-gray-600 mb-2">Tiempo completo | Presencial</p>
              <p className="text-gray-700 mb-4">
                Buscamos vendedores con experiencia en productos tecnológicos, con capacidad para 
                asesorar a clientes y alcanzar objetivos de venta.
              </p>
              <button className="btn btn-primary">Aplicar ahora</button>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold">Técnico/a de Servicio</h3>
              <p className="text-gray-600 mb-2">Tiempo completo | Presencial</p>
              <p className="text-gray-700 mb-4">
                Necesitamos técnicos con experiencia en reparación de equipos informáticos, 
                con conocimientos en hardware y software.
              </p>
              <button className="btn btn-primary">Aplicar ahora</button>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold">Desarrollador/a Web</h3>
              <p className="text-gray-600 mb-2">Tiempo completo | Híbrido</p>
              <p className="text-gray-700 mb-4">
                Buscamos desarrolladores con experiencia en React, Node.js y bases de datos, 
                para trabajar en nuestros proyectos web.
              </p>
              <button className="btn btn-primary">Aplicar ahora</button>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold mb-6 text-center">Envíanos tu CV</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Nombre completo</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone" className="form-label">Teléfono</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="position" className="form-label">Posición de interés</label>
                <select
                  id="position"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  className="form-input"
                  required
                >
                  <option value="">Selecciona una posición</option>
                  <option value="vendedor">Vendedor/a de Productos Tecnológicos</option>
                  <option value="tecnico">Técnico/a de Servicio</option>
                  <option value="desarrollador">Desarrollador/a Web</option>
                  <option value="otro">Otra posición</option>
                </select>
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="experience" className="form-label">Experiencia relevante</label>
              <textarea
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                className="form-input h-32"
                required
              ></textarea>
            </div>
            
            <div className="form-group">
              <label htmlFor="message" className="form-label">Mensaje (opcional)</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-input h-32"
              ></textarea>
            </div>
            
            <div className="form-group">
              <label htmlFor="resume" className="form-label">CV (PDF)</label>
              <input
                type="file"
                id="resume"
                name="resume"
                onChange={handleFileChange}
                className="form-input"
                accept=".pdf"
                required
              />
            </div>
            
            <div className="text-center">
              <button type="submit" className="btn btn-primary px-8">
                Enviar solicitud
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default WorkWithUs; 