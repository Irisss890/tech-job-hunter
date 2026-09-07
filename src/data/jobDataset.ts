import type { JobListing, IndustryCategory, Specialization, CompanyType } from '../types/job';

const getOfficialCareersUrl = (company: string, domain: string): string => {
  const compLower = company.toLowerCase();
  if (compLower.includes('bmw')) return 'https://www.bmwgroup.jobs/de/de.html';
  if (compLower.includes('mercedes')) return 'https://group.mercedes-benz.com/karriere/';
  if (compLower.includes('porsche')) return 'https://newsroom.porsche.com/en/company/porsche-digital.html';
  if (compLower.includes('volkswagen') || compLower.includes('cariad')) return 'https://cariad.technology/global/en/careers.html';
  if (compLower.includes('bosch')) return 'https://www.bosch.de/karriere/';
  if (compLower.includes('siemens')) return 'https://jobs.siemens.com/jobs';
  if (compLower.includes('sap')) return 'https://jobs.sap.com/';
  if (compLower.includes('zalando')) return 'https://jobs.zalando.com/';
  if (compLower.includes('personio')) return 'https://www.personio.com/careers/';
  if (compLower.includes('n26')) return 'https://n26.com/en-de/careers';
  if (compLower.includes('delivery hero')) return 'https://careers.deliveryhero.com/';
  if (compLower.includes('celonis')) return 'https://www.celonis.com/careers/';
  if (compLower.includes('deepl')) return 'https://www.deepl.com/en/careers';

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
  if (compLower.includes('swiggy')) return 'https://careers.swiggy.com/';
  if (compLower.includes('zomato')) return 'https://www.zomato.com/careers';
  if (compLower.includes('flipkart')) return 'https://www.flipkartcareers.com/';
  if (compLower.includes('razorpay')) return 'https://razorpay.com/jobs/';

  return `https://${domain}/careers`;
};

const generate500Listings = (): JobListing[] => {
  const listings: JobListing[] = [];

  const companiesByIndustry: Record<IndustryCategory, Array<{ company: string; domain: string; companyType: CompanyType; isIndianCompany?: boolean; isGermanCompany?: boolean }>> = {
    'Tech & IT': [
      // 🇩🇪 Germany Tech Giants & Unicorns
      { company: 'SAP SE (Germany)', domain: 'sap.com', companyType: 'MNC / Enterprise', isGermanCompany: true },
      { company: 'Siemens AG (Munich)', domain: 'siemens.com', companyType: 'MNC / Enterprise', isGermanCompany: true },
      { company: 'Zalando Tech (Berlin)', domain: 'zalando.com', companyType: 'OG Startup', isGermanCompany: true },
      { company: 'Personio HR Tech (Munich)', domain: 'personio.com', companyType: 'OG Startup', isGermanCompany: true },
      { company: 'DeepL AI (Cologne / Remote Germany)', domain: 'deepl.com', companyType: 'OG Startup', isGermanCompany: true },
      { company: 'Celonis Data Mining (Munich)', domain: 'celonis.com', companyType: 'OG Startup', isGermanCompany: true },
      { company: 'Delivery Hero (Berlin)', domain: 'deliveryhero.com', companyType: 'OG Startup', isGermanCompany: true },

      // 🇮🇳 Indian Tech Giants & Startups
      { company: 'Google India', domain: 'google.co.in', companyType: 'MNC / Enterprise', isIndianCompany: true },
      { company: 'Microsoft India', domain: 'microsoft.com', companyType: 'MNC / Enterprise', isIndianCompany: true },
      { company: 'Amazon India Tech', domain: 'amazon.jobs', companyType: 'MNC / Enterprise', isIndianCompany: true },
      { company: 'Nvidia India R&D', domain: 'nvidia.com', companyType: 'MNC / Enterprise', isIndianCompany: true },
      { company: 'Postman', domain: 'postman.com', companyType: 'OG Startup', isIndianCompany: true },
      { company: 'BrowserStack', domain: 'browserstack.com', companyType: 'OG Startup', isIndianCompany: true },
      { company: 'Hasura AI', domain: 'hasura.io', companyType: 'OG Startup', isIndianCompany: true },
      { company: 'Swiggy AI Labs', domain: 'swiggy.com', companyType: 'OG Startup', isIndianCompany: true },
      { company: 'Zomato AI & Data', domain: 'zomato.com', companyType: 'OG Startup', isIndianCompany: true },
      { company: 'Flipkart Engineering', domain: 'flipkart.com', companyType: 'OG Startup', isIndianCompany: true },

      // 🌐 Global Tech
      { company: 'OpenAI', domain: 'openai.com', companyType: 'OG Startup' },
      { company: 'Anthropic AI', domain: 'anthropic.com', companyType: 'OG Startup' },
      { company: 'Scale AI', domain: 'scale.com', companyType: 'OG Startup' },
      { company: 'Vercel', domain: 'vercel.com', companyType: 'OG Startup' }
    ],
    'Automobile & Mobility': [
      // 🇩🇪 Germany Automobile & Mobility Leaders
      { company: 'BMW Group (Munich, Germany)', domain: 'bmwgroup.jobs', companyType: 'MNC / Enterprise', isGermanCompany: true },
      { company: 'Mercedes-Benz Tech (Stuttgart, Germany)', domain: 'mercedes-benz.com', companyType: 'MNC / Enterprise', isGermanCompany: true },
      { company: 'Porsche Digital (Stuttgart, Germany)', domain: 'porsche.com', companyType: 'MNC / Enterprise', isGermanCompany: true },
      { company: 'Volkswagen Cariad AI (Wolfsburg / Berlin)', domain: 'cariad.technology', companyType: 'MNC / Enterprise', isGermanCompany: true },
      { company: 'Robert Bosch GmbH (Stuttgart / Abstatt)', domain: 'bosch.de', companyType: 'MNC / Enterprise', isGermanCompany: true },
      { company: 'Continental Automotive (Frankfurt, Germany)', domain: 'continental.com', companyType: 'MNC / Enterprise', isGermanCompany: true },
      { company: 'FlixBus Mobility Tech (Munich)', domain: 'flixbus.com', companyType: 'OG Startup', isGermanCompany: true },

      // 🇮🇳 Indian Automobile Leaders
      { company: 'Mercedes-Benz R&D India (MBRDI Bengaluru)', domain: 'mbrdi.mercedes-benz.com', companyType: 'MNC / Enterprise', isIndianCompany: true },
      { company: 'BMW TechWorks India (Pune)', domain: 'bmwgroup.jobs', companyType: 'MNC / Enterprise', isIndianCompany: true },
      { company: 'Tata Motors EV & AI', domain: 'tatamotors.com', companyType: 'MNC / Enterprise', isIndianCompany: true },
      { company: 'Mahindra Tech & Mobility', domain: 'mahindra.com', companyType: 'MNC / Enterprise', isIndianCompany: true },
      { company: 'Ather Energy AI', domain: 'atherenergy.com', companyType: 'OG Startup', isIndianCompany: true }
    ],
    'Marketing & AdTech': [
      { company: 'Zalando Marketing Tech (Berlin)', domain: 'zalando.com', companyType: 'OG Startup', isGermanCompany: true },
      { company: 'Adobe Germany (Munich)', domain: 'adobe.com', companyType: 'MNC / Enterprise', isGermanCompany: true },
      { company: 'Adobe Experience India', domain: 'adobe.com', companyType: 'MNC / Enterprise', isIndianCompany: true },
      { company: 'CleverTap Analytics', domain: 'clevertap.com', companyType: 'OG Startup', isIndianCompany: true },
      { company: 'HubSpot Global', domain: 'hubspot.com', companyType: 'OG Startup' }
    ],
    'MNC Apprenticeships': [
      // 🇩🇪 Germany Apprenticeship & Graduate Programs (Ausbildung & Trainee)
      { company: 'BMW Tech Trainee & Apprentice (Munich)', domain: 'bmwgroup.jobs', companyType: 'MNC / Enterprise', isGermanCompany: true },
      { company: 'Mercedes-Benz Tech Academy (Stuttgart)', domain: 'mercedes-benz.com', companyType: 'MNC / Enterprise', isGermanCompany: true },
      { company: 'Bosch Germany Graduate Program (Stuttgart)', domain: 'bosch.de', companyType: 'MNC / Enterprise', isGermanCompany: true },
      { company: 'Siemens Tech Apprentice (Erlangen / Munich)', domain: 'siemens.com', companyType: 'MNC / Enterprise', isGermanCompany: true },
      { company: 'SAP Graduate & Apprentice (Walldorf)', domain: 'sap.com', companyType: 'MNC / Enterprise', isGermanCompany: true },

      // 🇮🇳 Indian Apprenticeship Programs
      { company: 'Google STEP & Apprentice (India)', domain: 'buildyourfuture.withgoogle.com', companyType: 'MNC / Enterprise', isIndianCompany: true },
      { company: 'Microsoft LEAP India', domain: 'microsoft.com', companyType: 'MNC / Enterprise', isIndianCompany: true },
      { company: 'Amazon Technical Apprentice India', domain: 'amazon.jobs', companyType: 'MNC / Enterprise', isIndianCompany: true },
      { company: 'IBM Technical Apprenticeship India', domain: 'ibm.com', companyType: 'MNC / Enterprise', isIndianCompany: true }
    ],
    'FinTech & Banking': [
      // 🇩🇪 Germany FinTech Leaders
      { company: 'N26 Mobile Banking (Berlin)', domain: 'n26.com', companyType: 'OG Startup', isGermanCompany: true },
      { company: 'Trade Republic (Berlin)', domain: 'traderepublic.com', companyType: 'OG Startup', isGermanCompany: true },
      { company: 'Deutsche Bank Tech (Frankfurt)', domain: 'db.com', companyType: 'MNC / Enterprise', isGermanCompany: true },

      // 🇮🇳 Indian FinTech
      { company: 'Razorpay Engineering', domain: 'razorpay.com', companyType: 'OG Startup', isIndianCompany: true },
      { company: 'PhonePe Tech', domain: 'phonepe.com', companyType: 'OG Startup', isIndianCompany: true },
      { company: 'Zerodha Tech', domain: 'zerodha.com', companyType: 'OG Startup', isIndianCompany: true },
      { company: 'Goldman Sachs India', domain: 'goldmansachs.com', companyType: 'MNC / Enterprise', isIndianCompany: true }
    ]
  };

  const roleTemplates: Array<{
    specialization: Specialization;
    titles: string[];
    applyType: 'Direct Apply' | 'Cold Mail';
    selectivity: 'Accessible' | 'Moderate' | 'High Competition';
    baseChance: number;
    stipendIndia: string;
    stipendGermany: string;
    stipendGlobal: string;
  }> = [
    {
      specialization: 'Agentic AI',
      titles: [
        'Agentic AI Systems Engineer',
        'LLM & Multi-Agent Workflow Developer',
        'AI Agent Tool Integration Engineer',
        'Autonomous Agent Research Apprentice',
        'AI Agent Operations Specialist'
      ],
      applyType: 'Direct Apply',
      selectivity: 'High Competition',
      baseChance: 76,
      stipendIndia: '₹50,000 - ₹90,000 / mo',
      stipendGermany: '€4,800 - €7,500 / mo',
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
      baseChance: 85,
      stipendIndia: '₹40,000 - ₹70,000 / mo',
      stipendGermany: '€3,800 - €5,800 / mo',
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
      baseChance: 74,
      stipendIndia: '₹45,000 - ₹80,000 / mo',
      stipendGermany: '€4,200 - €6,800 / mo',
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
      baseChance: 82,
      stipendIndia: '₹35,000 - ₹65,000 / mo',
      stipendGermany: '€3,500 - €5,200 / mo',
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
      baseChance: 90,
      stipendIndia: '₹35,000 - ₹60,000 / mo',
      stipendGermany: '€3,200 - €5,000 / mo',
      stipendGlobal: '$4,500 - $6,500 / mo'
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
      baseChance: 82,
      stipendIndia: '₹40,000 - ₹75,000 / mo',
      stipendGermany: '€3,800 - €6,000 / mo',
      stipendGlobal: '$5,000 - $8,000 / mo'
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

  const germanyLocations = [
    'Munich (München), Bavaria 🇩🇪',
    'Berlin, Germany 🇩🇪',
    'Stuttgart, Baden-Württemberg 🇩🇪',
    'Frankfurt am Main, Hesse 🇩🇪',
    'Hamburg, Germany 🇩🇪',
    'Wolfsburg, Lower Saxony 🇩🇪',
    'Cologne (Köln), NRW 🇩🇪',
    'Walldorf / Heidelberg 🇩🇪',
    'Remote (Germany) 🇩🇪'
  ];

  const globalLocations = [
    'Remote (US / Global)',
    'Hybrid - San Francisco, CA',
    'Hybrid - London, UK',
    'Hybrid - Toronto, Canada'
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

  for (let cycle = 0; cycle < 15; cycle++) {
    for (const ind of industries) {
      const companyList = companiesByIndustry[ind];
      for (const compObj of companyList) {
        if (listings.length >= 540) break;

        const roleTmpl = roleTemplates[(idCounter + cycle) % roleTemplates.length];
        const title = roleTmpl.titles[(idCounter + cycle) % roleTmpl.titles.length];

        // Determine Region: Germany vs India vs Global
        let isGermany = false;
        let isIndia = false;
        let location = '';
        let stipend = '';

        if (compObj.isGermanCompany || (idCounter % 3 === 0)) {
          isGermany = true;
          location = germanyLocations[(idCounter + cycle) % germanyLocations.length];
          stipend = roleTmpl.stipendGermany;
        } else if (compObj.isIndianCompany || (idCounter % 2 === 0)) {
          isIndia = true;
          location = indianLocations[(idCounter + cycle) % indianLocations.length];
          stipend = roleTmpl.stipendIndia;
        } else {
          location = globalLocations[(idCounter + cycle) % globalLocations.length];
          stipend = roleTmpl.stipendGlobal;
        }

        const hrObj = hrContacts[(idCounter + cycle) % hrContacts.length];
        const isDirect = roleTmpl.applyType === 'Direct Apply';
        const cleanDomain = compObj.domain.replace('/de', '').replace('/en', '');
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
          roleTitle: ind === 'MNC Apprenticeships' && !title.includes('Apprentice') ? `${title} (Trainee/Apprentice Program)` : title,
          roleType: ind === 'MNC Apprenticeships' ? 'Apprenticeship' : (idCounter % 3 === 0 ? 'Internship' : 'Entry-Level'),
          location: location,
          isIndiaRole: isIndia,
          isGermanyRole: isGermany,
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
          gettingInChanceScore: (isIndia || isGermany) ? Math.min(98, Math.max(50, roleTmpl.baseChance + 6)) : roleTmpl.baseChance,
          stipendOrSalary: stipend,
          postedDate: (idCounter % 5 === 0) ? 'Today' : `${(idCounter % 4) + 1} days ago`
        });

        idCounter++;
      }
    }
  }

  return listings;
};

export const JOB_DATASET: JobListing[] = generate500Listings();
