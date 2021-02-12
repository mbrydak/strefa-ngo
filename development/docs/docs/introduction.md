---
title: Introduction
slug: /
---

Welcome into the Strefa NGO documentation 🤗

The following docs are targeted to the development team of the platform. If you're interested in a more non-technical overview of the project, you can find it [here](https://coderscrew.slab.com/public/gnlpy9x0).

## How can I use these docs?

- If you are new to the project, take some time to read all docs page by page. It would give you a detailed overview of how the app works from a developer's perspective so you will be able to contribute quicker and with higher confidence. Remember to give us a call on our Slack channel if you encounter some questions that the documentation doesn't cover yet.

- Try to refer to the docs as much as possible in your code reviews. As the docs are maintained and discussed by the entire team, they are the best way to keep shared standards across the codebase. It could also make it easier for you and others to remember practices written here. The last but just as important advantage is that we can spot missing parts of the documentation and add them.

- When you spot that you need to write similar things in many code reviews, you definitely should move that advice to the docs. In case you wouldn't know where to place them, treat the [Best Practices](best-practices.md) document as the universal one.

- If you are a developer unrelated to this project, feel free to use parts of our knowledge (or even the entire documentation) when creating your applications. When you spot some practice or pattern that could be improved in your opinion, we will be more than grateful if you write to us about it on the project's GitHub.

## What should we document?

✅ The best practices and patterns we should use across the entire codebase or in specific situations.

✅ How our development workflow looks like.

✅ Everything related to the overall architecture of the project.

✅ Our technological stack and the reasons for choosing each piece of it.

✅ Larger pieces of functionalities (e.g., theming, translations, authentication).

✅ Standards and processes for everyday tasks we are doing during the development.

## What shouldn't we document?

❌ Particular classes or functions in separation of their modules. Most of the code should be self-documenting. When it comes to the universal parts like helper functions, it would be better to use the TS doc.

❌ Things unrelated directly to the programming part of the project. As we have our all-encompassing project knowledge base on Slab, this docs should remain dev focused.

## Ports

To make it possible to run all apps and development packages at the same time each of them will utilize different port.

**Client:** 3000

**Server:** 4000

**Docs:** 5000

**Storybook:** 6006