"use client";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
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
    <header className="w-full bg-transparent fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-xl font-bold text-white bg-black/70 px-4 py-1 rounded-lg shadow-md backdrop-blur-md"
        >
          IRC Robotik 2025
        </motion.span>

        {/* Menu Desktop */}
        <nav className="hidden md:flex items-center space-x-6 text-white">
          {menuItems.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{
                scale: 1.1,
                backgroundColor: "rgba(0,0,0,0.9)",
                boxShadow: "0 4px 12px rgba(255,255,255,0.15)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="rounded-lg"
            >
              <Link
                href={item.path}
                className="block px-4 py-1 bg-black/70 rounded-lg text-white backdrop-blur-sm transition-all"
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Tombol Hamburger (Mobile) */}
        <motion.button
          onClick={toggleMenu}
          className="md:hidden text-white bg-black/70 p-2 rounded-lg focus:outline-none backdrop-blur-md shadow-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Menu Mobile Estetik */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="md:hidden fixed top-16 left-4 right-4 bg-black/60 backdrop-blur-lg rounded-2xl shadow-lg border border-white/10 py-6 z-40"
          >
            <div className="flex flex-col space-y-4 text-center">
              {menuItems.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(255,255,255,0.1)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="rounded-lg"
                >
                  <Link
                    href={item.path}
                    onClick={() => setIsOpen(false)}
                    className="block mx-10 px-4 py-2 bg-black/70 rounded-lg text-white shadow-sm hover:shadow-white/10 transition-all"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
