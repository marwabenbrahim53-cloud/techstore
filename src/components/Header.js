'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white py-4 shadow-md relative z-50">
      <div className="container mx-auto flex justify-between items-center px-6">
        
        {/* اللوغو */}
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.jpg" alt="Logo" width={40} height={40} className="rounded-full" />
          <span className="text-xl font-bold">TechStore</span>
        </Link>

        {/* زر الـ Hamburger (يظهر فقط في الموبايل بفضل md:hidden) */}
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
          </svg>
        </button>

        {/* المينيو: تختفي وتظهر حسب الـ state */}
        <nav className={`${isOpen ? 'flex' : 'hidden'} md:flex absolute md:static top-full left-0 w-full bg-gray-900 flex-col md:flex-row items-center p-6 md:p-0 gap-6`}>
          
          {/* الروابط (تتوسط في الـ PC، وتولي عمودية في التليفون) */}
          <ul className="flex flex-col md:flex-row md:flex-1 justify-center gap-6 font-semibold w-full md:w-auto text-center">
            <li><Link href="/" onClick={() => setIsOpen(false)} className="hover:text-blue-400 transition">Accueil</Link></li>
            <li><Link href="/produits" onClick={() => setIsOpen(false)} className="hover:text-blue-400 transition">Produits</Link></li>
            <li><Link href="/blog" onClick={() => setIsOpen(false)} className="hover:text-blue-400 transition">Blog</Link></li>
            <li><Link href="/contact" onClick={() => setIsOpen(false)} className="hover:text-blue-400 transition">Contact</Link></li>
          </ul>

          {/* البوتون (يتحط في اليمين في الـ PC) */}
          <div className="md:ml-auto">
            <Link href="/inscription" onClick={() => setIsOpen(false)} className="bg-blue-600 px-6 py-2 rounded-full hover:bg-blue-700 transition block text-center">
              Inscription
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}