import { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, X } from 'lucide-react';
import { useProducts } from '../hooks/useProducts';
import { useFavorites } from '../hooks/useFavorites';
import { ProductCard } from '../components/ui/ProductCard';
import { SearchBox } from '../components/ui/SearchBox';
import { FireParticlesBackground } from '../components/effects/FireParticlesBackground';

interface CatalogProps {
  theme: any;
  activeMood?: { bg: string };
}

export const Catalog: React.FC<CatalogProps> = ({ theme, activeMood }) => {
  const [showFilters, setShowFilters] = useState(false);
  const products = useProducts();
  const favorites = useFavorites();

  const effectTypes = [...new Set(products.allProducts.map((p) => p.effectType))];
  const noiseLevels = ['low', 'medium', 'high'];

  return (
    <div className={`min-h-screen pb-20 relative bg-gradient-to-br ${activeMood?.bg || 'from-gray-900 via-black to-gray-900'} transition-colors duration-700`}>
      {/* Fire Particles Background - ENABLED */}
      <FireParticlesBackground enabled={true} />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto px-4 py-8 relative z-10"
      >
        <h1 className="text-4xl md:text-5xl font-black mb-2 glow-text">Products</h1>
        <p className="text-gray-400">
          Found {products.products.length} products
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-4 gap-8 relative z-10">
        {/* Sidebar Filters */}
        <div className={`lg:col-span-1 ${showFilters ? 'block' : 'hidden'} lg:block`}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6 sticky top-24"
          >
            {/* Search */}
            <div>
              <SearchBox
                value={products.searchTerm}
                onChange={products.setSearchTerm}
                allProducts={products.allProducts}
                theme={theme}
              />
            </div>

            {/* Categories */}
            <div className="glass-effect p-4 rounded-lg">
              <h3 className="font-bold mb-3">Categories</h3>
              <div className="space-y-2">
                {products.categories.map((cat) => (
                  <label key={cat.id} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={products.selectedCategories.includes(cat.id)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          products.setSelectedCategories([...products.selectedCategories, cat.id]);
                        } else {
                          products.setSelectedCategories(
                            products.selectedCategories.filter((c) => c !== cat.id)
                          );
                        }
                      }}
                      className="rounded"
                    />
                    <span>{cat.icon} {cat.name}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Effect Type */}
            <div className="glass-effect p-4 rounded-lg">
              <h3 className="font-bold mb-3">Effect Type</h3>
              <div className="space-y-2">
                {effectTypes.map((type) => (
                  <label key={type} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={products.effectTypeFilter.includes(type)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          products.setEffectTypeFilter([...products.effectTypeFilter, type]);
                        } else {
                          products.setEffectTypeFilter(
                            products.effectTypeFilter.filter((f) => f !== type)
                          );
                        }
                      }}
                      className="rounded"
                    />
                    <span className="capitalize">{type}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Noise Level */}
            <div className="glass-effect p-4 rounded-lg">
              <h3 className="font-bold mb-3">Noise Level</h3>
              <div className="space-y-2">
                {noiseLevels.map((level) => (
                  <label key={level} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={products.noiseLevelFilter.includes(level)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          products.setNoiseLevelFilter([...products.noiseLevelFilter, level]);
                        } else {
                          products.setNoiseLevelFilter(
                            products.noiseLevelFilter.filter((f) => f !== level)
                          );
                        }
                      }}
                      className="rounded"
                    />
                    <span className="capitalize">{level}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Video Only */}
            <div className="glass-effect p-4 rounded-lg">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={products.videoOnly}
                  onChange={(e) => products.setVideoOnly(e.target.checked)}
                  className="rounded"
                />
                <span>With Video Only</span>
              </label>
            </div>

            {/* Clear Filters */}
            {(products.selectedCategories.length > 0 ||
              products.effectTypeFilter.length > 0 ||
              products.noiseLevelFilter.length > 0 ||
              products.videoOnly) && (
              <button
                onClick={() => {
                  products.setSelectedCategories([]);
                  products.setEffectTypeFilter([]);
                  products.setNoiseLevelFilter([]);
                  products.setVideoOnly(false);
                }}
                className="w-full px-4 py-2 bg-dark-surface rounded-lg hover:bg-opacity-80 transition-all text-sm"
              >
                Clear Filters
              </button>
            )}
          </motion.div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          {/* Top Bar */}
          <div className="flex items-center justify-between mb-6 gap-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center gap-2 px-4 py-2 bg-dark-surface rounded-lg"
            >
              {showFilters ? <X size={20} /> : <Filter size={20} />}
              {showFilters ? 'Close' : 'Filters'}
            </button>

            <select
              value={products.sortBy}
              onChange={(e) =>
                products.setSortBy(
                  e.target.value as 'a-z' | 'z-a' | 'newest' | 'featured'
                )
              }
              className="px-4 py-2 bg-dark-surface rounded-lg border border-gray-700 outline-none"
            >
              <option value="featured">Featured</option>
              <option value="newest">Newest</option>
              <option value="a-z">A - Z</option>
              <option value="z-a">Z - A</option>
            </select>
          </div>

          {/* Products Grid */}
          {products.products.length > 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {products.products.map((product, idx) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (idx % 4) * 0.1 }}
                >
                  <ProductCard
                    product={product}
                    isFavorite={favorites.isFavorite(product.id)}
                    onFavoriteToggle={() => favorites.toggleFavorite(product.id)}
                    theme={theme}
                  />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-xl text-gray-400 mb-4">No products found</p>
              <button
                onClick={() => {
                  products.setSearchTerm('');
                  products.setSelectedCategories([]);
                  products.setEffectTypeFilter([]);
                  products.setNoiseLevelFilter([]);
                  products.setVideoOnly(false);
                }}
                className="px-6 py-2 bg-dark-surface rounded-lg hover:bg-opacity-80 transition-all"
              >
                Reset Filters
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};
