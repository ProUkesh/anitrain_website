// /scripts/generate-sitemap-posts.mjs
import fs from "node:fs";
import path from "node:path";

const SITE = "https://anitrain.app";

// ✅ Your Sanity config
const SANITY_PROJECT_ID = "7vt4jf3d";
const SANITY_DATASET = "production";
const SANITY_API_VERSION = "2023-03-25";

// Where to write the sitemap (Firebase Hosting public dir)
const OUT_FILE = path.join(process.cwd(), "public", "sitemap-posts.xml");

function xmlEscape(str = "") {
  return str
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

async function fetchPostSlugs() {
  // Pull the post slugs + published date
  const query = `*[_type=="post" && defined(slug.current)] | order(publishedAt desc){
    "slug": slug.current,
    "updatedAt": coalesce(_updatedAt, publishedAt)
  }`;

  const url =
    `https://${SANITY_PROJECT_ID}.api.sanity.io/v${SANITY_API_VERSION}/data/query/${SANITY_DATASET}` +
    `?query=${encodeURIComponent(query)}`;

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Sanity fetch failed: ${res.status} ${res.statusText}`);
  }

  const data = await res.json();
  const rows = Array.isArray(data.result) ? data.result : [];

  // remove bad values
  return rows
    .filter(r => typeof r.slug === "string" && r.slug.trim().length > 0)
    .map(r => ({
      slug: r.slug.trim(),
      updatedAt: r.updatedAt ? new Date(r.updatedAt).toISOString() : null,
    }));
}

function buildSitemap(urls) {
  const lines = [];
  lines.push(`<?xml version="1.0" encoding="UTF-8"?>`);
  lines.push(`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`);

  for (const item of urls) {
    // Your post URLs are query-based:
const loc = `${SITE}/post/${encodeURIComponent(item.slug)}`;

    lines.push(`  <url>`);
    lines.push(`    <loc>${xmlEscape(loc)}</loc>`);
    if (item.updatedAt) lines.push(`    <lastmod>${xmlEscape(item.updatedAt)}</lastmod>`);
    lines.push(`    <changefreq>weekly</changefreq>`);
    lines.push(`    <priority>0.7</priority>`);
    lines.push(`  </url>`);
  }

  lines.push(`</urlset>`);
  return lines.join("\n") + "\n";
}

async function main() {
  const posts = await fetchPostSlugs();

  const xml = buildSitemap(posts);
  fs.mkdirSync(path.dirname(OUT_FILE), { recursive: true });
  fs.writeFileSync(OUT_FILE, xml, "utf8");

  console.log(`✅ Generated: ${OUT_FILE}`);
  console.log(`✅ Posts included: ${posts.length}`);
}

main().catch((err) => {
  console.error("❌ Sitemap generation failed:", err);
  process.exit(1);
});
