import React, { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width, height;
    let particles = [];
    let animationFrameId;

    // Developer Symbols
    const symbols = ['{ }', '< />', '&&', '||', '=>', ';;', '[]', '$', '!=', '01'];

    // Configuration
    const particleCount = 25; // Balanced density (not too crowded)

    // Colors based on theme
    const getThemeConfig = () => {
      const isDark = document.documentElement.classList.contains('dark');
      if (isDark) {
        return {
          bg: '#020617', // Slate 950
          textColor: '#334155', // Slate 700 (Subtle)
          highlightColor: '#0f172a', // Slate 900
        };
      } else {
        return {
          bg: '#f8fafc', // Slate 50
          textColor: '#e2e8f0', // Slate 200 (Very Subtle)
          highlightColor: '#f1f5f9', // Slate 100
        };
      }
    };

    let themeConfig = getThemeConfig();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      initParticles();
    };

    class CodeSymbol {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.text = symbols[Math.floor(Math.random() * symbols.length)];
        this.size = Math.random() * 20 + 14; // Font size 14px - 34px
        this.velocity = Math.random() * 0.5 + 0.1; // Slow vertical drift
        this.opacity = Math.random() * 0.5 + 0.1;
      }

      update() {
        this.y -= this.velocity; // Move Upwards

        // Reset if off screen top
        if (this.y < -50) {
          this.y = height + 50;
          this.x = Math.random() * width;
          this.text = symbols[Math.floor(Math.random() * symbols.length)];
        }
      }

      draw() {
        ctx.font = `${this.size}px "JetBrains Mono", monospace`; // Monospace is key for dev look
        ctx.fillStyle = themeConfig.textColor; // Use plain color, handle opacity via globalAlpha if needed
        ctx.globalAlpha = this.opacity;
        ctx.fillText(this.text, this.x, this.y);
        ctx.globalAlpha = 1.0;
      }
    }

    const initParticles = () => {
      particles = [];
      themeConfig = getThemeConfig();
      for (let i = 0; i < particleCount; i++) {
        particles.push(new CodeSymbol());
      }
    };

    const animate = () => {
      const isDark = document.documentElement.classList.contains('dark');
      themeConfig = getThemeConfig(); // Re-check theme (simplified)

      // Solid background clearing
      ctx.fillStyle = themeConfig.bg;
      ctx.fillRect(0, 0, width, height);

      particles.forEach(p => {
        p.update();
        p.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          themeConfig = getThemeConfig();
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });

    window.addEventListener('resize', handleResize);

    handleResize();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="block pointer-events-none w-full h-full"
      />
    </div>
  );
};

export default AnimatedBackground;