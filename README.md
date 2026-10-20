# Sai Aasrith — Portfolio & Personal Website

Personal website, engineering portfolio, media notes, and travel journal built with [Astro 7](https://astro.build), [Tailwind CSS v4](https://tailwindcss.com), and [Pagefind](https://pagefind.app).

- **Live Site**: [pvrsa.github.io](https://pvrsa.github.io)
- **Author**: Sai Aasrith (Software Engineer — Distributed Systems & AI Agents)

---

## 🚀 Quick Start

### Prerequisites

- **Node.js**: `>= 22.12.0`
- **npm**

### 1. Install Dependencies

```sh
npm install
```

### 2. Local Development

Start the development server:

```sh
npm run dev
# or
npx astro dev
```

Open [http://localhost:4321](http://localhost:4321) in your browser.

### 3. Production Build & Preview

Build the static site and generate the Pagefind search index:

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

| Command                | Description                                                              |
| :--------------------- | :----------------------------------------------------------------------- |
| `npm run dev`          | Starts local development server at `http://localhost:4321`               |
| `npm run build`        | Builds static site to `dist/` and compiles English Pagefind search index |
| `npm run preview`      | Previews the production build locally                                    |
| `npm run lint`         | Runs ESLint (`@typescript-eslint/no-deprecated`)                         |
| `npm run format`       | Formats code with Prettier                                               |
| `npm run format:check` | Runs linting and checks formatting consistency                           |

---

## 📁 Project Structure

```text
├── public/
│   └── photos/            # High-resolution photography & travel stills
├── src/
│   ├── config/
│   │   └── site.toml      # Site settings, profile bio, social links & navigation
│   ├── content/
│   │   ├── about.mdx      # About page, experience, and background
│   │   ├── blog/          # In-depth technical & systems essays
│   │   ├── gallery/       # Photography moments & travel destinations
│   │   ├── projects/      # Tools, Android apps, and Wear OS projects
│   │   └── reviews/       # "The Stash" — Book, movie, and TV ratings & takes
│   ├── components/        # Reusable Astro & UI components
│   ├── layouts/           # Base and article layouts
│   ├── pages/
│   │   ├── index.astro    # Minimal summary dashboard
│   │   ├── projects/      # Projects shelf
│   │   ├── stash.astro    # "The Stash" reviews stream
│   │   ├── gallery.astro  # Frames & Travels gallery
│   │   └── blog/          # Writing archive & category pages
│   └── styles/            # Theme palettes, typography & global CSS
├── astro.config.mjs       # Astro configuration
└── package.json           # Dependencies and scripts
```

---

## ⚙️ Adding New Content

- **Add a Project**: Add a new `.md` file to [`src/content/projects/`](src/content/projects/) with `title`, `description`, `category` (`Mobile App`, `Wear OS`, `AI Agent`, `CLI Tool`, `Web App`), `tags`, and `githubUrl`.
- **Add a Review ("The Stash")**: Add a new `.md` file to [`src/content/reviews/`](src/content/reviews/) with `type` (`movie`, `tv`, `book`), `rating` (0–10), and a highlighted `verdict`.
- **Add a Photo / Travel Moment**: Drop the `.jpg` into `public/photos/` and create a `.md` in [`src/content/gallery/`](src/content/gallery/) with `location`, `camera`, and `title`.
- **Add a Blog Post**: Add a new `.md` file to [`src/content/blog/`](src/content/blog/).
- **Update About / Bio**: Edit [`src/content/about.mdx`](src/content/about.mdx) or [`src/config/site.toml`](src/config/site.toml).

---

## 🚢 Deployment

The site is configured as a static site and automatically deploys to **GitHub Pages** on push to `main` via GitHub Actions ([`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml)).

---

## 📄 License & Credits

- Licensed under the [MIT License](LICENSE).
