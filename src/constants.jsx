import { Zap, Users, Activity } from 'lucide-react';

export const metrics = [
  { label: '$20K/Min', sub: 'Saved during GM shutdown', icon: <Zap className="text-red-500" /> },
  { label: '300K+', sub: 'Users at JPMC Scale', icon: <Users className="text-blue-500" /> },
  { label: '83%', sub: 'API Overhead Reduction', icon: <Activity className="text-green-500" /> }
];

export const projects = [
  {
    title: "The Crisis Resolver",
    company: "General Motors",
    headline: "$28.8M Save: Bridging Global Silos",
    problem: "Export-control regulations created a 'data wall' during a plant shutdown costing $20k/minute, preventing international partners from accessing critical systems.",
    action: "Navigated GM’s internal silos to secure a compliant SharePoint server for data hosting. Re-architected the WPF data layer and re-routed authorization logic within a 36-hour sprint.",
    result: "Ended the shutdown and established a new blueprint for secure, cross-border engineering collaboration.",
    tags: ["C#", ".NET Core", "WPF", "Infra MacGyvering"],
    cardColor: "red-500"
  },
  {
    title: "The Scale Architect",
    company: "JPMorgan Chase",
    headline: "7s to <1s: High-Velocity Data Management",
    problem: "Legacy manager reporting workflows suffered from 7-second UI load times and RDS memory spikes due to massive, unmanaged record sets.",
    action: "Designed a configuration-driven Spring Boot purge API and refactored RxJS observables to serve UI placeholders while photo APIs resolved.",
    result: "Achieved an 85% reduction in load times for 60,000+ managers, scaling to a 300,000+ employee application.",
    tags: ["Spring Boot", "Angular", "RxJS", "Data Strategy"],
    cardColor: "blue-500"
  },
  {
    title: "The Efficiency Expert",
    company: "Fiat Chrysler (Stellantis)",
    headline: "8min to <1min: Part Number Extraction",
    problem: "Manual ECU part number extraction was a multi-day process, taking over 8 minutes per vehicle scan with significant error risk.",
    action: "Automated the extraction workflow using Python and Selenium, bypassing legacy system API limitations.",
    result: "Reclaimed 2+ hours per day during release cycles and eliminated manual configuration errors.",
    tags: ["Python", "Selenium", "MATLAB", "Automation"],
    cardColor: "green-500"
  }
];

export const skillClusters = [
  {
    title: "AI-Augmented Stack",
    skills: ["AI-Assisted Pair Programming", "Cursor / Copilot Proficiency", "Automated Refactoring Workflows", "100% Test Coverage Automation"]
  },
  {
    title: "Core Engineering",
    skills: ["Java / Spring Boot", "Python", "C# / .NET Core", "React", "Angular", "TypeScript"]
  },
  {
    title: "Infrastructure & Stability",
    skills: ["AWS (S3, RDS)", "CI/CD (SonarQube)", "SQL / NoSQL Optimization", "Secure Coding (DevSecOps)"]
  }
];
