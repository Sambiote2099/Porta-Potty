'use client';

import { useEffect } from 'react';

export default function DynamicScrollbar() {
  useEffect(() => {
    // Disable on mobile for performance
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) return;
    
    const updateScrollbarColor = () => {
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      
      // Define color stops for different sections
      const colorStops = [
        { percent: 0, start: '#2dd4bf', end: '#14b8a6' },      // Hero - Teal
        { percent: 16, start: '#06d2d9', end: '#26dca5ff' },     // About - Cyan to Red
        { percent: 33, start: '#12be8aff', end: '#71fb9fff' },     // Education - Pink/Rose
        { percent: 50, start: '#059669', end: '#34d3a3ff' },     // Projects - Green/Emerald
        { percent: 60, start: '#411777ff', end: '#8824fbff' },     // Skills - Brown/Amber
        { percent: 83, start: '#6d14b6ff', end: '#7a7d81ff' },     // Contact - Dark Brown/Red
      ];
      
      // Find the current color range
      let currentColors = colorStops[0];
      for (let i = 0; i < colorStops.length - 1; i++) {
        if (scrollPercentage >= colorStops[i].percent && scrollPercentage < colorStops[i + 1].percent) {
          const range = colorStops[i + 1].percent - colorStops[i].percent;
          const progress = (scrollPercentage - colorStops[i].percent) / range;
          
          // Interpolate between current and next color
          currentColors = {
            percent: scrollPercentage,
            start: interpolateColor(colorStops[i].start, colorStops[i + 1].start, progress),
            end: interpolateColor(colorStops[i].end, colorStops[i + 1].end, progress),
          };
          break;
        }
      }
      
      // If at the end, use the last color
      if (scrollPercentage >= colorStops[colorStops.length - 1].percent) {
        currentColors = colorStops[colorStops.length - 1];
      }
      
      // Update CSS variables on root element
      const root = document.documentElement;
      root.style.setProperty('--scrollbar-color-start', currentColors.start);
      root.style.setProperty('--scrollbar-color-end', currentColors.end);
      
      // Force repaint by toggling a class
      root.classList.add('scrollbar-updating');
      requestAnimationFrame(() => {
        root.classList.remove('scrollbar-updating');
      });
    };
    
    // Helper function to interpolate between two hex colors
    const interpolateColor = (color1: string, color2: string, factor: number): string => {
      const c1 = hexToRgb(color1);
      const c2 = hexToRgb(color2);
      
      if (!c1 || !c2) return color1;
      
      const r = Math.round(c1.r + (c2.r - c1.r) * factor);
      const g = Math.round(c1.g + (c2.g - c1.g) * factor);
      const b = Math.round(c1.b + (c2.b - c1.b) * factor);
      
      return rgbToHex(r, g, b);
    };
    
    const hexToRgb = (hex: string): { r: number; g: number; b: number } | null => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      } : null;
    };
    
    const rgbToHex = (r: number, g: number, b: number): string => {
      return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    };
    
    // Set initial color immediately
    updateScrollbarColor();
    
    // Add scroll listener with throttling for better performance
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateScrollbarColor();
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Also update on resize
    window.addEventListener('resize', updateScrollbarColor);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateScrollbarColor);
    };
  }, []);
  
  return null;
}
