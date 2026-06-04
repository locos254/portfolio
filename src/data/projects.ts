import ecommerceImg from "@assets/screencapture-localhost-e-commerce-index-php-2026-06-04-12_18__1780600924039.png";
import hotelHeroImg from "@assets/opengraph_1780600977492.jpg";
import hotelDashImg from "@assets/screencapture-24d064ea-b872-47cc-9833-e8958ec9ef4e-00-3kyephbm_1780601556017.png";
import devImg from "@assets/633188208_122123684391002991_6671734969535941105_n_1780596173668.jpg";

export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  overview: string;
  problem: string;
  solution: string;
  image: string;
  tech: string[];
  features: string[];
  highlights: string[];
  github?: string;
}

export const projects: Project[] = [
  {
    slug: "electric-shop",
    title: "Electric Shop — E-Commerce Platform",
    category: "E-Commerce",
    description: "A full-featured online electronics store built with PHP and MySQL, complete with product catalog, cart, checkout, discount system, and admin panel.",
    overview: "Electric Shop is a complete e-commerce solution for electronics retail. Built from scratch using PHP and MySQL, it provides an end-to-end shopping experience — from browsing products with a 20% discount banner, adding items to cart, through to checkout. The platform also includes a dedicated admin panel for store owners to manage inventory, orders, and users.",
    problem: "Small electronics retailers in Kenya often rely on WhatsApp groups or physical stores to sell products, losing out on customers who prefer to shop online. There was a need for a professional, affordable online store solution.",
    solution: "I built Electric Shop as a robust PHP/MySQL web application with a clean Bootstrap UI. It includes user authentication, product management, a fully functional shopping cart, and an integrated admin dashboard — giving shop owners complete control over their online store without needing any technical knowledge.",
    image: ecommerceImg,
    tech: ["PHP", "MySQL", "Bootstrap", "JavaScript", "HTML5", "CSS3"],
    features: [
      "Product catalog with categories and search",
      "Shopping cart and checkout flow",
      "User registration and login",
      "20% discount system with coupon codes",
      "Admin panel for inventory management",
      "Order tracking and management",
      "Responsive mobile-first design",
      "Pagination for product listings"
    ],
    highlights: [
      "Full CRUD operations for products and orders",
      "Secure session-based authentication",
      "Admin and customer role separation",
      "Real-time stock management"
    ]
  },
  {
    slug: "hospital-system",
    title: "Hospital Management System",
    category: "Healthcare",
    description: "A centralized platform for healthcare facilities to manage patient records, appointments, staff scheduling, and billing with role-based access control.",
    overview: "A comprehensive Hospital Management System (HMS) that digitizes all core hospital operations. Designed for clinics and small hospitals in Kenya, it replaces paper-based processes with a fast, secure digital workflow covering patients, doctors, appointments, billing, and reporting.",
    problem: "Many healthcare facilities in Kenya still use manual paper records and spreadsheets to manage patients, appointments, and billing. This leads to data loss, long wait times, and billing errors — impacting both patient care and hospital revenue.",
    solution: "Developed a full-featured web-based HMS with separate portals for admins, doctors, and reception staff. The system manages the entire patient journey from registration through discharge, with automated billing and comprehensive reporting.",
    image: devImg,
    tech: ["Next.js", "Node.js", "PostgreSQL", "Prisma", "TypeScript", "Tailwind CSS"],
    features: [
      "Patient registration and medical records",
      "Doctor appointment scheduling",
      "Staff and department management",
      "Automated billing and invoicing",
      "Role-based access (Admin, Doctor, Receptionist)",
      "Prescription management",
      "Lab results tracking",
      "Financial reports and analytics"
    ],
    highlights: [
      "Multi-role access control system",
      "Real-time appointment calendar",
      "Automated invoice generation",
      "Comprehensive audit logs"
    ]
  },
  {
    slug: "azure-hotel-frontend",
    title: "Grand Azure Hotel — Website",
    category: "Hospitality",
    description: "A luxury hotel booking website for Grand Azure Hotel & Residences featuring an elegant hero section, room showcase, and seamless reservation flow.",
    overview: "The Grand Azure Hotel website is a premium, conversion-focused booking platform for a luxury hotel brand. The site presents the hotel's rooms, amenities, and services in a visually stunning format, with a clear path from browsing to reservation. Every design decision prioritizes elegance, speed, and trust.",
    problem: "Grand Azure needed a digital presence that matched their premium brand positioning. Their old site was dated, non-responsive, and failed to convert visitors into guests — leading to missed bookings and a poor brand perception.",
    solution: "Designed and built a world-class hotel website using React, Tailwind CSS, and Framer Motion. The site features a full-screen hero with parallax effects, a rooms and suites showcase, amenity highlights, guest reviews, and a call-to-action reservation system.",
    image: hotelHeroImg,
    tech: ["React", "Tailwind CSS", "Framer Motion", "Node.js", "Express"],
    features: [
      "Full-screen hero with cinematic photography",
      "Rooms and suites gallery with pricing",
      "Amenities and services showcase",
      "Guest review section",
      "Reservation inquiry form",
      "Mobile-first responsive design",
      "Smooth scroll animations",
      "SEO-optimized structure"
    ],
    highlights: [
      "Luxury brand visual identity",
      "Conversion-optimized layout",
      "Cinematic scroll animations",
      "High-performance image loading"
    ]
  },
  {
    slug: "azure-hotel-dashboard",
    title: "Grand Azure Hotel — Admin Dashboard",
    category: "Hospitality / Admin",
    description: "A full hotel management dashboard with real-time revenue tracking, booking management, housekeeping, guest profiles, analytics, and promo code management.",
    overview: "The Grand Azure Admin Dashboard is the operational backbone of the hotel. It gives hotel management a 360-degree view of the business — from live revenue and bookings to housekeeping schedules and guest loyalty programs. Built with a dark-mode first design for extended use.",
    problem: "Hotel staff were using multiple disconnected tools (spreadsheets, WhatsApp, manual registers) to manage bookings, track revenue, and coordinate housekeeping. This fragmentation caused missed bookings, revenue leakage, and poor guest experience.",
    solution: "Built a unified admin panel that centralizes all hotel operations. The dashboard shows real-time metrics, recent bookings, and booking trends. Staff can manage rooms, check guests in/out, coordinate housekeeping, manage promo codes, and view detailed revenue reports — all in one place.",
    image: hotelDashImg,
    tech: ["React", "Express.js", "PostgreSQL", "Recharts", "TypeScript", "Tailwind CSS"],
    features: [
      "Real-time revenue and bookings overview",
      "Monthly revenue and booking trend charts",
      "Full booking management (confirm, cancel, check-in/out)",
      "Room inventory and availability management",
      "Guest profiles and loyalty tracking",
      "Housekeeping coordination panel",
      "Promo code generation and management",
      "Activity logs and audit trail",
      "User account management",
      "Review and support ticket handling"
    ],
    highlights: [
      "$6,877+ in tracked revenue",
      "Complete booking lifecycle management",
      "Interactive revenue analytics charts",
      "Role-based staff access"
    ]
  },
  {
    slug: "mychat-app",
    title: "MYCHAT — Real-Time Messaging Platform",
    category: "Communication",
    description: "A real-time messaging platform with chat rooms, instant notifications, and a responsive modern UI — built for teams and communities.",
    overview: "MYCHAT is a real-time messaging application built to enable instant communication between users through chat rooms and direct messages. Inspired by platforms like Slack and Discord, it delivers a smooth, lag-free messaging experience with a clean, modern interface.",
    problem: "Teams and communities in Kenya needed an affordable, locally-hosted alternative to expensive international messaging tools. Existing tools like WhatsApp lacked structure for group work, while Slack was too expensive for small teams.",
    solution: "Built a real-time chat application using WebSockets for instant message delivery. Users can create accounts, join chat rooms, send messages, and receive notifications — all without page refreshes. The interface is fully responsive and works on any device.",
    image: devImg,
    tech: ["PHP", "JavaScript", "WebSockets", "MySQL", "CSS3", "HTML5"],
    features: [
      "Real-time instant messaging via WebSockets",
      "Multiple chat rooms and channels",
      "User authentication and profiles",
      "Message notifications and alerts",
      "Online/offline user status",
      "Message history and search",
      "Responsive design for mobile and desktop",
      "Emoji and file sharing support"
    ],
    highlights: [
      "Zero-refresh real-time communication",
      "Scalable room-based architecture",
      "Low-latency message delivery",
      "Clean, intuitive interface"
    ]
  },
  {
    slug: "school-management",
    title: "School Management System",
    category: "Education",
    description: "A comprehensive ERP solution for schools with modules for student records, exams, fee collection, class scheduling, and administrative reports.",
    overview: "A full-featured School Management System (SMS) that digitizes all academic and administrative operations for primary and secondary schools. From student enrollment through exam results and fee management, the system eliminates paper-based chaos and gives school administrators complete visibility over their institution.",
    problem: "Schools across Kenya still rely on manual registers, hand-written report cards, and spreadsheets. Fee collection is error-prone, exam records get lost, and generating reports takes days. Schools needed an affordable digital solution built for their specific context.",
    solution: "Developed a comprehensive web-based ERP for schools. The system handles student registration, class management, teacher assignments, exam scheduling, mark entry, report card generation, fee tracking, and administrative dashboards — all accessible through a browser.",
    image: devImg,
    tech: ["PHP", "MySQL", "Bootstrap", "JavaScript", "FPDF (PDF generation)"],
    features: [
      "Student enrollment and profile management",
      "Class and stream management",
      "Teacher assignment and timetabling",
      "Exam scheduling and mark entry",
      "Automated report card generation (PDF)",
      "Fee collection and balance tracking",
      "Parent portal for results and fee status",
      "School-wide announcements",
      "Administrative reports and analytics",
      "Multi-role access (Admin, Teacher, Student, Parent)"
    ],
    highlights: [
      "PDF report card generation",
      "Multi-role access control",
      "Complete fee management module",
      "Automated exam results processing"
    ]
  }
];
