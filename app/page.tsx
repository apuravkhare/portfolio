'use client';

import { useEffect, useState, useRef } from 'react';
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
  const parallaxRef = useRef<any>(null);
  const [requiresPermissionCheck, setRequiresPermissionCheck] = useState(false);
  const [isPermissionGranted, setIsPermissionGranted] = useState(false);

  const initializeParallaxEngine = () => {
    if (!sceneRef.current) return;

    // Fire up Parallax.js with calibration metrics tuned for device tilting
    parallaxRef.current = new Parallax(sceneRef.current, {
      relativeInput: true,
      hoverOnly: false,
      calibrateX: true,
      calibrateY: true,
    });

    setIsPermissionGranted(true);
  };

  const requestIosSensorsAccess = async () => {
    if (
      window.DeviceOrientationEvent &&
      typeof window.DeviceOrientationEvent.requestPermission === 'function'
    ) {
      try {
        // Trigger Apple's official native iOS popup prompt panel
        const response = await window.DeviceOrientationEvent.requestPermission();

        if (response === 'granted') {
          initializeParallaxEngine();
          setRequiresPermissionCheck(false);
        } else {
          console.warn('Motion permission denied by user.');
        }
      } catch (error) {
        console.error('Error requesting device orientation permission:', error);
      }
    }
  };

  useEffect(() => {
    // 1. Feature detection: check if browser explicitly demands orientation permissions (iOS)
    if (
      typeof window !== 'undefined' &&
      window.DeviceOrientationEvent &&
      typeof window.DeviceOrientationEvent.requestPermission === 'function'
    ) {
      setRequiresPermissionCheck(true);
    } else {
      // Android / Desktop devices don't require permissions; initialize right away!
      initializeParallaxEngine();
    }

    return () => {
      if (parallaxRef.current) parallaxRef.current.destroy();
    };
  }, []);

  return (
    <div ref={sceneRef} className="w-full h-screen bg-black overflow-hidden">
      {requiresPermissionCheck && !isPermissionGranted && (
        <div className="absolute inset-0 bg-neutral-950/90 z-50 flex flex-col items-center justify-center p-6 text-center gap-4 animate-fadeIn">
          <p className="text-neutral-400 text-sm max-w-xs">
            This showcase features a reactive 3D gyroscope experience. Tap below to enable device orientation angles.
          </p>
          <button
            onClick={requestIosSensorsAccess}
            className="px-5 py-2.5 bg-cyan-500 hover:bg-cyan-600 text-black font-bold text-xs uppercase tracking-widest rounded-xl transition-all shadow-lg active:scale-95"
          >
            Enable Tilt View
          </button>
        </div>
      )}

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
