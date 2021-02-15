---
title: Project structure
---

## Why monorepo?

- **Shipping only complete features** - with a monorepo, it's a breeze to ensure that we're reviewing and releasing only fully-implemented, tested, and documented features. In most cases, the functionalities we need to implement affects many parts of the application. Let's use a simple login feature as an example. To implement it, we should: write a new API endpoint (server package), create a sign-in view with a form (client package), document our authentication flow (docs package), and write some end-to-end tests (e2e package). If we decided to divide those packages into separate repositories, it would be more troublesome to ship them simultaneously.

- **Cross-package documentation** - as we're treating all packages as one, a large project monorepo gives us the best opportunity to maintain its complete documentation in one place. This way, we're ensuring that all code changes requiring a docs update wouldn't be shipped without it.

- **Shared configuration** - we can create a configuration for CI, linting tools, and integrations only once. That makes it effortless to maintain consistent standards across the entire codebase and keep our config in accordance with the DRY rule.

- **Single source of truth** - we have one place where we can see which features are already in the implementation phase, which of them are waiting for review, what are current issues, and how many feature requests wait to be discussed/implemented.

- **Atomic changes** - we can make a single change and reflect it in all the packages. There is no need to move between many repositories each time we change some TypeScript type, utility function, or a part of the config.

- **Better API contracts** - we're creating TypeScript models for data exchanged through API and then reusing it both for the client and the server. It gives us [end-to-end type safety](https://www.youtube.com/watch?v=GrnBXhsr0ng).

## Workspaces

Workspaces are folders that contain project's packages. They are written in `lerna.json` to work correctly with the Lerna CLI and `package.json` to work with Yarn Workspaces functionality. Currently, we're using the following workspaces:

**Apps** - applications targeted to the end-users.

**Development** - tools used by developers. Development packages can use other packages but cannot be imported by them.

**Shared** - reusable logic used in apps and development workspaces. Shared packages aren't deployed on their own.

## Packages

Packages are folders that contain code for a particular slice of the project. Each package has a name written according to the `@sn/X` template, where X is the name of the package's folder. Currently, our project contains the following packages:

### Apps workspace

**@sn/client** - front-end part of the portal written in Next.js.

**@sn/server** - back-end part of the portal written in NestJS.

### Development workspace

**@sn/docs** - project's documentation created with Docusaurus.

**@sn/e2e** - end-to-end tests created with Cypress.

**@sn/storybook** - stories for project's components created with Storybook.

### Shared workspace

**@sn/api** - API requests and functions for mocking the server (using MSW).

**@sn/config** - shared ESLint and Jest configuration.

**@sn/env** - all logic related to environment variables.

**@sn/models** - data structures used for the client and the server.

**@sn/ui-kit** - library of reusable components with pre-defined theming.


## Root directory structure

```
strefa-ngo
├── .github
├── .vscode
├── apps
├── development
├── scripts
├── shared
├── .gitignore
├── .prettierrc.js
├── lerna.json
├── package.json
├── README.md
├── tsconfig.base.json
└── yarn.lock
```

**.github** - GitHub-related configuration. You can read more about it in the [GitHub Configuration](./github-configuration.md) page.

**.vscode** - files related to [VS Code](https://code.visualstudio.com/) configuration. The most important file is `settings.json`. It will overwrite some of your default configs to make the ESLint plugin work properly and ensure you're using the correct TypeScript version across the entire project. If you want, you can install all recommended extensions from the `extensions.json` and/or copy some of the recommended VS Code settings from `settings.recommended.json`. Of course, if you prefer any other IDE, you can use it as well, but in such a case, the configuration is on your side.

**apps, development, shared** - workspaces with the project's packages.

**scripts** - scripts used across many packages. Currently, you can find there two main scripts: `lintChanged.js` and `testChanged.js`. As their names suggest, they will run ESLint/Jest only for changed files in the particular package. By default, those scripts will use the `main` branch as the base for running `git diff`. You can customize it by specifying the `TARGET_BRANCH` environment variable.

**.gitignore** - list of all files across the entire monorepo that Git should ignore.

**.prettierrc.js** - [Prettier](https://prettier.io/) configuration for the entire project.

**lerna.json** - monorepo configuration for [Lerna](https://lerna.js.org/).

**package.json** - root project configuration file. It contains devDependencies reused across the entire project and workspaces configuration.

**README.md** - basic description of the project. It shouldn't cover too many details about the project development as those are covered by this documentation.

**tsconfig.base.json** - base for each package TypeScript configuration. It shouldn't ever be used as a standalone config file - always as a value for the `extends` key in `tsconfig.json` of a particular package.

**yarn.lock** - file with locked versions of project's dependencies.
