# E-LKPD - E-Lembar Kerja Peserta Didik

Platform pembelajaran berbasis Inquiry Learning untuk mata pelajaran Pemrograman Dasar. Tingkatkan hasil belajar dengan metode yang interaktif dan efektif.

## 🎯 Tujuan

RANCANG BANGUN E-LEMBAR KERJA PESERTA DIDIK BERBASIS CLOUD DENGAN METODE INQUIRY LEARNING PADA MATA PELAJARAN PEMROGRAMAN DASAR UNTUK MENINGKATKAN HASIL BELAJAR

## 🚀 Tech Stack

- **Frontend**: Next.js 15, TypeScript, Tailwind CSS
- **Backend**: Supabase (Auth, Database, Storage)
- **Database**: PostgreSQL dengan Prisma ORM
- **Animations**: Framer Motion
- **UI Components**: Radix UI, Lucide React
- **Forms**: React Hook Form, Zod Validation
- **Deployment**: Vercel

## ✨ Features

### Phase 1 ✅ (Completed)

- [x] Landing page dengan responsive design
- [x] Tailwind CSS v3 configuration
- [x] Framer Motion animations
- [x] UI components (Button, Card, Input)
- [x] Prisma schema untuk database
- [x] Supabase integration setup
- [x] TypeScript types dan utilities
- [x] Project structure dan documentation

### Phase 2 🔄 (In Progress)

- [ ] Authentication System (Supabase Auth)
- [ ] Login/Register pages
- [ ] Protected routes middleware
- [ ] User context dan state management

### Phase 3 📋 (Planned)

- [ ] Dashboard untuk Guru dan Siswa
- [ ] Material Management System
- [ ] Inquiry Learning Workflow
- [ ] Student Worksheet Interface

### Phase 4 💻 (Planned)

- [ ] Online Code Editor
- [ ] Judge0 API Integration
- [ ] Code Execution Environment
- [ ] Programming Exercises

### Phase 5 📊 (Planned)

- [ ] Pre & Post Test System
- [ ] Progress Tracking
- [ ] Analytics Dashboard
- [ ] Performance Reports

### Phase 6 💬 (Planned)

- [ ] Discussion Forum
- [ ] Real-time Chat
- [ ] File Sharing
- [ ] Cloud Storage

## 🛠️ Development

### Prerequisites

- Node.js 18+
- npm atau yarn
- Git

### Installation

```bash
# Clone repository
git clone <repository-url>
cd e-lkpd

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env.local
# Edit .env.local dengan Supabase credentials

# Setup database
npm run db:generate
npm run db:push

# Run development server
npm run dev
```

### Environment Variables

Buat file `.env.local` dengan variabel berikut:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# Database
DATABASE_URL=your_database_url

# Judge0 API (untuk code editor)
JUDGE0_API_URL=your_judge0_url
JUDGE0_API_KEY=your_judge0_key
```

## 📁 Project Structure

```
e-lkpd/
├── src/
│   ├── app/                 # Next.js App Router
│   ├── components/          # Reusable UI components
│   │   └── ui/             # Base UI components
│   ├── lib/                # Utilities and configurations
│   │   ├── prisma.ts       # Database client
│   │   ├── supabase/       # Supabase clients
│   │   ├── types/          # TypeScript types
│   │   └── utils.ts        # Utility functions
│   └── styles/             # Global styles
├── prisma/                 # Database schema and migrations
├── public/                 # Static assets
└── docs/                   # Documentation
```

## 🎨 UI Components

### Animated Components

- `FadeIn` - Fade in animation
- `SlideIn` - Slide animation
- `ScaleIn` - Scale animation
- `StaggerContainer` - Staggered animations
- `HoverCard` - Hover card component
- `AnimatedButton` - Button with animations

### Base Components

- `Button` - Customizable button component
- `Card` - Card container component
- `Input` - Form input component

## 🗄️ Database Schema

### Core Entities

- **User** - Authentication dan user profiles
- **Class** - Kelas dan enrollment
- **Material** - Materi pembelajaran
- **Assignment** - Tugas dan worksheet
- **Test** - Pre/Post test
- **Discussion** - Forum diskusi
- **Progress** - Progress tracking
- **Feedback** - Feedback system

## 🚀 Deployment

### Vercel Deployment

1. Connect repository ke Vercel
2. Set environment variables di Vercel dashboard
3. Deploy otomatis pada setiap push ke main branch

### Manual Deployment

```bash
npm run build
npm run start
```

## 📚 Documentation

- [DATABASE_SETUP.md](./DATABASE_SETUP.md) - Database setup guide
- [TODO.md](./TODO.md) - Development roadmap

## 🤝 Contributing

1. Fork repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

This project is created for thesis purposes.

## 👨‍💻 Author

**Rafi Ramadian** - Skripsi Project 2024

---

⭐ **Star this repository if you find it helpful!**
