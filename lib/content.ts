// Single source of truth for all site copy.
// Synthesized from docs/content-source.md (union of all 8 résumés). CIBC named + real metrics (approved).

export type Segment = string | { hl: string };
export type Bullet = string | Segment[];

export const profile = {
  name: "Serlo Tam",
  eyebrow: "San Francisco · Risk, Governance & Data",
  roleLead: "Senior",
  roleAccent: "Risk & Data",
  roleTail: "Analyst",
  location: "San Francisco, CA",
  lede: "AI-native risk analyst who builds and runs risk programs and the data behind them, from fraud-detection systems and an insider-risk program built from scratch to governance standards and the exec- and regulator-facing reporting leadership acts on, protecting hundreds of millions in assets and turning unstructured chaos into automated, decision-ready intelligence.",
  about: [
    "Senior Risk & Data Analyst at CIBC US (Corporate Security), where I was the founding data-literate hire, built the team's entire analytics function from the ground up, and ran it solo as interim lead for eight months. I build and run risk programs, an insider-risk monitoring program from scratch, deficiency remediation, and risk policy and taxonomy with our second-line risk team, and I present the results to the Operational Risk Committee, executives, and regulators.",
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
        "Ran the ",
        { hl: "risk & analytics team solo as interim lead for 8 months" },
        " after the director departed and the role sat open, owning reporting, governance and stakeholder delivery with no drop in output.",
      ],
      [
        "Building an ",
        { hl: "insider-risk monitoring program from the ground up" },
        ": team structure, SOPs, a ",
        { hl: "fraud & case-type taxonomy" },
        ", and the data models behind each case type, defining how the function detects, classifies and investigates risk.",
      ],
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
        "Assessed a ",
        { hl: "third-party security vendor (DTEX)" },
        " as a core tester and de facto technical lead, evaluating its data handling and escalating ",
        { hl: "risk and data-protection gaps" },
        " to directors and the steering committee.",
      ],
      [
        "Stand up and maintain ",
        { hl: "risk policies and taxonomy" },
        " with second-line risk & compliance (",
        { hl: "Three Lines of Defense" },
        "), operationalizing policy and regulatory updates into procedures and controls.",
      ],
      [
        "Spearhead ",
        { hl: "remediation of self-assessed risk and deficiency items" },
        ", coordinating across IT, HR, Physical Security, external fraud and more to acquire the data needed to close gaps.",
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
        "Built a quantitative ",
        { hl: "risk-scoring methodology" },
        " for physical security across 60+ locations, and secured executive approval to integrate third-party crime data into the framework.",
      ],
      [
        "Built the ",
        { hl: "analytics function from scratch" },
        " as the founding data hire, modeling highly unstructured sources into ",
        { hl: "15+ automated pipelines" },
        " and ",
        { hl: "every Corporate Security dashboard" },
        " (Tableau/Power BI), cutting monthly reporting from ",
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
        "As ",
        { hl: "Data Steward & Senior Records Officer" },
        ", owns the analytics and ",
        { hl: "project management of every exec- and regulator-facing deck" },
        ", presenting to the ",
        { hl: "Operational Risk Committee, executives and regulators" },
        " (fraud risk councils, Federal Risk Board, IDFPR) to support oversight, governance and regulatory readiness.",
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
    group: "Risk & Governance",
    items: ["Insider risk & DLP", "Fraud & anomaly detection", "Risk program build", "SOPs & risk taxonomy", "Deficiency remediation", "Three Lines of Defense (2LOD)", "Third-party / vendor risk", "Data governance", "Master data management", "Regulatory reporting", "Operational risk", "UAT · DTEX"],
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
    group: "Leadership",
    items: ["Interim team lead", "Program & project management", "Team management & mentoring", "Executive & regulator presentations", "Stakeholder management", "Org change management"],
  },
  {
    group: "Languages",
    items: ["English", "Cantonese", "Mandarin"],
  },
];

export type Project = { name: string; blurb: string; tags: string[] };

export const projects: Project[] = [
  {
    name: "ReRoom",
    blurb: "A cross-platform PWA that scans or imports a floor plan and reimagines it, with footprint-locked wall editing and AI vision that auto-detects rooms from a photo.",
    tags: ["Next.js", "React Konva", "AI Vision", "TypeScript"],
  },
  {
    name: "Clicky",
    blurb: "A Windows AI desktop companion: a summonable corner buddy that captures your screen and answers questions about it, built on the Claude Agent SDK.",
    tags: ["Python", "PySide6", "Claude Agent SDK"],
  },
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
