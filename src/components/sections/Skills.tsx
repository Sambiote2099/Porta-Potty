'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitTextRight from '@/components/gsap/SplitTextRight';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    skills: [
      { name: 'React & Next.js', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'GSAP & Framer Motion', level: 88 },
      { name: 'Redux & Zustand', level: 85 },
    ],
  },
  {
    title: 'Backend Development',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
    skills: [
      { name: 'Node.js & Express', level: 90 },
      { name: 'PostgreSQL & Prisma', level: 87 },
      { name: 'MongoDB & Mongoose', level: 85 },
      { name: 'REST & GraphQL APIs', level: 92 },
      { name: 'Authentication & Security', level: 88 },
    ],
  },
  {
    title: 'DevOps & Tools',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    skills: [
      { name: 'Git & GitHub Actions', level: 93 },
      { name: 'Docker & Kubernetes', level: 82 },
      { name: 'AWS & Vercel', level: 85 },
      { name: 'CI/CD Pipelines', level: 80 },
      { name: 'Testing (Jest, Cypress)', level: 87 },
    ],
  },
];

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const skillCardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const skillBarRefs = useRef<(HTMLDivElement | null)[]>([]);

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

        tl.fromTo(sectionRef.current, { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 0.8 })
          .fromTo(skillCardRefs.current.filter(Boolean), { opacity: 0, y: 80 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.2 }, '-=0.4')
          .fromTo(skillBarRefs.current.filter(Boolean), { width: 0 }, { width: '100%', duration: 1.2, stagger: 0.1, ease: 'power2.out' }, '-=0.6');
      }
    }
 }, { dependencies: [sectionRef] });
  return (
    <section
      ref={sectionRef}
      id="skills"
      className="min-h-screen flex items-center py-32 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #78350f 0%, #92400e 25%, #ea580c 50%, #f59e0b 75%, #fbbf24 100%)',
      }}
    >
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-white/10 border border-white/30 rounded-full mb-6">
            <span className="text-white text-sm font-medium">Technical Skills</span>
          </div>
          <SplitTextRight className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            Skills & Expertise
          </SplitTextRight>
          <p className="text-xl text-white/90 max-w-2xl mx-auto drop-shadow-md">
            A comprehensive toolkit built through years of hands-on experience and continuous learning
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              ref={(el) => (skillCardRefs.current[index] = el)}
              className="bg-white/10 p-8 rounded-2xl border border-white/20 hover:border-white/40 transition-all hover:transform hover:scale-105 shadow-2xl"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-xl bg-white/20 border border-white/30 flex items-center justify-center text-white">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-white drop-shadow-md">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => {
                  const barIndex = index * category.skills.length + skillIndex;
                  return (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white/90 font-medium">{skill.name}</span>
                        <span className="text-white text-sm font-semibold">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                        <div
                          ref={(el) => (skillBarRefs.current[barIndex] = el)}
                          className="h-full bg-gradient-to-r from-amber-300 to-orange-400 rounded-full shadow-lg"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Additional skills badges */}
        <div className="text-center">
          <h4 className="text-2xl font-semibold text-white mb-6 drop-shadow-md">Also Experienced With</h4>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {['Python', 'Java', 'PHP', 'Vue.js', 'Angular', 'Sass', 'Webpack', 'Redis', 'Nginx', 'Linux', 'Figma', 'Adobe XD'].map((tech, index) => (
              <span
                key={index}
                className="px-5 py-2 bg-white/10 border border-white/30 text-white rounded-full text-sm font-medium hover:bg-white/20 transition-colors backdrop-blur-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
