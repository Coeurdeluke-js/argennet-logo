import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { config } from '../config';

interface Product {
  _id: string;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
}

const Home: React.FC = () => {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(config.api.products.featured);
        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        const data = await response.json();
        setFeaturedProducts(data);
      } catch (err) {
        console.error('Error fetching featured products:', err);
        setError('No se pudieron cargar los productos destacados. Por favor, intente más tarde.');
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedProducts();
  }, []);

  const categories = [
    {
      id: 1,
      name: 'Notebooks',
      image: 'https://placehold.co/600x400?text=Notebooks',
      description: 'Encontrá la notebook perfecta para tus necesidades',
    },
    {
      id: 2,
      name: 'Smartphones',
      image: 'https://placehold.co/600x400?text=Smartphones',
      description: 'Los últimos modelos de las mejores marcas',
    },
    {
      id: 3,
      name: 'Accesorios',
      image: 'https://placehold.co/600x400?text=Accesorios',
      description: 'Todo lo que necesitás para complementar tus dispositivos',
    },
  ];

  const addToCart = (product: Product) => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const existingItem = cart.find((item: any) => item.id === product._id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({
        id: product._id,
        name: product.name,
        price: product.price,
        image: product.imageUrl,
        quantity: 1,
      });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Producto agregado al carrito');
  };

  return (
    <div>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Tecnología de primera calidad a tu alcance
            </h1>
            <p className="text-lg mb-8">
              Descubrí los mejores productos tecnológicos con los mejores precios y garantía oficial.
            </p>
            <Link
              to="/products"
              className="inline-block bg-white text-primary px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
            >
              Ver Productos
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Categorías</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/products?category=${category.name.toLowerCase()}`}
                className="group"
              >
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                    <p className="text-gray-600">{category.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Productos Destacados</h2>
          {loading ? (
            <div className="text-center">
              <p className="text-lg">Cargando productos...</p>
            </div>
          ) : error ? (
            <div className="text-center text-red-600">
              <p className="text-lg">{error}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {featuredProducts.map((product) => (
                <div key={product._id} className="bg-white rounded-lg shadow-md overflow-hidden group">
                  <Link to={`/products/${product._id}`}>
                    <div className="aspect-w-1 aspect-h-1">
                      <img
                        src={product.imageUrl}
                        alt={product.name}
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 mb-2 line-clamp-2">{product.description}</p>
                      <p className="text-xl font-semibold text-primary">${product.price}</p>
                    </div>
                  </Link>
                  <div className="p-4 pt-0">
                    <button
                      onClick={() => addToCart(product)}
                      className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary-dark transition-colors"
                    >
                      Agregar al Carrito
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home; 