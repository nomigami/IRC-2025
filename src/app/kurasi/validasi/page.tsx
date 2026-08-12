"use client";

import { motion } from "framer-motion";
import { ShieldCheck, UploadCloud } from "lucide-react";

export default function ValidateCertificatePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white">

      <section className="max-w-3xl mx-auto px-6 py-20">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >

          <ShieldCheck
            className="mx-auto text-green-400"
            size={60}
          />

          <h1 className="text-4xl font-bold mt-6">
            Validasi Sertifikat
          </h1>

          <p className="text-gray-300 mt-4">
            Upload file PDF sertifikat untuk memastikan bahwa sertifikat tersebut
            terdaftar pada sistem IRC Robotik.
          </p>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .2 }}
          className="mt-12 bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-xl"
        >

          <label className="block mb-4">
            Upload Sertifikat
          </label>

          <label className="border-2 border-dashed border-slate-600 rounded-2xl p-10 flex flex-col items-center cursor-pointer hover:border-green-400 transition">

            <UploadCloud size={60} className="text-green-400" />

            <p className="mt-4 text-lg">
              Drag & Drop PDF
            </p>

            <p className="text-gray-400 text-sm mt-2">
              atau klik untuk memilih file
            </p>

            <input
              type="file"
              accept=".pdf"
              hidden
            />

          </label>

          <button className="w-full mt-8 py-3 rounded-xl bg-green-600 hover:bg-green-700 transition">
            Validasi Sertifikat
          </button>

        </motion.div>

      </section>

    </main>
  );
}