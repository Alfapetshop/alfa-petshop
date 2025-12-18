import React from 'react';
import { Package } from 'lucide-react';
import { useApp } from '../../contexts/AppContext';

export default function Dashboard() {
  const { totalProducts } = useApp();

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">Dashboard</h2>
      
      {/* Statistics Card */}
      <div className="grid grid-cols-1 gap-6">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm font-semibold">Total Produk</p>
              <p className="text-3xl font-bold text-purple-600 mt-2">{totalProducts}</p>
            </div>
            <div className="bg-purple-100 p-4 rounded-full">
              <Package className="w-8 h-8 text-purple-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-bold mb-4">Selamat Datang di Admin Panel!</h3>
        <p className="text-gray-600 mb-4">
          Gunakan menu di samping untuk mengelola produk katalog.
        </p>
        <ul className="space-y-2 text-gray-600">
          <li>• <strong>Produk:</strong> Tambah, edit, atau hapus produk di katalog</li>
          <li>• <strong>Upload Gambar:</strong> Upload foto produk langsung dari form</li>
          <li>• <strong>Data Tersimpan:</strong> Semua data disimpan di localStorage browser</li>
        </ul>
      </div>

      {/* Tips */}
      <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border-2 border-purple-200">
        <h4 className="font-bold text-gray-800 mb-3">💡 Tips:</h4>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li>✅ Gunakan gambar berkualitas tinggi untuk produk</li>
          <li>✅ Tulis deskripsi yang informatif dan menarik</li>
          <li>✅ Update harga secara berkala</li>
          <li>✅ Kategorikan produk dengan benar (Wet Food / Dry Food)</li>
        </ul>
      </div>
    </div>
  );
}