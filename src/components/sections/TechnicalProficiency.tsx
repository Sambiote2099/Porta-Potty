'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    title: 'Programming Languages',
  
    color: 'yellow',
    skills: ['TypeScript', 'JavaScript', 'Python'],
  },
  {
    title: 'Frontend Development',
  
    color: 'blue',
    skills: ['GSAP', 'HTML', 'CSS', 'Tailwind V4', 'TypeScript', 'JavaScript', 'PWA'],
  },
  {
    title: 'Backend Development',
  
    color: 'green',
    skills: ['Node.js(Learning)','Spring Boot', 'REST API Development'],
  },
  {
    title: 'Database & Storage',
 
    color: 'purple',
    skills: ['MySQL', 'MongoDB', 'SQLite'],
  },
  {
    title: 'Authentication & Security',
   
    color: 'red',
    skills: ['OAuth Implementation', 'Google Login', 'Session-based Auth', 'Token-based Auth'],
  },
  {
    title: 'Deployment & Hosting',
   
    color: 'cyan',
    skills: ['Vercel', 'Netlify', 'Cloudflare', 'Ngrok', 'Production Deployment'],
  },
  {
    title: 'AI & Integration',
    
    color: 'indigo',
    skills: ['Botpress', 'AI Integration'],
  },
  {
    title: 'Frameworks',
    
    color: 'indigo',
    skills: ['Next.JS'],
  },
];

const proficiencyLevels = [
  { name: 'TypeScript', level: 45 },
  { name: 'GSAP', level: 20 },
  { name: 'Spring Boot', level: 20 },
  { name: 'Next.js', level: 56 },
  { name: 'MongoDB', level: 40 },
  { name: 'MySQL', level: 45 },
  { name: 'REST APIs', level: 40 },
  {name: "Botpress", level: 35}
];

const features = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Full-Stack Development',
    description: 'End-to-end application development with modern frameworks',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Secure Authentication',
    description: 'OAuth and token-based authentication implementation',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'AI Integration',
    description: 'Implementing AI features using Botpress and modern tools',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Performance',
    description: 'Optimized and scalable application architecture',
  },
];

export default function TechnicalProficiency() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    if (sectionRef.current) {
      // Simple fade-in for mobile, full animations for desktop
      if (isMobile) {
        gsap.from(sectionRef.current, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: "play none none reverse"
          },
          opacity: 0,
          duration: 2,
          ease: 'power2.out',
        });
      } else {
        // Desktop: Single timeline with one ScrollTrigger
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: "play none none reverse"
          },
          defaults: { ease: 'power3.out' }
        });

        tl.from(sectionRef.current, { opacity: 0, y: 100 })
          .from('.tech-header', { opacity: 0, y: 50 }, '-=0.4')
          .fromTo('.skill-category', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.15 }, '-=0.3')
          .fromTo('.proficiency-bar', { opacity: 0, x: 50 }, { opacity: 1, x: 0, duration: 0.6, stagger: 0.1 }, '-=0.4')
          .fromTo('.feature-item', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.2 }, '-=0.4');
      }
    }
}, { dependencies: [sectionRef] });

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="min-h-screen py-32 relative overflow-hidden"
      style={{
  background: 'linear-gradient(135deg, #0c0f1a 0%, #1a1f2e 25%, #2a2f45 50%, #4f46e5 75%, #7c3aed 100%)',
}}
    >
      {/* Decorative elements */}
      <div className="tech-blob-1 absolute top-1/4 right-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl" />
      <div className="tech-blob-2 absolute bottom-1/4 left-0 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="tech-header text-center mb-16">
          <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md border border-white/30 rounded-full mb-6">
            <span className="text-white text-sm font-medium">Skills & Expertise</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Technical Proficiency
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto drop-shadow-md">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Left - Skill Categories (2 columns) */}
          <div className="lg:col-span-2 skills-grid grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="skill-category bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:border-white/40 transition-all shadow-2xl"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{category.icon}</span>
                  <h3 className="text-xl font-bold text-white drop-shadow-md">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-white/10 border border-white/30 text-white text-sm rounded-lg hover:border-white/50 hover:bg-white/20 transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right - Proficiency Levels & Stats */}
          <div className="space-y-6">
            {/* Proficiency Levels */}
            <div className="proficiency-section bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-6 drop-shadow-md">Proficiency Levels</h3>
              <div className="space-y-5">
                {proficiencyLevels.map((item, index) => (
                  <div key={index} className="proficiency-bar">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white/90 font-medium text-sm">{item.name}</span>
                      <span className="text-white text-sm font-semibold">{item.level}%</span>
                    </div>
                    <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-emerald-300 via-teal-500 to-cyan-400 rounded-full transition-all duration-1000 shadow-lg"
                        style={{ width: `${item.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Development Stats */}
            <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Development Stats</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 text-sm">Projects</span>
                  <span className="text-lg font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">3+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 text-sm">Ongoing</span>
                  <span className="text-lg font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">1</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 text-sm">Learning</span>
                  <span className="text-sm font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Node.JS, Express.JS, AI development</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Features */}
        <div className="features-section grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-item bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:border-white/40 transition-all text-center shadow-2xl"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-white/20 border border-white/30 flex items-center justify-center text-white">
                {feature.icon}
              </div>
              <h4 className="text-lg font-bold text-white mb-2 drop-shadow-md">{feature.title}</h4>
              <p className="text-white/80 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

