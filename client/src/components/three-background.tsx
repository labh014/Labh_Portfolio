import { useEffect, useRef } from "react";

export default function ThreeBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Three.js implementation
    const loadThreeJS = async () => {
      // Load Three.js from CDN
      const script = document.createElement("script");
      script.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";
      document.head.appendChild(script);

      script.onload = () => {
        // @ts-ignore
        const THREE = window.THREE;
        
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
          75,
          window.innerWidth / window.innerHeight,
          0.1,
          1000
        );
        const renderer = new THREE.WebGLRenderer({
          canvas: canvasRef.current,
          alpha: true,
        });

        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x000000, 0);

        // Create floating geometric shapes
        const geometry = new THREE.IcosahedronGeometry(1, 0);
        const material = new THREE.MeshBasicMaterial({
          color: 0x0070f3,
          wireframe: true,
          transparent: true,
          opacity: 0.6,
        });

        const shapes: any[] = [];
        for (let i = 0; i < 20; i++) {
          const shape = new THREE.Mesh(geometry, material.clone());
          shape.position.x = (Math.random() - 0.5) * 20;
          shape.position.y = (Math.random() - 0.5) * 20;
          shape.position.z = (Math.random() - 0.5) * 20;
          shape.rotation.x = Math.random() * Math.PI;
          shape.rotation.y = Math.random() * Math.PI;

          // Random colors for variety
          const colors = [0x0070f3, 0x8b5cf6, 0x00d9ff];
          shape.material.color.setHex(
            colors[Math.floor(Math.random() * colors.length)]
          );

          shapes.push(shape);
          scene.add(shape);
        }

        camera.position.z = 15;

        function animate() {
          requestAnimationFrame(animate);

          shapes.forEach((shape, index) => {
            shape.rotation.x += 0.001 + index * 0.0001;
            shape.rotation.y += 0.001 + index * 0.0001;

            // Floating animation
            shape.position.y += Math.sin(Date.now() * 0.001 + index) * 0.002;
          });

          renderer.render(scene, camera);
        }

        animate();

        // Handle window resize
        const handleResize = () => {
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener("resize", handleResize);

        return () => {
          window.removeEventListener("resize", handleResize);
          document.head.removeChild(script);
        };
      };
    };

    loadThreeJS();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full z-0"
      data-testid="three-background"
    />
  );
}
