import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom'
import { FaShoppingCart, FaPhone, FaUser, FaSearch, FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaEnvelope, FaClock } from 'react-icons/fa'
import Checkout from './pages/Checkout'
import Orders from './pages/Orders'
import Products from './pages/Products'
import Categories from './pages/Categories'
import Services from './pages/Services'
import Cart from './pages/Cart'
import ProductDetail from './pages/ProductDetail'
import Contact from './pages/Contact'
import PcAssembly from './pages/PcAssembly'
import Offers from './pages/Offers'
import AboutUs from './pages/AboutUs'
import WorkWithUs from './pages/WorkWithUs'
import TermsAndConditions from './pages/TermsAndConditions'
import News from './pages/News'
import BusinessSolutions from './pages/BusinessSolutions'
import Warranty from './pages/Warranty'
import FAQ from './pages/FAQ'
import PrivacyPolicy from './pages/PrivacyPolicy'
import OrderTracking from './pages/OrderTracking'
import Blog from './pages/Blog'
import './App.css'
import { useState } from 'react'
import { CartProvider, useCart } from './context/CartContext'

const Home = () => (
  <div className="relative">
    {/* Hero section */}
    <div 
      className="relative h-[600px] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url("/images/hero.png")' }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-dark/80 to-transparent">
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-6 animate-fade-in">
              Tu Socio Tecnológico de Confianza
            </h1>
            <p className="text-xl mb-8 animate-fade-in-delay">
              Expertos en venta de productos informáticos y servicios técnicos especializados.
              Brindamos soluciones integrales para particulares y empresas.
            </p>
            <div className="flex gap-4 animate-fade-in-delay-2">
              <Link to="/productos" className="btn btn-primary">
                Ver Productos
              </Link>
              <Link to="/servicios" className="btn btn-outline">
                Nuestros Servicios
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Features section */}
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div className="bg-white p-8 rounded-lg shadow-md text-center transform hover:-translate-y-2 transition-transform duration-300">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">Productos de Calidad</h3>
          <p className="text-gray-600 mb-4">
            Las mejores marcas y productos del mercado con garantía oficial.
          </p>
          <Link to="/productos" className="btn btn-primary">
            Ver Productos
          </Link>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md text-center transform hover:-translate-y-2 transition-transform duration-300">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">Servicio Técnico</h3>
          <p className="text-gray-600 mb-4">
            Reparación y mantenimiento de equipos con técnicos certificados.
          </p>
          <Link to="/servicios" className="btn btn-primary">
            Ver Servicios
          </Link>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md text-center transform hover:-translate-y-2 transition-transform duration-300">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">Asesoramiento</h3>
          <p className="text-gray-600 mb-4">
            Te ayudamos a elegir la mejor solución para tus necesidades.
          </p>
          <Link to="/contacto" className="btn btn-primary">
            Contactar
          </Link>
        </div>
      </div>
    </div>
  </div>
);

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setIsSearching(true);
      // Redirigir a la página de productos con el query de búsqueda
      navigate(`/productos?search=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearching(false);
      setSearchQuery('');
    }
  };

  return (
    <form onSubmit={handleSearch} className="relative">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Buscar productos..."
        className="w-64 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-primary transition-colors"
        disabled={isSearching}
      />
      <button 
        type="submit" 
        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-primary transition-colors"
        disabled={isSearching}
      >
        <FaSearch className="w-4 h-4" />
      </button>
    </form>
  );
}

const CartButton = () => {
  const cart = useCart();
  
  return (
    <Link 
      to="/carrito" 
      className="relative p-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors group"
    >
      <FaShoppingCart className="w-6 h-6 text-gray-600 group-hover:text-primary transition-colors" />
      {cart.itemsCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-primary text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
          {cart.itemsCount}
        </span>
      )}
    </Link>
  );
};

const NavbarWithCart = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src="/images/logo.png" alt="ArgenNet" className="h-12 w-auto" />
            </Link>
            <div className="hidden lg:block ml-10">
              <div className="flex items-center space-x-8">
                <Link to="/productos" className="nav-link group">
                  Productos
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-primary"></span>
                </Link>
                <Link to="/ofertas" className="nav-link group">
                  Ofertas
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-primary"></span>
                </Link>
                <Link to="/categorias" className="nav-link group">
                  Categorías
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-primary"></span>
                </Link>
                <Link to="/servicios" className="nav-link group">
                  Servicios Técnicos
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-primary"></span>
                </Link>
                <Link to="/contacto" className="nav-link group">
                  Contacto
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-primary"></span>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <div className="hidden md:block">
              <SearchBar />
            </div>
            <CartButton />
            <Link to="/contacto" className="btn btn-primary hidden md:flex items-center gap-2">
              <FaPhone className="w-4 h-4" />
              <span>Solicitar Servicio</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="min-h-screen bg-gray-50">
          {/* Top bar */}
          <div className="bg-dark text-white py-2">
            <div className="container mx-auto px-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <a href="tel:0800-555-1234" className="text-sm hover:text-primary transition-colors">
                    <FaPhone className="inline mr-1" /> 0800-555-1234
                  </a>
                  <a href="mailto:contacto@argennet.com.ar" className="text-sm hover:text-primary transition-colors">
                    contacto@argennet.com.ar
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <Link to="/pedidos" className="text-sm hover:text-primary transition-colors">
                    <FaUser className="inline mr-1" /> Mis Pedidos
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Main navbar with cart */}
          <NavbarWithCart />

          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/productos" element={<Products />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/productos/:id" element={<ProductDetail />} />
              <Route path="/categorias" element={<Categories />} />
              <Route path="/servicios" element={<Services />} />
              <Route path="/servicios/armado-pc" element={<PcAssembly />} />
              <Route path="/carrito" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/pedidos" element={<Orders />} />
              <Route path="/contacto" element={<Contact />} />
              <Route path="/ofertas" element={<Offers />} />
              <Route path="/quienes-somos" element={<AboutUs />} />
              <Route path="/trabaja-con-nosotros" element={<WorkWithUs />} />
              <Route path="/terminos-y-condiciones" element={<TermsAndConditions />} />
              <Route path="/novedades" element={<News />} />
              <Route path="/soluciones-empresariales" element={<BusinessSolutions />} />
              <Route path="/garantias" element={<Warranty />} />
              <Route path="/preguntas-frecuentes" element={<FAQ />} />
              <Route path="/politica-privacidad" element={<PrivacyPolicy />} />
              <Route path="/seguimiento-pedido" element={<OrderTracking />} />
            </Routes>
          </main>

          <footer className="bg-dark text-white py-8">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Logo y descripción */}
                <div>
                  <Link to="/" className="flex items-center mb-4">
                    <div className="flex items-center space-x-2">
                      <img src="/images/logo.png" alt="ArgenNet" className="h-10 w-auto" />
                      <img src="/images/logoletter.png" alt="ArgenNet" className="h-6 w-auto" />
                    </div>
                  </Link>
                  <p className="text-gray-400 text-sm mb-4">
                    Tu socio tecnológico de confianza. Expertos en venta de productos informáticos 
                    y servicios técnicos especializados desde 2010.
                  </p>
                  <div className="flex space-x-4">
                    <a href="https://facebook.com/argennet" className="text-gray-400 hover:text-primary">
                      <FaFacebook className="w-5 h-5" />
                    </a>
                    <a href="https://instagram.com/argennet" className="text-gray-400 hover:text-primary">
                      <FaInstagram className="w-5 h-5" />
                    </a>
                    <a href="https://linkedin.com/company/argennet" className="text-gray-400 hover:text-primary">
                      <FaLinkedin className="w-5 h-5" />
                    </a>
                    <a href="https://twitter.com/argennet" className="text-gray-400 hover:text-primary">
                      <FaTwitter className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Enlaces Rápidos */}
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-sm font-semibold mb-3">Productos y Servicios</h3>
                    <ul className="space-y-2 text-sm">
                      <li><Link to="/productos" className="text-gray-400 hover:text-primary">Productos</Link></li>
                      <li><Link to="/categorias" className="text-gray-400 hover:text-primary">Categorías</Link></li>
                      <li><Link to="/servicios" className="text-gray-400 hover:text-primary">Servicios Técnicos</Link></li>
                      <li><Link to="/soluciones-empresariales" className="text-gray-400 hover:text-primary">Soluciones Empresariales</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold mb-3">Soporte</h3>
                    <ul className="space-y-2 text-sm">
                      <li><Link to="/garantias" className="text-gray-400 hover:text-primary">Garantías</Link></li>
                      <li><Link to="/seguimiento-pedido" className="text-gray-400 hover:text-primary">Seguimiento de Pedidos</Link></li>
                      <li><Link to="/contacto" className="text-gray-400 hover:text-primary">Contacto</Link></li>
                      <li><Link to="/preguntas-frecuentes" className="text-gray-400 hover:text-primary">Preguntas Frecuentes</Link></li>
                    </ul>
                  </div>
                </div>

                {/* Contacto y Medios de Pago */}
                <div>
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold mb-3">Contacto</h3>
                    <div className="space-y-2 text-sm text-gray-400">
                      <p className="flex items-center">
                        <FaPhone className="w-4 h-4 mr-2" /> 0800-555-1234
                      </p>
                      <p className="flex items-center">
                        <FaEnvelope className="w-4 h-4 mr-2" /> contacto@argennet.com.ar
                      </p>
                      <p className="flex items-center">
                        <FaClock className="w-4 h-4 mr-2" /> Lun a Vie: 9:00 - 18:00
                      </p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold mb-3">Medios de pago</h3>
                    <div className="flex items-center gap-4">
                      <img
                        src="https://www.visa.com.ar/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Find%20a%20Card/Visa%20Classic/visaclassic-400x225.jpg"
                        alt="Visa"
                        className="h-6 rounded"
                      />
                      <img
                        src="https://www.mastercard.com.ar/content/dam/public/mastercardcom/lac/ar/home/consumidores/encontra-tu-tarjeta/tarjetas-credito/credito-standard/_jcr_content/contentpar/standardwhitebox_1356/image.adaptive.319.high.png/1549995018204.png"
                        alt="Mastercard"
                        className="h-6 rounded"
                      />
                      <img
                        src="https://www.americanexpress.com/content/dam/amex/us/merchant/supplies-uplift/card-art/images/AmericanExpressCard.png"
                        alt="American Express"
                        className="h-6 rounded"
                      />
                      <img
                        src="https://logotipoz.com/wp-content/uploads/2021/10/mercado-pago-logo-4.png"
                        alt="Mercado Pago"
                        className="h-6 rounded"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-gray-700 text-center text-xs text-gray-400">
                &copy; {new Date().getFullYear()} ArgenNet. Todos los derechos reservados.
              </div>
            </div>
          </footer>
        </div>
      </CartProvider>
    </Router>
  );
}

export default App; 
