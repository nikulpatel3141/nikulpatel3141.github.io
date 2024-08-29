---
title: "The Pragmatic Programmer"
date: 2024-08-29T21:46:46+01:00
description: ""
draft: true
tags: [programming]
authors: ["Andy Hunt", "Dave Thomas"]
---


This book contains guidance on how to become a better software developer, though the most useful advice is *not* about writing code. The advice I found most useful as a developer relates to keeping end users in mind and about adaptability. 

Although certain sections (eg Concurrency) were less useful for me, overall the advice in this book is definitely pragmatic. 

# Takeaways

## Take Responsibility For

### … What You Do

This item is not specific to being a programmer, but it is an important one. This means being being held accountable for any outcomes and generating solutions when things don't work out:

> Provide Options, Don’t Make Lame Excuses
    
### … Developing Your Knowledge 

It is important to keep learning new things. The authors recommend you learn a new programming language every year. Even if you don't intend to use what you learn:

> The process of learning will expand your thinking, opening you to new possibilities and new ways of doing things.

At the same time just because a technology is popular doesn't mean you should learn or use it. Think critically about what you work on, and in real projects you should do what works. 

## Project Requirements Aren't Fixed

This has consequences on the code you write: it means it should be adaptable. If a new request requires a rewrite of your codebase, you likely did something wrong. 

Requirements can change for many reasons, but the main one is outlined below:
 
## Users don't know what they want

Part of a programmer's job is to help users figure out what they want. When presented with a heavy set of requirements it's a bad idea to deliver them without user feedback on the way.

The authors recommend implementing features incrementally. Produce *good enough software* and get feedback on it ASAP. Then base your next iteration on that feedback. This helps users figure out what they want, giving a better outcome.

## Writing Code

Here are some miscellaneous tips on writing code:

- Think about a program as a sequence of steps to gather and transform data. You will write better code than if you are thinking about which design pattern to use.
- Don't repeat yourself. Repetition is a sign of hard to change code.
- Learn your IDEs shortcuts. It will pay off immediately



