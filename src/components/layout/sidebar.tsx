'use client';
import React, { useState } from 'react';
import { DashboardNav } from '@/components/dashboard-nav';
// import { navItems } from '@/constants/data';
import { cn } from '@/lib/utils';
import { ChevronLeft } from 'lucide-react';
import { useSidebar } from '@/hooks/useSidebar';
import { NavItem } from '@/types';

type SidebarProps = {
  className?: string;
};

const navItems: NavItem[] = [
  {
    title: 'Dashboard',
    href: '/dashboard/locality',
    icon: 'dashboard',
    label: 'Dashboard'
  },
  {
    title: 'Projects',
    href: '/dashboard/project',
    icon: 'project',
    label: 'project'
  },
  {
    title: 'Home',
    href: '/',
    icon: 'login',
    label: 'Home'
  }
];


export default function Sidebar({ className }: SidebarProps) {
  const { isMinimized, toggle } = useSidebar();
  const [status, setStatus] = useState(false);

  const handleToggle = () => {
    setStatus(true);
    toggle();
    setTimeout(() => setStatus(false), 500);
  };
  return (
    <nav
      className={cn(
        `relative hidden h-screen flex-none border-r z-10  md:block`,
        status && 'duration-500',
        !isMinimized ? 'w-72' : 'w-[72px]',
        className
      )}
    >
      <ChevronLeft
        className={cn(
          'absolute -right-3 top-20 cursor-pointer rounded-full border bg-background text-3xl text-foreground',
          isMinimized && 'rotate-180'
        )}
        onClick={handleToggle}
      />
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="mt-3 space-y-1">
            <DashboardNav items={navItems} />
          </div>
        </div>
      </div>
    </nav>
  );
}
