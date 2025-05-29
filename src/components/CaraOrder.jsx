// components/CaraOrder.jsx
import React from "react";
import { PhoneIcon, ChatBubbleLeftIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";

export default function CaraOrder() {
  return (
    <section id="order" className="py-20 px-4 font-tienne">
      <div className="max-w-6xl mx-auto bg-[#fff8ec] rounded-3xl shadow-md p-10">
        <h2 className="text-4xl font-bold text-center text-[#166f4f] mb-14">
          Cara Order
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Langkah 1 */}
          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <PhoneIcon className="w-12 h-12 mx-auto text-[#ed7236]" />
            <h3 className="text-xl font-bold mt-4 text-[#166f4f]">Hubungi Kami</h3>
            <p className="text-gray-700 mt-2">
              Hubungi via WhatsApp atau telepon untuk menanyakan stok & menu hari ini.
            </p>
          </div>

          {/* Langkah 2 */}
          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <ChatBubbleLeftIcon className="w-12 h-12 mx-auto text-[#ed7236]" />
            <h3 className="text-xl font-bold mt-4 text-[#166f4f]">Konsultasi & Order</h3>
            <p className="text-gray-700 mt-2">
              Pilih menu dan jumlah pesanan. Bisa juga request untuk acara khusus.
            </p>
          </div>

          {/* Langkah 3 */}
          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <ShoppingBagIcon className="w-12 h-12 mx-auto text-[#ed7236]" />
            <h3 className="text-xl font-bold mt-4 text-[#166f4f]">Ambil atau Dikirim</h3>
            <p className="text-gray-700 mt-2">
              Pesanan bisa diambil langsung atau dikirim ke rumah Anda (area tertentu).
            </p>
          </div>
        </div>

        {/* Tombol WhatsApp */}
        <div className="text-center mt-14">
          <a
            href="https://wa.me/628965517221" // Ganti dengan nomor WA asli
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-[#ed7236] hover:bg-[#d6622f] text-white font-bold py-4 px-10 rounded-full text-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105">
              Order via WhatsApp
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
