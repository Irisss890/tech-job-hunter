import React from 'react';
import type { IndustryCategory, Specialization } from '../types/job';
import { Sparkles, Cpu, BarChart3, GraduationCap, Link, Mail, MapPin } from 'lucide-react';

interface CategoryTabsProps {
  activeIndustry: IndustryCategory | 'All';
  onSelectIndustry: (ind: IndustryCategory | 'All') => void;
  activeSpecialization: Specialization | 'All' | 'MNC Apprenticeships' | 'Direct Apply' | 'Cold Mail' | 'India Only';
  onSelectSpecialization: (spec: any) => void;
  countsByIndustry: Record<string, number>;
  indiaCount: number;
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
  activeIndustry,
  onSelectIndustry,
  activeSpecialization,
  onSelectSpecialization,
  countsByIndustry,
  indiaCount
}) => {
  return (
    <div style={{ marginBottom: '24px' }}>
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

        {/* India Roles Filter Chip */}
        <button
          onClick={() => onSelectSpecialization(activeSpecialization === 'India Only' ? 'All' : 'India Only')}
          style={{
            background: activeSpecialization === 'India Only' ? 'rgba(245, 158, 11, 0.25)' : 'rgba(245, 158, 11, 0.12)',
            color: '#fef08a',
            border: '1px solid rgba(245, 158, 11, 0.5)',
            boxShadow: activeSpecialization === 'India Only' ? '0 0 14px rgba(245, 158, 11, 0.4)' : undefined,
            padding: '6px 14px',
            borderRadius: '9999px',
            fontSize: '0.8rem',
            fontWeight: 700,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            transition: 'all 0.15s ease'
          }}
        >
          <MapPin size={14} color="#fef08a" />
          🇮🇳 India Roles Only ({indiaCount})
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
