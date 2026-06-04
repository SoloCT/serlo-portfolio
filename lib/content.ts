// Single source of truth for all site copy.
// Synthesized from docs/content-source.md (union of all 8 résumés). CIBC named + real metrics (approved).

export type Segment = string | { hl: string };
export type Bullet = string | Segment[];

export const profile = {
  name: "Serlo Tam",
  eyebrow: "San Francisco · Data & Risk Analytics",
  roleLead: "Senior",
  roleAccent: "Risk & Data",
  roleTail: "Analyst",
  location: "San Francisco, CA",
  lede: "AI-native analyst who orchestrates LLM tooling to build fraud-detection systems and enterprise data infrastructure that protect hundreds of millions in assets, turning unstructured chaos into automated pipelines, governance standards, and decisions executives act on.",
  about: [
    "Senior Risk & Data Analyst at CIBC US (Corporate Security), where I was the founding data-literate hire and built the team's entire analytics function from the ground up. I turn messy operational reality into automated pipelines, fraud-detection systems, and governance standards the whole US organization now runs on.",
    "I work AI-native: I orchestrate LLM tooling like Claude Code, Cursor, and multi-agent workflows to prototype, automate, and ship faster than traditional analyst workflows allow, and I treat building new AI-orchestration skills as a core part of the craft. I bring those modern practices into a traditionally slow environment.",
    "Trilingual in English, Cantonese and Mandarin, an active DeFi/ETH participant, and a compulsive builder of side projects, from automation fleets to AI content tools.",
  ],
};

export type Metric = {
  target: number;
  prefix?: string;
  suffix?: string;
  label: string;
};

export const metrics: Metric[] = [
  { target: 200, prefix: "$", suffix: "M+", label: "in assets protected" },
  { target: 99, suffix: "%", label: "false positives cut" },
  { target: 1100, suffix: "+", label: "analyst hours saved / yr" },
  { target: 60, suffix: "+", label: "locations unified" },
];

export type ExperienceItem = {
  org: string;
  dept?: string;
  role: string;
  period: string;
  location: string;
  bullets: Bullet[];
};

export const experience: ExperienceItem[] = [
  {
    org: "CIBC US",
    dept: "Corporate Security · $200B+ bank",
    role: "Senior Risk & Data Analyst · Data Steward · Senior Records Officer",
    period: "Aug 2023 - Present",
    location: "Remote",
    bullets: [
      [
        "Built an automated ",
        { hl: "fraud-detection pipeline" },
        " in Python & SQL over ",
        { hl: "500K+ transactions/month" },
        ", cutting ",
        { hl: "false positives by 99%" },
        " (500K alerts → <20 actionable cases) while holding 100% detection across ",
        { hl: "$200M+ in assets" },
        ".",
      ],
      [
        "Stood up ",
        { hl: "insider-threat monitoring" },
        " (badge-swipe + printer analytics) that drove ",
        { hl: "quarterly incidents from 5 to 0" },
        " and surfaced employees exfiltrating and selling PII on the dark web.",
      ],
      [
        "Currently ",
        { hl: "leading UAT for the DTEX insider-risk rollout" },
        " as one of three core testers and de facto technical lead, escalating data-extraction architecture, S3/JSON formats, push-vs-pull cadence and schema drift into clear status for directors and the steering committee.",
      ],
      [
        "Engineered an enterprise ",
        { hl: "risk-intelligence parser" },
        " over ",
        { hl: "10,000+ regulatory items" },
        ", auto-surfacing the 10–20 relevant to each team, a ",
        { hl: "99.5% efficiency gain" },
        " saving ~",
        { hl: "1,100 analyst hours a year" },
        ", adopted as the org-wide standard.",
      ],
      [
        "Architected a ",
        { hl: "master location-data system" },
        " for ",
        { hl: "60+ US sites" },
        ", integrating Facilities, HR, IT and international sources via Python, SQL and the Geocoding API into a single source of truth with 20+ enriched attributes powering geospatial risk analytics.",
      ],
      [
        "Designed a ",
        { hl: "physical asset-tracking system" },
        " and real-time dashboard that took equipment losses from ",
        { hl: "$100K/quarter to near-zero" },
        ".",
      ],
      [
        "Built a quantitative ",
        { hl: "risk-scoring methodology" },
        " for physical security across 60+ locations, and secured executive approval to integrate third-party crime data into the framework.",
      ],
      [
        "Built the ",
        { hl: "analytics function from scratch" },
        " as the sole data-literate resource, building data models from highly unstructured sources plus ",
        { hl: "15+ automated pipelines" },
        " that cut monthly reporting from ",
        { hl: "80 hours to 8" },
        ".",
      ],
      [
        "Works ",
        { hl: "AI-native" },
        ", orchestrating ",
        { hl: "Claude Code, Cursor and multi-agent workflows" },
        " to build pipelines, internal tools and prototypes faster, bringing modern AI-assisted practices into a traditional bank and continuously ",
        { hl: "building new AI-orchestration skills" },
        " that level up how the team ships.",
      ],
      [
        "Leads ",
        { hl: "2 junior analysts" },
        " and mentors interns, standardizing SQL/Python practices and reusable frameworks, lifting team delivery efficiency ",
        { hl: "+30%" },
        " through documented processes and code reviews.",
      ],
      [
        "Drove company-level change from a single insight: flagged a ",
        { hl: "40% spike in resume fraud" },
        ", built the ROI case, and presented to the C-suite, resulting in a ",
        { hl: "dedicated background-screening team" },
        ".",
      ],
      [
        "Serves as ",
        { hl: "Data Steward & Senior Records Officer" },
        ", owning data-governance standards and acting as primary point of contact for analytics, audit support and regulatory inquiries across US operations.",
      ],
      [
        "Secretary to the ",
        { hl: "Insider Risk Governance Council" },
        ", owning quarterly executive presentations and Power BI scorecards, facilitating C-suite reviews across Corporate Security, HR and IT.",
      ],
    ],
  },
  {
    org: "KPMG LLP",
    role: "Audit Associate",
    period: "Sep 2022 - Aug 2023",
    location: "Chicago, IL",
    bullets: [
      [
        "Led cross-border audit coordination for publicly traded ",
        { hl: "tech, entertainment and e-commerce" },
        " clients, delivering analysis for quarterly and annual regulatory filings.",
      ],
      [
        "Reviewed ",
        { hl: "SOC-1 / SOC-2" },
        " controls and tested transaction samples across multi-entity systems; built ",
        { hl: "Power BI" },
        " dashboards and ",
        { hl: "Alteryx" },
        " automation that improved audit efficiency ",
        { hl: "40%" },
        " and cut manual ledger analysis ",
        { hl: "60%" },
        ".",
      ],
    ],
  },
];

export type SkillGroup = { group: string; items: string[] };

export const skills: SkillGroup[] = [
  {
    group: "AI & Orchestration",
    items: ["AI-native workflows", "Claude Code · Cursor", "AI orchestration", "Multi-agent workflows", "Agent & tool building", "Prompt engineering"],
  },
  {
    group: "Languages & Engineering",
    items: ["Python", "SQL", "dbt", "FastAPI", "SQLAlchemy", "scikit-learn", "ETL pipelines", "API integration", "Data modeling", "Geospatial"],
  },
  {
    group: "Data & Warehouse",
    items: ["Snowflake", "BigQuery", "MySQL", "duckDB", "Warehouse architecture"],
  },
  {
    group: "Visualization & BI",
    items: ["Tableau", "Power BI", "Excel · DAX · Power Query", "Alteryx", "Power Automate", "Jupyter"],
  },
  {
    group: "Risk & Compliance",
    items: ["Fraud & anomaly detection", "Master data management", "Data governance", "RCSA · CIRA", "Operational risk", "Regulatory reporting", "UAT", "DTEX", "FIS/BIC"],
  },
  {
    group: "Leadership",
    items: ["Team management", "Mentoring & skill-building", "Executive presentations", "Stakeholder management", "Org change management"],
  },
  {
    group: "Languages",
    items: ["English", "Cantonese", "Mandarin"],
  },
];

export type Project = { name: string; blurb: string; tags: string[] };

export const projects: Project[] = [
  {
    name: "cronboard",
    blurb: "A personal control panel for scheduled AI agents and local cron, a Next.js + FastAPI dashboard to monitor, trigger and track recurring jobs.",
    tags: ["Next.js", "FastAPI", "Python", "TypeScript"],
  },
  {
    name: "AI automation fleet",
    blurb: "A fleet of self-built scheduled agents orchestrated on Claude Code: ETH price alerts, a daily news brief, a job radar, and an email-to-Notion application tracker.",
    tags: ["Claude Code", "Automation", "Notion API", "Discord"],
  },
  {
    name: "fictionalreality",
    blurb: "An AI long-form fiction harness that plans, drafts and continues serialized novels while keeping world state consistent.",
    tags: ["LLMs", "Python", "Agents"],
  },
];

export type Education = { school: string; degree: string; year: string };

export const education: Education[] = [
  {
    school: "University of Illinois Urbana-Champaign",
    degree: "M.S., Accounting & Data Analytics",
    year: "2022",
  },
  {
    school: "University of California, Davis",
    degree: "B.A., Economics (Behavior & Strategies) · Technology Management Minor",
    year: "2020",
  },
];

export const contact = {
  email: "serlotamcho@gmail.com",
  linkedin: "https://www.linkedin.com/in/serlo-t-571719150/",
  location: "San Francisco, CA",
};

export const nav = [
  { label: "Impact", href: "#impact" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
