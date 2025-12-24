import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { YouTubeEmbed } from '../components/media/YouTubeEmbed';
import { Sparkles, Rocket, Star, Award } from 'lucide-react';

type Mood = {
  id: string;
  label: string;
  headline: string;
  sub: string;
  bg: string;
};

const moods: Mood[] = [
  {
    id: 'calm',
    label: '✨ Calm',
    headline: 'Soft sparks. Peaceful vibes.',
    sub: 'Perfect for home & family celebrations',
    bg: 'from-emerald-950/40 via-green-900/30 to-transparent',
  },
  {
    id: 'festive',
    label: '🎉 Festive',
    headline: 'Celebrate like it is Diwali night',
    sub: 'Balanced joy. Crowd-friendly fireworks',
    bg: 'from-orange-900/40 via-amber-800/30 to-transparent',
  },
  {
    id: 'loud',
    label: '💥 Loud',
    headline: 'Make the sky remember you',
    sub: 'High-energy display for big moments',
    bg: 'from-red-900/40 via-rose-800/30 to-transparent',
  },
  {
    id: 'kids',
    label: '👶 Kids',
    headline: 'Tiny hands. Big smiles.',
    sub: 'Low-noise, safe & joyful effects',
    bg: 'from-teal-900/40 via-cyan-800/30 to-transparent',
  },
];

const features = [
  {
    icon: Star,
    title: 'Premium Quality',
    desc: 'Hand-selected fireworks from certified manufacturers',
  },
  {
    icon: Award,
    title: 'Safety First',
    desc: 'All products meet international safety standards',
  },
  {
    icon: Sparkles,
    title: 'Wide Selection',
    desc: '500+ varieties for every occasion and budget',
  },
  {
    icon: Rocket,
    title: 'Fast Delivery',
    desc: 'Quick dispatch and reliable delivery across India',
  },
];

export function Home({ theme }: { theme?: any }) {
  const [activeMood, setActiveMood] = useState<Mood>(moods[1]);
  const userInteracted = useRef(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (userInteracted.current) return;

      setActiveMood((prev) => {
        const index = moods.findIndex((m) => m.id === prev.id);
        return moods[(index + 1) % moods.length];
      });
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const handleMoodClick = (mood: Mood) => {
    userInteracted.current = true;
    setActiveMood(mood);
  };

  return (
    <>
      {/* Hero Section with theme-based background */}
      <section
        className={`min-h-screen w-full bg-gradient-to-br ${activeMood.bg} transition-colors duration-700 relative`}
      >
        <div className="max-w-7xl mx-auto px-6 pt-32 pb-24 text-center">
          {/* Logo - 276px FIXED */}
          <motion.div
            className="flex justify-center mb-8"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', duration: 0.8 }}
          >
            <img
              src="https://raw.githubusercontent.com/BENHILFENHAUS007/heisenberg/main/public/images/logo.png"
              alt="TK Fireworks Logo"
              className="w-auto object-contain drop-shadow-2xl"
              style={{ height: '276px' }}
              loading="eager"
              onError={(e) => {
                console.error('Logo failed to load');
                e.currentTarget.style.display = 'none';
              }}
            />
          </motion.div>

          {/* Title - WHITE RIGHTEOUS FONT, SIZE FIXED */}
          <motion.h1
            className="font-black tracking-wider mb-4 whitespace-nowrap overflow-hidden"
            style={{ 
              fontSize: 'clamp(2.5rem, 10vw, 11rem)',
              fontFamily: '"Righteous", "Arial Black", sans-serif',
              letterSpacing: '0.15em',
              color: '#FFFFFF',
              textShadow: '0 0 40px rgba(255, 255, 255, 0.3), 0 4px 20px rgba(0, 0, 0, 0.8), 0 0 80px rgba(255, 150, 50, 0.4)',
              WebkitTextStroke: '1px rgba(255, 255, 255, 0.1)',
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            TK FIREWORKS
          </motion.h1>

          {/* Dynamic headline */}
          <motion.p
            className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent mb-2 transition-all duration-500"
            key={activeMood.headline}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {activeMood.headline}
          </motion.p>

          <motion.p
            className="text-sm md:text-base text-gray-300 max-w-xl mx-auto mb-10 transition-all duration-500"
            key={activeMood.sub}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {activeMood.sub}
          </motion.p>

          {/* CTA */}
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4 mb-14"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Link
              to="/catalog"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-400 hover:to-pink-400 text-white font-bold transition-all duration-200 hover:scale-[1.03] shadow-lg hover:shadow-orange-500/50"
            >
              Explore Products →
            </Link>

            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-black font-semibold transition-all duration-200 hover:scale-[1.03]"
            >
              WhatsApp Us
            </a>
          </motion.div>

          {/* Mood selector */}
          <motion.div
            className="flex flex-wrap justify-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {moods.map((mood) => (
              <button
                key={mood.id}
                onClick={() => handleMoodClick(mood)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
                  ${
                    activeMood.id === mood.id
                      ? 'bg-white text-black shadow-lg'
                      : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm'
                  }`}
              >
                {mood.label}
              </button>
            ))}
          </motion.div>

          {/* Scroll hint */}
          <motion.div
            className="mt-24 text-xs text-gray-400 animate-pulse"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 2, repeat: Infinity }}
          >
            ↓ Scroll to explore featured fireworks
          </motion.div>
        </div>
      </section>

      {/* Video Showcase Section */}
      <section className={`relative py-24 px-6 bg-gradient-to-br ${activeMood.bg} transition-colors duration-700`}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
              Experience the Magic
            </h2>
            <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Watch our premium fireworks collection in action. Quality you can see, excitement you can feel.
            </p>
          </motion.div>

          <div className="mb-16 max-w-5xl mx-auto">
            <YouTubeEmbed
              videoId="6stlCkUDG_s"
              title="TK Fireworks - Premium Collection Showcase"
              className="w-full aspect-video"
            />
          </div>

          <motion.div
            className="mt-16 grid md:grid-cols-2 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              to="/catalog"
              className="relative rounded-2xl overflow-hidden shadow-2xl group bg-gradient-to-br from-purple-900/20 to-pink-900/20 min-h-[400px] block transition-transform duration-300 hover:scale-[1.02]"
            >
              <img
                src="https://raw.githubusercontent.com/BENHILFENHAUS007/heisenberg/main/public/images/little-peacock.jpg"
                alt="Little Peacock - Premium Crackers"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="eager"
                onError={(e) => {
                  console.error('Little Peacock image failed');
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6 transition-opacity duration-300">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Little Peacock Collection
                  </h3>
                  <p className="text-gray-300">You can touch the fire for fun</p>
                </div>
              </div>
            </Link>

            <Link
              to="/catalog"
              className="relative rounded-2xl overflow-hidden shadow-2xl group bg-gradient-to-br from-blue-900/20 to-cyan-900/20 min-h-[400px] block transition-transform duration-300 hover:scale-[1.02]"
            >
              <img
                src="https://raw.githubusercontent.com/BENHILFENHAUS007/heisenberg/main/public/images/coming%20soon.png"
                alt="Coming Soon - New Products"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="eager"
                onError={(e) => {
                  console.error('Coming Soon image failed');
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 via-blue-900/30 to-transparent flex items-end p-6 transition-opacity duration-300">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    More Exciting Products
                  </h3>
                  <p className="text-gray-300">Stay tuned for new launches!</p>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className={`relative py-24 px-6 bg-gradient-to-br ${activeMood.bg} transition-colors duration-700`}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              Why Choose TK Fireworks?
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              We are committed to delivering quality, safety, and unforgettable celebrations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 shadow-xl hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-2 hover:bg-white/10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <feature.icon className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`relative py-24 px-6 bg-gradient-to-br ${activeMood.bg} transition-colors duration-700`}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Light Up Your Celebration?
            </h2>
            <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
              Browse our complete catalog and find the perfect fireworks for your special occasion.
            </p>
            <Link
              to="/catalog"
              className="inline-flex items-center justify-center px-10 py-5 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white font-bold text-lg transition-all duration-200 hover:scale-[1.05] shadow-2xl hover:shadow-purple-500/50"
            >
              View Full Products →
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Home;
