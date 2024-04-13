# Petar_mc's docs 

## Getting Started

How to get docs running on your local machine for development.

### Prerequisites

- [node](https://nodejs.org)
- [yarn](https://yarnpkg.com/getting-started/install)

### Local Development

1. Clone the repository. If you plan to make changes, create a fork first

```bash
git clone https://github.com/PetarMc1/Petar_mcs-Docs
```

2. Install all required dependencies

```bash
yarn
```

3. Start the development server

```bash
yarn dev
```

This will start a local development server. The majority of changes will
be instantly reflected live without the need to restart the development server or reload the page in your browser.

### Building

```bash
yarn build
```

This command builds a production-ready deployment into the `build` folder. These files are ready
to be hosted on any static content server.

## License

The documentation (`.md` and `.mdx` files in the `/docs` folder) are licenced under the  [CC-BY-SA-4.0](/LICENCE-docs) licence.

The supporting code is licenced under the [BSD-2-Clause](/LICENSE) licence



