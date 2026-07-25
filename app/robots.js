export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://lawsontech-portfolio.vercel.app/sitemap.xml",
  };
}