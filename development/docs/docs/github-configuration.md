---
title: GitHub Configuration
---

You can find the entire GitHub related configuration inside the `.github` directory.

## Workflows

Workflows contain configurations for CI scripts running inside GitHub. Currently, you can find there three YAML files.

**lint.yml** - runs ESLint on every changed file when making a Pull Request. Changes are determined by comparing the current PR branch with its target.

**tests.yml** - runs tests on every affected file when making a Pull Request. Affected files are determined by comparing the current PR branch with its target.

**typecheck.yml** - runs TypeScript check for every file in the repository when making a Pull Request.
## Code owners

`CODEOWNERS` is a file that allows us to specify people who need to be added as reviewers to every pull request containing changes in a particular domain. As the project is currently in an initial phase, there are not too many code owners specified. Looking into the future, we plan to add a separate code owner for each package and each domain of the app.

## Renovate

We're using [Renovate](https://www.whitesourcesoftware.com/free-developer-tools/renovate) to update our dependencies every Friday at 3 AM automatically.