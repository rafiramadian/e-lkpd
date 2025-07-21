'use client';

import DashboardLayout from '@/components/layout/DashboardLayout';
import {
  BookOpenIcon,
  ChartBarIcon,
  ChatBubbleLeftRightIcon,
  ClipboardDocumentListIcon,
  ClockIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

export default function TeacherDashboard() {
  const stats = [
    {
      name: 'Total Siswa',
      value: '24',
      icon: UserGroupIcon,
      color: 'bg-blue-500',
      change: '+3 bulan ini',
    },
    {
      name: 'Materi Dibuat',
      value: '15',
      icon: BookOpenIcon,
      color: 'bg-green-500',
      change: '+2 minggu ini',
    },
    {
      name: 'Tugas Aktif',
      value: '8',
      icon: ClipboardDocumentListIcon,
      color: 'bg-purple-500',
      change: '3 deadline dekat',
    },
    {
      name: 'Rata-rata Nilai',
      value: '85',
      icon: ChartBarIcon,
      color: 'bg-yellow-500',
      change: '+5% dari bulan lalu',
    },
  ];

  const recentActivities = [
    {
      id: 1,
      type: 'assignment',
      title: 'Membuat Tugas Algoritma',
      description: 'Tugas sorting algorithm untuk kelas XI',
      time: '1 jam yang lalu',
      status: 'completed',
    },
    {
      id: 2,
      type: 'material',
      title: 'Upload Materi Web Development',
      description: 'Modul HTML, CSS, dan JavaScript',
      time: '3 jam yang lalu',
      status: 'completed',
    },
    {
      id: 3,
      type: 'discussion',
      title: 'Menjawab Pertanyaan Siswa',
      description: 'Tentang implementasi linked list',
      time: '1 hari yang lalu',
      status: 'active',
    },
    {
      id: 4,
      type: 'student',
      title: 'Review Tugas Siswa',
      description: 'Mengoreksi 12 tugas database design',
      time: '2 hari yang lalu',
      status: 'completed',
    },
  ];

  const upcomingTasks = [
    {
      id: 1,
      title: 'Buat Materi React.js',
      type: 'material',
      deadline: '2024-01-18',
      priority: 'high',
    },
    {
      id: 2,
      title: 'Review Tugas Final Project',
      type: 'assignment',
      deadline: '2024-01-20',
      priority: 'medium',
    },
    {
      id: 3,
      title: 'Persiapan Ujian Tengah Semester',
      type: 'exam',
      deadline: '2024-01-25',
      priority: 'high',
    },
  ];

  const studentProgress = [
    { name: 'Ahmad Fauzi', progress: 85, assignments: 8, materials: 12 },
    { name: 'Sarah Putri', progress: 92, assignments: 9, materials: 15 },
    { name: 'Budi Santoso', progress: 78, assignments: 7, materials: 10 },
    { name: 'Diana Sari', progress: 88, assignments: 8, materials: 13 },
  ];

  return (
    <DashboardLayout userRole="teacher">
      <div className="space-y-6">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-6 text-white"
        >
          <h1 className="text-2xl font-bold mb-2">Selamat Datang di Dashboard Guru!</h1>
          <p className="text-purple-100">Kelola pembelajaran dan pantau progress siswa Anda dengan mudah.</p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 + index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    <p className="text-xs text-gray-500">{stat.change}</p>
                  </div>
                  <div className={`p-3 rounded-lg ${stat.color}`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Activities */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 bg-white rounded-xl p-6 shadow-sm border border-gray-200"
          >
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Aktivitas Terbaru</h2>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <motion.div
                  key={activity.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg"
                >
                  <div
                    className={`p-2 rounded-lg ${
                      activity.type === 'assignment'
                        ? 'bg-blue-100'
                        : activity.type === 'material'
                        ? 'bg-green-100'
                        : activity.type === 'discussion'
                        ? 'bg-purple-100'
                        : 'bg-yellow-100'
                    }`}
                  >
                    {activity.type === 'assignment' && <ClipboardDocumentListIcon className="w-5 h-5 text-blue-600" />}
                    {activity.type === 'material' && <BookOpenIcon className="w-5 h-5 text-green-600" />}
                    {activity.type === 'discussion' && <ChatBubbleLeftRightIcon className="w-5 h-5 text-purple-600" />}
                    {activity.type === 'student' && <UserGroupIcon className="w-5 h-5 text-yellow-600" />}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900">{activity.title}</h3>
                    <p className="text-sm text-gray-600">{activity.description}</p>
                    <p className="text-xs text-gray-500 flex items-center mt-1">
                      <ClockIcon className="w-3 h-3 mr-1" />
                      {activity.time}
                    </p>
                  </div>
                  <div
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      activity.status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                    }`}
                  >
                    {activity.status === 'completed' ? 'Selesai' : 'Aktif'}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Upcoming Tasks */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
          >
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Tugas Mendatang</h2>
            <div className="space-y-4">
              {upcomingTasks.map((task, index) => (
                <motion.div
                  key={task.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="p-4 border border-gray-200 rounded-lg"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium text-gray-900">{task.title}</h3>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        task.priority === 'high' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {task.priority === 'high' ? 'Prioritas Tinggi' : 'Prioritas Sedang'}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2 capitalize">{task.type}</p>
                  <p className="text-xs text-gray-500">Deadline: {task.deadline}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Student Progress */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
        >
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Progress Siswa</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-medium text-gray-900">Nama Siswa</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-900">Progress</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-900">Tugas</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-900">Materi</th>
                </tr>
              </thead>
              <tbody>
                {studentProgress.map((student, index) => (
                  <motion.tr
                    key={student.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="border-b border-gray-100 hover:bg-gray-50"
                  >
                    <td className="py-3 px-4 font-medium text-gray-900">{student.name}</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-16 bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${student.progress}%` }}></div>
                        </div>
                        <span className="text-sm text-gray-600">{student.progress}%</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-600">{student.assignments}</td>
                    <td className="py-3 px-4 text-sm text-gray-600">{student.materials}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
        >
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Aksi Cepat</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
            >
              <BookOpenIcon className="w-6 h-6 text-blue-600" />
              <span className="font-medium text-blue-900">Buat Materi</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
            >
              <ClipboardDocumentListIcon className="w-6 h-6 text-green-600" />
              <span className="font-medium text-green-900">Buat Tugas</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center space-x-3 p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors"
            >
              <UserGroupIcon className="w-6 h-6 text-purple-600" />
              <span className="font-medium text-purple-900">Kelola Siswa</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center space-x-3 p-4 bg-yellow-50 rounded-lg hover:bg-yellow-100 transition-colors"
            >
              <ChartBarIcon className="w-6 h-6 text-yellow-600" />
              <span className="font-medium text-yellow-900">Lihat Laporan</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </DashboardLayout>
  );
}
