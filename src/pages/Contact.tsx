import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getSafeContactInfo } from '../types/config';

interface ContactProps {
  theme: any;
}

/**
 * Contact Page Component
 * Fully defensive against missing or undefined config values
 * Includes error handling, fallbacks, and null checks
 */
export const Contact: React.FC<ContactProps> = ({ theme }) => {
  const [activeTab, setActiveTab] = useState<'business' | 'inquiry'>('business');
  const [loading, setLoading] = useState(false);
  
  // Get contact info with safe fallbacks
  const contactInfo = getSafeContactInfo();
  const { phone, email, addresses } = contactInfo;
  const { corporate, registered, communications } = addresses;
  
  const [businessForm, setBusinessForm] = useState({
    name: '',
    phone: '',
    state: '',
    enquiry: '',
  });

  const [inquiryForm, setInquiryForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleBusinessSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Frontend only - will integrate with Mail API later
    console.log('Business Inquiry:', businessForm);
    setTimeout(() => {
      alert('Thank you! Your business inquiry has been submitted. We will contact you soon.');
      setBusinessForm({ name: '', phone: '', state: '', enquiry: '' });
      setLoading(false);
    }, 500);
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Frontend only - will integrate with Mail API later
    console.log('General Inquiry:', inquiryForm);
    setTimeout(() => {
      alert('Thank you for your inquiry! We will get back to you shortly.');
      setInquiryForm({ name: '', email: '', subject: '', message: '' });
      setLoading(false);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#0d0050] to-black pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <h1 className="text-5xl md:text-6xl font-black mb-4 text-white">
            Get in Touch
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have questions? We're here to help. Reach out to us with any inquiries.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Info Cards */}
          {/* Phone Card - With Null Check and Fallback */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10"
          >
            <Phone className="w-10 h-10 text-orange-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
            {phone ? (
              <a
                href={`tel:${phone}`}
                className="text-gray-400 hover:text-orange-400 transition"
              >
                {phone}
              </a>
            ) : (
              <p className="text-gray-500 italic">Phone number not available</p>
            )}
          </motion.div>

          {/* Email Card - With Null Check and Fallback */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10"
          >
            <Mail className="w-10 h-10 text-orange-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Email</h3>
            {email ? (
              <a
                href={`mailto:${email}`}
                className="text-gray-400 hover:text-orange-400 transition"
              >
                {email}
              </a>
            ) : (
              <p className="text-gray-500 italic">Email not available</p>
            )}
          </motion.div>

          {/* Address Card - With Null Check and Fallback */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10"
          >
            <MapPin className="w-10 h-10 text-orange-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Address</h3>
            {corporate?.address ? (
              <p className="text-gray-400 text-sm">
                {corporate.address.split(',')[0]}
              </p>
            ) : (
              <p className="text-gray-500 italic">Address not available</p>
            )}
          </motion.div>
        </div>

        {/* Forms Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden"
        >
          {/* Tab Navigation */}
          <div className="flex border-b border-white/10">
            <button
              onClick={() => setActiveTab('business')}
              className={`flex-1 py-4 px-6 font-semibold transition-all duration-300 ${
                activeTab === 'business'
                  ? 'bg-orange-500 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Business Inquiry
            </button>
            <button
              onClick={() => setActiveTab('inquiry')}
              className={`flex-1 py-4 px-6 font-semibold transition-all duration-300 ${
                activeTab === 'inquiry'
                  ? 'bg-orange-500 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              General Inquiry
            </button>
          </div>

          {/* Form Content */}
          <div className="p-8">
            {activeTab === 'business' ? (
              <motion.form
                key="business"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onSubmit={handleBusinessSubmit}
                className="space-y-6"
              >
                <h3 className="text-2xl font-bold text-white mb-6">Business Inquiry</h3>

                <div>
                  <label className="block text-white font-semibold mb-2">Full Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    value={businessForm.name}
                    onChange={(e) => setBusinessForm({ ...businessForm, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-orange-400 transition"
                    required
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+1 (234) 567-890"
                    value={businessForm.phone}
                    onChange={(e) => setBusinessForm({ ...businessForm, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-orange-400 transition"
                    required
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">State</label>
                  <select
                    value={businessForm.state}
                    onChange={(e) => setBusinessForm({ ...businessForm, state: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-orange-400 transition"
                    required
                  >
                    <option value="">Select your state</option>
                    <option value="CA">California</option>
                    <option value="NY">New York</option>
                    <option value="TX">Texas</option>
                    <option value="FL">Florida</option>
                    <option value="IL">Illinois</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">Enquiry</label>
                  <textarea
                    placeholder="Describe your business inquiry..."
                    value={businessForm.enquiry}
                    onChange={(e) => setBusinessForm({ ...businessForm, enquiry: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-orange-400 transition resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 bg-orange-500 hover:bg-orange-600 disabled:opacity-50 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  {loading ? 'Submitting...' : 'Submit Inquiry'}
                </button>
              </motion.form>
            ) : (
              <motion.form
                key="inquiry"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onSubmit={handleInquirySubmit}
                className="space-y-6"
              >
                <h3 className="text-2xl font-bold text-white mb-6">General Inquiry</h3>

                <div>
                  <label className="block text-white font-semibold mb-2">Full Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    value={inquiryForm.name}
                    onChange={(e) => setInquiryForm({ ...inquiryForm, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-orange-400 transition"
                    required
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">Email Address</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={inquiryForm.email}
                    onChange={(e) => setInquiryForm({ ...inquiryForm, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-orange-400 transition"
                    required
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">Subject</label>
                  <input
                    type="text"
                    placeholder="What is this about?"
                    value={inquiryForm.subject}
                    onChange={(e) => setInquiryForm({ ...inquiryForm, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-orange-400 transition"
                    required
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">Message</label>
                  <textarea
                    placeholder="Tell us more about your inquiry..."
                    value={inquiryForm.message}
                    onChange={(e) => setInquiryForm({ ...inquiryForm, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-orange-400 transition resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 bg-orange-500 hover:bg-orange-600 disabled:opacity-50 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  {loading ? 'Submitting...' : 'Send Message'}
                </button>
              </motion.form>
            )}
          </div>
        </motion.div>

        {/* Address Cards - With Null Checks and Safe Rendering */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
        >
          {/* Corporate Address - Safe Rendering */}
          {corporate && (
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
              <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-orange-400" />
                {corporate.label || 'Corporate Address'}
              </h4>
              {corporate.address ? (
                <p className="text-gray-400 text-sm leading-relaxed">{corporate.address}</p>
              ) : (
                <p className="text-gray-500 italic text-sm">Address not available</p>
              )}
            </div>
          )}

          {/* Registered Address - Safe Rendering */}
          {registered && (
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
              <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-orange-400" />
                {registered.label || 'Registered Address'}
              </h4>
              {registered.address ? (
                <p className="text-gray-400 text-sm leading-relaxed">{registered.address}</p>
              ) : (
                <p className="text-gray-500 italic text-sm">Address not available</p>
              )}
            </div>
          )}

          {/* Communications Address - Safe Rendering */}
          {communications && (
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
              <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-orange-400" />
                {communications.label || 'Communications Address'}
              </h4>
              {communications.address ? (
                <p className="text-gray-400 text-sm leading-relaxed">{communications.address}</p>
              ) : (
                <p className="text-gray-500 italic text-sm">Address not available</p>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};
