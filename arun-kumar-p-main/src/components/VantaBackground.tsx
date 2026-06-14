import { useEffect, useRef } from "react";
import { useTheme } from "./ThemeProvider";

declare global {
  interface Window {
    THREE: any;
    VANTA: any;
  }
}

function loadScript(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    // If already loaded, resolve immediately
    if (document.querySelector(`script[src="${src}"]`)) {
      resolve();
      return;
    }
    const existing = document.querySelector(`script[src="${src}"]`);
    if (existing) {
      // Script tag exists but may not be loaded yet — wait for it
      existing.addEventListener("load", () => resolve());
      existing.addEventListener("error", reject);
      return;
    }
    const script = document.createElement("script");
    script.src = src;
    script.async = false;
    script.onload = () => resolve();
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

const themeColors: Record<string, any> = {
  "theme-blue": {
    color: 0x00f2fe,
    backgroundColor: 0x060d1b,
  },
  "theme-green": {
    color: 0x10b981,
    backgroundColor: 0x05140b,
  },
  "theme-orange": {
    color: 0xf97316,
    backgroundColor: 0x140c06,
  },
  "theme-red": {
    color: 0xff0000,
    backgroundColor: 0x050505,
  },
};

const VantaBackground = () => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);
  const { theme } = useTheme();

  useEffect(() => {
    let cancelled = false;

    const init = async () => {
      try {
        // Clean up previous effects before creating a new one
        if (vantaEffect.current) {
          try {
            vantaEffect.current.destroy();
          } catch (_) {}
          vantaEffect.current = null;
        }
        
        if (window.pJSDom && window.pJSDom.length > 0) {
          window.pJSDom = [];
        }
        
        if (vantaRef.current) {
          vantaRef.current.innerHTML = '';
        }

        if (theme === "theme-blue" || theme === "theme-green") {
          const particleColor = theme === "theme-blue" ? "#00f2fe" : "#10b981";
          await loadScript("https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js");
          if (cancelled || !vantaRef.current || !window.particlesJS) return;
          
          window.particlesJS("particles-js", {
            "particles": {
              "number": { "value": 110, "density": { "enable": true, "value_area": 800 } },
              "color": { "value": particleColor },
              "shape": { "type": "circle", "stroke": { "width": 0, "color": "#000000" }, "polygon": { "nb_sides": 5 }, "image": { "src": "img/github.svg", "width": 100, "height": 100 } },
              "opacity": { "value": 0.6, "random": false, "anim": { "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false } },
              "size": { "value": 2, "random": true, "anim": { "enable": false, "speed": 40, "size_min": 0.1, "sync": false } },
              "line_linked": { "enable": true, "distance": 150, "color": particleColor, "opacity": 0, "width": 1 },
              "move": { "enable": true, "speed": 4, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false, "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 } }
            },
            "interactivity": {
              "detect_on": "window",
              "events": { "onhover": { "enable": true, "mode": "repulse" }, "onclick": { "enable": true, "mode": "push" }, "resize": true },
              "modes": { "grab": { "distance": 400, "line_linked": { "opacity": 1 } }, "bubble": { "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3 }, "repulse": { "distance": 200, "duration": 0.4 }, "push": { "particles_nb": 4 }, "remove": { "particles_nb": 2 } }
            },
            "retina_detect": true
          });
        } else {
          // Load Three.js first, then Vanta for other themes
          await loadScript("https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js");
          await loadScript("https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js");

          if (cancelled || !vantaRef.current || !window.VANTA?.NET) return;

          const colors = themeColors[theme] || themeColors["theme-blue"];

          vantaEffect.current = window.VANTA.NET({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,
            color: colors.color,
            backgroundColor: colors.backgroundColor,
            points: 10.0,
            maxDistance: 22.0,
            spacing: 17.0,
          });
        }
      } catch (err) {
        console.error("Background init failed:", err);
      }
    };

    init();

    return () => {
      cancelled = true;
      if (vantaEffect.current) {
        try {
          vantaEffect.current.destroy();
        } catch (_) { }
        vantaEffect.current = null;
      }
      if (window.pJSDom && window.pJSDom.length > 0) {
        window.pJSDom = [];
      }
      if (vantaRef.current) {
        vantaRef.current.innerHTML = '';
      }
    };
  }, [theme]);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -50,
        pointerEvents: "none",
        opacity: (theme === "theme-blue" || theme === "theme-green") ? 1 : 0.3,
      }}
    >
      <div
        id="particles-js"
        ref={vantaRef}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default VantaBackground;
