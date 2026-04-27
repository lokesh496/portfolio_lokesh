import { 
  Code2, 
  Terminal, 
  Database, 
  Layers, 
  Search, 
  Cpu, 
  Globe, 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Download,
  GraduationCap,
  Briefcase,
  Trophy,
  User,
  Layout,
  Server
} from 'lucide-react';

export const DATA = {
  name: "Veeranki Lokesh Kumar",
  role: "Full Stack Developer",
  location: "India",
  contact: {
    email: "veerankilokesh496@gmail.com",
    phone: "+91 9392874091",
    linkedin: "https://linkedin.com/in/veeranki-lokesh",
    github: "https://github.com/lokesh496",
    leetcode: "https://leetcode.com/u/Lokesh-17/",
  },
  summary: "Results-driven Full Stack Developer with hands-on experience in Java, Spring Boot, REST APIs, Microservices, and SQL, complemented by proficiency in Manual Testing and Selenium-based automation. Demonstrated ability to build, test, and deploy scalable web applications, mentor 100+ learners in core programming and DSA concepts, and deliver clean, maintainable code following Agile practices.",
  skills: [
    { name: "Languages", items: ["Java", "C++", "Python", "JavaScript", "SQL"], icon: Terminal },
    { name: "Frontend", items: ["HTML", "CSS", "Bootstrap", "React", "Tailwind"], icon: Layout },
    { name: "Backend", items: ["Spring Boot", "REST APIs", "Hibernate", "Microservices"], icon: Server },
    { name: "Testing", items: ["Manual Testing", "Selenium", "TestNG", "JUnit"], icon: Search },
    { name: "Databases", items: ["MySQL", "PostgreSQL"], icon: Database },
    { name: "Tools & Concepts", items: ["Git", "Maven", "Agile", "SOLID", "DSA"], icon: Cpu },
  ],
  experience: [
    {
      title: "Technical Trainer",
      company: "iamneo",
      period: "Aug 2025 – Present",
      location: "Remote",
      description: [
        "Designed and delivered structured training modules on Java, C++, DSA, and MySQL to 100+ students, resulting in a 30% improvement in average assessment scores.",
        "Conducted live coding sessions and problem-solving workshops, translating complex algorithmic concepts into real-world, industry-relevant scenarios.",
        "Mentored learners on SDLC best practices, clean code principles, and software engineering fundamentals, preparing them for technical interviews.",
        "Developed hands-on lab exercises, quizzes, and capstone projects aligned with industry expectations, increasing learner engagement by 40%."
      ]
    },
    {
      title: "Full Stack Developer Intern",
      company: "Global Quest Technologies",
      period: "Feb 2025 – Aug 2025",
      location: "India",
      description: [
        "Architected scalable enterprise applications using Spring Boot 3.x and MySQL 8.x for optimized data management.",
        "Delivered high-performance REST APIs reducing response times by 20% through efficient query restructuring and indexing.",
        "Achieved 85%+ unit test coverage using JUnit and Selenium, implementing automated testing for mission-critical features.",
        "Collaborated in an Agile Scrum environment with bi-weekly sprint deliverables and performance audits."
      ]
    },
    {
      title: "Machine Learning Intern",
      company: "INTS",
      period: "Jan 2024 - June 2024",
      location: "India",
      description: [
        "Developed regression-based ML models for weather forecasting achieving ~88% prediction accuracy using Scikit-learn and Python.",
        "Performed end-to-end data preprocessing, feature engineering, model training, and evaluation using Pandas, NumPy, and Matplotlib.",
        "Achieved high verification accuracy through rigorous cross-validation and hyperparameter tuning techniques."
      ]
    }
  ],
  projects: [
    {
      title: "Student Registration Web App",
      tech: ["Java", "Servlets", "JSP", "JDBC", "MySQL"],
      description: "A comprehensive student management system with a secure admin dashboard, role-based access control, and real-time database integration.",
      link: "#",
      github: "https://github.com/lokesh496",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Credit Card Fraud Detection",
      tech: ["Python", "Scikit-Learn", "Machine Learning", "Pandas"],
      description: "An ML pipeline achieving 92%+ accuracy in detecting fraudulent transactions using Random Forest and anomaly detection techniques.",
      link: "#",
      github: "https://github.com/lokesh496",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Tic Tac Toe (OOP)",
      tech: ["C++", "OOP", "Game Logic"],
      description: "A high-performance Tic Tac Toe game with an advanced AI opponent, featuring optimized win-detection and clean modular architecture.",
      link: "#",
      github: "https://github.com/lokesh496",
      image: "https://images.unsplash.com/photo-1605647540924-852290f6b0d5?auto=format&fit=crop&q=80&w=800",
    }
  ],
  certifications: [
    { name: "OCI AI Foundations", issuer: "Oracle" },
    { name: "Python Full Stack", issuer: "ExcelR" },
    { name: "Frontend Development", issuer: "NullClass" },
    { name: "Machine Learning", issuer: "INTS" },
    { name: "IoT Certification", issuer: "NPTEL" }
  ],
  education: {
    degree: "B.Tech in Computer Science & Engineering",
    cgpa: "7.2 / 10",
    period: "2021 - 2025"
  }
};
