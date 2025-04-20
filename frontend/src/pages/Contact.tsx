import { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaWhatsapp, FaCheck } from 'react-icons/fa';

type ServiceType = 'reparacion' | 'mantenimiento' | 'consulta' | 'empresarial';

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  serviceType: ServiceType;
  deviceType: string;
  message: string;
}

const initialForm: ContactForm = {
  name: '',
  email: '',
  phone: '',
  serviceType: 'consulta',
  deviceType: '',
  message: ''
};

function Contact() {
  const [form, setForm] = useState<ContactForm>(initialForm);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    
    // Simular envío del formulario
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setSending(false);
    setSent(true);
    setForm(initialForm);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h1 className="contact-title">Contacto</h1>
          <p className="contact-subtitle">
            Estamos aquí para ayudarte. Contactanos para resolver tus dudas o solicitar un servicio.
          </p>
        </div>

        <div className="contact-info">
          {/* Información de contacto */}
          <div>
            <div className="info-card">
              <h2 className="text-2xl font-bold mb-6">Información de Contacto</h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="info-icon">
                    <FaPhone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="info-title">Teléfono</h3>
                    <p className="info-text">0800-555-1234</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="info-icon">
                    <FaWhatsapp className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="info-title">WhatsApp</h3>
                    <p className="info-text">+54 9 11 5555-5555</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="info-icon">
                    <FaEnvelope className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="info-title">Email</h3>
                    <p className="info-text">contacto@argennet.com.ar</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="info-icon">
                    <FaMapMarkerAlt className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="info-title">Dirección</h3>
                    <p className="info-text">Av. Corrientes 1234, CABA</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="info-icon">
                    <FaClock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="info-title">Horario de Atención</h3>
                    <p className="info-text">Lunes a Viernes: 9:00 - 18:00</p>
                    <p className="info-text">Sábados: 9:00 - 13:00</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary/5 rounded-lg p-6 mt-6">
              <h3 className="font-bold mb-2">¿Emergencia técnica?</h3>
              <p className="text-gray-600 mb-4">
                Contamos con servicio de asistencia técnica de emergencia 24/7.
                Llamá a nuestra línea de urgencias:
              </p>
              <a
                href="tel:0800-999-URGENCIA"
                className="btn btn-primary w-full"
              >
                0800-999-URGENCIA
              </a>
            </div>
          </div>

          {/* Formulario de contacto */}
          <div className="contact-form">
            <h2 className="text-2xl font-bold mb-6">Solicitud de Servicio</h2>
            {sent ? (
              <div className="contact-form-success">
                <div className="success-icon">
                  <FaCheck className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">¡Mensaje enviado!</h3>
                <p className="text-gray-600 mb-4">
                  Nos pondremos en contacto contigo a la brevedad.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="btn btn-primary"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="Tu nombre"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="tu@email.com"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="Tu teléfono"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="serviceType" className="form-label">
                    Tipo de servicio
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={form.serviceType}
                    onChange={handleChange}
                    required
                    className="form-input"
                  >
                    <option value="consulta">Consulta general</option>
                    <option value="reparacion">Reparación</option>
                    <option value="mantenimiento">Mantenimiento</option>
                    <option value="empresarial">Servicios empresariales</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="deviceType" className="form-label">
                    Tipo de equipo
                  </label>
                  <input
                    type="text"
                    id="deviceType"
                    name="deviceType"
                    value={form.deviceType}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="PC, Notebook, Servidor, etc."
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="form-textarea"
                    placeholder="Describe tu consulta o problema"
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-full"
                  disabled={sending}
                >
                  {sending ? 'Enviando...' : 'Enviar mensaje'}
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="contact-footer">
          <p className="contact-note">
            Todos los campos marcados con * son obligatorios
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact; 