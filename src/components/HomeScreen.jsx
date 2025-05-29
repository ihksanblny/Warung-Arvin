import React, { useState, useEffect, useRef } from "react";
import { SparklesIcon, FireIcon, TagIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";

import Header from "../components/Header";
import Footer from "../components/Footer";
import CaraOrder from "../components/CaraOrder";
import ProductList from "../components/ProductList";
import Tentang from "../components/Tentang";

// Gambar Hero
const heroImages = [
  "/image/risol1.jpg",
  "/image/risol2.jpg",
  "/image/risol3.jpg",
];

// Daftar Produk
// Daftar Produk dengan gambar
const products = [
  {
    name: "Risol Mayo",
    desc: "Risol isi mayo dan smoked beef.",
    imageSrc: "/image/risol-mayo.jpg",
  },
  {
    name: "Lumpia Sayur",
    desc: "Lumpia renyah isi sayuran segar.",
    imageSrc: "/image/lumpia-sayur.jpg",
  },
  {
    name: "Pastel Ayam",
    desc: "Pastel dengan isian ayam dan telur.",
    imageSrc: "/image/pastel-ayam.jpg",
  },
  {
    name: "Kroket Kentang",
    desc: "Kroket isi daging cincang dan sayur.",
    imageSrc: "/image/kroket-kentang.jpg",
  },
  {
    name: "Sosis Solo",
    desc: "Sosis Solo gurih isi ayam.",
    imageSrc: "/image/sosis-solo.jpg",
  },
  {
    name: "Bakwan Sayur",
    desc: "Bakwan goreng isi sayur segar.",
    imageSrc: "/image/bakwan-sayur.png",
  },
];


export default function HomePage() {
  const [currentImage, setCurrentImage] = useState(0);
  const productListRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const scrollToProductList = () => {
    productListRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-[#f0ecd9] font-tienne">
      <main className="max-w-7xl mx-auto px-6 pt-24 pb-32 space-y-28">
        {/* Hero Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div className="text-center lg:text-left">
            <p className="text-sm font-bold text-[#ed7236] tracking-wider">
              CAMILAN TERBAIK DI KOTA
            </p>
            <h1 className="text-5xl lg:text-6xl font-extrabold text-[#166f4f] mt-3 leading-tight">
              Kelezatan Otentik, Setiap Gigitan
            </h1>
            <p className="mt-6 text-lg text-gray-700 leading-relaxed">
              Temukan aneka camilan rumahan yang lezat dan menggugah selera,
              dibuat dengan bahan-bahan pilihan dan penuh cinta.
            </p>
            <button
              onClick={scrollToProductList}
              className="mt-10 bg-[#ed7236] hover:bg-[#d6622f] text-white font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Lihat Semua Menu
            </button>
          </div>

          {/* Gambar Hero */}
          <div className="relative w-full max-w-lg h-[400px] lg:h-[500px] mx-auto lg:mx-0 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImage}
                initial={{ rotateY: 45, opacity: 0, scale: 0.9 }}
                animate={{ rotateY: 0, opacity: 1, scale: 1 }}
                exit={{ rotateY: -45, opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="bg-[#fdfae7] p-6 md:p-10 rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.08)] w-fit mx-auto"
              >
                <img
                  src={heroImages[currentImage]}
                  alt="Aneka Camilan Lezat"
                  className="rounded-xl w-[350px] md:w-[450px] object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* Keunggulan Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-white rounded-xl shadow-lg">
            <SparklesIcon className="w-12 h-12 mx-auto text-[#166f4f]" />
            <h3 className="text-xl font-bold mt-4 text-[#166f4f]">
              Bahan Segar Pilihan
            </h3>
            <p className="mt-2 text-gray-600">
              Kami hanya menggunakan bahan-bahan terbaik dan segar setiap hari.
            </p>
          </div>
          <div className="text-center p-8 bg-white rounded-xl shadow-lg">
            <FireIcon className="w-12 h-12 mx-auto text-[#166f4f]" />
            <h3 className="text-xl font-bold mt-4 text-[#166f4f]">
              Dibuat dengan Semangat
            </h3>
            <p className="mt-2 text-gray-600">
              Dimasak dengan semangat dan cinta oleh tangan berpengalaman.
            </p>
          </div>
          <div className="text-center p-8 bg-white rounded-xl shadow-lg">
            <TagIcon className="w-12 h-12 mx-auto text-[#166f4f]" />
            <h3 className="text-xl font-bold mt-4 text-[#166f4f]">
              Harga Terjangkau
            </h3>
            <p className="mt-2 text-gray-600">
              Menikmati kualitas premium dengan harga yang bersahabat.
            </p>
          </div>
        </section>

        {/* Menu Produk */}
        <section ref={productListRef}>
          <ProductList products={products} />
        </section>

        {/* Tentang Usaha */}
        <section>
          <Tentang />
        </section>
        {/* Cara Order */}
        <section>
          <CaraOrder />
        </section>
      </main>
    </div>
  );
}
