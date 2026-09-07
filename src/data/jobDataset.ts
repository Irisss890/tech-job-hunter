import type { JobListing, IndustryCategory, Specialization, CompanyType } from '../types/job';

const getOfficialCareersUrl = (company: string, domain: string): string => {
  const compLower = company.toLowerCase();
  if (compLower.includes('google')) return 'https://buildyourfuture.withgoogle.com/jobs';
  if (compLower.includes('microsoft')) return 'https://careers.microsoft.com';
  if (compLower.includes('amazon')) return 'https://www.amazon.jobs/en-in';
  if (compLower.includes('openai')) return 'https://openai.com/careers';
  if (compLower.includes('anthropic')) return 'https://www.anthropic.com/careers';
  if (compLower.includes('nvidia')) return 'https://www.nvidia.com/en-us/about-nvidia/careers/';
  if (compLower.includes('adobe')) return 'https://www.adobe.com/careers.html';
  if (compLower.includes('postman')) return 'https://www.postman.com/careers/';
  if (compLower.includes('browserstack')) return 'https://www.browserstack.com/careers';
  if (compLower.includes('hasura')) return 'https://hasura.io/careers/';
  if (compLower.includes('freshworks')) return 'https://www.freshworks.com/careers/';
  if (compLower.includes('zoho')) return 'https://www.zoho.com/careers/';
  if (compLower.includes('swiggy')) return 'https://careers.swiggy.com/';
  if (compLower.includes('zomato')) return 'https://www.zomato.com/careers';
  if (compLower.includes('flipkart')) return 'https://www.flipkartcareers.com/';
  if (compLower.includes('razorpay')) return 'https://razorpay.com/jobs/';
  if (compLower.includes('cred')) return 'https://cred.club/careers';
  if (compLower.includes('phonepe')) return 'https://www.phonepe.com/careers/';
  if (compLower.includes('zerodha')) return 'https://zerodha.com/careers';
  if (compLower.includes('groww')) return 'https://groww.in/careers';
  if (compLower.includes('tata motors')) return 'https://www.tatamotors.com/careers/';
  if (compLower.includes('mercedes') || compLower.includes('mbrdi')) return 'https://mbrdi.mercedes-benz.com/careers/';
  if (compLower.includes('bmw')) return 'https://www.bmwgroup.jobs';
  if (compLower.includes('bosch')) return 'https://www.bosch.in/careers/';
  if (compLower.includes('uber')) return 'https://www.uber.com/us/en/careers/';
  if (compLower.includes('spotify')) return 'https://www.lifeatspotify.com/';
  if (compLower.includes('stripe')) return 'https://stripe.com/jobs';
  if (compLower.includes('goldman')) return 'https://www.goldmansachs.com/careers/';
  if (compLower.includes('jpmorgan')) return 'https://careers.jpmorganchase.com/';

  return `https://${domain}/careers`;
};

const generate500Listings = (): JobListing[] => {
  const listings: JobListing[] = [];

  const companiesByIndustry: Record<IndustryCategory, Array<{ company: string; domain: string; companyType: CompanyType; isIndianCompany?: boolean }>> = {
    'Tech & IT': [
      // MNC Giants
      { company: 'Google India', domain: 'google.co.in', companyType: 'MNC / Enterprise', isIndianCompany: true },
      { company: 'Microsoft India', domain: 'microsoft.com', companyType: 'MNC / Enterprise', isIndianCompany: true },
      { company: 'Amazon India Tech', domain: 'amazon.jobs', companyType: 'MNC / Enterprise', isIndianCompany: true },
      { company: 'Nvidia India R&D', domain: 'nvidia.com', companyType: 'MNC / Enterprise', isIndianCompany: true },
      { company: 'Adobe India', domain: 'adobe.com', companyType: 'MNC / Enterprise', isIndianCompany: true },
      { company: 'Oracle India', domain: 'oracle.com', companyType: 'MNC / Enterprise', isIndianCompany: true },

      // OG Startups
      { company: 'Postman', domain: 'postman.com', companyType: 'OG Startup', isIndianCompany: true },
      { company: 'BrowserStack', domain: 'browserstack.com', companyType: 'OG Startup', isIndianCompany: true },
      { company: 'Hasura AI', domain: 'hasura.io', companyType: 'OG Startup', isIndianCompany: true },
      { company: 'Freshworks Tech', domain: 'freshworks.com', companyType: 'OG Startup', isIndianCompany: true },
      { company: 'Zoho Corporation', domain: 'zoho.com', companyType: 'OG Startup', isIndianCompany: true },
      { company: 'Swiggy AI Labs', domain: 'swiggy.com', companyType: 'OG Startup', isIndianCompany: true },
      { company: 'Zomato AI & Data', domain: 'zomato.com', companyType: 'OG Startup', isIndianCompany: true },
      { company: 'Flipkart Engineering', domain: 'flipkart.com', companyType: 'OG Startup', isIndianCompany: true },
      { company: 'CRED Engineering', domain: 'cred.club', companyType: 'OG Startup', isIndianCompany: true },
      { company: 'OpenAI', domain: 'openai.com', companyType: 'OG Startup' },
      { company: 'Anthropic AI', domain: 'anthropic.com', companyType: 'OG Startup' },
      { company: 'Scale AI', domain: 'scale.com', companyType: 'OG Startup' },
      { company: 'Vercel', domain: 'vercel.com', companyType: 'OG Startup' },
      { company: 'Supabase', domain: 'supabase.com', companyType: 'OG Startup' },
      { company: 'Perplexity AI', domain: 'perplexity.ai', companyType: 'OG Startup' },

      // Growth Tech
      { company: 'Persistent Systems', domain: 'persistent.com', companyType: 'Growth Tech', isIndianCompany: true },
      { company: 'LTI Mindtree AI', domain: 'ltimindtree.com', companyType: 'Growth Tech', isIndianCompany: true }
    ],
    'Automobile & Mobility': [
      { company: 'Mercedes-Benz R&D India (MBRDI)', domain: 'mbrdi.mercedes-benz.com', companyType: 'MNC / Enterprise', isIndianCompany: true },
      { company: 'BMW TechWorks India', domain: 'bmwgroup.jobs', companyType: 'MNC / Enterprise', isIndianCompany: true },
      { company: 'Robert Bosch India (RBAI)', domain: 'bosch.in', companyType: 'MNC / Enterprise', isIndianCompany: true },
      { company: 'Tata Motors EV & AI', domain: 'tatamotors.com', companyType: 'MNC / Enterprise', isIndianCompany: true },
      { company: 'Mahindra Tech & Mobility', domain: 'mahindra.com', companyType: 'MNC / Enterprise', isIndianCompany: true },
      { company: 'Ather Energy AI', domain: 'atherenergy.com', companyType: 'OG Startup', isIndianCompany: true },
      { company: 'Ola Electric Mobility', domain: 'olaelectric.com', companyType: 'OG Startup', isIndianCompany: true },
      { company: 'Tesla Tech', domain: 'tesla.com', companyType: 'MNC / Enterprise' }
    ],
    'Marketing & AdTech': [
      { company: 'Adobe Experience India', domain: 'adobe.com', companyType: 'MNC / Enterprise', isIndianCompany: true },
      { company: 'Ogilvy India Digital', domain: 'ogilvy.in', companyType: 'MNC / Enterprise', isIndianCompany: true },
      { company: 'CleverTap Analytics', domain: 'clevertap.com', companyType: 'OG Startup', isIndianCompany: true },
      { company: 'WebEngage Growth Tech', domain: 'webengage.com', companyType: 'OG Startup', isIndianCompany: true },
      { company: 'InMobi AdTech', domain: 'inmobi.com', companyType: 'Growth Tech', isIndianCompany: true }
    ],
    'MNC Apprenticeships': [
      { company: 'Google STEP & Apprentice (India)', domain: 'buildyourfuture.withgoogle.com', companyType: 'MNC / Enterprise', isIndianCompany: true },
      { company: 'Microsoft LEAP India', domain: 'microsoft.com', companyType: 'MNC / Enterprise', isIndianCompany: true },
      { company: 'Amazon Technical Apprentice India', domain: 'amazon.jobs', companyType: 'MNC / Enterprise', isIndianCompany: true },
      { company: 'IBM Technical Apprenticeship India', domain: 'ibm.com', companyType: 'MNC / Enterprise', isIndianCompany: true },
      { company: 'Bosch India Graduate & Apprentice', domain: 'bosch.in', companyType: 'MNC / Enterprise', isIndianCompany: true }
    ],
    'FinTech & Banking': [
      { company: 'Razorpay Engineering', domain: 'razorpay.com', companyType: 'OG Startup', isIndianCompany: true },
      { company: 'PhonePe Tech', domain: 'phonepe.com', companyType: 'OG Startup', isIndianCompany: true },
      { company: 'Zerodha Tech', domain: 'zerodha.com', companyType: 'OG Startup', isIndianCompany: true },
      { company: 'Groww Tech Labs', domain: 'groww.in', companyType: 'OG Startup', isIndianCompany: true },
      { company: 'Goldman Sachs India (Bengaluru)', domain: 'goldmansachs.com', companyType: 'MNC / Enterprise', isIndianCompany: true },
      { company: 'JPMorgan Chase India (Bengaluru/Hyd)', domain: 'jpmorganchase.com', companyType: 'MNC / Enterprise', isIndianCompany: true }
    ]
  };

  const roleTemplates: Array<{
    specialization: Specialization;
    titles: string[];
    applyType: 'Direct Apply' | 'Cold Mail';
    selectivity: 'Accessible' | 'Moderate' | 'High Competition';
    baseChance: number;
    stipendIndia: string;
    stipendGlobal: string;
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
      baseChance: 75,
      stipendIndia: '₹50,000 - ₹90,000 / mo',
      stipendGlobal: '$6,500 - $9,500 / mo'
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
      baseChance: 84,
      stipendIndia: '₹40,000 - ₹70,000 / mo',
      stipendGlobal: '$5,000 - $7,500 / mo'
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
      baseChance: 72,
      stipendIndia: '₹45,000 - ₹80,000 / mo',
      stipendGlobal: '$6,000 - $9,000 / mo'
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
      baseChance: 80,
      stipendIndia: '₹35,000 - ₹65,000 / mo',
      stipendGlobal: '$4,800 - $7,000 / mo'
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
      baseChance: 89,
      stipendIndia: '₹35,000 - ₹60,000 / mo',
      stipendGlobal: '$4,500 - $6,500 / mo'
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
      baseChance: 92,
      stipendIndia: '₹30,000 - ₹55,000 / mo',
      stipendGlobal: '$4,000 - $6,000 / mo'
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
      baseChance: 80,
      stipendIndia: '₹40,000 - ₹75,000 / mo',
      stipendGlobal: '$5,000 - $8,000 / mo'
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
      baseChance: 78,
      stipendIndia: '₹38,000 - ₹70,000 / mo',
      stipendGlobal: '$5,200 - $7,800 / mo'
    }
  ];

  const indianLocations = [
    'Bengaluru (Bangalore), KA 🇮🇳',
    'Hyderabad, TS 🇮🇳',
    'Pune, MH 🇮🇳',
    'Gurugram (Gurgaon) / NCR 🇮🇳',
    'Noida / Delhi NCR 🇮🇳',
    'Mumbai, MH 🇮🇳',
    'Chennai, TN 🇮🇳',
    'Remote (India) 🇮🇳'
  ];

  const globalLocations = [
    'Remote (US / Global)',
    'Hybrid - San Francisco, CA',
    'Hybrid - London, UK',
    'Hybrid - Munich, Germany'
  ];

  const hrContacts: Array<{ title: string; emailSuffix: string }> = [
    { title: 'Talent Acquisition & Early Career Lead', emailSuffix: 'careers' },
    { title: 'Head of Tech Recruiting', emailSuffix: 'talent' },
    { title: 'Engineering Hiring Manager', emailSuffix: 'engineering' },
    { title: 'AI & Data Apprentice Program Lead', emailSuffix: 'earlycareer' }
  ];

  let idCounter = 1;

  const industries: IndustryCategory[] = [
    'Tech & IT',
    'Automobile & Mobility',
    'Marketing & AdTech',
    'MNC Apprenticeships',
    'FinTech & Banking'
  ];

  for (let cycle = 0; cycle < 14; cycle++) {
    for (const ind of industries) {
      const companyList = companiesByIndustry[ind];
      for (const compObj of companyList) {
        if (listings.length >= 530) break;

        const roleTmpl = roleTemplates[(idCounter + cycle) % roleTemplates.length];
        const title = roleTmpl.titles[(idCounter + cycle) % roleTmpl.titles.length];

        const isIndia = (idCounter % 4 !== 0) || compObj.isIndianCompany || compObj.company.includes('India');
        const location = isIndia 
          ? indianLocations[(idCounter + cycle) % indianLocations.length]
          : globalLocations[(idCounter + cycle) % globalLocations.length];

        const hrObj = hrContacts[(idCounter + cycle) % hrContacts.length];
        const isDirect = roleTmpl.applyType === 'Direct Apply';
        const cleanDomain = compObj.domain.replace('/en-in', '').replace('/in', '');
        const hrEmail = `${hrObj.emailSuffix}@${cleanDomain}`;

        const directLink = getOfficialCareersUrl(compObj.company, compObj.domain);

        const emailTemplate = `Dear ${hrObj.title} Team at ${compObj.company},\n\nI hope this email finds you well. I am writing to express my enthusiastic interest in early career and apprenticeship opportunities in ${roleTmpl.specialization} (specifically for ${title} based in ${location}).\n\nHaving completed recent technical internship experience working with hands-on projects in Python, ${roleTmpl.specialization === 'Agentic AI' ? 'LLM Agent Frameworks, PyTorch,' : roleTmpl.specialization === 'Data Analytics' ? 'SQL, Pandas, Data Visualization,' : 'Machine Learning, Algorithms,'} and software development, I am eager to contribute to ${compObj.company}'s engineering initiatives.\n\nI have attached my resume for your review and would welcome the opportunity to discuss how my internship background aligns with your team's goals.\n\nBest regards,\n[Your Name]\n[Portfolio / GitHub Link]\n[LinkedIn Profile]`;

        listings.push({
          id: `job-${idCounter}`,
          company: compObj.company,
          domain: compObj.domain,
          companyType: compObj.companyType,
          industry: ind,
          specialization: roleTmpl.specialization,
          roleTitle: ind === 'MNC Apprenticeships' && !title.includes('Apprentice') ? `${title} (MNC Program)` : title,
          roleType: ind === 'MNC Apprenticeships' ? 'Apprenticeship' : (idCounter % 3 === 0 ? 'Internship' : 'Entry-Level'),
          location: location,
          isIndiaRole: isIndia,
          workType: location.includes('Remote') ? 'Remote' : (idCounter % 2 === 0 ? 'Hybrid' : 'On-site'),
          applyMode: isDirect ? 'Direct Apply' : 'Cold Mail',
          directApplyLink: directLink,
          coldMailContact: !isDirect ? {
            hrTitle: hrObj.title,
            contactEmail: hrEmail,
            suggestedSubject: `Application / Interest: ${title} (${location}) - Internship Background`,
            emailBodyTemplate: emailTemplate
          } : undefined,
          baseSelectivity: roleTmpl.selectivity,
          gettingInChanceScore: isIndia ? Math.min(98, Math.max(50, roleTmpl.baseChance + 6)) : roleTmpl.baseChance,
          stipendOrSalary: isIndia ? roleTmpl.stipendIndia : roleTmpl.stipendGlobal,
          postedDate: (idCounter % 5 === 0) ? 'Today' : `${(idCounter % 4) + 1} days ago`
        });

        idCounter++;
      }
    }
  }

  return listings;
};

export const JOB_DATASET: JobListing[] = generate500Listings();
