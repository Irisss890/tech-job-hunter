import React from 'react';
import { UserCheck, CheckCircle2, Circle } from 'lucide-react';

interface CandidateProfileProps {
  selectedSkills: string[];
  onToggleSkill: (skill: string) => void;
}

const AVAILABLE_SKILLS = [
  'Python',
  'PyTorch / AI Agents',
  'SQL & Analytics',
  'Agentic AI',
  'React / Frontend',
  'Cloud'
];

export const CandidateProfile: React.FC<CandidateProfileProps> = ({
  selectedSkills,
  onToggleSkill
}) => {
  return (
    <div className="glass-panel" style={{ padding: '16px 24px', marginBottom: '20px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <UserCheck size={18} color="var(--primary)" />
          <span style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-main)' }}>
            Candidate Profile Evaluator:
          </span>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            (Calibrated for Fresher / Internship Background)
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)', marginRight: '4px' }}>Toggle Core Skills:</span>
          {AVAILABLE_SKILLS.map((skill) => {
            const isSelected = selectedSkills.includes(skill);
            return (
              <button
                key={skill}
                onClick={() => onToggleSkill(skill)}
                style={{
                  background: isSelected ? 'rgba(99, 102, 241, 0.2)' : 'rgba(255, 255, 255, 0.04)',
                  color: isSelected ? '#a5b4fc' : 'var(--text-muted)',
                  border: isSelected ? '1px solid rgba(99, 102, 241, 0.5)' : '1px solid var(--border-glass)',
                  borderRadius: '9999px',
                  padding: '5px 12px',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  transition: 'all 0.15s ease'
                }}
              >
                {isSelected ? <CheckCircle2 size={13} color="#a5b4fc" /> : <Circle size={13} color="var(--text-dim)" />}
                {skill}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
