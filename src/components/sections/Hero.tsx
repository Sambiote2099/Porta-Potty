'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import ParticleBackground from '@/components/ParticleBackground';
import { useGSAP } from '@gsap/react';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    if (heroRef.current) {
      // Skip animations on mobile - just keep hero visible
      
      
      // Desktop animations
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      
      tl.from('.hero-badge', { opacity: 0, y: 20, duration: 0.6 })
        .from('.hero-title', { opacity: 0, y: 30, duration: 0.8 }, '-=0.3')
        .from('.hero-subtitle', { opacity: 0, y: 20, duration: 0.6 }, '-=0.4')
        .from('.hero-description', { opacity: 0, y: 20, duration: 0.6 }, '-=0.3')
        .from('.tech-stack', { opacity: 0, y: 20, duration: 0.6 }, '-=0.2')
        .from('.cta-buttons', { opacity: 0, y: 20, duration: 0.6 }, '-=0.2')
        .from('.social-links', { opacity: 0, y: 20, duration: 0.6 }, '-=0.2')
        .from('.hero-image-container', { opacity: 0, x: 50, duration: 1 }, '-=0.8');
    }

    // Mouse interaction for floating shapes - ONLY on desktop
    if (!isMobile) {
      const handleMouseMove = (e: MouseEvent) => {
        if (!imageContainerRef.current) return;

        const shapes = imageContainerRef.current.querySelectorAll('.floating-shape');
        const rect = imageContainerRef.current.getBoundingClientRect();
        const mouseX = e.clientX - rect.left - rect.width / 2;
        const mouseY = e.clientY - rect.top - rect.height / 2;

        shapes.forEach((shape) => {
          const shapeRect = shape.getBoundingClientRect();
          const shapeCenterX = shapeRect.left + shapeRect.width / 2 - rect.left - rect.width / 2;
          const shapeCenterY = shapeRect.top + shapeRect.height / 2 - rect.top - rect.height / 2;

          const deltaX = mouseX - shapeCenterX;
          const deltaY = mouseY - shapeCenterY;
          const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

          if (distance < 200) {
            const force = (200 - distance) / 200;
            const moveX = -deltaX * force * 0.3;
            const moveY = -deltaY * force * 0.3;

            gsap.to(shape, {
              x: moveX,
              y: moveY,
              duration: 0.3,
              ease: 'power2.out',
            });
          } else {
            gsap.to(shape, {
              x: 0,
              y: 0,
              duration: 0.5,
              ease: 'power2.out',
            });
          }
        });
      };

      window.addEventListener('mousemove', handleMouseMove);

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, { dependencies: [heroRef] });

  const techStack = ['JavaScript', 'React', 'Next.js', 'Node.js', 'Express.js', 'MongoDB', 'SQL', 'MySQL'];

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-teal-950/40 to-slate-950"
    >
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 pointer-events-none"></div>
      
      {/* Floating decorative blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
      
      {/* Main content */}
      <div className="relative w-full h-full flex items-center">
        {/* Diagonal Image Background - Right Side (Desktop Only) */}
        <div className="hidden lg:block absolute top-0 right-0 w-1/2 h-full overflow-hidden">
          {/* Diagonal clip path container */}
          <div 
            className="absolute inset-0 mt-2"
            style={{
              clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%)',
            }}
          >
            <Image
              src="https://res.cloudinary.com/diasvvkil/image/upload/v1770717732/BreadVerse/IMG_3121_hituwg.jpg"
              alt="Arif Hasan Sameer"
              fill
              className="object-cover"
              priority
              sizes="50vw"
            />
            {/* Overlay for better text contrast */}
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-slate-950/30 to-slate-950/80"></div>
          </div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20">
          {/* Mobile: Image at top, Desktop: Text only */}
          <div className="lg:hidden mb-8 flex justify-center">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-teal-500/30 shadow-xl relative">
              <Image
                src="https://res.cloudinary.com/diasvvkil/image/upload/v1770717732/BreadVerse/IMG_3121_hituwg.jpg"
                alt="Arif Hasan Sameer"
                fill
                className="object-cover"
                priority
                sizes="192px"
              />
            </div>
          </div>

          <div className="max-w-2xl space-y-6 lg:space-y-6">
            
            {/* Badge */}
            <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 bg-teal-500/10 border border-teal-500/30 rounded-full">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-teal-400 text-sm font-medium">Available for Work</span>
            </div>

            {/* Title */}
            <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Hi, I'm Arif Hasan Sameer
            </h1>
            
            {/* Subtitle */}
            <p className="hero-subtitle text-xl sm:text-2xl md:text-3xl font-semibold text-gray-400">
              Software Developer | CSE Student
            </p>
            
            {/* Description */}
            <p className="hero-description text-base sm:text-lg text-gray-400 max-w-2xl leading-relaxed">
              Driven Computer Science and Engineering student seeking opportunities to contribute to real-world projects using full-stack technologies, modern frameworks, and AI integration. Passionate about building scalable web applications and deploying production-ready solutions.
            </p>

           
            {/* CTA Buttons */}
            <div className="cta-buttons flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <button
                onClick={() => {
                  const element = document.getElementById('projects');
                  if (element) {
                    const navbarHeight = 80;
                    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                    const offsetPosition = elementPosition - navbarHeight;
                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                  }
                }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-slate-900 rounded-lg transition-all transform hover:scale-105 font-semibold shadow-lg hover:shadow-xl cursor-pointer"
              >
                View My Work
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </button>
              
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=arifhasansameer@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-gray-600 text-gray-300 hover:border-teal-500 hover:text-teal-400 rounded-lg transition-all font-semibold"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Get in Touch
              </a>
              
              <a
                href="https://drive.google.com/file/d/1w8o3WtcK4U7Px09HkUKPHatOSxiIqbGa/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-400 hover:to-cyan-500 text-white rounded-lg transition-all transform hover:scale-105 font-semibold shadow-lg shadow-teal-500/30"
              >
                Download Resume
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </a>
            </div>

            {/* Social Links */}
            <div className="social-links flex gap-3 sm:gap-4 justify-center sm:justify-start">
              <a
                href="https://www.linkedin.com/in/arif-hasan-sameer-632592316/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-slate-800/50 border border-teal-500/20 hover:border-teal-500/50 hover:bg-teal-500/10 text-gray-400 hover:text-teal-400 rounded-lg transition-all"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              
              <a
                href="https://github.com/Sambiote2099"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-slate-800/50 border border-teal-500/20 hover:border-teal-500/50 hover:bg-teal-500/10 text-gray-400 hover:text-teal-400 rounded-lg transition-all"
                aria-label="GitHub"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              
              <a
                href="https://x.com/FlynnBiote_"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-slate-800/50 border border-teal-500/20 hover:border-teal-500/50 hover:bg-teal-500/10 text-gray-400 hover:text-teal-400 rounded-lg transition-all"
                aria-label="X"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              
              <a
                href="https://www.facebook.com/arif.hasan.sameer.2025"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-slate-800/50 border border-teal-500/20 hover:border-teal-500/50 hover:bg-teal-500/10 text-gray-400 hover:text-teal-400 rounded-lg transition-all"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
