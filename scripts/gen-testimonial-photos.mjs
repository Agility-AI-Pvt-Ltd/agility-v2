import fs from "fs";
import path from "path";

const root = path.resolve("public/testimonials/photos");
const skip = new Set(["anand-workshop"]);

const label = (folder) =>
  folder.replace(/_s /g, "'s ").replace(/_/g, " ");

const dirs = fs
  .readdirSync(root, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => d.name)
  .filter((d) => !skip.has(d))
  .sort((a, b) => a.localeCompare(b));

const sources = dirs.map((dir) => {
  const files = fs
    .readdirSync(path.join(root, dir))
    .filter((f) => /\.(jpe?g|png|webp|gif)$/i.test(f))
    .sort((a, b) => a.localeCompare(b));
  return { folder: dir, label: label(dir), files };
});

const outPath = path.resolve("src/lib/testimonial-photo-sources.ts");
const body = `/* Auto-generated from public/testimonials/photos — run scripts/gen-testimonial-photos.mjs to refresh. */
export const PHOTO_CATEGORY_SOURCES = ${JSON.stringify(sources, null, 2)} as const;
`;

fs.writeFileSync(outPath, body);
console.log(`Wrote ${sources.length} categories to ${outPath}`);
