import React from 'react';
import { Rocket } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/50 border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 text-white">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-gradient-to-br from-blue-500 to-indigo-700">
            <Rocket className="h-5 w-5" />
          </span>
          <span className="font-semibold tracking-wide">Editor Portfolio</span>
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm text-white/80">
          <a href="#portfolio" className="hover:text-white transition">Karya</a>
          <a href="#about" className="hover:text-white transition">Tentang</a>
          <a href="#contact" className="hover:text-white transition">Kontak</a>
        </div>
        <a href="#contact" className="ml-4 inline-flex items-center justify-center rounded-md bg-gradient-to-r from-blue-500 to-indigo-700 px-4 py-2 text-sm font-medium text-white shadow hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400">
          Hire Me
        </a>
      </nav>
    </header>
  );
}
