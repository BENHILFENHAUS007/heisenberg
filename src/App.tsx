import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useFireCursorPro } from './hooks/FireCursorPro';
import { AuraBackground } from './components/effects/AuraBackground';

import { useTheme } from './hooks/useTheme';
import { useFavorites } from './hooks/useFavorites';
import { useGA4 } from './hooks/useGA4';

import { Navbar } from './components/layout/Navbar';

import { Home } from './pages/Home';
import { Catalog } from './pages/Catalog';
import { ProductDetail } from './pages/ProductDetail';
import { Gallery } from './pages/Gallery';
import { FAQ } from './pages/FAQ';
import { Safety } from './pages/Safety';
import { AboutUs } from './pages/AboutUs';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Shortlist } from './pages/Shortlist';
import { BulkOrders } from './pages/BulkOrders';
import { DiwaliOffers } from './pages/DiwaliOffers';
import { Events } from './pages/Events';

import configData from './data/config.json';

function App() {
  const { theme: currentTheme } = useTheme();
  const { favorites } = useFavorites();

  useGA4();
  useFireCursorPro();

  const theme = currentTheme as any;

  return (
    <div className="text-white min-h-screen relative bg-black">
      {/* Premium Interactive Aura Background Effect */}
      <AuraBackground />

      {/* Premium Floating WhatsApp Button */}
      <PremiumWhatsAppButton />

      {/* Navigation */}
      <Navbar theme={theme} favoritesCount={favorites.length} />

      {/* Routes */}
      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center relative z-10">
            <div className="text-center">
              <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple-500 mx-auto mb-4"></div>
              <p className="text-gray-400">Loading...</p>
            </div>
          </div>
        }
      >
        <div className="relative z-10">
          <Routes>
            <Route path="/" element={<Home theme={theme} />} />
            <Route path="/about-us" element={<AboutUs theme={theme} />} />
            <Route path="/catalog" element={<Catalog theme={theme} />} />
            <Route path="/product/:id" element={<ProductDetail theme={theme} />} />
            <Route path="/gallery" element={<Gallery theme={theme} />} />
            <Route path="/faq" element={<FAQ theme={theme} />} />
            <Route path="/safety" element={<Safety theme={theme} />} />
            <Route path="/about" element={<About theme={theme} />} />
            <Route path="/contact" element={<Contact theme={theme} />} />
            <Route path="/shortlist" element={<Shortlist theme={theme} />} />
            <Route path="/bulk" element={<BulkOrders theme={theme} />} />
            <Route path="/diwali" element={<DiwaliOffers theme={theme} />} />
            <Route path="/events" element={<Events theme={theme} />} />
          </Routes>
        </div>
      </Suspense>
    </div>
  );
}

/* ---------------- Premium Floating WhatsApp Button ---------------- */

const PremiumWhatsAppButton: React.FC = () => {
  const handleClick = () => {
    const message = encodeURIComponent(configData.whatsappDefaultMessage);
    window.open(
      `https://wa.me/${configData.whatsappNumber}?text=${message}`,
      '_blank'
    );
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 group z-50"
      title="Chat with us on WhatsApp"
      aria-label="WhatsApp Chat"
    >
      {/* Animated pulse ring */}
      <div className="absolute inset-0 rounded-full bg-green-500/30 animate-ping" />
      
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-full bg-green-500/20 blur-xl group-hover:bg-green-400/30 transition-all duration-300" />
      
      {/* Main button */}
      <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-green-600 shadow-2xl flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-green-500/50 group-active:scale-95">
        {/* WhatsApp Icon SVG */}
        <svg
          viewBox="0 0 24 24"
          className="w-9 h-9 text-white"
          fill="currentColor"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
        
        {/* Badge notification dot */}
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-black flex items-center justify-center">
          <span className="text-white text-xs font-bold">!</span>
        </div>
      </div>
      
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
        Chat with us!
        <div className="absolute top-full right-6 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900" />
      </div>
    </button>
  );
};

export default App;