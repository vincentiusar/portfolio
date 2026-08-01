// Single source of truth for all portfolio content.
// Edit here to update the site — components just render this data.

export const profile = {
  name: 'Vincentius Arnold Fridolin',
  role: 'Global Software Engineer',
  team: 'SmartThings Plugin Platform Team, Samsung Research Indonesia',
  location: 'Jakarta, Indonesia',
  email: 'vincentiusarnoldfridolin@gmail.com',
  phone: '+62 878 7526 3373',
  linkedin: 'https://linkedin.com',
  github: 'https://github.com',
  status: 'Employee of the Quarter · Jun 2025',
  tagline:
    "I design the API layer that connects Samsung's plugin ecosystem to real devices, then build the infrastructure that makes sure it never breaks silently.",
}

export const about = `Computer Science graduate from Telkom University with a 3.95 GPA, now two years into
Samsung Research Indonesia's SmartThings Plugin Platform team. My work sits at the seam
between platform and product: designing the JavaScript APIs that plugin developers build
on, and the automation and device-farm infrastructure that keeps 200+ of those APIs honest
across Android, iOS, and Tizen. I like problems where the fix isn't just code — it's the
process, tooling, and monitoring around the code.`

export const experience = [
  {
    company: 'Samsung Research Indonesia',
    role: 'Global Software Engineer',
    period: 'Feb 2024 — Now',
    location: 'Jakarta, Indonesia',
    intro:
      'Two years across the plugin platform\u2019s API surface, its test automation infrastructure, and the internal tools that keep both maintainable.',
    stack: [
      'JavaScript / TypeScript',
      'LitElement',
      'ReactJS',
      'FastAPI',
      'Webpack / Rollup',
      'Jenkins',
      'Appium',
      'ADB',
      'Redis',
      'PostgreSQL',
      'Redis Queue',
      'SQLAlchemy',
      'Smartphone Test Farm (STF)',
      'nginx',
    ],
    projects: [
      {
        name: 'Plugin Platform',
        summary: 'The JS API surface that every SmartThings plugin is built on.',
        bullets: [
          'Designed and shipped 200+ JavaScript API interfaces over two years, now used by 20+ web plugins.',
          'Worked with 10+ cross-platform engineers to validate and refine APIs against real product requirements.',
          'Built the SmartKit JS API, cutting new client API development from roughly a month down to a week.',
        ],
      },
      {
        name: 'Plugin Automation Test',
        summary: 'Test infrastructure migrated from HQ and rebuilt for long-term maintainability.',
        bullets: [
          'Migrated automation testing infrastructure from the HQ team in Suwon to the Indonesia-based team — spent a month on-site at Samsung HQ to deliver an urgent migration.',
          'Architected a scalable automation platform spanning backend, frontend, and async jobs.',
          'Ran weekly monitoring on 200+ Plugin Platform APIs to catch cross-platform breakage across Android, iOS, and Tizen before it shipped.',
        ],
      },
      {
        name: 'Ticket Dashboard',
        summary: 'Centralized tracking for API testing workflows, built to cut manual overhead.',
        bullets: [
          'Reduced manual effort by centralizing API testing workflow tracking for the whole team.',
          'Integrated ReactJS, FastAPI, automated screen recording and logging, AI PR review, and Android/iOS device management into one dashboard.',
        ],
      },
      {
        name: 'Remote Device Farm',
        summary: 'Real-time control of shared Android devices — the animation in the hero above is modeled on this.',
        bullets: [
          'Enabled real-time control and testing of Android devices: auto-record, log capture, session sharing, remote ADB.',
          'Used daily by close to 20 plugin developers, meaningfully speeding up their dev loop.',
          'Let engineers share limited physical devices concurrently instead of queuing for hardware.',
          'Built on ADB, SSH, Jenkins, and Python to support multiple concurrent users, automation, and remote debugging.',
        ],
      },
    ],
  },
  {
    company: 'Digdaya Olah Teknologi Indonesia',
    role: 'Backend Engineer Intern',
    period: 'Aug 2022 — Dec 2022',
    location: 'Malang, Jawa Timur',
    intro: 'Backend internship split across a compliance system and an ERP integration portal.',
    stack: ['ReactJS', 'InertiaJS', 'Tailwind CSS', 'Laravel 8', 'Node.js (MERN)'],
    projects: [
      {
        name: 'Sistem Manajemen Program TJSL',
        summary: 'A management system for tracking corporate social-responsibility program compliance.',
        bullets: [
          'Built a system to track and record TJSL program implementation against regulatory and operational standards.',
          'Designed backend APIs and wrote the database queries that powered reporting and data processing.',
        ],
      },
      {
        name: 'TEM Web Portal AP Project',
        summary: 'A vendor-facing gateway into an Oracle NetSuite ERP instance.',
        bullets: [
          'Built a web application integrating ERP NetSuite Oracle as a gateway for vendors and TEM employees.',
        ],
      },
    ],
  },
]

export const skills = [
  {
    category: 'Languages & Frameworks',
    items: ['JavaScript', 'TypeScript', 'ReactJS', 'LitElement', 'Node.js', 'FastAPI', 'Laravel 8', 'InertiaJS'],
  },
  {
    category: 'Test & Device Automation',
    items: ['Appium', 'ADB', 'Jenkins', 'Smartphone Test Farm (STF)'],
  },
  {
    category: 'Data & Infrastructure',
    items: ['PostgreSQL', 'Redis', 'Redis Queue', 'SQLAlchemy', 'nginx'],
  },
  {
    category: 'Build & Styling',
    items: ['Webpack', 'Rollup', 'Tailwind CSS'],
  },
]

export const education = {
  school: 'Telkom University — Bandung, Jawa Barat',
  degree: 'Bachelor of Science, Computer Science',
  gpa: '3.95',
  graduation: 'August 2023',
  courses: [
    'Data Structures & Algorithms',
    'Java OOP',
    'Web Applications',
    'Mobile Application',
    'Database Modeling',
  ],
  activities: [
    'Assistant Professor of Basic Programming for two classes of 40 students',
    'Lab Assistant for Data Structures',
  ],
}

export const awards = [
  {
    title: 'Employee of the Quarter',
    org: 'Samsung Research Indonesia',
    date: 'Jun 2025',
    detail: 'Recognized for maintaining multiple projects concurrently under a heavy workload.',
  },
  {
    title: 'ICPC 2022',
    org: 'Bina Nusantara University',
    date: 'Nov 2022',
    detail: 'Placed in the top 40 of 417 competing teams.',
  },
  {
    title: 'IEEEXtreme Programming Competition 15.0',
    org: 'IEEE',
    date: 'Oct 2021',
    detail: 'Placed 589th of 6,435 teams worldwide — 11th of 42 Indonesian teams.',
  },
]

// Log lines for the animated device-farm signature component in the hero.
// Grounded in the actual Remote Device Farm project: ADB, STF, Jenkins, Redis Queue, screen recording.
export const farmLog = [
  'adb connect · device-07 · session #4471',
  'plugin-api → 200 OK · 42ms',
  'stf · reserving tizen-device-12',
  'jenkins · automation suite queued',
  'redis-queue · job consumed',
  'screen-record → started',
  'adb remote · multi-user session joined',
  'plugin-api → 200 OK · 31ms',
]
