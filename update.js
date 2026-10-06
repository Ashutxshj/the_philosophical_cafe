const fs = require('fs');

const md = fs.readFileSync('C:\\Users\\Ashut\\.gemini\\antigravity\\brain\\1ca41620-e248-4e43-ac4d-148cc4cd075a\\extracted_feedbacks.md', 'utf-8');

const regex = /\*\*Feedback \d+\*\*[\r\n]+((?:.*[\r\n]*)*?)(?=\*\*Feedback|$)/g;
const quotes = [];
let match;

while ((match = regex.exec(md)) !== null) {
  let text = match[1].trim();
  let who = 'Anonymous';
  let context = '';
  
  if (text.startsWith('"')) text = text.substring(1);
  if (text.endsWith('"')) text = text.substring(0, text.length - 1);
  
  text = text.replace(/\r?\n/g, ' ');
  text = text.replace(/"/g, "'");

  if (text.toLowerCase().includes('-well hope client')) {
    text = text.replace(/-?\s*well hope client/ig, '').trim();
    who = 'Well Hope Client';
  }
  
  quotes.push({ text, who, context });
}

let tsContent = 'export type Quote = {\n  text: string;\n  who: string;\n  context?: string;\n};\n\nexport const quotes: Quote[] = [\n';

for (const q of quotes) {
  tsContent += '  {\n    text: "' + q.text + '",\n    who: "' + q.who + '",\n';
  if (q.context) {
    tsContent += '    context: "' + q.context + '",\n';
  }
  tsContent += '  },\n';
}

tsContent += '];\n';

fs.writeFileSync('lib/testimonials.ts', tsContent);
console.log('Testimonials updated. Total:', quotes.length);
