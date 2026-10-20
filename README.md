# Sai Aasrith — Portfolio & Personal Website

Personal website, portfolio, and digital notebook built with [Astro](https://astro.build), [Tailwind CSS v4](https://tailwindcss.com), and [Pagefind](https://pagefind.app).

- **Live Site**: [pvrsa.github.io](https://pvrsa.github.io)
- **Author**: Sai Aasrith (Software Engineer — Distributed Systems & AI Agents)

---

## 🚀 Quick Start

### Prerequisites
- **Node.js**: `>= 22.12.0` (or [Bun](https://bun.sh))
- **npm** or **bun**

### 1. Install Dependencies

Using `npm`:
```sh
npm install --legacy-peer-deps
```
*(or using Bun: `bun install`)*

### 2. Local Development

Start the development server:
```sh
npm run dev
# or
npx astro dev
```

Open [http://localhost:4321](http://localhost:4321) in your browser.

### 3. Production Build & Preview

Build the static site:
```sh
npm run build
# or
npx astro build
```

Preview the production build locally:
```sh
npm run preview
# or
npx astro preview
```

---

## 🛠 Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts local dev server at `http://localhost:4321` |
| `npm run build` | Builds static site to `dist/` and compiles search index |
| `npm run preview` | Previews the production build locally |
| `npm run lint` | Runs ESLint |
| `npm run format` | Formats code with Prettier |
| `bun run post:new <slug>` | Generates a new blog post file |
| `bun run vibe:new <slug>` | Generates a new vibe/note entry |

---

## 📁 Project Structure

```text
├── public/                # Static assets, icons, and images
├── src/
│   ├── config/
│   │   └── site.toml      # Site settings, profile bio, social links & navigation
│   ├── content/
│   │   ├── about.mdx      # About page content
│   │   ├── blog/          # Long-form writing & articles
│   │   ├── projects/      # Project shelf & documentation
│   │   └── vibe/          # Short thoughts & quick updates
│   ├── components/        # Reusable Astro & UI components
│   ├── layouts/           # Base and article layouts
│   ├── pages/             # Astro file-based routes
│   └── styles/            # Tailwind theme, typography & global CSS
├── astro.config.mjs       # Astro configuration
└── package.json           # Dependencies and scripts
```

---

## ⚙️ Customization

Most site data and personal information can be customized directly without touching component code:

- **Profile & Site Metadata**: Update [`src/config/site.toml`](src/config/site.toml) to modify your name, bio, social links, navigation items, and theme palette.
- **About Page**: Edit [`src/content/about.mdx`](src/content/about.mdx) to update your background, experience, and skills.
- **Articles & Projects**: Add new markdown/MDX files under `src/content/blog/` or `src/content/projects/`.

---

## 🚢 Deployment

The site is configured as a static site and automatically deploys to **GitHub Pages** on push to `main` via GitHub Actions (`.github/workflows/deploy.yml`).

---

## 📄 License & Credits

- Based on the [astro-navfolio](https://github.com/dodolalorc/astro-navfolio) template.
- Licensed under the [MIT License](LICENSE).
