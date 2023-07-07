# Security Scanner

Security Scanner Fullstack Engineer Challenge. this project is to scan a list repository vulnarable code. user can pick a list of repositories and see the result of the scan process.

## Quick start

1. Clone this repository:
2. Rename `.env.example` to `.env` and fill it with your environment values.
3. Install [Docker](https://www.docker.com/get-started) and the following useful Go tools to your system:
4. Create your `.env` file
6. Run project by this command:

```bash
docker-compose up --build -d
```

## Used packages

| Name                                                                  | Version   | Type             |
| --------------------------------------------------------------------- | --------- | ---------------- |
| [Sequelize](https://sequelize.org/)                                   | `v6.26.0` | database ORM     |
| [Koa](https://koajs.com/)                                             | `v2.13.4` | nodejs Framework |
| [Next](https://nextjs.org/)                                           | `v13.0.6` | react Framework  |
| [Jest](https://jestjs.io/)                                            | `v13.0.6` | unit testing     |

## Directory Structure
This project run in Monorepository. but not shared modules.

- `./api` folder for backend service of this project
- `./dashboard` folder for front end application of this project

## Configuration

```ini
# Node Setting
NODE_ENV=
NEXT_PUBLIC_API_URL=

# Database Setting
DB_PORT=
DB_USER=
DB_PASS=
DB_NAME=
```


