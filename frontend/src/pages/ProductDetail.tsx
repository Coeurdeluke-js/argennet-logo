import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaShieldAlt, FaTruck, FaCreditCard, FaTools, FaCheck, FaInfoCircle, FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import AddToCartModal from '../components/AddToCartModal';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image_url: string;
  stock: number;
  oldPrice?: number;
  warranty: string;
  brand: string;
  model: string;
  images: string[];
  specifications: Specification[];
  features: string[];
}

interface Specification {
  name: string;
  value: string;
}

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const cart = useCart();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState<'specs' | 'description'>('specs');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`/api/products/${id}`);
        if (!response.ok) {
          throw new Error('Error al cargar el producto');
        }
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error desconocido');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      try {
        cart.addItem({
          id: String(product.id),
          name: product.name,
          price: product.price,
          imageUrl: product.images[selectedImage] || product.image_url
        });
        setShowModal(true);
      } catch (error) {
        console.error('Error al agregar al carrito:', error);
      }
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <p className="text-lg">Cargando producto...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center text-red-600">
          <p className="text-lg">{error}</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <p className="text-lg">Producto no encontrado</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Galería de imágenes */}
          <div className="lg:w-2/5">
            <div className="bg-white rounded-lg shadow-md p-4">
              <div className="aspect-w-4 aspect-h-3 mb-4">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`border-2 rounded-lg overflow-hidden ${
                      selectedImage === index ? 'border-primary' : 'border-transparent'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} - Vista ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Información del producto */}
          <div className="lg:w-3/5">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-2xl font-bold text-primary">
                  ${product.price.toLocaleString('es-AR')}
                </span>
                {product.oldPrice && (
                  <span className="text-lg text-gray-500 line-through">
                    ${product.oldPrice.toLocaleString('es-AR')}
                  </span>
                )}
              </div>

              {/* Stock y garantía */}
              <div className="flex items-center gap-6 mb-6">
                <div className="flex items-center gap-2">
                  <FaCheck className="text-green-500" />
                  <span className="text-sm">
                    {product.stock > 0 ? 'Stock disponible' : 'Sin stock'}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <FaShieldAlt className="text-primary" />
                  <span className="text-sm">Garantía: {product.warranty}</span>
                </div>
              </div>

              {/* Cantidad y botón de compra */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center border rounded-md">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 hover:bg-gray-100"
                    disabled={quantity <= 1}
                  >
                    -
                  </button>
                  <span className="px-4 py-2 border-x">{quantity}</span>
                  <button
                    onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                    className="px-4 py-2 hover:bg-gray-100"
                    disabled={quantity >= product.stock}
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={handleAddToCart}
                  className="btn btn-primary flex-grow flex items-center gap-2"
                  disabled={product.stock === 0}
                >
                  <FaShoppingCart className="w-5 h-5" />
                  Agregar al Carrito
                </button>
              </div>

              {/* Beneficios */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <FaTruck className="text-primary" />
                  <div>
                    <h4 className="font-bold text-sm">Envío Gratis</h4>
                    <p className="text-xs text-gray-600">En compras mayores a $100.000</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FaCreditCard className="text-primary" />
                  <div>
                    <h4 className="font-bold text-sm">12 Cuotas sin interés</h4>
                    <p className="text-xs text-gray-600">Con tarjetas bancarias</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FaTools className="text-primary" />
                  <div>
                    <h4 className="font-bold text-sm">Soporte técnico</h4>
                    <p className="text-xs text-gray-600">Asistencia especializada</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FaInfoCircle className="text-primary" />
                  <div>
                    <h4 className="font-bold text-sm">Asesoramiento</h4>
                    <p className="text-xs text-gray-600">Antes y después de tu compra</p>
                  </div>
                </div>
              </div>

              {/* Tabs */}
              <div className="border-t pt-6">
                <div className="flex gap-4 border-b mb-4">
                  <button
                    onClick={() => setActiveTab('specs')}
                    className={`pb-2 font-medium ${
                      activeTab === 'specs'
                        ? 'text-primary border-b-2 border-primary'
                        : 'text-gray-600'
                    }`}
                  >
                    Especificaciones
                  </button>
                  <button
                    onClick={() => setActiveTab('description')}
                    className={`pb-2 font-medium ${
                      activeTab === 'description'
                        ? 'text-primary border-b-2 border-primary'
                        : 'text-gray-600'
                    }`}
                  >
                    Descripción
                  </button>
                </div>

                {activeTab === 'specs' ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {product.specifications.map((spec, index) => (
                      <div key={index} className="flex flex-col">
                        <span className="text-sm font-medium text-gray-600">{spec.name}</span>
                        <span className="text-sm">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <h3 className="font-bold mb-2">Características destacadas:</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      {product.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add to Cart Modal */}
      <AddToCartModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        productName={product?.name || ''}
      />
    </>
  );
};

export default ProductDetail; 