import React, { useState } from 'react';
import { X, MapPin, ArrowRight, ZoomIn } from 'lucide-react';
import data from '../data/architectData.json';

export default function Projects({ onSelectProject }) {
  const [filter, setFilter] = useState('Todos');
  const [selected, setSelected] = useState(null);

  const filtered = filter === 'Todos'
    ? data.projects
    : data.projects.filter(p => p.category === filter);

  const showOnMap = (p) => {
    setSelected(null);
    if (onSelectProject) onSelectProject(p);
    setTimeout(() => {
      document.getElementById('mapa')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <section id="obras" className="section">
      <div className="container">

        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem', marginBottom: '3.5rem' }}>
          <div style={{ textAlign: 'left' }}>
            <span className="section-label">Portfolio</span>
            <h2 style={{ textTransform: 'uppercase', marginTop: '0.4rem' }}>Mis Obras en Zaragoza</h2>
            <div className="line-accent" />
          </div>

          {/* Filter buttons */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {data.categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                style={{
                  padding: '0.45rem 1rem',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.07em',
                  background: filter === cat ? 'var(--accent)' : 'transparent',
                  color: filter === cat ? 'var(--bg-primary)' : 'var(--text-secondary)',
                  border: '1px solid',
                  borderColor: filter === cat ? 'var(--accent)' : 'var(--border-color)',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '2rem',
        }}>
          {filtered.map(p => (
            <article
              key={p.id}
              onClick={() => setSelected(p)}
              className="project-card"
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                cursor: 'pointer',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.4s var(--ease)',
              }}
            >
              {/* Image */}
              <div style={{ position: 'relative', paddingTop: '62%', overflow: 'hidden' }}>
                <img
                  src={p.image}
                  alt={p.title}
                  style={{
                    position: 'absolute', inset: 0,
                    width: '100%', height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.7s var(--ease)',
                  }}
                  className="p-img"
                />
                <div className="p-overlay" style={{
                  position: 'absolute', inset: 0,
                  background: 'rgba(12,11,10,0.45)',
                  opacity: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'opacity 0.35s ease',
                }}>
                  <div style={{
                    width: '46px', height: '46px',
                    background: 'var(--accent)',
                    borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--bg-primary)',
                    transform: 'scale(0.7)',
                    transition: 'transform 0.4s var(--ease)',
                  }} className="p-icon">
                    <ZoomIn size={19} />
                  </div>
                </div>
              </div>

              {/* Info */}
              <div style={{ padding: '1.4rem', textAlign: 'left', flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span style={{ fontFamily: 'var(--font-heading)', fontSize: '0.68rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--accent)' }}>
                    {p.category}
                  </span>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{p.year}</span>
                </div>
                <h3 style={{ fontSize: '1.05rem', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.5rem' }}>
                  {p.title}
                </h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-secondary)', fontSize: '0.82rem' }}>
                  <MapPin size={12} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                  {p.location}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* ─── Detail Modal ─── */}
      {selected && (
        <div
          onClick={() => setSelected(null)}
          style={{
            position: 'fixed', inset: 0,
            background: 'rgba(0,0,0,0.85)',
            zIndex: 1000,
            display: 'flex',
            justifyContent: 'flex-end',
            backdropFilter: 'blur(6px)',
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              width: '100%', maxWidth: '860px',
              height: '100%',
              background: 'var(--bg-primary)',
              borderLeft: '1px solid var(--border-color)',
              display: 'flex', flexDirection: 'column',
              overflowY: 'auto',
            }}
          >
            {/* Modal Header */}
            <div style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '1.75rem 2rem',
              borderBottom: '1px solid var(--border-color)',
              position: 'sticky', top: 0,
              background: 'var(--bg-primary)',
              zIndex: 5,
            }}>
              <div>
                <span style={{ fontSize: '0.68rem', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.1em', fontFamily: 'var(--font-heading)', fontWeight: 700 }}>
                  Ficha de obra
                </span>
                <h3 style={{ textTransform: 'uppercase', fontSize: '1.3rem', marginTop: '0.2rem' }}>
                  {selected.title}
                </h3>
              </div>
              <button
                onClick={() => setSelected(null)}
                style={{
                  display: 'flex', alignItems: 'center', gap: '0.4rem',
                  background: 'var(--bg-tertiary)',
                  border: '1px solid var(--border-color)',
                  color: 'var(--text-secondary)',
                  padding: '0.5rem 0.9rem',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.7rem', fontWeight: 700,
                  textTransform: 'uppercase', letterSpacing: '0.06em',
                  transition: 'all 0.25s ease',
                }}
                className="close-btn"
              >
                <X size={16} /> Cerrar
              </button>
            </div>

            {/* Modal Body */}
            <div style={{ padding: '2rem', flex: 1 }}>
              {/* Images */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2.5rem' }}>
                <div>
                  <span style={{ display: 'block', fontSize: '0.68rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Fotografía</span>
                  <img src={selected.image} alt={selected.title} style={{ width: '100%', height: '220px', objectFit: 'cover', border: '1px solid var(--border-color)' }} />
                </div>
                <div>
                  <span style={{ display: 'block', fontSize: '0.68rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Detalle del material</span>
                  <img src={selected.detail} alt="Detalle" style={{ width: '100%', height: '220px', objectFit: 'cover', border: '1px solid var(--border-color)', filter: 'grayscale(0.3)' }} />
                </div>
              </div>

              {/* Description + Specs */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2.5rem' }}>
                <div style={{ textAlign: 'left' }}>
                  <h4 style={{ textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem', fontSize: '0.95rem' }}>
                    Descripción
                  </h4>
                  <p style={{ fontSize: '0.92rem', lineHeight: 1.8 }}>
                    {selected.description}
                  </p>
                  <button
                    onClick={() => showOnMap(selected)}
                    className="btn-secondary"
                    style={{ marginTop: '2rem', width: '100%', justifyContent: 'center' }}
                  >
                    <MapPin size={14} /> Ver en el mapa <ArrowRight size={14} />
                  </button>
                </div>

                <div style={{ background: 'var(--bg-secondary)', padding: '1.75rem', border: '1px solid var(--border-color)', textAlign: 'left' }}>
                  <h4 style={{ textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--accent)', marginBottom: '1.25rem', fontSize: '0.9rem' }}>
                    Especificaciones
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {Object.entries(selected.specs).map(([k, v]) => (
                      <div key={k} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.65rem' }}>
                        <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>{k}</span>
                        <span style={{ fontSize: '0.82rem', color: 'var(--text-primary)', fontWeight: 600, textAlign: 'right', maxWidth: '55%' }}>{v}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .project-card:hover { border-color: var(--accent) !important; transform: translateY(-6px); }
        .project-card:hover .p-img { transform: scale(1.07); }
        .project-card:hover .p-overlay { opacity: 1 !important; }
        .project-card:hover .p-icon { transform: scale(1) !important; }
        .close-btn:hover { background: var(--accent) !important; color: var(--bg-primary) !important; border-color: var(--accent) !important; }
      `}</style>
    </section>
  );
}
