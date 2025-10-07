"use client";
import Navbar from "../../Navbar";
import { motion } from "framer-motion";
import { useState } from "react";
import { BookOpen, Code, Cpu } from "lucide-react";
import Footer from "../Footer";

export default function Categories() {
  const [playSecond, setPlaySecond] = useState(false);

  const categories = [
    {
      title: "SD/MI",
      icon: <BookOpen className="w-8 h-8 text-green-700" />,
      items: [
        "Coding Scratch",
        "Coding Tinkercad",
        "Arduino Project",
        "Maze Solving",
        "Soccer Robot",
        "Robot Transporter",
      ],
    },
    {
      title: "SMP/MTs",
      icon: <Code className="w-8 h-8 text-green-700" />,
      items: [
        "Coding Scratch",
        "Coding Tinkercad",
        "Coding Misi",
        "Arduino Project",
        "Maze Solving",
      ],
    },
    {
      title: "SMA/MA",
      icon: <Cpu className="w-8 h-8 text-green-700" />,
      items: ["Arduino Project"],
    },
  ];

  // Foto galeri IRC (total 8 foto)
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
        {/* Title */}
        <h1 className="text-4xl font-extrabold text-Modern text-green-700 mb-12">
          Kategori Lomba
        </h1>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
              whileHover={{ scale: 1 }}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl p-8 transition"
            >
              <div className="flex items-center gap-3 mb-4">
                {cat.icon}
                <h2 className="text-green-700 text-2xl font-bold">{cat.title}</h2>
              </div>
              <ul className="text-gray-700 space-y-3 list-disc list-inside font-medium">
                {cat.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Video Recap Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: false, amount: 0.3 }}
          className="mt-20 text-center"
        >
          <h2 className="text-3xl font-bold text-green-700 mb-6">
            Video Recap IRC 2023 - 2024
          </h2>
          <p className="text-gray-600 mb-10">
            Kilas balik keseruan Innovation Robotic Competition
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  {/* Video 2023 */}
 
<motion.div
  whileHover={{ scale: 1.03 }}
  className="overflow-hidden rounded-2xl shadow-lg w-full backdrop-blur-sm hover:backdrop-blur-0 transition-all duration-500"
>
  <div className="relative w-full h-[300px]">
    <iframe
      src="https://drive.google.com/file/d/1D1ZXvhvUMffyz3AbjogrZXcoU1M8hKcM/preview"
      allow="autoplay"  
      className="w-full h-full rounded-2xl"
    ></iframe>
  </div>
  <p className="bg-green-700 text-white text-center py-2 font-semibold">
    Recap IRC 2023
  </p>
</motion.div>

{/* Video 2024 */}
<motion.div
  whileHover={{ scale: 1.03 }}
  className="overflow-hidden rounded-2xl shadow-lg w-full backdrop-blur-sm hover:backdrop-blur-0 transition-all duration-500"
>
  <div className="relative w-full h-[300px]">
    <iframe
      src="https://drive.google.com/file/d/132VDgkUQmfTb2n06kTBWwRilOxMbKN0t/preview"
      allow="autoplay"
      className="w-full h-full rounded-2xl"
    ></iframe>
  </div>
  <p className="bg-green-700 text-white text-center py-2 font-semibold">
    Recap IRC 2024
  </p>
</motion.div>

</div>

        </motion.section>

        {/* Galeri Foto IRC */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: false, amount: 0.3 }}
          className="mt-20 text-center"
        >
          <h2 className="text-3xl font-bold text-green-700 mb-8">
            Galeri Foto IRC
          </h2>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 will-change-transform "
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.6 } },
            }}
            
          >
            {images.map((src, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.8 }}
                className="overflow-hidden rounded-2xl shadow-lg"
              >
                <img
                  src={src}
                  alt={`IRC. ${i + 1}`}
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
