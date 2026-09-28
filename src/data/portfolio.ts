export const profile = {
  name: "Jamal Caesar",
  initials: "JC",
  role: "Software Developer",
  secondaryRole: "IT Technician",
  location: "St. Kitts & Nevis",
  email: "jamal.a.a.caesar@gmail.com",
  github: "https://github.com/CyzarVII",
  linkedin: "https://www.linkedin.com/in/jamalcaesar",
  resume: "https://github.com/CyzarVII/Portfolio/raw/main/assets/resume/Jamal_Caesar_Resume.pdf",
  tagline:
    "I design, build, and maintain reliable systems, from role-secured applications to full-stack web platforms.",
  summary:
    "A St. Kitts-based developer and IT technician at Clarence Fitzroy Bryant College, combining user-focused web development with hands-on support across education, financial services, and managed services.",
  about: [
    "I build user-focused web solutions and support the technology people rely on every day. At Clarence Fitzroy Bryant College, I help students, staff, and faculty with Microsoft 365, Canvas and other learning platforms, account access, devices, and connectivity.",
    "I hold a Technical Diploma in Computer Science (Web Programming) from Nova Scotia Community College and an Associate Degree in Information Technology from Clarence Fitzroy Bryant College.",
    "Previously, I supported customers and employees at TD Insurance, Buchanan Technologies, and Innovatia. My work spans service-desk triage, clear documentation, customer training, and practical improvements to support workflows.",
  ],
} as const;

export const stats = [
  { value: "7+", label: "Years in tech" },
  { value: "500+", label: "Clients supported" },
  { value: "90%", label: "First-call resolution" },
  { value: "2", label: "Production systems shipped" },
] as const;

export const education = [
  {
    credential: "Technical Diploma in Computer Science, Web Programming",
    school: "Nova Scotia Community College",
    location: "Halifax, NS",
  },
  {
    credential: "Associate Degree, Information Technology",
    school: "Clarence Fitzroy Bryant College",
    location: "St. Kitts",
  },
] as const;

export const skillGroups = [
  {
    title: "Backend & Systems",
    items: ["Python (Flask)", "SQLAlchemy", "REST API design", "JWT & role-based auth", "SQLite / SQL", "PHP", "C++"],
  },
  {
    title: "Frontend",
    items: ["HTML5 & CSS", "JavaScript", "React", "Next.js", "Tailwind CSS", "Responsive design", "Jinja templates"],
  },
  {
    title: "IT & Tooling",
    items: ["Microsoft 365", "Windows support", "Canvas / LMS", "SSO", "Laptop deployment", "Domain joining", "Printers & networking", "Git & GitHub"],
  },
  {
    title: "Support & Soft Skills",
    items: ["Testing & debugging", "Incident triage", "Spiceworks", "ServiceNow", "User guides", "Technical documentation", "Customer training"],
  },
] as const;

export const experience = [
  {
    period: "Present",
    location: "St. Kitts & Nevis",
    title: "IT Technician",
    company: "Clarence Fitzroy Bryant College (CFBC)",
    points: [
      "Manage and prioritize support requests in Spiceworks, keeping clear ticket notes and a consistently high level of resolution.",
      "Support students, staff, and faculty with Microsoft 365, Canvas and other learning platforms, SSO, and account access.",
      "Configure and deploy laptops with Windows updates, domain joining, software installation, and readiness checks.",
      "Troubleshoot printers, workstations, connectivity, and access points; create user guides and QR-based support resources.",
    ],
  },
  {
    period: "Nov 2022 to Jul 2024",
    location: "Halifax, NS",
    title: "Technical Support Specialist",
    company: "TD Insurance Meloche Monnex",
    points: [
      "Delivered technical support to more than 200 clients while consistently reducing average resolution time.",
      "Guided account holders through web platform setup and account configuration.",
      "Documented incidents and resolutions in the ticketing system to improve process efficiency.",
      "Resolved Microsoft Office suite issues within a 24-hour service window.",
    ],
  },
  {
    period: "Sep 2022 to Nov 2022",
    location: "Halifax, NS",
    title: "Service Desk Analyst",
    company: "Buchanan Technologies",
    points: [
      "Provided technical support to more than 100 employees with a 90% first-call resolution rate.",
      "Logged and managed support tickets in ServiceNow, improving team resolution speed.",
      "Maintained detailed logs supporting escalation of more than 50 complex incidents.",
    ],
  },
  {
    period: "Nov 2021 to Aug 2022",
    location: "Halifax, NS",
    title: "Technical Support Specialist (Contract)",
    company: "TD Insurance Meloche Monnex",
    points: [
      "Supported more than 200 clients across phone and email with a focus on rapid resolution.",
      "Assisted with web platform setup and account access issues for a wide range of users.",
    ],
  },
  {
    period: "Apr 2021 to Oct 2021",
    location: "St. John, NB · Remote",
    title: "Basic Install and Tier II Support Specialist",
    company: "Innovatia Inc.",
    points: [
      "Collaborated directly with customers to gather technical requirements and deliver accurate system builds.",
      "Tested and validated systems to confirm full compliance before handover.",
    ],
  },
  {
    period: "Nov 2018 to Sep 2019",
    location: "Basseterre, St. Kitts & Nevis",
    title: "Assistant Webmaster",
    company: "ITTAE.TECH",
    points: [
      "Updated website content and maintained accurate information across web pages.",
      "Used search analytics and reporting to identify opportunities that supported a 35% increase in web traffic.",
      "Optimized online assets and helped business units with content management best practices.",
    ],
  },
] as const;

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  year: string;
  category: "Desktop & Backend" | "Full-Stack" | "Web App" | "Interactive";
  tech: string[];
  link?: string;
  linkLabel?: string;
  featured?: boolean;
  private?: boolean;
};

export const swiftCheck = {
  slug: "swift-check",
  name: "Swift Check",
  tagline: "School admissions operations and eligibility processing in one secure workspace.",
  description:
    "A browser-based admissions platform for processing eligibility, reviewing school activity, managing cases, and exporting reports. Each school runs its own private service for records, permissions, imports, and eligibility decisions. Its dashboard summarizes those existing school records for operational oversight.",
  year: "2026 to present",
  repo: "https://github.com/CyzarVII/Swift-Check",
  highlights: [
    {
      title: "Operations dashboard",
      body: "Summary cards for users, active sessions, cases, reports, compliance, and system health, with a 14-day activity trend and eligibility outcome chart.",
    },
    {
      title: "Incident & case management",
      body: "Staff log cases against students or imports, triage by priority, assign owners, and resolve with a required resolution note. Every change lands on a case timeline, the audit log, and the alerts feed.",
    },
    {
      title: "Eligibility engine",
      body: "Authoritative rules engine evaluates student records against configurable school policy and produces auditable outcomes.",
    },
    {
      title: "Role & division enforcement",
      body: "JWT-backed auth with Creator, Admin, Registrar, Assistant Registrar, and Admissions Officer tiers. Creator owns user management and server settings; Admin is scoped to audit logs, notifications, and theming.",
    },
    {
      title: "Monitoring & compliance",
      body: "Live system status for the server, database, import pipeline, and engine, plus coverage gauges showing how complete results, requirements, and decisions are.",
    },
    {
      title: "Import pipeline",
      body: "Excel and PDF imports go through a reviewed, fingerprinted batch flow so every decision can be traced back to its source files.",
    },
    {
      title: "Auditing & notifications",
      body: "Every privileged action is logged and surfaced in a recent-activity feed, and an alert panel keeps staff informed of state changes.",
    },
    {
      title: "Reporting & export",
      body: "Styled Excel and CSV exports for eligibility, students, results, and processing history, with PDF evidence and per-run history saved for audits.",
    },
    {
      title: "Workflow automation",
      body: "Creator-defined rules react to finished imports, completed processing, and case events by notifying a role or opening a follow-up case. Run history and audit records stay on the school's own service.",
    },
  ],
  architecture: [
    { layer: "Client", value: "Browser application (replaced the Electron desktop client)" },
    { layer: "Backend API", value: "Flask served by Waitress" },
    { layer: "Data layer", value: "SQLAlchemy ORM over SQLite" },
    { layer: "Auth", value: "JWT with role and division enforcement, optional Microsoft sign-on" },
    { layer: "Dashboard", value: "Read-only operational summaries from existing school records" },
    { layer: "Deployment", value: "One school per deployment, with backup, restore, and integrity scripts" },
  ],
  role: "Sole architect and developer responsible for the security model, database schema, eligibility rules, API, operations dashboard, browser client, deployment tooling, and operator documentation.",
  tech: ["Python", "Flask", "Waitress", "SQLAlchemy", "SQLite", "JWT", "JavaScript", "SVG charts", "Microsoft SSO"],
} as const;

export const projects: Project[] = [
  {
    slug: "swift-check",
    name: "Swift Check",
    tagline: swiftCheck.tagline,
    description: swiftCheck.description,
    year: "2026",
    category: "Web App",
    tech: ["Python", "Flask", "SQLAlchemy", "JWT", "Analytics"],
    link: "https://github.com/CyzarVII/Swift-Check",
    linkLabel: "Case study",
    featured: true,
    private: true,
  },
  {
    slug: "workforce-management",
    name: "Workforce Management System",
    tagline: "Full-stack workforce platform with MFA, IP restrictions, and audit logging.",
    description:
      "A full-stack workforce management platform built with Python (Flask) and server-rendered templates. Includes secure authentication, role-based access control, IP restrictions, clock-in/clock-out tracking, reporting with exports, and session audit logs.",
    year: "2026",
    category: "Full-Stack",
    tech: ["Python (Flask)", "SQLAlchemy", "Jinja", "JavaScript", "SQL"],
    featured: true,
    private: true,
  },
  {
    slug: "application-portal",
    name: "Application Portal",
    tagline: "Multi-step application management with draft save and admin review tools.",
    description:
      "Full-stack application management system with multi-step workflows, secure draft save and resume, email verification, and admin tools for handling submissions and documents.",
    year: "2026",
    category: "Full-Stack",
    tech: ["Next.js", "React", "Tailwind CSS"],
    private: true,
  },
  {
    slug: "pokedex-api",
    name: "Pokedex API App",
    tagline: "Live Pokémon data explorer built on the PokéAPI.",
    description:
      "Interactive Pokedex that fetches live Pokémon data from the PokéAPI and displays stats, sprites, and abilities in a clean card interface.",
    year: "2025",
    category: "Web App",
    tech: ["JavaScript", "REST API", "HTML/CSS"],
    link: "https://github.com/CyzarVII/pokedex-api",
    linkLabel: "View code",
  },
  {
    slug: "react-digital-clock",
    name: "React Digital Clock",
    tagline: "Real-time clock built with React hooks.",
    description:
      "A real-time digital clock built with React hooks, displaying live time updates with a sleek dark interface and animated transitions.",
    year: "2025",
    category: "Interactive",
    tech: ["React", "JavaScript", "CSS"],
    link: "https://github.com/CyzarVII/my-react-app",
    linkLabel: "View code",
  },
  {
    slug: "tic-tac-toe",
    name: "Tic Tac Toe",
    tagline: "Two-player game with win detection and score tracking.",
    description:
      "Two-player Tic Tac Toe with win detection, draw detection, score tracking, and a smooth restart animation.",
    year: "2024",
    category: "Interactive",
    tech: ["JavaScript", "HTML", "CSS"],
    link: "https://github.com/CyzarVII/Tic-Tac-Toe",
    linkLabel: "View code",
  },
  {
    slug: "stopwatch",
    name: "Stopwatch App",
    tagline: "Precision timing with lap history.",
    description:
      "Precision stopwatch with start, stop, lap recording, and reset. Stores lap history in session and renders updates in real time.",
    year: "2024",
    category: "Interactive",
    tech: ["JavaScript", "HTML", "CSS"],
    link: "https://github.com/CyzarVII/StopWatch",
    linkLabel: "View code",
  },
  {
    slug: "calculator",
    name: "Calculator App",
    tagline: "Keyboard-driven calculator with expression history.",
    description:
      "Fully functional calculator supporting arithmetic operations, keyboard input, expression history, and clean error handling.",
    year: "2024",
    category: "Interactive",
    tech: ["JavaScript", "HTML", "CSS"],
    link: "https://github.com/CyzarVII/Calculator",
    linkLabel: "View code",
  },
  {
    slug: "chess",
    name: "Chess Game",
    tagline: "Browser chess with full move validation.",
    description:
      "Browser-based chess implementation with piece movement rules, turn handling, and capture logic.",
    year: "2024",
    category: "Interactive",
    tech: ["JavaScript", "CSS", "HTML"],
    link: "https://github.com/CyzarVII/Chess",
    linkLabel: "View code",
  },
];
