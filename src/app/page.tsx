'use client'
import { useState, useEffect } from 'react'
import Head from 'next/head'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from "next/link";
import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Head>
        <title>IRC Robotik 2025</title>
        <meta name="description" content="Kompetisi Robotik Nasional 2025" />
      </Head>

      {/* Loading Screen */}
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loading"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 flex items-center justify-center bg-gray-900 text-white z-50"
          >
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 1 }}
              className="text-3xl md:text-4xl font-bold"
            >
              Welcome to IRC Robotik 2025
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Konten utama */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: loading ? 0 : 1, y: loading ? 30 : 0 }}
        transition={{ duration: 1 }}
      >
        {/* Navbar */}
        <header className="w-full bg-transparent absolute top-0 left-0 z-10">
          <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
            <span className="font-bold text-lg text-white">IRC Robotik 2025</span>
            
           <nav className="flex items-center space-x-6 text-white">
              <Link href="/">Beranda</Link>
              <Link href="/kategori">Kategori</Link>
               <Link href="/data">Data</Link>
              <Link href="/kontak">Kontak</Link>
            </nav>
          </div>
        </header>

      <section className="relative w-full h-[70vh] flex items-center justify-center text-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 ">
        <Image 
          src="/ircc.jpg"
          alt="IRC Robotik 2025"
          fill
          className="rounded-2xl"
          style={{ objectFit: "cover", objectPosition: "left center" }}
          priority
        />
        <div className="absolute inset-0 bg-black/40 "></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-4">
    <motion.h1
  initial={{ opacity: 0, y: -50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: false, amount: 0.5 }}
  className="text-4xl md:text-7xl font-bold mb-2 font-moderniz text-white"
>
  INNOVATION ROBOTIC COMPETITION
</motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: false, amount: 0.5 }}
          className="flex justify-center space-x-2 mb-2"
        >
          <div className="flex items-center justify-center gap-3">
              <div className="flex items-center gap-1 text-white">
                <Image 
                  src="/kemenag.png" 
                  alt="Kementrian Agama" 
                  width={40} 
                  height={40} 
                  className="object-contain" 
                />
                <span className="text-sm">Kemenag Prov.Jateng</span>
              </div>
              <div className="flex items-center gap-0 text-white">
                <Image 
                  src="/mtsn2.png" 
                  alt="MTsN 2 Sukoharjo" 
                  width={40} 
                  height={40} 
                  className="object-contain" 
                />
                <span className="text-sm">MTsN 2 Sukoharjo</span>
              </div>
              </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: false, amount: 0.5 }}
          className="text-white mb-4"
        >
          Kompetisi robotik tingkat nasional untuk pelajar
        </motion.p>

        <motion.a
          href="/pendaftaran"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          viewport={{ once: false, amount: 0.5 }}
          className="inline-block bg-yellow-400 text-gray-900 px-6 py-2 rounded-full font-semibold hover:bg-yellow-300 transition"
        >
          Daftar Sekarang
        </motion.a>
      </div>
    </section>

        {/* Konten Section */}
     <main className="max-w-7xl mx-auto px-8 py-12">
      <div className="grid md:grid-cols-4 gap-6">
        <div className="col-span-2 space-y-6" id="tentang">
          {/* Sambutan */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
            className="bg-gray-800 text-white rounded-xl shadow-lg p-6"
          >
            <h2 className="text-2xl font-bold mb-4">Sambutan</h2>
            <p className="text-justify font-Poppins">
              Puji syukur kita panjatkan kepada Allah SWT atas limpahan rahmat
              dan hidayah-Nya. Kami ucapkan terima kasih kepada seluruh dan peserta yang telah 
              berkenan meramaikan dan berpatisispasi dalam acara sebesar ini tidak lupa 
              juga kami ucapkan terima kasih kepada seluruh panitia yang telah 
              bekerja keras untuk menyelenggarakan acara ini. Kami berharap
              semoga kompetisi ini dapat melahirkan generasi penerus yang
              nantinya akan diikutsertakan dalam olimpiade sains nasional. Dengan
              adanya lomba ini, diharapkan siswa/i seluruh indonesia lebih bisa mempersiapkan
              ajang kompetisi sains di tingkat Kabupaten, Provinsi maupun
              Nasional di masa yang akan datang.
            </p>
          </motion.div>

          {/* Tentang Event */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
            className="bg-gray-800 text-white rounded-xl shadow-lg p-6"
          >
           
            <h2 className="text-2xl font-bold mb-4">Tentang Event</h2>
            <p className="text-justify font-poppins">
              Lomba IRC adalah sebuah lomba yang diadakan setiap setahun sekali
              yang dimana lomba ini diselenggarakan guna memberikan ajang yang
              bergengsi untuk para pelajar di Indonesia. Pada lomba IRC ini ada
              beberapa kategori yang bisa peserta pilih sesuai dengan bidang yang
              telah ditekuni. Spesial pada tahun ini ada beberapa kategori
              tambahan guna memperluas kesempatan bagi para pelajar untuk bisa
              saling menunjukkan kemampuan masing-masing.
            </p>
          </motion.div>

          {/* Timeline Lomba */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
            className="bg-gray-800 text-white rounded-xl shadow-lg p-6"
          >
            <h2 className="text-2xl font-bold mb-4" id="timeline">
              Timeline Lomba
            </h2>
            <ul className="list-disc list-inside space-y-1 font-Poppins">
              <li>Pendaftaran: 5 Oktober - 2 November 2025</li>
              <li>Technical Meeting : 5 November 2025</li>
              <li>Pelaksanaan Lomba: 8-9 November 2025</li>
            </ul>
          </motion.div>

          {/* Catatan */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
            className="bg-gray-800 text-white rounded-xl shadow-lg p-6"
          >
            <h2 className="text-2xl font-bold mb-4">Catatan</h2>
            <p className="text-justify font-Poppins">
              Setelah melakukan pendaftaran diharapkan mengisi nama team dan asal
              sekolah di halaman data. Serta melakukan pembayaran silahkan
              konfirmasi pembayaran di nomor yang sudah tertera. Untuk kritik dan
              saran bisa dikirim melalui halaman kontak. Terima Kasih. 
            </p>
          </motion.div>
        </div>

        {/* Banner sebelah kanan */}
        <aside className="col-span-2">
          
            <Image
              src="/banner.jpg"
              alt="Banner IRC Robotik 2025"
              width={400}
              height={600}
              className="w-full h-[950px] object-cover"
            />

        </aside>
      </div>
    </main>

    <div className="mt-1">
  <h2 className="text-2xl font-semibold mb-4 text-center">📍 Lokasi Lomba</h2>
  <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-shadow">
     <div className="filter blur-md group-hover:blur-0 transition-all duration-500"></div>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.9334211707805!2d110.84116467415376!3d-7.6902946761464355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a3b87f947383d%3A0x9eed535ae55054ba!2sMTs%20Negeri%202%20Sukoharjo!5e0!3m2!1sid!2sid!4v1759592839028!5m2!1sid!2sid"
      width="100%"
      height="300"
      loading="lazy"
      allowFullScreen
    ></iframe>
  </div>
</div>
  

       
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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
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
          whileHover={{ scale: 1.2, rotate: -10 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300 }}
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




      </motion.div>
    </>
  )
}
