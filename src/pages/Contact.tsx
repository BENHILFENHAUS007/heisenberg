import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import configData from '../data/config.json';

interface ContactProps {
  theme: any;
}

/**
 * Contact Page Component
 * Streamlined with Factory Location only
 * Email integration with tkfireworks8999@gmail.com
 */
export const Contact: React.FC<ContactProps> = ({ theme }) => {
  const [activeTab, setActiveTab] = useState<'business' | 'inquiry'>('business');
  const [loading, setLoading] = useState(false);
  
  // Get contact info from config
  const phone = configData.contact.primaryPhone || '+91 6374749585';
  const displayEmail = configData.contact.email || 'tkfirework@gmail.com';
  const integrationEmail = configData.integrationEmail || 'tkfireworks8999@gmail.com';
  const factoryAddress = configData.addresses.factory.address || 'TK FIREWORKS FACTORY, RANGASAMUDRAM GUDIYATHAM VELLORE TAMILNADU 632602';
  
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
    
    // Create email with business inquiry details
    const subject = encodeURIComponent(`Business Inquiry from ${businessForm.name}`);
    const body = encodeURIComponent(
      `Business Inquiry Details:\n\n` +
      `Name: ${businessForm.name}\n` +
      `Phone: ${businessForm.phone}\n` +
      `State: ${businessForm.state}\n\n` +
      `Enquiry:\n${businessForm.enquiry}\n\n` +
      `---\n` +
      `This inquiry was submitted via TK Fireworks website.`
    );
    
    // Open default email client with pre-filled email
    window.location.href = `mailto:${integrationEmail}?subject=${subject}&body=${body}`;
    
    setTimeout(() => {
      alert('Your email client has been opened. Please send the email to complete your inquiry.');
      setBusinessForm({ name: '', phone: '', state: '', enquiry: '' });
      setLoading(false);
    }, 500);
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Create email with general inquiry details
    const subject = encodeURIComponent(inquiryForm.subject || 'General Inquiry');
    const body = encodeURIComponent(
      `General Inquiry from ${inquiryForm.name}\n\n` +
      `Email: ${inquiryForm.email}\n\n` +
      `Message:\n${inquiryForm.message}\n\n` +
      `---\n` +
      `This inquiry was submitted via TK Fireworks website.`
    );
    
    // Open default email client with pre-filled email
    window.location.href = `mailto:${integrationEmail}?subject=${subject}&body=${body}`;
    
    setTimeout(() => {
      alert('Your email client has been opened. Please send the email to complete your inquiry.');
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
          {/* Phone Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-orange-500/30 transition-all duration-300"
          >
            <Phone className="w-10 h-10 text-orange-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
            <a
              href={`tel:${phone}`}
              className="text-gray-400 hover:text-orange-400 transition text-lg"
            >
              {phone}
            </a>
          </motion.div>

          {/* Email Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-orange-500/30 transition-all duration-300"
          >
            <Mail className="w-10 h-10 text-orange-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Email</h3>
            <div className="space-y-2">
              <a
                href={`mailto:${displayEmail}`}
                className="block text-gray-400 hover:text-orange-400 transition text-sm"
              >
                {displayEmail}
              </a>
              <p className="text-xs text-gray-500">For inquiries & integrations:</p>
              <a
                href={`mailto:${integrationEmail}`}
                className="block text-gray-400 hover:text-orange-400 transition text-sm"
              >
                {integrationEmail}
              </a>
            </div>
          </motion.div>

          {/* Factory Location Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-orange-500/30 transition-all duration-300"
          >
            <MapPin className="w-10 h-10 text-orange-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Factory Location</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {factoryAddress}
            </p>
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
                    placeholder="+91 XXXXX XXXXX"
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
                    <option value="" className="bg-gray-900">Select your state</option>
                    <option value="Tamil Nadu" className="bg-gray-900">Tamil Nadu</option>
                    <option value="Karnataka" className="bg-gray-900">Karnataka</option>
                    <option value="Kerala" className="bg-gray-900">Kerala</option>
                    <option value="Andhra Pradesh" className="bg-gray-900">Andhra Pradesh</option>
                    <option value="Telangana" className="bg-gray-900">Telangana</option>
                    <option value="Maharashtra" className="bg-gray-900">Maharashtra</option>
                    <option value="Gujarat" className="bg-gray-900">Gujarat</option>
                    <option value="Rajasthan" className="bg-gray-900">Rajasthan</option>
                    <option value="Delhi" className="bg-gray-900">Delhi</option>
                    <option value="West Bengal" className="bg-gray-900">West Bengal</option>
                    <option value="Other" className="bg-gray-900">Other</option>
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
                  {loading ? 'Opening Email...' : 'Submit Inquiry'}
                </button>
                
                <p className="text-xs text-gray-400 text-center">
                  Clicking submit will open your email client with pre-filled details
                </p>
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
                  {loading ? 'Opening Email...' : 'Send Message'}
                </button>
                
                <p className="text-xs text-gray-400 text-center">
                  Clicking send will open your email client with pre-filled details
                </p>
              </motion.form>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
