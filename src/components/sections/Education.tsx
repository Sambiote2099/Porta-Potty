'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const education = {
  degree: 'Bachelor of Science in Computer Science & Engineering',
  university: 'Bangladesh University of Business and Technology (BUBT)',
  location: 'Dhaka, Bangladesh',
  period: 'Expected Graduation: December 2026',
  gpa: '3.98/4.00',
  description: 'Currently in 4th year(Spring 2026 semester). Relevant study subjects include System Design, Software Development Project, Distributed Database Management Systems, and Automata.',
  currentFocus: [
    'Polishing Next.js development skills',
    'Exploring AI creation and integration',
    'Building collaborative projects with teams',
    'Contributing to real-world applications',
  ],
};

const achievements = [
  {
    title: '2× Dean\'s Award',
    icon: '�',
    description: 'Recognized for outstanding academic performance with Dean\'s Award in multiple semesters',
  },
  {
    title: 'Brainstorming Week Runner Up',
    icon: '🥈',
    description: '1st Runner Up in BUBT Brainstorming Week competition (Fall 2024)',
  },
  {
    title: 'Coding Contest 21st Place',
    icon: '💻',
    description: 'Secured 21st position in BUBT 2024 Intra University Coding Contest',
  },
];

export default function Education() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const educationCardRef = useRef<HTMLDivElement>(null);
  const achievementRefs = useRef<(HTMLDivElement | null)[]>([]);

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
          ease: 'power4.out',
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

        tl.from(sectionRef.current, { opacity: 0, x: -1000 })
          .from(headerRef.current, { opacity: 0, x: 50 }, '-=0.1')
          .from(educationCardRef.current, { opacity: 0, y: 80 },  '-=0.3')
          .fromTo(achievementRefs.current.filter(Boolean), { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.2 }, '-=0.4');
      }
    }
  }, { dependencies: [sectionRef] });

  return (
    <section
      ref={sectionRef}
      id="education"
      className="min-h-screen py-32 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0d1619 0%, #152125 25%, #1f3035 50%, #0f766e 75%, #2dd4bf 100%)',
      }}
    >
      {/* Decorative elements */}
      <div className="education-blob-1 absolute top-26 left-10 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl" />
      <div className="education-blob-2 absolute bottom-0 left-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-white/10 border border-white/30 rounded-full mb-6">
            <span className="text-white text-sm font-medium">Educational Qualifications</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-white/60 to-white/30 mx-auto mb-6"></div>
          <p className="text-xl text-white/90 max-w-3xl mx-auto drop-shadow-md">
            My academic journey and continuous learning path
          </p>
        </div>

        {/* Main Education Card */}
        <div ref={educationCardRef} className="max-w-5xl mx-auto mb-20">
          <div className="bg-white/10 rounded-2xl border border-white/20 hover:border-white/40 transition-all p-8 shadow-2xl">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Left - Icon and Basic Info */}
              <div className="md:col-span-2">
                <div className="flex items-start gap-6">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-white/30 to-white/20 border border-white/30 flex items-center justify-center flex-shrink-0">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                    </svg>
                  </div>

                  {/* Info */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-md">
                      {education.degree}
                    </h3>
                    <p className="text-white font-semibold mb-3">
                      {education.university}
                    </p>
                    
                    <div className="flex flex-wrap gap-4 mb-4 text-sm">
                      <div className="flex items-center gap-2 text-white/80">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {education.location}
                      </div>
                      <div className="flex items-center gap-2 text-white/80">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {education.period}
                      </div>
                    </div>

                  <div className="mb-4">
                    <span className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-cyan-400/20 via-blue-400/20 to-teal-400/20 border border-emerald-400/40 rounded-full shadow-lg">

                      <svg
                        className="w-4 h-4 text-emerald-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                      </svg>

                      <span className="font-semibold bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent">
                        CGPA: {education.gpa}
                      </span>

                    </span>
                  </div>

                    <p className="text-white/80 leading-relaxed">
                      {education.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right - Current Focus */}
              <div className="bg-white/10 rounded-xl p-6 border border-white/20 shadow-lg">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <h4 className="text-lg font-semibold text-white">Current Focus</h4>
                </div>
                <ul className="space-y-3">
                  {education.currentFocus.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-white/80">
                      <svg className="w-5 h-5 text-white flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div>
          <h3 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Achievements
          </h3>

          <div className="achievements-grid grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                ref={(el) => (achievementRefs.current[index] = el)}
                className="bg-white/10 rounded-2xl border border-white/20 hover:border-white/40 transition-all p-8 shadow-2xl"
              >
                {/* Centered Icon */}
                <div className="flex justify-center mb-4">
                  
                </div>

                {/* Centered Content */}
                <div className="text-center">
                  <h4 className="text-xl font-bold text-white mb-3 drop-shadow-md">
                    {achievement.title}
                  </h4>
                  <p className="text-white/80 text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
