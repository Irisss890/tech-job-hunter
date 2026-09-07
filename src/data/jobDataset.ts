import type { JobListing, IndustryCategory, Specialization } from '../types/job';

const generate500Listings = (): JobListing[] => {
  const listings: JobListing[] = [];

  const companiesByIndustry: Record<IndustryCategory, Array<{ company: string; domain: string; isIndianCompany?: boolean; isOGStartup?: boolean }>> = {
    'Tech & IT': [
      // Iconic Indian OG Startups
      { company: 'Postman (India / Global)', domain: 'postman.com', isIndianCompany: true, isOGStartup: true },
      { company: 'BrowserStack', domain: 'browserstack.com', isIndianCompany: true, isOGStartup: true },
      { company: 'Hasura AI', domain: 'hasura.io', isIndianCompany: true, isOGStartup: true },
      { company: 'Freshworks Tech', domain: 'freshworks.com', isIndianCompany: true, isOGStartup: true },
      { company: 'Zoho Corporation', domain: 'zoho.com', isIndianCompany: true, isOGStartup: true },
      { company: 'Swiggy AI Labs', domain: 'swiggy.com', isIndianCompany: true, isOGStartup: true },
      { company: 'Zomato AI & Data', domain: 'zomato.com', isIndianCompany: true, isOGStartup: true },
      { company: 'Flipkart Engineering', domain: 'flipkart.com', isIndianCompany: true, isOGStartup: true },
      { company: 'CRED Engineering', domain: 'cred.club', isIndianCompany: true, isOGStartup: true },
      { company: 'InMobi AdTech', domain: 'inmobi.com', isIndianCompany: true, isOGStartup: true },
      { company: 'Meesho Tech', domain: 'meesho.com', isIndianCompany: true, isOGStartup: true },
      { company: 'Urban Company AI', domain: 'urbancompany.com', isIndianCompany: true, isOGStartup: true },

      // Global OG Startups
      { company: 'OpenAI', domain: 'openai.com', isOGStartup: true },
      { company: 'Anthropic AI', domain: 'anthropic.com', isOGStartup: true },
      { company: 'Scale AI', domain: 'scale.com', isOGStartup: true },
      { company: 'Vercel', domain: 'vercel.com', isOGStartup: true },
      { company: 'Supabase', domain: 'supabase.com', isOGStartup: true },
      { company: 'Linear', domain: 'linear.app', isOGStartup: true },
      { company: 'Perplexity AI', domain: 'perplexity.ai', isOGStartup: true },
      { company: 'Midjourney AI', domain: 'midjourney.com', isOGStartup: true },
      { company: 'Hugging Face', domain: 'huggingface.co', isOGStartup: true },
      { company: 'Cursor / Anysphere', domain: 'cursor.com', isOGStartup: true },
      { company: 'Figma', domain: 'figma.com', isOGStartup: true },
      { company: 'Notion Tech', domain: 'notion.so', isOGStartup: true },

      // MNC Tech Giants
      { company: 'Google India', domain: 'google.co.in', isIndianCompany: true },
      { company: 'Microsoft India', domain: 'microsoft.com/en-in', isIndianCompany: true },
      { company: 'Amazon India Tech', domain: 'amazon.jobs/en-in', isIndianCompany: true },
      { company: 'Nvidia India R&D', domain: 'nvidia.com', isIndianCompany: true },
      { company: 'Adobe India', domain: 'adobe.com/in', isIndianCompany: true }
    ],
    'Automobile & Mobility': [
      { company: 'Ather Energy AI (OG Startup)', domain: 'atherenergy.com', isIndianCompany: true, isOGStartup: true },
      { company: 'Ola Electric Mobility (OG Startup)', domain: 'olaelectric.com', isIndianCompany: true, isOGStartup: true },
      { company: 'Rivian Automotive (OG Startup)', domain: 'rivian.com', isOGStartup: true },
      { company: 'Lucid Motors (OG Startup)', domain: 'lucidmotors.com', isOGStartup: true },
      { company: 'Waymo Autonomous (OG Startup)', domain: 'waymo.com', isOGStartup: true },
      { company: 'Tata Motors EV & AI', domain: 'tatamotors.com', isIndianCompany: true },
      { company: 'Mahindra Tech & Mobility', domain: 'mahindra.com', isIndianCompany: true },
      { company: 'Mercedes-Benz R&D India (MBRDI)', domain: 'mbrdi.mercedes-benz.com', isIndianCompany: true },
      { company: 'BMW TechWorks India', domain: 'bmwgroup.jobs', isIndianCompany: true },
      { company: 'Robert Bosch India (RBAI)', domain: 'bosch.in', isIndianCompany: true }
    ],
    'Marketing & AdTech': [
      { company: 'CleverTap (OG Startup)', domain: 'clevertap.com', isIndianCompany: true, isOGStartup: true },
      { company: 'WebEngage (OG Startup)', domain: 'webengage.com', isIndianCompany: true, isOGStartup: true },
      { company: 'InMobi AdTech (OG Startup)', domain: 'inmobi.com', isIndianCompany: true, isOGStartup: true },
      { company: 'Klaviyo (OG Startup)', domain: 'klaviyo.com', isOGStartup: true },
      { company: 'Braze (OG Startup)', domain: 'braze.com', isOGStartup: true },
      { company: 'HubSpot', domain: 'hubspot.com', isOGStartup: true },
      { company: 'Adobe Experience India', domain: 'adobe.com/in', isIndianCompany: true },
      { company: 'Ogilvy India Digital', domain: 'ogilvy.in', isIndianCompany: true }
    ],
    'MNC Apprenticeships': [
      { company: 'Google STEP & Apprentice (India)', domain: 'buildyourfuture.withgoogle.com', isIndianCompany: true },
      { company: 'Microsoft LEAP India', domain: 'microsoft.com/leap', isIndianCompany: true },
      { company: 'Amazon Technical Apprentice India', domain: 'amazon.jobs/en-in', isIndianCompany: true },
      { company: 'IBM Technical Apprenticeship India', domain: 'ibm.com/in-en', isIndianCompany: true },
      { company: 'Bosch India Graduate & Apprentice', domain: 'bosch.in', isIndianCompany: true },
      { company: 'Mercedes-Benz MBRDI Academy', domain: 'mbrdi.mercedes-benz.com', isIndianCompany: true },
      { company: 'Tata Tech Apprenticeship Program', domain: 'tatatechnologies.com', isIndianCompany: true }
    ],
    'FinTech & Banking': [
      { company: 'Razorpay Engineering (OG Startup)', domain: 'razorpay.com', isIndianCompany: true, isOGStartup: true },
      { company: 'PhonePe Tech (OG Startup)', domain: 'phonepe.com', isIndianCompany: true, isOGStartup: true },
      { company: 'Zerodha Tech (OG Startup)', domain: 'zerodha.com', isIndianCompany: true, isOGStartup: true },
      { company: 'Groww Tech Labs (OG Startup)', domain: 'groww.in', isIndianCompany: true, isOGStartup: true },
      { company: 'CRED FinTech (OG Startup)', domain: 'cred.club', isIndianCompany: true, isOGStartup: true },
      { company: 'Pine Labs AI (OG Startup)', domain: 'pinelabs.com', isIndianCompany: true, isOGStartup: true },
      { company: 'Stripe Engine (OG Startup)', domain: 'stripe.com', isOGStartup: true },
      { company: 'Plaid (OG Startup)', domain: 'plaid.com', isOGStartup: true },
      { company: 'Goldman Sachs India (Bengaluru)', domain: 'goldmansachs.com', isIndianCompany: true },
      { company: 'JPMorgan Chase India (Bengaluru/Hyd)', domain: 'jpmorganchase.com', isIndianCompany: true }
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

  for (let cycle = 0; cycle < 12; cycle++) {
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
        const cleanDomain = compObj.domain.replace('/en-in', '').replace('/in', '').replace('.app', '.com').replace('.io', '.com');
        const hrEmail = `${hrObj.emailSuffix}@${cleanDomain}`;

        const emailTemplate = `Dear ${hrObj.title} Team at ${compObj.company},\n\nI hope this email finds you well. I am writing to express my enthusiastic interest in early career and apprenticeship opportunities in ${roleTmpl.specialization} (specifically for ${title} based in ${location}).\n\nHaving completed recent technical internship experience working with hands-on projects in Python, ${roleTmpl.specialization === 'Agentic AI' ? 'LLM Agent Frameworks, PyTorch,' : roleTmpl.specialization === 'Data Analytics' ? 'SQL, Pandas, Data Visualization,' : 'Machine Learning, Algorithms,'} and software development, I am eager to contribute to ${compObj.company}'s engineering initiatives.\n\nI have attached my resume for your review and would welcome the opportunity to discuss how my internship background aligns with your team's goals.\n\nBest regards,\n[Your Name]\n[Portfolio / GitHub Link]\n[LinkedIn Profile]`;

        listings.push({
          id: `job-${idCounter}`,
          company: compObj.company,
          domain: compObj.domain,
          industry: ind,
          specialization: roleTmpl.specialization,
          roleTitle: ind === 'MNC Apprenticeships' && !title.includes('Apprentice') ? `${title} (MNC Program)` : title,
          roleType: ind === 'MNC Apprenticeships' ? 'Apprenticeship' : (idCounter % 3 === 0 ? 'Internship' : 'Entry-Level'),
          location: location,
          isIndiaRole: isIndia,
          isOGStartup: !!compObj.isOGStartup,
          workType: location.includes('Remote') ? 'Remote' : (idCounter % 2 === 0 ? 'Hybrid' : 'On-site'),
          applyMode: isDirect ? 'Direct Apply' : 'Cold Mail',
          directApplyLink: isDirect ? `https://${compObj.domain}/careers` : undefined,
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
