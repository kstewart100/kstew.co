import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'node:fs';
import path from 'node:path';
import {
  SITE_DESCRIPTION,
  SITE_URL,
  absoluteUrl,
  caseStudies,
} from './src/data/caseStudies';

function applyPageMeta(
  html: string,
  {
    title,
    description,
    url,
    image,
  }: {
    title: string;
    description: string;
    url: string;
    image: string;
  },
): string {
  const replacements: Array<[RegExp, string]> = [
    [/<title>.*?<\/title>/, `<title>${title}</title>`],
    [
      /<meta name="description" content=".*?" \/>/,
      `<meta name="description" content="${description}" />`,
    ],
    [
      /<meta property="og:title" content=".*?" \/>/,
      `<meta property="og:title" content="${title}" />`,
    ],
    [
      /<meta property="og:description" content=".*?" \/>/,
      `<meta property="og:description" content="${description}" />`,
    ],
    [
      /<meta property="og:url" content=".*?" \/>/,
      `<meta property="og:url" content="${url}" />`,
    ],
    [
      /<meta property="og:image" content=".*?" \/>/,
      `<meta property="og:image" content="${image}" />`,
    ],
    [
      /<meta name="twitter:title" content=".*?" \/>/,
      `<meta name="twitter:title" content="${title}" />`,
    ],
    [
      /<meta name="twitter:description" content=".*?" \/>/,
      `<meta name="twitter:description" content="${description}" />`,
    ],
    [
      /<meta name="twitter:image" content=".*?" \/>/,
      `<meta name="twitter:image" content="${image}" />`,
    ],
    [
      /<link rel="canonical" href=".*?" \/>/,
      `<link rel="canonical" href="${url}" />`,
    ],
  ];

  return replacements.reduce(
    (result, [pattern, replacement]) => result.replace(pattern, replacement),
    html,
  );
}

function routePreviewHtmlPlugin(): Plugin {
  return {
    name: 'route-preview-html',
    closeBundle() {
      const distDir = path.resolve(__dirname, 'dist');
      const templatePath = path.join(distDir, 'index.html');

      if (!fs.existsSync(templatePath)) {
        return;
      }

      const template = fs.readFileSync(templatePath, 'utf-8');

      for (const study of caseStudies) {
        const url = `${SITE_URL}/${study.slug}`;
        const html = applyPageMeta(template, {
          title: study.pageTitle,
          description: study.description,
          url,
          image: absoluteUrl(study.previewImage),
        });

        const routeDir = path.join(distDir, study.slug);
        fs.mkdirSync(routeDir, { recursive: true });
        fs.writeFileSync(path.join(routeDir, 'index.html'), html);
      }
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), routePreviewHtmlPlugin()],
});
