# GuardRails Security Scanner Frontend Dashboard

## Installation
### Prerequisites

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### Setup

This project uses [Next.js](https://nextjs.org/) as the web server. To install the dependencies, run the following command:

```bash
npm install
```

### Configuration
Next.js comes with built-in support for environment variables, which allows you to do the following:

Use .env.local to load environment variables
Expose environment variables to the browser by prefixing with `NEXT_PUBLIC_`

```bash
NODE_ENV=
NEXT_PUBLIC_API_URL=
```

### Running the Dashboard

First, you need to build the application:

```bash
npm run build
# or
yarn build
```

Then, you run this command

```bash
npm run start
# or
yarn start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Running with Docker

make sure your postgres application is running. use the following command to run the project:

build the image first:
```bash
  docker build -t dashboard .
```

after it success, you can run this command to run the api
```bash
docker run -p 3000:3000 dashboard
```


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

