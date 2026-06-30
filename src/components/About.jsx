import React from 'react';
import { CheckCircle } from 'lucide-react';
import data from '../data/architectData.json';

const highlights = [
  'Más de 35 años de experiencia en piedra natural',
  'Especialista en Piedra de Calatorao (caliza negra aragonesa)',
  'Prescripción y asesoramiento técnico en obra',
  'Colaboración con arquitectos, constructoras y ayuntamientos',
  'Acabados a medida: pulido, apomazado, abujardado, envejecido',
  'Suministro directo desde cantera en Calatorao, Zaragoza',
];

export default function About() {
  return (
    <section id="sobre-mi" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '5rem',
          alignItems: 'center',
        }}>

          {/* Photo column */}
          <div style={{ position: 'relative' }}>
            <div style={{
              position: 'relative',
              paddingTop: '120%',
              overflow: 'hidden',
              border: '1px solid var(--border-color)',
            }}>
              <img
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80"
                alt="Ángel Lamenca — Especialista en piedra natural"
                style={{
                  position: 'absolute', inset: 0,
                  width: '100%', height: '100%',
                  objectFit: 'cover',
                }}
              />
            </div>

            {/* Accent offset frame */}
            <div style={{
              position: 'absolute',
              top: '18px', left: '-18px',
              width: '100%', height: '100%',
              border: '1px solid var(--accent)',
              zIndex: -1,
              pointerEvents: 'none',
            }} className="hide-mobile" />

            {/* Experience badge */}
            <div style={{
              position: 'absolute',
              bottom: '-1.5rem',
              right: '-1rem',
              background: 'var(--accent)',
              color: 'var(--bg-primary)',
              padding: '1.25rem 1.5rem',
              textAlign: 'center',
            }}>
              <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '2.2rem', lineHeight: 1 }}>35+</div>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: '4px' }}>
                Años de<br />experiencia
              </div>
            </div>
          </div>

          {/* Bio column */}
          <div style={{ textAlign: 'left', paddingTop: '1rem' }}>
            <span className="section-label">Sobre mí</span>

            <h2 style={{ textTransform: 'uppercase', marginTop: '0.5rem', marginBottom: '2rem' }}>
              Un profesional<br />a tu servicio
            </h2>
            <div className="line-accent" style={{ marginBottom: '2.5rem' }} />

            <p style={{ marginBottom: '1.25rem', fontSize: '1rem' }}>
              {data.profile.bio}
            </p>
            <p style={{ fontSize: '1rem' }}>
              {data.profile.bio2}
            </p>

            {/* Highlights list */}
            <ul style={{
              marginTop: '2.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.85rem',
              listStyle: 'none',
            }}>
              {highlights.map((h, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  <CheckCircle size={16} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '3px' }} />
                  {h}
                </li>
              ))}
            </ul>

            {/* Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '2.5rem' }}>
              {data.profile.tags.map((t, i) => (
                <span key={i} className="tag">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
