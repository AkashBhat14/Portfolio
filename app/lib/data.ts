export const personalInfo = {
  name: "Akash Bhat",
  title: "Blue Team Security Engineer & AI Automation Specialist",
  email: "akashbhat1402@gmail.com",
  phone: "+91-7022546438",
  linkedin: "https://linkedin.com/in/akashbhat14",
  github: "https://github.com/AkashBhat14",
  location: "Bangalore, India",
  summary: "Cybersecurity practitioner with a strong blue team orientation and hands-on experience in threat detection and SIEM engineering. Proficient with Wazuh, ELK Stack, and Azure Sentinel, with a proven ability to build and deploy effective defense mechanisms in SOC environments while leveraging AI and automation.",
};

export const education = {
  school: "PES University",
  location: "Bangalore, India",
  degree: "Bachelor of Technology in Computer Science and Engineering",
  graduationDate: "May 2025",
  courses: ["Information Security", "Computer Networks", "Cryptography", "Artificial Intelligence"],
};

export const experiences = [
  {
    id: 1,
    company: "USEReady",
    location: "Bangalore, India",
    role: "AI Automation Engineer",
    startDate: "Oct 2025",
    endDate: "Jan 2026",
    current: true,
    achievements: [
      "Built a real-time AI receptionist to automate appointment scheduling and FAQ handling through voice interactions",
      "Securely captured user information and minimized manual administrative effort",
    ],
    metrics: [
      { label: "Automation", value: "Real-time AI" },
    ],
    color: "#bd34fe", // Purple for AI
  },
  {
    id: 2,
    company: "BOSCH",
    location: "Bangalore, India",
    role: "Security Analyst Intern",
    startDate: "Jan 2025",
    endDate: "May 2025",
    current: false,
    achievements: [
      "Triaged and resolved 20-30 daily security alerts, including failed login attempts and suspicious IP activity",
      "Improved alert accuracy and supported a 20% reduction in team-wide MTTR through proper documentation and playbook adherence",
      "Integrated VirusTotal API with Wazuh to detect known malware via hash lookups and automated endpoint remediation",
      "Developed a Document-based Chatbot using Retrieval-Augmented Generation (RAG) to enable intelligent question answering over large sets of documents",
    ],
    metrics: [
      { label: "Alerts/Day", value: "20-30" },
      { label: "MTTR Reduction", value: "20%" },
      { label: "Manual Time Saved", value: "90%" },
      { label: "Triage Time Saved", value: "40%" },
    ],
    color: "#3b82f6", // Blue for security
  },
  {
    id: 3,
    company: "ETAS",
    location: "Bangalore, India",
    role: "Automotive Security Research Intern",
    startDate: "Jun 2024",
    endDate: "Aug 2024",
    current: false,
    achievements: [
      "Researched and benchmarked automotive security solutions",
      "Improved internal evaluation accuracy by 30%",
      "Helped prioritize product roadmap decisions against 4 key competitors",
    ],
    metrics: [
      { label: "Evaluation Accuracy", value: "+30%" },
      { label: "Competitors Analyzed", value: "4" },
    ],
    color: "#ff6b6b", // Red for research
  },
];

export const skills = {
  security: {
    category: "Security Tools",
    color: "#ff6b6b",
    items: [
      { name: "Azure Sentinel", proficiency: 85 },
      { name: "Wazuh", proficiency: 90 },
      { name: "Elastic SIEM", proficiency: 88 },
      { name: "Wireshark", proficiency: 80 },
    ],
  },
  cloud: {
    category: "Cloud & DevOps",
    color: "#3b82f6",
    items: [
      { name: "AWS", proficiency: 82 },
      { name: "Vultr", proficiency: 75 },
      { name: "Git", proficiency: 88 },
    ],
  },
  ai: {
    category: "AI Tools & Frameworks",
    color: "#bd34fe",
    items: [
      { name: "Elevenlabs", proficiency: 85 },
      { name: "N8N", proficiency: 80 },
      { name: "LangChain", proficiency: 78 },
    ],
  },
};

export const certifications = [
  {
    name: "CompTIA Security+",
    date: "Jun 2025",
    id: 1,
  },
  {
    name: "Google Cybersecurity Professional Certification",
    date: "",
    id: 2,
  },
];

export const projects = [
  {
    id: 1,
    title: "Blue Team in a Box",
    subtitle: "ELK-Powered SOC with Brute-Force Defense",
    description: "Engineered a production-grade SOC environment using ELK Stack, Elastic Agents, and Fleet Server, enabling centralized log ingestion, threat detection, and real-time visualizations across simulated endpoints.",
    details: [
      "Developed and tuned detection rules for SSH/RDP brute-force attacks with MITRE ATT&CK mappings",
      "Integrated automated alert escalation to osTicket for a full incident lifecycle simulation",
      "Integrated Mythic C2 framework to emulate adversary behavior, enabling blue team validation of detection logic",
    ],
    technologies: ["ELK Stack", "Elastic Agents", "Fleet Server", "Wazuh", "Mythic C2", "osTicket", "MITRE ATT&CK"],
    color: "#64ffda",
    featured: true,
  },
  {
    id: 2,
    title: "AI Receptionist System",
    subtitle: "Voice-Based Appointment Automation",
    description: "Built a real-time AI receptionist to automate appointment scheduling and FAQ handling through voice interactions, securely capturing user information.",
    details: [
      "Voice interaction handling",
      "Secure data capture",
      "FAQ automation",
      "Appointment scheduling",
    ],
    technologies: ["AI", "Voice Recognition", "Automation", "N8N"],
    color: "#bd34fe",
    featured: false,
  },
  {
    id: 3,
    title: "VirusTotal Wazuh Integration",
    subtitle: "Automated Malware Detection & Remediation",
    description: "Integrated VirusTotal API with Wazuh to detect known malware via hash lookups and automated endpoint remediation.",
    details: [
      "Hash-based malware detection",
      "Automated endpoint remediation",
      "90% reduction in manual intervention",
    ],
    technologies: ["VirusTotal API", "Wazuh", "Automation", "Python"],
    color: "#3b82f6",
    featured: false,
  },
  {
    id: 4,
    title: "RAG Document Chatbot",
    subtitle: "Intelligent Document Query System",
    description: "Developed a Document-based Chatbot using Retrieval-Augmented Generation (RAG) to enable intelligent question answering over large sets of documents.",
    details: [
      "40% reduction in triage lookup time",
      "Large document set processing",
      "Natural language querying",
    ],
    technologies: ["RAG", "LangChain", "NLP", "Vector DB"],
    color: "#ff6b6b",
    featured: false,
  },
];

export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];
