'use client';

import { useEffect, useRef } from 'react';
import Parallax from 'parallax-js';
import backgroundImage from '../public/parallax_bg.png';

declare global {
  interface Window {
    DeviceOrientationEvent?: {
      requestPermission?: () => Promise<'granted' | 'denied'>;
    };
  }
}

export default function Home() {
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sceneRef.current) return;

    const parallaxInstance = new Parallax(sceneRef.current, {
      relativeInput: true,
      hoverOnly: false,
      calibrateX: true,
      calibrateY: true,
    });

    return () => {
      parallaxInstance.destroy();
    };
  }, []);


  return (
    <div ref={sceneRef} className="w-full h-screen bg-black overflow-hidden">
      <div data-depth="0.2" className="w-full h-screen">
        <div style={{ backgroundImage: `url(${backgroundImage.src})` }} className="w-full h-screen bg-cover bg-center">
        </div>
      </div>
      <div data-depth="0.6" className="w-full h-screen">
        <div className="w-full h-screen flex flex-col items-center justify-center gap-4">
          <span className="font-cursive text-8xl mix-blend-difference text-white">Apurav</span>
          <span className="font-mono text-6xl mix-blend-difference text-white">Khare</span>
        </div>
      </div>
    </div>
  );
}
