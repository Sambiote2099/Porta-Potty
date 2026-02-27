'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'DwellUP: Online Realtor Application',
    category: 'Full-Stack',
    images: [
      'https://res.cloudinary.com/diasvvkil/image/upload/v1771669446/screenshot-1771669031205_kbccdq.png',
      'https://res.cloudinary.com/diasvvkil/image/upload/v1771669446/screenshot-1771669060312_mnekst.png',
      'https://res.cloudinary.com/diasvvkil/image/upload/v1771669446/screenshot-1771669089996_jmxkpv.png',
      "https://res.cloudinary.com/diasvvkil/image/upload/v1771669458/screenshot-1771669216305_uy1ivo.png",
      "https://res.cloudinary.com/diasvvkil/image/upload/v1771669447/screenshot-1771669111318_slokiz.png",
      "https://res.cloudinary.com/diasvvkil/image/upload/v1771669471/screenshot-1771669272902_dwhr3f.png",
    ],
    description: 'Built a full-stack property listing platform with backend services and MongoDB integration. Implemented authentication, secure routing, and structured scalable frontend using modern web technologies.',
    tech: ['Spring Boot',"React", 'MySQL', 'REST API', 'PostMan', 'PWA', 'CloudFlare'],
    liveLink: '',
    codeLink: 'https://github.com/Sambiote2099/dwellup-backends',
    badge: 'Full-Stack',
  },
  {
    title: 'BreadVerse: Online Bread Shop',
    category: 'Full-Stack',
    images: [
      'https://res.cloudinary.com/diasvvkil/image/upload/v1771670629/screenshot-1771669031206_xrhsnc.png',
      'https://res.cloudinary.com/diasvvkil/image/upload/v1771670628/screenshot-1771670466061_qb19n8.png',
      'https://res.cloudinary.com/diasvvkil/image/upload/v1771670629/screenshot-1771670537431_hj0lbv.png',
      'https://res.cloudinary.com/diasvvkil/image/upload/v1771670630/screenshot-1771670379822_svoxm1.png',
      'https://res.cloudinary.com/diasvvkil/image/upload/v1771670628/screenshot-1771670509874_wxeykj.png',
      'https://res.cloudinary.com/diasvvkil/image/upload/v1771670629/screenshot-1771670494188_edvuih.png',
    ],
    description: 'Developed a dynamic e-commerce platform with integrated frontend and backend APIs. Managed product listings, orders, and authentication. Deployed using Vercel/Netlify.',
    tech: ['Next.js', 'GSAP', 'MongoDB', 'OAuth 2.0', 'Vercel', 'Botpress'],
    liveLink: 'https://bread-verse.vercel.app/',
    codeLink: 'https://github.com/Sambiote2099/BreadVerse',
    badge: 'Full-Stack',
  },
  {
    title: 'Collaborative Project',
    category: 'Full-Stack',
    images: [
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
    ],
    description: 'Working in a team-based development environment contributing to backend logic and AI feature integration. Participating in feature planning and system design discussions.',
    tech: ['Node.JS','React','GSAP', 'Team Collaboration', 'Botpress', 'Vercel'],
    liveLink: '',
    codeLink: '',
    badge: 'Ongoing',
  },
];

const categories = ['All Projects', 'Full-Stack', 'Ongoing'];

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeCategory, setActiveCategory] = useState('All Projects');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: number]: number }>({});

  const filteredProjects = activeCategory === 'All Projects' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  // Handle image rotation on hover
  useGSAP(() => {
    if (hoveredProject !== null) {
      const interval = setInterval(() => {
        setCurrentImageIndex(prev => {
          const currentIndex = prev[hoveredProject] || 0;
          const nextIndex = (currentIndex + 1) % projects[hoveredProject].images.length;
          return { ...prev, [hoveredProject]: nextIndex };
        });
      }, 2000);

      return () => clearInterval(interval);
    }
  }, { dependencies: [hoveredProject] });

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

        tl.from(sectionRef.current, { opacity: 0, x: 1000 })
          .from(headerRef.current, { opacity: 0, x: -50 },  '-=0.2')
          .fromTo(projectRefs.current.filter(Boolean), { opacity: 0, y: 80 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.2 }, '-=0.6');
      }
    }
 }, { dependencies: [sectionRef] });

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
      <div className="projects-blob-1 absolute top-[800px] right-1/4 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl" />
      <div className="projects-blob-2 absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-6">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-white/10 border border-white/30 rounded-full mb-6">
            <span className="text-white text-sm font-medium">My Works</span>
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
              ref={(el) => (projectRefs.current[index] = el)}
              className="hover:mt-2 group bg-white/10 rounded-2xl overflow-hidden border border-white/20 hover:border-white/40 transition-all shadow-2xl"
              onMouseEnter={() => {
                setHoveredProject(index);
                setCurrentImageIndex(prev => ({ ...prev, [index]: 0 }));
              }}
              onMouseLeave={() => {
                setHoveredProject(null);
                setCurrentImageIndex(prev => ({ ...prev, [index]: 0 }));
              }}
            >
              {/* Project Image */}
              <div className="relative h-56 overflow-hidden bg-slate-800">
                {project.images.map((img, imgIndex) => (
                  <img
                    key={imgIndex}
                    src={img}
                    alt={`${project.title} - Image ${imgIndex + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-102 ${
                      (currentImageIndex[index] || 0) === imgIndex
                        ? 'opacity-100 z-10'
                        : 'opacity-0 z-0'
                    }`}
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60 z-20" />
                
                {/* Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm border border-white/30 text-slate-900 text-xs font-semibold rounded-full shadow-lg z-30">
                  {project.badge}
                </div>

                {/* Image indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-30">
                  {project.images.map((_, imgIndex) => (
                    <button
                      key={imgIndex}
                      onClick={(e) => {
                        e.preventDefault();
                        setCurrentImageIndex(prev => ({ ...prev, [index]: imgIndex }));
                      }}
                      className={`transition-all cursor-pointer ${
                        (currentImageIndex[index] || 0) === imgIndex
                          ? 'bg-white w-6 h-2'
                          : 'bg-white/50 w-2 h-2 hover:bg-white/70'
                      } rounded-full`}
                      aria-label={`View image ${imgIndex + 1}`}
                    />
                  ))}
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
                  {project.liveLink ? (
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
                  ) : (
                    <button
                      onClick={(e) => e.preventDefault()}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white/10 border border-white/30 text-white hover:border-white/50 hover:bg-white/20 rounded-lg transition-all text-sm font-medium cursor-pointer"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </button>
                  )}
                  {project.codeLink ? (
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
                  ) : (
                    <button
                      onClick={(e) => e.preventDefault()}
                      className="w-10 h-10 flex items-center justify-center bg-white/10 border border-white/30 text-white hover:border-white/50 hover:bg-white/20 rounded-lg transition-all cursor-pointer"
                      title="View Code"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        {filteredProjects.length > 6 && (
          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-white/10 border border-white/30 text-white hover:border-white/50 hover:bg-white/20 rounded-lg transition-all font-semibold shadow-lg">
              Load More Projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

