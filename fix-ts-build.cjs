/**
 * AUTO FIX SCRIPT — DO NOT EDIT
 * Fixes TypeScript export + data typing issues
 */

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const ROOT = process.cwd();

const UI_DIR = path.join(ROOT, "src", "components", "ui");
const PRODUCTS_HOOK = path.join(ROOT, "src", "hooks", "useProducts.ts");

function patchFile(filePath, replacers) {
  if (!fs.existsSync(filePath)) return;

  let content = fs.readFileSync(filePath, "utf8");
  let changed = false;

  for (const [pattern, replacement] of replacers) {
    if (pattern.test(content)) {
      content = content.replace(pattern, replacement);
      changed = true;
    }
  }

  if (changed) {
    fs.writeFileSync(filePath, content, "utf8");
    console.log("✔ patched:", path.relative(ROOT, filePath));
  }
}

/* ---------------------------------------
   FIX UI COMPONENT PROP EXPORTS
--------------------------------------- */

const uiFiles = [
  "ElectricBorder.tsx",
  "GooeyNav.tsx",
  "LightningBackground.tsx",
  "AnimatedList.tsx",
  "StackGallery.tsx",
];

uiFiles.forEach((file) => {
  const filePath = path.join(UI_DIR, file);
  if (!fs.existsSync(filePath)) return;

  patchFile(filePath, [
    [/^interface (\w+Props)/m, "export interface $1"],
    [/^interface (StackItem|AnimatedListItem)/m, "export interface $1"],
  ]);
});

/* ---------------------------------------
   FIX useProducts.ts WRONG CASTS
--------------------------------------- */

patchFile(PRODUCTS_HOOK, [
  [
    /\[\.\.\.\(productsData as Product\[\]\)\]/g,
    "[...productsData.products]",
  ],
  [
    /productsData as Product\[\]/g,
    "productsData.products",
  ],
]);

/* ---------------------------------------
   VERIFY BUILD
--------------------------------------- */

try {
  console.log("\n▶ Running build...");
  execSync("npm run build", { stdio: "inherit" });
} catch {
  console.error("\n❌ Build failed after fixes. Stopping.");
  process.exit(1);
}

const distPath = path.join(ROOT, "dist");
if (!fs.existsSync(distPath)) {
  console.error("\n❌ dist/ not generated. Build config issue.");
  process.exit(1);
}

console.log("\n✅ SUCCESS: Build fixed and dist/ generated");
