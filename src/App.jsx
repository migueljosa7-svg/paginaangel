import React, { useState, useEffect } from 'react';
import gsap from 'gsap';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import StoneSection from './components/StoneSection';
import MapSection from './components/MapSection';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);
  const [highlightedProject, setHighlightedProject] = useState(null);

  // Progress counter
  useEffect(() => {
    const step = 100 / (1200 / 20);
    const t = setInterval(() => {
      setProgress(p => {
        if (p >= 100) { clearInterval(t); return 100; }
        return Math.min(p + step, 100);
      });
    }, 20);
    return () => clearInterval(t);
  }, []);

  // Fade out loader
  useEffect(() => {
    if (progress < 100) return;
    gsap.to('.preloader', {
      opacity: 0, duration: 0.7, ease: 'power2.out',
      onComplete: () => {
        setLoading(false);
        // Hero entrance
        gsap.fromTo('nav', { y: -20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out' });
        gsap.fromTo('#inicio h1', { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1.1, delay: 0.2, ease: 'power4.out' });
        gsap.fromTo('#inicio p', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, delay: 0.4, ease: 'power3.out' });
      }
    });
  }, [progress]);

  // Scroll reveal for sections
  useEffect(() => {
    if (loading) return;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        const id = e.target.id;
        gsap.fromTo(`#${id} h2`, { y: 35, opacity: 0 }, { y: 0, opacity: 1, duration: 0.75, ease: 'power3.out' });
        gsap.fromTo(`#${id} .line-accent`, { width: 0 }, { width: 48, duration: 0.9, delay: 0.2, ease: 'power2.out' });
        if (id === 'obras') {
          gsap.fromTo('.project-card', { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, stagger: 0.1, delay: 0.2, ease: 'power2.out' });
        }
        observer.unobserve(e.target);
      });
    }, { threshold: 0.12 });

    document.querySelectorAll('.section').forEach(s => observer.observe(s));
    return () => observer.disconnect();
  }, [loading]);

  return (
    <>
      {/* Preloader */}
      {loading && (
        <div className="preloader">
          <div className="preloader-name">Ángel Lamenca</div>
          <div className="preloader-sub">Piedra Natural · Calatorao · Zaragoza</div>
          <div className="preloader-bar">
            <div className="preloader-progress" style={{ width: `${progress}%` }} />
          </div>
        </div>
      )}

      <Navbar />
      <Hero />
      <About />
      <Projects onSelectProject={setHighlightedProject} />
      <StoneSection />
      <MapSection highlightedProject={highlightedProject} />
      <Contact />
      <Footer />
    </>
  );
}
