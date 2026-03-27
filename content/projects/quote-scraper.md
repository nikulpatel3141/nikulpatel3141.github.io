---
title: "Quote Scraper"
date: "2022-10-20"
description: "A Goodreads quote scraper written in Go"
tags: ["Go"]
github: "https://github.com/nikulpatel3141/colly_goodreads_scraper"
featured: false
---

I was interested in learning Go, so I wrote a short script to scrape quotes from Goodreads using the [Colly](https://go-colly.org/) framework.

## Why Go over Python?

Go has some clear advantages for this kind of scraping task:

1. **Fewer dependencies** — just Colly in Go vs Requests + BeautifulSoup in Python
2. **Built-in parallelism** — Colly handles concurrent requests with two lines of config:
   ```go
   c := colly.NewCollector(colly.Async())
   c.Limit(&colly.LimitRule{DomainGlob: "*", Parallelism: numThreads})
   ```
3. **Simpler dependency management** — `go.mod` is all you need; the compiled binary is self-contained
4. **Static typing** — no runtime type errors
