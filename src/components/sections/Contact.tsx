'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const contactInfoRefs = useRef<(HTMLDivElement | null)[]>([]);
  const socialLinkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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

        tl.from(sectionRef.current, { opacity: 0, y: 100 })
          .from(headerRef.current, { opacity: 0, y: -50 }, '-=0.1')
          .fromTo(contactInfoRefs.current.filter(Boolean), { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.15 }, '-=0.3')
          .fromTo(socialLinkRefs.current.filter(Boolean), { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.5, stagger: 0.1 }, '-=1');
      }
    }
  }, { dependencies: [sectionRef] });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log('Form submitted:', formData);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', phone: '', email: '', message: '' });
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="min-h-screen py-32 relative overflow-hidden"
      style={{
  background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #334155 50%, #6366f1 75%, #a855f7 100%)',
}}
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      
      {/* Decorative elements */}
      <div className="contact-blob-1 absolute top-20 left-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl" />
      <div className="contact-blob-2 absolute bottom-1/4 -right-8 w-96 h-96 bg-orange-700/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-white/10 border border-white/30 rounded-full mb-6">
            <span className="text-white text-sm font-medium">Get In Touch</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Let's Work Together
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto drop-shadow-md">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you
          </p>
        </div>

        {/* Contact Info & Social Links */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12 max-w-5xl mx-auto">
          {/* Contact Information */}
          <div className="contact-info-grid space-y-4">
            <h3 className="text-xl font-bold text-white mb-6 drop-shadow-md">Contact Information</h3>
            
            <div ref={(el) => (contactInfoRefs.current[0] = el)} className="flex items-center justify-between p-4 bg-white/10 rounded-xl border border-white/20 hover:border-white/40 transition-all group shadow-lg">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-white/20 border border-white/30 flex items-center justify-center text-white">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white/70 text-sm">Email</p>
                  <p className="text-white font-medium">arifhasansameer@gmail.com</p>
                </div>
              </div>
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=arifhasansameer@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </a>
            </div>

            <div ref={(el) => (contactInfoRefs.current[1] = el)} className="flex items-center justify-between p-4 bg-white/10 rounded-xl border border-white/20 hover:border-white/40 transition-all group shadow-lg">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-white/20 border border-white/30 flex items-center justify-center text-white">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white/70 text-sm">Mobile</p>
                  <p className="text-white font-medium">+880 1831527786</p>
                </div>
              </div>
              <a 
                href="tel:+8801831527786"
                className="w-10 h-10 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>
            </div>

            <div ref={(el) => (contactInfoRefs.current[2] = el)} className="flex items-center justify-between p-4 bg-white/10 rounded-xl border border-white/20 hover:border-white/40 transition-all group shadow-lg">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-white/20 border border-white/30 flex items-center justify-center text-white">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white/70 text-sm">Location</p>
                  <p className="text-white font-medium">60 Feet, Mirpur-02, Dhaka, Bangladesh</p>
                </div>
              </div>
              <a 
                href="https://www.google.com/maps/search/?api=1&query=60+Feet+Mirpur-02+Dhaka+Bangladesh"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </a>
            </div>

            <div ref={(el) => (contactInfoRefs.current[3] = el)} className="flex items-center justify-between p-4 bg-white/10 rounded-xl border border-white/20 hover:border-white/40 transition-all group shadow-lg">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-white/20 border border-white/30 flex items-center justify-center text-white">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white/70 text-sm">Response Time</p>
                  <p className="text-white font-medium">Within 24 hours</p>
                </div>
              </div>
              
            </div>
          </div>

          {/* Connect With Me */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Connect With Me</h3>
            <div className="social-links-grid grid grid-cols-2 gap-4 mb-8">
              <a
                href="https://github.com/Sambiote2099"
                target="_blank"
                rel="noopener noreferrer"
                ref={(el) => (socialLinkRefs.current[0] = el)}
                className="flex items-center gap-3 p-4 bg-white/10 rounded-xl border border-white/20 hover:border-white/40 hover:bg-white/20 transition-all shadow-lg"
              >
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                <span className="text-white font-medium">GitHub</span>
              </a>

              <a
                href="https://linkedin.com/in/arif-hasan-sameer-632592316"
                target="_blank"
                rel="noopener noreferrer"
                ref={(el) => (socialLinkRefs.current[1] = el)}
                className="flex items-center gap-3 p-4 bg-white/10 rounded-xl border border-white/20 hover:border-white/40 hover:bg-white/20 transition-all shadow-lg"
              >
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span className="text-white font-medium">LinkedIn</span>
              </a>

              <a
                href="https://x.com/FlynnBiote_"
                target="_blank"
                rel="noopener noreferrer"
                ref={(el) => (socialLinkRefs.current[2] = el)}
                className="flex items-center gap-3 p-4 bg-white/10 rounded-xl border border-white/20 hover:border-white/40 hover:bg-white/20 transition-all shadow-lg"
              >
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                <span className="text-white font-medium">X/twitter</span>
              </a>

              <a
                href="https://www.facebook.com/arif.hasan.sameer.2025"
                target="_blank"
                rel="noopener noreferrer"
                ref={(el) => (socialLinkRefs.current[3] = el)}
                className="flex items-center gap-3 p-4 bg-white/10 rounded-xl border border-white/20 hover:border-white/40 hover:bg-white/20 transition-all shadow-lg"
              >
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span className="text-white font-medium">Facebook</span>
              </a>
            </div>

            {/* Quick Response Card */}
            <div className="bg-white/10 rounded-2xl p-6 text-center shadow-2xl border border-white/20">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-600 via-teal-500 to-emerald-600 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-white mb-2 drop-shadow-md">Quick Response</h4>
              <p className="text-white/80 text-sm leading-relaxed">
                I typically respond to all inquiries within 24 hours. For urgent matters, feel free to reach out via email directly.
              </p>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
}

