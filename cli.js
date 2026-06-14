#!/usr/bin/env node

/**
 * create-anchor-md
 * CLI script to copy template files to user's target project.
 */

const fs = require('fs');
const path = require('path');

function main() {
  const targetDir = path.join(process.cwd(), '.anchor.md');
  const sourceDir = path.join(__dirname, 'anchor.md');

  console.log('🚀 Initializing anchor.md context system...');

  // Ensure template source exists in the npm package folder
  if (!fs.existsSync(sourceDir)) {
    console.error(`Error: Templates source directory not found at: ${sourceDir}`);
    process.exit(1);
  }

  // Prevent overwriting if target directory already exists
  if (fs.existsSync(targetDir)) {
    console.warn(`\n⚠️  Directory .anchor.md already exists in ${process.cwd()}`);
    console.log('Skipping initialization to protect existing context files.');
    process.exit(0);
  }

  try {
    // Node 16.7.0+ supports fs.cpSync
    if (typeof fs.cpSync === 'function') {
      fs.cpSync(sourceDir, targetDir, { recursive: true });
    } else {
      copyFolderRecursiveSync(sourceDir, targetDir);
    }

    console.log('\n✅ anchor.md system initialized successfully!');
    console.log(`Created context directory at: ${targetDir}`);
    console.log('\nNext steps:\n1. Open .anchor.md/@main.md to fill project parameters.\n2. Tag (@main.md) in your IDE AI chat to generate project specifications.');
  } catch (error) {
    console.error('Error occurred during initialization:', error.message);
    process.exit(1);
  }
}

// Fallback recursive folder copy for older Node versions
function copyFolderRecursiveSync(source, target) {
  if (!fs.existsSync(target)) {
    fs.mkdirSync(target, { recursive: true });
  }

  const files = fs.readdirSync(source);
  for (const file of files) {
    const curSource = path.join(source, file);
    const curTarget = path.join(target, file);

    if (fs.lstatSync(curSource).isDirectory()) {
      copyFolderRecursiveSync(curSource, curTarget);
    } else {
      fs.copyFileSync(curSource, curTarget);
    }
  }
}

main();
