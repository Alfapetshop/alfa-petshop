# 🏪 ALFA PETSHOP - Website Katalog dengan Lokasi Toko

Website katalog produk makanan kucing dengan admin panel dan integrasi Google Maps.

## 🎯 Fitur

### **Customer (Public):**
✅ Katalog produk lengkap dengan gambar
✅ Search & filter kategori (Wet Food / Dry Food)
✅ Detail produk (modal)
✅ **Google Maps** menampilkan lokasi toko
✅ Info kontak lengkap (alamat, telepon, email, jam buka)
✅ Responsive design (mobile-friendly)

### **Admin (Private):**
✅ Login admin (username: `admin`, password: `admin123`)
✅ Dashboard statistik
✅ Upload produk baru (dengan upload gambar)
✅ Edit produk
✅ Hapus produk
✅ Data tersimpan di localStorage

## 📦 Instalasi

### **1. Install Dependencies**

```bash
npm install
```

### **2. Jalankan Development Server**

```bash
npm run dev
```

### **3. Buka Browser**

```
http://localhost:5173
```

## 🗺️ Setup Google Maps (PENTING!)

Embed map di file `src/components/customer/LocationMap.jsx` masih pakai URL dummy.

**Cara dapat embed URL yang benar:**

1. Buka Google Maps: https://maps.app.goo.gl/Py6oAzWHKixeSVBFA
2. Klik tombol **"Share"** atau **"Bagikan"**
3. Pilih tab **"Embed a map"**
4. Copy kode iframe, ambil bagian `src="..."`
5. Replace di file `src/components/customer/LocationMap.jsx` baris 18

**Contoh:**
```jsx
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d..."
  // ... rest of props
></iframe>
```

## 📝 Kustomisasi

### **Update Alamat Toko:**

Edit `src/components/customer/LocationMap.jsx` baris 35-40:

```jsx
<p className="text-gray-600">
  [ALAMAT LENGKAP KAMU]<br />
  Bandar Lampung, Lampung<br />
  Indonesia
</p>
```

### **Update Nomor Telepon:**

Cari `6285266840400` dan ganti dengan nomor kamu di:
1. `src/components/customer/LocationMap.jsx` (baris 50)
2. `src/components/customer/ProductDetailModal.jsx` (baris 81)

### **Update Email:**

Edit `src/components/customer/LocationMap.jsx` baris 55:

```jsx
<a href="mailto:EMAIL_KAMU@domain.com">
```

### **Ganti Logo:**

Replace file `public/logo.png` dengan logo kamu.

### **Update Jam Buka:**

Edit `src/components/customer/LocationMap.jsx` baris 65-70.

## 🔐 Akses Admin

**URL:** http://localhost:5173?admin=true  
**Username:** `admin`  
**Password:** `admin123`

Atau klik "Admin Access" di footer website.

### **Cara Upload Produk:**

1. Login ke admin panel
2. Klik menu "Produk"
3. Klik tombol "Tambah Produk"
4. Isi form:
   - Nama produk
   - Brand
   - Kategori (Wet Food / Dry Food)
   - Harga (angka saja)
   - Berat (contoh: 400g, 1kg)
   - Upload gambar
   - Deskripsi
5. Klik "Tambah Produk"

## 🚀 Deploy ke Vercel

### **1. Push ke GitHub**

```bash
git init
git add .
git commit -m "Initial commit - ALFA PETSHOP catalog"
git remote add origin https://github.com/USERNAME/REPO.git
git push -u origin main
```

### **2. Deploy di Vercel**

1. Buka https://vercel.com
2. Login dengan GitHub
3. Klik "Import Project"
4. Pilih repository
5. Framework: **Vite** (auto-detect)
6. Klik "Deploy"

Selesai! Website online dalam 2-3 menit.

## 📱 Link Akses

**Customer:** https://your-site.vercel.app  
**Admin:** https://your-site.vercel.app?admin=true

## 📁 Struktur Project

```
src/
├── components/
│   ├── customer/
│   │   ├── Header.jsx              # Header dengan tombol lokasi
│   │   ├── HeroSection.jsx         # Banner dengan search
│   │   ├── CategoryFilter.jsx      # Filter kategori
│   │   ├── ProductCard.jsx         # Card produk
│   │   ├── ProductDetailModal.jsx  # Modal detail produk
│   │   ├── LocationMap.jsx         # Google Maps section
│   │   ├── Footer.jsx              # Footer dengan link admin
│   │   ├── LoginModal.jsx          # Modal login admin
│   │   └── CustomerView.jsx        # Main customer view
│   │
│   └── admin/
│       ├── AdminPanel.jsx          # Main admin panel
│       ├── Dashboard.jsx           # Dashboard statistik
│       ├── Sidebar.jsx             # Sidebar navigasi
│       ├── ProductManagement.jsx   # Kelola produk
│       └── ProductForm.jsx         # Form produk
│
├── contexts/
│   └── AppContext.jsx              # State management
│
├── App.jsx                         # Router utama
├── main.jsx                        # Entry point
└── index.css                       # Tailwind CSS
```

## 🛠️ Teknologi

- **React 18** - UI Library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **LocalStorage** - Data persistence
- **Google Maps Embed** - Lokasi toko

## 💡 Tips

- Gunakan gambar produk berkualitas tinggi (min. 800x800px)
- Update produk secara berkala
- Test di mobile untuk memastikan responsive
- Backup data localStorage secara berkala (export dari browser)

## 🆘 Troubleshooting

**Map tidak muncul:**
→ Pastikan sudah update embed URL dari Google Maps

**Gambar produk tidak muncul:**
→ Pastikan file ada di folder `public/images/`

**Admin tidak bisa login:**
→ Cek file `AppContext.jsx` sudah benar

## 📞 Support

Jika ada pertanyaan atau butuh bantuan, hubungi developer.

---

**© 2025 ALFA PETSHOP - Katalog Makanan Kucing Berkualitas**
