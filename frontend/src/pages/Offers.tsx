import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFilter, FaSort, FaFire, FaTag, FaClock } from 'react-icons/fa';

interface Offer {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  discount: number;
  endDate: string;
  isHot: boolean;
}

const sampleOffers: Offer[] = [
  {
    id: 1,
    title: "Monitor Gaming 27\" 144Hz",
    description: "Monitor gaming con resolución Full HD y tiempo de respuesta de 1ms",
    category: "Monitores",
    image: "/images/offers/monitor.jpg",
    discount: 25,
    endDate: "2024-04-30",
    isHot: true
  },
  {
    id: 2,
    title: "Teclado Mecánico RGB",
    description: "Teclado mecánico con switches blue y retroiluminación RGB",
    category: "Periféricos",
    image: "/images/offers/keyboard.jpg",
    discount: 15,
    endDate: "2024-04-25",
    isHot: false
  },
  {
    id: 3,
    title: "SSD 1TB NVMe",
    description: "Disco SSD NVMe con velocidades de lectura de hasta 3500MB/s",
    category: "Almacenamiento",
    image: "/images/offers/ssd.jpg",
    discount: 30,
    endDate: "2024-05-01",
    isHot: true
  },
  {
    id: 4,
    title: "Laptop Gaming RTX 3060",
    description: "Laptop gaming con procesador Intel i7 y gráficos dedicados",
    category: "Notebooks",
    image: "/images/offers/laptop.jpg",
    discount: 20,
    endDate: "2024-04-28",
    isHot: false
  },
  {
    id: 5,
    title: "Auriculares Bluetooth",
    description: "Auriculares inalámbricos con cancelación de ruido",
    category: "Audio",
    image: "/images/offers/headphones.jpg",
    discount: 35,
    endDate: "2024-04-22",
    isHot: true
  },
  {
    id: 6,
    title: "RTX 3070 Gaming",
    description: "Placa de video gaming con 8GB GDDR6",
    category: "Componentes",
    image: "/images/offers/gpu.jpg",
    discount: 15,
    endDate: "2024-04-27",
    isHot: false
  }
];

const categories = ["Todos", "Monitores", "Periféricos", "Almacenamiento", "Notebooks", "Audio", "Componentes"];

const Offers = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [sortBy, setSortBy] = useState("endDate");
  const [email, setEmail] = useState("");

  const filteredOffers = sampleOffers
    .filter(offer => selectedCategory === "Todos" || offer.category === selectedCategory)
    .sort((a, b) => {
      switch (sortBy) {
        case "endDate":
          return new Date(a.endDate).getTime() - new Date(b.endDate).getTime();
        case "discount":
          return b.discount - a.discount;
        case "hot":
          return b.isHot === a.isHot ? 0 : b.isHot ? 1 : -1;
        default:
          return 0;
      }
    });

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para suscribir al usuario
    alert("¡Gracias por suscribirte! Te enviaremos las mejores ofertas.");
    setEmail("");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Ofertas Especiales</h1>
      
      {/* Filtros y Ordenamiento */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div className="flex items-center gap-2">
          <FaFilter className="text-primary" />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border rounded-lg px-3 py-2"
          >
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
        
        <div className="flex items-center gap-2">
          <FaSort className="text-primary" />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border rounded-lg px-3 py-2"
          >
            <option value="endDate">Fecha de finalización</option>
            <option value="discount">Mayor descuento</option>
            <option value="hot">Destacados primero</option>
          </select>
        </div>
      </div>

      {/* Grid de Ofertas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {filteredOffers.map(offer => (
          <div key={offer.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative">
              <img
                src={offer.image}
                alt={offer.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full">
                -{offer.discount}%
              </div>
              {offer.isHot && (
                <div className="absolute top-2 left-2 bg-orange-500 text-white px-2 py-1 rounded-full flex items-center gap-1">
                  <FaFire /> Hot
                </div>
              )}
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{offer.title}</h3>
              <p className="text-gray-600 mb-2">{offer.description}</p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-gray-500">{offer.category}</span>
                <div className="flex items-center gap-1 text-sm text-gray-500">
                  <FaClock />
                  <span>Termina: {new Date(offer.endDate).toLocaleDateString()}</span>
                </div>
              </div>
              <Link
                to={`/productos/${offer.id}`}
                className="block w-full text-center bg-primary text-white py-2 rounded-lg hover:bg-primary-dark transition-colors"
              >
                Ver Producto
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Newsletter */}
      <div className="bg-gray-100 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">¡No te pierdas ninguna oferta!</h2>
        <p className="text-gray-600 mb-6">
          Suscríbete a nuestro newsletter y recibe las mejores ofertas directamente en tu correo.
        </p>
        <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
          <div className="flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Tu correo electrónico"
              className="flex-1 border rounded-lg px-4 py-2"
              required
            />
            <button
              type="submit"
              className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition-colors"
            >
              Suscribirse
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Offers; 