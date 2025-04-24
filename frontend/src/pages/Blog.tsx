import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCalendar, FaTag, FaSearch } from 'react-icons/fa';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  image: string;
  author: string;
  tags: string[];
  cta: {
    text: string;
    link: string;
  };
}

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts: BlogPost[] = [
    {
      id: 'gaming-pc-2024',
      title: 'Guía Definitiva: Cómo Armar tu PC Gaming en 2024',
      excerpt: 'Descubre las mejores combinaciones de componentes para crear una PC gaming que se ajuste a tu presupuesto sin comprometer rendimiento.',
      content: '...',
      date: '15 de Marzo 2024',
      category: 'Gaming',
      image: '/images/blog/gaming-pc.jpg',
      author: 'Tech Team ArgenNet',
      tags: ['Gaming', 'Hardware', 'Guías'],
      cta: {
        text: 'Explora Nuestros Componentes Gaming',
        link: '/categorias/gaming'
      }
    },
    {
      id: 'productividad-setup',
      title: 'Setup Perfecto para Trabajar desde Casa',
      excerpt: 'Maximiza tu productividad con el equipo adecuado. Te mostramos las configuraciones ideales para home office.',
      content: '...',
      date: '12 de Marzo 2024',
      category: 'Productividad',
      image: '/images/blog/home-office.jpg',
      author: 'Tech Team ArgenNet',
      tags: ['Home Office', 'Productividad', 'Guías'],
      cta: {
        text: 'Arma tu Setup de Trabajo',
        link: '/categorias/oficina'
      }
    },
    {
      id: 'seguridad-empresarial',
      title: 'Ciberseguridad Empresarial: Protege tu Negocio',
      excerpt: 'Implementa las mejores prácticas y soluciones de seguridad para proteger la información de tu empresa.',
      content: '...',
      date: '10 de Marzo 2024',
      category: 'Empresas',
      image: '/images/blog/cybersecurity.jpg',
      author: 'Tech Team ArgenNet',
      tags: ['Empresas', 'Seguridad', 'Soluciones'],
      cta: {
        text: 'Conoce Nuestras Soluciones Empresariales',
        link: '/soluciones-empresariales'
      }
    },
    {
      id: 'mantenimiento-pc',
      title: 'Mantén tu PC en Óptimas Condiciones',
      excerpt: 'Tips y consejos para extender la vida útil de tu equipo y mantener su rendimiento al máximo.',
      content: '...',
      date: '8 de Marzo 2024',
      category: 'Mantenimiento',
      image: '/images/blog/maintenance.jpg',
      author: 'Tech Team ArgenNet',
      tags: ['Mantenimiento', 'Tips', 'Guías'],
      cta: {
        text: 'Agenda tu Servicio Técnico',
        link: '/servicios'
      }
    },
    {
      id: 'tecnologia-educacion',
      title: 'Tecnología para Estudiantes: Guía 2024',
      excerpt: 'Las mejores opciones en equipos y accesorios para estudiantes de todos los niveles.',
      content: '...',
      date: '5 de Marzo 2024',
      category: 'Educación',
      image: '/images/blog/student-tech.jpg',
      author: 'Tech Team ArgenNet',
      tags: ['Educación', 'Guías', 'Estudiantes'],
      cta: {
        text: 'Descubre Ofertas para Estudiantes',
        link: '/ofertas/estudiantes'
      }
    }
  ];

  const categories = [
    { id: 'all', name: 'Todas' },
    { id: 'Gaming', name: 'Gaming' },
    { id: 'Productividad', name: 'Productividad' },
    { id: 'Empresas', name: 'Empresas' },
    { id: 'Mantenimiento', name: 'Mantenimiento' },
    { id: 'Educación', name: 'Educación' }
  ];

  const filteredPosts = blogPosts
    .filter(post => 
      (selectedCategory === 'all' || post.category === selectedCategory) &&
      (post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
       post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
       post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())))
    );

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-6">Blog de Tecnología</h1>
          <p className="text-xl text-gray-600">
            Mantente actualizado con las últimas tendencias y consejos del mundo tech
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Buscar artículos..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map(post => (
            <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://via.placeholder.com/400x300?text=ArgenNet+Blog';
                  }}
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <FaCalendar className="mr-2" />
                  {post.date}
                  <FaTag className="ml-4 mr-2" />
                  {post.category}
                </div>
                <h2 className="text-xl font-bold mb-2 hover:text-primary">
                  <Link to={`/blog/${post.id}`}>{post.title}</Link>
                </h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map(tag => (
                    <span
                      key={tag}
                      className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  to={post.cta.link}
                  className="text-primary font-semibold hover:underline"
                >
                  {post.cta.text} →
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 bg-primary/5 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">¿Quieres recibir más contenido?</h2>
          <p className="text-gray-600 mb-6">
            Suscríbete a nuestro newsletter y recibe las últimas novedades en tecnología
          </p>
          <form className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Tu email"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
            />
            <button type="submit" className="btn btn-primary whitespace-nowrap">
              Suscribirme
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Blog; 