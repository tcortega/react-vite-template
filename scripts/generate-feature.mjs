import fs from "fs/promises";
import path from "path";

const info = (message) => console.log(`\x1b[32m${message}\x1b[0m`);
const error = (message) => console.error(`\x1b[31m${message}\x1b[0m`);

const featureSubFolders = ["components", "pages"];
const rootFeatureDir = path.join(process.cwd(), "src", "features");

const toPascalCase = (str) => {
  return str
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");
};

async function main() {
  const featureName = process.argv[2];

  if (!featureName) {
    error("Error: Please provide a feature name.");
    console.log("Usage: bun run new:feature <feature-name>");
    process.exit(1);
  }

  const featureDir = path.join(rootFeatureDir, featureName);

  try {
    await fs.access(featureDir);
    error(`Error: Feature "${featureName}" already exists.`);
    process.exit(1);
  } catch {}

  info(`Creating feature "${featureName}"...`);

  for (const subFolder of featureSubFolders) {
    const dirPath = path.join(featureDir, subFolder);
    await fs.mkdir(dirPath, { recursive: true });
    info(`  ✓ Created directory: ${dirPath}`);
  }

  await fs.writeFile(path.join(featureDir, "index.ts"), "");
  info(`  ✓ Created index.ts file`);

  info(`\nFeature "${featureName}" created successfully!`);
}

main().catch((err) => {
  error("An unexpected error occurred:");
  console.error(err);
  process.exit(1);
});
