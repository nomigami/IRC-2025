"use client";

import { useState } from "react";
import { supabase } from "@/../lib/supabaseClient";
import Navbar from "../../Navbar";
import Footer from "../Footer";
import { motion } from "framer-motion";
import {
  Mail,
  MessageSquare,
  Send,
  User,
  CheckCircle2,
  Instagram,
  Phone,
} from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    nama: "",
    email: "",
    pesan: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setSuccess(false);

    const { error } = await supabase.from("kontak").insert([
      {
        nama: form.nama,
        email: form.email,
        pesan: form.pesan,
      },
    ]);

    setLoading(false);

    if (error) {
      console.error(error);
      alert("Gagal mengirim pesan: " + error.message);
      return;
    }

    setSuccess(true);

    setForm({
      nama: "",
      email: "",
      pesan: "",
    });

    setTimeout(() => {
      setSuccess(false);
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-purple-50 text-gray-800">
      {/* ================= NAVBAR ================= */}
      <Navbar />

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-green-300/30 rounded-full blur-3xl" />
        <div className="absolute top-20 -right-24 w-80 h-80 bg-purple-300/30 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-semibold mb-5">
              <MessageSquare size={16} />
              Hubungi Kami
            </span>

            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900">
              Kontak <span className="text-green-600">Kami</span>
            </h1>

            <p className="max-w-2xl mx-auto mt-5 text-gray-600 text-base md:text-lg leading-relaxed">
              Punya pertanyaan mengenai Innovation Robotic Competition?
              Silakan hubungi kami melalui formulir di bawah ini. Tim kami siap
              membantu Anda.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <main className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid lg:grid-cols-5 gap-8 items-stretch">
          {/* ================= INFO CARD ================= */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 rounded-3xl bg-gradient-to-br from-green-600 to-green-800 text-white p-8 md:p-10 shadow-xl relative overflow-hidden"
          >
            {/* Decoration */}
            <div className="absolute -right-16 -top-16 w-48 h-48 rounded-full bg-white/10" />
            <div className="absolute -left-16 -bottom-20 w-56 h-56 rounded-full bg-white/5" />

            <div className="relative">
              <div className="w-14 h-14 rounded-2xl bg-white/15 flex items-center justify-center mb-6">
                <MessageSquare size={28} />
              </div>

              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Mari Terhubung
              </h2>

              <p className="text-green-50/90 leading-7 mb-10">
                Kami terbuka untuk pertanyaan, informasi mengenai perlombaan,
                pendaftaran, maupun hal lain yang berkaitan dengan Innovation
                Robotic Competition.
              </p>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 shrink-0 rounded-xl bg-white/15 flex items-center justify-center">
                    <Mail size={20} />
                  </div>

                  <div>
                    <p className="text-sm text-green-100">Email</p>
                    <p className="font-semibold break-all">
                      mtsn2sukoharjo@gmail.com
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 shrink-0 rounded-xl bg-white/15 flex items-center justify-center">
                    <Phone size={20} />
                  </div>

                  <div>
                    <p className="text-sm text-green-100">WhatsApp</p>
                    <p className="font-semibold">
                      Hubungi Panitia IRC
                    </p>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 shrink-0 rounded-xl bg-white/15 flex items-center justify-center">
                    <Instagram size={20} />
                  </div>

                  <div>
                    <p className="text-sm text-green-100">Instagram</p>
                    <p className="font-semibold">@innovation_robotic_competition</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-white/15">
                <p className="text-sm text-green-100 leading-6">
                  Pesan yang Anda kirim akan diterima oleh tim panitia dan akan
                  ditindaklanjuti sesuai kebutuhan.
                </p>
              </div>
            </div>
          </motion.div>

          {/* ================= FORM ================= */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-7 md:p-10">
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Kirim Pesan
                </h2>

                <p className="text-gray-500 mt-2">
                  Isi formulir berikut dengan data yang benar.
                </p>
              </div>

              {/* Success Message */}
              {success && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 flex items-start gap-3 rounded-2xl bg-green-50 border border-green-200 p-4 text-green-700"
                >
                  <CheckCircle2
                    size={22}
                    className="shrink-0 mt-0.5"
                  />

                  <div>
                    <p className="font-semibold">
                      Pesan berhasil terkirim!
                    </p>

                    <p className="text-sm mt-1">
                      Terima kasih telah menghubungi panitia IRC.
                    </p>
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Nama */}
                <div>
                  <label
                    htmlFor="nama"
                    className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2"
                  >
                    <User size={16} />
                    Nama Lengkap
                  </label>

                  <input
                    id="nama"
                    type="text"
                    name="nama"
                    value={form.nama}
                    onChange={handleChange}
                    placeholder="Masukkan nama lengkap"
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-gray-900 outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-100"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2"
                  >
                    <Mail size={16} />
                    Email
                  </label>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="contoh@email.com"
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-gray-900 outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-100"
                    required
                  />
                </div>

                {/* Pesan */}
                <div>
                  <label
                    htmlFor="pesan"
                    className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2"
                  >
                    <MessageSquare size={16} />
                    Pesan
                  </label>

                  <textarea
                    id="pesan"
                    name="pesan"
                    value={form.pesan}
                    onChange={handleChange}
                    rows={6}
                    placeholder="Tuliskan pertanyaan atau pesan Anda..."
                    className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-gray-900 outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-100"
                    required
                  />
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: loading ? 1 : 1.02 }}
                  whileTap={{ scale: loading ? 1 : 0.98 }}
                  className="w-full flex items-center justify-center gap-3 rounded-xl bg-green-600 hover:bg-green-700 text-white font-semibold py-3.5 px-6 shadow-lg shadow-green-600/20 transition disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? (
                    <>
                      <span className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                      Mengirim Pesan...
                    </>
                  ) : (
                    <>
                      <Send size={19} />
                      Kirim Pesan
                    </>
                  )}
                </motion.button>

                <p className="text-xs text-gray-400 text-center">
                  Dengan mengirim pesan, pastikan informasi yang diberikan
                  sudah benar.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </main>

      {/* ================= FOOTER ================= */}
      <Footer />
    </div>
  );
}