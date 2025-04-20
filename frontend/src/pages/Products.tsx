import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  imageUrl: string;
  stock: number;
}

function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/products');
        if (!response.ok) {
          throw new Error('Error al cargar los productos');
        }
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (err) {
        setError('Error al cargar los productos. Por favor, intente nuevamente.');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categories = ['all', ...new Set(products.map(product => product.category))];

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <div className="text-red-600 mb-4">{error}</div>
        <button
          onClick={() => window.location.reload()}
          className="btn btn-primary"
        >
          Reintentar
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between mb-8">
        <div className="mb-4 md:mb-0">
          <h1 className="text-3xl font-heading font-bold text-dark">Nuestros Productos</h1>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Buscar productos..."
            className="input md:w-64"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            className="input md:w-48"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category === 'all' ? 'Todas las categorías' : category}
              </option>
            ))}
          </select>
        </div>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600">No se encontraron productos que coincidan con tu búsqueda.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <div key={product.id} className="card hover:shadow-lg transition-shadow">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-primary">
                    ${product.price.toLocaleString('es-AR')}
                  </span>
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      // TODO: Implementar lógica para agregar al carrito
                      alert('Producto agregado al carrito');
                    }}
                  >
                    Agregar
                  </button>
                </div>
                {product.stock < 5 && product.stock > 0 && (
                  <p className="text-sm text-orange-600 mt-2">
                    ¡Solo quedan {product.stock} unidades!
                  </p>
                )}
                {product.stock === 0 && (
                  <p className="text-sm text-red-600 mt-2">
                    Sin stock disponible
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Products; 