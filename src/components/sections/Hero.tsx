'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ParticleBackground from '@/components/ParticleBackground';

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heroRef.current) {
      // Simple fade-in animations without complex stacking
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

    // Mouse interaction for floating shapes
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
  }, []);

  const techStack = ['JavaScript', 'React', 'Next.js', 'Node.js', 'Express.js', 'MongoDB', 'SQL', 'MySQL'];

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-amber-950/30 to-slate-950"
      style={{ paddingTop: '20px' }}
    >
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 pointer-events-none"></div>
      
      {/* Floating decorative blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none"></div>
      
      {/* Main content */}
      <div className="relative w-full h-full flex items-center">
        {/* Diagonal Image Background - Right Side */}
        <div className="absolute top-0 right-0 w-1/2 h-full overflow-hidden">
          {/* Diagonal clip path container */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://res.cloudinary.com/diasvvkil/image/upload/v1770717732/BreadVerse/IMG_3121_hituwg.jpg')",
              clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%)',
            }}
          >
            {/* Overlay for better text contrast */}
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-slate-950/30 to-slate-950/80"></div>
          </div>
          
         
        </div>

        {/* Left Side - Text Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20">
          <div className="max-w-2xl space-y-6">
            
            {/* Badge */}
            <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-amber-400 text-sm font-medium">Available for work</span>
            </div>

            {/* Title */}
            <h1 className="hero-title text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Hi, I'm Aryan Hooda
            </h1>
            
            {/* Subtitle */}
            <p className="hero-subtitle text-2xl md:text-3xl font-semibold text-gray-400">
              Full Stack Web Developer
            </p>
            
            {/* Description */}
            <p className="hero-description text-lg text-gray-400 max-w-2xl leading-relaxed">
              I am a Full Stack Web Developer with expertise in building dynamic, user-friendly 
              applications using modern frontend and backend technologies. I focus on creating 
              efficient, scalable, and high-quality solutions.
            </p>

           
            {/* CTA Buttons */}
            <div className="cta-buttons flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-900 rounded-lg transition-all transform hover:scale-105 font-semibold shadow-lg hover:shadow-xl"
              >
                View My Work
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-600 text-gray-300 hover:border-amber-500 hover:text-amber-400 rounded-lg transition-all font-semibold"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Get in Touch
              </a>
              
              <a
                href="/resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white rounded-lg transition-all transform hover:scale-105 font-semibold shadow-lg shadow-amber-500/30"
              >
                Download Resume
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </a>
            </div>

            {/* Social Links */}
            <div className="social-links flex gap-4">
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-slate-800/50 border border-amber-500/20 hover:border-amber-500/50 hover:bg-amber-500/10 text-gray-400 hover:text-amber-400 rounded-lg transition-all"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-slate-800/50 border border-amber-500/20 hover:border-amber-500/50 hover:bg-amber-500/10 text-gray-400 hover:text-amber-400 rounded-lg transition-all"
                aria-label="GitHub"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-slate-800/50 border border-amber-500/20 hover:border-amber-500/50 hover:bg-amber-500/10 text-gray-400 hover:text-amber-400 rounded-lg transition-all"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              
              <a
                href="https://instagram.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-slate-800/50 border border-amber-500/20 hover:border-amber-500/50 hover:bg-amber-500/10 text-gray-400 hover:text-amber-400 rounded-lg transition-all"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
