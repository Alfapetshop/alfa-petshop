# 🚀 DEPLOY KE VERCEL - GRATIS SELAMANYA

## 🎯 Yang Kamu Dapat:

✅ **Hosting gratis selamanya**
✅ **Domain gratis** dari Vercel (`.vercel.app`)
✅ **SSL/HTTPS otomatis** (aman & profesional)
✅ **Auto deploy** (push GitHub → otomatis update website)
✅ **Unlimited bandwidth** (100GB/bulan - lebih dari cukup!)
✅ **Fast & reliable** (CDN global)

---

## 📋 Persiapan (5 Menit)

### **1. Akun yang Dibutuhkan:**

#### **A. GitHub** (Gratis)
- Buka: https://github.com/signup
- Daftar dengan email
- Verifikasi email

#### **B. Vercel** (Gratis)
- Buka: https://vercel.com/signup
- **Login dengan GitHub** (paling mudah!)
- Klik "Continue with GitHub"
- Authorize Vercel

**DONE!** Kedua akun siap! ✅

---

## 🚀 STEP-BY-STEP DEPLOY

### **STEP 1: Upload Project ke GitHub**

#### **Di VSCode / Terminal:**

```bash
# 1. Masuk ke folder project
cd alfa-petshop-final

# 2. Initialize Git
git init

# 3. Add semua file
git add .

# 4. Commit
git commit -m "Initial commit - ALFA PETSHOP Catalog"

# 5. Buat repository di GitHub
# Buka: https://github.com/new
# Nama repo: alfa-petshop
# Private atau Public (terserah)
# JANGAN centang "Initialize with README"
# Klik "Create repository"

# 6. Connect ke GitHub (ganti USERNAME dengan username GitHub kamu)
git remote add origin https://github.com/USERNAME/alfa-petshop.git

# 7. Push ke GitHub
git branch -M main
git push -u origin main
```

**✅ Project sudah di GitHub!**

---

### **STEP 2: Deploy di Vercel**

#### **Di Browser:**

1. **Buka:** https://vercel.com/dashboard

2. **Klik tombol:** "Add New..." → "Project"

3. **Import Git Repository:**
   - Akan muncul list repository dari GitHub
   - Cari repository: **"alfa-petshop"**
   - Klik **"Import"**

4. **Configure Project:**
   
   **Project Name:** (Nama domain kamu)
   ```
   alfa-petshop
   ```
   
   **Framework Preset:** (Auto-detect)
   ```
   Vite
   ```
   
   **Root Directory:** (Biarkan kosong)
   ```
   ./
   ```
   
   **Build Command:** (Otomatis terisi)
   ```
   npm run build
   ```
   
   **Output Directory:** (Otomatis terisi)
   ```
   dist
   ```
   
   **Install Command:** (Otomatis terisi)
   ```
   npm install
   ```

5. **Klik tombol besar:** **"Deploy"**

6. **TUNGGU 1-3 MENIT** 🕐

   Vercel akan:
   - ✅ Clone repository
   - ✅ Install dependencies
   - ✅ Build project
   - ✅ Deploy ke server
   - ✅ Generate domain

7. **SELESAI!** 🎉

   Akan muncul layar:
   ```
   🎊 Congratulations!
   
   Your project has been deployed!
   ```

---

### **STEP 3: Buka Website Kamu!**

**Domain Gratis:**
```
https://alfa-petshop.vercel.app
```

Atau sesuai nama project yang kamu set.

**Format:** `https://[nama-project].vercel.app`

---

## 🔐 Akses Admin

**URL Admin:**
```
https://alfa-petshop.vercel.app?admin=true
```

**Login:**
- Username: `admin`
- Password: `admin123`

**⚠️ PENTING:** Simpan URL admin ini! Ga ada link di website!

---

## 🔄 Update Website (Auto Deploy)

Setiap kali ada perubahan, **otomatis deploy ulang!**

```bash
# 1. Edit file di VSCode

# 2. Commit & Push
git add .
git commit -m "Update produk baru"
git push

# 3. OTOMATIS DEPLOY!
# Website update dalam 1-2 menit!
```

**Ga perlu login Vercel lagi!** 🚀

---

## 🎨 Custom Domain Gratis Vercel

Vercel kasih domain gratis:

**Default:** `alfa-petshop.vercel.app`

**Bisa diganti jadi:**
- `alfa-petshop-lampung.vercel.app`
- `petshop-alfa.vercel.app`
- `makanan-kucing-lampung.vercel.app`

**Cara Ganti:**

1. Masuk Vercel Dashboard
2. Pilih project
3. Klik **"Settings"**
4. Klik **"Domains"**
5. Klik **"Edit"** di domain default
6. Ganti nama
7. **Save**

**Domain baru aktif dalam 1 menit!** ✅

---

## 💎 (Opsional) Custom Domain Sendiri

Kalau mau domain sendiri (`.com`, `.id`, dll):

### **1. Beli Domain** (~Rp 150.000/tahun)

Beli di:
- **Niagahoster** - https://niagahoster.co.id
- **Dewaweb** - https://dewaweb.com
- **Cloudflare** - https://cloudflare.com (paling murah!)

Contoh: `alfapetshop.com`

### **2. Connect ke Vercel** (Gratis!)

1. Di Vercel Dashboard → Project → Settings → Domains
2. Klik **"Add"**
3. Masukkan domain: `alfapetshop.com`
4. Ikuti instruksi DNS (copy nameserver)
5. Update nameserver di tempat beli domain
6. Tunggu 24-48 jam (propagasi DNS)
7. **DONE!** Domain sendiri aktif! 🎉

---

## 📊 Monitoring Website

### **Di Vercel Dashboard:**

Kamu bisa lihat:
- ✅ Status deployment
- ✅ Traffic/visitor
- ✅ Performance
- ✅ Error logs
- ✅ Build history

**Semua gratis & real-time!**

---

## 🔧 Setting Penting

### **Environment Variables** (Opsional)

Kalau butuh password admin yang aman:

1. Vercel Dashboard → Project → Settings
2. Klik **"Environment Variables"**
3. Add:
   - Key: `VITE_ADMIN_USER`
   - Value: `admin_rahasia`
   - Key: `VITE_ADMIN_PASS`
   - Value: `password_super_rahasia_123`

4. Update code `AppContext.jsx`:
   ```javascript
   const login = (username, password) => {
     if (username === import.meta.env.VITE_ADMIN_USER && 
         password === import.meta.env.VITE_ADMIN_PASS) {
       setIsAdmin(true);
       return true;
     }
     return false;
   };
   ```

---

## 🎁 Bonus: Analytics (Opsional)

### **Vercel Analytics** (Gratis!)

Aktifkan untuk lihat statistik visitor:

1. Vercel Dashboard → Project
2. Tab **"Analytics"**
3. Klik **"Enable"**
4. Install package:
   ```bash
   npm install @vercel/analytics
   ```
5. Update `main.jsx`:
   ```javascript
   import { Analytics } from '@vercel/analytics/react';
   
   // Tambah di render:
   <Analytics />
   ```

**Lihat statistik:** Vercel Dashboard → Analytics

---

## 📱 Serah Terima ke Pemilik Petshop

### **Yang Perlu Diserahkan:**

1. **Akun GitHub**
   - Email & password
   - Repository: `https://github.com/USERNAME/alfa-petshop`

2. **Akun Vercel**
   - Email & password
   - Dashboard: `https://vercel.com/dashboard`

3. **URL Website**
   - Customer: `https://alfa-petshop.vercel.app`
   - Admin: `https://alfa-petshop.vercel.app?admin=true`

4. **Login Admin**
   - Username: `admin`
   - Password: `admin123`

5. **Panduan Singkat** (Print atau PDF):
   - Cara login admin
   - Cara upload produk
   - Cara edit/hapus produk
   - Cara update website (push GitHub)

---

## ✅ Checklist Deploy

- [ ] Buat akun GitHub
- [ ] Buat akun Vercel (login via GitHub)
- [ ] Push project ke GitHub
- [ ] Import di Vercel
- [ ] Klik Deploy
- [ ] Tunggu 2-3 menit
- [ ] Website online! 🎉
- [ ] Test: Buka domain
- [ ] Test: Login admin (`?admin=true`)
- [ ] Test: Upload produk
- [ ] Bookmark URL admin
- [ ] Serah terima ke pemilik

---

## 🆘 Troubleshooting

### **Build Failed:**
- Cek error di Vercel logs
- Pastikan `package.json` lengkap
- Test `npm run build` di lokal dulu

### **404 Not Found:**
- Pastikan output directory: `dist`
- Cek routing di `vite.config.js`

### **Gambar Tidak Muncul:**
- Pastikan gambar ada di folder `public/`
- Path harus: `/image.jpg` (slash di depan)

### **Domain Tidak Aktif:**
- Tunggu 1-2 jam (DNS propagation)
- Clear browser cache (Ctrl + F5)

---

## 💰 Biaya

**Total Biaya:** **Rp 0 (GRATIS!)** 🎉

- ✅ Hosting: **GRATIS SELAMANYA**
- ✅ Domain `.vercel.app`: **GRATIS**
- ✅ SSL/HTTPS: **GRATIS**
- ✅ Bandwidth 100GB: **GRATIS**
- ✅ Auto deploy: **GRATIS**

**Opsional:**
- Custom domain (.com): ~Rp 150.000/tahun

---

## 🎯 Kesimpulan

**Website katalog ALFA PETSHOP:**
- ✅ Online 24/7
- ✅ Fast & reliable
- ✅ HTTPS (aman)
- ✅ Auto backup
- ✅ Easy update
- ✅ **100% GRATIS!**

**Perfect untuk petshop!** 🐱🏪

---

**Ikuti panduan ini step-by-step, website online dalam 10 menit!** 🚀

**Selamat mencoba!** 😊
