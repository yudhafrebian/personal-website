const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

export const siteUrl = rawSiteUrl
  ? (rawSiteUrl.startsWith("http://") || rawSiteUrl.startsWith("https://")
      ? rawSiteUrl
      : `https://${rawSiteUrl}`
    ).replace(/\/$/, "")
  : "http://localhost:3000";

export const siteConfig = {
  name: "Ananda Yudha Frebiansyah",
  title: "Ananda Yudha Frebiansyah | Fullstack Developer",
  description:
    "Personal portfolio of Ananda Yudha Frebiansyah, a Fullstack Developer specializing in Next.js, React, TypeScript, Node.js, Prisma, and PostgreSQL.",
  url: siteUrl,
  email: "anandayudha777@gmail.com",
  location: "Surabaya, Indonesia",
  links: {
    github: "https://github.com/yudhafrebian",
    linkedin: "https://www.linkedin.com/in/ananda-yudha-382533190/",
    instagram: "https://www.instagram.com/yudha_frebian/",
  },
  keywords: [
    "Ananda Yudha Frebiansyah",
    "Fullstack Developer",
    "Frontend Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript Developer",
    "Node.js Developer",
    "Prisma Developer",
    "PostgreSQL Developer",
    "Web Developer Indonesia",
    "Portfolio Developer",
  ],
};
