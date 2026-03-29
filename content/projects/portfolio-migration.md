---
title: "Migrating This Site to Next.js with Claude Code"
date: "2026-03-29"
description: "How I rebuilt this portfolio from a Docusaurus docs site into a professional Next.js portfolio using Claude Code as the primary tool"
tags: ["typescript", "nextjs"]
featured: true
---

This site was originally built with [Docusaurus](https://docusaurus.io/) — fine for documentation, but clearly not what a personal portfolio should look like. I used this as an opportunity to explore [Claude Code](https://www.anthropic.com/claude-code) as a real engineering tool rather than just a code suggestion helper.

## The Goal

The objective was straightforward: turn a documentation-style site into something that looked like a competent software developer made it. Specific requirements:

- Clean, professional design — not generic, not over-engineered
- Easy to maintain — drop a markdown file and it appears, no CMS, no build config changes
- Dark mode, mobile responsive, fast
- Keep the existing content: projects, blog posts, book reviews, market data trackers

## How It Went

The session ran across multiple days of iteration. The rough arc:

### 1. Initial migration

The first prompt was roughly: *"I want to make this into a proper Next.js website but still easy to maintain. I want it to look nice and professional like a great software dev made it. I don't want it to look like a documentation website anymore."*

Claude Code scaffolded the Next.js App Router structure, moved content into `content/projects/`, `content/blog/`, `content/books/` with frontmatter, and set up `generateStaticParams()` for all dynamic routes so the site could still deploy as a static export to GitHub Pages.

### 2. Styling iterations

The first styling attempt used Tailwind v4 — which turned out to be completely broken in this setup. The PostCSS configuration conflicted, and the generated stylesheet was nearly empty. Rather than fight the toolchain, Claude Code replaced it entirely with [Radix Themes](https://www.radix-ui.com/themes), which ships its own complete CSS with no build-time compilation. This was the right call.

Font loading had a similar issue — `next/font/google` tries to download fonts at build time and fails in sandboxed environments. The fix was switching to `next/font/local` using existing TTF files already in the repo.

### 3. Debugging real issues

Several real bugs required actual diagnosis:

- **Trackers not loading**: the ETF flow and UK shorts tracker scripts were defining their run functions but never calling them. A one-liner fix, but easy to miss.
- **Hydration error**: `ProjectCard` used Radix's `Card asChild` to render as an `<a>` via Next.js `Link`, with a GitHub icon `<a>` nested inside — invalid HTML that React correctly threw a hydration error on. Fixed by removing `asChild` and using `useRouter().push()` for card navigation instead.
- **Titles flush to navbar**: all page content boxes had `style={{ padding: '0 1.25rem' }}` — a CSS shorthand that silently overrode the Radix `py="9"` prop on all four sides, leaving zero top padding. Replaced with `paddingInline`.

### 4. Feature additions

Once the base was solid, added iteratively:

- Grid/list view toggle on books and blog pages
- Live search and tag filtering on the books page
- Coloured tag badges using a shared `tagColors.ts` map
- Knight SVG logo in the nav with a `rotateY(180deg)` hover animation matching the original site
- Mandelbrot fractal as a decorative hero image
- This about/now/uses page

## Takeaways

Claude Code works well as a primary driver on a project like this — it holds the full context, makes consistent decisions across files, and catches its own mistakes when pointed at the right symptoms. The workflow felt closer to pair programming than autocomplete.

The main skill required is knowing when the proposed solution is wrong and being able to describe *why* concisely. The Tailwind/Radix swap, the hydration error diagnosis, and the padding bug all required understanding the root cause before Claude Code could fix them properly.

The source for this site is on [GitHub](https://github.com/nikulpatel3141/nikulpatel3141.github.io).
