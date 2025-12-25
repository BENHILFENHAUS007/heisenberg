import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface FAQProps {
  theme: any;
}

const faqData = [
  {
    id: 1,
    question: 'Is this website for buying fireworks?',
    answer: 'Yes! Our website is your one-stop shop for premium fireworks. Browse our extensive catalog, compare products, and place orders directly through our platform. We deliver across India with fast and reliable service.',
  },
  {
    id: 2,
    question: 'How do I place an order?',
    answer: 'Placing an order is easy! Browse our Products section, select the fireworks you want, add them to your cart, and proceed to checkout. You can also contact us through WhatsApp for personalized assistance.',
  },
  {
    id: 3,
    question: 'Are there videos of the products?',
    answer: 'Absolutely! Many of our products come with demonstration videos. Look for the video icon on product cards to watch them in action. These videos help you understand the effects and quality of each product.',
  },
  {
    id: 4,
    question: 'Can I save my favorite products?',
    answer: 'Yes! Click the heart icon on any product to add it to your Shortlist. You can view all your saved favorites in the Shortlist section, making it easy to compare and decide later.',
  },
  {
    id: 5,
    question: 'Do you deliver to my area?',
    answer: 'We deliver across India! During checkout, you can enter your location to check delivery availability. For areas with restrictions, we provide alternative solutions. Contact us for specific location inquiries.',
  },
  {
    id: 6,
    question: 'What about bulk or wholesale orders?',
    answer: 'We offer special pricing for bulk and wholesale orders. Visit our Bulk Orders page or contact our sales team for customized quotes. We\'re happy to work with you on large-scale requirements.',
  },
  {
    id: 7,
    question: 'Are your products safe for kids?',
    answer: 'Safety is our top priority! We have a dedicated Kids Friendly category with age-appropriate products. All our products meet international safety standards. Always supervise children and follow the instructions on packaging.',
  },
  {
    id: 8,
    question: 'Can I use this site as an app on my phone?',
    answer: 'Our website is fully mobile-responsive and works great on smartphones. For a better app-like experience, you can add our website to your home screen. Visit our Safety page for more information about using fireworks responsibly.',
  },
];

export const FAQ: React.FC<FAQProps> = ({ theme }) => {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#0d0050] to-black pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <h1 className="text-5xl md:text-6xl font-black mb-4 text-white">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-400 text-lg">
            Find answers to common questions about our products and services
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          <AnimatePresence>
            {faqData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                className=""
              >
                <button
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-left transition-all duration-300"
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-lg font-bold text-white flex-1">{item.question}</h3>
                    <motion.div
                      animate={{ rotate: openId === item.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown className="w-6 h-6 text-orange-400" />
                    </motion.div>
                  </div>
                </button>

                {/* Answer */}
                <AnimatePresence>
                  {openId === item.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="bg-white/5 backdrop-blur-sm border border-white/10 border-t-0 rounded-b-xl p-6 text-gray-300 leading-relaxed">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-orange-500/20 to-pink-500/20 backdrop-blur-sm border border-orange-400/30 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-3">Still Have Questions?</h3>
          <p className="text-gray-300 mb-6">
            Can't find what you're looking for? Reach out to our team for personalized assistance.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </div>
  );
};
