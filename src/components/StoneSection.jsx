import React from 'react';
import data from '../data/architectData.json';

export default function StoneSection() {
  const { stone } = data;

  return (
    <section id="material" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '5rem',
          alignItems: 'center',
        }}>
          {/* Left: Text */}
          <div style={{ textAlign: 'left' }}>
            <span className="section-label">{stone.subtitle}</span>
            <h2 style={{ textTransform: 'uppercase', marginTop: '0.4rem', marginBottom: '2rem' }}>
              {stone.title}
            </h2>
            <div className="line-accent" style={{ marginBottom: '2.5rem' }} />

            <p style={{ fontSize: '1rem', lineHeight: 1.8, marginBottom: '2.5rem' }}>
              {stone.description}
            </p>

            {/* Finishes */}
            <h3 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent)', marginBottom: '1.5rem' }}>
              Acabados disponibles
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {stone.finishes.map((f, i) => (
                <div key={i} style={{
                  display: 'flex',
                  gap: '1rem',
                  padding: '1.1rem 1.25rem',
                  background: 'var(--bg-tertiary)',
                  border: '1px solid var(--border-color)',
                  textAlign: 'left',
                  transition: 'border-color 0.3s ease',
                }} className="finish-row">
                  <div style={{
                    width: '3px',
                    background: 'var(--accent)',
                    flexShrink: 0,
                    borderRadius: '1px',
                  }} />
                  <div>
                    <div style={{
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 700,
                      fontSize: '0.85rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      color: 'var(--text-primary)',
                      marginBottom: '0.2rem',
                    }}>
                      {f.name}
                    </div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                      {f.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image with overlay */}
          <div style={{ position: 'relative' }}>
            <div style={{
              position: 'relative',
              paddingTop: '115%',
              overflow: 'hidden',
              border: '1px solid var(--border-color)',
            }}>
              <img
                src={stone.image}
                alt="Piedra de Calatorao"
                style={{
                  position: 'absolute', inset: 0,
                  width: '100%', height: '100%',
                  objectFit: 'cover',
                  filter: 'grayscale(0.3) contrast(1.05)',
                }}
              />
              {/* Text overlay bottom */}
              <div style={{
                position: 'absolute',
                bottom: 0, left: 0, right: 0,
                background: 'linear-gradient(to top, rgba(12,11,10,0.95) 0%, transparent 100%)',
                padding: '2.5rem 2rem 1.75rem',
              }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.3rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-primary)' }}>
                  Piedra de Calatorao
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--accent)', marginTop: '0.25rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  Calatorao, Zaragoza · Desde 1988
                </div>
              </div>
            </div>
            {/* Accent frame */}
            <div style={{
              position: 'absolute',
              top: '-16px', right: '-16px',
              width: '100%', height: '100%',
              border: '1px solid var(--accent)',
              zIndex: -1,
              pointerEvents: 'none',
            }} className="hide-mobile" />
          </div>
        </div>

      </div>

      <style>{`
        .finish-row:hover { border-color: var(--accent) !important; }
      `}</style>
    </section>
  );
}
