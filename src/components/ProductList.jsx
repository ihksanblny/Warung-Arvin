import React from "react";
import ProductCard from "./ProductCard";

export default function ProductList({ products }) {
  return (
    <section id="menu" className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-tienne font-bold text-center text-[#166f4f] mb-12">
          Menu Kami
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product, idx) => (
            <ProductCard
              key={idx}
              name={product.name}
              desc={product.desc}
              imageSrc={product.imageSrc}
              alt={product.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
