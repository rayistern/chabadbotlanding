"use client"

import React, { useEffect, useRef } from "react"

declare global {
  interface Window {
    THREE: any;
    gsap: any;
  }
}

export default function Hero() {
  const globeContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initGlobe = () => {
      if (!globeContainerRef.current || typeof window.THREE === 'undefined' || typeof window.gsap === 'undefined') {
        return;
      }

      const THREE = window.THREE;
      const gsap = window.gsap;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, globeContainerRef.current.offsetWidth / globeContainerRef.current.offsetHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      
      renderer.setSize(globeContainerRef.current.offsetWidth, globeContainerRef.current.offsetHeight);
      renderer.setPixelRatio(window.devicePixelRatio);
      globeContainerRef.current.appendChild(renderer.domElement);

      // Globe
      const geometry = new THREE.SphereGeometry(2.5, 64, 64);
      const material = new THREE.MeshPhongMaterial({
        color: 0x251B33,
        shininess: 10,
        specular: 0x111111,
      });
      const sphere = new THREE.Mesh(geometry, material);
      scene.add(sphere);

      // Lights
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
      scene.add(ambientLight);
      const pointLight = new THREE.PointLight(0x9D4EDD, 1.5, 100);
      pointLight.position.set(5, 5, 5);
      scene.add(pointLight);
      const pointLight2 = new THREE.PointLight(0xF4D35E, 1, 100);
      pointLight2.position.set(-10, -5, -5);
      scene.add(pointLight2);

      camera.position.z = 5;

      // Stars
      const starGeometry = new THREE.BufferGeometry();
      const starMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.02 });
      const starVertices = [];
      for (let i = 0; i < 10000; i++) {
        const x = (Math.random() - 0.5) * 2000;
        const y = (Math.random() - 0.5) * 2000;
        const z = (Math.random() - 0.5) * 2000;
        if (x*x + y*y + z*z > 100*100) starVertices.push(x, y, z);
      }
      starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));
      const stars = new THREE.Points(starGeometry, starMaterial);
      scene.add(stars);

      // Light Points on Globe
      const chabadCenters = [
        { lat: 40.7128, lon: -74.0060 }, // NYC
        { lat: 34.0522, lon: -118.2437 }, // LA
        { lat: 51.5074, lon: -0.1278 }, // London
        { lat: -33.8688, lon: 151.2093 }, // Sydney
        { lat: 31.7683, lon: 35.2137 }, // Jerusalem
        { lat: 55.7558, lon: 37.6173 }, // Moscow
        { lat: -34.6037, lon: -58.3816 }, // Buenos Aires
        { lat: 19.4326, lon: -99.1332 }, // Mexico City
        { lat: 25.7617, lon: -80.1918}, // Miami
      ];

      const pointsParent = new THREE.Object3D();
      sphere.add(pointsParent);

      chabadCenters.forEach(center => {
        const latRad = center.lat * (Math.PI / 180);
        const lonRad = -center.lon * (Math.PI / 180);
        const pointGeometry = new THREE.SphereGeometry(0.04, 16, 16);
        const pointMaterial = new THREE.MeshBasicMaterial({ color: 0xF4D35E });
        const point = new THREE.Mesh(pointGeometry, pointMaterial);
        point.position.set(
          Math.cos(latRad) * Math.cos(lonRad) * 2.5,
          Math.sin(latRad) * 2.5,
          Math.cos(latRad) * Math.sin(lonRad) * 2.5
        );
        pointsParent.add(point);
      });

      // Animate
      function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
      }
      animate();

      // Scroll Animation
      gsap.timeline({
        scrollTrigger: {
          trigger: "#globe-section",
          start: "top top",
          end: "+=2000",
          scrub: 1,
          pin: true,
        }
      })
      .to(sphere.rotation, { y: Math.PI * 2, ease: "none" })
      .to(pointsParent.rotation, { y: -Math.PI * 1.5, ease: "none" }, "<")
      .to(camera.position, { z: 3.5, ease: "power1.inOut" }, "<")
      .to("#globe-section .text-glow", { opacity: 0, scale: 0.5, ease: "power1.in" }, ">-0.5")
      .to("#globe-section p", { opacity: 0, scale: 0.5, ease: "power1.in" }, "<");
    };

    // Wait for scripts to load
    const checkScripts = () => {
      if (typeof window.THREE !== 'undefined' && typeof window.gsap !== 'undefined') {
        initGlobe();
      } else {
        setTimeout(checkScripts, 100);
      }
    };

    checkScripts();

    // Handle resize
    const handleResize = () => {
      if (globeContainerRef.current) {
        const width = globeContainerRef.current.offsetWidth;
        const height = globeContainerRef.current.offsetHeight;
        // Update camera and renderer on resize
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="relative" id="globe-section">
      <div 
        ref={globeContainerRef}
        id="globe-container"
        className="h-screen w-full sticky top-0 z-10"
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white z-20 pointer-events-none">
        <h2 className="text-4xl md:text-6xl font-black text-glow">Connecting Jewish Communities Worldwide</h2>
        <p className="text-xl mt-4 max-w-2xl mx-auto">Our AI platform spans the globe, bringing Torah learning together.</p>
      </div>
    </section>
  )
}
