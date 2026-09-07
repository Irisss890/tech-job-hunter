import React, { useState } from 'react';
import type { JobListing } from '../types/job';
import { X, Copy, Check, Mail, Building, User, Award, ExternalLink } from 'lucide-react';

interface ColdMailDrawerProps {
  listing: JobListing | null;
  onClose: () => void;
}

export const ColdMailDrawer: React.FC<ColdMailDrawerProps> = ({ listing, onClose }) => {
  const [copiedSubject, setCopiedSubject] = useState(false);
  const [copiedBody, setCopiedBody] = useState(false);

  if (!listing || !listing.coldMailContact) return null;

  const contact = listing.coldMailContact;

  const handleCopySubject = () => {
    navigator.clipboard.writeText(contact.suggestedSubject);
    setCopiedSubject(true);
    setTimeout(() => setCopiedSubject(false), 2000);
  };

  const handleCopyBody = () => {
    navigator.clipboard.writeText(contact.emailBodyTemplate);
    setCopiedBody(true);
    setTimeout(() => setCopiedBody(false), 2000);
  };

  const mailtoUrl = `mailto:${contact.contactEmail}?subject=${encodeURIComponent(contact.suggestedSubject)}&body=${encodeURIComponent(contact.emailBodyTemplate)}`;

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.75)',
        backdropFilter: 'blur(8px)',
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'flex-end'
      }}
    >
      <div 
        className="glass-panel"
        style={{
          width: '100%',
          maxWidth: '540px',
          height: '100%',
          borderRadius: 0,
          borderLeft: '1px solid var(--border-highlight)',
          display: 'flex',
          flexDirection: 'column',
          padding: '24px',
          overflowY: 'auto'
        }}
      >
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ padding: '8px', borderRadius: '8px', background: 'rgba(245, 158, 11, 0.2)', border: '1px solid rgba(245, 158, 11, 0.4)' }}>
              <Mail size={20} color="#fbbf24" />
            </div>
            <div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-main)' }}>Cold Email Generator</h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Direct HR Outreach Strategy</p>
            </div>
          </div>
          <button onClick={onClose} className="btn-secondary" style={{ padding: '6px 10px' }}>
            <X size={18} />
          </button>
        </div>

        {/* Target Info Box */}
        <div className="glass-panel" style={{ padding: '16px', marginBottom: '20px', background: 'rgba(15, 23, 42, 0.6)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
            <Building size={16} color="var(--primary)" />
            <strong style={{ fontSize: '0.95rem', color: 'white' }}>{listing.company}</strong>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', background: 'rgba(255,255,255,0.06)', padding: '2px 8px', borderRadius: '4px' }}>
              {listing.industry}
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
            <User size={14} color="var(--text-dim)" />
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Target: </span>
            <strong style={{ fontSize: '0.85rem', color: '#38bdf8' }}>{contact.hrTitle}</strong>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Mail size={14} color="var(--text-dim)" />
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Email: </span>
            <code style={{ fontSize: '0.85rem', color: '#fbbf24', fontFamily: 'var(--font-mono)' }}>{contact.contactEmail}</code>
          </div>
        </div>

        {/* Profile Alignment Badge */}
        <div className="glass-panel" style={{ padding: '12px 16px', marginBottom: '20px', border: '1px solid rgba(16, 185, 129, 0.3)', background: 'rgba(16, 185, 129, 0.05)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Award size={16} color="#34d399" />
            <span style={{ fontSize: '0.8rem', color: '#34d399', fontWeight: 600 }}>
              Tailored for Candidates with Internship Background
            </span>
          </div>
        </div>

        {/* Subject Field */}
        <div style={{ marginBottom: '18px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
            <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)' }}>Email Subject Line:</label>
            <button className="btn-secondary" onClick={handleCopySubject} style={{ padding: '4px 10px', fontSize: '0.75rem' }}>
              {copiedSubject ? <Check size={12} color="#34d399" /> : <Copy size={12} />}
              <span>{copiedSubject ? 'Copied!' : 'Copy Subject'}</span>
            </button>
          </div>
          <input
            readOnly
            value={contact.suggestedSubject}
            style={{
              width: '100%',
              background: 'rgba(15, 23, 42, 0.9)',
              border: '1px solid var(--border-glass)',
              borderRadius: 'var(--radius-sm)',
              padding: '10px 14px',
              color: 'var(--text-main)',
              fontSize: '0.85rem',
              fontFamily: 'var(--font-sans)',
              outline: 'none'
            }}
          />
        </div>

        {/* Body Field */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', marginBottom: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
            <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)' }}>Tailored Outreach Body:</label>
            <button className="btn-secondary" onClick={handleCopyBody} style={{ padding: '4px 10px', fontSize: '0.75rem' }}>
              {copiedBody ? <Check size={12} color="#34d399" /> : <Copy size={12} />}
              <span>{copiedBody ? 'Copied Body!' : 'Copy Body'}</span>
            </button>
          </div>
          <textarea
            readOnly
            value={contact.emailBodyTemplate}
            style={{
              flex: 1,
              width: '100%',
              minHeight: '220px',
              background: 'rgba(15, 23, 42, 0.9)',
              border: '1px solid var(--border-glass)',
              borderRadius: 'var(--radius-sm)',
              padding: '12px 14px',
              color: 'var(--text-main)',
              fontSize: '0.85rem',
              fontFamily: 'var(--font-mono)',
              lineHeight: 1.5,
              outline: 'none',
              resize: 'none'
            }}
          />
        </div>

        {/* Footer Actions */}
        <div style={{ display: 'flex', gap: '12px' }}>
          <a
            href={mailtoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ flex: 1, justifyContent: 'center', padding: '12px' }}
          >
            <ExternalLink size={16} />
            <span>Launch Email App (mailto)</span>
          </a>

          <button
            className="btn-secondary"
            onClick={() => {
              handleCopySubject();
              handleCopyBody();
            }}
            style={{ padding: '12px 18px' }}
          >
            <Copy size={16} />
            <span>Copy All</span>
          </button>
        </div>
      </div>
    </div>
  );
};
