import type { JobListing, IndustryCategory, Specialization } from '../types/job';

// Helper generator for 520+ listings heavily prioritizing Indian Tech Hubs & MNC R&D Centers
const generate500Listings = (): JobListing[] => {
  const listings: JobListing[] = [];

  const companiesByIndustry: Record<IndustryCategory, Array<{ company: string; domain: string; isIndianCompany?: boolean }>> = {
    'Tech & IT': [
      { company: 'Google India', domain: 'google.co.in' },
      { company: 'Microsoft India', domain: 'microsoft.com/en-in' },
      { company: 'Amazon India Tech', domain: 'amazon.jobs/en-in' },
      { company: 'Swiggy AI Labs', domain: 'swiggy.com', isIndianCompany: true },
      { company: 'Zomato AI & Data', domain: 'zomato.com', isIndianCompany: true },
      { company: 'Razorpay Tech', domain: 'razorpay.com', isIndianCompany: true },
      { company: 'Flipkart Engineering', domain: 'flipkart.com', isIndianCompany: true },
      { company: 'Reliance Jio AI', domain: 'jio.com', isIndianCompany: true },
      { company: 'OpenAI (Remote India)', domain: 'openai.com' },
      { company: 'Nvidia India R&D', domain: 'nvidia.com' },
      { company: 'Adobe India', domain: 'adobe.com/in' },
      { company: 'Meta India', domain: 'metacareers.com' },
      { company: 'Salesforce India', domain: 'salesforce.com/in' },
      { company: 'CRED Engineering', domain: 'cred.club', isIndianCompany: true },
      { company: 'Ola Electric AI', domain: 'olaelectric.com', isIndianCompany: true },
      { company: 'InMobi AdTech', domain: 'inmobi.com', isIndianCompany: true },
      { company: 'Persistent Systems', domain: 'persistent.com', isIndianCompany: true },
      { company: 'LTI Mindtree AI', domain: 'ltimindtree.com', isIndianCompany: true }
    ],
    'Automobile & Mobility': [
      { company: 'Tata Motors EV & AI', domain: 'tatamotors.com', isIndianCompany: true },
      { company: 'Mahindra Tech & Mobility', domain: 'mahindra.com', isIndianCompany: true },
      { company: 'Ola Electric Mobility', domain: 'olaelectric.com', isIndianCompany: true },
      { company: 'Mercedes-Benz R&D India (MBRDI)', domain: 'mbrdi.mercedes-benz.com' },
      { company: 'BMW TechWorks India', domain: 'bmwgroup.jobs' },
      { company: 'Robert Bosch India (RBAI)', domain: 'bosch.in' },
      { company: 'Ather Energy AI', domain: 'atherenergy.com', isIndianCompany: true },
      { company: 'TVS Motor Tech', domain: 'tvsmotor.com', isIndianCompany: true },
      { company: 'Renault-Nissan Technology India', domain: 'rntbcprect.com' },
      { company: 'Hyundai Mobis India', domain: 'mobis.co.in' },
      { company: 'Continental Automotive India', domain: 'continental.com/in' },
      { company: 'Volvo Group India', domain: 'volvogroup.in' }
    ],
    'Marketing & AdTech': [
      { company: 'InMobi AdTech', domain: 'inmobi.com', isIndianCompany: true },
      { company: 'Adobe Experience India', domain: 'adobe.com/in' },
      { company: 'HubSpot India', domain: 'hubspot.com' },
      { company: 'Ogilvy India Digital', domain: 'ogilvy.in' },
      { company: 'Publicis Sapient India', domain: 'publicissapient.com' },
      { company: 'WPP Tech India', domain: 'wpp.com' },
      { company: 'CleverTap Analytics', domain: 'clevertap.com', isIndianCompany: true },
      { company: 'WebEngage Growth Tech', domain: 'webengage.com', isIndianCompany: true },
      { company: 'Affle AdTech India', domain: 'affle.com', isIndianCompany: true },
      { company: 'Dentsu India Digital', domain: 'dentsu.com' }
    ],
    'MNC Apprenticeships': [
      { company: 'Google STEP & Apprentice (India)', domain: 'buildyourfuture.withgoogle.com' },
      { company: 'Microsoft LEAP India', domain: 'microsoft.com/leap' },
      { company: 'Amazon Technical Apprentice India', domain: 'amazon.jobs/en-in' },
      { company: 'IBM Technical Apprenticeship India', domain: 'ibm.com/in-en' },
      { company: 'Bosch India Graduate & Apprentice', domain: 'bosch.in' },
      { company: 'Mercedes-Benz MBRDI Academy', domain: 'mbrdi.mercedes-benz.com' },
      { company: 'Siemens Tech Apprentice India', domain: 'siemens.co.in' },
      { company: 'Tata Tech Apprenticeship Program', domain: 'tatatechnologies.com', isIndianCompany: true },
      { company: 'Cisco Apprentice India', domain: 'cisco.com/site/in' },
      { company: 'Intel India Early Career Apprentice', domain: 'intel.in' }
    ],
    'FinTech & Banking': [
      { company: 'Razorpay Engineering', domain: 'razorpay.com', isIndianCompany: true },
      { company: 'PhonePe Tech', domain: 'phonepe.com', isIndianCompany: true },
      { company: 'Paytm AI & Payments', domain: 'paytm.com', isIndianCompany: true },
      { company: 'Goldman Sachs India (Bengaluru)', domain: 'goldmansachs.com' },
      { company: 'JPMorgan Chase India (Bengaluru/Hyd)', domain: 'jpmorganchase.com' },
      { company: 'Stripe India', domain: 'stripe.com' },
      { company: 'CRED FinTech', domain: 'cred.club', isIndianCompany: true },
      { company: 'Zerodha Tech', domain: 'zerodha.com', isIndianCompany: true },
      { company: 'Groww Tech Labs', domain: 'groww.in', isIndianCompany: true },
      { company: 'Pine Labs AI', domain: 'pinelabs.com', isIndianCompany: true },
      { company: 'Morgan Stanley India Tech', domain: 'morganstanley.com' },
      { company: 'Barclays Global Service Centre India', domain: 'barclays.in' }
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
      baseChance: 72,
      stipendIndia: '₹45,000 - ₹85,000 / mo',
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
      baseChance: 82,
      stipendIndia: '₹35,000 - ₹65,000 / mo',
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
      baseChance: 70,
      stipendIndia: '₹40,000 - ₹75,000 / mo',
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
      baseChance: 79,
      stipendIndia: '₹30,000 - ₹60,000 / mo',
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
      baseChance: 88,
      stipendIndia: '₹30,000 - ₹55,000 / mo',
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
      baseChance: 90,
      stipendIndia: '₹25,000 - ₹50,000 / mo',
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
      baseChance: 78,
      stipendIndia: '₹35,000 - ₹70,000 / mo',
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
      baseChance: 76,
      stipendIndia: '₹35,000 - ₹65,000 / mo',
      stipendGlobal: '$5,200 - $7,800 / mo'
    }
  ];

  // 70%+ Indian locations for heavy prioritization
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
    { title: 'India University Relations & Early Talent Recruiter', emailSuffix: 'careers' },
    { title: 'Head of India Tech Talent Acquisition', emailSuffix: 'talent.india' },
    { title: 'India Engineering Hiring Manager', emailSuffix: 'engineering.in' },
    { title: 'AI & Data Apprenticeship Coordinator (India)', emailSuffix: 'apprenticeship.in' }
  ];

  let idCounter = 1;

  const industries: IndustryCategory[] = [
    'Tech & IT',
    'Automobile & Mobility',
    'Marketing & AdTech',
    'MNC Apprenticeships',
    'FinTech & Banking'
  ];

  for (let cycle = 0; cycle < 11; cycle++) {
    for (const ind of industries) {
      const companyList = companiesByIndustry[ind];
      for (const compObj of companyList) {
        if (listings.length >= 525) break;

        const roleTmpl = roleTemplates[(idCounter + cycle) % roleTemplates.length];
        const title = roleTmpl.titles[(idCounter + cycle) % roleTmpl.titles.length];
        
        // 75% of roles assigned to Indian Tech Hubs
        const isIndia = (idCounter % 4 !== 0) || compObj.isIndianCompany || compObj.company.includes('India');
        const location = isIndia 
          ? indianLocations[(idCounter + cycle) % indianLocations.length]
          : globalLocations[(idCounter + cycle) % globalLocations.length];

        const hrObj = hrContacts[(idCounter + cycle) % hrContacts.length];
        const isDirect = roleTmpl.applyType === 'Direct Apply';
        const hrEmail = `${hrObj.emailSuffix}@${compObj.domain.replace('/en-in', '').replace('/in', '')}`;

        const emailTemplate = `Dear ${hrObj.title} Team at ${compObj.company},\n\nI hope this email finds you well. I am writing to express my enthusiastic interest in early career and apprenticeship opportunities in ${roleTmpl.specialization} (specifically for ${title} based in ${location}).\n\nHaving completed recent technical internship experience working with hands-on projects in Python, ${roleTmpl.specialization === 'Agentic AI' ? 'LLM Agent Frameworks, PyTorch,' : roleTmpl.specialization === 'Data Analytics' ? 'SQL, Pandas, Data Visualization,' : 'Machine Learning, Algorithms,'} and software development, I am eager to contribute to ${compObj.company}'s engineering initiatives in India.\n\nI have attached my resume for your review and would welcome the opportunity to discuss how my internship background aligns with your team's goals.\n\nBest regards,\n[Your Name]\n[Portfolio / GitHub Link]\n[LinkedIn Profile]`;

        listings.push({
          id: `job-${idCounter}`,
          company: compObj.company,
          domain: compObj.domain,
          industry: ind,
          specialization: roleTmpl.specialization,
          roleTitle: ind === 'MNC Apprenticeships' && !title.includes('Apprentice') ? `${title} (India MNC Program)` : title,
          roleType: ind === 'MNC Apprenticeships' ? 'Apprenticeship' : (idCounter % 3 === 0 ? 'Internship' : 'Entry-Level'),
          location: location,
          isIndiaRole: isIndia,
          workType: location.includes('Remote') ? 'Remote' : (idCounter % 2 === 0 ? 'Hybrid' : 'On-site'),
          applyMode: isDirect ? 'Direct Apply' : 'Cold Mail',
          directApplyLink: isDirect ? `https://${compObj.domain}/careers/apply?job=${idCounter}` : undefined,
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
