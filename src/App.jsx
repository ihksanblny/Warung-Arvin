import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./components/HomeScreen"; // atau './pages/HomeScreen' jika kamu letakkan di folder `pages`

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f0ecd9] text-[#166f4f] font-sans">
      <Header />
      <HomeScreen />
      <Footer />
    </div>
  );
}
