"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <header className="w-full bg-transparent absolute top-0 left-0 z-10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <span className="text-xl font-bold text-white bg-black/70 px-4 py-1 rounded-lg">
          IRC Robotik 2025
        </span>
        <nav className="flex items-center space-x-6 text-white">
          {[
            { name: "Beranda", path: "/" },
            { name: "Kategori", path: "/kategori" },
            { name: "Data", path: "/data" },
            { name: "Kontak", path: "/kontak" },
          ].map((item, i) => (
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
      </div>
    </header>
  );
}
