import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import data from '../data/architectData.json';

export default function MapSection({ highlightedProject }) {
  const mapRef = useRef(null);
  const leafletRef = useRef(null);
  const markersRef = useRef({});

  useEffect(() => {
    if (leafletRef.current) return;

    const map = L.map(mapRef.current, {
      center: [41.65, -0.89],
      zoom: 13,
      scrollWheelZoom: false,
    });
    leafletRef.current = map;

    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; OpenStreetMap &copy; CARTO',
      subdomains: 'abcd',
      maxZoom: 20,
    }).addTo(map);

    const icon = L.divIcon({
      className: '',
      html: `<div class="marker-outer"><div class="marker-ring"></div><div class="marker-dot"></div></div>`,
      iconSize: [36, 36],
      iconAnchor: [18, 18],
      popupAnchor: [0, -12],
    });

    data.projects.forEach(p => {
      const popup = `
        <div style="font-family:'Plus Jakarta Sans',sans-serif;padding:0.5rem;text-align:left;">
          <img src="${p.image}" style="width:100%;height:100px;object-fit:cover;margin-bottom:0.6rem;" />
          <span style="font-size:0.65rem;color:var(--accent);text-transform:uppercase;letter-spacing:0.06em;font-weight:700;">${p.category} · ${p.year}</span>
          <div style="font-family:'Syne',sans-serif;font-weight:700;font-size:0.9rem;text-transform:uppercase;margin:0.2rem 0 0.3rem;color:var(--text-primary);">${p.title}</div>
          <div style="font-size:0.75rem;color:var(--text-secondary);">${p.location}</div>
          <div style="font-size:0.75rem;color:var(--text-secondary);margin-top:0.2rem;">Cliente: ${p.client}</div>
        </div>`;

      const marker = L.marker(p.coords, { icon })
        .addTo(map)
        .bindPopup(popup);
      markersRef.current[p.id] = marker;
    });

    return () => {
      if (leafletRef.current) {
        leafletRef.current.remove();
        leafletRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (!highlightedProject || !leafletRef.current) return;
    const { id, coords } = highlightedProject;
    leafletRef.current.setView(coords, 14, { animate: true, duration: 1.2 });
    setTimeout(() => markersRef.current[id]?.openPopup(), 1300);
  }, [highlightedProject]);

  return (
    <section id="mapa" style={{ padding: 0, borderBottom: '1px solid var(--border-color)' }}>
      <div style={{ position: 'relative', height: '560px' }}>
        <div ref={mapRef} style={{ width: '100%', height: '100%' }} />

        {/* Legend card */}
        <div style={{
          position: 'absolute',
          top: '2rem', left: '2rem',
          zIndex: 500,
          background: 'rgba(20,18,16,0.92)',
          backdropFilter: 'blur(12px)',
          border: '1px solid var(--border-color)',
          padding: '1.75rem 2rem',
          maxWidth: '320px',
          textAlign: 'left',
        }} className="hide-mobile">
          <span className="section-label">Mapa de obras</span>
          <h3 style={{ textTransform: 'uppercase', fontSize: '1.2rem', marginTop: '0.3rem', marginBottom: '0.75rem' }}>
            Obras en Zaragoza
          </h3>
          <p style={{ fontSize: '0.82rem', lineHeight: 1.65 }}>
            Aquí puedes ver la ubicación de las principales obras en las que he participado como especialista en Piedra de Calatorao. Haz clic en cada marcador para ver los detalles.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginTop: '1.25rem', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--accent)', display: 'inline-block', flexShrink: 0 }} />
            {data.projects.length} obras marcadas
          </div>
        </div>
      </div>
    </section>
  );
}
