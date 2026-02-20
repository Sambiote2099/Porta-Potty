'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    title: 'Languages',
    icon: '🔤',
    color: 'yellow',
    skills: ['C', 'Java', 'JavaScript', 'TypeScript', 'Python', 'C++'],
  },
  {
    title: 'Database & Storage',
    icon: '💾',
    color: 'purple',
    skills: ['MongoDB', 'SQL', 'MySQL', 'SQLite', 'PostgreSQL', 'Database Design', 'Data Modeling'],
  },
  {
    title: 'Frontend Development',
    icon: '💻',
    color: 'blue',
    skills: ['HTML5', 'CSS3', 'React', 'Next.js', 'Angular', 'jQuery', 'Sass', 'Tailwind CSS', 'Bootstrap', 'Chakra UI', 'MUI', 'Redux.js', 'Three.js', 'Electron', 'Redux', 'Responsive Design'],
  },
  {
    title: 'Backend Development',
    icon: '⚙️',
    color: 'green',
    skills: ['Node.js', 'Express.js', 'RESTful APIs', 'FastAPI', 'Authentication & Authorization', 'Server-side Logic', 'Django', 'Flask', 'PHP', 'Socket.io', 'GraphQL'],
  },
  {
    title: 'Tools & Technologies',
    icon: '🔧',
    color: 'cyan',
    skills: ['Git & GitHub', 'VS Code', 'Sublime', 'Cursor', 'Framer', 'Figma', 'Wordpress', 'Adobe Photoshop', 'Adobe Illustrator', 'Blender', 'Canva', 'MS Office', 'Word', 'Excel', 'Powerpoint', 'Linux', 'Firebase', 'Postman', 'Docker', 'npm/yarn', 'Webpack'],
  },
  {
    title: 'Deployment',
    icon: '🚀',
    color: 'red',
    skills: ['Vercel', 'Netlify', 'AWS', 'Heroku', 'GitHub Pages', 'Docker'],
  },
];

const proficiencyLevels = [
  { name: 'JavaScript', level: 90 },
  { name: 'React.js', level: 85 },
  { name: 'Node.js', level: 80 },
  { name: 'MongoDB', level: 75 },
  { name: 'CSS/Tailwind', level: 85 },
  { name: 'Express.js', level: 80 },
];

const features = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Web Development',
    description: 'Full-stack web applications with modern frameworks',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Responsive Design',
    description: 'Mobile-first approach for all devices',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: 'Version Control',
    description: 'Git workflow and collaborative development',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Performance',
    description: 'Optimized applications for speed and efficiency',
  },
];

export default function TechnicalProficiency() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
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

      gsap.from('.tech-header', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
        opacity: 0,
        y: 50,
        duration: 1,
      });

      gsap.from('.skill-category', {
        scrollTrigger: {
          trigger: '.skills-grid',
          start: 'top 70%',
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.15,
      });

      gsap.from('.proficiency-bar', {
        scrollTrigger: {
          trigger: '.proficiency-section',
          start: 'top 70%',
        },
        opacity: 0,
        x: 50,
        duration: 0.8,
        stagger: 0.1,
      });

      gsap.from('.feature-item', {
        scrollTrigger: {
          trigger: '.features-section',
          start: 'top 80%',
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
      });
    }
  }, []);

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
                        className="h-full bg-gradient-to-r from-amber-300 to-yellow-400 rounded-full transition-all duration-1000 shadow-lg"
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
                  <span className="text-gray-700 text-sm">Lines of Code</span>
                  <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">50K+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 text-sm">Built</span>
                  <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">15+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 text-sm">Consumed</span>
                  <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">∞</span>
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

