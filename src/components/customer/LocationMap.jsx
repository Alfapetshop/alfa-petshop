import React from 'react';

export default function LocationMap() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Lokasi Toko Kami</h2>
          <p className="text-gray-600 text-lg">Klik peta untuk melihat lokasi di Google Maps</p>
        </div>

        {/* Clickable Map Image */}
        <div className="max-w-4xl mx-auto">
          <a
            href="https://maps.app.goo.gl/Py6oAzWHKixeSVBFA"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all hover:scale-[1.02] group"
          >
            <div className="relative">
              <img
                src="/map-location.png"
                alt="Lokasi ALFA PETSHOP di Google Maps"
                className="w-full h-auto"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-purple-600 bg-opacity-0 group-hover:bg-opacity-20 transition-all flex items-center justify-center">
                <div className="bg-white rounded-full px-6 py-3 shadow-lg opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all">
                  <p className="text-purple-600 font-bold">Buka Google Maps →</p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
