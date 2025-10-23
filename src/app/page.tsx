'use client'
import { useState, useEffect } from 'react'
import Head from 'next/head'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from "next/link";
import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";
import Navbar from '../Navbar';


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
        <Navbar />

        {/* === HERO SECTION === */}
        <section className="relative w-full min-h-[80vh] md:h-[70vh] flex items-center justify-center text-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image 
              src="/ircc.jpg"
              alt="IRC Robotik 2025"
              fill
              className="rounded-2xl"
              style={{ 
                objectFit: "cover", 
                objectPosition: "center center" 
              }}
              priority
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-3xl mx-auto px-4">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.5 }}
              className="text-3xl sm:text-4xl md:text-7xl font-bold mb-2 font-moderniz text-white leading-tight"
            >
              INNOVATION ROBOTIC COMPETITION
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: false, amount: 0.5 }}
              className="flex flex-wrap justify-center items-center gap-4 mb-2"
            >
              <div className="flex items-center gap-1 text-white">
                <Image 
                  src="/kemenag.png" 
                  alt="Kemenag" 
                  width={35} 
                  height={35} 
                  className="object-contain" 
                />
                <span className="text-xs sm:text-sm">Kemenag Prov. Jateng</span>
              </div>
              <div className="flex items-center gap-1 text-white">
                <Image 
                  src="/mtsn2.png" 
                  alt="MTsN 2 Sukoharjo" 
                  width={35} 
                  height={35} 
                  className="object-contain" 
                />
                <span className="text-xs sm:text-sm">MTsN 2 Sukoharjo</span>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: false, amount: 0.5 }}
              className="text-white mb-4 text-sm sm:text-base"
            >
              Kompetisi robotik tingkat nasional untuk pelajar
            </motion.p>

            <motion.a
              href="/pendaftaran"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              viewport={{ once: false, amount: 0.5 }}
              className="inline-block bg-yellow-400 text-gray-900 px-6 py-2 rounded-full font-semibold hover:bg-yellow-300 transition text-sm sm:text-base"
            >
              Daftar Sekarang
            </motion.a>
          </div>
        </section>

        {/* === KONTEN SECTION === */}
        <main className="max-w-7xl mx-auto px-4 sm:px-8 py-12">
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
                <p className="text-justify font-Poppins text-white">
                  Puji syukur kita panjatkan kepada Allah SWT atas limpahan rahmat
                  dan hidayah-Nya. Kami ucapkan terima kasih kepada seluruh peserta yang telah 
                  berkenan meramaikan dan berpatisispasi dalam acara sebesar ini tidak lupa 
                  juga kami ucapkan terima kasih kepada seluruh panitia yang telah 
                  bekerja keras untuk menyelenggarakan acara ini. Kami berharap
                  semoga kompetisi ini dapat melahirkan generasi penerus yang
                  nantinya akan diikutsertakan dalam olimpiade sains nasional.
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
                <p className="text-justify font-poppins text-white">
                  Lomba IRC adalah sebuah lomba yang diadakan setiap setahun sekali
                  guna memberikan ajang bergengsi untuk para pelajar Indonesia. Di
                  tahun ini terdapat beberapa kategori tambahan agar semakin banyak
                  siswa dapat berpartisipasi dan menunjukkan kemampuannya.
                </p>
              </motion.div>

              {/* Timeline */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false }}
                className="bg-gray-800 text-white rounded-xl shadow-lg p-6"
              >
                <h2 className="text-2xl font-bold mb-4" id="timeline">Timeline Lomba</h2>
                <ul className="list-disc list-inside space-y-1 font-Poppins text-white text-sm sm:text-base">
                  <li>Pendaftaran: 5 Oktober - 2 November 2025</li>
                  <li>Technical Meeting: 5 November 2025</li>
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
                <p className="text-justify font-Poppins text-white">
                  Setelah melakukan pendaftaran diharapkan mengisi nama tim dan asal sekolah di halaman data. 
                  Silakan konfirmasi pembayaran di nomor yang tertera. 
                  Untuk kritik dan saran bisa dikirim melalui halaman kontak.
                </p>
              </motion.div>
            </div>

            {/* Banner kanan */}
            <aside className="col-span-2 flex justify-center items-center">
              <div className="w-full h-auto rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/psnew.jpg"
                  alt="Banner IRC Robotik 2025"
                  width={400}
                  height={600}
                  className="w-full h-auto max-h-[950px] object-cover md:rounded-xl rounded-lg"
                  style={{ objectPosition: "center top" }}
                />
              </div>
            </aside>
          </div>
        </main>

        {/* === Lokasi === */}
        <div className="mt-8 px-4">
          <h2 className="text-2xl font-semibold mb-4 text-center">📍 Lokasi Lomba</h2>
          <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-gray-700">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.9334211707805!2d110.84116467415376!3d-7.6902946761464355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a3b87f947383d%3A0x9eed535ae55054ba!2sMTs%20Negeri%202%20Sukoharjo!5e0!3m2!1sid!2sid!4v1759592839028!5m2!1sid!2sid"
              width="100%"
              height="300"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <footer className="bg-black text-white py-6 mt-12">
             <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-6">
       
               <motion.p
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.6 }}
                 className="font-light text-sm text-center"
               >
                 Supported by:
               </motion.p>
       
               {/* Sentral Robotik */}
               <div className="flex flex-wrap items-center justify-center gap-2 text-center">
                 <div className="grid grid-cols-1 gap-5">
                   <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 3, y: 0 }}
                     transition={{ duration: 0.8, delay: 0.2 }}
                     className="flex items-center justify-center gap-2"
                   >
                     <Image
                       src="/sentralrb.png"
                       alt="Sentral Robotik.id"
                       width={25}
                       height={25}
                       className="object-contain rounded-full shadow-lg"
                     />
                     <span className="text-sm" style={{ fontSize: "9px" }}>
                       Sentral Robotik.id
                     </span>
                   </motion.div>
                 </div>
               </div>
       
               {/* Logo Partners */}
               <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-center">
                 <motion.div
                   initial={{ opacity: 1, y: 20 }}
                   whileInView={{ opacity: 1, y: 1 }}
                   transition={{ duration: 1, delay: 0.4 }}
                   className="flex items-center gap-2"
                 >
                   <Image
                     src="/AITUMEGA.png"
                     alt="AITUMEGABOT"
                     width={25}
                     height={25}
                     className="object-contain rounded-full shadow-lg"
                   />
                   <span className="text-sm" style={{ fontSize: "9px" }}>AITUMEGABOT</span>
                 </motion.div>
       
                 <motion.div
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 1 }}
                   transition={{ duration: 1.2, delay: 0.6 }}
                   className="flex items-center gap-2"
                 >
                   <Image
                     src="/lr.jpg"
                     alt="LombaRobot.id"
                     width={25}
                     height={25}
                     className="object-contain rounded-full shadow-lg"
                   />
                   <span className="text-sm" style={{ fontSize: "9px" }}>LombaRobot.id</span>
                 </motion.div>
       
                 <motion.div
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 1 }}
                   transition={{ duration: 1.4, delay: 0.8 }}
                   className="flex items-center gap-2"
                 >
                   <Image
                     src="/ichibot.jpg"
                     alt="Ichibot.id"
                     width={25}
                     height={25}
                     className="object-contain rounded-full shadow-lg"
                   />
                   <span className="text-sm" style={{ fontSize: "9px" }}>Ichibot.id</span>
                 </motion.div>
       
                 <motion.div
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 1 }}
                   transition={{ duration: 1.6, delay: 1 }}
                   className="flex items-center gap-2"
                 >
                   <Image
                     src="/Kakarobot.png"
                     alt="KAKAROBOT.id"
                     width={25}
                     height={25}
                     className="object-contain rounded-full shadow-lg"
                   />
                   <span className="text-sm" style={{ fontSize: "9px" }}>KAKAROBOT.id</span>
                 </motion.div>
       
                 <motion.div
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 1 }}
                   transition={{ duration: 1.8, delay: 1.2 }}
                   className="flex items-center gap-2"
                 >
                   <Image
                     src="/primagama.png"
                     alt="Primagama.id"
                     width={25}
                     height={25}
                     className="object-contain rounded-full shadow-lg"
                   />
                   <span className="text-sm" style={{ fontSize: "9px" }}>Primagama.id</span>
                 </motion.div>
       
                 <motion.div
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 1 }}
                   transition={{ duration: 2, delay: 1.4 }}
                   className="flex items-center gap-2"
                 >
                   <Image
                     src="/Logo-gRAVEND-v2.png"
                     alt="Gravend.creative"
                     width={25}
                     height={25}
                     className="object-contain rounded-full shadow-lg"
                   />
                   <span className="text-sm" style={{ fontSize: "9px" }}>Gravend.creative</span>
                 </motion.div>
               </div>
       
               {/* Social Media */}
               <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-6 text-center">
                 <motion.p
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 1 }}
                   transition={{ duration: 1, delay: 0.2 }}
                   className="font-light text-sm"
                 >
                   Social Media
                 </motion.p>
       
                 {/* Baris 1 */}
                 <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 text-center">
                   <motion.p
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.6 }}
                   >
                     <a
                       href="https://instagram.com/innovation_robotic_competition"
                       target="_blank"
                       rel="noreferrer"
                       className="flex flex-col items-center gap-1 hover:scale-105 transition-transform"
                     >
                       <img src="/INS.png" alt="instagram" className="w-5 h-5 object-contain" />
                       <span className="text-[10px]">innovation_robotic_competition</span>
                     </a>
                   </motion.p>
       
                   <motion.p
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 1 }}
                     transition={{ duration: 0.6 }}
                   >
                     <a
                       href="https://www.instagram.com/mtsn2skh?igsh=MmdvZHc3ajBsY3dr"
                       target="_blank"
                       rel="noreferrer"
                       className="flex flex-col items-center gap-1 hover:scale-105 transition-transform"
                     >
                       <img src="/INS.png" alt="instagram" className="w-5 h-5 object-contain" />
                       <span className="text-[10px]">MTS Negeri 2 Sukoharjo</span>
                     </a>
                   </motion.p>
                 </div>
       
                 {/* Baris 2 */}
                 <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 text-center">
                   {[
                     ["https://www.instagram.com/sentral_robotik?igsh=ZWM0ajNjMjYxZTFm", "Sentral Robotic.id"],
                     ["https://www.instagram.com/aitumega?igsh=MTRkNWZ4dWN4YjBneA==", "AITUMEGABOT"],
                     ["https://www.instagram.com/lombarobot.id?igsh=dDB2bnpicTJrcGt6", "LombaRobot.id"],
                     ["https://www.instagram.com/ichibot.id?igsh=MTV0dHo2YTZ2djIxaw==", "Ichibot.id"],
                     ["https://www.instagram.com/kakarobot?igsh=dWNuOTY1OTRwdDJt", "KAKAROBOT.id"],
                     ["https://www.instagram.com/primagama_id?igsh=MXBqOXFxbjEwM3h4Nw==", "Primagama.id"],
                     ["https://www.instagram.com/gravend.creative?igsh=MTc5NDJ6ZTQ0Zzhqag==", "Gravend.Creative"],
                   ].map(([href, name], i) => (
                     <motion.p
                       key={i}
                       initial={{ opacity: 0, y: 20 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       transition={{ duration: 0.9, delay: 0.2 }}
                     >
                       <a
                         href={href}
                         target="_blank"
                         rel="noreferrer"
                         className="flex flex-col items-center gap-1 hover:scale-105 transition-transform"
                       >
                         <img src="/INS.png" alt="instagram" className="w-5 h-5 object-contain" />
                         <span className="text-[10px]">{name}</span>
                       </a>
                     </motion.p>
                   ))}
                 </div>
       
                 <div className="w-full border-t border-gray-700 my-4"></div>
       
                 <p className="text-center text-xs sm:text-sm text-gray-400">
                   © {new Date().getFullYear()} IRC Robotik 2025. All rights reserved.
                 </p>
               </div>
             </div>
           </footer>
      </motion.div>
    </>
  )
}
