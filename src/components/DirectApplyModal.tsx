import React, { useState } from 'react';
import type { JobListing } from '../types/job';
import { X, Copy, Check, ExternalLink, Building2, Search, Globe } from 'lucide-react';

interface DirectApplyModalProps {
  listing: JobListing | null;
  onClose: () => void;
}

export const DirectApplyModal: React.FC<DirectApplyModalProps> = ({ listing, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!listing) return null;

  // Construct official career links & search fallback URLs
  const officialUrl = listing.directApplyLink || `https://${listing.domain}/careers`;
  const googleJobsUrl = `https://www.google.com/search?q=${encodeURIComponent(`${listing.company} ${listing.roleTitle} careers apply ${listing.location}`)}`;
  const linkedinJobsUrl = `https://www.linkedin.com/jobs/search/?keywords=${encodeURIComponent(`${listing.company} ${listing.roleTitle}`)}`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(officialUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.8)',
        backdropFilter: 'blur(8px)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
      }}
    >
      <div 
        className="glass-panel"
        style={{
          width: '100%',
          maxWidth: '560px',
          background: '#0f172a',
          border: '1px solid var(--border-highlight)',
          borderRadius: 'var(--radius-lg)',
          boxShadow: '0 0 40px rgba(6, 182, 212, 0.3)',
          padding: '28px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px'
        }}
      >
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ padding: '10px', borderRadius: '10px', background: 'rgba(6, 182, 212, 0.2)', border: '1px solid rgba(6, 182, 212, 0.4)' }}>
              <ExternalLink size={22} color="#38bdf8" />
            </div>
            <div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'white' }}>Direct Application Portal</h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Official Portal &amp; Verified Apply Options</p>
            </div>
          </div>
          <button onClick={onClose} className="btn-secondary" style={{ padding: '6px 10px' }}>
            <X size={18} />
          </button>
        </div>

        {/* Company & Role Summary */}
        <div className="glass-panel" style={{ padding: '16px', background: 'rgba(15, 23, 42, 0.6)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
            <Building2 size={16} color="var(--primary)" />
            <strong style={{ fontSize: '1rem', color: 'white' }}>{listing.company}</strong>
            <span className="badge-agentic" style={{ fontSize: '0.7rem', padding: '2px 8px', borderRadius: '4px' }}>
              {listing.companyType}
            </span>
          </div>
          <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#38bdf8', marginBottom: '4px' }}>
            {listing.roleTitle}
          </div>
          <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            📍 {listing.location} ({listing.workType}) • 💰 {listing.stipendOrSalary}
          </div>
        </div>

        {/* Option 1: Official Portal Link Box */}
        <div>
          <label style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-main)', display: 'block', marginBottom: '8px' }}>
            1. Official Direct Careers URL:
          </label>
          <div style={{ display: 'flex', gap: '8px' }}>
            <input
              readOnly
              value={officialUrl}
              style={{
                flex: 1,
                background: 'rgba(15, 23, 42, 0.9)',
                border: '1px solid var(--border-glass)',
                borderRadius: 'var(--radius-sm)',
                padding: '10px 14px',
                color: '#38bdf8',
                fontSize: '0.85rem',
                fontFamily: 'var(--font-mono)',
                outline: 'none'
              }}
            />
            <button className="btn-secondary" onClick={handleCopyLink} style={{ padding: '10px 14px' }}>
              {copied ? <Check size={14} color="#34d399" /> : <Copy size={14} />}
              <span style={{ fontSize: '0.8rem' }}>{copied ? 'Copied!' : 'Copy'}</span>
            </button>
          </div>
        </div>

        {/* Primary Action Button */}
        <a
          href={officialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-hunt"
          style={{ width: '100%', justifyContent: 'center', padding: '14px', fontSize: '0.95rem' }}
        >
          <ExternalLink size={18} />
          <span>OPEN OFFICIAL CAREERS PORTAL ↗</span>
        </a>

        {/* Option 2: 1-Click Search Fallbacks */}
        <div style={{ borderTop: '1px solid var(--border-glass)', paddingTop: '16px' }}>
          <label style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-dim)', display: 'block', marginBottom: '10px' }}>
            Instant 1-Click Backup Search Options:
          </label>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            <a
              href={googleJobsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ justifyContent: 'center', padding: '10px', fontSize: '0.8rem' }}
            >
              <Search size={14} color="#38bdf8" />
              <span>Google Jobs ↗</span>
            </a>

            <a
              href={linkedinJobsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ justifyContent: 'center', padding: '10px', fontSize: '0.8rem' }}
            >
              <Globe size={14} color="#60a5fa" />
              <span>LinkedIn Jobs ↗</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
