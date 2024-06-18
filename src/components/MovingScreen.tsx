import  { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

function MovingScreen() {
  const containerRef = useRef<HTMLDivElement>(null); // Explicitly typing containerRef

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const images = Array.from(container.querySelectorAll('img')); // Use Array.from() to correctly infer types
      const totalWidth = images.length * images[0].offsetWidth;

      // Duplicate the images to create an infinite scroll effect
      const duplicatedImages = images.map(img => img.cloneNode(true) as HTMLImageElement);
      duplicatedImages.forEach(img => container.appendChild(img));

      gsap.to(container, {
        x: -totalWidth,
        duration: 40,
        ease: 'linear',
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth), // Ensures the infinite loop
        },
      });
    }
  }, []);

  return (
    <div className="overflow-hidden">
      <h1 className="flex items-center justify-center mb-5 text-2xl lg:text-4xl font-bold font-mono">
        Real-world Design Inspiration.
      </h1>
      <div ref={containerRef} className="flex items-center gap-10">
        <img src="/src/assets/slide1.webp" alt="slide" className="w-60 lg:w-72 h-auto rounded-2xl border border-b-2" />
        <img src="/src/assets/slide2.webp" alt="slide" className="w-60 lg:w-72 h-auto rounded-2xl border border-b-2" />
        <img src="/src/assets/slide3.webp" alt="slide" className="w-60 lg:w-72 h-auto rounded-2xl border border-b-2" />
        <img src="/src/assets/slide4.webp" alt="slide" className="w-60 lg:w-72 h-auto rounded-2xl border border-b-2" />
        <img src="/src/assets/slide5.webp" alt="slide" className="w-60 lg:w-72 h-auto rounded-2xl border border-b-2" />
        <img src="/src/assets/slide6.webp" alt="slide" className="w-60 lg:w-72 h-auto rounded-2xl border border-b-2" />
      </div>
    </div>
  );
}

export default MovingScreen;
