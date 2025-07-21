'use client';

import DashboardLayout from '@/components/layout/DashboardLayout';
import {
  BookOpenIcon,
  ChatBubbleLeftRightIcon,
  CheckCircleIcon,
  ClipboardDocumentListIcon,
  ClockIcon,
  ExclamationTriangleIcon,
} from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

export default function StudentDashboard() {
  const stats = [
    {
      name: 'Materi Dipelajari',
      value: '12',
      icon: BookOpenIcon,
      color: 'bg-blue-500',
      change: '+2 minggu ini',
    },
    {
      name: 'Tugas Selesai',
      value: '8',
      icon: CheckCircleIcon,
      color: 'bg-green-500',
      change: '+3 minggu ini',
    },
    {
      name: 'Tugas Pending',
      value: '3',
      icon: ExclamationTriangleIcon,
      color: 'bg-yellow-500',
      change: 'Deadline dekat',
    },
    {
      name: 'Diskusi Aktif',
      value: '5',
      icon: ChatBubbleLeftRightIcon,
      color: 'bg-purple-500',
      change: '+1 hari ini',
    },
  ];

  const recentActivities = [
    {
      id: 1,
      type: 'assignment',
      title: 'Tugas Algoritma Dasar',
      description: 'Mengumpulkan tugas sorting algorithm',
      time: '2 jam yang lalu',
      status: 'completed',
    },
    {
      id: 2,
      type: 'material',
      title: 'Materi Pemrograman Web',
      description: 'Menyelesaikan modul HTML & CSS',
      time: '1 hari yang lalu',
      status: 'completed',
    },
    {
      id: 3,
      type: 'discussion',
      title: 'Diskusi Struktur Data',
      description: 'Bertanya tentang implementasi linked list',
      time: '3 hari yang lalu',
      status: 'active',
    },
  ];

  const upcomingDeadlines = [
    {
      id: 1,
      title: 'Tugas Database Design',
      subject: 'Basis Data',
      deadline: '2024-01-15',
      daysLeft: 2,
    },
    {
      id: 2,
      title: 'Proyek Web Development',
      subject: 'Pemrograman Web',
      deadline: '2024-01-20',
      daysLeft: 7,
    },
  ];

  return (
    <DashboardLayout userRole="student">
      <div className="space-y-6">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white"
        >
          <h1 className="text-2xl font-bold mb-2">Selamat Datang di Dashboard Siswa!</h1>
          <p className="text-blue-100">Lanjutkan pembelajaran Anda dan pantau progress akademik Anda.</p>
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
                        : 'bg-purple-100'
                    }`}
                  >
                    {activity.type === 'assignment' && <ClipboardDocumentListIcon className="w-5 h-5 text-blue-600" />}
                    {activity.type === 'material' && <BookOpenIcon className="w-5 h-5 text-green-600" />}
                    {activity.type === 'discussion' && <ChatBubbleLeftRightIcon className="w-5 h-5 text-purple-600" />}
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

          {/* Upcoming Deadlines */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
          >
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Deadline Mendatang</h2>
            <div className="space-y-4">
              {upcomingDeadlines.map((deadline, index) => (
                <motion.div
                  key={deadline.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="p-4 border border-gray-200 rounded-lg"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium text-gray-900">{deadline.title}</h3>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        deadline.daysLeft <= 3
                          ? 'bg-red-100 text-red-800'
                          : deadline.daysLeft <= 7
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-green-100 text-green-800'
                      }`}
                    >
                      {deadline.daysLeft} hari lagi
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{deadline.subject}</p>
                  <p className="text-xs text-gray-500">Deadline: {deadline.deadline}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
        >
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Aksi Cepat</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
            >
              <BookOpenIcon className="w-6 h-6 text-blue-600" />
              <span className="font-medium text-blue-900">Lihat Materi</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
            >
              <ClipboardDocumentListIcon className="w-6 h-6 text-green-600" />
              <span className="font-medium text-green-900">Kerjakan Tugas</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center space-x-3 p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors"
            >
              <ChatBubbleLeftRightIcon className="w-6 h-6 text-purple-600" />
              <span className="font-medium text-purple-900">Ikut Diskusi</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </DashboardLayout>
  );
}
