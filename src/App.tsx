import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { useFireCursorPro } from "./hooks/FireCursorPro";

import { useTheme } from "./hooks/useTheme";
import { useFavorites } from "./hooks/useFavorites";
import { useGA4 } from "./hooks/useGA4";

import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";

import { Home } from "./pages/Home";
import { Catalog } from "./pages/Catalog";
import { ProductDetail } from "./pages/ProductDetail";
import { Gallery } from "./pages/Gallery";
import { FAQ } from "./pages/FAQ";
import { Safety } from "./pages/Safety";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Shortlist } from "./pages/Shortlist";
import { BulkOrders } from "./pages/BulkOrders";
import { DiwaliOffers } from "./pages/DiwaliOffers";
import { Events } from "./pages/Events";

import configData from "./data/config.json";

function App() {
  const { theme: currentTheme } = useTheme();
  const { favorites } = useFavorites();

  useGA4();
  useFireCursorPro();

  const theme = currentTheme as any;

  return (
    <div
      className="text-white min-h-screen"
      style={{
        background:
          theme?.background ??
          "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)",
      }}
    >
      {/* Floating WhatsApp */}
      <FloatingWhatsAppButton />

      {/* Navigation */}
      <Navbar theme={theme} favoritesCount={favorites.length} />

      {/* Routes */}
      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center">
            Loading…
          </div>
        }
      >
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
      "_blank"
    );
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 w-16 h-16 rounded-full shadow-2xl flex items-center justify-center text-2xl z-30 transition-transform hover:scale-110 active:scale-95"
      style={{ backgroundColor: "#25D366" }}
      title="Chat with us on WhatsApp"
    >
      💬
    </button>
  );
};

export default App;
