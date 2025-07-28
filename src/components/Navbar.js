'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { ShoppingCart, User, Search, LogOut, Menu, X } from 'lucide-react';

export default function Navbar() {
  const { user, logout } = useAuth();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await fetch('/api/logout', { method: 'POST' });
    } catch (error) {
      console.error("Logout failed:", error);
    }
    logout();
    setIsUserMenuOpen(false);
    router.push('/login');
  };

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/dashboard" className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
              ShopSphere
            </Link>
          </div>

          {/* Search Bar - Centered */}
          <div className="hidden md:flex flex-1 justify-center px-8">
            <div className="relative w-full max-w-lg">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full pl-10 pr-4 py-2 border rounded-full text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <Search className="h-5 w-5 text-gray-400" />
              </span>
            </div>
          </div>

          {/* Icons and User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/cart" className="relative p-2 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
              <ShoppingCart />
              <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white dark:ring-gray-800"></span>
            </Link>

            {user ? (
              <div className="relative">
                <button onClick={() => setIsUserMenuOpen(!isUserMenuOpen)} className="flex items-center space-x-2 p-2 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
                  <User />
                  <span>{user.name || 'Account'}</span>
                </button>
                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5">
                    <Link href="/account" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">My Account</Link>
                    <button onClick={handleLogout} className="w-full text-left block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Logout</button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                 <Link href="/login" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                  Login
                </Link>
                <Link href="/register" className="px-3 py-2 rounded-md text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                  Register
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
             <Link href="/cart" className="relative p-2 mr-2 text-gray-600 dark:text-gray-300">
              <ShoppingCart />
              <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white dark:ring-gray-800"></span>
            </Link>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-gray-600 dark:text-gray-300">
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <div className="relative w-full p-2">
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 border rounded-full text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <span className="absolute inset-y-0 left-0 flex items-center pl-5">
                <Search className="h-5 w-5 text-gray-400" />
              </span>
            </div>
            {user ? (
              <div className="px-2 py-2">
                 <div className="flex items-center space-x-2 mb-2">
                    <User className="text-gray-600 dark:text-gray-300"/>
                    <span className="font-medium text-gray-800 dark:text-white">{user.name || 'Account'}</span>
                 </div>
                 <button onClick={handleLogout} className="w-full text-left flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                   <LogOut />
                   <span>Logout</span>
                 </button>
              </div>
            ) : (
              <div className="px-2 py-2">
                <Link href="/login" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                  Login
                </Link>
                <Link href="/register" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
