import { ShoppingCart, Menu, Instagram, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';
import { getCartCount } from '../lib/cart';

interface HeaderProps {
  onCartClick: () => void;
}

export default function Header({ onCartClick }: HeaderProps) {
  const [cartCount, setCartCount] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const updateCartCount = () => setCartCount(getCartCount());
    updateCartCount();
    window.addEventListener('cartUpdate', updateCartCount);
    return () => window.removeEventListener('cartUpdate', updateCartCount);
  }, []);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-[#9FC98D] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Ayushyaa</h1>
                <p className="text-xs text-gray-500">Foods & Naturals</p>
              </div>
            </a>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-700 hover:text-[#9FC98D] transition">
              Home
            </a>
            <a href="#products" className="text-gray-700 hover:text-[#9FC98D] transition">
              Products
            </a>
            <a href="#about" className="text-gray-700 hover:text-[#9FC98D] transition">
              About
            </a>
            <a href="#contact" className="text-gray-700 hover:text-[#9FC98D] transition">
              Contact
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <a
              href="https://instagram.com/ayushyaa_foods"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-[#9FC98D] transition"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="tel:+919949349934"
              className="text-gray-700 hover:text-[#9FC98D] transition"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={onCartClick}
              className="relative text-gray-700 hover:text-[#9FC98D] transition"
            >
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#9FC98D] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gray-700"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden py-4 space-y-2">
            <a href="/" className="block text-gray-700 hover:text-[#9FC98D] transition py-2">
              Home
            </a>
            <a href="#products" className="block text-gray-700 hover:text-[#9FC98D] transition py-2">
              Products
            </a>
            <a href="#about" className="block text-gray-700 hover:text-[#9FC98D] transition py-2">
              About
            </a>
            <a href="#contact" className="block text-gray-700 hover:text-[#9FC98D] transition py-2">
              Contact
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
