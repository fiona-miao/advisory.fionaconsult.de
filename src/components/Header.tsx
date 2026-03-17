'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [currentLang, setCurrentLang] = useState('EN');

  useEffect(() => {
    // Initialize language from localStorage
    const savedLang = localStorage.getItem('currentLang') || 'EN';
    setCurrentLang(savedLang);
  }, []);

  const toggleLang = () => {
    const newLang = currentLang === 'EN' ? 'DE' : 'EN';
    setCurrentLang(newLang);
    localStorage.setItem('currentLang', newLang);
    
    // Update all elements with data-en and data-de attributes
    const elements = document.querySelectorAll('[data-en][data-de]');
    elements.forEach(el => {
      const enText = el.getAttribute('data-en');
      const deText = el.getAttribute('data-de');
      if (newLang === 'EN') {
        el.textContent = enText;
      } else {
        el.textContent = deText;
      }
    });
  };

  return (
    <header style={{ backgroundColor: 'rgba(128, 0, 128, 0.75)' }}>
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src="/fionaconsult-logo.png" alt="Logo" style={{ height: '48px' }} />
          <Link href="/" className="font-semibold text-xl text-white">
            FIONACONSULT
          </Link>
        </div>
        <div className="flex gap-6 items-center text-sm">
          <button
            onClick={toggleLang}
            className="text-white bg-purple-700 px-3 py-1 rounded hover:bg-purple-900 font-semibold"
          >
            {currentLang === 'EN' ? 'DE' : 'EN'}
          </button>
        </div>
      </nav>
    </header>
  );
}
