---
title: Scripts convention
---

To make project maintenance simpler, we are striving for the unification of our `package.json` scripts. It gives us a possibility to run some scripts in all packages at once (using Lerna) and detect situations when some scripts are repeatable and should be moved to the `scripts` directory. In this file, you will find a description of all scripts used across the monorepo.

## Testing

**test** - run all tests once.

**test:watch** - run all tests. Rerun tests when related files change.

**test:cov** - run all tests and save coverage reports.

**test:changed** - run tests only for files affected by current changes. This command should run the `scripts/testChanged.js` file.

## Linting

**lint** - run ESLint for all files. Throw if there is an error.

**lint:fix** - run ESLint for all files. Throw if there is any error non-fixable error. Fix all auto-fixable errors.

**lint:changed** - run ESLint only for changed files. This command should run the `scripts/lintChanged.js` file.

**typecheck** - run TypeScript type checker for all files.

## Development

**dev** - run package locally on development mode.

**prebuild** - runs before the build script. Use it to clean all artifacts from the previous build.

**build** - build a production version of the app.

**start** - runs an app that has been built.

**generate** - generate files required for packages to work correctly. It's always called when you bootstrap the project.

## Other

**check-updates** - check update possibilities for all installed packages.

**icons:generate** - generate icon components from SVG files. Used only in front-end packages.

## Project root scripts

The project's root contains some scripts mentioned above. The purpose of those is to run a particular script in each package separately (in parallel). There are also a few additional scripts described below.

**showtime** - runs all packages in development mode (with the `dev` command). Its created mostly for presentation purposes. You wouldn't need to run all packages to develop your feature or fix a bug in most cases.

**bootstrap** - use it when you're starting the project for the first time and each time after the `cleanup` script. It will install dependencies for all packages and link monorepo packages with each other.

**cleanup** - removes all generated folders and cleans Lerna and Yarn cache. Your first aid when your app doesn't start for some reason.