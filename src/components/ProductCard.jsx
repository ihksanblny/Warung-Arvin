import React from "react";

export default function ProductCard({ name, desc, imageSrc, alt }) {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 font-tienne w-full max-w-sm mx-auto h-[460px]">
      {/* Gambar produk */}
      <div className="w-full h-[200px] overflow-hidden rounded-xl mb-4">
        <img
          src={imageSrc}
          alt={alt || name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Teks konten */}
      <div className="flex flex-col justify-between flex-grow">
        <h2 className="text-2xl text-[#166f4f] font-bold mb-1 leading-snug h-[56px] overflow-hidden text-ellipsis">
          {name}
        </h2>
        <p className="text-gray-700 leading-relaxed h-[48px] overflow-hidden text-ellipsis">
          {desc}
        </p>
      </div>
    </div>
  );
}
