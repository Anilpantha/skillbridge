
import { Category, Platform } from './types';

export const PLATFORMS: Platform[] = [
  {
    id: 'coursera',
    name: 'Coursera',
    description: 'World-class training and degrees from top universities and companies.',
    certificateType: 'Verified Certificates / Degrees',
    isFree: true,
    isLowCost: true,
    url: 'https://www.coursera.org',
    categories: [Category.TECH, Category.BUSINESS, Category.DESIGN, Category.AI, Category.GENERAL]
  },
  {
    id: 'edx',
    name: 'edX',
    description: 'High-quality courses from Harvard, MIT, and other leading institutions.',
    certificateType: 'Verified Certificates',
    isFree: true,
    isLowCost: true,
    url: 'https://www.edx.org',
    categories: [Category.TECH, Category.BUSINESS, Category.ACADEMIC, Category.AI]
  },
  {
    id: 'udemy',
    name: 'Udemy',
    description: 'Over 210,000 online video courses with new additions published every month.',
    certificateType: 'Certificate of Completion',
    isFree: false,
    isLowCost: true,
    url: 'https://www.udemy.com',
    categories: [Category.TECH, Category.BUSINESS, Category.DESIGN, Category.AI]
  },
  {
    id: 'udemy-business',
    name: 'Udemy Business',
    description: 'Corporate training platform with curated content for organizations.',
    certificateType: 'Corporate Certificate',
    isFree: false,
    isLowCost: true,
    url: 'https://business.udemy.com',
    categories: [Category.BUSINESS, Category.TECH]
  },
  {
    id: 'google-skillshop',
    name: 'Google Skillshop',
    description: 'Learn to master Google tools and solutions like Ads and Analytics.',
    certificateType: 'Google Professional Certification',
    isFree: true,
    isLowCost: false,
    url: 'https://skillshop.withgoogle.com',
    categories: [Category.BUSINESS, Category.TECH]
  },
  {
    id: 'google-digital-garage',
    name: 'Google Digital Garage',
    description: 'Free courses on digital marketing, data, and career development.',
    certificateType: 'Free Digital Certification',
    isFree: true,
    isLowCost: false,
    url: 'https://learndigital.withgoogle.com/digitalgarage',
    categories: [Category.BUSINESS, Category.GENERAL]
  },
  {
    id: 'microsoft-learn',
    name: 'Microsoft Learn',
    description: 'Interactive learning for Microsoft products, from Azure to Power BI.',
    certificateType: 'Microsoft Applied Skills',
    isFree: true,
    isLowCost: false,
    url: 'https://learn.microsoft.com',
    categories: [Category.TECH, Category.AI]
  },
  {
    id: 'linkedin-learning',
    name: 'LinkedIn Learning',
    description: 'Video-based learning across business, creative, and technology topics.',
    certificateType: 'LinkedIn Shareable Badge',
    isFree: false,
    isLowCost: true,
    url: 'https://www.linkedin.com/learning',
    categories: [Category.BUSINESS, Category.TECH, Category.DESIGN]
  },
  {
    id: 'freecodecamp',
    name: 'freeCodeCamp',
    description: 'Learn to code for free and build real-world projects.',
    certificateType: 'Full-Stack Developer Certification',
    isFree: true,
    isLowCost: false,
    url: 'https://www.freecodecamp.org',
    categories: [Category.TECH]
  },
  {
    id: 'khan-academy',
    name: 'Khan Academy',
    description: 'Personalized learning for students of all ages, absolutely free.',
    certificateType: 'No Formal Certificate',
    isFree: true,
    isLowCost: false,
    url: 'https://www.khanacademy.org',
    categories: [Category.ACADEMIC, Category.GENERAL]
  },
  {
    id: 'alison',
    name: 'Alison',
    description: 'Free online courses from world-leading experts.',
    certificateType: 'Free Training / Paid Certs',
    isFree: true,
    isLowCost: true,
    url: 'https://alison.com',
    categories: [Category.GENERAL, Category.BUSINESS, Category.TECH]
  },
  {
    id: 'futurelearn',
    name: 'FutureLearn',
    description: 'Learning through storytelling and social interaction with peers.',
    certificateType: 'Professional Accreditation',
    isFree: true,
    isLowCost: true,
    url: 'https://www.futurelearn.com',
    categories: [Category.GENERAL, Category.BUSINESS]
  },
  {
    id: 'skillshare',
    name: 'Skillshare',
    description: 'Online learning community for creative and curious people.',
    certificateType: 'No Formal Certificate',
    isFree: false,
    isLowCost: true,
    url: 'https://www.skillshare.com',
    categories: [Category.DESIGN, Category.GENERAL]
  },
  {
    id: 'great-learning',
    name: 'Great Learning Academy',
    description: 'Free online career programs and certificate courses.',
    certificateType: 'Academy Completion Cert',
    isFree: true,
    isLowCost: false,
    url: 'https://www.mygreatlearning.com/academy',
    categories: [Category.TECH, Category.BUSINESS, Category.AI]
  },
  {
    id: 'ibm-skillsbuild',
    name: 'IBM SkillsBuild',
    description: 'Tech skills for the future, curated by IBM professionals.',
    certificateType: 'Digital Credentials/Badges',
    isFree: true,
    isLowCost: false,
    url: 'https://skillsbuild.org',
    categories: [Category.TECH, Category.AI]
  },
  {
    id: 'cisco-netacad',
    name: 'Cisco Networking Academy',
    description: 'Networking and cybersecurity skills for a tech career.',
    certificateType: 'Cisco Professional Certification',
    isFree: true,
    isLowCost: true,
    url: 'https://www.netacad.com',
    categories: [Category.TECH]
  },
  {
    id: 'oracle-university',
    name: 'Oracle University',
    description: 'Official Oracle training and certification for cloud and dev.',
    certificateType: 'Oracle Certified Professional',
    isFree: true,
    isLowCost: false,
    url: 'https://education.oracle.com',
    categories: [Category.TECH]
  },
  {
    id: 'meta-blueprint',
    name: 'Meta Blueprint',
    description: 'Digital marketing skills across Facebook, Instagram, and WhatsApp.',
    certificateType: 'Meta Certified Professional',
    isFree: true,
    isLowCost: false,
    url: 'https://www.facebook.com/business/learn',
    categories: [Category.BUSINESS]
  },
  {
    id: 'hubspot-academy',
    name: 'HubSpot Academy',
    description: 'Inbound marketing, sales, and customer service courses.',
    certificateType: 'Inbound Certification',
    isFree: true,
    isLowCost: false,
    url: 'https://academy.hubspot.com',
    categories: [Category.BUSINESS]
  },
  {
    id: 'trailhead',
    name: 'Salesforce Trailhead',
    description: 'The fun way to learn Salesforce skills and ecosystem.',
    certificateType: 'Badges and Certifications',
    isFree: true,
    isLowCost: false,
    url: 'https://trailhead.salesforce.com',
    categories: [Category.BUSINESS, Category.TECH]
  },
  {
    id: 'aws-skill-builder',
    name: 'AWS Skill Builder',
    description: 'Your learning center to build cloud skills for AWS.',
    certificateType: 'AWS Certification Prep',
    isFree: true,
    isLowCost: true,
    url: 'https://skillbuilder.aws',
    categories: [Category.TECH, Category.AI]
  },
  {
    id: 'harvard-online',
    name: 'Harvard Online Learning',
    description: 'Unique faculty-led courses from Harvard University.',
    certificateType: 'Harvard Verified Certs',
    isFree: true,
    isLowCost: true,
    url: 'https://online-learning.harvard.edu',
    categories: [Category.ACADEMIC, Category.GENERAL]
  },
  {
    id: 'mit-ocw',
    name: 'MIT OpenCourseWare',
    description: 'Open publication of virtually all MIT course content.',
    certificateType: 'Knowledge Only (No Certs)',
    isFree: true,
    isLowCost: false,
    url: 'https://ocw.mit.edu',
    categories: [Category.ACADEMIC, Category.TECH]
  },
  {
    id: 'stanford-online',
    name: 'Stanford Online',
    description: 'Lifelong learning opportunities from Stanford University.',
    certificateType: 'Graduate Certificates',
    isFree: true,
    isLowCost: true,
    url: 'https://online.stanford.edu',
    categories: [Category.ACADEMIC, Category.GENERAL]
  },
  {
    id: 'openlearn',
    name: 'OpenLearn by Open University',
    description: 'Free learning from the world-renowned Open University.',
    certificateType: 'Statement of Participation',
    isFree: true,
    isLowCost: false,
    url: 'https://www.open.edu/openlearn',
    categories: [Category.GENERAL, Category.ACADEMIC]
  },
  {
    id: 'saylor',
    name: 'Saylor Academy',
    description: 'Free college-level courses for credit or completion.',
    certificateType: 'Free Certificates of Completion',
    isFree: true,
    isLowCost: false,
    url: 'https://www.saylor.org',
    categories: [Category.ACADEMIC, Category.BUSINESS]
  },
  {
    id: 'codecademy',
    name: 'Codecademy',
    description: 'Interactive coding platform to learn tech skills by doing.',
    certificateType: 'Pro Certificates',
    isFree: true,
    isLowCost: true,
    url: 'https://www.codecademy.com',
    categories: [Category.TECH]
  },
  {
    id: 'sololearn',
    name: 'SoloLearn',
    description: 'The largest community of mobile code learners.',
    certificateType: 'SoloLearn Certificates',
    isFree: true,
    isLowCost: true,
    url: 'https://www.sololearn.com',
    categories: [Category.TECH]
  },
  {
    id: 'datacamp',
    name: 'DataCamp',
    description: 'The easiest way to learn data science and AI online.',
    certificateType: 'Industry Recognized Certs',
    isFree: true,
    isLowCost: true,
    url: 'https://www.datacamp.com',
    categories: [Category.TECH, Category.AI]
  },
  {
    id: 'simplilearn',
    name: 'Simplilearn SkillUp',
    description: 'Free online courses to boost your career in trending technologies.',
    certificateType: 'Completion Certificate',
    isFree: true,
    isLowCost: false,
    url: 'https://www.simplilearn.com/skillup',
    categories: [Category.TECH, Category.BUSINESS]
  },
  {
    id: 'udacity',
    name: 'Udacity',
    description: 'Nanodegree programs built with world leaders in tech.',
    certificateType: 'Nanodegree / Micro-credentials',
    isFree: true,
    isLowCost: true,
    url: 'https://www.udacity.com',
    categories: [Category.TECH, Category.AI, Category.BUSINESS]
  },
  {
    id: 'pluralsight',
    name: 'Pluralsight',
    description: 'Technology skills platform for engineering, data, and security.',
    certificateType: 'Skills IQ / Certificates',
    isFree: false,
    isLowCost: true,
    url: 'https://www.pluralsight.com',
    categories: [Category.TECH]
  },
  {
    id: 'openclassrooms',
    name: 'OpenClassrooms',
    description: 'Flexible online degrees and career paths.',
    certificateType: 'State-Recognized Degrees',
    isFree: true,
    isLowCost: true,
    url: 'https://www.openclassrooms.com',
    categories: [Category.TECH, Category.BUSINESS, Category.DESIGN]
  }
];
