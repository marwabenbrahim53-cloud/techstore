'use client'; // ضروري باش الـ React يخدم الـ state
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-100 py-4 shadow-sm relative z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold font-['Poppins'] text-gray-800">
          TechStore
        </h1>

        
        <button 
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>

      
        <nav 
          className={`${isOpen ? 'block' : 'hidden'} md:block absolute md:static top-full left-0 w-full bg-white p-4 md:p-0 text-center border-b md:border-none shadow-md md:shadow-none`}
        >
          <ul className="flex flex-col md:flex-row gap-6 font-semibold">
            <li>
              <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-blue-600 transition">
                Accueil
              </Link>
            </li>
            <li>
              <Link href="/produits" onClick={() => setIsOpen(false)} className="hover:text-blue-600 transition">
                Produits
              </Link>
            </li>
            <li>
              <Link href="/inscription" onClick={() => setIsOpen(false)} className="hover:text-blue-600 transition">
                S'inscrire
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}