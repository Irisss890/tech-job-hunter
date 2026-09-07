import type { JobListing, IndustryCategory, Specialization } from '../types/job';

// Generator helper for rich 500+ dataset production
const generate500Listings = (): JobListing[] => {
  const listings: JobListing[] = [];

  const companiesByIndustry: Record<IndustryCategory, Array<{ company: string; domain: string }>> = {
    'Tech & IT': [
      { company: 'Google', domain: 'google.com' },
      { company: 'Microsoft', domain: 'microsoft.com' },
      { company: 'OpenAI', domain: 'openai.com' },
      { company: 'Anthropic', domain: 'anthropic.com' },
      { company: 'Nvidia', domain: 'nvidia.com' },
      { company: 'Meta', domain: 'meta.com' },
      { company: 'Adobe', domain: 'adobe.com' },
      { company: 'Apple', domain: 'apple.com' },
      { company: 'Amazon Web Services', domain: 'aws.amazon.com' },
      { company: 'Spotify', domain: 'spotify.com' },
      { company: 'Uber Technologies', domain: 'uber.com' },
      { company: 'Palantir', domain: 'palantir.com' },
      { company: 'Databricks', domain: 'databricks.com' },
      { company: 'Snowflake', domain: 'snowflake.com' },
      { company: 'Scale AI', domain: 'scale.com' },
      { company: 'Cohere', domain: 'cohere.com' },
      { company: 'Mistral AI', domain: 'mistral.ai' },
      { company: 'Atlassian', domain: 'atlassian.com' },
      { company: 'Salesforce', domain: 'salesforce.com' },
      { company: 'Oracle', domain: 'oracle.com' }
    ],
    'Automobile & Mobility': [
      { company: 'Tesla', domain: 'tesla.com' },
      { company: 'BMW Group', domain: 'bmwgroup.com' },
      { company: 'Mercedes-Benz Tech', domain: 'mercedes-benz.com' },
      { company: 'Ford Motor Co.', domain: 'ford.com' },
      { company: 'Robert Bosch', domain: 'bosch.com' },
      { company: 'Siemens Mobility', domain: 'siemens.com' },
      { company: 'Volvo Autonomous Solutions', domain: 'volvo.com' },
      { company: 'Rivian Automotive', domain: 'rivian.com' },
      { company: 'Lucid Motors', domain: 'lucidmotors.com' },
      { company: 'Waymo Autonomous Driving', domain: 'waymo.com' },
      { company: 'Cruise AI Mobility', domain: 'getcruise.com' },
      { company: 'Porsche Digital', domain: 'porsche.digital' },
      { company: 'Audi AG Software', domain: 'audi.com' },
      { company: 'Hyundai Motor Group AI', domain: 'hyundai.com' },
      { company: 'Toyota Research Institute', domain: 'tri.global' }
    ],
    'Marketing & AdTech': [
      { company: 'Adobe Experience Cloud', domain: 'adobe.com' },
      { company: 'Ogilvy Growth & Tech', domain: 'ogilvy.com' },
      { company: 'HubSpot', domain: 'hubspot.com' },
      { company: 'Publicis Sapient', domain: 'publicissapient.com' },
      { company: 'WPP Digital Analytics', domain: 'wpp.com' },
      { company: 'ByteDance Ads Tech', domain: 'bytedance.com' },
      { company: 'Trade Desk', domain: 'thetradedesk.com' },
      { company: 'Klaviyo', domain: 'klaviyo.com' },
      { company: 'Criteo AI', domain: 'criteo.com' },
      { company: 'Braze', domain: 'braze.com' },
      { company: 'Dentsu International', domain: 'dentsu.com' },
      { company: 'Omnicom Media Group', domain: 'omnicomgroup.com' }
    ],
    'MNC Apprenticeships': [
      { company: 'Google STEP & Apprenticeships', domain: 'buildyourfuture.withgoogle.com' },
      { company: 'Microsoft LEAP Apprenticeship', domain: 'microsoft.com/leap' },
      { company: 'IBM Technical Apprenticeship', domain: 'ibm.com' },
      { company: 'Amazon Technical Apprenticeship', domain: 'amazon.jobs' },
      { company: 'BMW Tech Academy', domain: 'bmwgroup.jobs' },
      { company: 'Bosch Graduate & Apprentice Program', domain: 'bosch.com' },
      { company: 'Siemens Tech Apprentice', domain: 'siemens.com' },
      { company: 'Apple AI & Hardware Apprenticeship', domain: 'apple.com/careers' },
      { company: 'Meta University & Apprenticeship', domain: 'metacareers.com' },
      { company: 'Cisco Apprentice Network', domain: 'cisco.com' },
      { company: 'Intel Early Career & Apprentice', domain: 'intel.com' },
      { company: 'SAP Software Apprenticeship', domain: 'sap.com' }
    ],
    'FinTech & Banking': [
      { company: 'Stripe Engine', domain: 'stripe.com' },
      { company: 'Goldman Sachs Tech', domain: 'goldmansachs.com' },
      { company: 'JPMorgan Chase AI Lab', domain: 'jpmorganchase.com' },
      { company: 'Bloomberg LP Tech', domain: 'bloomberg.com' },
      { company: 'Revolut', domain: 'revolut.com' },
      { company: 'PayPal Engineering', domain: 'paypal.com' },
      { company: 'Plaid', domain: 'plaid.com' },
      { company: 'Brex Tech', domain: 'brex.com' },
      { company: 'Robinhood Tech', domain: 'robinhood.com' },
      { company: 'Square / Block', domain: 'block.xyz' },
      { company: 'Morgan Stanley AI Tech', domain: 'morganstanley.com' },
      { company: 'Visa Data Labs', domain: 'visa.com' }
    ]
  };

  const roleTemplates: Array<{
    specialization: Specialization;
    titles: string[];
    applyType: 'Direct Apply' | 'Cold Mail';
    selectivity: 'Accessible' | 'Moderate' | 'High Competition';
    baseChance: number;
    stipend: string;
  }> = [
    {
      specialization: 'Agentic AI',
      titles: [
        'Agentic AI Systems Associate',
        'LLM & Multi-Agent Workflow Developer',
        'AI Agent Tool Integration Engineer',
        'Autonomous Agent Research Apprentice',
        'AI Agent Operations Specialist'
      ],
      applyType: 'Direct Apply',
      selectivity: 'High Competition',
      baseChance: 68,
      stipend: '$6,500 - $9,500 / mo'
    },
    {
      specialization: 'Agentic AI',
      titles: [
        'Junior AI Agent Developer',
        'Agentic Workflow Automation Intern',
        'Prompt Engineering & Agent Architect',
        'AI Agent Solutions Fellow'
      ],
      applyType: 'Cold Mail',
      selectivity: 'Moderate',
      baseChance: 78,
      stipend: '$5,000 - $7,500 / mo'
    },
    {
      specialization: 'Machine Learning',
      titles: [
        'Machine Learning Research Intern',
        'Computer Vision Software Associate',
        'NLP & Deep Learning Apprentice',
        'ML Infrastructure Engineer',
        'Applied ML Early Career Developer'
      ],
      applyType: 'Direct Apply',
      selectivity: 'High Competition',
      baseChance: 65,
      stipend: '$6,000 - $9,000 / mo'
    },
    {
      specialization: 'Machine Learning',
      titles: [
        'Junior ML Engineer',
        'Model Evaluation & Fine-Tuning Intern',
        'PyTorch ML Developer Apprentice',
        'AI/ML Innovation Fellow'
      ],
      applyType: 'Cold Mail',
      selectivity: 'Moderate',
      baseChance: 76,
      stipend: '$4,800 - $7,000 / mo'
    },
    {
      specialization: 'Data Analytics',
      titles: [
        'Data Analytics Apprentice',
        'Product Analytics Associate',
        'Business Intelligence & SQL Analyst',
        'Growth Analytics Intern',
        'Data Science & Analytics Fellow'
      ],
      applyType: 'Direct Apply',
      selectivity: 'Accessible',
      baseChance: 85,
      stipend: '$4,500 - $6,500 / mo'
    },
    {
      specialization: 'Data Analytics',
      titles: [
        'Junior Data Analyst',
        'Marketing Data Analytics Associate',
        'Telemetry & Dashboard Specialist',
        'Analytics & Insights Trainee'
      ],
      applyType: 'Cold Mail',
      selectivity: 'Accessible',
      baseChance: 88,
      stipend: '$4,000 - $6,000 / mo'
    },
    {
      specialization: 'Software Engineering',
      titles: [
        'Software Engineering Apprentice',
        'Full Stack Software Developer Intern',
        'Backend Systems Associate',
        'Frontend UI/UX Systems Developer',
        'Early Career Software Engineer'
      ],
      applyType: 'Direct Apply',
      selectivity: 'Moderate',
      baseChance: 74,
      stipend: '$5,000 - $8,000 / mo'
    },
    {
      specialization: 'Cloud & DevOps',
      titles: [
        'Cloud Infrastructure Apprentice',
        'DevOps & Automation Associate',
        'Site Reliability Engineering Intern',
        'Kubernetes & Cloud Systems Trainee'
      ],
      applyType: 'Direct Apply',
      selectivity: 'Moderate',
      baseChance: 72,
      stipend: '$5,200 - $7,800 / mo'
    },
    {
      specialization: 'Cybersecurity',
      titles: [
        'Cybersecurity Operations Apprentice',
        'Application Security Associate',
        'Threat Analytics & Intelligence Intern'
      ],
      applyType: 'Cold Mail',
      selectivity: 'Moderate',
      baseChance: 75,
      stipend: '$4,800 - $7,200 / mo'
    }
  ];

  const locations = [
    'Remote (US / Global)',
    'Hybrid - San Francisco, CA',
    'Hybrid - New York, NY',
    'Hybrid - Seattle, WA',
    'Hybrid - Austin, TX',
    'Hybrid - Munich, Germany',
    'Hybrid - London, UK',
    'Hybrid - Bangalore, India',
    'Hybrid - Boston, MA',
    'Hybrid - Toronto, Canada'
  ];

  const hrContacts: Array<{ title: string; emailSuffix: string }> = [
    { title: 'University Relations & Early Talent Recruiter', emailSuffix: 'careers' },
    { title: 'Head of Tech Talent Acquisition', emailSuffix: 'talent' },
    { title: 'Engineering Hiring Manager', emailSuffix: 'engineering' },
    { title: 'AI & Data Apprenticeship Coordinator', emailSuffix: 'apprenticeship' }
  ];

  let idCounter = 1;

  // Loop through industries to construct 520 distinct listings
  const industries: IndustryCategory[] = [
    'Tech & IT',
    'Automobile & Mobility',
    'Marketing & AdTech',
    'MNC Apprenticeships',
    'FinTech & Banking'
  ];

  // Generate iterations until 520 items reached
  for (let cycle = 0; cycle < 11; cycle++) {
    for (const ind of industries) {
      const companyList = companiesByIndustry[ind];
      for (const compObj of companyList) {
        if (listings.length >= 520) break;

        const roleTmpl = roleTemplates[(idCounter + cycle) % roleTemplates.length];
        const title = roleTmpl.titles[(idCounter + cycle) % roleTmpl.titles.length];
        const location = locations[(idCounter + cycle) % locations.length];
        const hrObj = hrContacts[(idCounter + cycle) % hrContacts.length];

        const isDirect = roleTmpl.applyType === 'Direct Apply';
        const hrEmail = `${hrObj.emailSuffix}@${compObj.domain}`;

        // Cold mail template personalized for internship background
        const emailTemplate = `Dear ${hrObj.title} Team at ${compObj.company},\n\nI hope this email finds you well. I am writing to express my enthusiastic interest in early career and apprenticeship opportunities in ${roleTmpl.specialization} (specifically for ${title}).\n\nHaving completed recent technical internship experience working with hands-on projects in Python, ${roleTmpl.specialization === 'Agentic AI' ? 'LLM Agent Frameworks, PyTorch,' : roleTmpl.specialization === 'Data Analytics' ? 'SQL, Pandas, Data Visualization,' : 'Machine Learning, Algorithms,'} and software development, I am eager to contribute to ${compObj.company}'s engineering initiatives.\n\nI have attached my resume for your review and would welcome the opportunity to discuss how my internship background aligns with your team's needs.\n\nBest regards,\n[Your Name]\n[Portfolio / GitHub Link]\n[LinkedIn Profile]`;

        listings.push({
          id: `job-${idCounter}`,
          company: compObj.company,
          domain: compObj.domain,
          industry: ind,
          specialization: roleTmpl.specialization,
          roleTitle: ind === 'MNC Apprenticeships' && !title.includes('Apprentice') ? `${title} (MNC Program)` : title,
          roleType: ind === 'MNC Apprenticeships' ? 'Apprenticeship' : (idCounter % 3 === 0 ? 'Internship' : 'Entry-Level'),
          location: location,
          workType: location.includes('Remote') ? 'Remote' : (idCounter % 2 === 0 ? 'Hybrid' : 'On-site'),
          applyMode: isDirect ? 'Direct Apply' : 'Cold Mail',
          directApplyLink: isDirect ? `https://${compObj.domain}/careers/apply?job=${idCounter}` : undefined,
          coldMailContact: !isDirect ? {
            hrTitle: hrObj.title,
            contactEmail: hrEmail,
            suggestedSubject: `Application / Interest: ${title} - Internship Background`,
            emailBodyTemplate: emailTemplate
          } : undefined,
          baseSelectivity: roleTmpl.selectivity,
          gettingInChanceScore: Math.min(96, Math.max(45, roleTmpl.baseChance + ((idCounter % 7) - 3))),
          stipendOrSalary: roleTmpl.stipend,
          postedDate: (idCounter % 5 === 0) ? 'Today' : `${(idCounter % 4) + 1} days ago`
        });

        idCounter++;
      }
    }
  }

  return listings;
};

export const JOB_DATASET: JobListing[] = generate500Listings();
