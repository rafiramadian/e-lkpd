'use client';

import { useUser } from '@/contexts/UserContext';
import { Bars3Icon } from '@heroicons/react/24/outline';

interface HeaderProps {
  onMenuClick: () => void;
  userRole?: 'student' | 'teacher';
}

export default function Header({ onMenuClick, userRole }: HeaderProps) {
  const { user } = useUser();

  return (
    <div className="bg-white shadow-sm border-b border-gray-200">
      <div className="flex items-center justify-between px-6 py-4">
        <button onClick={onMenuClick} className="md:hidden p-2 rounded-lg hover:bg-gray-100">
          <Bars3Icon className="w-6 h-6 text-gray-600" />
        </button>

        <div className="flex items-center space-x-4">
          <h2 className="text-lg font-semibold text-gray-900">
            {userRole === 'teacher' ? 'Dashboard Guru' : 'Dashboard Siswa'}
          </h2>
        </div>

        <div className="flex items-center space-x-3">
          <div className="hidden md:flex items-center space-x-2 text-sm text-gray-600">
            <span>Selamat datang,</span>
            <span className="font-medium text-gray-900">{user?.email?.split('@')[0]}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
