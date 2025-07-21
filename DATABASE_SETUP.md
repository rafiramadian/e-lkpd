# Database Setup Guide - E-LKPD

## 🗄️ Setup Database dengan Prisma

### 1. Setup Supabase Project

1. **Buat Project di Supabase**

   - Kunjungi [supabase.com](https://supabase.com)
   - Sign up/Login dengan akun GitHub atau email
   - Klik "New Project"
   - Pilih organization Anda
   - Beri nama: `e-lkpd-inquiry-learning`
   - Database password: Buat password yang kuat (simpan baik-baik!)
   - Region: Pilih yang terdekat (misalnya `Southeast Asia (Singapore)`)
   - Pricing plan: Free tier

2. **Dapatkan Database URL**
   - Setelah project dibuat, buka **Settings** → **Database**
   - Copy **Connection string** (URI)
   - Format: `postgresql://postgres:[YOUR-PASSWORD]@db.[PROJECT-REF].supabase.co:5432/postgres`

### 2. Setup Environment Variables

Buat file `.env.local` di root project:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://[PROJECT-REF].supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here

# Database Configuration (Prisma)
DATABASE_URL="postgresql://postgres:[YOUR-PASSWORD]@db.[PROJECT-REF].supabase.co:5432/postgres"

# App Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_APP_NAME=E-LKPD Inquiry Learning

# Code Execution API (Judge0 or similar)
NEXT_PUBLIC_JUDGE0_API_URL=https://judge0-ce.p.rapidapi.com
JUDGE0_API_KEY=your_judge0_api_key
```

### 3. Generate Prisma Client

```bash
# Generate Prisma client
npx prisma generate

# Push schema ke database
npx prisma db push

# (Optional) Jika ingin menggunakan migrations
npx prisma migrate dev --name init
```

### 4. Verifikasi Setup

```bash
# Cek koneksi database
npx prisma studio

# Atau cek via CLI
npx prisma db pull
```

## 📊 Database Schema Overview

### Models Utama:

1. **User** - Data pengguna (siswa/guru)
2. **Class** - Data kelas
3. **Material** - Materi pembelajaran
4. **MaterialContent** - Konten materi (teks, gambar, video)
5. **InquiryStageModel** - Tahapan inquiry learning
6. **Assignment** - Tugas siswa
7. **Question** - Pertanyaan dalam tugas
8. **StudentAssignment** - Jawaban siswa
9. **Answer** - Detail jawaban
10. **Test** - Pre/Post test
11. **TestQuestion** - Pertanyaan dalam test
12. **StudentTest** - Hasil test siswa
13. **TestAnswer** - Jawaban test
14. **Discussion** - Forum diskusi
15. **Progress** - Progress tracking
16. **Feedback** - Feedback guru

### Relasi Utama:

```
User (teacher) → Class → Material → Assignment/Test
User (student) → StudentAssignment/StudentTest → Answer/TestAnswer
Material → InquiryStageModel (tahapan inquiry)
Discussion → Material (forum per materi)
Progress → User + Material (tracking progress)
Feedback → StudentAssignment (feedback guru)
```

## 🔧 Database Operations

### Generate Prisma Client

```bash
npx prisma generate
```

### Push Schema Changes

```bash
npx prisma db push
```

### Create Migration

```bash
npx prisma migrate dev --name [migration_name]
```

### Reset Database

```bash
npx prisma migrate reset
```

### View Database

```bash
npx prisma studio
```

## 🚀 Usage dalam Code

### Import Prisma Client

```typescript
import { prisma } from '@/lib/prisma';
```

### Contoh Query

```typescript
// Get all users
const users = await prisma.user.findMany();

// Get user with class
const user = await prisma.user.findUnique({
  where: { id: userId },
  include: { class: true },
});

// Create new material
const material = await prisma.material.create({
  data: {
    title: 'Pemrograman Dasar',
    description: 'Materi dasar pemrograman',
    classId: classId,
    teacherId: teacherId,
  },
});
```

## 🔒 Security Considerations

1. **Environment Variables**: Jangan commit `.env.local` ke git
2. **Database URL**: Simpan dengan aman, jangan share
3. **Row Level Security**: Implementasi RLS di Supabase jika diperlukan
4. **Connection Pooling**: Gunakan connection pooling untuk production

## 📝 Troubleshooting

### Error: "Database connection failed"

- Cek DATABASE_URL di `.env.local`
- Pastikan password benar
- Cek apakah Supabase project aktif

### Error: "Schema validation failed"

- Jalankan `npx prisma generate`
- Jalankan `npx prisma db push`

### Error: "Table doesn't exist"

- Jalankan `npx prisma migrate dev`
- Atau `npx prisma db push`

## 🎯 Next Steps

Setelah database setup selesai:

1. **Test koneksi** dengan query sederhana
2. **Buat seed data** untuk testing
3. **Implementasi authentication** dengan Supabase Auth
4. **Buat API routes** untuk CRUD operations
5. **Setup middleware** untuk protected routes

## 📚 Resources

- [Prisma Documentation](https://www.prisma.io/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Next.js Database Integration](https://nextjs.org/docs/app/building-your-application/data-fetching)
