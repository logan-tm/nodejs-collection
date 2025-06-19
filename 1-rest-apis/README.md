# REST APIs

A collection of basic REST APIs. That's it. Most will return JSON placeholder data. Some may go further to explore a framework's feature set.

## What is the goal?

To explore REST API libraries, look over middlewares, and get a service running in Node with some best practices in mind. However, most features I would otherwise implement (such as logging, error structure, and pm2) are out of scope unless a framework brings in similar features to be compared.

## What am I looking for?

Some features are brought in from other packages, like `winston` for logging. Other features are baked into a framework, such as logging in `fastify` bringing `pino` out of the box. I want to observe these features and compare them to one another to see what my thoughts are.

While most features are not planned to be implemented (such as authentication), I may implement them later on if one framework provides a baked-in solution for contrast.

## Libraries to explore

|    Name | Description                     | Built |
| ------: | :------------------------------ | :---: |
| express | The default choice              |  ❌   |
| fastify | On express' heels               |  ❌   |
|     koa | On express' heels               |  ❌   |
|  nestjs | An out-of-the-box solution      |  ❌   |
|    hapi |                                 |  ❌   |
|    hono | Cloudflare's homemade framework |  ❌   |

✅
❌

## Libraries to utilize

|            Name | Purpose            |
| --------------: | :----------------- |
|          helmet | Security           |
|            cors | Security           |
| jest/mocha/chai | Testing            |
|    winston/pino | Logging            |
|     pm2 (maybe) | Production-running |
