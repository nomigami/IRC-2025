'use client'
import { useState } from 'react'
import { supabase } from '@/../lib/supabaseClient'
import Navbar from '../../Navbar'
import { motion } from 'framer-motion'

export default function Contact() {
  const [form, setForm] = useState({
    nama: '',
    email: '',
    pesan: ''
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const { error } = await supabase.from('kontak').insert([
      { nama: form.nama, email: form.email, pesan: form.pesan }
    ])

    setLoading(false)

    if (error) {
      console.error(error)
      alert('Gagal mengirim pesan: ' + error.message)
      return
    }

    alert('Pesan berhasil terkirim!')
    setForm({ nama: '', email: '', pesan: '' })
  }

  return (
    <>
      {/* Navbar selalu tetap di atas, tidak ikut animasi */}
      <Navbar />

      {/* Card berisi form yang dianimasikan */}
      <motion.main
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto px-6 py-12 bg-white rounded-xl shadow-lg mt-20 overflow-hidden hover:shadow-xl transition"
      >
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl font-bold mb-6 text-black"
        >
          Kontak Kami
        </motion.h1>

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.div whileHover={{ scale: 1.02 }}>
            <label className="block font-medium text-black">Nama</label>
            <input
              type="text"
              name="nama"
              value={form.nama}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded border-black"
              required
            />
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }}>
            <label className="block font-medium text-black">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded border-black"
              required
            />
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }}>
            <label className="block font-medium text-black">Pesan</label>
            <textarea
              name="pesan"
              value={form.pesan}
              onChange={handleChange}
              rows={4}
              className="w-full border px-4 py-2 rounded border-black"
              required
            />
          </motion.div>

          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-500 disabled:opacity-50"
          >
            {loading ? 'Mengirim...' : 'Kirim Pesan'}
          </motion.button>
        </motion.form>
      </motion.main>
    </>
  )
}
