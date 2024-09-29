---
title: "This Website"
date: 2022-10-08T11:12:10+01:00
description: "How I built this website"
---

# How this was Built

## Frameworks

The website is built using [HUGO](https://gohugo.io/), a static site generator written in [Go](https://go.dev/). Hugo has a few features I like:

- Content is written in plain `markdown`
- It is easy to install and deploy
- *Lots* of pre-built [themes](https://themes.gohugo.io/) are available
  - (I am using the [Blowfish](https://github.com/nunocoracao/blowfish) theme here)
- It is highly extensible
  - You can modify themes
  - When `markdown` falls short you can use Hugo [Shortcodes](https://gohugo.io/content-management/shortcodes/)


## Deployment

I'm using a CI pipeline to automatically deploy this website.

See this page for more details: `https://github.com/peaceiris/actions-gh-pages`


# Why this was Built

Here are my main motivations for building this website:
1) By formally presenting a topic I can truly gauge my understanding of it.
    - This quote summarises the idea well:
      > If you cannot explain something in simple terms, you don't understand it.
      > <cite>Richard P. Feynmann</cite>
2) I can showcase the things I'm working on.
3) For fun! I enjoy learning things, and I've learned a lot about web development from building this website so far.
