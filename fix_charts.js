import fs from 'fs';
import path from 'path';

const dirs = [
  './src/components'
];

function traverse(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      continue;
    }
    if (fullPath.endsWith('.jsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      let newContent = content.replace(/<ResponsiveContainer width="100%" height=\{([0-9]+)\}>/g, '<div className="w-full h-[250px] sm:h-[300px] md:h-[$1px] mt-8"><ResponsiveContainer width="100%" height="100%">');
      newContent = newContent.replace(/<\/ResponsiveContainer>/g, '</ResponsiveContainer></div>');
      
      newContent = newContent.replace(/stroke="#e5e7eb"/g, 'stroke="rgba(255,255,255,0.05)" vertical={false}');
      
      // Make axis text responsive and subtle
      newContent = newContent.replace(/<XAxis([^>]*)stroke="#9ca3af"([^>]*)>/g, '<XAxis$1stroke="#9ca3af" tick={{ fill: \'#9ca3af\', fontSize: 13 }} tickLine={false} axisLine={false}$2>');
      newContent = newContent.replace(/<YAxis([^>]*)stroke="#9ca3af"([^>]*)>/g, '<YAxis$1stroke="#9ca3af" tick={{ fill: \'#9ca3af\', fontSize: 13 }} tickLine={false} axisLine={false}$2>');
      
      // Fix tooltips
      newContent = newContent.replace(/contentStyle=\{\{[^}]+\}\}/g, `contentStyle={{ backgroundColor: 'rgba(17, 17, 17, 0.9)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: '#fff', backdropFilter: 'blur(8px)', padding: '12px', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.5)' }}`);

      // Fix specific hardcoded chart colors
      newContent = newContent.replace(/fill="#ef4444"/g, 'fill="url(#redGrad)"');
      newContent = newContent.replace(/fill="#10b981"/g, 'fill="url(#greenGrad)"');
      newContent = newContent.replace(/fill="#3b82f6"/g, 'fill="url(#goldGrad)"'); // Gold instead of Blue for premium look
      newContent = newContent.replace(/stroke="#ef4444"/g, 'stroke="#f87171" strokeWidth={3}');
      newContent = newContent.replace(/stroke="#10b981"/g, 'stroke="#34d399" strokeWidth={3}');
      newContent = newContent.replace(/stroke="#3b82f6"/g, 'stroke="#fbbf24" strokeWidth={3}');
      
      // Define defs inside Recharts (LineChart or BarChart)
      if (newContent.includes('<BarChart') || newContent.includes('<LineChart') || newContent.includes('<AreaChart')) {
        const defsHtml = `
          <defs>
            <linearGradient id="goldGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#fbbf24" stopOpacity={0.8}/>
              <stop offset="100%" stopColor="#d97706" stopOpacity={0.3}/>
            </linearGradient>
            <linearGradient id="greenGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#34d399" stopOpacity={0.8}/>
              <stop offset="100%" stopColor="#059669" stopOpacity={0.3}/>
            </linearGradient>
            <linearGradient id="redGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f87171" stopOpacity={0.8}/>
              <stop offset="100%" stopColor="#dc2626" stopOpacity={0.3}/>
            </linearGradient>
          </defs>
        `;
        
        // Find first opening tag of any chart and insert defs right after
        newContent = newContent.replace(/(<BarChart[^>]*>|<LineChart[^>]*>|<AreaChart[^>]*>)/, `$1${defsHtml}`);
      }

      if (content !== newContent) {
        fs.writeFileSync(fullPath, newContent);
      }
    }
  }
}

dirs.forEach(traverse);
console.log('Done refactoring charts.');
