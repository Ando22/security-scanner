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
# The database host
DB_HOST=
# The database port
DB_PORT=
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

### Directory Structure

this project having Layered Architecture. The three independent layers are delivery, use-case and datastore. (https://medium.com/swlh/developing-a-web-application-in-go-using-the-layered-architecture-8fc13209c808)

- `./domain/repository` storing the data to database
- `./domain/service` layer does the business logic that is required for the application
- `./handler` this layer role is to handle recieve request and write response


### Run Database Migration

make sure your postgres application is running. use the following command to run the migration:

```bash
npm run db:migrtate
```


### Running the project

make sure your postgres application is running. use the following command to run the project:

```bash
npm run start
```

### Running with Docker

make sure your postgres application is running. use the following command to run the project:

build the image first:
```bash
  docker build -t api .
```

after it success, you can run this command to run the api
```bash
docker run -p 8080:8080 api
```
