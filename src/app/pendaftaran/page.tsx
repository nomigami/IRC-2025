'use client'
import Navbar from '../../Navbar'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FileText, ClipboardList } from 'lucide-react'
import Footer from '../Footer'

export default function Pendaftaran() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-green-100 via-white to-blue-100">
      <Navbar />

      <main className="max-w-4xl mx-auto px-6 py-32">
        {/* Judul */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-extrabold text-center mb-10 text-green-700 drop-shadow-md"
        >
          Pendaftaran Lomba <br />
          <span className="text-blue-700">INNOVATION ROBOTIC COMPETITION 2025</span>
        </motion.h1>

        {/* Card Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-black backdrop-blur-lg rounded-2xl shadow-xl p-10 text-center space-y-8 border border-gray-200"
        >
          <p className="text-lg text-white-700 leading-relaxed">
            Silakan gunakan link di bawah ini untuk melakukan{" "}
            <span className="font-semibold text-green-600">pendaftaran lomba</span> 
            dan membaca{" "}
            <span className="font-semibold text-blue-600">juknis lomba</span> 
            secara lengkap.
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center">
            {/* Link Formulir */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSd_2Pqvgq7qe4JgUjvFVOmeGP9oyx7jhIR2sL_rsDbGYPC7wQ/viewform"
                target="_blank"
                className="flex items-center justify-center gap-3 bg-green-600 text-white px-8 py-4 rounded-xl shadow-md hover:bg-green-500 transition font-semibold"
              >
                <ClipboardList className="w-6 h-6" />
                Formulir Pendaftaran
              </Link>
            </motion.div>

            {/* Link Juknis */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="https://bit.ly/JUKNISIRC2025"
                target="_blank"
                className="flex items-center justify-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-xl shadow-md hover:bg-blue-500 transition font-semibold"
              >
                <FileText className="w-6 h-6" />
                Unduh Juknis Lomba
              </Link>
            </motion.div>
          </div>
        </motion.div>

        
      </main>
      <Footer />
    </div>
    
  )
}
