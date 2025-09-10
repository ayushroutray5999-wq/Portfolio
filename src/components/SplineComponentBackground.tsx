import { useEffect, useRef, useState, useCallback } from "react";
import "./SplineBackground.css";

interface SplineComponentBackgroundProps {
  className?: string;
  src?: string;
  isGlobalBackground?: boolean;
  opacity?: number;
  zIndex?: number;
}

const SplineComponentBackground = ({ 
  className = "",
  src = "https://my.spline.design/retrofuturismbganimation-D09Yboeeb1RVgu0Uzs6e0SsX/",
  isGlobalBackground = false,
  opacity = 0.3,
  zIndex = -1
}: SplineComponentBackgroundProps) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
    
    setTimeout(() => {
      const iframe = iframeRef.current;
      if (!iframe) return;

      try {
        iframe.contentWindow?.postMessage({ 
          type: 'optimize',
          settings: {
            quality: isGlobalBackground ? 'high' : 'medium',
            shadows: isGlobalBackground,
            antialiasing: true,
            pixelRatio: Math.min(window.devicePixelRatio || 1, 2),
            noise: false,
            grain: false,
            bloom: false,
            chromaticAberration: false
          }
        }, '*');
      } catch (e) {
        // Silent fail if cross-origin restrictions apply
      }
    }, 1000);
  }, [isGlobalBackground]);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    iframe.addEventListener('load', handleLoad);
    return () => iframe.removeEventListener('load', handleLoad);
  }, [handleLoad]);

  const containerClasses = `spline-component-background ${isGlobalBackground ? 'global' : 'local'} ${className}`;

  return (
    <div className={containerClasses}>
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
      
      {!isLoaded && !isGlobalBackground && (
        <div className="spline-background-loading">
          <div className="spline-background-loading-text text-primary">
            Loading...
          </div>
        </div>
      )}
    </div>
  );
};

export default SplineComponentBackground;
