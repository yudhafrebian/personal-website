export const experience = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Javindotech",
    date: "2026 - Present",
    city: "Surabaya",
    country: "Indonesia",
    location: "Onsite",
    description: [
      "Industrial Monitoring System: Developing high-performance web applications for real-time automation machine monitoring across various factories and buildings.",
      "Data Visualization: Visualizing complex backend data into intuitive, real-time dashboards to monitor machine status and automation workflows.",
      "System Integration: Collaborating with backend teams to ensure seamless data flow and efficient rendering of large-scale industrial datasets.",
      "Responsive Industrial UI: Crafting robust and responsive interfaces optimized for industrial environments, ensuring reliability across various devices.",
    ],
  },
  {
    id: 2,
    title: "Frontend Developer",
    company: "Inovasi Solusi Muda",
    date: "2024 - 2025",
    city: "Sidoarjo",
    country: "Indonesia",
    location: "Hybrid",
    description: [
      "Modern Web Architecture: Developed and maintained responsive web interfaces for an HR Management System using React and Next.js, ensuring a robust component-based architecture.",
      "UI/UX Implementation: Collaborated closely with designers to translate high-fidelity Figma designs into functional, pixel-perfect code using Tailwind CSS and framework ui components.",
      "Performance Optimization: Improved application load times and ensured smooth cross-browser compatibility, focusing on efficient rendering and state management.",
      "Code Quality: Authored clean, maintainable, and reusable code with TypeScript, implementing best practices in modular development to simplify future scaling.",
    ],
  },
];

export const skills = [
  {
    id: 1,
    title: "Robust Architecture & Database",
    description:
      "Expertise in designing scalable database schemas and server-side logic using PostgreSQL and Prisma ORM. I ensure data integrity and efficient relationships to support complex business requirements.",
    keywords: ["Schema Design", "Data Integrity", "Relational Databases"],
  },
  {
    id: 2,
    title: "High-Performance Frontend",
    description:
      "Crafting lightning-fast user interfaces using Next.js and TypeScript. I prioritize performance metrics, ensuring a seamless experience with optimized rendering and state management.",
    keywords: ["Core Web Vitals", "SEO Optimization", "Type-Safe Code"],
  },
  {
    id: 3,
    title: "API & System Integration",
    description:
      "Developing secure and efficient RESTful APIs to bridge the gap between server and client. Experienced in integrating third-party services and handling real-time data flow for dynamic applications.",
    keywords: ["API Development", "Backend Integration", "State Management"],
  },
  {
    id: 4,
    title: "Modern UI/UX Engineering",
    description:
      "Implementing pixel-perfect designs with Tailwind CSS and shadcn/ui. I utilize Framer Motion to create purposeful animations that enhance user engagement and brand identity.",
    keywords: ["Component-Based Design", "Responsive UI"],
  },
];

export const technologies = [
  {
    id: 1,
    name: "React",
    icon: "/icons/react.svg",
    link: "https://react.dev/",
  },
  {
    id: 2,
    name: "Next.js",
    icon: "/icons/nextjs.svg",
    link: "https://nextjs.org/",
  },
  {
    id: 3,
    name: "Tailwind CSS",
    icon: "/icons/tailwindcss.svg",
    link: "https://tailwindcss.com/",
  },
  {
    id: 4,
    name: "TypeScript",
    icon: "/icons/typescript.svg",
    link: "https://www.typescriptlang.org/",
  },
  {
    id: 5,
    name: "Prisma",
    icon: "/icons/prisma.svg",
    link: "https://www.prisma.io/",
  },
  {
    id: 6,
    name: "PostgreSQL",
    icon: "/icons/postgresql.svg",
    link: "https://www.postgresql.org/",
  },
  {
    id: 7,
    name: "Express.js",
    icon: "/icons/express.svg",
    link: "https://expressjs.com/",
  },
  {
    id: 8,
    name: "Shadcn/ui",
    icon: "/icons/shadcnui.svg",
    link: "https://ui.shadcn.com/",
  },
  {
    id: 9,
    name: "Vercel",
    icon: "/icons/vercel.svg",
    link: "https://vercel.com/",
  },
  {
    id: 10,
    name: "Git",
    icon: "/icons/git.svg",
    link: "https://git-scm.com/",
  },
  {
    id: 11,
    name: "GitHub",
    icon: "/icons/github.svg",
    link: "https://github.com/",
  },
  {
    id: 12,
    name: "Supabase",
    icon: "/icons/supabase.svg",
    link: "https://supabase.com/",
  },
];

export const projects = [
  {
    id: 1,
    title: "InvoiceKu",
    short_description:
      "A web application for managing and creating invoices with ease. With automatic invoice generation, customizable templates, and real-time tracking.",
    full_description:
      "InvoiceKu is a comprehensive web application designed to streamline the invoicing process for businesses. It offers features such as automatic invoice generation, customizable templates, and real-time tracking of invoice status. Built with Next.js and Express.js, InvoiceKu provides a seamless user experience while ensuring robust performance and scalability. The application is powered by Prisma for efficient database management, allowing users to manage their finances efficiently.",
    image: "/projects/invoiceku.png",
    gallery: [
      "/projects/invoiceku.png",
      "/projects/invoiceku2.png",
      "/projects/invoiceku3.png",
    ],
    github: "https://github.com/yourusername/invoiceku",
    live: "https://invoiceku.vercel.app/",
    stack: ["Next.js", "Express.js", "TypeScript", "Prisma"],
    type: "Web App",
  },
  {
    id: 2,
    title: "AHD ERP System",
    short_description:
      "A centralized ERP system integrating end-to-end business processes with analytical dashboards for data-driven decision making.",
    full_description:
      "AHD ERP System is a comprehensive enterprise resource planning solution designed to centralize and streamline business operations. It integrates various modules such as inventory management, sales tracking, and financial reporting into a single platform. The system features analytical dashboards that provide real-time insights into key performance indicators, enabling data-driven decision making. Built with React.js and Express.js, the AHD ERP System offers a robust and scalable architecture to support the complex needs of modern businesses.",
    image: "/projects/ahd.png",
    gallery: [
      "/projects/ahd.png",
      "/projects/ahd2.png",
      "/projects/ahd3.png",
    ],
    github: null,
    live: null,
    stack: ["React.js", "Express.js", "TypeScript", "Material UI"],
    type: "Enterprise System",
  },
  {
    id: 3,
    title: "Japregeo HRIS",
    short_description:
      "A unified HR solution designed to automate core workforce operations and streamline data-driven management.",
    full_description:
      "A robust enterprise-grade HRIS designed to centralize and automate complex human resources operations. This system integrates core modules—from employee management and payroll to performance evaluations—into a high-performance unified platform. Leveraging a scalable architecture with React and Express, it features real-time analytical dashboards that empower management with actionable, data-driven insights.",
    image: "/projects/japregeo-hris.png",
    gallery: [
      "/projects/japregeo-hris.png",
      "/projects/japregeo-hris2.png",
      "/projects/japregeo-hris3.png",
    ],
    github: null,
    live: null,
    stack: ["React.js", "Golang", "Material UI", "MySQL"],
    type: "Enterprise System",
  },
  {
    id: 4,
    title: "PT Aru Rekayasa Utama",
    short_description:
      "A digital platform for PT Aruna to streamline operations and provide efficient logistics and customer management solutions.",
    full_description:
      "A high-performance digital presence developed for PT Aruna to showcase their enterprise logistics and customer service excellence. Built with a focus on modern aesthetics and technical optimization, this platform ensures a seamless user experience across all devices. The project emphasizes clean code architecture, rapid loading speeds, and SEO best practices to effectively communicate the brand's professional identity and logistics solutions.",
    image: "/projects/aruna.png",
    gallery: [
      "/projects/aruna.png",
      "/projects/aruna2.png",
      "/projects/aruna3.png",
    ],
    github: null,
    live: "https://www.arunautama.com",
    stack: ["PHP", "Laravel", "Tailwind CSS"],
    type: "Corporate Website",
  },
  {
    id: 5,
    title: "Adent Office Furniture",
    short_description:
      "A digital platform that helps PT Ardent Furniture streamline operations and manage customer interactions more efficiently.",
    full_description:
      "A professional digital platform developed for Ardent Office Furniture to showcase their high-quality workspace solutions. The website features a comprehensive digital catalog with detailed product specifications and high-resolution imagery, designed to bridge the gap between manufacturing and professional clients. Built with a focus on modern aesthetics and intuitive navigation, it integrates seamless design consultation features to simplify the selection process for corporate furniture solutions.",
    image: "/projects/ardent.png",
    gallery: [
      "/projects/ardent.png",
      "/projects/ardent2.png",
      "/projects/ardent3.png",
    ],
    github: null,
    live: "https://ardentfurniture.com",
    stack: ["PHP", "HTML", "Tailwind CSS"],
    type: "Corporate Website",
  },
  {
    id: 6,
    title: "OptiMES",
    short_description:
      "An industrial-grade Manufacturing Execution System aligned with ISA-95 standards for real-time production tracking and maintenance management.",
    full_description:
      "OptiMES is a comprehensive Manufacturing Execution System designed for closed-network industrial environments. Following ISA-95 standards, the platform integrates production tracking, role-based access control (RBAC), and maintenance dispatching into a unified dashboard. It features real-time equipment state monitoring, automated trouble reporting, and an offline-first security approach to ensure high availability and operational efficiency in manufacturing plants.",
    image: "/projects/optimes.png",
    gallery: [
      "/projects/optimes.png",
      "/projects/optimes-2.png",
      "/projects/optimes-3.png",
    ],
    github: null,
    live: null,
    stack: ["Next.js", "Nest.js", "TypeScript", "PostgreSQL"],
    type: "Industrial Automation",
  },
];
