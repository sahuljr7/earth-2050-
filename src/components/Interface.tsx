import { Menu } from 'lucide-react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export function Interface() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (titleRef.current && subtitleRef.current) {
      // Create floating animation timeline
      const tl = gsap.timeline({
        repeat: -1,
        yoyo: true,
        defaults: { duration: 2, ease: "power1.inOut" }
      });

      // Animate title
      tl.to(titleRef.current, {
        y: "-20px",
      });

      // Animate subtitle with slight delay
      gsap.to(subtitleRef.current, {
        y: "-15px",
        duration: 2.5,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
        delay: 0.5
      });
    }
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none">
      <nav className="p-6 flex justify-between items-center">
        <div className="text-emerald-400 font-bold text-2xl pointer-events-auto">
          EARTH 2050
        </div>
        <button className="text-emerald-400 p-2 pointer-events-auto hover:bg-emerald-400/10 rounded-full transition-colors">
          <Menu size={24} />
        </button>
      </nav>
      
      <div className="absolute bottom-0 left-0 p-6 max-w-md">
        <h1 
          ref={titleRef}
          className="text-6xl font-extrabold text-white mb-6 tracking-tight"
          style={{ textShadow: '0 4px 8px rgba(0,0,0,0.3)' }}
        >
          Explore Our Future
        </h1>
        <p 
          ref={subtitleRef}
          className="text-xl text-gray-300 font-medium leading-relaxed"
          style={{ textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}
        >
          Discover how our planet might transform by 2050 through an interactive 3D experience.
        </p>
      </div>
    </div>
  );
}