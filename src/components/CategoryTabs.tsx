import React from 'react';
import type { IndustryCategory, Specialization } from '../types/job';
import { Sparkles, Cpu, BarChart3, GraduationCap, Link, Mail, Globe, Flame } from 'lucide-react';

export type RegionFilter = 'All' | 'National' | 'International';

interface CategoryTabsProps {
  activeRegion: RegionFilter;
  onSelectRegion: (region: RegionFilter) => void;
  activeIndustry: IndustryCategory | 'All';
  onSelectIndustry: (ind: IndustryCategory | 'All') => void;
  activeSpecialization: Specialization | 'All' | 'MNC Apprenticeships' | 'Direct Apply' | 'Cold Mail' | 'OG Startups';
  onSelectSpecialization: (spec: any) => void;
  countsByIndustry: Record<string, number>;
  nationalCount: number;
  internationalCount: number;
  ogStartupCount: number;
}

const INDUSTRIES: Array<IndustryCategory | 'All'> = [
  'All',
  'Tech & IT',
  'Automobile & Mobility',
  'Marketing & AdTech',
  'MNC Apprenticeships',
  'FinTech & Banking'
];

export const CategoryTabs: React.FC<CategoryTabsProps> = ({
  activeRegion,
  onSelectRegion,
  activeIndustry,
  onSelectIndustry,
  activeSpecialization,
  onSelectSpecialization,
  countsByIndustry,
  nationalCount,
  internationalCount,
  ogStartupCount
}) => {
  return (
    <div style={{ marginBottom: '24px' }}>
      
      {/* 🌟 TWO BIG OPTIONS: NATIONAL (INDIA) vs INTERNATIONAL (GLOBAL) */}
      <div 
        className="glass-panel" 
        style={{
          padding: '16px 20px',
          marginBottom: '20px',
          background: 'rgba(15, 23, 42, 0.85)',
          border: '1px solid var(--border-highlight)',
          boxShadow: '0 0 20px rgba(99, 102, 241, 0.15)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', marginBottom: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Globe size={18} color="var(--primary)" />
            <strong style={{ fontSize: '0.95rem', color: 'var(--text-main)', letterSpacing: '0.02em' }}>
              CHOOSE REGIONAL SCOPE:
            </strong>
          </div>
          <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
            Switch between National (India) and International (Global) career databases
          </span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '12px' }}>
          
          {/* BIG OPTION 1: NATIONAL (INDIA) */}
          <button
            onClick={() => onSelectRegion('National')}
            style={{
              background: activeRegion === 'National'
                ? 'linear-gradient(135deg, rgba(245, 158, 11, 0.25) 0%, rgba(217, 119, 6, 0.35) 100%)'
                : 'rgba(255, 255, 255, 0.04)',
              color: activeRegion === 'National' ? '#fef08a' : 'var(--text-muted)',
              border: activeRegion === 'National'
                ? '2px solid #f59e0b'
                : '1px solid var(--border-glass)',
              boxShadow: activeRegion === 'National' ? '0 0 20px rgba(245, 158, 11, 0.35)' : 'none',
              borderRadius: 'var(--radius-md)',
              padding: '16px 20px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              transition: 'all 0.2s ease',
              textAlign: 'left'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ fontSize: '1.8rem' }}>🇮🇳</div>
              <div>
                <strong style={{ display: 'block', fontSize: '1.05rem', fontWeight: 800 }}>
                  NATIONAL (INDIA)
                </strong>
                <span style={{ fontSize: '0.78rem', opacity: 0.85 }}>
                  Bengaluru, Hyd, Pune, NCR &amp; MNC India R&amp;D
                </span>
              </div>
            </div>
            <span
              style={{
                background: activeRegion === 'National' ? '#f59e0b' : 'rgba(255,255,255,0.08)',
                color: activeRegion === 'National' ? '#0f172a' : 'var(--text-main)',
                fontWeight: 800,
                fontSize: '0.85rem',
                padding: '4px 12px',
                borderRadius: '9999px'
              }}
            >
              {nationalCount} Roles
            </span>
          </button>

          {/* BIG OPTION 2: INTERNATIONAL (GLOBAL) */}
          <button
            onClick={() => onSelectRegion('International')}
            style={{
              background: activeRegion === 'International'
                ? 'linear-gradient(135deg, rgba(6, 182, 212, 0.25) 0%, rgba(59, 130, 246, 0.35) 100%)'
                : 'rgba(255, 255, 255, 0.04)',
              color: activeRegion === 'International' ? '#38bdf8' : 'var(--text-muted)',
              border: activeRegion === 'International'
                ? '2px solid #06b6d4'
                : '1px solid var(--border-glass)',
              boxShadow: activeRegion === 'International' ? '0 0 20px rgba(6, 182, 212, 0.35)' : 'none',
              borderRadius: 'var(--radius-md)',
              padding: '16px 20px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              transition: 'all 0.2s ease',
              textAlign: 'left'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ fontSize: '1.8rem' }}>🌐</div>
              <div>
                <strong style={{ display: 'block', fontSize: '1.05rem', fontWeight: 800 }}>
                  INTERNATIONAL (GLOBAL)
                </strong>
                <span style={{ fontSize: '0.78rem', opacity: 0.85 }}>
                  US, UK, Europe, Remote Global &amp; Worldwide Hubs
                </span>
              </div>
            </div>
            <span
              style={{
                background: activeRegion === 'International' ? '#06b6d4' : 'rgba(255,255,255,0.08)',
                color: activeRegion === 'International' ? '#0f172a' : 'var(--text-main)',
                fontWeight: 800,
                fontSize: '0.85rem',
                padding: '4px 12px',
                borderRadius: '9999px'
              }}
            >
              {internationalCount} Roles
            </span>
          </button>

          {/* OPTION 3: ALL OPPORTUNITIES */}
          <button
            onClick={() => onSelectRegion('All')}
            style={{
              background: activeRegion === 'All'
                ? 'linear-gradient(135deg, rgba(99, 102, 241, 0.25) 0%, rgba(139, 92, 246, 0.35) 100%)'
                : 'rgba(255, 255, 255, 0.04)',
              color: activeRegion === 'All' ? '#a5b4fc' : 'var(--text-muted)',
              border: activeRegion === 'All'
                ? '2px solid #6366f1'
                : '1px solid var(--border-glass)',
              boxShadow: activeRegion === 'All' ? '0 0 20px rgba(99, 102, 241, 0.35)' : 'none',
              borderRadius: 'var(--radius-md)',
              padding: '16px 20px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              transition: 'all 0.2s ease',
              textAlign: 'left'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ fontSize: '1.8rem' }}>✨</div>
              <div>
                <strong style={{ display: 'block', fontSize: '1.05rem', fontWeight: 800 }}>
                  ALL OPPORTUNITIES
                </strong>
                <span style={{ fontSize: '0.78rem', opacity: 0.85 }}>
                  Combined National &amp; International Database
                </span>
              </div>
            </div>
            <span
              style={{
                background: activeRegion === 'All' ? '#6366f1' : 'rgba(255,255,255,0.08)',
                color: activeRegion === 'All' ? '#ffffff' : 'var(--text-main)',
                fontWeight: 800,
                fontSize: '0.85rem',
                padding: '4px 12px',
                borderRadius: '9999px'
              }}
            >
              {nationalCount + internationalCount} Total
            </span>
          </button>

        </div>
      </div>

      {/* Primary Industry Category Tabs */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', overflowX: 'auto', paddingBottom: '8px', borderBottom: '1px solid var(--border-glass)' }}>
        {INDUSTRIES.map((ind) => {
          const isActive = activeIndustry === ind;
          const count = countsByIndustry[ind] || 0;
          return (
            <button
              key={ind}
              onClick={() => onSelectIndustry(ind)}
              style={{
                background: isActive ? 'rgba(99, 102, 241, 0.18)' : 'transparent',
                color: isActive ? '#ffffff' : 'var(--text-muted)',
                border: 'none',
                borderBottom: isActive ? '3px solid #6366f1' : '3px solid transparent',
                padding: '10px 16px',
                fontSize: '0.875rem',
                fontWeight: isActive ? 700 : 500,
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.15s ease'
              }}
            >
              <span>{ind === 'All' ? '🌐 All Industries' : ind}</span>
              <span 
                style={{
                  background: isActive ? 'rgba(99, 102, 241, 0.3)' : 'rgba(255, 255, 255, 0.08)',
                  color: isActive ? '#a5b4fc' : 'var(--text-dim)',
                  borderRadius: '9999px',
                  padding: '2px 8px',
                  fontSize: '0.75rem',
                  fontWeight: 600
                }}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Special Highlight Filter Chips */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '14px', flexWrap: 'wrap' }}>
        <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)', fontWeight: 600 }}>Highlight Filters:</span>

        {/* 🔥 OG Startups Filter Chip */}
        <button
          onClick={() => onSelectSpecialization(activeSpecialization === 'OG Startups' ? 'All' : 'OG Startups')}
          style={{
            background: activeSpecialization === 'OG Startups'
              ? 'linear-gradient(135deg, rgba(239, 68, 68, 0.3) 0%, rgba(245, 158, 11, 0.3) 100%)'
              : 'rgba(239, 68, 68, 0.12)',
            color: '#fca5a5',
            border: '1px solid rgba(239, 68, 68, 0.5)',
            boxShadow: activeSpecialization === 'OG Startups' ? '0 0 16px rgba(239, 68, 68, 0.4)' : undefined,
            padding: '6px 14px',
            borderRadius: '9999px',
            fontSize: '0.8rem',
            fontWeight: 800,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            transition: 'all 0.15s ease'
          }}
        >
          <Flame size={14} color="#fca5a5" />
          🔥 OG Startups ({ogStartupCount})
        </button>

        <button
          onClick={() => onSelectSpecialization(activeSpecialization === 'Agentic AI' ? 'All' : 'Agentic AI')}
          className={activeSpecialization === 'Agentic AI' ? 'badge-agentic' : 'btn-secondary'}
          style={{ padding: '6px 14px', borderRadius: '9999px', fontSize: '0.8rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}
        >
          <Sparkles size={14} color={activeSpecialization === 'Agentic AI' ? '#38bdf8' : 'var(--text-muted)'} />
          ⚡ Agentic AI
        </button>

        <button
          onClick={() => onSelectSpecialization(activeSpecialization === 'Machine Learning' ? 'All' : 'Machine Learning')}
          className={activeSpecialization === 'Machine Learning' ? 'badge-ml' : 'btn-secondary'}
          style={{ padding: '6px 14px', borderRadius: '9999px', fontSize: '0.8rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}
        >
          <Cpu size={14} color={activeSpecialization === 'Machine Learning' ? '#34d399' : 'var(--text-muted)'} />
          🤖 Machine Learning (ML)
        </button>

        <button
          onClick={() => onSelectSpecialization(activeSpecialization === 'Data Analytics' ? 'All' : 'Data Analytics')}
          className={activeSpecialization === 'Data Analytics' ? 'badge-da' : 'btn-secondary'}
          style={{ padding: '6px 14px', borderRadius: '9999px', fontSize: '0.8rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}
        >
          <BarChart3 size={14} color={activeSpecialization === 'Data Analytics' ? '#fbbf24' : 'var(--text-muted)'} />
          📊 Data Analytics (DA)
        </button>

        <button
          onClick={() => onSelectSpecialization(activeSpecialization === 'MNC Apprenticeships' ? 'All' : 'MNC Apprenticeships')}
          className={activeSpecialization === 'MNC Apprenticeships' ? 'badge-mnc' : 'btn-secondary'}
          style={{ padding: '6px 14px', borderRadius: '9999px', fontSize: '0.8rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}
        >
          <GraduationCap size={14} color={activeSpecialization === 'MNC Apprenticeships' ? '#60a5fa' : 'var(--text-muted)'} />
          🎓 MNC Apprenticeships
        </button>

        <button
          onClick={() => onSelectSpecialization(activeSpecialization === 'Direct Apply' ? 'All' : 'Direct Apply')}
          className="btn-secondary"
          style={{
            padding: '6px 14px',
            borderRadius: '9999px',
            fontSize: '0.8rem',
            borderColor: activeSpecialization === 'Direct Apply' ? '#6366f1' : undefined
          }}
        >
          <Link size={14} />
          ↗ Direct Apply Only
        </button>

        <button
          onClick={() => onSelectSpecialization(activeSpecialization === 'Cold Mail' ? 'All' : 'Cold Mail')}
          className="btn-secondary"
          style={{
            padding: '6px 14px',
            borderRadius: '9999px',
            fontSize: '0.8rem',
            borderColor: activeSpecialization === 'Cold Mail' ? '#f59e0b' : undefined
          }}
        >
          <Mail size={14} />
          ✉️ Cold Mail Only
        </button>
      </div>
    </div>
  );
};
