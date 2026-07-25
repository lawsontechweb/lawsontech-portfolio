export default function sitemap() {
  const baseUrl = "https://lawsontech-portfolio.vercel.app";

  const routes = [
    "",
    "/work",
    "/pricing",
    "/why-a-website",
    "/analytics",
    "/about",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}