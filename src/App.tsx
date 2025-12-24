import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useFireCursorPro } from './hooks/FireCursorPro';
import { AuraBackground } from './components/effects/AuraBackground';

import { useTheme } from './hooks/useTheme';
import { useFavorites } from './hooks/useFavorites';
import { useGA4 } from './hooks/useGA4';

import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';

import { Home } from './pages/Home';
import { Catalog } from './pages/Catalog';
import { ProductDetail } from './pages/ProductDetail';
import { Gallery } from './pages/Gallery';
import { FAQ } from './pages/FAQ';
import { Safety } from './pages/Safety';
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

      {/* Floating WhatsApp */}
      <FloatingWhatsAppButton />

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

      {/* Footer */}
      <Footer theme={theme} />
    </div>
  );
}

/* ---------------- Floating WhatsApp ---------------- */

const FloatingWhatsAppButton: React.FC = () => {
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
      className="fixed bottom-6 right-6 w-16 h-16 rounded-full shadow-2xl flex items-center justify-center text-2xl z-50 transition-transform hover:scale-110 active:scale-95 hover:shadow-green-500/50"
      style={{ backgroundColor: '#25D366' }}
      title="Chat with us on WhatsApp"
      aria-label="WhatsApp Chat"
    >
      💬
    </button>
  );
};

export default App;
