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
