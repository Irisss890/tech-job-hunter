import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { CandidateProfile } from './components/CandidateProfile';
import { HuntControlPanel } from './components/HuntControlPanel';
import { CategoryTabs } from './components/CategoryTabs';
import { SpreadsheetGrid } from './components/SpreadsheetGrid';
import { ColdMailDrawer } from './components/ColdMailDrawer';

import { JOB_DATASET } from './data/jobDataset';
import type { IndustryCategory, Specialization, JobListing } from './types/job';
import { exportToGoogleSheetsCSV } from './utils/csvExporter';

export const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<IndustryCategory | 'All'>('All');
  const [activeSpecialization, setActiveSpecialization] = useState<
    Specialization | 'All' | 'MNC Apprenticeships' | 'Direct Apply' | 'Cold Mail' | 'India Only'
  >('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedSkills, setSelectedSkills] = useState<string[]>([
    'Python',
    'PyTorch / AI Agents',
    'SQL & Analytics'
  ]);
  const [isHunting, setIsHunting] = useState<boolean>(false);
  const [huntPhaseText, setHuntPhaseText] = useState<string>('HUNT 500+ JOBS');
  const [coldMailListing, setColdMailListing] = useState<JobListing | null>(null);

  // Skill toggle handler
  const handleToggleSkill = (skill: string) => {
    setSelectedSkills(prev =>
      prev.includes(skill) ? prev.filter(s => s !== skill) : [...prev, skill]
    );
  };

  // Trigger Hunt scanner effect
  const handleTriggerHunt = () => {
    setIsHunting(true);
    setHuntPhaseText('Scanning Indian & Global portals...');

    setTimeout(() => {
      setHuntPhaseText('Prioritizing Bengaluru, Hyd & NCR roles...');
    }, 800);

    setTimeout(() => {
      setHuntPhaseText('Evaluating Agentic AI & ML admission chances...');
    }, 1600);

    setTimeout(() => {
      setIsHunting(false);
      setHuntPhaseText('HUNT 500+ JOBS');
    }, 2400);
  };

  // Industry count computation & India count
  const { countsByIndustry, indiaCount } = useMemo(() => {
    const counts: Record<string, number> = { All: JOB_DATASET.length };
    let countIn = 0;
    JOB_DATASET.forEach(item => {
      counts[item.industry] = (counts[item.industry] || 0) + 1;
      if (item.isIndiaRole) countIn++;
    });
    return { countsByIndustry: counts, indiaCount: countIn };
  }, []);

  // Filtered listings computation prioritizing Indian roles
  const filteredListings = useMemo(() => {
    const list = JOB_DATASET.filter(item => {
      // Category filter
      if (activeCategory !== 'All' && item.industry !== activeCategory) {
        return false;
      }

      // Specialization / Highlight filter
      if (activeSpecialization !== 'All') {
        if (activeSpecialization === 'India Only') {
          if (!item.isIndiaRole) return false;
        } else if (activeSpecialization === 'MNC Apprenticeships') {
          if (item.industry !== 'MNC Apprenticeships') return false;
        } else if (activeSpecialization === 'Direct Apply') {
          if (item.applyMode !== 'Direct Apply') return false;
        } else if (activeSpecialization === 'Cold Mail') {
          if (item.applyMode !== 'Cold Mail') return false;
        } else {
          if (item.specialization !== activeSpecialization) return false;
        }
      }

      // Search Query filter
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchesComp = item.company.toLowerCase().includes(q);
        const matchesTitle = item.roleTitle.toLowerCase().includes(q);
        const matchesSpec = item.specialization.toLowerCase().includes(q);
        const matchesLocation = item.location.toLowerCase().includes(q);
        const matchesInd = item.industry.toLowerCase().includes(q);
        return matchesComp || matchesTitle || matchesSpec || matchesLocation || matchesInd;
      }

      return true;
    });

    // Prioritize Indian roles at top when sorting
    return list.sort((a, b) => {
      if (a.isIndiaRole && !b.isIndiaRole) return -1;
      if (!a.isIndiaRole && b.isIndiaRole) return 1;
      return 0;
    });
  }, [activeCategory, activeSpecialization, searchQuery]);

  // Export CSV handler
  const handleExportCSV = () => {
    exportToGoogleSheetsCSV(filteredListings, selectedSkills);
  };

  return (
    <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '24px 20px 60px 20px' }}>
      {/* Header */}
      <Header totalListingsCount={JOB_DATASET.length} />

      {/* Candidate Profile Bar */}
      <CandidateProfile
        selectedSkills={selectedSkills}
        onToggleSkill={handleToggleSkill}
      />

      {/* Hunt Control Panel */}
      <HuntControlPanel
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        isHunting={isHunting}
        onTriggerHunt={handleTriggerHunt}
        huntPhaseText={huntPhaseText}
        onExportCSV={handleExportCSV}
        filteredCount={filteredListings.length}
      />

      {/* Category Tabs & Specialization Chips */}
      <CategoryTabs
        activeIndustry={activeCategory}
        onSelectIndustry={setActiveCategory}
        activeSpecialization={activeSpecialization}
        onSelectSpecialization={setActiveSpecialization}
        countsByIndustry={countsByIndustry}
        indiaCount={indiaCount}
      />

      {/* Interactive Spreadsheet Data Grid */}
      <SpreadsheetGrid
        listings={filteredListings}
        selectedSkills={selectedSkills}
        onOpenColdMail={setColdMailListing}
      />

      {/* Cold Mail Drawer */}
      <ColdMailDrawer
        listing={coldMailListing}
        onClose={() => setColdMailListing(null)}
      />
    </div>
  );
};

export default App;
