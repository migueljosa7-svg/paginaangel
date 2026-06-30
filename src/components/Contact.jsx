import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, CheckCircle, Send } from 'lucide-react';
import data from '../data/architectData.json';

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);

  const handle = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone) return;
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: '', phone: '', message: '' });
    }, 4500);
  };

  return (
    <section id="contacto" className="section">
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto', marginBottom: '4rem' }}>
          <span className="section-label" style={{ justifyContent: 'center' }}>Contacto</span>
          <h2 style={{ textTransform: 'uppercase', marginTop: '0.4rem', marginBottom: '1rem' }}>
            Hablemos
          </h2>
          <p style={{ fontSize: '1rem' }}>
            ¿Necesitas Piedra de Calatorao para tu obra? ¿Quieres un presupuesto o asesoramiento técnico? Llámame o escríbeme y te ayudo sin compromiso.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '3.5rem',
          alignItems: 'start',
        }}>
          {/* Contact Details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Phone */}
            <a href={`tel:${data.profile.phone}`} style={{
              display: 'flex', gap: '1.25rem', alignItems: 'flex-start',
              padding: '1.5rem',
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border-color)',
              transition: 'border-color 0.3s ease',
              textDecoration: 'none',
            }} className="contact-card">
              <div style={{
                width: '44px', height: '44px', flexShrink: 0,
                background: 'var(--bg-tertiary)',
                border: '1px solid var(--border-color)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--accent)',
              }}>
                <Phone size={18} />
              </div>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', fontFamily: 'var(--font-heading)', fontWeight: 700, marginBottom: '0.25rem' }}>
                  Teléfono
                </div>
                <div style={{ fontSize: '1.05rem', color: 'var(--text-primary)', fontWeight: 600 }}>
                  976 607 830
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginTop: '0.15rem' }}>
                  Llámame directamente
                </div>
              </div>
            </a>

            {/* WhatsApp */}
            <a href={`https://wa.me/${data.profile.whatsapp}`} target="_blank" rel="noreferrer" style={{
              display: 'flex', gap: '1.25rem', alignItems: 'flex-start',
              padding: '1.5rem',
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border-color)',
              transition: 'border-color 0.3s ease',
              textDecoration: 'none',
            }} className="contact-card">
              <div style={{
                width: '44px', height: '44px', flexShrink: 0,
                background: 'var(--bg-tertiary)',
                border: '1px solid var(--border-color)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--accent)',
              }}>
                <MessageCircle size={18} />
              </div>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', fontFamily: 'var(--font-heading)', fontWeight: 700, marginBottom: '0.25rem' }}>
                  WhatsApp
                </div>
                <div style={{ fontSize: '1.05rem', color: 'var(--text-primary)', fontWeight: 600 }}>
                  Enviar mensaje
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginTop: '0.15rem' }}>
                  Respondo en breve
                </div>
              </div>
            </a>

            {/* Email */}
            <a href={`mailto:${data.profile.email}`} style={{
              display: 'flex', gap: '1.25rem', alignItems: 'flex-start',
              padding: '1.5rem',
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border-color)',
              transition: 'border-color 0.3s ease',
              textDecoration: 'none',
            }} className="contact-card">
              <div style={{
                width: '44px', height: '44px', flexShrink: 0,
                background: 'var(--bg-tertiary)',
                border: '1px solid var(--border-color)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--accent)',
              }}>
                <Mail size={18} />
              </div>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', fontFamily: 'var(--font-heading)', fontWeight: 700, marginBottom: '0.25rem' }}>
                  Correo
                </div>
                <div style={{ fontSize: '1rem', color: 'var(--text-primary)', fontWeight: 600, wordBreak: 'break-all' }}>
                  {data.profile.email}
                </div>
              </div>
            </a>

            {/* Location */}
            <div style={{
              display: 'flex', gap: '1.25rem', alignItems: 'flex-start',
              padding: '1.5rem',
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border-color)',
            }}>
              <div style={{
                width: '44px', height: '44px', flexShrink: 0,
                background: 'var(--bg-tertiary)',
                border: '1px solid var(--border-color)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--accent)',
              }}>
                <MapPin size={18} />
              </div>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', fontFamily: 'var(--font-heading)', fontWeight: 700, marginBottom: '0.25rem' }}>
                  Ubicación
                </div>
                <div style={{ fontSize: '1rem', color: 'var(--text-primary)', fontWeight: 600 }}>
                  {data.profile.location}
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginTop: '0.15rem' }}>
                  Cantera Ania SA
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', padding: '2.5rem' }}>
            {sent ? (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem', minHeight: '340px', textAlign: 'center' }}>
                <CheckCircle size={48} style={{ color: 'var(--accent)' }} />
                <h4 style={{ textTransform: 'uppercase', letterSpacing: '0.05em' }}>¡Mensaje enviado!</h4>
                <p style={{ fontSize: '0.9rem', maxWidth: '280px' }}>
                  Gracias por escribirme. Me pondré en contacto contigo lo antes posible.
                </p>
              </div>
            ) : (
              <form onSubmit={handle}>
                <h3 style={{ textTransform: 'uppercase', fontSize: '1.05rem', letterSpacing: '0.05em', marginBottom: '2rem' }}>
                  Solicitar información
                </h3>
                <div className="form-group">
                  <label className="form-label" htmlFor="name">Tu nombre</label>
                  <input id="name" className="form-input" placeholder="Nombre completo" value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))} required />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="phone">Teléfono de contacto</label>
                  <input id="phone" className="form-input" placeholder="6xx xxx xxx" value={form.phone}
                    onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} required />
                </div>
                <div className="form-group" style={{ marginBottom: '2rem' }}>
                  <label className="form-label" htmlFor="msg">¿En qué te puedo ayudar?</label>
                  <textarea id="msg" className="form-textarea" placeholder="Cuéntame el proyecto, el material que necesitas, la superficie aproximada..." value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))} />
                </div>
                <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  <Send size={14} /> Enviar mensaje
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .contact-card:hover { border-color: var(--accent) !important; }
      `}</style>
    </section>
  );
}
