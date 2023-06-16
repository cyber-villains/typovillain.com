---
sidebar_position: 1
---

# About

The Villain Toolkit is a collection of APIs for creating or enhancing domain monitoring solutions. 
Unlike other cybersecurity solutions, Villain's mission is to empower cybersecurity teams with the tools to build their own threat intelligence workflows that ...
- Integrate easily into existing infrastructure, technology stacks, and processes or pipelines
- Allow teams to sharpen their technical or engineering skills without having to learn a new set of tools
- Close common domain monitoring gaps for a fraction of the price of traditional solutions

## The Problem
 > "In 2021, the total number of phishing and counterfeit pages detected increased 1.5x over 2020 to a total of more than 10.5 million — and it continues to grow..." — [Security Boulevard](https://securityboulevard.com/2022/03/what-is-domain-monitoring-and-why-you-need-it/)

 > "74% of large enterprises regularly ignore security incidents due to low prioritization..." — [SecurityWeek](https://www.securityweek.com/incident-response-becoming-more-difficult-survey)

 > "53% of spam and phishing sites are discovered by an external source..." — [Mandiant Security](https://www.mandiant.com/resources/security-effectiveness-2020-deep-dive-into-cyber-security-reality)



Trust is Domain Monitoring has become a priority for 


## What is Villain

The Villain Toolkit consists of <u>three</u> complimentary API services.

Together these APIs enable cybersecurity teams to create robust, end-to-end domain monitoring solutions. When used together these services are able to create a robust, end-to-end anti-phishing and domain monitoring workflows. However, each of these services is capable of acting entirely independent of one another. This allows the developer the freedom to pick and choose the API(s) that best fit their particular use-case without the need to completely redesign existing workflows.

The functionality for each API service is further examined in our Documentation. Additionally, the Tutorials section contains a "mash-ups" of these APIs which demonstrates how to build an end-to-end, production-ready domain monitoring workflow.

![Drag Racing](services-overview.png)


| Tool      | Description |
| --------------------------------- | --------------------------------- |
| certificate.stream        | REST API for <u>polling</u> the Certificate Transparency Logs. There's no need to set up complex log streaming infrastructure, simply poll the certificate.stream API to get the latest certificates from any or all log operators such as Cloudflare, Google, or DigiCert.        |
| harpoon.domains           | REST API for <u>monitoring</u> the Certificate Transparency Logs. Simply, add a domain name that you want monitored and harpoon will use similarity metrics such as [Levenshtein distance](https://en.wikipedia.org/wiki/Levenshtein_distance) to compare domains from the logs to your domain. If any similarity thresholds are met or exceeded, Harpoon will notify you.       |
| swordphish.io             | REST API for scraping and extracting website information such as HTML, HAR, WHOIS, DNS, TLS certificates, and Screenshots. Swordphish can be hooked into Harpoon's monitoring workflow to immediately scrape any suspicious domains and share the results with you in real-time.    |

## Why it matters

With the number of cyber attacks only continuing to grow, even the most highly skilled Security Operations Centers are finding it increasingly difficult to stay on top of routine tasks. The need for cutting-edge, automated solutions within Information Security workflows has become critical to effectively managing daily responsibilities. 

For example, your team may already have a process inplace for web-scraping suspicious or parked domain names, but may still have a gap around auditing the certificate transparency logs to find such domains. In this case, the certificate.stream and harpoon.domains APIs could be leveraged to perform the log monitoring and alerting without requiring the solution to also incorporate the swordphish.io API.

Swordphish combines years of Cybersecurity domain expertise with AI and ML tools. The result is an easy-to-use REST API capable of tackling common phishing and domain spoofing threats. Security Operations Centers can enhance or completely automate portions of their threat monitoring workflows by leveraging the Swordphish API to extract data about suspicious domains targeting their organizations. Moreover, the data captured from these domains can be used by Threat Hunters to better understand attackers' methodologies, prevent future threats, and most importantly, safeguard the business' reputation.


Thanks for checking out Villain!
