import  { useEffect, useRef } from 'react';
import gsap from 'gsap';

function ScreenShort() {
  const containerRef = useRef<HTMLDivElement>(null); // Explicitly typing containerRef

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const images = container.querySelectorAll('img');
      const totalWidth = images.length * images[0].offsetWidth;

      // Duplicate the images to create an infinite scroll effect
      const duplicatedImages = Array.from(images).map(img => img.cloneNode(true) as HTMLImageElement);
      duplicatedImages.forEach(img => container.appendChild(img));

      gsap.to(container, {
        x: -totalWidth,
        duration: 80,
        ease: "linear",
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize(x => parseFloat(x) % totalWidth) // Ensures the infinite loop
        }
      });
    }
  }, []);

  return (
    <div className="overflow-hidden">
      <div ref={containerRef} className="flex whitespace-nowrap gap-10">
        <img src="/src/assets/psd.jpg" alt="photo" className="w-72 h-auto rounded-xl border border-gray-300" />
        <img src="/src/assets/psd3.jpg" alt="photo" className="w-72 h-auto rounded-xl border border-gray-300" />
        <img src="/src/assets/psd4.jpg" alt="photo" className="w-72 h-auto rounded-xl border border-gray-300" />
        <img src="/src/assets/psd5.jpg" alt="photo" className="w-72 h-auto rounded-xl border border-gray-300" />
        <img src="/src/assets/psd6.jpg" alt="photo" className="w-72 h-auto rounded-xl border border-gray-300" />
      </div>
    </div>
  );
}

export default ScreenShort;
