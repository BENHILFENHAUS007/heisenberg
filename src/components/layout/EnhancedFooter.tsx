import { motion } from 'framer-motion';
import { Facebook, Instagram, Mail, Twitter, Linkedin, Youtube, MapPin, Phone, Send } from 'lucide-react';
import configData from '../../data/config.json';
import { useState } from 'react';

interface EnhancedFooterProps {
  theme?: any;
}

export const EnhancedFooter: React.FC<EnhancedFooterProps> = ({ theme }) => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const socialIcons = [
    {
      icon: Facebook,
      label: 'Facebook',
      href: configData.links.facebook,
      color: 'hover:text-blue-500',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      href: configData.links.instagram,
      color: 'hover:text-pink-500',
    },
    {
      icon: Twitter,
      label: 'Twitter',
      href: configData.links.twitter,
      color: 'hover:text-blue-400',
    },
    {
      icon: Youtube,
      label: 'YouTube',
      href: configData.links.youtube,
      color: 'hover:text-red-500',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: configData.links.linkedin,
      color: 'hover:text-blue-600',
    },
    {
      icon: Mail,
      label: 'Email',
      href: `mailto:${configData.contact.email}`,
      color: 'hover:text-orange-500',
    },
  ];

  return (
    <footer className="relative w-full bg-gradient-to-b from-black via-gray-950 to-black border-t border-white/10 z-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"
          animate={{
            y: [0, 30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"
          animate={{
            y: [0, -30, 0],
            x: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16"
        >
          {/* Brand & Contact */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent mb-2">
                {configData.brand.name}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {configData.brand.description}
              </p>
            </div>

            {/* Quick Contact */}
            <div className="space-y-3">
              <motion.a
                href={`tel:${configData.contact.primaryPhone}`}
                whileHover={{ x: 4 }}
                className="flex items-center gap-3 text-gray-300 hover:text-orange-400 transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center group-hover:bg-orange-500/40 transition-colors">
                  <Phone size={16} className="text-orange-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Call Us</p>
                  <p className="font-semibold">{configData.contact.primaryPhone}</p>
                </div>
              </motion.a>

              <motion.a
                href={`mailto:${configData.contact.email}`}
                whileHover={{ x: 4 }}
                className="flex items-center gap-3 text-gray-300 hover:text-orange-400 transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center group-hover:bg-orange-500/40 transition-colors">
                  <Mail size={16} className="text-orange-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Email Us</p>
                  <p className="font-semibold text-sm">{configData.contact.email}</p>
                </div>
              </motion.a>
            </div>
          </motion.div>

          {/* Factory Location - Collapsible */}
          <motion.div variants={itemVariants}>
            <motion.button
              onClick={() =>
                setExpandedSection(
                  expandedSection === 'location' ? null : 'location'
                )
              }
              className="w-full"
            >
              <div className="flex items-start gap-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-orange-500/50 transition-all duration-300 cursor-pointer group">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center flex-shrink-0 group-hover:shadow-lg group-hover:shadow-orange-500/50 transition-all">
                  <MapPin size={20} className="text-white" />
                </div>
                <div className="text-left flex-1">
                  <h4 className="text-white font-bold mb-1 flex items-center gap-2">
                    {configData.addresses.factory.label}
                    <motion.span
                      animate={{ rotate: expandedSection === 'location' ? 180 : 0 }}
                      className="inline-block"
                    >
                      ▼
                    </motion.span>
                  </h4>
                  <p className="text-orange-400 text-sm font-semibold line-clamp-2">
                    {configData.addresses.factory.address}
                  </p>
                </div>
              </div>
            </motion.button>

            {/* Expanded Location Info */}
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: expandedSection === 'location' ? 'auto' : 0,
                opacity: expandedSection === 'location' ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden mt-2"
            >
              <div className="p-4 rounded-lg bg-white/5 border border-white/10 space-y-3">
                <motion.a
                  href={configData.addresses.factory.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  className="block w-full px-4 py-2 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-semibold text-center transition-colors"
                >
                  📍 View on Maps
                </motion.a>
                <a
                  href={`tel:${configData.addresses.factory.phone}`}
                  className="block text-gray-300 hover:text-orange-400 text-sm"
                >
                  📞 {configData.addresses.factory.phone}
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Quick Links & CTA */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="text-white font-bold text-lg mb-4">Quick Links</h4>
            <div className="space-y-2">
              {[
                { label: '📦 Bulk Orders', href: configData.links.bulkOrders },
                { label: '🛍️ Catalog', href: configData.links.catalog },
                { label: '▶️ YouTube', href: configData.links.youtube },
              ].map((link, idx) => (
                <motion.a
                  key={idx}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 4 }}
                  className="block text-gray-300 hover:text-orange-400 transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>

            {/* Integration Email Note */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="mt-6 p-3 rounded-lg bg-white/5 border border-white/10"
            >
              <p className="text-xs text-gray-400 mb-1">📧 For Inquiries & Integration:</p>
              <a
                href={`mailto:${configData.integrationEmail}`}
                className="text-orange-400 hover:text-orange-300 font-semibold text-sm break-all"
              >
                {configData.integrationEmail}
              </a>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-12 origin-left"
        />

        {/* Social Links - Enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {socialIcons.map((social, idx) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                className={`w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-gray-300 ${social.color} transition-all duration-300 hover:border-white/40 hover:bg-white/20 hover:shadow-lg`}
                title={social.label}
              >
                <Icon size={20} />
              </motion.a>
            );
          })}
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="border-t border-white/10 pt-8 space-y-4 text-center"
        >
          {/* Copyright */}
          <p className="text-gray-400 text-sm">
            &copy; {configData.currentYear} {configData.brand.name}. All rights reserved.
          </p>

          {/* Developer Credit with Animation */}
          <motion.p
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex items-center justify-center gap-2 text-gray-400 text-sm"
          >
            Designed & Developed with
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-red-500"
            >
              ❤️
            </motion.span>
            by
            <motion.a
              href={`mailto:${configData.developerEmail}`}
              whileHover={{ scale: 1.05 }}
              className="text-orange-400 hover:text-orange-300 font-semibold cursor-pointer transition-colors"
            >
              {configData.developerName}
            </motion.a>
            <span className="ml-1">🧑‍💻</span>
          </motion.p>

          {/* Attribution */}
          <p className="text-xs text-gray-500">
            Royalty-free drone footage by{' '}
            <a
              href="https://www.hikingfex.com/en/videos"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-400 hover:text-orange-300 transition-colors"
            >
              HikingFex.com
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
