# @pezkuwi/apps

A Portal into the Pezkuwi and Bizinikiwi networks. Provides a view and interaction layer from a browser.

It is hosted at https://apps.pezkuwichain.io to explore any of the supported Pezkuwi and Bizinikiwi chains.

**Important** If you are a chain developer and would like to add support for your chain to the UI, all the local configuration (API types, settings, logos) can be customized in [the apps-config package](packages/apps-config#README.md), complete with instructions of what goes where.


## Overview

The repo is split into a number of packages, each representing an application.


## Development

Contributions are welcome!

To start off, this repo (along with others in the [@pezkuwi](https://github.com/pezkuwichain/) family) uses yarn workspaces to organize the code. As such, after cloning dependencies _should_ be installed via `yarn`, not via npm, the latter will result in broken dependencies.

To get started -

1. Clone the repo locally, via `git clone https://github.com/pezkuwichain/pezkuwi-apps <optional local path>`
2. Ensure that you have a recent LTS version of Node.js, for development purposes [Node >= 16](https://nodejs.org/en/) is recommended.
3. Ensure that you have a recent version of Yarn, for development purposes [Yarn >= 1.22](https://yarnpkg.com/docs/install) is required.
4. Install the dependencies by running `yarn install --frozen-lockfile`
5. Ready! Now you can launch the UI (assuming you have a local Pezkuwi Node running), via `yarn run start`
6. Access the UI via [http://localhost:3000](http://localhost:3000)


## Docker

To build and run a container with local changes -

```
docker build -t pezkuwi-apps -f docker/Dockerfile .
docker run --rm -it --name pezkuwi-ui -e WS_URL=ws://someip:9944 -p 80:80 pezkuwi-apps
```

The UI is then at http://localhost:80 (or just http://localhost)
