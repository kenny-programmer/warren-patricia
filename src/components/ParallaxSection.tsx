import { useEffect, useRef } from 'react';

interface ParallaxSectionProps {
  children: React.ReactNode;
  backgroundImage?: string;
  speed?: number;
  className?: string;
  id?: string;
}

const ParallaxSection = ({ 
  children, 
  backgroundImage, 
  speed = 0.5, 
  className = "",
  id
}: ParallaxSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const scrolled = window.pageYOffset;
      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top + scrolled;
      const sectionHeight = rect.height;
      
      // Only apply parallax when section is in viewport
      if (scrolled + window.innerHeight > sectionTop && scrolled < sectionTop + sectionHeight) {
        const yPos = -(scrolled - sectionTop) * speed;
        
        if (backgroundImage) {
          section.style.backgroundPosition = `center ${yPos}px`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed, backgroundImage]);

  return (
    <div
      ref={sectionRef}
      id={id}
      className={`relative ${className}`}
      style={backgroundImage ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      } : {}}
    >
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default ParallaxSection;