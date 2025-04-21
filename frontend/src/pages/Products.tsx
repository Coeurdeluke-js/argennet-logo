import React, { useState, useEffect } from 'react';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import { FaSearch, FaFilter, FaShoppingCart, FaSort, FaSpinner } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import AddToCartModal from '../components/AddToCartModal';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  imageUrl: string;
  stock: number;
  brand: string;
}

// Datos de ejemplo
const sampleProducts: Product[] = [
  {
    id: '1',
    name: 'Notebook Lenovo ThinkPad X1',
    description: 'Intel Core i7, 16GB RAM, 512GB SSD',
    price: 899999,
    category: 'Notebooks',
    imageUrl: '/images/products/notebook-lenovo.jpg',
    stock: 5,
    brand: 'Lenovo'
  },
  {
    id: '2',
    name: 'Monitor Samsung Odyssey G5',
    description: '27", 144Hz, 2K QHD, 1ms',
    price: 299999,
    category: 'Monitores',
    imageUrl: '/images/products/monitor-samsung.jpg',
    stock: 8,
    brand: 'Samsung'
  },
  {
    id: '3',
    name: 'Teclado Mecánico Redragon K552',
    description: 'RGB, Switches Blue, Layout ESP',
    price: 49999,
    category: 'Periféricos',
    imageUrl: '/images/products/teclado-redragon.jpg',
    stock: 15,
    brand: 'Redragon'
  },
  {
    id: '4',
    name: 'Placa de Video RTX 4060 Ti',
    description: '8GB GDDR6, Ray Tracing',
    price: 799999,
    category: 'Componentes',
    imageUrl: '/images/products/gpu-rtx.jpg',
    stock: 3,
    brand: 'NVIDIA'
  },
  {
    id: '5',
    name: 'Procesador AMD Ryzen 7 5800X',
    description: '8 núcleos, 16 hilos, hasta 4.7GHz',
    price: 399999,
    category: 'Componentes',
    imageUrl: '/images/products/cpu-ryzen.jpg',
    stock: 10,
    brand: 'AMD'
  },
  {
    id: '6',
    name: 'SSD Kingston NV2 1TB',
    description: 'NVMe PCIe 4.0, 3500MB/s',
    price: 89999,
    category: 'Almacenamiento',
    imageUrl: '/images/products/ssd-kingston.jpg',
    stock: 20,
    brand: 'Kingston'
  }
];

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<string>('');
  const cart = useCart();
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Simulamos un delay de red
        await new Promise(resolve => setTimeout(resolve, 1000));
        setProducts(sampleProducts);
        setIsLoading(false);
      } catch (err) {
        console.error('Error loading products:', err);
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const searchQuery = searchParams.get('search')?.toLowerCase();
    let filtered = [...products];

    // Aplicar filtro de búsqueda
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery) ||
        product.description.toLowerCase().includes(searchQuery) ||
        product.category.toLowerCase().includes(searchQuery) ||
        product.brand.toLowerCase().includes(searchQuery)
      );
    }

    // Aplicar filtro de categoría
    if (selectedCategory) {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Aplicar filtro de marca
    if (selectedBrand !== 'all') {
      filtered = filtered.filter(product => product.brand === selectedBrand);
    }

    // Aplicar ordenamiento
    if (sortBy) {
      filtered.sort((a, b) => {
        switch (sortBy) {
          case 'price-asc':
            return a.price - b.price;
          case 'price-desc':
            return b.price - a.price;
          case 'name-asc':
            return a.name.localeCompare(b.name);
          case 'name-desc':
            return b.name.localeCompare(a.name);
          default:
            return 0;
        }
      });
    }

    setFilteredProducts(filtered);
  }, [products, searchParams, selectedCategory, selectedBrand, sortBy]);

  const categories = ['all', ...new Set(products.map(product => product.category))];
  const brands = ['all', ...new Set(products.map(product => product.brand))];

  const resetFilters = () => {
    setSelectedCategory('');
    setSelectedBrand('all');
    setSortBy('');
    // Limpiar los parámetros de búsqueda y redirigir a /productos
    navigate('/productos');
  };

  const handleAddToCart = (product: Product) => {
    try {
      cart.addItem({
        id: String(product.id),
        name: product.name,
        price: product.price,
        imageUrl: product.imageUrl
      });
      setSelectedProduct(product);
      setShowModal(true);
    } catch (error) {
      console.error('Error al agregar al carrito:', error);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <FaSpinner className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Nuestros Productos</h1>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          {/* Filtros */}
          <div className="flex flex-wrap gap-4">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">Todas las categorías</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
            <select
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="all">Todas las marcas</option>
              {brands.map(brand => (
                <option key={brand} value={brand}>{brand}</option>
              ))}
            </select>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">Ordenar por</option>
              <option value="price-asc">Precio: Menor a Mayor</option>
              <option value="price-desc">Precio: Mayor a Menor</option>
              <option value="name-asc">Nombre: A-Z</option>
              <option value="name-desc">Nombre: Z-A</option>
            </select>
          </div>
          
          {/* Resultados */}
          <p className="text-gray-600">
            {filteredProducts.length} 
            {filteredProducts.length === 1 ? ' producto encontrado' : ' productos encontrados'}
          </p>
        </div>
      </div>

      {/* Grid de productos */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <Link to={`/productos/${product.id}`}>
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://via.placeholder.com/300x300?text=Producto';
                    }}
                  />
                </div>
              </Link>
              <div className="p-4">
                <Link to={`/productos/${product.id}`}>
                  <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                </Link>
                <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-primary">
                    ${product.price.toLocaleString('es-AR')}
                  </span>
                  <button
                    className="btn btn-primary btn-sm flex items-center gap-2"
                    onClick={() => handleAddToCart(product)}
                  >
                    <FaShoppingCart />
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
      ) : (
        <div className="text-center py-12">
          <p className="text-xl text-gray-600">No se encontraron productos que coincidan con tu búsqueda.</p>
          <button
            onClick={resetFilters}
            className="mt-4 btn btn-primary flex items-center gap-2 mx-auto"
          >
            <FaFilter className="w-4 h-4" />
            Ver todos los productos
          </button>
        </div>
      )}

      {/* Modal de confirmación */}
      <AddToCartModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        productName={selectedProduct?.name || ''}
      />
    </div>
  );
};

export default Products;  
