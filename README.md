# Tech Interview Frontend Test

React project created with create-react-app. Includes routing with react-router-dom v6, global state management with useContext, http requests with react-query and axios, english and arabic locales, unit tests with testing-library, and e2e tests with cypress.

## Run Locally

Prerequisite: [Node v16 LTS](https://nodejs.org/en/download/) (v14 will not work)

Checkout the repository, then install the dependencies with:

```bash
  npm install
```

[Json-server](https://www.npmjs.com/package/json-server) is used as the backend, it can be installed with:

```bash
  npm install -g json-server
```

Run json-server on port 3001 (port 3000 will be used by react app):

```bash
    json-server --watch build/db.json --port 3001
```

Run react app in another terminal with:

```bash
    npm start
```

Unit tests can be run with:

```bash
    npm test
```

E2E tests can be run with:

```bash
    npx cypress run
```
