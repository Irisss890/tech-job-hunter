import React from 'react';
import { Search, Zap, Download, RefreshCw } from 'lucide-react';

interface HuntControlPanelProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  isHunting: boolean;
  onTriggerHunt: () => void;
  huntPhaseText: string;
  onExportCSV: () => void;
  filteredCount: number;
}

export const HuntControlPanel: React.FC<HuntControlPanelProps> = ({
  searchQuery,
  onSearchChange,
  isHunting,
  onTriggerHunt,
  huntPhaseText,
  onExportCSV,
  filteredCount
}) => {
  return (
    <div className="glass-panel" style={{ padding: '20px 24px', marginBottom: '24px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
        
        {/* Trigger Hunt Action */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <button 
            className="btn-hunt" 
            onClick={onTriggerHunt}
            disabled={isHunting}
          >
            {isHunting ? (
              <>
                <RefreshCw size={20} className="spin-icon" style={{ animation: 'spin 1s linear infinite' }} />
                <span>{huntPhaseText}</span>
              </>
            ) : (
              <>
                <Zap size={20} />
                <span>HUNT 500+ JOBS</span>
              </>
            )}
          </button>

          <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            Showing <strong style={{ color: 'white' }}>{filteredCount}</strong> results
          </span>
        </div>

        {/* Search Bar and CSV Export */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1, maxWidth: '600px', justifyContent: 'flex-end' }}>
          <div style={{ position: 'relative', width: '100%', maxWidth: '360px' }}>
            <Search 
              size={16} 
              color="var(--text-dim)" 
              style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} 
            />
            <input
              type="text"
              placeholder="Search company, title, skill, or city..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              style={{
                width: '100%',
                background: 'rgba(15, 23, 42, 0.8)',
                border: '1px solid var(--border-glass)',
                borderRadius: 'var(--radius-sm)',
                padding: '10px 14px 10px 40px',
                color: 'var(--text-main)',
                fontSize: '0.85rem',
                outline: 'none',
                transition: 'all 0.15s ease'
              }}
            />
          </div>

          <button 
            className="btn-primary" 
            onClick={onExportCSV}
            title="Download CSV for Google Sheets / Excel import"
            style={{ padding: '10px 18px', whiteSpace: 'nowrap' }}
          >
            <Download size={16} />
            <span>Export Google Sheets CSV</span>
          </button>
        </div>
      </div>
    </div>
  );
};
