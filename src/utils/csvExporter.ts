import Papa from 'papaparse';
import type { JobListing } from '../types/job';
import { calculateChance } from './chanceCalculator';

export const exportToGoogleSheetsCSV = (
  listings: JobListing[],
  selectedSkills: string[]
): void => {
  const formattedData = listings.map((item) => {
    const chance = calculateChance(item, selectedSkills);
    return {
      'Company Name': item.company,
      'Industry Category': item.industry,
      'Specialization': item.specialization,
      'Role Title': item.roleTitle,
      'Role Level': item.roleType,
      'Location': item.location,
      'Work Mode': item.workType,
      'Application Mode': item.applyMode,
      'Direct Apply Link': item.directApplyLink || 'N/A (Cold Mail Role)',
      'Cold Email Target': item.coldMailContact ? `${item.coldMailContact.hrTitle} (${item.coldMailContact.contactEmail})` : 'N/A (Direct Apply)',
      'Getting-In Chance %': `${chance.score}% (${chance.tier})`,
      'Stipend / Compensation': item.stipendOrSalary,
      'Selectivity Rating': item.baseSelectivity,
      'Date Posted': item.postedDate
    };
  });

  const csvString = Papa.unparse(formattedData);
  const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', `tech_job_hunter_500plus_export_${new Date().toISOString().slice(0, 10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
