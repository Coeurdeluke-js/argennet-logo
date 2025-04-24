import React, { useState } from 'react';
import { FaSearch, FaBox, FaTruck, FaCheckCircle, FaQuestionCircle, FaSpinner } from 'react-icons/fa';

interface TrackingStep {
  id: number;
  title: string;
  description: string;
  date: string;
  status: 'completed' | 'current' | 'pending';
}

interface TrackingResult {
  orderNumber: string;
  status: string;
  steps: TrackingStep[];
}

const OrderTracking: React.FC = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [trackingResult, setTrackingResult] = useState<TrackingResult | null>(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!trackingNumber.trim()) {
      setError('Por favor ingrese un número de seguimiento');
      return;
    }

    setIsLoading(true);

    // Simulación de búsqueda
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock result for demonstration
      if (trackingNumber.toLowerCase() === 'arg123') {
        setTrackingResult({
          orderNumber: 'ARG123',
          status: 'En tránsito',
          steps: [
            {
              id: 1,
              title: 'Pedido Recibido',
              description: 'Su pedido ha sido registrado en nuestro sistema',
              date: '2024-03-15 09:00',
              status: 'completed'
            },
            {
              id: 2,
              title: 'En Preparación',
              description: 'Su pedido está siendo preparado para el envío',
              date: '2024-03-15 11:30',
              status: 'completed'
            },
            {
              id: 3,
              title: 'En Tránsito',
              description: 'Su pedido está en camino',
              date: '2024-03-15 14:45',
              status: 'current'
            },
            {
              id: 4,
              title: 'Entregado',
              description: 'Pendiente de entrega',
              date: '',
              status: 'pending'
            }
          ]
        });
      } else {
        setError('No se encontró ningún pedido con ese número de seguimiento');
      }
    } catch (err) {
      setError('Ocurrió un error al buscar el pedido. Por favor intente nuevamente.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">Seguimiento de Pedido</h1>
          <p className="text-gray-600">
            Ingrese su número de seguimiento para ver el estado de su pedido
          </p>
        </div>

        {/* Search Form */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <input
              type="text"
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value.toUpperCase())}
              placeholder="Ingrese su número de seguimiento"
              className="w-full sm:w-96 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={isLoading}
            />
            <button 
              type="submit" 
              className="btn btn-primary"
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="flex items-center">
                  <FaSpinner className="animate-spin mr-2" />
                  Buscando...
                </span>
              ) : (
                <>
                  <FaSearch className="mr-2" />
                  Buscar
                </>
              )}
            </button>
          </form>
          {error && (
            <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-600 text-sm">{error}</p>
            </div>
          )}
        </div>

        {/* Tracking Results */}
        {trackingResult && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">
                Pedido #{trackingResult.orderNumber}
              </h2>
              <p className="text-gray-600">
                Estado actual: <span className="font-medium">{trackingResult.status}</span>
              </p>
            </div>

            {/* Timeline */}
            <div className="space-y-6">
              {trackingResult.steps.map((step, index) => (
                <div key={step.id} className="flex items-start">
                  <div className="flex-shrink-0 w-8">
                    {step.status === 'completed' && (
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <FaCheckCircle className="text-white" />
                      </div>
                    )}
                    {step.status === 'current' && (
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                        <FaTruck className="text-white" />
                      </div>
                    )}
                    {step.status === 'pending' && (
                      <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                        <FaBox className="text-gray-400" />
                      </div>
                    )}
                  </div>
                  <div className="ml-4 flex-1">
                    <h3 className="font-medium">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                    {step.date && (
                      <p className="text-gray-500 text-sm mt-1">{step.date}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Help Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <FaQuestionCircle className="mr-2 text-blue-500" />
            Preguntas Frecuentes
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium mb-2">¿Dónde encuentro mi número de seguimiento?</h3>
              <p className="text-gray-600">
                Su número de seguimiento fue enviado a su correo electrónico cuando realizó la compra.
                También puede encontrarlo en su historial de pedidos en su cuenta.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-2">¿Con qué frecuencia se actualiza el estado?</h3>
              <p className="text-gray-600">
                El estado de su pedido se actualiza en tiempo real. Recomendamos revisar periódicamente
                para ver el progreso de su entrega.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-2">¿Necesita ayuda adicional?</h3>
              <p className="text-gray-600">
                Si tiene alguna pregunta sobre su pedido, no dude en contactar a nuestro
                equipo de soporte a través del formulario de contacto o llamando al número de atención al cliente.
              </p>
              <button className="btn btn-secondary mt-4">
                Contactar Soporte
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderTracking; 