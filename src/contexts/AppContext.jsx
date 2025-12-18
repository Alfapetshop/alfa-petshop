import React, { createContext, useState, useEffect, useContext } from 'react';

// Initial product data
const initialProducts = [
  {
    id: 1,
    name: "Whiskas Adult Tuna",
    brand: "Whiskas",
    category: "Wet Food",
    price: 12500,
    weight: "400g",
    image: "/images/10053416_1.jpg",
    description: "Makanan kucing basah dengan tuna berkualitas tinggi. Mengandung nutrisi lengkap untuk kucing dewasa dengan protein tinggi dan vitamin yang dibutuhkan."
  },
  {
    id: 2,
    name: "Super Cat Tuna & Chicken",
    brand: "Super Cat",
    category: "Dry Food",
    price: 25000,
    weight: "1kg",
    image: "/images/10130518_1.jpg",
    description: "Makanan kucing kering rasa tuna dan ayam. Membantu menjaga kesehatan pencernaan dengan formula yang mudah dicerna."
  },
  {
    id: 3,
    name: "Me-O Kitten Food",
    brand: "Me-O",
    category: "Wet Food",
    price: 8500,
    weight: "80g",
    image: "/images/10466932_2.jpg",
    description: "Makanan khusus untuk anak kucing dengan nutrisi lengkap untuk pertumbuhan optimal. Mengandung DHA untuk perkembangan otak."
  },
  {
    id: 4,
    name: "Sheba Chicken with Tuna",
    brand: "Sheba",
    category: "Wet Food",
    price: 15000,
    weight: "70g",
    image: "/images/10467342_1.jpg",
    description: "Premium wet food ayam dengan tuna. Tekstur lembut dan rasa yang disukai kucing. Tanpa pengawet buatan."
  },
  {
    id: 5,
    name: "Whiskas Junior Pouch",
    brand: "Whiskas",
    category: "Wet Food",
    price: 9500,
    weight: "85g",
    image: "/images/10605612_2.jpg",
    description: "Makanan kucing junior dalam kemasan pouch yang praktis. Formula khusus untuk kucing muda dengan energi tinggi."
  },
  {
    id: 6,
    name: "Me-O Adult Cat Food",
    brand: "Me-O",
    category: "Dry Food",
    price: 28000,
    weight: "1.2kg",
    image: "/images/10606721_2.jpg",
    description: "Makanan kucing dewasa nutrisi lengkap dengan taurin untuk kesehatan mata dan jantung."
  },
  {
    id: 7,
    name: "Aatas Cat Complete Care",
    brand: "Aatas Cat",
    category: "Wet Food",
    price: 13500,
    weight: "80g",
    image: "/images/10634225_1.jpg",
    description: "Formula lengkap untuk perawatan kucing. Mengandung omega 3 & 6 untuk bulu yang sehat dan berkilau."
  },
  {
    id: 8,
    name: "Wanpy Grain-Free Chicken",
    brand: "Wanpy",
    category: "Dry Food",
    price: 95000,
    weight: "1.5kg",
    image: "/images/10636877_1.jpg",
    description: "Makanan kucing bebas grain dengan ayam asli. Cocok untuk kucing dengan pencernaan sensitif."
  },
  {
    id: 9,
    name: "Me-O Kitten Grain Free",
    brand: "Me-O",
    category: "Dry Food",
    price: 85000,
    weight: "1.3kg",
    image: "/images/10653090_1.jpg",
    description: "Makanan anak kucing bebas grain dengan protein tinggi. Mendukung pertumbuhan tulang dan gigi yang kuat."
  }
];

const AppContext = createContext();

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
};

export const AppProvider = ({ children }) => {
  // State
  const [products, setProducts] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);

  // Load products from localStorage
  useEffect(() => {
    const savedProducts = localStorage.getItem('alfaPetshopCatalog');
    
    if (savedProducts) {
      setProducts(JSON.parse(savedProducts));
    } else {
      setProducts(initialProducts);
      localStorage.setItem('alfaPetshopCatalog', JSON.stringify(initialProducts));
    }
  }, []);

  // Save products to localStorage
  useEffect(() => {
    if (products.length > 0) {
      localStorage.setItem('alfaPetshopCatalog', JSON.stringify(products));
    }
  }, [products]);

  // Product CRUD
  const addProduct = (productData) => {
    const newProduct = {
      id: Date.now(),
      ...productData,
      price: parseFloat(productData.price)
    };
    setProducts([...products, newProduct]);
    return newProduct;
  };

  const updateProduct = (id, productData) => {
    setProducts(products.map(p =>
      p.id === id ? { ...p, ...productData, price: parseFloat(productData.price) } : p
    ));
  };

  const deleteProduct = (id) => {
    setProducts(products.filter(p => p.id !== id));
  };

  // Admin auth
  const login = (username, password) => {
    if (username === 'admin' && password === 'admin123') {
      setIsAdmin(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAdmin(false);
  };

  // Statistics
  const totalProducts = products.length;

  const value = {
    // State
    products,
    isAdmin,
    totalProducts,
    
    // Product functions
    addProduct,
    updateProduct,
    deleteProduct,
    
    // Auth functions
    login,
    logout
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
