[![Netlify Status](https://api.netlify.com/api/v1/badges/8354804d-8681-4e76-b78d-384cd7fa4f77/deploy-status)](https://app.netlify.com/sites/serene-lichterman-75018e/deploys)

# mauriceyap.co.uk

My website, built using the [Eleventy static site generator](https://www.11ty.dev).

## Development

### Dependencies

These need to be installed on your system:

1. [Node.js](https://nodejs.org/en/download/package-manager)
1. [Yarn](https://yarnpkg.com/getting-started/install) - this should usually
   just involve running `corepack enable`

### Developing

Clone this repository. Then in its directory, run:

```bash
yarn
```

Run the Eleventy dev server to see your changes in the browser:

```bash
yarn start
```

Build the site using Eleventy. This outputs files into the `_site/` directory:

```bash
yarn build
```
