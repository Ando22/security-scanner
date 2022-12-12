# GuardRails Security Scanner Backend API

This is the Security Scanner Backend API for the GuardRails Fullstack Engineer Challange. It is a RESTful API that is used to store and retrieve data from the database.

## Installation

### Prerequisites

This project uses [Node.js](https://nodejs.org/en/) and [PostgreSQL](https://www.postgresql.org/). You will need to install both of these before you can run the project.

### Setup

This project uses [Koa](https://koajs.com/) as the web server. To install the dependencies, run the following command:

```bash
npm install
```

### Configuration

`dotenv` is used to manage environment variables. You will need to create a `.env` file in the root directory of the project. The following variables are required:

```bash
# The port that the server will run on
PORT=3000
# The database host
DB_HOST="localhost"
# The database port
DB_PORT=6432
# The database name
DB_NAME=
# The database user
DB_USER=
# The database password
DB_PASS=
```

or simply copy the `.env.example` file and rename it to `.env`.

```bash
cp .env.example .env
```

### Running the project

To run the project, use the following command:

```bash
npm start
```

## Contributing

### Code Style

We enforces functional programming, so we avoid using classes and `this` keyword.

```ts
// bad
class Foo {
  bar() {
    return this.baz;
  }
  baz: string;
}

// good
const foo = (baz: string) => ({
  bar: () => baz,
});
```
