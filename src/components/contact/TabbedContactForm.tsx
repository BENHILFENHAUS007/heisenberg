import React, { useState } from 'react';
import { motion } from 'framer-motion';

type TabType = 'business' | 'general';

interface TabbedContactFormProps {
  contactData: {
    phone: string;
    email: string;
    addresses: {
      corporate: { label: string; address: string };
      registered: { label: string; address: string };
      communications: { label: string; address: string };
    };
  };
}

export const TabbedContactForm: React.FC<TabbedContactFormProps> = ({ contactData }) => {
  const [activeTab, setActiveTab] = useState<TabType>('business');
  const [businessForm, setBusinessForm] = useState({
    fullName: '',
    phone: '',
    state: '',
    enquiry: '',
  });
  const [generalForm, setGeneralForm] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleBusinessSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Business inquiry submitted successfully!');
    setBusinessForm({ fullName: '', phone: '', state: '', enquiry: '' });
  };

  const handleGeneralSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('General inquiry submitted successfully!');
    setGeneralForm({ fullName: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Quick Contact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
        <div className="p-6 bg-black/40 border border-orange-400/30 rounded-lg text-center hover:border-orange-400/60 transition-colors">
          <div className="text-2xl mb-2">📱</div>
          <h4 className="text-sm font-semibold text-gray-400 mb-2">Phone</h4>
          <p className="text-lg font-bold text-white">{contactData.phone}</p>
        </div>
        
        <div className="p-6 bg-black/40 border border-orange-400/30 rounded-lg text-center hover:border-orange-400/60 transition-colors">
          <div className="text-2xl mb-2">📧</div>
          <h4 className="text-sm font-semibold text-gray-400 mb-2">Email</h4>
          <p className="text-lg font-bold text-white">{contactData.email}</p>
        </div>
        
        <div className="p-6 bg-black/40 border border-orange-400/30 rounded-lg text-center hover:border-orange-400/60 transition-colors">
          <div className="text-2xl mb-2">📍</div>
          <h4 className="text-sm font-semibold text-gray-400 mb-2">Address</h4>
          <p className="text-sm font-bold text-white">See below</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 mb-8 border-b border-orange-400/30">
        <button
          onClick={() => setActiveTab('business')}
          className={`px-6 py-3 font-semibold transition-all duration-200 border-b-2 ${
            activeTab === 'business'
              ? 'text-orange-400 border-orange-400'
              : 'text-gray-400 border-transparent hover:text-white'
          }`}
        >
          Business Inquiry
        </button>
        
        <button
          onClick={() => setActiveTab('general')}
          className={`px-6 py-3 font-semibold transition-all duration-200 border-b-2 ${
            activeTab === 'general'
              ? 'text-orange-400 border-orange-400'
              : 'text-gray-400 border-transparent hover:text-white'
          }`}
        >
          General Inquiry
        </button>
      </div>

      {/* Business Inquiry Form */}
      {activeTab === 'business' && (
        <motion.form
          onSubmit={handleBusinessSubmit}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="space-y-4"
        >
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              value={businessForm.fullName}
              onChange={(e) =>
                setBusinessForm({ ...businessForm, fullName: e.target.value })
              }
              placeholder="Your name"
              className="w-full px-4 py-2 bg-black/60 border border-orange-400/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-400/60 transition-colors"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              value={businessForm.phone}
              onChange={(e) =>
                setBusinessForm({ ...businessForm, phone: e.target.value })
              }
              placeholder="+1 (234) 567-890"
              className="w-full px-4 py-2 bg-black/60 border border-orange-400/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-400/60 transition-colors"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">
              State *
            </label>
            <select
              value={businessForm.state}
              onChange={(e) =>
                setBusinessForm({ ...businessForm, state: e.target.value })
              }
              className="w-full px-4 py-2 bg-black/60 border border-orange-400/30 rounded-lg text-white focus:outline-none focus:border-orange-400/60 transition-colors"
              required
            >
              <option value="">Select your state</option>
              <option value="TN">Tamil Nadu</option>
              <option value="KA">Karnataka</option>
              <option value="KL">Kerala</option>
              <option value="AP">Andhra Pradesh</option>
              <option value="TS">Telangana</option>
              <option value="OTHER">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">
              Enquiry *
            </label>
            <textarea
              value={businessForm.enquiry}
              onChange={(e) =>
                setBusinessForm({ ...businessForm, enquiry: e.target.value })
              }
              placeholder="Describe your business inquiry..."
              rows={5}
              className="w-full px-4 py-2 bg-black/60 border border-orange-400/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-400/60 transition-colors resize-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors duration-200"
          >
            Submit Inquiry
          </button>
        </motion.form>
      )}

      {/* General Inquiry Form */}
      {activeTab === 'general' && (
        <motion.form
          onSubmit={handleGeneralSubmit}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="space-y-4"
        >
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              value={generalForm.fullName}
              onChange={(e) =>
                setGeneralForm({ ...generalForm, fullName: e.target.value })
              }
              placeholder="Your name"
              className="w-full px-4 py-2 bg-black/60 border border-orange-400/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-400/60 transition-colors"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">
              Email *
            </label>
            <input
              type="email"
              value={generalForm.email}
              onChange={(e) =>
                setGeneralForm({ ...generalForm, email: e.target.value })
              }
              placeholder="your@email.com"
              className="w-full px-4 py-2 bg-black/60 border border-orange-400/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-400/60 transition-colors"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">
              Subject *
            </label>
            <input
              type="text"
              value={generalForm.subject}
              onChange={(e) =>
                setGeneralForm({ ...generalForm, subject: e.target.value })
              }
              placeholder="Subject of your inquiry"
              className="w-full px-4 py-2 bg-black/60 border border-orange-400/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-400/60 transition-colors"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">
              Message *
            </label>
            <textarea
              value={generalForm.message}
              onChange={(e) =>
                setGeneralForm({ ...generalForm, message: e.target.value })
              }
              placeholder="Your message..."
              rows={5}
              className="w-full px-4 py-2 bg-black/60 border border-orange-400/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-400/60 transition-colors resize-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors duration-200"
          >
            Send Message
          </button>
        </motion.form>
      )}

      {/* Address Cards */}
      <div className="mt-12 space-y-4">
        <h3 className="text-2xl font-bold text-white mb-6">Our Addresses</h3>
        
        {Object.entries(contactData.addresses).map(([key, data]) => (
          <div
            key={key}
            className="p-6 bg-black/40 border border-orange-400/30 rounded-lg hover:border-orange-400/60 transition-colors"
          >
            <h4 className="text-lg font-semibold text-orange-400 mb-2">
              {data.label}
            </h4>
            <p className="text-gray-300">{data.address}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
