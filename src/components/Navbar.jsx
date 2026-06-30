import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'Inicio',    href: '#inicio'   },
    { label: 'Sobre mí', href: '#sobre-mi' },
    { label: 'Obras',    href: '#obras'    },
    { label: 'Material', href: '#material' },
    { label: 'Mapa',     href: '#mapa'     },
    { label: 'Contacto', href: '#contacto' },
  ];

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        height: 'var(--header-height)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        transition: 'background 0.4s ease, border-color 0.4s ease',
        background: scrolled ? 'rgba(12,11,10,0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border-color)' : '1px solid transparent',
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Logo */}
          <a href="#inicio" style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
            <span style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 800,
              fontSize: '1.1rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--text-primary)',
              lineHeight: 1,
            }}>
              Ángel Lamenca
            </span>
            <span style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '0.6rem',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              fontWeight: 600,
            }}>
              Piedra Natural · Calatorao
            </span>
          </a>

          {/* Desktop links */}
          <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }} className="hide-mobile">
            {links.map(l => (
              <a key={l.href} href={l.href} style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '0.72rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: 'var(--text-secondary)',
                position: 'relative',
                transition: 'color 0.25s ease',
              }} className="nav-link">
                {l.label}
              </a>
            ))}
            <a href="tel:+34976607830" className="btn-primary" style={{ padding: '0.55rem 1.2rem', fontSize: '0.7rem' }}>
              Llamar
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(o => !o)}
            style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--text-primary)', display: 'none' }}
            className="show-mobile"
            aria-label="Menú"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {open && (
        <div style={{
          position: 'fixed',
          inset: 0,
          top: 'var(--header-height)',
          background: 'var(--bg-primary)',
          zIndex: 999,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '2.5rem',
        }}>
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.4rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: 'var(--text-primary)',
            }}>
              {l.label}
            </a>
          ))}
          <a href="tel:+34976607830" className="btn-primary" onClick={() => setOpen(false)}>
            Llamar ahora
          </a>
        </div>
      )}

      <style>{`
        .nav-link:hover { color: var(--accent) !important; }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -5px; left: 0;
          width: 0; height: 1px;
          background: var(--accent);
          transition: width 0.3s ease;
        }
        .nav-link:hover::after { width: 100%; }
      `}</style>
    </>
  );
}
