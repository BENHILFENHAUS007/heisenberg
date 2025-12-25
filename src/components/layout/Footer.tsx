import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Company',
      links: [
        { label: 'About Us', path: '/about' },
        { label: 'Legal', path: '/legal' },
        { label: 'Privacy Policy', path: '/privacy' },
        { label: 'Careers', path: '/careers' },
        { label: 'Contact Us', path: '/contact' },
      ],
    },
    {
      title: 'Explore',
      links: [
        { label: 'Products', path: '/catalog' },
        { label: 'Gallery', path: '/gallery' },
        { label: 'Safety', path: '/safety' },
        { label: 'FAQ', path: '/faq' },
        { label: 'Blog', path: '/blog' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'How to Use', path: '/how-to' },
        { label: 'Video Tutorials', path: '/tutorials' },
        { label: 'Safety Guide', path: '/safety' },
        { label: 'Event Planning', path: '/events' },
        { label: 'Bulk Orders', path: '/bulk' },
      ],
    },
  ];

  const socialLinks = [
    { icon: Facebook, label: 'Facebook', href: 'https://facebook.com' },
    { icon: Instagram, label: 'Instagram', href: 'https://instagram.com' },
    { icon: Twitter, label: 'Twitter', href: 'https://twitter.com' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-black to-gray-900 border-t border-white/10 mt-20">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12"
        >
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1 md:col-span-2"
          >
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <img
                src="/heisenberg/images/logo.png"
                alt="TK Fireworks"
                className="h-8 w-auto"
              />
              <span className="text-xl font-bold text-white">TK Fireworks</span>
            </Link>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1" />
                <div className="text-sm text-gray-400">
                  <p className="font-semibold text-white mb-1">Corporate Address:</p>
                  <p>Lorem Ipsum Tower, Suite 200, Tech Street,</p>
                  <p>Silicon Valley, CA 94025</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-orange-400 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-sm text-gray-400 hover:text-orange-400 transition">
                  +1 (234) 567-890
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-orange-400 flex-shrink-0" />
                <a href="mailto:info@tkfireworks.com" className="text-sm text-gray-400 hover:text-orange-400 transition">
                  info@tkfireworks.com
                </a>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          {footerLinks.map((section, idx) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-gray-400 text-sm hover:text-orange-400 transition duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Info Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10"
        >
          <div>
            <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-orange-400" />
              Registered Address
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Dolor sit amet building, Consectetur Street,<br />
              Adipiscing District, Sed Tempor 45001
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-orange-400" />
              Communications Address
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Consectetur Adipiscing Tower, 7th Floor,<br />
              Sed Tempor Estate, Ut Labore 67890
            </p>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-white/10 mb-8" />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-6"
        >
          {/* Copyright */}
          <p className="text-gray-500 text-sm text-center md:text-left">
            &copy; {currentYear} TK Fireworks. All rights reserved. | Designed & Developed with ♥
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/10 text-gray-400 hover:bg-orange-500 hover:text-white transition duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              );
            })}
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-4 text-sm">
            <a href="#" className="text-gray-500 hover:text-orange-400 transition">
              Privacy
            </a>
            <span className="text-gray-700">|</span>
            <a href="#" className="text-gray-500 hover:text-orange-400 transition">
              Terms
            </a>
            <span className="text-gray-700">|</span>
            <a href="#" className="text-gray-500 hover:text-orange-400 transition">
              Cookies
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
