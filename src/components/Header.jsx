import React, { useCallback } from "react";

const Header = () => {
  const handleScroll = useCallback((id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-[#f0ecd9]/80 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <h1
          className="text-3xl font-tienne text-[#166f4f] font-bold cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Warung Arvin
        </h1>

        <nav className="space-x-8">
          <button
            onClick={() => handleScroll("menu")}
            className="text-lg font-tienne text-[#166f4f] hover:text-[#ed7236] transition-colors duration-300"
          >
            Menu
          </button>
          <button
            onClick={() => handleScroll("about")}
            className="text-lg font-tienne text-[#166f4f] hover:text-[#ed7236] transition-colors duration-300"
          >
            Tentang
          </button>
          <button
            onClick={() => handleScroll("order")}
            className="text-lg font-tienne text-[#166f4f] hover:text-[#ed7236] transition-colors duration-300"
          >
            Cara Order
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
