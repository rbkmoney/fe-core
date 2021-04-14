# Frontend Libs Monorepo

-   [NPM Workspaces](https://docs.npmjs.com/cli/v7/using-npm/workspaces)
-   [Lerna](https://github.com/lerna/lerna)

-   CommitLint
-   [Prettier](https://prettier.io/)
-   ESLint

## Installation

1.  Add `.npmrc` file into your project root directory

    ```sh
    @rbkmoney:registry=https://npm.pkg.github.com/
    ```

1.  [Authenticate to GitHub Packages](https://help.github.com/en/github/managing-packages-with-github-packages/configuring-npm-for-use-with-github-packages#authenticating-to-github-packages)

1.  Install
    ```sh
    npm i '@rbkmoney/<PACKAGE_NAME>'
    ```

## Contributing

### Linking

```sh
npm link '<PATH>/fe-core/packages/<PACKAGE_DIR>'
```

### Versioning & GIT Commits

The project uses [ConventionalCommits](https://www.conventionalcommits.org/)

-   **fix:** a commit of the type fix patches a bug in your codebase (this correlates with PATCH in Semantic Versioning).
-   **feat:** a commit of the type feat introduces a new feature to the codebase (this correlates with MINOR in Semantic Versioning).
-   **BREAKING CHANGE:** a commit that has a footer BREAKING CHANGE:, or appends a ! after the type/scope, introduces a breaking API change (correlating with MAJOR in Semantic Versioning). A BREAKING CHANGE can be part of commits of any type.
-   types other than fix: and feat: are allowed, for example @commitlint/config-conventional (based on the the Angular convention) recommends build:, chore:, ci:, docs:, style:, refactor:, perf:, test:, and others.
-   footers other than BREAKING CHANGE: <description> may be provided and follow a convention similar to git trailer format.

### Publish

**is now performed automatically on CI**

1.  Bump prerelease every time you push
    ```sh
    npm run versionup
    ```
1.  Bump release & publish before merge into master
    ```shell
    npm run release-versionup
    npm run release-publish
    ```
