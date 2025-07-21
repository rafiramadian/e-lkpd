'use client';

import { useUser } from '@/contexts/UserContext';
import {
  ArrowRightOnRectangleIcon,
  BookOpenIcon,
  ChatBubbleLeftRightIcon,
  ClipboardDocumentListIcon,
  Cog6ToothIcon,
  HomeIcon,
  UserGroupIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  userRole?: 'student' | 'teacher';
}

export default function Sidebar({ isOpen, onClose, userRole }: SidebarProps) {
  const { user, signOut } = useUser();
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut();
    router.push('/');
  };

  const studentMenuItems = [
    { name: 'Dashboard', icon: HomeIcon, href: '/dashboard/student' },
    { name: 'Materi', icon: BookOpenIcon, href: '/dashboard/student/materials' },
    { name: 'Tugas', icon: ClipboardDocumentListIcon, href: '/dashboard/student/assignments' },
    { name: 'Diskusi', icon: ChatBubbleLeftRightIcon, href: '/dashboard/student/discussions' },
    { name: 'Profil', icon: Cog6ToothIcon, href: '/dashboard/student/profile' },
  ];

  const teacherMenuItems = [
    { name: 'Dashboard', icon: HomeIcon, href: '/dashboard/teacher' },
    { name: 'Materi', icon: BookOpenIcon, href: '/dashboard/teacher/materials' },
    { name: 'Tugas', icon: ClipboardDocumentListIcon, href: '/dashboard/teacher/assignments' },
    { name: 'Siswa', icon: UserGroupIcon, href: '/dashboard/teacher/students' },
    { name: 'Diskusi', icon: ChatBubbleLeftRightIcon, href: '/dashboard/teacher/discussions' },
    { name: 'Profil', icon: Cog6ToothIcon, href: '/dashboard/teacher/profile' },
  ];

  const menuItems = userRole === 'teacher' ? teacherMenuItems : studentMenuItems;

  return (
    <>
      {/* Mobile overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden"
            onClick={onClose}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <div
        className={`fixed md:relative inset-y-0 left-0 z-50 w-64 bg-white shadow-lg border-r border-gray-200 ${
          isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">E</span>
              </div>
              <h1 className="text-xl font-bold text-gray-900">E-LKPD</h1>
            </div>
            <button onClick={onClose} className="md:hidden p-2 rounded-lg hover:bg-gray-100">
              <XMarkIcon className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          {/* User Info */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-semibold">{user?.email?.charAt(0).toUpperCase()}</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">{user?.email}</p>
                <p className="text-xs text-gray-500 capitalize">{userRole === 'teacher' ? 'Guru' : 'Siswa'}</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={item.name}
                  href={item.href}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-3 px-4 py-3 text-gray-700 rounded-lg hover:bg-blue-50 hover:text-blue-700 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.name}</span>
                </motion.a>
              );
            })}
          </nav>

          {/* Sign Out */}
          <div className="p-4 border-t border-gray-200">
            <motion.button
              onClick={handleSignOut}
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-3 w-full px-4 py-3 text-gray-700 rounded-lg hover:bg-red-50 hover:text-red-700 transition-colors"
            >
              <ArrowRightOnRectangleIcon className="w-5 h-5" />
              <span className="font-medium">Keluar</span>
            </motion.button>
          </div>
        </div>
      </div>
    </>
  );
}
