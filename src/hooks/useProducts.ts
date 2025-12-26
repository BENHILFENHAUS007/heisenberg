import { useState, useMemo } from 'react';
import productsData from '../data/products.json';
import categoriesData from '../data/categories.json';
import { Product } from '../types';

export const useProducts = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [effectTypeFilter, setEffectTypeFilter] = useState<string[]>([]);
  const [noiseLevelFilter, setNoiseLevelFilter] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<'a-z' | 'z-a' | 'newest' | 'featured'>('featured');
  const [videoOnly, setVideoOnly] = useState(false);

  const filteredAndSortedProducts = useMemo(() => {
    let result = [...productsData.products];

    // Search filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(term) ||
          p.id.toLowerCase().includes(term) ||
          p.tags.some((tag) => tag.toLowerCase().includes(term)) ||
          p.descriptionShort.toLowerCase().includes(term)
      );
    }

    // Category filter
    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.categoryId));
    }

    // Effect type filter
    if (effectTypeFilter.length > 0) {
      result = result.filter((p) => effectTypeFilter.includes(p.effectType));
    }

    // Noise level filter
    if (noiseLevelFilter.length > 0) {
      result = result.filter((p) => noiseLevelFilter.includes(p.noiseLevel));
    }

    // Video filter
    if (videoOnly) {
      result = result.filter((p) => p.hasVideo);
    }

    // Sorting
    switch (sortBy) {
      case 'a-z':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'z-a':
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'newest':
        result.sort((a, b) => (b.isNew ? 1 : -1));
        break;
      case 'featured':
        result.sort((a, b) => b.displayOrder - a.displayOrder);
        break;
    }

    return result;
  }, [searchTerm, selectedCategories, effectTypeFilter, noiseLevelFilter, sortBy, videoOnly]);

  return {
    products: filteredAndSortedProducts,
    allProducts: productsData.products,
    categories: categoriesData,
    searchTerm,
    setSearchTerm,
    selectedCategories,
    setSelectedCategories,
    effectTypeFilter,
    setEffectTypeFilter,
    noiseLevelFilter,
    setNoiseLevelFilter,
    sortBy,
    setSortBy,
    videoOnly,
    setVideoOnly,
  };
};
