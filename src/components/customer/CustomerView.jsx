import React, { useState, useEffect } from 'react';
import { useApp } from '../../contexts/AppContext';
import Header from './Header';
import HeroSection from './HeroSection';
import CategoryFilter from './CategoryFilter';
import ProductCard from './ProductCard';
import ProductDetailModal from './ProductDetailModal';
import LocationMap from './LocationMap';
import Footer from './Footer';
import LoginModal from './LoginModal';

export default function CustomerView() {
  const { products } = useApp();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  // Check URL parameter for admin access
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('admin') === 'true') {
      setShowLogin(true);
      window.history.replaceState({}, '', window.location.pathname);
    }
  }, []);

  // Filter products
  const filteredProducts = products.filter(product => {
    const matchCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       product.brand.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  const handleViewDetail = (product) => {
    setSelectedProduct(product);
    setShowDetailModal(true);
  };

  const handleCloseDetail = () => {
    setShowDetailModal(false);
    setTimeout(() => setSelectedProduct(null), 300);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <HeroSection searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <CategoryFilter selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />
      
      {/* Products Grid */}
      <section className="container mx-auto px-4 pb-16">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onViewDetail={handleViewDetail}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-2xl text-gray-400 font-semibold">Produk tidak ditemukan</p>
            <p className="text-gray-500 mt-2">Coba kata kunci atau kategori lain</p>
          </div>
        )}
      </section>

      {/* Location Map Section */}
      <LocationMap />

      <Footer onAdminClick={() => setShowLogin(true)} />

      <ProductDetailModal
        product={selectedProduct}
        isOpen={showDetailModal}
        onClose={handleCloseDetail}
      />

      <LoginModal
        isOpen={showLogin}
        onClose={() => setShowLogin(false)}
      />
    </div>
  );
}
