"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FileSearch, ShieldCheck } from "lucide-react";

export default function CertificatePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white">

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-24 text-center">

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          className="text-4xl md:text-6xl font-bold"
        >
          Kurasi Center
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          className="mt-6 max-w-3xl mx-auto text-gray-300 leading-8"
        >
          Selamat datang di layanan kurasi Innovation Robotic Competition
          2025. Silakan pilih layanan yang ingin Anda gunakan.
        </motion.p>

      </section>

      {/* Card */}
      <section className="max-w-6xl mx-auto px-6 pb-24">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* CEK */}
          <motion.div
            whileHover={{ y: -8 }}
            transition={{ duration: .3 }}
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10 shadow-xl"
          >

            <div className="w-20 h-20 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto">
              <FileSearch size={42} className="text-blue-400" />
            </div>

            <h2 className="text-2xl font-semibold mt-8 text-center">
              Cek Sertifikat
            </h2>

            <p className="text-gray-300 mt-4 text-center leading-7">
              Cari sertifikat peserta yang telah diterbitkan oleh panitia IRC
              Robotik 2025 berdasarkan nama atau nomor sertifikat.
            </p>

            <Link href="/kurasi/cek">
              <button className="mt-8 w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition font-semibold">
                Cek Sekarang
              </button>
            </Link>

          </motion.div>

          {/* VALIDASI */}
          <motion.div
            whileHover={{ y: -8 }}
            transition={{ duration: .3 }}
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10 shadow-xl"
          >

            <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto">
              <ShieldCheck size={42} className="text-green-400" />
            </div>

            <h2 className="text-2xl font-semibold mt-8 text-center">
              Validasi Sertifikat
            </h2>

            <p className="text-gray-300 mt-4 text-center leading-7">
              Upload file sertifikat yang Anda miliki untuk memastikan bahwa
              sertifikat tersebut terdaftar pada sistem IRC Robotik.
            </p>

            <Link href="/kurasi/validasi">
              <button className="mt-8 w-full py-3 rounded-xl bg-green-600 hover:bg-green-700 transition font-semibold">
                Validasi Sekarang
              </button>
            </Link>

          </motion.div>

        </div>

      </section>

      {/* Cara Menggunakan */}
      <section className="max-w-5xl mx-auto px-6 pb-24">

        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10">

          <h2 className="text-3xl font-semibold text-center mb-8">
            Cara Menggunakan
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div>
              <h3 className="text-xl font-semibold text-blue-400">
                📄 Cek Sertifikat
              </h3>

              <ul className="mt-4 text-gray-300 space-y-2">
                <li>• Klik tombol Cek Sertifikat.</li>
                <li>• Masukkan nama atau nomor sertifikat.</li>
                <li>• Klik Cari.</li>
                <li>• Download sertifikat apabila tersedia.</li>
              </ul>

            </div>

            <div>

              <h3 className="text-xl font-semibold text-green-400">
                ✔ Validasi Sertifikat
              </h3>

              <ul className="mt-4 text-gray-300 space-y-2">
                <li>• Klik tombol Validasi Sertifikat.</li>
                <li>• Upload file PDF sertifikat.</li>
                <li>• Sistem akan melakukan pengecekan.</li>
                <li>• Hasil validasi akan ditampilkan.</li>
              </ul>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}