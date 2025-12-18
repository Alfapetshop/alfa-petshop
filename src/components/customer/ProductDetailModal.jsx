import React from 'react';
import { X, MapPin, Phone } from 'lucide-react';

export default function ProductDetailModal({ product, isOpen, onClose }) {
  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-purple-600 to-pink-500 text-white p-6 flex justify-between items-center rounded-t-2xl z-10">
          <h2 className="text-2xl font-bold">Detail Produk</h2>
          <button 
            onClick={onClose}
            className="hover:bg-white hover:bg-opacity-20 rounded-full p-2 transition-all"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Image Section */}
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl p-8 flex items-center justify-center">
              <img
                src={product.image}
                alt={product.name}
                className="max-w-full max-h-96 object-contain"
              />
            </div>

            {/* Info Section */}
            <div className="space-y-6">
              {/* Brand Badge */}
              <span className="inline-block bg-purple-100 text-purple-700 text-sm font-semibold px-4 py-2 rounded-full">
                {product.brand}
              </span>

              {/* Product Name */}
              <h3 className="text-3xl font-bold text-gray-800 leading-tight">{product.name}</h3>

              {/* Details */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="text-gray-600 font-medium w-24">Kategori:</span>
                  <span className="font-semibold text-gray-800">{product.category}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-gray-600 font-medium w-24">Berat:</span>
                  <span className="font-semibold text-gray-800">{product.weight}</span>
                </div>
              </div>

              {/* Description */}
              <div>
                <h4 className="font-bold text-gray-800 mb-3 text-lg">Deskripsi Produk:</h4>
                <p className="text-gray-600 leading-relaxed">{product.description}</p>
              </div>

              {/* Price Box */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border-2 border-purple-200">
                <p className="text-sm text-gray-600 mb-2">Harga:</p>
                <p className="text-4xl font-bold text-purple-600">
                  Rp {product.price.toLocaleString('id-ID')}
                </p>
              </div>

              {/* Visit Store CTA */}
              <div className="bg-gradient-to-r from-purple-600 to-pink-500 rounded-xl p-6 text-white">
                <h4 className="text-lg font-bold mb-3">Tertarik dengan produk ini?</h4>
                <p className="text-purple-100 mb-4 text-sm">
                  Kunjungi toko kami untuk melihat produk secara langsung dan konsultasi dengan tim kami.
                </p>
                
                <div className="space-y-3">
                  <a
                    href="https://maps.app.goo.gl/Py6oAzWHKixeSVBFA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-white text-purple-600 py-3 rounded-lg font-bold hover:bg-purple-50 transition-all flex items-center justify-center space-x-2"
                  >
                    <MapPin className="w-5 h-5" />
                    <span>Lihat Lokasi Toko</span>
                  </a>
                  
                  <a
                    href="tel:+6285266840400"
                    className="w-full bg-purple-700 hover:bg-purple-800 text-white py-3 rounded-lg font-bold transition-all flex items-center justify-center space-x-2"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Hubungi: 0852-6684-0400</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
