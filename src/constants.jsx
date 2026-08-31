import { Zap, Database, Clock, Activity } from 'lucide-react';

export const metrics = [
  { label: '1,600+', sub: 'Eng Hours Saved', icon: <Clock className="text-purple-500" /> },
  { label: '85%', sub: 'Load Time Reduction', icon: <Activity className="text-blue-500" /> },
  { label: '$20K/Min', sub: 'Saved during GM shutdown', icon: <Zap className="text-red-500" /> },
  { label: '5,000+', sub: 'Positions Automated', icon: <Database className="text-green-500" /> }
];

export const projects = [
  {
    title: "System Resilience",
    company: "General Motors",
    headline: "Saving 1,600+ Hours via Zero-Downtime Mitigations",
    problem: "An upstream dependency abruptly changed output formats, breaking system inputs and threatening a forced system rollback and redeployment.",
    action: "Engineered and deployed a rapid intermediate data converter to keep operations live while natively refactoring the core architecture.",
    result: "Averted a costly rollback, saved 1,600+ engineering hours in a single week, and protected the operational momentum of the business.",
    tags: [".NET", "Python", "System Architecture", "Integration"],
    cardColor: "purple-500"
  },
  {
    title: "High-Scale Performance",
    company: "JPMorgan Chase",
    headline: "Cutting Reporting Load Times From 7s to Under 1s",
    problem: "Legacy internal reporting workflows suffered from slow UI load times and database memory spikes due to heavy unmanaged record sets.",
    action: "Designed a configuration-driven Spring Boot backend API and refactored frontend state handling to optimize data delivery and UI rendering.",
    result: "Achieved an 85% reduction in page load times, drastically improving responsiveness for internal tool users at scale.",
    tags: ["Java", "Spring Boot", "Angular", "Performance"],
    cardColor: "blue-500"
  },
  {
    title: "The Crisis Resolver",
    company: "General Motors",
    headline: "$28.8M Save: Bridging Global Silos & Resolving Plant Shutdowns",
    problem: "Regulatory 'data walls' during a $20k/minute plant shutdownblocked international engineering teams from accessing critical systems.",
    action: "Rolled up my sleeves to navigate internal silos, secured a compliant data hosting environment, and re-engineered legacy layers to unblock cross-border collaboration.",
    result: "Ended the shutdown and established a new blueprint for secure, cross-border engineering collaboration.",
    tags: ["C#", ".NET Core", "WPF"],
    cardColor: "red-500"
  },
  {
    title: "Data Integrity & Scale",
    company: "JPMorgan Chase Asset & Wealth Management",
    headline: "Automating 5,000+ Daily Positions Across 71 Accounts",
    problem: "Teams manually reconciled 71 distinct accounts and sifted through nearly 5,000 records daily to catch position breaks.",
    action: "Engineered reconciliation workflow as part of a massive initiative to unify distributed financial records into a reliable source of truth.",
    result: "Automated massive manual tracking efforts, established high-precision data integrity, and ensured absolute transactional accuracy at scale.",
    tags: ["Java", "Spring Boot", "React", "Data Strategy"],
    cardColor: "green-500"
  }
];

export const skillClusters = [
  {
    title: "AI-Augmented Stack",
    skills: ["AI-Assisted Pair Programming", "Antigravity / Copilot Proficiency", "Automated Refactoring Workflows", "Test Coverage Automation"]
  },
  {
    title: "Core Engineering",
    skills: ["Java / Spring Boot", "React", "Python", "Angular", "TypeScript", "C# / .NET Core"]
  },
  {
    title: "Infrastructure & Stability",
    skills: ["AWS (S3, RDS)", "Static Analysis & Quality Gates", "MySQL/Oracle/PostgreSQL", "Security-Conscious Development"]
  }
];
