'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'YouTube Clone',
    category: 'Full-Stack',
    image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&q=80',
    description: 'A feature-rich YouTube clone application with video streaming capabilities, search functionality, and responsive design. Demonstrates advanced React concepts and API integration.',
    tech: ['React.js', 'MongoDB', 'Tailwind', 'Responsive'],
    liveLink: '#',
    codeLink: '#',
    badge: 'Full-Stack',
  },
  {
    title: 'CO-CEO Dashboard',
    category: 'Full-Stack',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    description: 'A modern web application showcasing clean design and intuitive features. Built with cutting-edge technologies for optimal performance and user experience.',
    tech: ['React.js', 'Node.js', 'MongoDB', 'Chart.js'],
    liveLink: '#',
    codeLink: '#',
    badge: 'Full-Stack',
  },
  {
    title: 'Sweat Factory',
    category: 'UI/UX',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80',
    description: 'A modern gym + e-commerce website for Sweat Factory, where users can buy memberships and shop supplements like protein bars with a focus on performance and clean UI.',
    tech: ['Ux', 'JS', 'Jquery', 'MUI', 'Vanguard UI'],
    liveLink: '#',
    codeLink: '#',
    badge: 'UI/UX',
  },
  {
    title: 'Income Expense Tracker',
    category: 'Frontend Apps',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80',
    description: 'A comprehensive finance management application that helps users track their income and expenses with intuitive charts and analytics. Features real-time data visualization and budget management.',
    tech: ['React.js', 'Chart.js', 'Local Storage', 'CSS3'],
    liveLink: '#',
    codeLink: '#',
    badge: 'Frontend Apps',
  },
  {
    title: 'Weatherly',
    category: 'Frontend Apps',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80',
    description: 'A fully responsive web app that provides real-time weather updates for any city or country using the OpenWeather API. Users can enter a location to instantly view temperature, humidity, and current conditions.',
    tech: ['HTML', 'CSS3', 'JavaScript'],
    liveLink: '#',
    codeLink: '#',
    badge: 'Frontend Apps',
  },
  {
    title: 'Student Teacher Connect',
    category: 'Full-Stack',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80',
    description: 'A fully responsive web app built with React and Node.js that enables teachers to post assignments and students to view them seamlessly. Secured with JWT authentication for safe and efficient access management.',
    tech: ['React.js', 'Node.js', 'Express.js', 'JWT'],
    liveLink: '#',
    codeLink: '#',
    badge: 'Full-Stack',
  },
];

const categories = ['All Projects', 'Full-Stack', 'UI/UX', 'Frontend Apps', 'Backend'];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeCategory, setActiveCategory] = useState('All Projects');

  const filteredProjects = activeCategory === 'All Projects' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  useEffect(() => {
    if (sectionRef.current) {
      // Section transition
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

      gsap.from('.projects-header', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
        opacity: 0,
        y: 50,
        duration: 1,
      });

      gsap.from('.project-card', {
        scrollTrigger: {
          trigger: '.projects-grid',
          start: 'top 70%',
        },
        opacity: 0,
        y: 80,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
      });
    }
  }, [activeCategory]);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="min-h-screen py-32 relative overflow-hidden"
      style={{
  background: 'linear-gradient(135deg, #0b1410 0%, #122018 25%, #1a2e23 50%, #059669 75%, #34d399 100%)',
}}

    >
      {/* Decorative elements */}
      <div className="projects-blob-1 absolute top-0 left-1/4 w-96 h-96 bg-red-400/10 rounded-full blur-3xl" />
      <div className="projects-blob-2 absolute bottom-0 right-1/4 w-96 h-96 bg-rose-400/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="projects-header text-center mb-12">
          <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md border border-white/30 rounded-full mb-6">
            <span className="text-white text-sm font-medium">Projects</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Featured Projects
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-10 drop-shadow-md">
            A showcase of my recent work and technical expertise
          </p>

          {/* Filter Tabs */}
         
        </div>
        
        {/* Projects Grid */}
        <div className="projects-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="project-card group bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20 hover:border-white/40 transition-all shadow-2xl"
            >
              {/* Project Image */}
              <div className="relative h-56 overflow-hidden bg-slate-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60" />
                
                {/* Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm border border-white/30 text-slate-900 text-xs font-semibold rounded-full shadow-lg">
                  {project.badge}
                </div>
              </div>
              
              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-white/90 transition-colors drop-shadow-md">
                  {project.title}
                </h3>
                
                <p className="text-white/80 mb-5 leading-relaxed text-sm line-clamp-3">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-white/10 border border-white/30 text-white text-xs rounded-lg font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white/10 border border-white/30 text-white hover:border-white/50 hover:bg-white/20 rounded-lg transition-all text-sm font-medium"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </a>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center bg-white/10 border border-white/30 text-white hover:border-white/50 hover:bg-white/20 rounded-lg transition-all"
                    title="View Code"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        {filteredProjects.length > 6 && (
          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-white/10 backdrop-blur-md border border-white/30 text-white hover:border-white/50 hover:bg-white/20 rounded-lg transition-all font-semibold shadow-lg">
              Load More Projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

