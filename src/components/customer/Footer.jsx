import React from 'react';
import { Phone, MapPin, Mail, Instagram, Facebook, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img src="/logo.png" alt="ALFA PETSHOP" className="w-12 h-12 object-contain" />
              <h3 className="text-2xl font-bold">ALFA PETSHOP</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Menyediakan makanan kucing berkualitas tinggi dengan harga terjangkau. 
              Kesehatan hewan peliharaan Anda adalah prioritas kami.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Hubungi Kami</h3>
            <div className="space-y-3 text-gray-400">
              <a 
                href="tel:+6285266840400"
                className="flex items-center space-x-3 hover:text-purple-400 transition-colors"
              >
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>0852-6684-0400</span>
              </a>
              <a 
                href="mailto:info@alfapetshop.com"
                className="flex items-center space-x-3 hover:text-purple-400 transition-colors"
              >
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>info@alfapetshop.com</span>
              </a>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                <span>Bandar Lampung, Lampung, Indonesia</span>
              </div>
            </div>
          </div>

          {/* Hours & Social */}
          <div>
            <h3 className="text-xl font-bold mb-4">Jam Operasional</h3>
            <div className="text-gray-400 space-y-2 mb-6">
              <p>Senin - Sabtu: 08.00 - 20.00</p>
              <p>Minggu: 09.00 - 18.00</p>
            </div>
            
            <h4 className="font-semibold mb-3">Media Sosial</h4>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="bg-gray-700 hover:bg-purple-600 p-3 rounded-full transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="bg-gray-700 hover:bg-purple-600 p-3 rounded-full transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://wa.me/6285266840400" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-green-600 p-3 rounded-full transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 ALFA PETSHOP. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
