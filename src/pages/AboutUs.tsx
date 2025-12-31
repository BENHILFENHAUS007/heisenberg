import { motion } from 'framer-motion';
import { Heart, Users, Zap, Mail, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import configData from '../data/config.json';

interface AboutUsProps {
  theme: any;
}

export const AboutUs: React.FC<AboutUsProps> = ({ theme }) => {
  const navigate = useNavigate();
  const primaryColor = theme?.primaryColor || '#ff6b00';

  return (
    <div className="relative w-full min-h-screen bg-black z-0">
      {/* HERO SECTION */}
      <section className="relative w-full pt-24 pb-32 px-4 z-40 bg-gradient-to-b from-black via-black to-transparent">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-6xl md:text-7xl font-black mb-6 text-white">
              We started with <span className="text-orange-400">sparks</span>…
            </h1>
            <p className="text-3xl md:text-4xl font-bold text-orange-300 mb-6">
              now we make people smile! 🔥✨
            </p>
            <div className="h-1 w-20 bg-gradient-to-r from-orange-400 to-pink-500 mx-auto rounded-full"></div>
          </motion.div>
        </div>
      </section>

      {/* TASK 7: UPDATED MAIN STORY SECTION */}
      <section className="w-full py-20 px-4 relative z-30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-12 md:p-16"
          >
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                Born from years of hard work, crazy ideas, and endless testing, TK Fireworks isn't just a brand — it's a bunch of dreamers who decided that festivals should never be boring!
              </p>
              
              <p className="text-xl font-bold text-orange-400">
                — TK Fireworks, the name that stands for fun, colour, and complete safety.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROMISE SECTION - Safety First */}
      <section className="w-full py-20 px-4 relative z-30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            {/* Left: Icon/Visual */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex justify-center"
            >
              <div className="relative w-64 h-64">
                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-400 via-pink-500 to-orange-400 opacity-20 blur-2xl"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Heart size={120} className="text-orange-400" fill="currentColor" />
                </div>
              </div>
            </motion.div>

            {/* Right: Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-4xl font-black text-white mb-4 flex items-center gap-3">
                  <span className="text-5xl">💫</span> Safety First, Always First
                </h2>
              </div>
              
              <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                <p>
                  Our crackers are fully safe, kid-friendly, and crafted to bring joy — never fear.
                </p>
                <p>
                  We design each product with the same care a parent has for their child. Every single batch is checked, tested, and perfected to make sure it's safe to hold, safe to light, and safe to enjoy.
                </p>
                <p className="text-xl font-bold text-orange-400 bg-white/5 p-4 rounded-lg border-l-4" style={{ borderLeftColor: primaryColor }}>
                  Because at TK Fireworks, safety isn't a rule — it's our only priority.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CREATIVITY SECTION */}
      <section className="w-full py-20 px-4 relative z-30 bg-white/2">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6 order-2 md:order-1"
            >
              <div>
                <h2 className="text-4xl font-black text-white mb-4 flex items-center gap-3">
                  <span className="text-5xl">🎨</span> Where Fun Meets Fire!
                </h2>
              </div>
              
              <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                <p>
                  What happens when imagination meets fire? You get <span className="font-bold text-orange-400">TK Fireworks</span> — full of color, comedy, and creativity!
                </p>
                <p>
                  Our designers dream in colors, our makers work in magic, and our names… well, let's just say they'll make you smile before you even light them 😉
                </p>
                <p>
                  We don't just make fireworks — we make moments that trend faster than memes! From soft glows to sky-high roars, every piece is crafted with personality and packed with fun.
                </p>
                <p className="text-xl font-bold text-orange-400 italic">
                  "Why just celebrate when you can celebrate with style?"
                </p>
              </div>
            </motion.div>

            {/* Right: Icon/Visual */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex justify-center order-1 md:order-2"
            >
              <div className="relative w-64 h-64">
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 opacity-20 blur-2xl"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Zap size={120} className="text-pink-400" fill="currentColor" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* PEOPLE SECTION */}
      <section className="w-full py-20 px-4 relative z-30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            {/* Left: Icon/Visual */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex justify-center"
            >
              <div className="relative w-64 h-64">
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 opacity-20 blur-2xl"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Users size={120} className="text-blue-400" fill="currentColor" />
                </div>
              </div>
            </motion.div>

            {/* Right: Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-4xl font-black text-white mb-4 flex items-center gap-3">
                  <span className="text-5xl">👷‍♀️</span> The Real Fire Behind the Fireworks
                </h2>
              </div>
              
              <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                <p>
                  Behind every sparkle, there's sweat. Behind every smile, there's skill. Behind TK Fireworks, there's a family of dreamers, makers, and perfectionists.
                </p>
                <p>
                  Our workers are not just employees — they're the real stars of every festival. Their hands craft joy; their experience ensures safety.
                </p>
                <p className="text-xl font-bold text-blue-400 bg-white/5 p-4 rounded-lg border-l-4 border-blue-400">
                  We don't call them laborers — we call them legends who turn chemistry into happiness 💖
                </p>
                <p className="text-lg font-bold text-orange-400">
                  💥 All credit to our people. Always.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* DISTRIBUTORS CTA SECTION */}
      <section className="w-full py-20 px-4 relative z-30 bg-gradient-to-r from-orange-500/10 to-pink-500/10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-8"
          >
            <div>
              <h2 className="text-5xl font-black text-white mb-4">
                DISTRIBUTORS & AGENTS
              </h2>
              <p className="text-3xl font-bold text-orange-400">
                JOIN THE SPARK REVOLUTION! 💥
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                At TK Fireworks, we don't just make crackers — we make opportunities explode! 💥
              </p>
              <p>
                If you're a distributor, wholesaler, or retailer who believes that festivals deserve more laughter and light, we'd love to have you on our team.
              </p>
              <p className="text-xl font-bold text-white">
                We're expanding across Tamil Nadu, Andhra Pradesh, Telangana, Karnataka, and North India — and we're looking for energetic partners who can help spread our fireworks (and our fun) far and wide till MARS!
              </p>
            </div>

            {/* Contact CTA - TASK 7: UPDATED BUTTON TEXT */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/contact')}
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-bold rounded-lg hover:shadow-2xl hover:shadow-orange-500/50 transition-all"
              >
                Become a Member
              </motion.button>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={`mailto:${configData.email}`}
                className="px-8 py-4 border-2 border-orange-500 text-orange-500 font-bold rounded-lg hover:bg-orange-500 hover:text-white transition-all inline-flex items-center justify-center gap-2"
              >
                <Mail size={20} /> Email Us
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 px-4 relative z-30 bg-black">
        <div className="max-w-6xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-2xl md:text-3xl font-black text-orange-400 mb-6">
              TK Fireworks — Safe Sparks, Happy Hearts. 😄✨
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/catalog')}
              className="px-10 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-bold rounded-lg hover:shadow-2xl hover:shadow-orange-500/50 transition-all"
            >
              Explore Our Fireworks
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};