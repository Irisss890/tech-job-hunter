import React from 'react';
import { Target, Sparkles, Briefcase, Award } from 'lucide-react';

interface HeaderProps {
  totalListingsCount: number;
}

export const Header: React.FC<HeaderProps> = ({ totalListingsCount }) => {
  return (
    <header className="glass-panel" style={{ padding: '20px 28px', marginBottom: '24px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div 
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #6366f1 0%, #06b6d4 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 20px rgba(6, 182, 212, 0.4)'
            }}
          >
            <Target size={26} color="#ffffff" />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <h1 style={{ fontSize: '1.6rem', fontWeight: 800, background: 'linear-gradient(90deg, #ffffff, #94a3b8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Tech Job Hunter & Career Base
              </h1>
              <span className="badge-agentic" style={{ padding: '3px 10px', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 700 }}>
                <Sparkles size={12} style={{ display: 'inline', marginRight: '4px' }} />
                AI Agent & 500+ Hub
              </span>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginTop: '4px' }}>
              Multi-industry discovery for Tech, Automobile, Marketing, MNC Apprenticeships & FinTech
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div className="glass-panel" style={{ padding: '8px 16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Briefcase size={16} color="var(--primary)" />
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Database:</span>
            <strong style={{ color: '#38bdf8', fontSize: '0.95rem' }}>{totalListingsCount}+ Active Roles</strong>
          </div>

          <div className="glass-panel" style={{ padding: '8px 16px', display: 'flex', alignItems: 'center', gap: '8px', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
            <Award size={16} color="#34d399" />
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Profile:</span>
            <span style={{ color: '#34d399', fontWeight: 700, fontSize: '0.85rem' }}>Internship Background</span>
          </div>
        </div>
      </div>
    </header>
  );
};
