'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {useGSAP} from '@gsap/react'
gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    title: 'Freelancer – Fiverr',
    company: 'Worked under an Agent',
    period: 'June 2020 - January 2021',
    description: 'Mainly did data entry, SEO, and basic image editing to deliver product solutions for clients. Managed and collaborated with small teams of 2–3 members to satisfy client demands.',
  },
];

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: 'Full Stack Development',
    description: 'Enthusiastic in building end-to-end applications with Next.js, MERN and modern databases',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'AI Integration',
    description: 'Experience integrating AI features using Botpress and modern AI tools',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Communications',
    description: 'Proficient in the language of English & comfortable interacting and building friendships with people from different countries and backgrounds',
  },
];

const stats = [
  { value: '3+', label: 'Projects Completed' },
  { value: '10+', label: 'Technologies' },
  { value: '6 months', label: 'Work Experience' },
  { value: '2×', label: 'Client\'s Helped' },
];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const experienceRefs = useRef<(HTMLDivElement | null)[]>([]);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);
  const statsRef = useRef<HTMLDivElement>(null);

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
            end:'bottom bottom',
            scrub:1
          },
          defaults: { ease: 'power3.out' }
        });

        tl.from(sectionRef.current, { opacity: 0, y: 150 })
          .from(headerRef.current, { opacity: 0, y: -50 }, '-=0.1')
          .from(storyRef.current, { opacity: 0, x: -50 }, '-=0.2')
          .fromTo(experienceRefs.current.filter(Boolean), { opacity: 0, x: 50 }, { opacity: 1, x: 0, duration: 0.8, stagger: 0.4 }, '-=0.8')
          .fromTo(featureRefs.current.filter(Boolean), { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.2 }, '-=0.2')
          .from(statsRef.current, { opacity: 0, scale: 0.9 }, '-=0.8');
      }
    }
  }, { dependencies: [sectionRef] });

  return (
    <section
      ref={sectionRef}
      id="about"
      className="min-h-screen py-32 relative overflow-hidden"
      style={{
  background: 'linear-gradient(135deg, #0a0f14 0%, #111827 25%, #1e293b 50%, #0891b2 75%, #06b6d4 100%)',
}}
    >
      {/* Decorative elements */}
      <div className="about-blob-1 absolute top-10 right-20 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl" />
      <div className="about-blob-1 absolute top-[900px] left-20 w-96 h-96 bg-rose-600/10 rounded-full blur-3xl" />
      <div className="about-blob-2 absolute bottom-32 right-10 w-96 h-96 bg-green-600/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-6">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-white/10 border border-white/30 rounded-full mb-6">
            <span className="text-white text-sm font-medium">About Me</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Get to know me better
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto drop-shadow-md">
            Passionate about creating digital experiences that make a difference
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Left - My Story */}
          <div ref={storyRef} className="bg-white/10 p-8 rounded-2xl border border-white/20 shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <h3 className="text-2xl font-bold text-white">My Story</h3>
            </div>
            
            <div className="space-y-4 text-white/90 leading-relaxed">
              <p>
                I’m a Computer Science and Engineering student at Bangladesh University of Business and Technology who enjoys building things with code and learning how systems work.
              </p>
              
              <p>
                I work mainly with Next.js, React, and modern databases, and I like experimenting with new ideas such as adding AI features to projects or improving how apps are structured. I still consider myself a learner, and I’m always exploring new technologies and improving my skills through hands-on projects.
              </p>
              
              <p>
                In my free time, I enjoy tinkering with AI, gaming a bit, gardening, cooking, and working on personal projects.
              </p>
              <p>I’m looking for opportunities where I can learn, build useful things, and grow as a developer.</p>
            </div>
          </div>

          {/* Right - Experience Timeline */}
          <div className="experience-timeline space-y-4">
            <div className="flex items-center gap-3 mb-6">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <h3 className="text-2xl font-bold text-white">Experience</h3>
            </div>

            {experiences.map((exp, index) => (
              <div
                key={index}
                ref={(el) => (experienceRefs.current[index] = el)}
                className="bg-white/10 p-6 rounded-xl border border-white/20 hover:border-white/40 transition-all shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/20 border-2 border-white/40 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 rounded-full bg-white"></div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-1">{exp.title}</h4>
                    <p className="text-white/90 font-medium mb-2">{exp.company}</p>
                    <p className="text-sm text-white/70 mb-3">{exp.period}</p>
                    <p className="text-white/80 text-sm leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left - Feature Cards */}
          <div className="features-grid space-y-4">
            {features.map((feature, index) => (
              <div
                key={index}
                ref={(el) => (featureRefs.current[index] = el)}
                className="bg-white/10 p-6 rounded-xl border border-white/20 hover:border-white/40 transition-all shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-white/20 border border-white/30 flex items-center justify-center text-white flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">{feature.title}</h4>
                    <p className="text-white/80 text-sm">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right - Stats Card */}
          <div ref={statsRef} className="bg-[#1c1c1c] rounded-2xl p-8 shadow-2xl">
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

