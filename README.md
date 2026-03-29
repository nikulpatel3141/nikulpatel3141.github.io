# nikulpatel3141.github.io

Personal website built with [Next.js 15](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/). Static export deployed to GitHub Pages.

## Adding content

Drop a Markdown file into the relevant folder — no other config needed.

| Section | Folder | Route |
|---|---|---|
| Projects | `content/projects/` | `/projects/[slug]` |
| Blog posts | `content/blog/` | `/blog/[slug]` |
| Book reviews | `content/books/` | `/books/[slug]` |

Each file needs a frontmatter block at the top:

**Project** (`content/projects/my-project.md`):
```markdown
---
title: "My Project"
date: "2025-01-15"
description: "Short description shown on cards"
tags: ["Python", "Cloud"]
github: "https://github.com/you/repo"  # optional
featured: true                         # show on homepage grid
---

Content here...
```

**Blog post** (`content/blog/my-post.md`):
```markdown
---
title: "Post Title"
date: "2025-01-15"
description: "Short description"
tags: ["Tag"]
---
```

**Book review** (`content/books/book-slug.md`):
```markdown
---
title: "Book Title"
date: "2025-01-15"
authors: ["Author Name"]
tags: ["finance"]
---
```

Standard Markdown is supported (headings, code blocks, tables, blockquotes, links, images). Images go in `public/img/` and are referenced as `/img/filename.png`.

## Local development

**Prerequisites:** Node.js 18+

```bash
npm install
npm run dev
```

The site runs at `http://localhost:3000`. Changes to content files and components hot-reload automatically.

To check the production build locally:

```bash
npm run build   # generates static files in out/
npx serve out   # or any static file server
```

## Deployment

The site is hosted on [GitHub Pages](https://pages.github.com/) from the `gh-pages` branch. Deployment is handled by a GitHub Actions workflow that:

1. Triggers on push to `main`
2. Runs `npm run build` — Next.js outputs static HTML/CSS/JS to `out/`
3. Pushes the contents of `out/` to the `gh-pages` branch
4. GitHub Pages serves the `gh-pages` branch at `nikulpatel3141.github.io`

To deploy manually (if needed):
```bash
npm run build
# then push out/ to gh-pages branch, or use gh-pages npm package
```

## Project structure

```
├── app/                  # Next.js App Router pages
│   ├── page.tsx          # Homepage
│   ├── projects/         # /projects and /projects/[slug]
│   ├── blog/             # /blog and /blog/[slug]
│   └── books/            # /books and /books/[slug]
├── components/           # Shared React components
├── content/              # Markdown content (edit these)
│   ├── projects/
│   ├── blog/
│   └── books/
├── lib/
│   └── content.ts        # Reads and parses content files
├── public/               # Static assets (images, fonts, JS)
└── tailwind.config.ts    # Tailwind configuration
```
