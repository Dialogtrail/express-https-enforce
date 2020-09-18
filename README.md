# express-https-enforce
- Redirects all HTTP GET requests to HTTPS.
- Responds with 403 to all non-GET HTTP requests.
- Supports whitelisting NODE_ENV values in order to disable HTTPS during development or testing.

## Installation

### NPM

`npm i express-https-enforce`

## Usage
```
import enforceHttps from 'express-https-enforce';
import express from 'express';

const app = express();
app.use(enforceHttps());
...
```

## Options
You can specify for which NODE_ENV values to whitelist from HTTPS enforcement.
```
app.use(enforceHttps(['development', 'test']));
```
