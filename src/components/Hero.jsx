import React, { useState, useEffect } from 'react';
import { ChevronDown, Phone, Mail } from 'lucide-react';
import data from '../data/architectData.json';

export default function Hero() {
  const [slide, setSlide] = useState(0);
  const slides = data.projects.slice(0, 4).map(p => ({ image: p.image, title: p.title, location: p.location }));

  useEffect(() => {
    const t = setInterval(() => setSlide(s => (s + 1) % slides.length), 5500);
    return () => clearInterval(t);
  }, [slides.length]);

  return (
    <section id="inicio" style={{
      position: 'relative',
      height: '100vh',
      minHeight: '600px',
      display: 'flex',
      alignItems: 'flex-end',
      overflow: 'hidden',
      backgroundColor: 'var(--bg-primary)',
    }}>
      {/* Slideshow images */}
      {slides.map((s, i) => (
        <div key={i} style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${s.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: i === slide ? 1 : 0,
          transition: 'opacity 1.8s ease',
        }} />
      ))}

      {/* Dark gradient overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to top, rgba(12,11,10,0.97) 0%, rgba(12,11,10,0.6) 50%, rgba(12,11,10,0.25) 100%)',
      }} />

      {/* Vertical grid lines (decoration) */}
      <div style={{
        position: 'absolute', inset: 0,
        display: 'flex', justifyContent: 'space-evenly',
        pointerEvents: 'none', opacity: 0.06,
      }}>
        {[0,1,2,3,4].map(i => (
          <div key={i} style={{ width: '1px', height: '100%', background: 'var(--text-primary)' }} />
        ))}
      </div>

      {/* Content */}
      <div className="container" style={{ position: 'relative', zIndex: 10, paddingBottom: '5rem', width: '100%' }}>
        <div style={{ maxWidth: '760px' }}>
          {/* Label */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
            <span style={{ width: '36px', height: '1px', background: 'var(--accent)' }} />
            <span style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
            }}>
              Especialista en Piedra Natural · Zaragoza
            </span>
          </div>

          {/* Name / Heading */}
          <h1 style={{ marginBottom: '1.5rem', textTransform: 'uppercase', color: 'var(--text-primary)' }}>
            Ángel<br />
            <span style={{ color: 'var(--accent)' }}>Lamenca</span>
          </h1>

          {/* Short tagline */}
          <p style={{
            fontSize: '1.1rem',
            color: 'var(--text-secondary)',
            maxWidth: '540px',
            lineHeight: 1.75,
            marginBottom: '2.5rem',
          }}>
            Más de 35 años prescribiendo y suministrando{' '}
            <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Piedra de Calatorao</strong>{' '}
            para obras de urbanismo, edificación y rehabilitación en Zaragoza y provincia.
          </p>

          {/* CTA row */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#obras" className="btn-primary">
              Ver mis obras
            </a>
            <a href="#sobre-mi" className="btn-secondary">
              Sobre mí
            </a>
          </div>

          {/* Quick contact chips */}
          <div style={{ display: 'flex', gap: '1.25rem', marginTop: '2.5rem', flexWrap: 'wrap' }}>
            <a href="tel:+34976607830" style={{
              display: 'flex', alignItems: 'center', gap: '0.5rem',
              color: 'var(--text-secondary)', fontSize: '0.85rem',
              transition: 'color 0.25s',
            }} className="contact-chip">
              <Phone size={14} style={{ color: 'var(--accent)' }} />
              976 607 830
            </a>
            <a href={`mailto:${data.profile.email}`} style={{
              display: 'flex', alignItems: 'center', gap: '0.5rem',
              color: 'var(--text-secondary)', fontSize: '0.85rem',
              transition: 'color 0.25s',
            }} className="contact-chip">
              <Mail size={14} style={{ color: 'var(--accent)' }} />
              {data.profile.email}
            </a>
          </div>
        </div>
      </div>

      {/* Active slide caption */}
      <div style={{
        position: 'absolute', bottom: '3rem', right: '2.5rem',
        zIndex: 10, textAlign: 'right',
      }} className="hide-mobile">
        <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>Obra destacada</span>
        <div style={{ fontSize: '0.9rem', color: 'var(--text-primary)', marginTop: '0.2rem', fontFamily: 'var(--font-heading)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          {slides[slide].title}
        </div>
        <div style={{ fontSize: '0.75rem', color: 'var(--accent)', marginTop: '0.1rem' }}>{slides[slide].location}</div>
      </div>

      {/* Slide dots */}
      <div style={{
        position: 'absolute', bottom: '2rem', left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex', gap: '8px', zIndex: 10,
      }}>
        {slides.map((_, i) => (
          <button key={i} onClick={() => setSlide(i)} style={{
            width: i === slide ? '28px' : '8px',
            height: '3px',
            background: i === slide ? 'var(--accent)' : 'var(--text-muted)',
            border: 'none', cursor: 'pointer',
            transition: 'all 0.4s ease',
            padding: 0,
          }} />
        ))}
      </div>

      <style>{`
        .contact-chip:hover { color: var(--accent) !important; }
      `}</style>
    </section>
  );
}
