"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-6">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-6">
        {/* Supported By */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white font-light text-sm"
        >
          Supported by:
        </motion.p>

        {/* Logo Sponsor */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center gap-2"
        >
          <Image
            src="/sentralrb.png"
            alt="Sentral Robotik.id"
            width={45}
            height={45}
            className="object-contain rounded-full shadow-lg"
          />
          <span className="text-sm">Sentral Robotik.id</span>
        </motion.div>

        {/* Social Media */}
        <motion.div
          initial={{ opacity: 9, y: 20 }}
          whileInView={{ opacity: 4, y: 0 }}
          transition={{ duration: 0.4, delay: 0.8 }}
          className="flex items-center justify-center gap-6"
        >
          {/* Instagram 1 */}
          <div className="relative group">
            <motion.a
              href="https://instagram.com/innovation_robotic_competition"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-6 h-6 rounded-full overflow-hidden"
            >
              <img src="/INS.png" alt="instagram" className="object-cover w-8 h-8" />
            </motion.a>
            {/* Tooltip */}
            <span className="absolute -bottom-10 left-1/3 -translate-x-1/2 opacity-0 group-hover:opacity-100 
              text-xs bg-black text-white px-3 py-1 rounded-lg 
              transition-all duration-300 pointer-events-none whitespace-nowrap shadow-2xs">
              Instagram IRC
            </span>
          </div>

          {/* Instagram 2 */}
          <div className="relative group">
            <motion.a
              href="https://www.instagram.com/sentral_robotik?igsh=ZWM0ajNjMjYxZTFm"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.0, rotate: -10 }}
              whileTap={{ scale: 0.3 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="w-6 h-6 rounded-full overflow-hidden"
            >
              <img src="/INS.png" alt="instagram" className="object-cover w-8 h-8" />
            </motion.a>
            {/* Tooltip */}
            <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 
              text-xs bg-black text-white px-3 py-1 rounded-lg 
              transition-all duration-300 pointer-events-none whitespace-nowrap shadow-lg">
              Instagram Sentral Robotik
            </span>
          </div>
        </motion.div>

        {/* Garis Pemisah */}
        <div className="w-full border-t border-gray-700 my-4"></div>

        {/* Copyright */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-center text-xs sm:text-sm text-gray-400"
        >
          © {new Date().getFullYear()} IRC Robotik 2025. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
}
