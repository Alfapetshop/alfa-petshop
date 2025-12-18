import React from 'react';
import { MapPin } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src="/logo.png" alt="ALFA PETSHOP Logo" className="w-16 h-16 object-contain" />
            <div>
              <h1 className="text-3xl font-bold">ALFA PETSHOP</h1>
              <p className="text-sm text-purple-100">Katalog Makanan Kucing Berkualitas</p>
            </div>
          </div>
          
          <a
            href="https://maps.app.goo.gl/Py6oAzWHKixeSVBFA"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-purple-50 transition-all shadow-lg flex items-center space-x-2"
          >
            <MapPin className="w-5 h-5" />
            <span className="hidden md:inline">Lokasi Toko</span>
          </a>
        </div>
      </div>
    </header>
  );
}
