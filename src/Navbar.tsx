"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { name: "Beranda", path: "/" },
    { name: "Kategori", path: "/kategori" },
    { name: "Data", path: "/data" },
    { name: "Kontak", path: "/kontak" },
  ];

  return (
    <header className="w-full bg-transparent absolute top-0 left-0 z-10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <span className="text-xl font-bold text-white bg-black/70 px-4 py-1 rounded-lg">
          IRC Robotik 2025
        </span>

        {/* Menu Desktop */}
        <nav className="hidden md:flex items-center space-x-6 text-white">
          {menuItems.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1, backgroundColor: "rgba(0,0,0,0.9)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="rounded-lg"
            >
              <Link
                href={item.path}
                className="block px-4 py-1 bg-black/70 rounded-lg text-white"
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Tombol Hamburger (Mobile) */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white bg-black/70 p-2 rounded-lg focus:outline-none"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden bg-black/80 backdrop-blur-md text-center space-y-3 py-4">
          {menuItems.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1, backgroundColor: "rgba(0,0,0,0.9)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="rounded-lg"
            >
              <Link
                href={item.path}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-1 bg-black/70 rounded-lg text-white"
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </div>
      )}
    </header>
  );
}
