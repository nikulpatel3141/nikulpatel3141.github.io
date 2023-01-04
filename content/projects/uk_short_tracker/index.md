---
title: "UK Short Disclosure Tracker"
date: 2023-01-02T17:24:21Z
draft: false
description: "Tracker for disclosed UK shorts on the FCA website"
---

Below is a monitor updated daily for tracking the top 10 individual and overall disclosed UK short positions.

## Top Overall Shorts
<div class="text-xs" id="secShortTracker"></div>

## Top Individual Shorts
<div class="text-xs" id="fundShortTracker"></div>

## Code
The code to generate this report is on my GitHub page [here](https://github.com/nikulpatel3141/UK-Short-Tracker), along with a README to explain how it works.

## Metrics

It displays various metrics for the short positions from the lookback date to the as of date:
- Return: the (adjusted) return of the security
- PnL: the disclosed PnL from the short position
  - Note: this figure will not be entirely inaccurate since
    1) It doesn't account for intraday PnL
    2) The short positions are only reported to 1dp
- Days to Cover: The number of days it will take to fully liquidate the position at 100% trading volume
  - For simplicity I've used a 22 day average as an estimate the trading volume

## Disclaimer
The information on this page is provided for information only and should not be constituted as investment advice.
I don't provide any warranty as to the accuracy of the information on this site and it should not be relied upon in any way.

## Sources
I'm using data from Yahoo Finance, OpenFIGI and FCA to produce this report.

Yahoo Finance: https://uk.finance.yahoo.com/
FCA: https://www.fca.org.uk/markets/short-selling/notification-disclosure-net-short-positions
OpenFIGI: https://www.openfigi.com/

<script src="/js/short_tracker.js"></script>

