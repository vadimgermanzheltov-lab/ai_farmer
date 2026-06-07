import { cp, mkdir, rm } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const distDir = path.join(rootDir, "dist");

const entriesToCopy = [
  "index.html",
  "app.js",
  "styles.css",
  "data",
  "public"
];

await rm(distDir, { recursive: true, force: true });
await mkdir(distDir, { recursive: true });

for (const entry of entriesToCopy) {
  const source = path.join(rootDir, entry);
  const target = path.join(distDir, entry);
  await cp(source, target, { recursive: true });
}

console.log(`Static site prepared in ${distDir}`);
