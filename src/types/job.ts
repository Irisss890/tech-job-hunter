export type IndustryCategory = 
  | 'Tech & IT' 
  | 'Automobile & Mobility' 
  | 'Marketing & AdTech' 
  | 'MNC Apprenticeships' 
  | 'FinTech & Banking';

export type Specialization = 
  | 'Agentic AI' 
  | 'Machine Learning' 
  | 'Data Analytics' 
  | 'Software Engineering' 
  | 'Cloud & DevOps' 
  | 'Cybersecurity';

export type CompanyType = 'MNC / Enterprise' | 'OG Startup' | 'Growth Tech';

export interface ColdMailContact {
  hrTitle: string;
  contactEmail: string;
  suggestedSubject: string;
  emailBodyTemplate: string;
}

export interface JobListing {
  id: string;
  company: string;
  domain: string;
  companyType: CompanyType;
  industry: IndustryCategory;
  specialization: Specialization;
  roleTitle: string;
  roleType: 'Entry-Level' | 'Apprenticeship' | 'Internship' | 'Junior (1-2 YOE)';
  location: string;
  isIndiaRole: boolean;
  isGermanyRole: boolean;
  workType: 'Remote' | 'Hybrid' | 'On-site';
  applyMode: 'Direct Apply' | 'Cold Mail';
  directApplyLink?: string;
  coldMailContact?: ColdMailContact;
  baseSelectivity: 'Accessible' | 'Moderate' | 'High Competition';
  gettingInChanceScore: number; // 0 to 100
  stipendOrSalary: string;
  postedDate: string;
}
