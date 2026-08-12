"use client";

import Navbar from "../../Navbar";
import { motion } from "framer-motion";
import { BookOpen, Code, Cpu, Play } from "lucide-react";
import Footer from "../Footer";

export default function Categories() {
  const categories = [
    {
      title: "SD/MI",
      icon: <BookOpen className="w-8 h-8 text-green-700" />,
      items: [
        "Maze Solving",
        "Soccer",
        "Transporter",
        "Coding Tinkercad",
        "Coding Scratch Level 1 (Kelas 1–3)",
        "Coding Scratch Level 2 (Kelas 4–6)",
        "Mbot2",
        "Robot Misi",
        "Inovasi",
      ],
    },
    {
      title: "SMP/MTs",
      icon: <Code className="w-8 h-8 text-green-700" />,
      items: [
        "Coding Tinkercad",
        "Mbot2",
        "Robot Misi",
        "Inovasi",
        "Maze Solving",
      ],
    },
  ];

  // Foto galeri IRC
  const images = [
    "/ircc.jpg",
    "/sc.jpg",
    "/rt.jpg",
    "/ap.jpg",
    "/jrr.jpg",
    "/pl.jpg",
    "/trr.jpg",
    "/rb.jpg",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-300 to-purple-600">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-16 pt-30">

        {/* ================= TITLE ================= */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-green-700">
            Kategori Lomba
          </h1>

          <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
            Pilih kategori lomba sesuai dengan jenjang pendidikan dan
            perlombaan yang akan diikuti.
          </p>
        </motion.section>


        {/* ================= KATEGORI ================= */}
        <section>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

            {categories.map((cat, index) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.2,
                }}
                viewport={{
                  once: false,
                  amount: 0.3,
                }}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl p-8 transition"
              >

                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  {cat.icon}

                  <h2 className="text-green-700 text-2xl font-bold">
                    {cat.title}
                  </h2>
                </div>

                {/* List */}
                <ul className="text-gray-700 space-y-3 font-medium">
                  {cat.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3"
                    >
                      <span className="text-green-600 font-bold mt-0.5">
                        •
                      </span>

                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

              </motion.div>
            ))}

          </div>
        </section>


        {/* ================= VIDEO RECAP ================= */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
          }}
          viewport={{
            once: false,
            amount: 0.3,
          }}
          className="mt-20 text-center"
        >

          <h2 className="text-3xl font-bold text-green-700 mb-6">
            Video Recap IRC 2023 - 2026
          </h2>

          <p className="text-gray-700 mb-10">
            Kilas balik keseruan Innovation Robotic Competition
          </p>


          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">


            {/* ================= IRC 2023 ================= */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="overflow-hidden rounded-2xl shadow-lg bg-white"
            >

              <div className="relative w-full h-[300px] bg-gradient-to-br from-green-700 to-green-900 flex flex-col items-center justify-center text-white">

                <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center mb-5">
                  <Play
                    size={40}
                    fill="currentColor"
                  />
                </div>

                <h3 className="text-2xl font-bold">
                  IRC 2023
                </h3>

                <p className="mt-2 text-green-100">
                  Recap Innovation Robotic Competition 2023
                </p>

                <a
                  href="https://drive.google.com/file/d/1D1ZXvhvUMffyz3AbjogrZXcoU1M8hKcM/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 px-6 py-3 rounded-xl bg-white text-green-700 font-semibold hover:bg-gray-100 transition"
                >
                  Tonton Video
                </a>

              </div>

              <p className="bg-green-700 text-white text-center py-3 font-semibold">
                Recap IRC 2023
              </p>

            </motion.div>


            {/* ================= IRC 2024 ================= */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="overflow-hidden rounded-2xl shadow-lg bg-white"
            >

              <div className="relative w-full h-[300px] bg-gradient-to-br from-green-700 to-green-900 flex flex-col items-center justify-center text-white">

                <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center mb-5">
                  <Play
                    size={40}
                    fill="currentColor"
                  />
                </div>

                <h3 className="text-2xl font-bold">
                  IRC 2024
                </h3>

                <p className="mt-2 text-green-100">
                  Recap Innovation Robotic Competition 2024
                </p>

                <a
                  href="https://drive.google.com/file/d/132VDgkUQmfTb2n06kTBWwRilOxMbKN0t/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 px-6 py-3 rounded-xl bg-white text-green-700 font-semibold hover:bg-gray-100 transition"
                >
                  Tonton Video
                </a>

              </div>

              <p className="bg-green-700 text-white text-center py-3 font-semibold">
                Recap IRC 2024
              </p>

            </motion.div>


            {/* ================= IRC 2025 ================= */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="overflow-hidden rounded-2xl shadow-lg bg-white"
            >

              <div className="relative w-full h-[300px] bg-gradient-to-br from-purple-700 to-purple-900 flex flex-col items-center justify-center text-white">

                <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center mb-5">
                  <Play
                    size={40}
                    fill="currentColor"
                  />
                </div>

                <h3 className="text-2xl font-bold">
                  IRC 2025
                </h3>

                <p className="mt-2 text-purple-100">
                  Recap Innovation Robotic Competition 2025
                </p>

                <a
                  href="https://drive.google.com/file/d/1wRJlGZl47l94KM-KD1h0kSEuqQriimb2/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 px-6 py-3 rounded-xl bg-white text-purple-700 font-semibold hover:bg-gray-100 transition"
                >
                  Tonton Video
                </a>

              </div>

              <p className="bg-purple-700 text-white text-center py-3 font-semibold">
                Recap IRC 2025
              </p>

            </motion.div>


            {/* ================= IRC 2026 ================= */}
            <motion.div
              className="overflow-hidden rounded-2xl shadow-lg bg-white"
            >

              <div className="relative w-full h-[300px] bg-gradient-to-br from-gray-700 to-gray-900 flex flex-col items-center justify-center text-white">

                <div className="w-20 h-20 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mb-5">
                  <Play
                    size={40}
                    className="text-gray-400"
                  />
                </div>

                <h3 className="text-2xl font-bold">
                  IRC 2026
                </h3>

                <p className="mt-2 text-gray-300">
                  Recap Innovation Robotic Competition 2026
                </p>

                <span className="mt-6 px-6 py-3 rounded-xl bg-white/10 border border-white/20 text-gray-300 font-semibold">
                  Coming Soon
                </span>

              </div>

              <p className="bg-gray-700 text-white text-center py-3 font-semibold">
                Recap IRC 2026
              </p>

            </motion.div>

          </div>

        </motion.section>


        {/* ================= GALERI ================= */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
          }}
          viewport={{
            once: false,
            amount: 0.3,
          }}
          className="mt-20 text-center"
        >

          <h2 className="text-3xl font-bold text-green-700 mb-8">
            Galeri Foto IRC
          </h2>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 will-change-transform"
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: false,
              amount: 0.3,
            }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.6,
                },
              },
            }}
          >

            {images.map((src, i) => (

              <motion.div
                key={i}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 50,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                transition={{
                  duration: 0.8,
                }}
                className="overflow-hidden rounded-2xl shadow-lg bg-white"
              >

                <img
                  src={src}
                  alt={`IRC ${i + 1}`}
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