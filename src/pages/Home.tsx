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
      {/* Hero Section */}
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
              src="/heisenberg/images/logo.png"
              alt="TK Fireworks Logo"
              className="w-auto object-contain drop-shadow-2xl"
              style={{ height: '276px' }}
              loading="eager"
              onError={(e) => {
                e.currentTarget.src = 'https://raw.githubusercontent.com/BENHILFENHAUS007/heisenberg/main/public/images/logo.png';
              }}
            />
          </motion.div>

          {/* Title - WHITE RIGHTEOUS FONT, FIXED "TK FIREWORKS" */}
          <motion.h1
            className="font-black tracking-wider mb-4"
            style={{ 
              fontSize: 'clamp(2.5rem, 8vw, 8rem)',
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
        </div>
      </section>

      {/* Video Section - REMOVED HEAVY CONTENT FOR PERFORMANCE */}
      <section className="relative py-16 px-6 bg-black/50">
        <div className="max-w-5xl mx-auto">
          <YouTubeEmbed
            videoId="6stlCkUDG_s"
            title="TK Fireworks Showcase"
            className="w-full aspect-video"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-16 px-6 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <feature.icon className="w-10 h-10 text-orange-400 mb-3" />
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
