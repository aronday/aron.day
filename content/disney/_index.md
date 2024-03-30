---
title: "Integrating Real-Time Attraction Data with Datadog 🎢"
date: 2024-03-30
draft: false
author: "Aron Day"
description: "How we used real-time attraction data and Datadog for smarter planning on our Disney World holidays 🏰✨."
categories: ["Data Analysis", "Projects"]
tags: ["Datadog", "API Integration", "Python", "Monitoring", "Disney World"]
---

## Project Overview 🌟

As huge Disney World enthusiasts, my wife and I make it a point to visit the park every year 🎆. To enhance our trip planning, I integrated real-time attraction data from `themeparks.wiki` with Datadog. This techy approach helped us navigate past long lines 🚀, catch more shows 🎭, and maximize the magic 🏰✨.

### The Challenge 🤔

Our goal was straightforward: access accurate, real-time data on attraction wait times and operational statuses to efficiently plan our park adventures 🗺️.

### Solution 💡

I created a Python script to fetch data from `api.themeparks.wiki` and send it to Datadog for analysis. Here's what I did:

1. **Data Fetching**: Using Python's `requests` library, I gathered up-to-date information on ride wait times and operational statuses 🎢.
2. **Data Submission**: I then sent this data to Datadog using its Python API client for real-time monitoring 📊.
3. **Logging and Monitoring**: To ensure everything was running smoothly, I set up JSON logging in our script 🛠️.

### Key Features 🔑

- **Real-Time Data Analysis**: With Datadog, we analyzed attraction wait times and statuses as they happened 📈.
- **Automated Monitoring**: We used Datadog alerts to stay updated on any significant data changes 🔔.
- **Trace and Log Correlation**: This ensured our script was performing optimally and reliably 🌈.

### Technologies Used 🛠️

This project was powered by Python, the Datadog API, and Hugo for sharing our journey ✍️.

### Real-Time Attraction Data Visualization

Experience our real-time attraction data visualization through Datadog:

{{< iframe src="https://app.datadoghq.com/graph/embed?token=51aa35b2b07a773a2f8383c333ccfe0c813e4ec64e4202f36cb54da0be614da4&height=400&width=700&legend=true" >}}

### Monitoring Dashboard

Check out our Datadog dashboard for an overview of park operations:

[View the Dashboard](https://p.datadoghq.com/sb/f4ec3568-e7d9-11ec-b24f-da7ad0900002-5439b4f1eecd127cbc39dda4cf0a85d0) 

### See or Run the Code 🚀

Curious about the code or want to run it yourself? It's all on GitHub:

[Disney World Metrics on GitHub](https://github.com/aronday/disneyworld-metrics)

The repository includes scripts, documentation, and setup instructions to get you started. Perfect for Disney fans and data geeks alike!

### Future Directions 🚀

Inspired by this project's success, we're already planning the next steps:

- **Transportation Insights**: Integrating real-time data on Disney World transportation, including bus wait times and locations, to improve park navigation 🚌.
  
- **Dining Reservation Alerts**: Developing alerts for dining reservations to secure spots at your favorite restaurants 🍴.
  
- **Predictive Analytics for Crowd Management**: Utilizing predictive analytics to forecast crowd levels and wait times, ensuring a smoother park visit 📊.
  
- **Enhanced Personalization Options**: Offering personalized itinerary recommendations based on preferences and real-time updates for an optimized park experience 🌈.

---

Combining our love for Disney with a dose of technology, this project is about making each visit even more magical. Stay tuned for more tech-powered Disney adventures! 🌟
