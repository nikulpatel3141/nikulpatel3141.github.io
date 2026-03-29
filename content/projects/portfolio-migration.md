---
title: "Migrating This Site to Next.js with Claude Code"
date: "2026-03-29"
description: "Rebuilding this portfolio from a Docusaurus docs site into a Next.js portfolio using Claude Code"
tags: ["typescript", "nextjs"]
github: "https://github.com/nikulpatel3141/nikulpatel3141.github.io/pull/1"
featured: true
---

This site was originally built with [Docusaurus](https://docusaurus.io/) — fine for documentation, but not what a personal portfolio should look like. I used it as an opportunity to explore [Claude Code](https://www.anthropic.com/claude-code) as a real engineering tool. The full changes are in [PR #1](https://github.com/nikulpatel3141/nikulpatel3141.github.io/pull/1).

## Goal

Turn a documentation-style site into something that looked like a competent developer made it, while keeping it easy to maintain — drop a markdown file and it appears, no CMS, no config changes.

## What Happened

Claude Code scaffolded the Next.js App Router structure, moved content into markdown files with frontmatter, and set up static export for GitHub Pages deployment.

A few things didn't go smoothly:

**Tailwind v4** was broken in this setup — the PostCSS config conflicted and the generated stylesheet was nearly empty. Rather than debug it, Claude Code replaced it with [Radix Themes](https://www.radix-ui.com/themes), which ships complete CSS with no build-time compilation.

**The market data trackers** weren't loading — the scripts defined their run functions but never called them. A one-liner fix.

**Hydration error** from a nested `<a>` inside a Radix `Card asChild` link. Fixed by removing `asChild` and using `useRouter().push()` instead.

**Titles flush to the navbar** — `style={{ padding: '0 1.25rem' }}` on every page was silently overriding the Radix vertical padding prop on all four sides. Replacing the shorthand with `paddingInline` fixed it.

## Takeaways

Claude Code works well as a primary driver on a project like this — it holds context across files and catches its own mistakes when pointed at the right symptoms. The main skill required is knowing when a proposed solution is wrong and being able to describe why concisely.
