import { motion } from 'framer-motion';
import { MessageCircle, Phone, Mail, MapPin } from 'lucide-react';
import { FireParticlesBackground } from '../components/effects/FireParticlesBackground';
import configData from '../data/config.json';

interface ContactProps {
  theme: any;
  activeMood?: { bg: string };
}

export const Contact: React.FC<ContactProps> = ({ theme, activeMood }) => {
  const handleWhatsApp = () => {
    window.open(
      `https://wa.me/${configData.whatsappNumber}`,
      '_blank'
    );
  };

  return (
    <div className={`min-h-screen pb-20 relative bg-gradient-to-br ${activeMood?.bg || 'from-gray-900 via-black to-gray-900'} transition-colors duration-700`}>
      {/* Fire Particles Background - ENABLED */}
      <FireParticlesBackground enabled={true} />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto px-4 py-12 relative z-10"
      >
        <h1 className="text-5xl font-black mb-8 glow-text">Contact Us</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="glass-effect p-6 rounded-xl border" style={{ borderColor: theme.primaryColor }}>
              <div className="flex items-start gap-4">
                <MessageCircle size={32} style={{ color: theme.primaryColor }} />
                <div>
                  <h3 className="font-bold text-lg mb-2">WhatsApp (Preferred)</h3>
                  <p className="text-gray-400 mb-4">Quick responses, inquiries, and support</p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    onClick={handleWhatsApp}
                    className="px-6 py-2 rounded-lg font-semibold text-white transition-all"
                    style={{ backgroundColor: '#25D366' }}
                  >
                    Open WhatsApp
                  </motion.button>
                </div>
              </div>
            </div>

            <div className="glass-effect p-6 rounded-xl border" style={{ borderColor: theme.primaryColor }}>
              <div className="flex items-start gap-4">
                <Phone size={32} style={{ color: theme.primaryColor }} />
                <div>
                  <h3 className="font-bold text-lg mb-2">Phone</h3>
                  <a
                    href={`tel:${configData.branches[0]?.phone}`}
                    className="text-primary hover:text-primary-dark font-semibold"
                  >
                    {configData.branches[0]?.phone}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Branches */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            {configData.branches.map((branch) => (
              <div key={branch.id} className="glass-effect p-6 rounded-xl border" style={{ borderColor: theme.primaryColor }}>
                <h3 className="font-bold text-lg mb-4">{branch.name}</h3>
                <div className="space-y-2 text-sm text-gray-300">
                  <div className="flex items-start gap-2">
                    <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                    <div>
                      <p>{branch.address}</p>
                      <p className="text-xs text-gray-500">📍 {branch.landmark}</p>
                    </div>
                  </div>
                  <a
                    href={branch.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary-dark inline-flex items-center gap-1 mt-2"
                  >
                    View on Maps →
                  </a>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};
