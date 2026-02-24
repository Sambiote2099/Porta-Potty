'use client';

import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if page is scrolled
      setIsScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'education', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80; // Approximate navbar height
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;

      // Detect mobile device
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || window.innerWidth < 768;
      
      if (isMobile) {
        // Use native smooth scroll on mobile
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth' // Smooth scroll with native animation
        });
      } else {
        // Use GSAP smooth scroll on desktop
        gsap.to(window, {
          duration: 1.5,
          scrollTo: offsetPosition,
          ease: 'power2.inOut'
        });
      }
    }
  };

  const navItems = [
    { id: 'home', icon: (
      <svg className="w-6 h-6 text-slate-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ), label: 'Home' },
    { id: 'about', icon: (
      <svg className="w-6 h-6 text-slate-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ), label: 'About' },
    { id: 'education', icon: (
      <svg className="w-6 h-6 text-slate-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
      </svg>
    ), label: 'Education' },
    { id: 'projects', icon: (
      <svg className="w-6 h-6 text-slate-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ), label: 'Projects' },
    { id: 'skills', icon: (
      <svg className="w-6 h-6 text-slate-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ), label: 'Skills' },
    { id: 'contact', icon: (
      <svg className="w-6 h-6 text-slate-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ), label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 animate-fade-in" style={{ position: 'fixed' }}>
      <div className={`flex items-center justify-between gap-2 px-4 sm:px-8 py-3 sm:py-4 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/10 backdrop-blur-md border-b border-cyan-500/10 shadow-lg' 
          : 'bg-transparent'
      }`}>
        {/* Logo */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={() => scrollToSection('home')}
            className="p-1 sm:p-2 hover:bg-cyan-500/10 rounded-xl transition-all"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg overflow-hidden">
              <img
                src="https://res.cloudinary.com/diasvvkil/image/upload/v1771603668/logo-icon-light-transparent_hvakv2.png"
                alt="Arif bai"
                className="w-full h-full object-cover"
              />
            </div>
          </button>
          <span className="text-white font-semibold text-base sm:text-xl hidden md:block">Arif Hasan Sameer</span>
        </div>

        {/* Nav Items */}
        <div className="flex items-center gap-1 sm:gap-2">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`relative p-2 sm:p-3 rounded-xl transition-all group ${
              activeSection === item.id
                ? 'text-cyan-400 bg-cyan-500/10'
                : 'text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/5'
            }`}
            title={item.label}
          >
            <div className="w-5 h-5 sm:w-6 sm:h-6">
              {item.icon}
            </div>
            
            {/* Tooltip - hidden on mobile */}
            <span className="hidden sm:block absolute -bottom-10 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-slate-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              {item.label}
            </span>
          </button>
        ))}
        </div>
      </div>
    </nav>
  );
}

