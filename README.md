# ts-express-starter

> Minimal Express/TypeScript boilerplate

### Setup

```bash
git clone https://github.com/zsevic/ts-express-starter
cd ts-express-starter
cp .env.sample .env # change values after copying
npm i
docker-compose up
npm run dev
```

### Build

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
npm run lint:fix
```

### Testing

```bash
npm test
```

### API documentation

Generated at `/api-docs` endpoint using [express-oas-generator](https://www.npmjs.com/package/express-oas-generator) plugin

### Technologies used

- Node.js, TypeScript, Express, MongoDB
