"use client";
import createGlobe from "cobe";
import { useEffect, useRef } from "react";

export function CanvasGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;
    let width = 0;
    const onResize = () => canvasRef.current && (width = canvasRef.current.offsetWidth);
    window.addEventListener('resize', onResize);
    onResize();

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.3,
      dark: 0, // 0 for light, 1 for dark
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [1, 1, 1],
      markerColor: [0.15, 0.6, 1], // blue markers
      glowColor: [1, 1, 1],
      markers: [
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [51.5072, -0.1276], size: 0.05 },
        { location: [28.6139, 77.2090], size: 0.07 },
      ],
      // @ts-expect-error onRender is not defined in COBEOptions type but works at runtime
      onRender: (state) => {
        state.phi = phi;
        phi += 0.005;
        state.width = width * 2;
        state.height = width * 2;
      }
    });

    return () => {
      globe.destroy();
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <div style={{ width: '100%', maxWidth: 400, aspectRatio: 1 }} className="flex items-center justify-center relative m-auto">
      <canvas
        ref={canvasRef}
        style={{ width: '100%', height: '100%', contain: 'layout paint size', opacity: 0.9 }}
      />
    </div>
  );
}
