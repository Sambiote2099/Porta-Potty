// components/ParallaxSection.tsx
'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface ParallaxSectionProps {
  imageSrc: string;
  title: string;
  index: number;
  movementFactor?: number;
}

export default function ParallaxSection({ 
  imageSrc, 
  title, 
  index, 
  movementFactor = 0.8 
}: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const img = imageRef.current;
    const section = sectionRef.current;

    if (!img || !section) return;

    const fitImage = () => {
      const parentWidth = section.offsetWidth;
      const parentHeight = section.offsetHeight;
      
      // Wait for natural dimensions
      if (!img.naturalWidth) return;

      const sx = parentWidth / img.naturalWidth;
      const sy = (parentHeight * (1 + Math.abs(movementFactor))) / img.naturalHeight;
      const scale = Math.max(sx, sy);
      
      const width = Math.ceil(img.naturalWidth * scale);
      const height = Math.ceil(img.naturalHeight * scale);
      
      gsap.set(img, {
        width,
        height,
        top: Math.ceil((parentHeight - height) / 2),
        left: Math.ceil((parentWidth - width) / 2),
        position: 'absolute'
      });
    };

    const handleImageLoad = () => {
      fitImage();

      // Create GSAP animation
      gsap.fromTo(img,
        {
          y: index === 0 ? 0 : -movementFactor * 0.5 * section.offsetHeight
        },
        {
          y: movementFactor * 0.5 * section.offsetHeight,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: index === 0 ? '-1px top' : 'top bottom',
            end: 'bottom top',
            scrub: true,
            invalidateOnRefresh: true
          }
        }
      );
    };

    if (img.complete) {
      handleImageLoad();
    } else {
      img.addEventListener('load', handleImageLoad);
    }

    const handleResize = () => {
      fitImage();
      ScrollTrigger.refresh();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      img.removeEventListener('load', handleImageLoad);
      window.removeEventListener('resize', handleResize);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [index, movementFactor]);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <img
        ref={imageRef}
        src={imageSrc}
        alt={`Background ${index + 1}`}
        className="absolute top-0 left-0 z-[-1]"
      />
      <h1 className="text-white z-10 text-5xl md:text-6xl font-bold text-center px-4">
        {title}
      </h1>
    </section>
  );
}