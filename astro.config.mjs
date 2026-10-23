// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import expressiveCode from 'astro-expressive-code';
import fs from 'node:fs';
import path from 'node:path';

function servePagefindDevPlugin() {
  return {
    name: 'serve-pagefind-dev',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url && req.url.startsWith('/pagefind/')) {
          const filePath = path.resolve(
            process.cwd(),
            'dist',
            req.url.replace(/^\//, '').split('?')[0],
          );

          if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
            if (filePath.endsWith('.js')) {
              res.setHeader('Content-Type', 'application/javascript');
            } else if (filePath.endsWith('.css')) {
              res.setHeader('Content-Type', 'text/css');
            } else if (filePath.endsWith('.json')) {
              res.setHeader('Content-Type', 'application/json');
            } else if (filePath.endsWith('.wasm')) {
              res.setHeader('Content-Type', 'application/wasm');
            }
            return fs.createReadStream(filePath).pipe(res);
          }
        }
        next();
      });
    },
  };
}

const customSite = process.env.SITE_URL;
const customBase = process.env.SITE_BASE;

// GitHub Pages
const isGitHubActions = process.env.GITHUB_ACTIONS === 'true';
const ghOwner = process.env.GITHUB_REPOSITORY_OWNER;
const ghRepo = process.env.GITHUB_REPOSITORY?.split('/')[1];
const ghIsProjectPage = Boolean(ghOwner) && Boolean(ghRepo) && ghRepo !== `${ghOwner}.github.io`;
const githubSite =
  ghOwner && ghRepo
    ? `https://${ghOwner}.github.io${ghIsProjectPage ? `/${ghRepo}` : ''}`
    : undefined;

// GitLab Pages
const isGitLabCI = process.env.GITLAB_CI === 'true';
const glNamespace = process.env.CI_PROJECT_NAMESPACE;
const glProject = process.env.CI_PROJECT_NAME;
const glPagesUrl = process.env.CI_PAGES_URL;
const glIsProjectPage = Boolean(glNamespace) && Boolean(glProject) && glProject !== glNamespace;
const gitlabSite =
  glPagesUrl ||
  (glNamespace && glProject
    ? `https://${glNamespace}.gitlab.io${glIsProjectPage ? `/${glProject}` : ''}`
    : undefined);

const resolvedSite =
  customSite ||
  (isGitHubActions && githubSite ? githubSite : undefined) ||
  (isGitLabCI && gitlabSite ? gitlabSite : undefined) ||
  'https://example.com';

const resolvedBase =
  customBase ||
  (isGitHubActions && ghIsProjectPage && ghRepo ? `/${ghRepo}` : undefined) ||
  (isGitLabCI && glIsProjectPage && glProject ? `/${glProject}` : undefined) ||
  '/';

export default defineConfig({
  site: resolvedSite,
  base: resolvedBase,
  integrations: [expressiveCode(), mdx(), sitemap()],

  vite: {
    plugins: [tailwindcss(), servePagefindDevPlugin()],
  },
});
