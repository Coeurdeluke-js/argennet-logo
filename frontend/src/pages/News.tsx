import React, { useState } from 'react';
import { FaNewspaper, FaCalendarAlt, FaTag, FaSearch } from 'react-icons/fa';

// Datos de ejemplo para las novedades
const newsData = [
  {
    id: 1,
    title: 'Nueva Línea de Productos Gaming',
    date: '2024-04-20',
    category: 'Productos',
    image: '/images/news/gaming-line.jpg',
    excerpt: 'Presentamos nuestra nueva línea de productos gaming con las últimas tecnologías y diseños innovadores.',
    content: 'ArgenNet se enorgullece de anunciar el lanzamiento de su nueva línea de productos gaming. Esta línea incluye periféricos, componentes y accesorios diseñados específicamente para gamers, con un enfoque en rendimiento, durabilidad y estilo.',
    tags: ['Gaming', 'Novedades', 'Productos']
  },
  {
    id: 2,
    title: 'Ampliación de Servicio Técnico',
    date: '2024-04-15',
    category: 'Servicios',
    image: '/images/news/technical-service.jpg',
    excerpt: 'Expandimos nuestro servicio técnico a nuevas zonas de la ciudad para brindar mejor atención.',
    content: 'Para mejorar nuestra cobertura y servicio al cliente, hemos ampliado nuestro servicio técnico a nuevas zonas de la ciudad. Ahora contamos con técnicos disponibles en más ubicaciones para brindar una atención más rápida y eficiente.',
    tags: ['Servicio Técnico', 'Expansión', 'Atención al Cliente']
  },
  {
    id: 3,
    title: 'Evento: Tech Expo 2024',
    date: '2024-05-10',
    category: 'Eventos',
    image: '/images/news/tech-expo.jpg',
    excerpt: 'Participa en nuestra Tech Expo 2024 y descubre las últimas tendencias en tecnología.',
    content: 'ArgenNet organizará su Tech Expo 2024, un evento que reunirá a las principales marcas y expertos en tecnología. Los asistentes podrán conocer las últimas innovaciones, participar en charlas técnicas y aprovechar ofertas exclusivas.',
    tags: ['Eventos', 'Tech Expo', 'Innovación']
  },
  {
    id: 4,
    title: 'Nuevo Sistema de Puntos',
    date: '2024-04-01',
    category: 'Beneficios',
    image: '/images/news/rewards.jpg',
    excerpt: 'Implementamos un nuevo sistema de puntos para recompensar a nuestros clientes más fieles.',
    content: 'Para agradecer la fidelidad de nuestros clientes, hemos implementado un nuevo sistema de puntos. Ahora, por cada compra realizada, los clientes acumularán puntos que podrán canjear por descuentos, productos y beneficios exclusivos.',
    tags: ['Beneficios', 'Fidelización', 'Puntos']
  }
];

const News = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [selectedTag, setSelectedTag] = useState('');

  // Obtener categorías únicas
  const categories = ['Todos', ...new Set(newsData.map(news => news.category))];
  
  // Obtener tags únicos
  const allTags = newsData.flatMap(news => news.tags);
  const uniqueTags = ['Todos', ...new Set(allTags)];

  // Filtrar noticias
  const filteredNews = newsData.filter(news => {
    const matchesSearch = news.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         news.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Todos' || news.category === selectedCategory;
    const matchesTag = selectedTag === 'Todos' || news.tags.includes(selectedTag);
    
    return matchesSearch && matchesCategory && matchesTag;
  });

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Novedades</h1>
        
        {/* Filtros y búsqueda */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder="Buscar novedades..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            
            <div className="flex flex-wrap gap-4">
              <select
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              
              <select
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                value={selectedTag}
                onChange={(e) => setSelectedTag(e.target.value)}
              >
                {uniqueTags.map(tag => (
                  <option key={tag} value={tag}>{tag}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        
        {/* Lista de novedades */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.map(news => (
            <div key={news.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-200 relative">
                <img 
                  src={news.image} 
                  alt={news.title} 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://via.placeholder.com/400x200?text=Imagen+no+disponible';
                  }}
                />
                <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm">
                  {news.category}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-2">
                  <FaCalendarAlt className="mr-2" />
                  {new Date(news.date).toLocaleDateString()}
                </div>
                
                <h2 className="text-xl font-bold mb-3">{news.title}</h2>
                <p className="text-gray-600 mb-4">{news.excerpt}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {news.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm flex items-center"
                      onClick={() => setSelectedTag(tag)}
                    >
                      <FaTag className="mr-1 text-primary" />
                      {tag}
                    </span>
                  ))}
                </div>
                
                <button className="btn btn-primary w-full">
                  Leer más
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Mensaje si no hay resultados */}
        {filteredNews.length === 0 && (
          <div className="text-center py-12">
            <FaNewspaper className="text-6xl text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-700 mb-2">No se encontraron novedades</h3>
            <p className="text-gray-500">
              Intenta con otros términos de búsqueda o filtros
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default News; 