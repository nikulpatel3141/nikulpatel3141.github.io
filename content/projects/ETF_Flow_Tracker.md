---
title: "ETF Flow Tracker"
date: 2023-03-26T21:30:01+01:00
draft: false
description: ""
---

# ETF Flow Tracker

This page tracks flows into/out of the largest 100 US Equity ETFs across SSGA, iShares and Invesco for S&P 500 constituents. The data pipeline to generate these flows runs on GCP (Google Cloud Platform).

These numbers give an idea of the movement of capital invested in ETFs, and hence give colour on macroeconomic trends. See [this](https://www.investopedia.com/terms/f/fund-flow.asp#:~:text=our%20editorial%20policies-,What%20Is%20Fund%20Flow%3F,the%20performance%20of%20any%20asset.) Investopedia article for more details.

Data is as of <span id="flowDate"></span>.


## By Ticker
<div id="tickerFlows"></div>

## By Sector
<div id="sectorFlows"></div>

## Total
<div id="totalFlows"></div>

## Code

On my GitHub [here](https://github.com/nikulpatel3141/ETF-Scraper) in the `gcp` folder.


## How it Works

This project uses the ETF scraper I built to collect ETF holdings and a few scripts to run a data pipeline on Google Cloud Platform. The steps are:

1) Scrape ETF holdings and save to GCS (cloud storage)
  - Funds scraped are specified in a config file on GCS
2) Load the holdings files into BigQuery (GCP Database)
3) Calculate flows for S&P 500 constituents using a SQL query
4) Format the results into HTML tables and output to GCS
5) Run a GitHub Actions workflow to pick up the results on GCS and place in a public repository

Steps 1-4 run as a scheduled Google Cloud Run Job.


## Disclaimer

The information on this page is provided for information only and should not be constituted as investment advice.
I don't provide any warranty as to the accuracy of the information on this site and it should not be relied upon in any way.

## Sources

All results on this page are only from public ETF holdings published by SSGA, iShares and Invesco.

Importantly, this list doesn't include Vanguard since they only publish holdings monthly. This means we exclude VOO and VTI (the 3rd and 4th largest ETFs by AUM) so the flow numbers will not be accurate, though I suspect the reported numbers will be highly correlated with the actual ones. This could be fixed by using market cap data, but I couldn't find a public accurate source for this.


<script src="/js/flow_tracker.js"></script>