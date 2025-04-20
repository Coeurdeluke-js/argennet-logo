import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { FaShoppingCart, FaPhone, FaUser, FaSearch } from 'react-icons/fa'
import Checkout from './pages/Checkout'
import Orders from './pages/Orders'
import Products from './pages/Products'
import Categories from './pages/Categories'
import Services from './pages/Services'
import Cart from './pages/Cart'
import ProductDetail from './pages/ProductDetail'
import Contact from './pages/Contact'
import PcAssembly from './pages/PcAssembly'
import './App.css'

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

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* Navbar superior */}
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

        {/* Navbar principal */}
        <nav className="bg-white shadow-md sticky top-0 z-50">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-20">
              <div className="flex items-center">
                <Link to="/" className="flex items-center">
                  <div className="flex items-center space-x-2">
                    <img src="/images/logo.png" alt="ArgenNet" className="h-12 w-auto" />
                    <img src="/images/logoletter.png" alt="ArgenNet" className="h-8 w-auto" />
                  </div>
                </Link>
                <div className="hidden lg:block ml-10">
                  <div className="flex items-center space-x-8">
                    <Link to="/productos" className="nav-link group">
                      Productos
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
                <div className="hidden md:block relative">
                  <input
                    type="text"
                    placeholder="Buscar productos..."
                    className="w-64 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-primary transition-colors"
                  />
                  <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
                <Link to="/carrito" className="btn btn-ghost relative group">
                  <FaShoppingCart className="w-6 h-6 transition-transform group-hover:scale-110" />
                  <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    0
                  </span>
                </Link>
                <Link to="/contacto" className="btn btn-primary hidden md:flex items-center gap-2 group">
                  <FaPhone className="w-4 h-4 transition-transform group-hover:scale-110" />
                  <span>Solicitar Servicio</span>
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<Products />} />
            <Route path="/productos/:id" element={<ProductDetail />} />
            <Route path="/categorias" element={<Categories />} />
            <Route path="/servicios" element={<Services />} />
            <Route path="/servicios/armado-pc" element={<PcAssembly />} />
            <Route path="/carrito" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/pedidos" element={<Orders />} />
            <Route path="/contacto" element={<Contact />} />
          </Routes>
        </main>

        <footer className="bg-dark text-white mt-12">
          <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h4 className="text-lg font-bold mb-4">Sobre ArgenNet</h4>
                <ul className="space-y-2">
                  <li>
                    <Link to="/quienes-somos" className="hover:text-primary transition-colors">
                      Quiénes Somos
                    </Link>
                  </li>
                  <li>
                    <Link to="/trabaja-con-nosotros" className="hover:text-primary transition-colors">
                      Trabajá con Nosotros
                    </Link>
                  </li>
                  <li>
                    <Link to="/terminos" className="hover:text-primary transition-colors">
                      Términos y Condiciones
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-4">Productos</h4>
                <ul className="space-y-2">
                  <li>
                    <Link to="/categorias" className="hover:text-primary transition-colors">
                      Categorías
                    </Link>
                  </li>
                  <li>
                    <Link to="/ofertas" className="hover:text-primary transition-colors">
                      Ofertas
                    </Link>
                  </li>
                  <li>
                    <Link to="/novedades" className="hover:text-primary transition-colors">
                      Novedades
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-4">Servicios</h4>
                <ul className="space-y-2">
                  <li>
                    <Link to="/servicios" className="hover:text-primary transition-colors">
                      Servicio Técnico
                    </Link>
                  </li>
                  <li>
                    <Link to="/empresas" className="hover:text-primary transition-colors">
                      Soluciones Empresariales
                    </Link>
                  </li>
                  <li>
                    <Link to="/garantias" className="hover:text-primary transition-colors">
                      Garantías
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-4">Contacto</h4>
                <ul className="space-y-2">
                  <li>
                    <Link to="/contacto" className="hover:text-primary transition-colors">
                      Formulario de Contacto
                    </Link>
                  </li>
                  <li>
                    <a href="tel:0800-555-1234" className="hover:text-primary transition-colors">
                      0800-555-1234
                    </a>
                  </li>
                  <li>
                    <a href="mailto:contacto@argennet.com.ar" className="hover:text-primary transition-colors">
                      contacto@argennet.com.ar
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8 text-center">
              <p>&copy; {new Date().getFullYear()} ArgenNet. Todos los derechos reservados.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
