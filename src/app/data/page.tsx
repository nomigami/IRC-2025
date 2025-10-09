"use client";
import { useState } from "react";
import Navbar from "../../Navbar";
import { supabase } from "@/../lib/supabaseClient";
import { motion } from "framer-motion";
import { GraduationCap, Layers, Users, User } from "lucide-react";
import Footer from "../Footer";
import "../globals.css";

export default function DataPeserta() {
  const [jenjangDipilih, setJenjangDipilih] = useState<string | null>(null);
  const [kategoriDipilih, setKategoriDipilih] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [pesan, setPesan] = useState<string | null>(null);

  const jenjangList = ["SD/MI", "SMP/MTs", "SMA/MA"];

  const kategoriMap: Record<string, string[]> = {
    "SD/MI": [
      "Coding Scratch",
      "Coding Tinkercad",
      "Arduino Project",
      "Maze Solving",
      "Soccer Robot",
      "Robot Transporter",
    ],
    "SMP/MTs": [
      "Coding Scratch",
      "Coding Tinkercad",
      "Coding Misi",
      "Arduino Project",
      "Maze Solving",
    ],
    "SMA/MA": ["Arduino Project"],
  };

  const kategoriTim = [
    "Arduino Project",
    "Maze Solving",
    "Soccer Robot",
    "Robot Transporter",
    "Coding Misi",
  ];
  const kategoriIndividu = ["Coding Scratch", "Coding Tinkercad"];

  const [formIndividu, setFormIndividu] = useState({
    nama: "",
    sekolah: "",
    pembimbing1: "",
    pembimbing2: "",
    telepon: "",
  });

  const [formTim, setFormTim] = useState({
    namaTim: "",
    peserta1: "",
    peserta2: "",
    sekolah: "",
    pembimbing1: "",
    pembimbing2: "",
    telepon: "",
  });

  const handleChangeIndividu = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormIndividu({ ...formIndividu, [e.target.name]: e.target.value });
  const handleChangeTim = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormTim({ ...formTim, [e.target.name]: e.target.value });

  // --- Submit Individu ---
  const handleSubmitIndividu = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setPesan(null);

    const { error } = await supabase.from("peserta_individu").insert([
      {
        ...formIndividu,
        jenjang: jenjangDipilih,
        kategori: kategoriDipilih,
      },
    ]);

    setLoading(false);

    if (error) {
      console.error(error);
      setPesan("❌ Gagal mengirim data!");
    } else {
      setPesan("✅ Data berhasil dikirim!");
      setFormIndividu({
        nama: "",
        sekolah: "",
        pembimbing1: "",
        pembimbing2: "",
        telepon: "",
      });
    }
  };

  // --- Submit Tim ---
  const handleSubmitTim = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setPesan(null);

    const { error } = await supabase.from("peserta_tim").insert([
      {
        nama_tim: formTim.namaTim,
        peserta1: formTim.peserta1,
        peserta2: formTim.peserta2,
        sekolah: formTim.sekolah,
        pembimbing1: formTim.pembimbing1,
        pembimbing2: formTim.pembimbing2,
        telepon: formTim.telepon,
        jenjang: jenjangDipilih,
        kategori: kategoriDipilih,
      },
    ]);

    setLoading(false);

    if (error) {
      console.error(error);
      setPesan("❌ Gagal mengirim data!");
    } else {
      setPesan("✅ Data berhasil dikirim!");
      setFormTim({
        namaTim: "",
        peserta1: "",
        peserta2: "",
        sekolah: "",
        pembimbing1: "",
        pembimbing2: "",
        telepon: "",
      });
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className="flex flex-col min-h-screen">
      {/* Konten utama halaman */}
      <div className="flex-grow max-w-5xl mx-auto px-6 py-16 pt-28">
        <Navbar />

        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold mb-8 text-center text-white"
        >
          Data Peserta
        </motion.h1>

        {pesan && (
          <p className="text-center mb-4 font-semibold text-yellow-300">
            {pesan}
          </p>
        )}

        {/* Step 1: Pilih Jenjang */}
        {!jenjangDipilih && (
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6 }}
            className="bg-gray-900 text-white rounded-2xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-yellow-400" />
              Pilih Jenjang
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {jenjangList.map((jenjang) => (
                <button
                  key={jenjang}
                  onClick={() => setJenjangDipilih(jenjang)}
                  className="bg-green-600 hover:bg-green-500 text-white font-medium px-5 py-4 rounded-xl shadow-md transition"
                >
                  {jenjang}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Step 2: Pilih Kategori */}
        {jenjangDipilih && !kategoriDipilih && (
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6 }}
            className="bg-gray-900 text-white rounded-2xl shadow-lg p-8"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold flex items-center gap-2">
                <Layers className="w-6 h-6 text-blue-400" />
                Pilih Kategori ({jenjangDipilih})
              </h2>
              <button
                onClick={() => setJenjangDipilih(null)}
                className="bg-yellow-400 px-4 py-2 rounded-lg text-black hover:bg-yellow-300"
              >
                ← Kembali
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {kategoriMap[jenjangDipilih].map((kat) => (
                <button
                  key={kat}
                  onClick={() => setKategoriDipilih(kat)}
                  className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-4 rounded-xl shadow-md transition flex-grow"
                >
                  {kat}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Step 3: Form */}
        {kategoriDipilih && (
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6 }}
            className="bg-gray-900 text-white rounded-2xl shadow-lg p-8"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold flex items-center gap-2">
                {kategoriTim.includes(kategoriDipilih) ? (
                  <Users className="w-6 h-6 text-green-400" />
                ) : (
                  <User className="w-6 h-6 text-green-400" />
                )}
                Form Peserta: {kategoriDipilih} ({jenjangDipilih})
              </h2>
              <div className="space-x-2">
                <button
                  onClick={() => setKategoriDipilih(null)}
                  className="bg-yellow-400 px-4 py-2 rounded-lg text-black hover:bg-yellow-300"
                >
                  ← Kategori
                </button>
                <button
                  onClick={() => setJenjangDipilih(null)}
                  className="bg-yellow-400 px-4 py-2 rounded-lg text-black hover:bg-yellow-300"
                >
                  ← Jenjang
                </button>
              </div>
            </div>

            {/* Form Tim */}
            {kategoriTim.includes(kategoriDipilih) ? (
              <form onSubmit={handleSubmitTim} className="space-y-4">
                <div>
                  <label className="block font-medium">Nama Tim</label>
                  <input
                    type="text"
                    name="namaTim"
                    value={formTim.namaTim}
                    onChange={handleChangeTim}
                    className="w-full border px-4 py-2 rounded text-white"
                    required
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-medium">Peserta 1</label>
                    <input
                      type="text"
                      name="peserta1"
                      value={formTim.peserta1}
                      onChange={handleChangeTim}
                      className="w-full border px-4 py-2 rounded text-white"
                      required
                    />
                  </div>
                  <div>
                    <label className="block font-medium">Peserta 2</label>
                    <input
                      type="text"
                      name="peserta2"
                      value={formTim.peserta2}
                      onChange={handleChangeTim}
                      className="w-full border px-4 py-2 rounded text-white"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block font-medium">Asal Sekolah</label>
                  <input
                    type="text"
                    name="sekolah"
                    value={formTim.sekolah}
                    onChange={handleChangeTim}
                    className="w-full border px-4 py-2 rounded text-white"
                    required
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-medium">Pembimbing 1</label>
                    <input
                      type="text"
                      name="pembimbing1"
                      value={formTim.pembimbing1}
                      onChange={handleChangeTim}
                      className="w-full border px-4 py-2 rounded text-white"
                      required
                    />
                  </div>
                  <div>
                    <label className="block font-medium">
                      Pembimbing 2 (Opsional)
                    </label>
                    <input
                      type="text"
                      name="pembimbing2"
                      value={formTim.pembimbing2}
                      onChange={handleChangeTim}
                      className="w-full border px-4 py-2 rounded text-white"
                    />
                  </div>
                </div>
                <div>
                  <label className="block font-medium">Nomor Telepon</label>
                  <input
                    type="tel"
                    name="telepon"
                    value={formTim.telepon}
                    onChange={handleChangeTim}
                    className="w-full border px-4 py-2 rounded text-white"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-500"
                >
                  {loading ? "Mengirim..." : "Kirim Data"}
                </button>
              </form>
            ) : (
              // Form Individu
              <form onSubmit={handleSubmitIndividu} className="space-y-4">
                <div>
                  <label className="block font-medium">Nama Peserta</label>
                  <input
                    type="text"
                    name="nama"
                    value={formIndividu.nama}
                    onChange={handleChangeIndividu}
                    className="w-full border px-4 py-2 rounded text-white"
                    required
                  />
                </div>
                <div>
                  <label className="block font-medium">Asal Sekolah</label>
                  <input
                    type="text"
                    name="sekolah"
                    value={formIndividu.sekolah}
                    onChange={handleChangeIndividu}
                    className="w-full border px-4 py-2 rounded text-white"
                    required
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-medium">Pembimbing 1</label>
                    <input
                      type="text"
                      name="pembimbing1"
                      value={formIndividu.pembimbing1}
                      onChange={handleChangeIndividu}
                      className="w-full border px-4 py-2 rounded text-white"
                      required
                    />
                  </div>
                  <div>
                    <label className="block font-medium">
                      Pembimbing 2 (Opsional)
                    </label>
                    <input
                      type="text"
                      name="pembimbing2"
                      value={formIndividu.pembimbing2}
                      onChange={handleChangeIndividu}
                      className="w-full border px-4 py-2 rounded text-white"
                    />
                  </div>
                </div>
                <div>
                  <label className="block font-medium">Nomor Telepon</label>
                  <input
                    type="tel"
                    name="telepon"
                    value={formIndividu.telepon}
                    onChange={handleChangeIndividu}
                    className="w-full border px-4 py-2 rounded text-white"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-500"
                >
                  {loading ? "Mengirim..." : "Kirim Data"}
                </button>
              </form>
            )}
          </motion.div>
        )}
      </div>

      {/* Footer di bagian paling bawah */}
      <Footer />
    </main>
  );
}
