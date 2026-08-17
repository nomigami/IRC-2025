"use client";

import Navbar from "../../Navbar";
import { motion } from "framer-motion";
import { BookOpen, Code } from "lucide-react";
import Footer from "../Footer";

export default function Categories() {
  const categories = [
    {
      title: "SD/MI",
      icon: <BookOpen className="w-8 h-8 text-blue-600" />,
      items: [
        "Maze Solving",
        "Soccer",
        "Transporter",
        "Coding Tinkercad",
        "Mbot2",
        "Robot Misi",
        "Inovasi",
      ],
    },
    {
      title: "SMP/MTs",
      icon: <Code className="w-8 h-8 text-blue-600" />,
      items: [
        "Coding Tinkercad",
        "Mbot2",
        "Maze Solving",
        "Robot Misi",
        "Inovasi",
      ],
    },
  ];

  // =========================================================
  // LINK VIDEO
  // =========================================================

 {/* ================= VIDEO RECAP ================= */}

const videos = [
  {
    year: "2023",
    youtube: "https://www.youtube.com/watch?v=MASUKKAN_LINK_YOUTUBE_2023",
    thumbnail: "jrr.jpg",
  },
  {
    year: "2024",
    youtube: "https://www.youtube.com/watch?v=MASUKKAN_LINK_YOUTUBE_2024",
    thumbnail: "ircc.jpg",
  },
  {
    year: "2025",
    youtube: "https://www.youtube.com/watch?v=MASUKKAN_LINK_YOUTUBE_2025",
    thumbnail: "pl.jpg",
  },
];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-cyan-400 to-blue-600">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-16 pt-30">
        {/* =====================================================
            TITLE
        ====================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Kategori Lomba IRC 2026
          </h1>

          <p className="text-white/90 max-w-3xl mx-auto text-lg">
            Innovation and Robotics Competition 4th tingkat nasional
            menghadirkan berbagai kategori lomba untuk tingkat SD/MI dan
            SMP/MTs.
          </p>
        </motion.div>

        {/* =====================================================
            KATEGORI LOMBA
        ====================================================== */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {categories.map((cat, index) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.2,
                }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-3xl shadow-xl p-8 transition-all duration-300"
              >
                {/* Icon + Title */}
                <div className="flex items-center gap-4 mb-7">
                  <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center">
                    {cat.icon}
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-blue-500 uppercase tracking-wider">
                      Kategori Lomba
                    </p>

                    <h2 className="text-3xl font-extrabold text-blue-700">
                      {cat.title}
                    </h2>
                  </div>
                </div>

                {/* List */}
                <div className="space-y-3">
                  {cat.items.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: i * 0.05,
                      }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3 bg-blue-50 rounded-xl px-4 py-3"
                    >
                      <span className="w-2.5 h-2.5 rounded-full bg-blue-600 shrink-0" />

                      <span className="font-medium text-gray-700">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

 {/* Video Recap Section */}
<motion.section
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.3 }}
  viewport={{ once: false, amount: 0.3 }}
  className="mt-20 text-center"
>
  <h2 className="text-3xl font-bold text-green-700 mb-6">
    Video Recap IRC 2023 - 2026
  </h2>

  <p className="text-gray-600 mb-10">
    Kilas balik keseruan Innovation Robotic Competition
  </p>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

    {videos.map((video) => (
      <motion.a
        key={video.year}
        href={video.youtube}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.03 }}
        className="overflow-hidden rounded-2xl shadow-lg w-full block"
      >
        <div className="relative w-full aspect-video overflow-hidden">

          <img
            src={video.thumbnail}
            alt={`Recap IRC ${video.year}`}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />

          {/* Tombol Play */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-red-600/90 flex items-center justify-center shadow-xl hover:scale-110 transition">
              <svg
                className="w-8 h-8 text-white ml-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>

        </div>

        <p className="bg-green-700 text-white text-center py-2 font-semibold">
          Recap IRC {video.year}
        </p>
      </motion.a>
    ))}

    {/* IRC 2026 - Coming Soon */}
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="overflow-hidden rounded-2xl shadow-lg w-full"
    >
      <div className="relative w-full aspect-video bg-gray-200 flex items-center justify-center">

        <div className="text-center">
          <div className="text-5xl mb-3">
            🎬
          </div>

          <h3 className="text-2xl font-bold text-gray-700">
            Coming Soon
          </h3>

          <p className="text-gray-500 mt-2">
            Recap IRC 2026
          </p>
        </div>

      </div>

      <p className="bg-green-700 text-white text-center py-2 font-semibold">
        Recap IRC 2026
      </p>
    </motion.div>

  </div>
</motion.section>

        {/* =====================================================
            GALERI FOTO
        ====================================================== */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mt-24"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Galeri Foto IRC
            </h2>

            <p className="text-white/90 mt-3">
              Dokumentasi Innovation and Robotics Competition
            </p>
          </div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
          >
            {[
              "/ircc.jpg",
              "/sc.jpg",
              "/rt.jpg",
              "/ap.jpg",
              "/jrr.jpg",
              "/pl.jpg",
              "/trr.jpg",
              "/rb.jpg",
            ].map((src, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 40,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                transition={{ duration: 0.6 }}
                className="overflow-hidden rounded-2xl shadow-xl bg-white"
              >
                <img
                  src={src}
                  alt={`Dokumentasi IRC ${i + 1}`}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
}