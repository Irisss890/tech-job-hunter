import type { JobListing } from '../types/job';

export interface ChanceResult {
  score: number;
  tier: 'High' | 'Moderate' | 'Reach';
  label: string;
  badgeClass: string;
}

export const calculateChance = (
  listing: JobListing,
  selectedSkills: string[]
): ChanceResult => {
  let score = listing.gettingInChanceScore;

  // Internship background alignment boost for Apprenticeships & Internships
  if (listing.roleType === 'Apprenticeship' || listing.roleType === 'Internship') {
    score += 8;
  }

  // Skill alignment boost
  const spec = listing.specialization;
  if (spec === 'Agentic AI' && (selectedSkills.includes('Agentic AI') || selectedSkills.includes('PyTorch / AI Agents') || selectedSkills.includes('Python'))) {
    score += 12;
  }
  if (spec === 'Machine Learning' && (selectedSkills.includes('PyTorch / AI Agents') || selectedSkills.includes('Python'))) {
    score += 10;
  }
  if (spec === 'Data Analytics' && (selectedSkills.includes('SQL & Analytics') || selectedSkills.includes('Python'))) {
    score += 12;
  }
  if (spec === 'Software Engineering' && (selectedSkills.includes('React / Frontend') || selectedSkills.includes('Python'))) {
    score += 8;
  }
  if (spec === 'Cloud & DevOps' && selectedSkills.includes('Cloud')) {
    score += 10;
  }

  // Cap between 40% and 98%
  const finalScore = Math.min(98, Math.max(40, Math.round(score)));

  let tier: 'High' | 'Moderate' | 'Reach' = 'Moderate';
  let label = '🟡 Moderate Chance';
  let badgeClass = 'chance-moderate';

  if (finalScore >= 75) {
    tier = 'High';
    label = `🟢 ${finalScore}% High Chance`;
    badgeClass = 'chance-high';
  } else if (finalScore >= 55) {
    tier = 'Moderate';
    label = `🟡 ${finalScore}% Moderate`;
    badgeClass = 'chance-moderate';
  } else {
    tier = 'Reach';
    label = `🔴 ${finalScore}% Reach`;
    badgeClass = 'chance-reach';
  }

  return {
    score: finalScore,
    tier,
    label,
    badgeClass
  };
};
