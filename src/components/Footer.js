import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 pt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">ShopSphere</h3>
            <p className="text-sm">Your one-stop shop for everything you need. Quality products, unbeatable prices.</p>
          </div>

          {/* Links Section */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-indigo-600 dark:hover:text-indigo-400">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-indigo-600 dark:hover:text-indigo-400">Contact</Link></li>
              <li><Link href="/faq" className="hover:text-indigo-600 dark:hover:text-indigo-400">FAQ</Link></li>
              <li><Link href="/shipping" className="hover:text-indigo-600 dark:hover:text-indigo-400">Shipping & Returns</Link></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li>Email: support@shopsphere.com</li>
              <li>Phone: (123) 456-7890</li>
              <li>123 Commerce St, Webville, WS</li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400"><Facebook /></Link>
              <Link href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400"><Twitter /></Link>
              <Link href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400"><Instagram /></Link>
              <Link href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400"><Linkedin /></Link>
            </div>
          </div>
        </div>

        <div className="mt-8 py-4 border-t border-gray-200 dark:border-gray-700 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} ShopSphere. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
