import { useEffect, useRef, useState, useCallback } from "react";
import "./SplineBackground.css";

interface SplineBackgroundProps {
  className?: string;
  src?: string;
}

const SplineBackground = ({ 
  className = "",
  src = "https://my.spline.design/retrofuturismbganimation-D09Yboeeb1RVgu0Uzs6e0SsX/"
}: SplineBackgroundProps) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(true);

  // Performance: Pause animation when tab is not visible
  useEffect(() => {
    const handleVisibilityChange = () => {
      const iframe = iframeRef.current;
      if (!iframe) return;

      try {
        if (document.hidden) {
          iframe.contentWindow?.postMessage({ type: 'pause' }, '*');
          setIsInView(false);
        } else {
          iframe.contentWindow?.postMessage({ type: 'resume' }, '*');
          setIsInView(true);
        }
      } catch (e) {
        // Silent fail for cross-origin restrictions
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
    
    // Performance optimizations after load
    setTimeout(() => {
      const iframe = iframeRef.current;
      if (!iframe) return;

      try {
        // Send performance optimization messages to Spline iframe
        iframe.contentWindow?.postMessage({ 
          type: 'optimize',
          settings: {
            quality: 'high', // Use high quality to reduce noise
            shadows: true, // Keep shadows for better visual quality
            antialiasing: true, // Enable antialiasing to reduce noise
            pixelRatio: Math.min(window.devicePixelRatio || 1, 2), // Cap pixel ratio
            noise: false, // Disable noise if supported by Spline scene
            grain: false, // Disable grain effects
            bloom: false, // Reduce bloom effects that can create noise
            chromaticAberration: false // Disable chromatic aberration
          }
        }, '*');
      } catch (e) {
        // Silent fail if cross-origin restrictions apply
      }
    }, 1000);
  }, []);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    iframe.addEventListener('load', handleLoad);
    return () => iframe.removeEventListener('load', handleLoad);
  }, [handleLoad]);

  return (
    <div className={`spline-background-container ${className}`}>
      <iframe 
        ref={iframeRef}
        src={src}
        frameBorder='0' 
        width='100%' 
        height='100%'
        className={`spline-background-iframe ${isLoaded ? 'loaded' : 'loading'}`}
        title="Spline Background Animation"
        allow="accelerometer; gyroscope; xr-spatial-tracking"
        sandbox="allow-scripts allow-same-origin allow-popups"
      />
      
      {/* Loading overlay */}
      {!isLoaded && (
        <div className="spline-background-loading">
          <div className="spline-background-loading-text text-primary">
            Loading background...
          </div>
        </div>
      )}
    </div>
  );
};

export default SplineBackground;
