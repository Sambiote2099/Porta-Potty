'use client';

import { useEffect, useRef } from 'react';

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    // Detect mobile device
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    // Reduce particle count and disable interactions on mobile
    const particleCount = isMobile ? 70 : 100;
    const enableMouseInteraction = !isMobile;
    const drawConnections = !isMobile;

    // Mouse position
    const mouse = {
      x: 0,
      y: 0,
      radius: 150,
    };

    // Track mouse movement only on desktop
    const handleMouseMove = (e: MouseEvent) => {
      if (!enableMouseInteraction) return;
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    
    if (enableMouseInteraction) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Particle class
    class Particle {
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      density: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.baseX = this.x;
        this.baseY = this.y;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.opacity = Math.random() * 0.5 + 0.2;
        this.density = Math.random() * 30 + 1;
      }

      update() {
        if (enableMouseInteraction) {
          // Calculate distance from mouse
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          const maxDistance = mouse.radius;
          const force = (maxDistance - distance) / maxDistance;
          const directionX = forceDirectionX * force * this.density;
          const directionY = forceDirectionY * force * this.density;

          // Apply mouse repulsion
          if (distance < mouse.radius) {
            this.x -= directionX;
            this.y -= directionY;
          } else {
            // Return to base position
            if (this.x !== this.baseX) {
              const dx = this.x - this.baseX;
              this.x -= dx / 10;
            }
            if (this.y !== this.baseY) {
              const dy = this.y - this.baseY;
              this.y -= dy / 10;
            }
          }
        }

        // Normal movement
        this.baseX += this.speedX;
        this.baseY += this.speedY;

        // Wrap around screen
        if (this.baseX > canvas.width) this.baseX = 0;
        if (this.baseX < 0) this.baseX = canvas.width;
        if (this.baseY > canvas.height) this.baseY = 0;
        if (this.baseY < 0) this.baseY = canvas.height;
        
        // Update position for non-interactive mode
        if (!enableMouseInteraction) {
          this.x = this.baseX;
          this.y = this.baseY;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = `rgba(45, 212, 191, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Create particles
    const particles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Animation loop with throttling for mobile
    let lastTime = 0;
    const targetFPS = isMobile ? 30 : 60;
    const frameInterval = 1000 / targetFPS;

    const animate = (currentTime: number) => {
      const deltaTime = currentTime - lastTime;
      
      if (deltaTime >= frameInterval) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Update and draw particles
        particles.forEach((particle) => {
          particle.update();
          particle.draw();
        });

        // Draw connections only on desktop
        if (drawConnections) {
          particles.forEach((particleA, indexA) => {
            particles.slice(indexA + 1).forEach((particleB) => {
              const dx = particleA.x - particleB.x;
              const dy = particleA.y - particleB.y;
              const distance = Math.sqrt(dx * dx + dy * dy);

              if (distance < 120) {
                ctx.strokeStyle = `rgba(45, 212, 191, ${0.15 * (1 - distance / 120)})`;
                ctx.lineWidth = 0.5;
                ctx.beginPath();
                ctx.moveTo(particleA.x, particleA.y);
                ctx.lineTo(particleB.x, particleB.y);
                ctx.stroke();
              }
            });
          });
        }
        
        lastTime = currentTime;
      }

      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      if (enableMouseInteraction) {
        window.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ opacity: 0.6 }}
    />
  );
}
