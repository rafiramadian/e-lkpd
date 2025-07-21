'use client';

import { useEffect, useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

interface DashboardLayoutProps {
  children: React.ReactNode;
  userRole?: 'student' | 'teacher';
}

export default function DashboardLayout({ children, userRole }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleSidebarClose = () => {
    setSidebarOpen(false);
  };

  const handleMenuClick = () => {
    setSidebarOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar Component */}
      <Sidebar isOpen={sidebarOpen} onClose={handleSidebarClose} userRole={userRole} />

      {/* Main Content */}
      <div className="md:ml-64">
        {/* Header Component */}
        <Header onMenuClick={handleMenuClick} userRole={userRole} />

        {/* Page Content */}
        <main className="p-6 min-h-screen bg-gray-50">{children}</main>
      </div>
    </div>
  );
}
