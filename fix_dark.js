import fs from 'fs';
import path from 'path';

const dirs = [
  './src/components',
  './src/components/slides',
  './src',
  './'
];

function traverse(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      continue;
    }
    if ((fullPath.endsWith('.jsx') || fullPath.endsWith('.css') || fullPath.endsWith('tailwind.config.js')) && file !== 'fix_colors.js' && file !== 'fix_dark.js') {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      let newContent = content.replace(/dark:/g, 'RESERVED_DARK:'); // protect any actual dark mode modifiers if they exist
      newContent = newContent.replace(/-dark-/g, '-base-');
      newContent = newContent.replace(/text-dark-/g, 'text-base-');
      newContent = newContent.replace(/bg-dark-/g, 'bg-base-');
      newContent = newContent.replace(/from-dark-/g, 'from-base-');
      newContent = newContent.replace(/via-dark-/g, 'via-base-');
      newContent = newContent.replace(/to-dark-/g, 'to-base-');
      newContent = newContent.replace(/dark: \{/g, 'base: {'); // in tailwind.config.js
      
      newContent = newContent.replace(/RESERVED_DARK:/g, 'dark:');
      
      if (content !== newContent) {
        fs.writeFileSync(fullPath, newContent);
      }
    }
  }
}

dirs.forEach(traverse);
console.log('Done replacing dark to base.');
