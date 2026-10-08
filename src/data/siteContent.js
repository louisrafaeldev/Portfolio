export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Tools', href: '#tools' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

export const trustBadges = [
  'Automation & Workflow Support',
  'E-commerce Operations',
  'Product Data Management',
  'Lead Generation',
]

export const services = [
  {
    title: 'Automation & Workflow Support',
    description:
      'Build and maintain practical automations that reduce repetitive manual work and connect different business tools.',
    items: [
      'Make.com workflows',
      'Data processing',
      'Webhook automation',
      'Notifications',
      'Data routing',
      'Scheduled workflows',
      'API-based workflows',
    ],
  },
  {
    title: 'E-commerce Virtual Assistance',
    description:
      'Support online stores with product organization, catalog maintenance, data entry, research, and operational tasks.',
    items: [
      'Product listing support',
      'Product research',
      'Catalog organization',
      'Product imports',
      'Product data cleanup',
      'Inventory-related tasks',
    ],
  },
  {
    title: 'Product Data Management',
    description:
      'Organize, clean, standardize, and maintain large amounts of product information.',
    items: [
      'Product data extraction',
      'Spreadsheet organization',
      'Data cleaning',
      'Duplicate detection',
      'Product categorization',
      'Attribute standardization',
    ],
  },
  {
    title: 'Lead Generation & Web Research',
    description:
      'Research and organize qualified prospects while keeping lead databases accurate and structured.',
    items: [
      'Lead sourcing',
      'Web research',
      'Contact research',
      'Qualification',
      'Deduplication',
      'Google Sheets databases',
    ],
  },
  {
    title: 'Shopify Support',
    description:
      'Assist with product and store operations while keeping product information accurate and organized.',
    items: [
      'Product uploads',
      'Product information management',
      'Collection organization',
      'Product research',
      'Catalog maintenance',
    ],
  },
  {
    title: 'Data & Operations Support',
    description:
      'Help businesses keep their internal information organized, accessible, and ready for efficient operations.',
    items: [
      'Spreadsheet management',
      'Database organization',
      'Data validation',
      'Workflow documentation',
      'Administrative support',
      'Process improvement',
    ],
  },
]

export const toolGroups = [
  {
    title: 'Automation',
    items: ['Make.com', 'Webhooks', 'APIs', 'Automation workflows'],
    level: 'Hands-on',
  },
  {
    title: 'E-commerce',
    items: ['Shopify', 'Product catalogs', 'Inventory workflows'],
    level: 'Hands-on',
  },
  {
    title: 'Data',
    items: ['Google Sheets', 'Supabase', 'Structured data', 'CSV', 'Excel'],
    level: 'Hands-on',
  },
  {
    title: 'Development / No-Code',
    items: ['Lovable', 'HTML', 'CSS', 'JavaScript'],
    level: 'Working Knowledge',
  },
  {
    title: 'AI',
    items: ['AI-assisted workflows', 'AI research', 'AI-powered data processing'],
    level: 'Working Knowledge',
  },
  {
    title: 'Research',
    items: ['Web research', 'Product research', 'Lead research', 'Data extraction'],
    level: 'Hands-on',
  },
]

export const processSteps = [
  {
    number: '01',
    title: 'Understand',
    text: 'I first understand the business process, goals, and repetitive tasks.',
  },
  {
    number: '02',
    title: 'Organize',
    text: 'I structure the information and identify where errors or bottlenecks occur.',
  },
  {
    number: '03',
    title: 'Automate',
    text: 'I use tools like Make.com, webhooks, databases, and spreadsheets to reduce manual work.',
  },
  {
    number: '04',
    title: 'Test',
    text: 'I test workflows, validate data, and check edge cases before considering the process complete.',
  },
  {
    number: '05',
    title: 'Improve',
    text: 'I document the workflow and look for opportunities to make the process more efficient.',
  },
]

export const reasons = [
  {
    title: 'Detail-Oriented',
    text: 'I pay close attention to data quality, duplicates, missing information, and inconsistencies.',
  },
  {
    title: 'Automation Mindset',
    text: 'I look for opportunities to reduce repetitive manual work instead of simply repeating the same task.',
  },
  {
    title: 'Technical + Operational',
    text: 'My IT background helps me understand both the business task and the technology supporting it.',
  },
  {
    title: 'Organized',
    text: 'I structure information clearly so workflows and databases remain easy to manage.',
  },
  {
    title: 'Fast Learner',
    text: "I'm comfortable learning new platforms and adapting to different business processes.",
  },
  {
    title: 'Business-Focused',
    text: "My goal is not automation for the sake of automation—it's making the client's workflow easier and more reliable.",
  },
]

export const valuePoints = [
  'Reduce repetitive manual work',
  'Keep product data organized',
  'Improve data accuracy',
  'Create repeatable workflows',
  'Make large datasets easier to manage',
  'Keep lead pipelines organized',
  'Prepare cleaner data for e-commerce systems',
]

export const galleryItems = [
  {
    project: 'Influencer Outreach Flow',
    description: 'Make.com automation screenshot',
    tool: 'Make.com',
    accent: 'blue',
  },
  {
    project: 'Lead Database',
    description: 'Google Sheets lead database',
    tool: 'Google Sheets',
    accent: 'teal',
  },
  {
    project: 'Product Extraction',
    description: 'Product extraction spreadsheet',
    tool: 'Spreadsheet / Excel',
    accent: 'slate',
  },
  {
    project: 'QA Review',
    description: 'Product QA spreadsheet',
    tool: 'Excel',
    accent: 'green',
  },
  {
    project: 'Supabase Database',
    description: 'Database overview',
    tool: 'Supabase',
    accent: 'navy',
  },
  {
    project: 'Lovable App',
    description: 'Workflow interface mockup',
    tool: 'Lovable',
    accent: 'orange',
  },
  {
    project: 'Shopify Mockup',
    description: 'Product catalog mockup',
    tool: 'Shopify',
    accent: 'indigo',
  },
  {
    project: 'Workflow Diagram',
    description: 'Automated process flow',
    tool: 'Process Mapping',
    accent: 'purple',
  },
]

export const projects = [
  {
    id: 'influencer-outreach',
    label: 'Portfolio Project',
    title: 'Influencer Outreach & Lead Qualification Automation',
    category: 'Lead Generation / Automation / E-commerce',
    description:
      'Built a workflow concept for sourcing and organizing Instagram beauty and skincare creators for influencer outreach.',
    problem:
      'Manually researching creators, checking qualification criteria, tracking contact information, and maintaining outreach lists can become repetitive and difficult to manage.',
    solution:
      'Designed a structured Google Sheets + Make.com workflow for processing creator data, checking qualification criteria, calculating engagement-related information, identifying duplicates, and routing qualified creators for further outreach.',
    tools: ['Make.com', 'Google Sheets', 'Web research', 'Data validation', 'Automation logic'],
    workflow: [
      'Collect creator information',
      'Store creator data in Google Sheets',
      'Validate required fields',
      'Check duplicates',
      'Evaluate qualification criteria',
      'Calculate engagement information',
      'Route qualified records',
      'Prepare data for outreach',
    ],
    result:
      'This workflow organized creator research and outreach preparation into a cleaner, repeatable structure without requiring a manual, spreadsheet-only process each time.',
    overview:
      'This concept focuses on turning influencer research into a structured, manageable workflow for outreach preparation.',
    approach:
      'I built the workflow around data validation, duplicate checks, and qualification rules to keep a creator list organized and actionable.',
    challenges:
      'The main challenge was keeping creator data consistent while working with research-driven records that often needed manual verification.',
    outcome:
      'The process made it easier to sort and prioritize qualified candidates, reducing time spent on repetitive research and list maintenance.',
    learning:
      'I learned that the most valuable automation is not simply moving data around—it is creating a process that keeps important information current, valid, and easy to review.',
    summary:
      'A practical automation concept for organizing creator leads, checking qualification criteria, and preparing outreach-ready data.',
  },
  {
    id: 'supplier-catalog',
    label: 'Portfolio Project',
    title: 'Supplier Product Data Extraction & Catalog Preparation',
    category: 'E-commerce / Product Data / Automation',
    description:
      'Built a product extraction and preparation workflow for processing a large supplier catalog and preparing product data for an e-commerce environment.',
    problem:
      'Large supplier catalogs often include inconsistent product fields, variant definitions, image references, and duplicates, making import preparation tedious and error-prone.',
    solution:
      'Created and reviewed a structured extraction and QA workflow to validate records, identify duplicates, separate exceptions, and prepare clean import batches for supplier data.',
    tools: ['Web extraction', 'Structured product data', 'Excel', 'JSON', 'Data validation', 'QA', 'Deduplication', 'E-commerce catalog preparation'],
    workflow: [
      'Extract supplier product data',
      'Capture product information',
      'Capture variants',
      'Capture images',
      'Validate product records',
      'Identify duplicates',
      'Run QA checks',
      'Separate exceptions',
      'Prepare clean import batches',
    ],
    metrics: [
      '3,808 products extracted',
      '6,315 variants identified',
      '6,793 images processed',
      '3,808 QA rows',
      'Duplicate IDs/handles/variant/image IDs checked',
      'Final proposed batch contained 3,786 products ready for supplier import',
    ],
    evidence: [
      {
        id: 'extraction',
        label: '01 / EXTRACTION',
        title: 'Supplier Catalog Extraction',
        description: 'Structured supplier product data was extracted into organized product, variant, and image records instead of being handled as unstructured website content.',
        metrics: ['3,808 PRODUCTS', '6,315 VARIANTS', '6,793 IMAGES'],
      },
      {
        id: 'qa',
        label: '02 / QA & VALIDATION',
        title: 'Product Data QA',
        description: 'Each product record was reviewed for structural consistency, variants, image references, duplicate identifiers, and import readiness.',
        metrics: ['3,808 QA ROWS REVIEWED', '0 DUPLICATE PRODUCT IDs', '0 DUPLICATE HANDLES'],
      },
      {
        id: 'exceptions',
        label: '03 / EXCEPTION HANDLING',
        title: 'Exception Review & Resolution',
        description: 'Records requiring additional attention were separated from the clean import set instead of allowing questionable data to silently enter the catalog.',
        metrics: ['216 INITIAL EXCEPTIONS', 'REVIEW & VALIDATION', '19 HELD FOR MANUAL REVIEW'],
      },
      {
        id: 'import',
        label: '04 / IMPORT PREPARATION',
        title: 'Final Import-Ready Catalog',
        description: 'After extraction, validation, deduplication, and exception handling, the cleaned product set was prepared as a structured supplier import batch.',
        metrics: ['3,786 PRODUCTS PROPOSED FOR IMPORT'],
      },
      {
        id: 'workflow',
        label: '05 / WORKFLOW RESULT',
        title: 'From Supplier Catalog to Import-Ready Data',
        description: 'The project moved from raw supplier catalog content to a clean, reviewable, import-preparation workflow with measurable QA control.',
        metrics: ['3,808 PRODUCTS', '6,315 VARIANTS', '6,793 IMAGES'],
      },
    ],
    result:
      'The product dataset was reviewed for import readiness, with exceptions held for review so only clean records moved into the final proposed batch.',
    overview:
      'This project focused on turning a large supplier catalog into a more organized and import-ready product dataset.',
    approach:
      'I structured the workflow around extraction, cleanup, variation checks, image validation, and QA reviews so product data could be assessed systematically.',
    challenges:
      'The biggest challenge was handling variation and exception-heavy records without letting incomplete or duplicate data enter a downstream product import process.',
    outcome:
      'The process produced a cleaner import-ready set while making exceptions visible and easy to review instead of silently affecting the catalog.',
    learning:
      'I reinforced the importance of QA intelligence in e-commerce workflows: clean product data is not just about quantity, but about consistency and import reliability.',
    summary:
      'A large-scale product data preparation workflow designed to validate variants, images, duplicates, and import readiness for a supplier catalog.',
  },
  {
    id: 'recruiting-pipeline',
    label: 'Client Trial / Portfolio Case Study',
    title: 'Recruiting Lead Pipeline Automation',
    category: 'Automation / Lead Generation / Data Management',
    description:
      'Worked on a recruiting workflow designed to collect, organize, qualify, deduplicate, and manage candidate/business lead data.',
    problem:
      'Recruiting data can quickly become fragmented across sources, making it difficult to keep candidate and business records accurate, organized, and ready for review.',
    solution:
      'Developed a workflow concept for capturing structured lead data, storing it in a working database, deduplicating entries, and routing qualified records into a recruiting pipeline.',
    tools: ['Lovable', 'Supabase', 'Make.com', 'Webhooks', 'Database workflows', 'Structured lead data'],
    workflow: [
      'Source data',
      'Collect records',
      'Store in database',
      'Deduplicate entries',
      'Qualify leads',
      'Manage recruiting pipeline',
    ],
    result:
      'The project emphasized structured organization, better data quality, and repeatable lead handling across candidate and business records.',
    overview:
      'This case study demonstrates how I approach data-heavy recruitment workflows with organization and automation in mind.',
    approach:
      'I focused on creating a flow that captured incoming leads, standardized records, checked duplicates, and organized data for further review.',
    challenges:
      'The key challenge was maintaining clean, usable records across multiple data sources while reducing manual sorting and duplication.',
    outcome:
      'The workflow improved the clarity of the pipeline and made the available records easier to qualify, review, and manage.',
    learning:
      'This project reinforced that the value of automation is strongest when it brings structure to inconsistent inputs before they reach a team or client-facing process.',
    summary:
      'A lead-pipeline concept that brought together structured collection, deduplication, qualification, and database organization.',
  },
  {
    id: 'shopify-demo',
    label: 'Demo Project',
    title: 'Shopify Product Catalog Management Demo',
    category: 'E-commerce / Shopify',
    description:
      'Built a visually organized Shopify-style catalog mockup to demonstrate how product data can be structured for easier catalog maintenance and product management.',
    problem:
      'Without a clear catalog structure, product information can become difficult to track, especially when there are variations in pricing, tags, and inventory.',
    solution:
      'Designed a sample product catalog layout showing how product title, description, product type, vendor, collections, tags, variants, images, pricing, inventory, and SKU information can be organized in a clean, accessible format.',
    tools: ['Shopify-style catalog layout', 'Sample product data', 'Product organization', 'Inventory display', 'Catalog structure'],
    workflow: ['Map product attributes', 'Group by collection', 'Organize variants', 'Display pricing and images', 'Present inventory and SKU'],
    result:
      'The demo shows a clean product management structure that would make catalog updates easier to review, check, and maintain.',
    overview:
      'A sample store catalog concept designed to showcase how product information can be organized clearly and professionally.',
    approach:
      'I structured the display around product specification and inventory clarity, using sample clothing products to demonstrate product organization.',
    challenges:
      'The main challenge was balancing visual clarity with practical e-commerce fields so the demo stayed realistic and easy to understand.',
    outcome:
      'The result is a clean, business-friendly catalog layout that demonstrates the type of organization I can bring to product operations.',
    learning:
      'This project highlighted how important catalog structure is for productivity, especially when product updates, pricing, and variants need to stay consistent.',
    summary:
      'A sample Shopify-style catalog mockup showing organized product information using demo data only.',
  },
]

export const contactDetails = {
  email: 'louisrafael.quinones.va@gmail.com',
  linkedin: 'https://www.linkedin.com/in/your-linkedin-profile',
  onlinejobs: 'https://www.onlinejobs.ph/jobseekers/info/5254227',
  upwork: 'https://www.upwork.com/',
}

export const profileSummary = {
  title: 'Automation & E-commerce Virtual Assistant',
  subTitle: 'Automation VA | E-commerce Operations | Product Data | Lead Generation',
  positioning:
    'I help small businesses and online stores streamline repetitive tasks, organize product and business data, and build practical automations that save time and reduce manual work.',
}
