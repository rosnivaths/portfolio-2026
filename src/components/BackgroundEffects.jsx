import React, { useEffect, useState } from 'react';

const BackgroundEffects = () => {
  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      // Use requestAnimationFrame for smoother performance
      requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#0f172a]">
      {/* Static ambient blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-brand-accent/20 blur-[120px] animate-blob"></div>
      <div className="absolute top-[20%] right-[-10%] w-[45%] h-[45%] rounded-full bg-indigo-500/10 blur-[150px] animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[50%] rounded-full bg-purple-500/10 blur-[150px] animate-blob animation-delay-4000"></div>
      
      {/* Interactive water-like ripple / spotlight following cursor */}
      <div 
        className="absolute w-[600px] h-[600px] rounded-full bg-brand-accent/10 blur-[100px] ease-out will-change-transform"
        style={{
          transform: `translate(${mousePosition.x - 300}px, ${mousePosition.y - 300}px)`,
          transition: 'transform 0.8s cubic-bezier(0.1, 0.8, 0.2, 1)'
        }}
      ></div>
      <div 
        className="absolute w-[250px] h-[250px] rounded-full bg-indigo-400/20 blur-[80px] ease-out will-change-transform mix-blend-screen"
        style={{
          transform: `translate(${mousePosition.x - 125}px, ${mousePosition.y - 125}px)`,
          transition: 'transform 0.2s cubic-bezier(0.1, 0.8, 0.2, 1)'
        }}
      ></div>
    </div>
  );
};

export default BackgroundEffects;
