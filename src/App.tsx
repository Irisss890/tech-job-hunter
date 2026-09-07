import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { CandidateProfile } from './components/CandidateProfile';
import { HuntControlPanel } from './components/HuntControlPanel';
import { CategoryTabs } from './components/CategoryTabs';
import type { RegionFilter } from './components/CategoryTabs';
import { SpreadsheetGrid } from './components/SpreadsheetGrid';
import { ColdMailDrawer } from './components/ColdMailDrawer';

import { JOB_DATASET } from './data/jobDataset';
import type { IndustryCategory, Specialization, JobListing } from './types/job';
import { exportToGoogleSheetsCSV } from './utils/csvExporter';

export const App: React.FC = () => {
  const [activeRegion, setActiveRegion] = useState<RegionFilter>('National');
  const [activeCategory, setActiveCategory] = useState<IndustryCategory | 'All'>('All');
  const [activeSpecialization, setActiveSpecialization] = useState<
    Specialization | 'All' | 'MNC Apprenticeships' | 'Direct Apply' | 'Cold Mail' | 'OG Startups'
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
    setHuntPhaseText('Scanning National & OG Startup portals...');

    setTimeout(() => {
      setHuntPhaseText('Filtering Indian & Global tech hubs...');
    }, 800);

    setTimeout(() => {
      setHuntPhaseText('Evaluating Agentic AI & ML admission chances...');
    }, 1600);

    setTimeout(() => {
      setIsHunting(false);
      setHuntPhaseText('HUNT 500+ JOBS');
    }, 2400);
  };

  // Compute counts for National vs International, Industries, and OG Startups
  const { countsByIndustry, nationalCount, internationalCount, ogStartupCount } = useMemo(() => {
    const counts: Record<string, number> = { All: 0 };
    let natCount = 0;
    let intCount = 0;
    let ogCount = 0;

    JOB_DATASET.forEach(item => {
      if (item.isIndiaRole) {
        natCount++;
      } else {
        intCount++;
      }

      if (
        activeRegion === 'All' ||
        (activeRegion === 'National' && item.isIndiaRole) ||
        (activeRegion === 'International' && !item.isIndiaRole)
      ) {
        counts['All'] = (counts['All'] || 0) + 1;
        counts[item.industry] = (counts[item.industry] || 0) + 1;
        if (item.isOGStartup) ogCount++;
      }
    });

    return {
      countsByIndustry: counts,
      nationalCount: natCount,
      internationalCount: intCount,
      ogStartupCount: ogCount
    };
  }, [activeRegion]);

  // Filtered listings computation
  const filteredListings = useMemo(() => {
    const list = JOB_DATASET.filter(item => {
      // 1. REGIONAL SCOPE FILTER (NATIONAL vs INTERNATIONAL)
      if (activeRegion === 'National' && !item.isIndiaRole) {
        return false;
      }
      if (activeRegion === 'International' && item.isIndiaRole) {
        return false;
      }

      // 2. CATEGORY FILTER
      if (activeCategory !== 'All' && item.industry !== activeCategory) {
        return false;
      }

      // 3. SPECIALIZATION & OG STARTUPS FILTER
      if (activeSpecialization !== 'All') {
        if (activeSpecialization === 'OG Startups') {
          if (!item.isOGStartup) return false;
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

      // 4. SEARCH QUERY FILTER
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

    return list;
  }, [activeRegion, activeCategory, activeSpecialization, searchQuery]);

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

      {/* TWO BIG OPTIONS: NATIONAL vs INTERNATIONAL & Category Tabs */}
      <CategoryTabs
        activeRegion={activeRegion}
        onSelectRegion={setActiveRegion}
        activeIndustry={activeCategory}
        onSelectIndustry={setActiveCategory}
        activeSpecialization={activeSpecialization}
        onSelectSpecialization={setActiveSpecialization}
        countsByIndustry={countsByIndustry}
        nationalCount={nationalCount}
        internationalCount={internationalCount}
        ogStartupCount={ogStartupCount}
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
