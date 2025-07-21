# E-LKPD Inquiry Learning

Platform pembelajaran berbasis Inquiry Learning untuk mata pelajaran Pemrograman Dasar yang dirancang untuk meningkatkan hasil belajar siswa.

## 📋 Deskripsi Proyek

E-LKPD (E-Lembar Kerja Peserta Didik) adalah aplikasi web yang mengimplementasikan metode Inquiry Learning dalam pembelajaran pemrograman dasar. Platform ini dirancang untuk memberikan pengalaman belajar yang interaktif dan efektif dengan berbagai fitur yang mendukung proses pembelajaran.

## 🎯 Fitur Utama

### 👥 Authentication & User Management

- Registrasi untuk siswa dan guru
- Role-based login (siswa/guru)
- Keamanan berbasis Supabase Auth

### 🏠 Dashboard Pengguna

- **Siswa**: Progress belajar, materi tersedia, tugas pending
- **Guru**: Statistik siswa, manajemen materi, daftar kelas

### 📚 Manajemen Materi Inquiry Learning

- Pembuatan materi dengan tahapan Inquiry Learning
- Dukungan teks, gambar, video
- Penugasan materi ke kelas tertentu

### 📝 E-LKPD Student Interface

- Tugas berbasis inquiry dengan berbagai format
- Auto-save saat mengerjakan
- Petunjuk inquiry di setiap tahapan

### 👨‍💻 Online Code Editor

- Editor kode online untuk praktik langsung
- Dukungan bahasa C, Python, JavaScript
- Eksekusi kode dengan API Judge0

### 🎯 Pre-Test & Post-Test

- Evaluasi pembelajaran otomatis
- Skor dan analisis hasil
- Tracking peningkatan pemahaman

### 💬 Forum Diskusi

- Diskusi threaded antara siswa dan guru
- Notifikasi real-time
- Kategorisasi berdasarkan materi

### 📊 Progress Tracking

- Monitoring progress pembelajaran
- Visualisasi kemajuan
- Laporan komprehensif

### ✉️ Feedback System

- Feedback dari guru untuk tugas siswa
- Sistem penilaian terintegrasi
- Riwayat feedback

### 📥 Export & Reporting

- Export nilai dan progress ke Excel/CSV
- Filter berdasarkan kelas/materi/siswa
- Laporan akademik

### ☁️ Cloud Storage

- Penyimpanan file pendukung
- Manajemen file terorganisir
- Akses aman

### 🌓 UI/UX Features

- Light/Dark mode
- Responsive design
- Accessibility features

## 🛠️ Teknologi yang Digunakan

- **Frontend**: Next.js 14, TypeScript, Tailwind CSS
- **Backend**: Supabase (Database, Auth, Storage)
- **UI Components**: Radix UI, Lucide React
- **Form Handling**: React Hook Form, Zod
- **Code Execution**: Judge0 API
- **Deployment**: Vercel (recommended)

## 🚀 Instalasi dan Setup

### Prerequisites

- Node.js 18+
- npm atau yarn
- Akun Supabase

### 1. Clone Repository

```bash
git clone <repository-url>
cd e-lkpd
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment Variables

Buat file `.env.local` berdasarkan `env.example`:

```bash
cp env.example .env.local
```

Isi dengan konfigurasi Supabase Anda:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_APP_NAME=E-LKPD Inquiry Learning
NEXT_PUBLIC_JUDGE0_API_URL=https://judge0-ce.p.rapidapi.com
JUDGE0_API_KEY=your_judge0_api_key
```

### 4. Setup Supabase Database

1. Buat project baru di [Supabase](https://supabase.com)
2. Jalankan SQL script untuk membuat tabel (akan disediakan)
3. Setup Row Level Security (RLS) policies
4. Konfigurasi Storage buckets

### 5. Run Development Server

```bash
npm run dev
```

Aplikasi akan berjalan di `http://localhost:3000`

## 📁 Struktur Proyek

```
src/
├── app/                    # Next.js App Router
│   ├── auth/              # Authentication pages
│   ├── dashboard/         # Dashboard pages
│   ├── materials/         # Material management
│   ├── assignments/       # Assignment pages
│   └── admin/            # Admin pages
├── components/            # React components
│   ├── ui/               # Base UI components
│   ├── auth/             # Authentication components
│   ├── dashboard/        # Dashboard components
│   ├── materials/        # Material components
│   ├── assignments/      # Assignment components
│   ├── code-editor/      # Code editor components
│   ├── tests/            # Test components
│   ├── discussions/      # Discussion components
│   ├── progress/         # Progress tracking
│   ├── feedback/         # Feedback components
│   └── export/           # Export components
├── lib/                  # Utility libraries
│   ├── supabase/         # Supabase configuration
│   ├── utils/            # Utility functions
│   ├── types/            # TypeScript types
│   └── hooks/            # Custom React hooks
└── styles/               # Global styles
```

## 🗄️ Database Schema

### Tabel Utama

- `users` - Data pengguna (siswa/guru)
- `classes` - Data kelas
- `materials` - Materi pembelajaran
- `assignments` - Tugas siswa
- `student_assignments` - Jawaban siswa
- `tests` - Pre/Post test
- `student_tests` - Hasil test siswa
- `discussions` - Forum diskusi
- `progress` - Progress tracking
- `feedback` - Feedback guru

## 🔧 Development

### Scripts Available

```bash
npm run dev          # Development server
npm run build        # Production build
npm run start        # Production server
npm run lint         # ESLint
npm run type-check   # TypeScript check
```

### Code Style

- Menggunakan ESLint dan Prettier
- TypeScript strict mode
- Tailwind CSS untuk styling
- Component-based architecture

## 🧪 Testing

```bash
npm run test         # Run tests
npm run test:watch   # Watch mode
npm run test:coverage # Coverage report
```

## 📦 Deployment

### Vercel (Recommended)

1. Connect repository ke Vercel
2. Setup environment variables
3. Deploy otomatis

### Manual Deployment

```bash
npm run build
npm run start
```

## 🤝 Contributing

1. Fork repository
2. Buat feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## 📝 TODO List

Lihat file `TODO.md` untuk daftar lengkap fitur yang akan dikembangkan.

## 📄 License

Proyek ini dibuat untuk keperluan skripsi. Tidak ada lisensi komersial.

## 👨‍💻 Author

**Rafi Ramadian** - Mahasiswa yang mengembangkan E-LKPD untuk skripsi

## 🙏 Acknowledgments

- Supabase untuk backend services
- Next.js team untuk framework
- Tailwind CSS untuk styling
- Judge0 untuk code execution API

---

**Judul Skripsi**: RANCANG BANGUN E-LEMBAR KERJA PESERTA DIDIK BERBASIS CLOUD DENGAN METODE INQUIRY LEARNING PADA MATA PELAJARAN PEMROGRAMAN DASAR UNTUK MENINGKATKAN HASIL BELAJAR
