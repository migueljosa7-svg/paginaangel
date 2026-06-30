import React from 'react';
import { Phone, Mail } from 'lucide-react';
import data from '../data/architectData.json';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{
      background: 'var(--bg-secondary)',
      borderTop: '1px solid var(--border-color)',
      padding: '3.5rem 0 2rem',
    }}>
      <div className="container">
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          gap: '2.5rem',
          marginBottom: '2.5rem',
        }}>
          {/* Brand */}
          <div style={{ textAlign: 'left' }}>
            <div style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 800,
              fontSize: '1.1rem',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: 'var(--text-primary)',
            }}>
              Ángel Lamenca Manzano
            </div>
            <div style={{
              fontSize: '0.68rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              marginTop: '4px',
              fontFamily: 'var(--font-heading)',
              fontWeight: 600,
            }}>
              Especialista en Piedra Natural · Calatorao
            </div>
            <p style={{ fontSize: '0.85rem', maxWidth: '360px', marginTop: '1rem', lineHeight: 1.65 }}>
              Asesoramiento técnico y suministro de Piedra de Calatorao para obras en Zaragoza y provincia.
            </p>
          </div>

          {/* Nav */}
          <div style={{ display: 'flex', gap: '3.5rem', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', textAlign: 'left' }}>
              <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', fontFamily: 'var(--font-heading)', fontWeight: 700, marginBottom: '0.25rem' }}>
                Navegación
              </span>
              {[['#inicio','Inicio'],['#sobre-mi','Sobre mí'],['#obras','Obras'],['#material','Material'],['#mapa','Mapa'],['#contacto','Contacto']].map(([href, label]) => (
                <a key={href} href={href} style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', transition: 'color 0.25s' }} className="footer-link">
                  {label}
                </a>
              ))}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', textAlign: 'left' }}>
              <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', fontFamily: 'var(--font-heading)', fontWeight: 700, marginBottom: '0.25rem' }}>
                Contacto
              </span>
              <a href={`tel:${data.profile.phone}`} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)', transition: 'color 0.25s' }} className="footer-link">
                <Phone size={13} /> {data.profile.phone}
              </a>
              <a href={`mailto:${data.profile.email}`} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)', transition: 'color 0.25s' }} className="footer-link">
                <Mail size={13} /> {data.profile.email}
              </a>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{data.profile.location}</span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: '1rem',
          borderTop: '1px solid var(--border-color)',
          paddingTop: '1.75rem',
          fontSize: '0.78rem',
          color: 'var(--text-muted)',
        }}>
          <span>&copy; {year} Ángel Lamenca Manzano. Todos los derechos reservados.</span>
          <span>
            Diseño web por{' '}
            <a href="https://github.com/migueljosa7-svg" style={{ color: 'var(--accent)', textDecoration: 'none' }} className="footer-link">
              Miguel Josa
            </a>
          </span>
        </div>
      </div>

      <style>{`
        .footer-link:hover { color: var(--accent) !important; }
      `}</style>
    </footer>
  );
}
