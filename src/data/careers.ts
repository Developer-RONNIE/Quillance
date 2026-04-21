export type JobRole = {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  workMode: string;
  color: string;
  about: string;
  overview: string;
  responsibilities: string[];
  details: {
    duration?: string;
    stipend?: string;
    incentives?: string;
    workingHours?: string;
    workDays?: string;
    weekOff?: string;
  };
  fullTime?: {
    ctc?: string;
    description?: string[];
  };
  whoShouldApply: string[];
  whatYouWillGain: string[];
};

export const careersData: JobRole[] = [
  {
    id: "bda-intern",
    title: "Business Development Associate Intern",
    department: "Business Development",
    location: "Bhubaneswar",
    type: "Internship",
    workMode: "On-site",
    color: "bg-blue-500",
    about:
      "Quillance is a Corporate Training & Internship Platform offering industry-focused Career Accelerator Programs designed to bridge the gap between education and real-world careers.",
    overview:
      "This is a high-impact, performance-driven role where you will work on real-time sales, student counseling, and revenue generation. If you want to build a career in sales, business development, or startups, this is your launchpad.",
    responsibilities: [
      "Develop and execute sales and outreach strategies",
      "Identify and connect with potential students and leads",
      "Explain programs and drive enrollments/conversions",
      "Build and maintain strong client relationships",
      "Manage the end-to-end sales cycle",
      "Work closely with marketing & sales teams",
      "Track daily performance and achieve targets",
      "Generate leads and contribute to revenue growth",
    ],
    details: {
      duration: "6 Months",
      stipend: "₹15,000/month",
      incentives: "Up to ₹5,000/month (performance-based)",
      workingHours: "11:30 AM – 8:30 PM",
      workDays: "6 Days/Week",
      weekOff: "Wednesday",
    },
    fullTime: {
      ctc: "₹4–6 LPA (excluding incentives)",
      description: ["High performers will be eligible for a Pre-Placement Offer (PPO)"],
    },
    whoShouldApply: [
      "Freshers or candidates with 0–1 year experience",
      "Strong communication and interpersonal skills",
      "Interest in sales, marketing, and business growth",
      "Target-driven mindset with a willingness to learn",
      "Confident, proactive, and result-oriented individuals",
    ],
    whatYouWillGain: [
      "Hands-on experience in real sales & revenue generation",
      "Exposure to startup growth and business strategy",
      "Mentorship from experienced professionals",
      "High earning potential through incentives",
      "Fast-track career growth opportunities",
    ],
  },
  {
    id: "digital-marketing-intern",
    title: "Digital Marketing Intern",
    department: "Digital Marketing",
    location: "Bhubaneswar",
    type: "Internship",
    workMode: "On-site",
    color: "bg-orange-500",
    about:
      "Quillance is a Corporate Training & Internship Platform offering industry-focused Career Accelerator Programs designed to bridge the gap between education and real-world careers.",
    overview:
      "As a Digital Marketing Intern, you will work on live campaigns, content creation, and growth strategies. This is a practical, execution-focused role where you’ll learn how brands grow online.",
    responsibilities: [
      "Manage and grow social media platforms (Instagram, LinkedIn, etc.)",
      "Plan and execute digital marketing campaigns",
      "Assist in paid ads (Meta/Google Ads) and performance tracking",
      "Create engaging content (posts, reels, creatives, captions)",
      "Work on SEO basics and website optimization",
      "Analyze campaign performance and optimize strategies",
      "Collaborate with sales team for lead generation campaigns",
    ],
    details: {
      duration: "3–6 Months",
      stipend: "₹8,000 – ₹15,000/month",
      incentives: "Performance-based (optional)",
      workingHours: "11:30 AM – 8:30 PM",
      workDays: "6 Days/Week",
      weekOff: "Wednesday",
    },
    fullTime: {
      description: [
        "High performers may receive a Pre-Placement Offer (PPO)",
        "Opportunity to grow into Digital Marketing Executive / Performance Marketer",
      ],
    },
    whoShouldApply: [
      "Freshers or candidates with 0–1 year experience",
      "Basic understanding of social media & digital marketing",
      "Creative mindset with strong communication skills",
      "Interest in content, branding, and online growth",
      "Willingness to learn and experiment",
    ],
    whatYouWillGain: [
      "Hands-on experience in real marketing campaigns",
      "Exposure to performance marketing & analytics tools",
      "Portfolio-building projects",
      "Mentorship from experienced marketers",
      "Fast-track career growth in digital marketing",
    ],
  },
  {
    id: "hr-intern",
    title: "HR Intern",
    department: "Human Resources",
    location: "Bhubaneswar",
    type: "Internship",
    workMode: "On-site",
    color: "bg-pink-500",
    about:
      "Quillance is a Corporate Training & Internship Platform offering industry-focused Career Accelerator Programs designed to bridge the gap between education and real-world careers.",
    overview:
      "This role focuses on recruitment, coordination, and HR operations. You will play a key role in identifying talent, managing candidate experience, and supporting internal processes.",
    responsibilities: [
      "Assist in end-to-end recruitment (sourcing, screening, scheduling)",
      "Post job openings on platforms and manage applications",
      "Coordinate interviews and maintain candidate communication",
      "Support onboarding and documentation processes",
      "Maintain HR records and databases",
      "Assist in employee engagement and internal activities",
      "Ensure smooth HR operations and workflow",
    ],
    details: {
      duration: "3–6 Months",
      stipend: "₹8,000 – ₹15,000/month",
      incentives: "Performance-based (optional)",
      workingHours: "11:30 AM – 8:30 PM",
      workDays: "6 Days/Week",
      weekOff: "Wednesday",
    },
    fullTime: {
      description: [
        "High performers may receive a Pre-Placement Offer (PPO)",
        "Opportunity to grow into HR Executive / Talent Acquisition Specialist",
      ],
    },
    whoShouldApply: [
      "Freshers or candidates with 0–1 year experience",
      "Strong communication and interpersonal skills",
      "Interest in recruitment and people management",
      "Organized, detail-oriented, and proactive mindset",
      "Ability to handle multiple tasks efficiently",
    ],
    whatYouWillGain: [
      "Hands-on experience in real recruitment processes",
      "Exposure to startup HR operations",
      "Practical learning in candidate handling & coordination",
      "Mentorship from experienced professionals",
      "Strong foundation for an HR career",
    ],
  },
  {
    id: "operations-intern",
    title: "Operations Executive Intern",
    department: "Operations",
    location: "Bhubaneswar",
    type: "Internship",
    workMode: "On-site",
    color: "bg-slate-700",
    about:
      "Quillance is a Corporate Training & Internship Platform offering industry-focused Career Accelerator Programs designed to bridge the gap between education and real-world careers.",
    overview:
      "As an Operations Executive Intern, you will support day-to-day business operations, coordinate between teams, and ensure seamless execution of processes. This role gives exposure to how a startup functions internally.",
    responsibilities: [
      "Manage and support daily operational activities",
      "Coordinate between sales, marketing, and HR teams",
      "Maintain records, reports, and operational data",
      "Ensure smooth execution of training programs & processes",
      "Identify inefficiencies and suggest process improvements",
      "Assist in handling student queries and support tasks",
      "Track performance metrics and operational workflows",
    ],
    details: {
      duration: "3–6 Months",
      stipend: "₹8,000 – ₹15,000/month",
      incentives: "Performance-based (optional)",
      workingHours: "11:30 AM – 8:30 PM",
      workDays: "6 Days/Week",
      weekOff: "Wednesday",
    },
    fullTime: {
      description: [
        "High performers may receive a Pre-Placement Offer (PPO)",
        "Opportunity to grow into Operations Executive / Business Operations Associate",
      ],
    },
    whoShouldApply: [
      "Freshers or candidates with 0–1 year experience",
      "Strong organizational and coordination skills",
      "Problem-solving mindset and attention to detail",
      "Ability to manage multiple tasks efficiently",
      "Interest in business operations and startup environments",
    ],
    whatYouWillGain: [
      "Hands-on experience in real business operations",
      "Exposure to cross-functional team coordination",
      "Practical learning in process management",
      "Mentorship from experienced professionals",
      "Strong foundation for operations and management roles",
    ],
  },
];
