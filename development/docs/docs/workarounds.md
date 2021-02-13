---
title: Workarounds
---

This page contains a list of workarounds in our codebase caused by some troubles with the "outside world" (tools, libraries, etc.).

## No support for webpack 5 in server hot reloading
**Problem description:** The newest versions of `@nestjs/cli` are using Webpack 5 under the hood, which makes them incompatible with the `start-server-webpack-plugin`. As a result, it's impossible to build the application.

**Temporary solution:** We pinned `@nestjs/cli` package to `7.5.1` version by adding it to `ignoreDeps` of `renovate.json`.

**Issues to track:** [NestJS repo](https://github.com/nestjs/nest/issues/5706), [Start Server Webpack Plugin repo](https://github.com/ericclemmons/start-server-webpack-plugin/issues/40)
