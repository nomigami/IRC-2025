"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Loader2, FileCheck } from "lucide-react";

interface Certificate {
  id: string;
  participant_name: string;
  school: string;
  category: string;
  certificate_number: string;
  certificate_url: string;
}

export default function CheckCertificatePage() {
  const [participantName, setParticipantName] = useState("");
  const [certificateNumber, setCertificateNumber] = useState("");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [certificate, setCertificate] = useState<Certificate | null>(null);

  const handleSearch = async () => {
    if (!participantName.trim() && !certificateNumber.trim()) {
      setMessage(
        "Silakan masukkan nama peserta atau nomor sertifikat."
      );
      return;
    }

    setLoading(true);
    setMessage("");
    setCertificate(null);

    try {
 
    } catch (error) {
      console.error(error);
      setMessage("Terjadi kesalahan.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white">

      {/* Header */}

      <section className="max-w-5xl mx-auto px-6 pt-24 pb-12 text-center">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Search size={60} className="mx-auto text-blue-400" />

          <h1 className="text-4xl md:text-5xl font-bold mt-6">
            Cek Sertifikat
          </h1>

          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Cari sertifikat peserta Innovation Robotic Competition
            menggunakan nama peserta atau nomor sertifikat.
          </p>
        </motion.div>

      </section>

      {/* Form */}

      <section className="max-w-3xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-8"
        >

          <div className="space-y-6">

            <div>
              <label className="block mb-2">
                Nama Peserta
              </label>

              <input
                value={participantName}
                onChange={(e) =>
                  setParticipantName(e.target.value)
                }
                placeholder="Masukkan nama peserta"
                className="w-full rounded-xl bg-slate-800 border border-slate-700 px-4 py-3 focus:border-blue-500 outline-none"
              />
            </div>

            <div className="text-center text-gray-400">
              ATAU
            </div>

            <div>
              <label className="block mb-2">
                Nomor Sertifikat
              </label>

              <input
                value={certificateNumber}
                onChange={(e) =>
                  setCertificateNumber(e.target.value)
                }
                placeholder="Masukkan nomor sertifikat"
                className="w-full rounded-xl bg-slate-800 border border-slate-700 px-4 py-3 focus:border-blue-500 outline-none"
              />
            </div>

            <button
              onClick={handleSearch}
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-900 rounded-xl py-3 font-semibold transition flex justify-center items-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2
                    size={18}
                    className="animate-spin"
                  />
                  Mencari...
                </>
              ) : (
                <>
                  <Search size={18} />
                  Cari Sertifikat
                </>
              )}
            </button>

          </div>

        </motion.div>

      </section>

      {/* Hasil */}

      <section className="max-w-4xl mx-auto px-6 py-12">

        {message && (
          <div className="rounded-2xl border border-yellow-500 bg-yellow-500/10 p-5 text-center">
            {message}
          </div>
        )}

        {loading && (
          <div className="rounded-3xl bg-white/5 border border-white/10 p-10 text-center">

            <Loader2
              className="mx-auto animate-spin text-blue-400"
              size={45}
            />

            <p className="mt-5">
              Sedang mencari sertifikat...
            </p>

          </div>
        )}

        {!loading && certificate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="rounded-3xl border border-green-500 bg-green-500/10 p-8"
          >

            <div className="flex justify-center mb-6">

              <FileCheck
                size={60}
                className="text-green-400"
              />

            </div>

            <h2 className="text-2xl font-bold text-center mb-8">
              Sertifikat Ditemukan
            </h2>

            <div className="space-y-5">

              <div>
                <p className="text-gray-400">
                  Nama Peserta
                </p>

                <h3 className="text-lg font-semibold">
                  {certificate.participant_name}
                </h3>
              </div>

              <div>
                <p className="text-gray-400">
                  Sekolah
                </p>

                <h3>{certificate.school}</h3>
              </div>

              <div>
                <p className="text-gray-400">
                  Kategori
                </p>

                <h3>{certificate.category}</h3>
              </div>

              <div>
                <p className="text-gray-400">
                  Nomor Sertifikat
                </p>

                <h3>{certificate.certificate_number}</h3>
              </div>

              <a
                href={certificate.certificate_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-5 bg-green-600 hover:bg-green-700 px-6 py-3 rounded-xl transition"
              >
                Lihat Sertifikat
              </a>

            </div>

          </motion.div>
        )}

        {!loading && !certificate && !message && (

          <div className="rounded-3xl border border-dashed border-white/10 bg-white/5 p-10 text-center">

            <Search
              size={50}
              className="mx-auto text-gray-500"
            />

            <h2 className="text-2xl font-semibold mt-5">
              Hasil Pencarian
            </h2>

            <p className="text-gray-400 mt-3">
              Masukkan nama peserta atau nomor sertifikat,
              kemudian klik tombol <b>Cari Sertifikat</b>.
            </p>

          </div>

        )}

      </section>

    </main>
  );
}