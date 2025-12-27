import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, Shield, Zap, Facebook, Instagram, Mail, Twitter, MessageCircle, Linkedin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import configData from '../data/config.json';
import contactData from '../data/contact.json';
import { useGA4 } from '../hooks/useGA4';
import { useFavorites } from '../hooks/useFavorites';
import { getAssetPath } from '@/utils/getAssetPath';

interface HomeProps {
  theme: any;
}

// Animated particle component
const AnimatedParticles = () => {
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    delay: Math.random() * 3,
    duration: 3 + Math.random() * 2,
    left: Math.random() * 100,
    size: Math.random() * 4 + 2,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          animate={{
            y: ['0%', '-100%'],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: 'easeOut',
          }}
          className="absolute rounded-full bg-gradient-to-b from-orange-400 to-transparent blur-md"
          style={{
            left: `${particle.left}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            boxShadow: '0 0 10px rgba(249, 115, 22, 0.8)',
          }}
        />
      ))}
    </div>
  );
};

export const Home: React.FC<HomeProps> = ({ theme }) => {
  const navigate = useNavigate();
  const { favorites } = useFavorites();

  useGA4();

  return (
    <div className="relative w-full min-h-screen bg-black z-0 overflow-visible">
      {/* HERO SECTION - Logo + Title + Subtitle + Button */}
      <section 
        className="relative w-full pt-16 pb-20 px-4 z-50 overflow-hidden"
        style={{
          display: 'block',
          position: 'relative',
          width: '100%',
          backgroundColor: '#000000',
          overflow: 'hidden',
          zIndex: 50,
          minHeight: 'auto'
        }}
      >
        {/* Animated particle background */}
        <AnimatedParticles />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            {/* MAIN HERO LOGO - Optimized Desktop Size 200px */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="mb-6 flex justify-center"
              style={{
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 51
              }}
            >
              <img
                src={getAssetPath('/images/logo.png')}
                alt="TK Fireworks Logo"
                className="h-28 w-auto md:h-40 lg:h-52"
                style={{
                  display: 'block',
                  maxWidth: '90%',
                  height: 'auto',
                  opacity: 1,
                  visibility: 'visible',
                  filter: 'drop-shadow(0 0 20px rgba(249, 115, 22, 0.4))',
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden'
                }}
                loading="eager"
              />
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-6xl md:text-8xl font-black mb-6 text-white relative z-50"
              style={{
                textShadow: '0 0 30px rgba(249, 115, 22, 0.3), 0 0 60px rgba(249, 115, 22, 0.2)',
                opacity: 1,
                visibility: 'visible',
                WebkitFontSmoothing: 'antialiased'
              }}
            >
              TK FIREWORKS
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-2xl md:text-3xl text-orange-300 mb-12 font-light tracking-wide relative z-50"
              style={{
                opacity: 1,
                visibility: 'visible',
                WebkitFontSmoothing: 'antialiased'
              }}
            >
              {contactData.subtitle}
            </motion.p>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              onClick={() => navigate('/catalog')}
              className="px-10 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-bold rounded-lg hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 relative z-50 cursor-pointer"
              style={{
                border: 'none',
                WebkitAppearance: 'none',
                appearance: 'none'
              }}
            >
              Explore Our Collection
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* FEATURES SECTION - Premium Enhanced Design */}
      <section className="w-full py-32 px-4 bg-gradient-to-b from-black via-white/2 to-black relative z-40">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Why Choose TK Fireworks</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-orange-400 to-pink-500 mx-auto rounded-full"></div>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Star,
                title: 'Premium Quality',
                desc: 'Expertly formulated fireworks engineered in-house for maximum brilliance.',
                color: 'from-orange-400 to-orange-600',
              },
              {
                icon: Shield,
                title: 'Safety First',
                desc: 'Engineered for safety. Designed for families. Our revolutionary heat-free formula changes the game—allowing you to "touch the fire" without the burn.',
                color: 'from-blue-400 to-blue-600',
              },
              {
                icon: Zap,
                title: 'Wide Selection',
                desc: 'Many varieties for every occasion with manufacturer-direct, budget-friendly pricing.',
                color: 'from-pink-400 to-pink-600',
              },
            ].map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="group relative"
                >
                  {/* Gradient Background Card */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Card Content */}
                  <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300 h-full">
                    {/* Icon with gradient background */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 shadow-lg group-hover:shadow-2xl transition-shadow duration-300`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-pink-500 group-hover:bg-clip-text transition-all duration-300">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-300 leading-relaxed text-sm md:text-base group-hover:text-gray-200 transition-colors duration-300">
                      {feature.desc}
                    </p>

                    {/* Accent Line */}
                    <div className={`h-0.5 w-0 bg-gradient-to-r ${feature.color} mt-6 group-hover:w-full transition-all duration-500 rounded-full`}></div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WELCOME SECTION */}
      <section className="w-full py-32 px-4 relative z-30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Animated Child Image - Environment-aware path */}
            <motion.div
              initial={{ opacity: 1, x: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex justify-center lg:justify-start relative z-30"
            >
              {/* Floating + Bouncing Container */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="relative w-full max-w-sm"
              >
                {/* Main Image */}
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.3 }}
                  className="relative z-30"
                >
                  <img
                    src={getAssetPath('/images/animated-image-on-home.png')}
                    alt="Child with Fireworks - TK Fireworks"
                    style={{
                      filter: 'drop-shadow(0 0 30px rgba(249, 115, 22, 0.3))',
                      opacity: 1,
                      visibility: 'visible',
                      display: 'block',
                      position: 'relative',
                      zIndex: 30,
                      width: '100%',
                      height: 'auto',
                      borderRadius: '1rem',
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden'
                    }}
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      if (target.src.includes('animated-image-on-home.png')) {
                        target.src = getAssetPath('/images/animated image on home.png');
                      }
                    }}
                  />

                  {/* Particles */}
                  {[0, 1, 2, 3, 4].map((idx) => (
                    <motion.div
                      key={idx}
                      animate={{
                        y: [0, -30, 0],
                        x: [0, Math.cos(idx) * 20, 0],
                        opacity: [0.4, 0.8, 0.4],
                      }}
                      transition={{
                        duration: 3 + idx * 0.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: idx * 0.2,
                      }}
                      className="absolute w-3 h-3 rounded-full bg-orange-400 blur-sm z-40"
                      style={{
                        left: `${20 + idx * 15}%`,
                        top: `-${10 + idx * 5}%`,
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden'
                      }}
                    />
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right: Welcome Text Content */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left relative z-30"
            >
              {/* Welcome Heading with Emoji */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="text-4xl md:text-5xl font-black mb-8 text-white"
              >
                welcome to TK Fireworks <span className="inline-block ml-2">🎉</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-2xl text-orange-300 mb-8 font-semibold"
              >
                Where Every Spark Has a Story!
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-gray-300 space-y-4 mb-8"
              >
                <p>
                  Born from years of hard work, crazy ideas, and endless testing, TK Fireworks isn't just a brand — it's a bunch of dreamers who decided that festivals should never be boring!
                </p>
                <p className="text-xl font-semibold text-orange-400">
                  We don't sell fireworks. We sell moments that make people laugh, cheer, and go "WOW!"
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="bg-white/5 backdrop-blur-sm border border-orange-500/30 rounded-xl p-8 mb-8"
              >
                <h3 className="text-xl font-bold text-white mb-6">Our fireworks are:</h3>
                <div className="space-y-3 text-left">
                  {[
                    '✅ Kids-safe',
                    '✅ Eco-conscious',
                    '✅ Crafted with love and skill',
                    '✅ Proudly made by real heroes — our factory workers',
                  ].map((item, idx) => (
                    <motion.p
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + idx * 0.1, duration: 0.6 }}
                      className="text-lg text-gray-300"
                    >
                      {item}
                    </motion.p>
                  ))}
                </div>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="text-2xl font-bold text-orange-400 mb-8"
              >
                ✨ Light up your festival — TK Fireworks style!
              </motion.p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9, duration: 0.6 }}
                onClick={() => navigate('/catalog')}
                className="px-8 py-3 border-2 border-orange-500 text-orange-500 font-bold rounded-lg hover:bg-orange-500 hover:text-white transition-all duration-300 cursor-pointer"
                style={{
                  border: '2px solid rgb(249, 115, 22)',
                  WebkitAppearance: 'none',
                  appearance: 'none'
                }}
              >
                View All Products
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative w-full bg-gradient-to-b from-black to-gray-900 border-t border-white/10 mt-20 z-20" style={{ position: 'relative', display: 'block' }}>
        <div className="max-w-7xl mx-auto px-4 py-16">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12"
          >
            {/* Brand Section */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">{contactData.company}</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Soft sparks. Peaceful vibes. Perfect for home & family celebrations
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-orange-400 font-bold">📞</span>
                  <a href={`tel:${contactData.contact.phoneFormatted}`} className="text-gray-400 hover:text-orange-400 transition">
                    {contactData.contact.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-orange-400 font-bold">✉️</span>
                  <a href={`mailto:${contactData.contact.email}`} className="text-gray-400 hover:text-orange-400 transition">
                    {contactData.contact.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Addresses */}
            <div className="grid grid-cols-1 gap-4">
              <div>
                <h4 className="text-white font-semibold mb-1">Corporate Address</h4>
                <p className="text-gray-400 text-sm">{contactData.corporate.address}</p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1">Registered Address</h4>
                <p className="text-gray-400 text-sm">{contactData.registered.address}</p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1">Communications Address</h4>
                <p className="text-gray-400 text-sm">{contactData.communications.address}</p>
              </div>
            </div>
          </motion.div>

          {/* Divider */}
          <div className="border-t border-white/10 mb-8" />

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex justify-center gap-6 mb-8"
          >
            {[
              { icon: Facebook, label: 'Facebook', href: 'https://facebook.com' },
              { icon: Instagram, label: 'Instagram', href: 'https://instagram.com' },
              { icon: Twitter, label: 'X (Twitter)', href: 'https://twitter.com' },
              { icon: MessageCircle, label: 'Threads', href: 'https://threads.net' },
              { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
              { icon: Mail, label: 'Email', href: `mailto:${contactData.contact.email}` },
            ].map((social, idx) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/10 hover:bg-orange-500 text-gray-400 hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  title={social.label}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              );
            })}
          </motion.div>

          {/* Bottom */}
          <div className="text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} {contactData.company}. All rights reserved. | Designed & Developed with ♥</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
