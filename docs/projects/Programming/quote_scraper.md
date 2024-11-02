---
title: "Quote Scraper"
date: 2022-10-20T20:46:11+01:00
description: "A Goodreads quote scraper written in Go"
tags: [go, programming]
sidebar_position: 8
---

I was interested in learning more about the Go programming language so I wrote a short script in Go to scrape quotes from Goodreads.

You can find the code [here](https://github.com/nikulpatel3141/colly_goodreads_scraper).


## What about Python?

I've enjoyed using Go for this project and see some advantages over Python:

1. We'd need (something like) Requests + BeautifulSoup in Python for this task vs only Colly for Go
    - Not a big issue here, but the fewer external dependencies the better!
2. Parallelism is easier to implement in Go
    - This is built into Colly, to enable it we just use the two lines to set things up:
      ```go
        c := colly.NewCollector(colly.Async())
        c.Limit(&colly.LimitRule{
	      DomainGlob: "*",
	      Parallelism: numThreads,
	      Delay: time.Second
	  })
      ```
    - In Python we'd need to explicitly set up a `ThreadPool` or use `asyncio`
3. Dependency management is *much* less painful in Go than in Python
    - In Go we just specify dependencies in the `go.mod` file and that's it!
    - Once we compile the script we can run it as a standalone binary
    - ...compared to Python where we'd always need an interpreter + correct libraries installed
      - There are things like [PyInstaller](https://pyinstaller.org/en/stable/) that can compile python, but the resulting binary will typically be larger and less performant than the original script
4. Go is statically typed
    - No more runtime type errors at!

