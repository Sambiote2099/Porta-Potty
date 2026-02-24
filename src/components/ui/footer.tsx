"use client";
import React from 'react';

const Footer: React.FC = () => {
    return (
    <footer className="bg-slate-950 border-t border-cyan-500/20 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Left - About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg overflow-hidden">
  <img
    src="https://res.cloudinary.com/diasvvkil/image/upload/v1771603668/logo-icon-light-transparent_hvakv2.png"  // change to your image path
    alt="Arif bai"
    className="w-full h-full object-cover"
  />
</div>
              <span className="text-white font-bold text-xl">Arif Hasan Sameer</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Software Developer and CSE student passionate about building scalable web applications with modern frameworks and AI integration. Let's create something amazing together.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/Sambiote2099"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-slate-900 border border-teal-500/20 hover:border-teal-500/50 hover:bg-teal-500/10 flex items-center justify-center text-gray-400 hover:text-teal-400 transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/arif-hasan-sameer-632592316/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-slate-900 border border-teal-500/20 hover:border-teal-500/50 hover:bg-teal-500/10 flex items-center justify-center text-gray-400 hover:text-teal-400 transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://x.com/FlynnBiote_"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-slate-900 border border-teal-500/20 hover:border-teal-500/50 hover:bg-teal-500/10 flex items-center justify-center text-gray-400 hover:text-teal-400 transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/arif.hasan.sameer.2025"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-slate-900 border border-teal-500/20 hover:border-teal-500/50 hover:bg-teal-500/10 flex items-center justify-center text-gray-400 hover:text-teal-400 transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=arifhasansameer@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-slate-900 border border-teal-500/20 hover:border-teal-500/50 hover:bg-teal-500/10 flex items-center justify-center text-gray-400 hover:text-teal-400 transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Middle - Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('about');
                    if (element) {
                      const navbarHeight = 80;
                      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                      const offsetPosition = elementPosition - navbarHeight;
                      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                    }
                  }}
                  className="text-gray-400 hover:text-teal-400 transition-colors cursor-pointer text-left"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('education');
                    if (element) {
                      const navbarHeight = 80;
                      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                      const offsetPosition = elementPosition - navbarHeight;
                      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                    }
                  }}
                  className="text-gray-400 hover:text-teal-400 transition-colors cursor-pointer text-left"
                >
                  Education
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('projects');
                    if (element) {
                      const navbarHeight = 80;
                      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                      const offsetPosition = elementPosition - navbarHeight;
                      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                    }
                  }}
                  className="text-gray-400 hover:text-teal-400 transition-colors cursor-pointer text-left"
                >
                  Projects
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('skills');
                    if (element) {
                      const navbarHeight = 80;
                      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                      const offsetPosition = elementPosition - navbarHeight;
                      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                    }
                  }}
                  className="text-gray-400 hover:text-teal-400 transition-colors cursor-pointer text-left"
                >
                  Skills
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) {
                      const navbarHeight = 80;
                      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                      const offsetPosition = elementPosition - navbarHeight;
                      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                    }
                  }}
                  className="text-gray-400 hover:text-teal-400 transition-colors cursor-pointer text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Right - Get In Touch */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Get In Touch</h3>
            <p className="text-gray-400 mb-4">Ready to start a project?</p>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=arifhasansameer@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 border border-teal-500/20 hover:border-teal-500/50 hover:bg-teal-500/10 text-teal-400 rounded-lg transition-all font-medium mb-4"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Send Email
            </a>
            <p className="text-sm text-gray-500">Response within 24 hours</p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-teal-500/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Arif Hasan Sameer. Made with Ease ✨ and lots of Coffee ☕
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>Built with React & Next.js</span>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-10 h-10 rounded-lg bg-slate-900 border border-teal-500/20 hover:border-teal-500/50 hover:bg-teal-500/10 flex items-center justify-center text-teal-400 transition-all"
              aria-label="Scroll to top"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

