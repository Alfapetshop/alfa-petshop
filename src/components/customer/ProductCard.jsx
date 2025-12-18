import React from 'react';
import { Eye } from 'lucide-react';

export default function ProductCard({ product, onViewDetail }) {
  return (
    <div 
      onClick={() => onViewDetail(product)}
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2 cursor-pointer group"
    >
      <div className="h-64 bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center p-6 relative">
        <img
          src={product.image}
          alt={product.name}
          className="max-h-full max-w-full object-contain transition-transform group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all flex items-center justify-center">
          <div className="bg-white rounded-full p-3 opacity-0 group-hover:opacity-100 transition-all transform scale-0 group-hover:scale-100">
            <Eye className="w-6 h-6 text-purple-600" />
          </div>
        </div>
      </div>
      <div className="p-6">
        <span className="inline-block bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full mb-2">
          {product.brand}
        </span>
        <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-gray-500 text-sm">{product.weight}</span>
          <span className="text-2xl font-bold text-purple-600">
            Rp {product.price.toLocaleString('id-ID')}
          </span>
        </div>
      </div>
    </div>
  );
}
