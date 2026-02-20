'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    title: 'Web Developer Intern',
    company: 'Isha Immigration',
    period: 'Oct. 2025 - Present',
    description: 'Building responsive and user-centric front-end interfaces using HTML, CSS, and JavaScript, while leveraging Python and Google Workspace scripts to streamline data flow from web forms directly into Google Sheets for efficient automation.',
  },
  {
    title: 'Web Developer Intern',
    company: 'NullClass',
    period: 'Aug. 2025 - Oct. 2025',
    description: 'Developing end-to-end web applications using MERN stack, focusing on creating scalable and efficient solutions for various clients.',
  },
  {
    title: 'Web Developer Intern',
    company: 'Prodigy InfoTech',
    period: 'July 2025 - Aug. 2025',
    description: 'Developing end-to-end web applications using MERN stack, focusing on creating scalable and efficient solutions for various clients.',
  },
  {
    title: 'Full Stack Developer',
    company: 'Personal Projects',
    period: '2022 - Present',
    description: 'Built multiple responsive web applications using React.js and modern CSS frameworks, gaining expertise in frontend development.',
  },
];

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: 'Full Stack Expertise',
    description: 'Proficient in MERN stack with hands-on experience in building end-to-end applications',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'Problem Solver',
    description: 'Focus on creating efficient, scalable solutions that solve real-world problems',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: 'Continuous Learner',
    description: 'Always exploring new technologies and best practices to stay ahead in the field',
  },
];

const stats = [
  { value: '8+', label: 'Projects Completed' },
  { value: '1+', label: 'Years Experience' },
  { value: '20+', label: 'Technologies' },
  { value: '100%', label: 'Client Satisfaction' },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      // Section transition animation
      gsap.from(sectionRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 90%',
          end: 'top 20%',
          scrub: 1,
        },
        opacity: 0,
        y: 100,
      });

      gsap.from('.about-header', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
        opacity: 0,
        y: 50,
        duration: 1,
      });

      gsap.from('.story-content', {
        scrollTrigger: {
          trigger: '.story-content',
          start: 'top 80%',
        },
        opacity: 0,
        x: -50,
        duration: 1,
      });

      gsap.from('.experience-item', {
        scrollTrigger: {
          trigger: '.experience-timeline',
          start: 'top 70%',
        },
        opacity: 0,
        x: 50,
        duration: 0.8,
        stagger: 0.2,
      });

      gsap.from('.feature-card', {
        scrollTrigger: {
          trigger: '.features-grid',
          start: 'top 80%',
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
      });

      gsap.from('.stats-card', {
        scrollTrigger: {
          trigger: '.stats-card',
          start: 'top 80%',
        },
        opacity: 0,
        scale: 0.9,
        duration: 1,
      });
    }
  }, []);

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
      <div className="about-blob-1 absolute top-0 right-0 w-96 h-96 bg-yellow-600/10 rounded-full blur-3xl" />
      <div className="about-blob-2 absolute bottom-0 left-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="about-header text-center mb-16">
          <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md border border-white/30 rounded-full mb-6">
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
          <div className="story-content bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <h3 className="text-2xl font-bold text-white">My Story</h3>
            </div>
            
            <div className="space-y-4 text-white/90 leading-relaxed">
              <p>
                I am a Full Stack Web Developer with expertise in building dynamic, 
                user-friendly applications using modern frontend and backend technologies. 
                I focus on creating efficient, scalable, and high-quality solutions.
              </p>
              
              <p>
                I specialize in the MERN stack and have a passion for creating applications 
                that are not only functional but also provide excellent user experiences. 
                My journey in web development has been driven by curiosity and the desire 
                to solve complex problems through code.
              </p>
              
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing 
                to open-source projects, or sharing knowledge with the developer community.
              </p>
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
                className="experience-item bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 hover:border-white/40 transition-all shadow-lg"
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
                className="feature-card bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 hover:border-white/40 transition-all shadow-lg"
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
          <div className="stats-card bg-white/95 backdrop-blur-md rounded-2xl p-8 shadow-2xl">
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-600 to-red-600 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-700 text-sm font-medium">
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

