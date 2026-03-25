import fs from 'fs';
import path from 'path';

const dirs = [
  './src/components',
  './src/components/slides'
];
const ignoreFiles = ['Hero.jsx', 'About.jsx', 'Comparison.jsx', 'Navbar.jsx', 'CTA.jsx', 'Footer.jsx'];

function traverse(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      continue;
    }
    if (fullPath.endsWith('.jsx') && !ignoreFiles.includes(file)) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // bg colors
      content = content.replace(/bg-gray-900/g, 'bg-dark-900 relative');
      content = content.replace(/bg-gray-800\/10/g, 'bg-dark-800/50');
      content = content.replace(/bg-gray-800/g, 'glass-card');
      content = content.replace(/bg-gray-(100|200)/g, 'bg-dark-800/30');
      content = content.replace(/bg-white/g, 'bg-dark-800/80');
      
      // text colors for headings & content
      content = content.replace(/text-gray-900/g, 'text-white tracking-tight');
      content = content.replace(/text-gray-800/g, 'text-gray-200');
      content = content.replace(/text-gray-700/g, 'text-gray-300');
      content = content.replace(/text-gray-600/g, 'text-gray-400');
      
      // yellow colors to gold
      content = content.replace(/text-yellow-500/g, 'text-gold-400');
      content = content.replace(/text-yellow-(400|600)/g, 'text-gold-500');
      content = content.replace(/text-yellow-[789]00/g, 'text-gold-600');
      content = content.replace(/bg-yellow-500/g, 'bg-gold-500');
      content = content.replace(/bg-yellow-(400|600)/g, 'bg-gold-600');
      content = content.replace(/bg-yellow-[789]00\/30/g, 'bg-gold-500/10 border border-gold-500/20');
      content = content.replace(/border-yellow-[456]00/g, 'border-gold-500/30');
      
      // borders and shadows
      content = content.replace(/border-gray-[78]00/g, 'border-white/5');
      content = content.replace(/shadow-lg/g, 'shadow-2xl');
      content = content.replace(/shadow-xl/g, 'shadow-[0_0_30px_rgba(217,119,6,0.1)]');
      
      // remove old text-black
      content = content.replace(/text-black/g, 'text-white');
      
      fs.writeFileSync(fullPath, content);
    }
  }
}

dirs.forEach(traverse);
console.log('Done replacing colors in components.');
