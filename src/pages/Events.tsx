import { motion } from 'framer-motion';
import { Heart, Zap, Gift } from 'lucide-react';
import { Link } from 'react-router-dom';

interface EventsProps {
  theme: any;
}

export const Events: React.FC<EventsProps> = ({ theme }) => {
  const primaryColor = theme?.primaryColor || '#ff6b00';

  const eventTypes = [
    { icon: '💒', title: 'Weddings', desc: 'Grand fireworks displays for your special day' },
    { icon: '🎂', title: 'Birthdays', desc: 'Celebrate milestones with dazzling effects' },
    { icon: '🎊', title: 'Parties', desc: 'Add excitement to your gatherings' },
    { icon: '🏛️', title: 'Corporate', desc: 'Professional displays for events' },
    { icon: '🎓', title: 'Graduations', desc: 'Mark achievements with style' },
    { icon: '🏠', title: 'Home Events', desc: 'Perfect for family celebrations' },
  ];

  return (
    <div className="min-h-screen pb-20">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto px-4 py-12"
      >
        <h1 className="text-5xl font-black mb-4 glow-text">Events & Celebrations</h1>
        <p className="text-xl text-gray-400 mb-12">
          Perfect fireworks solutions for every occasion
        </p>

        {/* Event Types Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {eventTypes.map((event, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-effect p-6 rounded-xl border text-center hover:shadow-xl transition-all duration-300"
              style={{ borderColor: primaryColor }}
            >
              <div className="text-5xl mb-4">{event.icon}</div>
              <h3 className="text-xl font-bold mb-2">{event.title}</h3>
              <p className="text-gray-400 text-sm">{event.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Why Choose */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-effect p-8 rounded-xl mb-12 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <Heart size={40} className="mx-auto mb-4" style={{ color: primaryColor }} />
            <h3 className="font-bold text-lg mb-2">Custom Solutions</h3>
            <p className="text-gray-400">Tailored packages for your specific event needs</p>
          </div>
          <div className="text-center">
            <Zap size={40} className="mx-auto mb-4" style={{ color: primaryColor }} />
            <h3 className="font-bold text-lg mb-2">Professional Planning</h3>
            <p className="text-gray-400">Expert guidance for safe and memorable displays</p>
          </div>
          <div className="text-center">
            <Gift size={40} className="mx-auto mb-4" style={{ color: primaryColor }} />
            <h3 className="font-bold text-lg mb-2">Special Packages</h3>
            <p className="text-gray-400">Exclusive offers for events and celebrations</p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Plan Your Event?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Contact us via WhatsApp to discuss your event requirements and get a customized package
          </p>
          <Link to="/contact" className="btn-primary inline-block">
            Plan Your Event
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};