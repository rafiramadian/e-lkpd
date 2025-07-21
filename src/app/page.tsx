'use client';

import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-6"
      >
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <motion.div
              className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.2 }}
            >
              <span className="text-white font-bold text-sm">E</span>
            </motion.div>
            <span className="text-xl font-bold text-gray-900">E-LKPD</span>
          </div>
          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 text-gray-700 hover:text-gray-900"
            >
              Masuk
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Daftar
            </motion.button>
          </div>
        </nav>
      </motion.header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">E-Lembar Kerja Peserta Didik</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Platform pembelajaran berbasis Inquiry Learning untuk mata pelajaran Pemrograman Dasar. Tingkatkan hasil
            belajar dengan metode yang interaktif dan efektif.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-lg"
            >
              Mulai Belajar
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 text-lg"
            >
              Masuk ke Akun
            </motion.button>
          </div>
        </motion.div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {[
            {
              icon: '📚',
              title: 'Inquiry Learning',
              description:
                'Metode pembelajaran berbasis inquiry dengan tahapan yang terstruktur: Menyusun Pertanyaan, Eksplorasi, Eksperimen, dan Kesimpulan.',
              bgColor: 'bg-blue-100',
            },
            {
              icon: '💻',
              title: 'Online Code Editor',
              description:
                'Editor kode online untuk praktik pemrograman langsung dengan dukungan bahasa C, Python, dan JavaScript.',
              bgColor: 'bg-green-100',
            },
            {
              icon: '📊',
              title: 'Progress Tracking',
              description: 'Pantau kemajuan belajar dengan sistem tracking yang detail dan laporan yang komprehensif.',
              bgColor: 'bg-purple-100',
            },
            {
              icon: '🎯',
              title: 'Pre & Post Test',
              description:
                'Evaluasi pembelajaran dengan tes awal dan akhir untuk mengukur peningkatan pemahaman siswa.',
              bgColor: 'bg-orange-100',
            },
            {
              icon: '💬',
              title: 'Forum Diskusi',
              description:
                'Ruang diskusi interaktif antara siswa dan guru untuk membahas materi dan menyelesaikan masalah bersama.',
              bgColor: 'bg-red-100',
            },
            {
              icon: '☁️',
              title: 'Cloud Storage',
              description:
                'Penyimpanan cloud untuk materi, tugas, dan file pendukung dengan akses yang aman dan terorganisir.',
              bgColor: 'bg-indigo-100',
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white rounded-lg shadow-lg p-6 cursor-pointer"
            >
              <motion.div
                className={`w-12 h-12 ${feature.bgColor} rounded-lg flex items-center justify-center mb-4`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-2xl">{feature.icon}</span>
              </motion.div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg shadow-xl p-12">
            <h2 className="text-3xl font-bold mb-4">Siap untuk Meningkatkan Hasil Belajar?</h2>
            <p className="text-blue-100 mb-8 text-lg">
              Bergabunglah dengan platform E-LKPD dan rasakan perbedaan dalam pembelajaran pemrograman dasar.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 text-lg font-semibold"
            >
              Daftar Sekarang
            </motion.button>
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        className="container mx-auto px-4 py-8 mt-16"
      >
        <div className="text-center text-gray-600">
          <p>&copy; 2024 E-LKPD Inquiry Learning. Dibuat untuk Skripsi.</p>
          <p className="mt-2">
            RANCANG BANGUN E-LEMBAR KERJA PESERTA DIDIK BERBASIS CLOUD DENGAN METODE INQUIRY LEARNING
          </p>
        </div>
      </motion.footer>
    </div>
  );
}
