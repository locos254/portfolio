import { Monitor, LayoutGrid, Server, PenTool, Briefcase, ShoppingCart, Database, Cloud } from "lucide-react";
import type { ComponentType } from "react";

export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  overview: string;
  whatYouGet: string[];
  process: { step: string; description: string }[];
  idealFor: string[];
  color: string;
  IconComponent: ComponentType<{ size?: number; className?: string }>;
}

export const services: Service[] = [
  {
    slug: "website-development",
    title: "Website Development",
    shortDescription: "Custom, responsive, and high-performance websites tailored to your brand identity.",
    overview: "I build professionally designed websites that load fast, rank well on Google, and convert visitors into customers. Every site is hand-coded for performance, mobile-first, and built to reflect your brand perfectly — no generic templates.",
    whatYouGet: [
      "Fully responsive design for mobile, tablet and desktop",
      "Fast-loading, SEO-optimized HTML/CSS/JS",
      "Custom design matching your brand colors and fonts",
      "Contact forms and social media integration",
      "Google Analytics and SEO meta tags setup",
      "6 months of free bug fixes after delivery",
      "Full source code ownership"
    ],
    process: [
      { step: "Discovery", description: "We discuss your business, goals, target audience, and design preferences." },
      { step: "Design", description: "I create a visual mockup so you can see exactly what the site will look like before development." },
      { step: "Development", description: "I build the site with clean, fast code. You receive regular progress updates." },
      { step: "Review", description: "You test the site and request any changes before we finalize." },
      { step: "Launch", description: "The site is deployed to your domain and goes live." }
    ],
    idealFor: ["Small businesses", "Restaurants and hotels", "Personal brands", "Portfolios", "Churches and NGOs"],
    color: "from-blue-400 to-blue-600",
    IconComponent: Monitor
  },
  {
    slug: "web-app-development",
    title: "Web App Development",
    shortDescription: "Complex, scalable single-page applications with modern frameworks like React.",
    overview: "I build fully functional web applications that users can sign into, interact with, and use to run their business. Whether it's a dashboard, a booking system, or a custom business tool — I build it to scale.",
    whatYouGet: [
      "Full-stack web application (frontend + backend)",
      "User authentication and role management",
      "Database design and setup",
      "REST API with full CRUD operations",
      "Responsive React/Next.js frontend",
      "Deployed and hosted on your chosen server",
      "Admin panel for managing content"
    ],
    process: [
      { step: "Requirements", description: "We map out every feature and user flow before any code is written." },
      { step: "Architecture", description: "I design the database schema, API structure, and frontend component tree." },
      { step: "Development", description: "Frontend and backend built in parallel with weekly demos." },
      { step: "Testing", description: "Full testing of all features before handover." },
      { step: "Deployment", description: "Deployed to Vercel, Render, or your preferred hosting." }
    ],
    idealFor: ["SaaS products", "Business management tools", "Booking and reservation systems", "Social platforms", "Internal company dashboards"],
    color: "from-purple-400 to-purple-600",
    IconComponent: LayoutGrid
  },
  {
    slug: "api-development",
    title: "API Development",
    shortDescription: "Robust, secure, and well-documented RESTful and GraphQL APIs for seamless integrations.",
    overview: "I build backend APIs that power mobile apps, web apps, and third-party integrations. Every API I build is documented, versioned, secured with authentication, and thoroughly tested before delivery.",
    whatYouGet: [
      "RESTful or GraphQL API design",
      "Secure JWT or session-based authentication",
      "Full API documentation (Postman collection or Swagger)",
      "Rate limiting and security middleware",
      "Database integration (PostgreSQL, MySQL, MongoDB)",
      "Unit and integration tests",
      "Deployed to cloud (Render, Railway, or AWS)"
    ],
    process: [
      { step: "API Design", description: "We define every endpoint, request/response format, and authentication strategy." },
      { step: "Development", description: "I build and test each endpoint with real data." },
      { step: "Documentation", description: "Full Postman or Swagger docs so your team can integrate easily." },
      { step: "Testing", description: "Edge cases, error handling, and load testing." },
      { step: "Deployment", description: "API is deployed, monitored, and handed over with integration guide." }
    ],
    idealFor: ["Mobile app backends", "Third-party integrations", "Microservices", "Data-driven applications"],
    color: "from-pink-400 to-pink-600",
    IconComponent: Server
  },
  {
    slug: "uiux-design",
    title: "UI/UX Design",
    shortDescription: "Intuitive, user-centric designs with high-fidelity prototypes using Figma.",
    overview: "Good design is invisible — users just feel comfortable. I design interfaces that guide users naturally, reduce confusion, and increase conversions. Delivered as Figma files with exported assets ready for development.",
    whatYouGet: [
      "User research and persona mapping",
      "Wireframes and user flow diagrams",
      "High-fidelity Figma mockups",
      "Interactive prototype for user testing",
      "Design system (colors, typography, components)",
      "Exported assets and developer handoff notes",
      "Mobile and desktop versions"
    ],
    process: [
      { step: "Research", description: "Understanding your users, competition, and business goals." },
      { step: "Wireframes", description: "Low-fidelity sketches mapping out all screens and user flows." },
      { step: "Visual Design", description: "High-fidelity mockups with your brand identity applied." },
      { step: "Prototype", description: "Clickable prototype you can test with real users." },
      { step: "Handoff", description: "Developer-ready Figma files with specs and exported assets." }
    ],
    idealFor: ["Startups launching new products", "Businesses redesigning existing apps", "Teams needing design before development"],
    color: "from-orange-400 to-orange-600",
    IconComponent: PenTool
  },
  {
    slug: "management-systems",
    title: "Management Systems",
    shortDescription: "Comprehensive School and Hotel management software to automate operations.",
    overview: "I specialize in building custom management systems for schools, hotels, hospitals, and businesses. These are tailored ERP solutions that replace paperwork with digital workflows, saving time, reducing errors, and giving you full visibility over your operations.",
    whatYouGet: [
      "Custom-built system for your specific operations",
      "Multi-user role management (Admin, Staff, Manager)",
      "Reporting and analytics dashboards",
      "Data export to Excel/PDF",
      "Automated notifications and alerts",
      "Secure cloud or local deployment",
      "Training and onboarding for your team",
      "Ongoing support and updates"
    ],
    process: [
      { step: "Operations Audit", description: "I map your current workflows to understand exactly what needs to be digitized." },
      { step: "System Design", description: "Database schema and module architecture designed with your input." },
      { step: "Module Development", description: "Each module built and tested individually before integration." },
      { step: "Training", description: "I train your staff on how to use the system." },
      { step: "Go Live", description: "Full data migration from your current system and go-live support." }
    ],
    idealFor: ["Schools and colleges", "Hotels and guesthouses", "Clinics and hospitals", "Rental businesses"],
    color: "from-green-400 to-green-600",
    IconComponent: Briefcase
  },
  {
    slug: "ecommerce-systems",
    title: "E-commerce Systems",
    shortDescription: "Secure online stores with payment gateways, inventory management, and smooth checkout.",
    overview: "I build fully functional online stores that let you sell products or services 24/7. From a simple product catalog to a full-featured store with M-Pesa/card payments, inventory tracking, and order management — I build it to sell.",
    whatYouGet: [
      "Product catalog with categories and search",
      "Shopping cart and secure checkout",
      "M-Pesa and/or card payment integration",
      "Order management and tracking",
      "Inventory and stock management",
      "Customer accounts and order history",
      "Admin panel for products, orders, and users",
      "Discount codes and promotions"
    ],
    process: [
      { step: "Store Planning", description: "We plan the product structure, payment methods, and checkout flow." },
      { step: "Design", description: "Store design that builds trust and drives conversions." },
      { step: "Development", description: "Full store built with payment integration." },
      { step: "Testing", description: "Full end-to-end checkout testing with real and test payments." },
      { step: "Launch", description: "Store goes live with all products loaded and tested." }
    ],
    idealFor: ["Retail shops going online", "Fashion and clothing brands", "Electronics retailers", "Food and grocery delivery"],
    color: "from-teal-400 to-cyan-600",
    IconComponent: ShoppingCart
  },
  {
    slug: "database-design",
    title: "Database Design",
    shortDescription: "Optimized relational and NoSQL database schemas for performance and scale.",
    overview: "A poorly designed database causes slow queries, data inconsistencies, and expensive fixes later. I design clean, normalized database schemas that are fast, scalable, and maintainable — and I document every decision.",
    whatYouGet: [
      "Entity Relationship Diagram (ERD)",
      "Normalized schema design (1NF, 2NF, 3NF)",
      "Indexing strategy for performance",
      "Stored procedures and triggers where needed",
      "Migration scripts",
      "Documentation and data dictionary",
      "Query optimization for slow queries"
    ],
    process: [
      { step: "Requirements", description: "Understanding all data entities, relationships, and access patterns." },
      { step: "ERD Design", description: "Visual entity relationship diagram mapping all tables and relationships." },
      { step: "Schema Creation", description: "SQL/NoSQL schema with indexes, constraints, and relationships." },
      { step: "Optimization", description: "Query analysis and index tuning for performance." },
      { step: "Documentation", description: "Full data dictionary handed over with the schema." }
    ],
    idealFor: ["New applications needing a solid data foundation", "Existing apps with slow queries", "Business intelligence and reporting systems"],
    color: "from-indigo-400 to-indigo-600",
    IconComponent: Database
  },
  {
    slug: "cloud-automation",
    title: "Cloud & Automation",
    shortDescription: "Deployment to AWS/Vercel and setting up CI/CD pipelines for business automation.",
    overview: "I help businesses move to the cloud, automate repetitive workflows, and set up professional deployment pipelines. Whether it's deploying your app to a reliable server or automating your business processes, I make technology work harder for you.",
    whatYouGet: [
      "Cloud deployment (Vercel, Render, Railway, AWS)",
      "Custom domain and SSL certificate setup",
      "CI/CD pipeline with auto-deployment",
      "Environment and secrets management",
      "Database backup automation",
      "Server monitoring and uptime alerts",
      "Business process automation scripts",
      "Cron jobs for scheduled tasks"
    ],
    process: [
      { step: "Audit", description: "Reviewing your current infrastructure and automation needs." },
      { step: "Plan", description: "Designing the optimal cloud architecture for your needs and budget." },
      { step: "Setup", description: "Provisioning servers, domains, SSL, and deployment pipelines." },
      { step: "Automate", description: "Setting up automation scripts and cron jobs." },
      { step: "Monitor", description: "Configuring uptime monitoring and alerts." }
    ],
    idealFor: ["Teams deploying for the first time", "Businesses needing reliable uptime", "Apps with manual repetitive workflows"],
    color: "from-blue-500 to-cyan-500",
    IconComponent: Cloud
  }
];
