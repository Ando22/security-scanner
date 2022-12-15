# GuardRails - Full Stack Engineer Challenge - Security Scanne


# Deployment
- Now it's configured through: https://github.com/gajah-work/infra


[Gajah](https://www.gajah.work/) is an software that's help users or groups to maintain user access of tools that their using. Gajah manage all access management in one single of truth dashboard to help their maintain their access.

## ⚡️ Quick start

1. Clone this repository:
2. Rename `.env.example` to `.env` and fill it with your environment values.
3. Install [Docker](https://www.docker.com/get-started) and the following useful Go tools to your system:

   - [goose](https://github.com/pressly/goose) for apply migrations
   - [github.com/swaggo/swag](https://github.com/swaggo/swag) for auto-generating Swagger API docs
   - [github.com/securego/gosec](https://github.com/securego/gosec) for checking Go security issues

4. Run migration for this project and rename the variable base on your configuration

```
cd platform/migrations

goose postgres "host=$HOST port=$PORT user=$USER password=$PASSWORD dbname=gajah_db_dev sslmode=disable" up
```

5. Create your `.env` file

6. Run project by this command:

```bash
make docker.postgres
make docker.redis
make run
```

## 📦 Used packages

| Name                                                                  | Version   | Type       |
| --------------------------------------------------------------------- | --------- | ---------- |
| [gofiber/fiber](https://github.com/gofiber/fiber)                     | `v2.19.0` | core       |
| [gofiber/jwt](https://github.com/gofiber/jwt)                         | `v2.2.7`  | middleware |
| [arsmn/fiber-swagger](https://github.com/arsmn/fiber-swagger)         | `v2.17.0` | middleware |
| [stretchr/testify](https://github.com/stretchr/testify)               | `v1.7.0`  | tests      |
| [golang-jwt/jwt](https://github.com/golang-jwt/jwt)                   | `v4.1.0`  | auth       |
| [joho/godotenv](https://github.com/joho/godotenv)                     | `v1.4.0`  | config     |
| [jmoiron/sqlx](https://github.com/jmoiron/sqlx)                       | `v1.3.4`  | database   |
| [jackc/pgx](https://github.com/jackc/pgx)                             | `v4.13.0` | database   |
| [go-redis/redis](https://github.com/go-redis/redis)                   | `v8.11.3` | cache      |
| [swaggo/swag](https://github.com/swaggo/swag)                         | `v1.7.3`  | utils      |
| [google/uuid](https://github.com/google/uuid)                         | `v1.3.0`  | utils      |
| [go-playground/validator](https://github.com/go-playground/validator) | `v10.9.0` | utils      |

## 🗄 Template structure

### ./app

**Folder with business logic only**. This directory doesn't care about _what database driver you're using_ or _which caching solution your choose_ or any third-party things.

- `./app/controllers` folder for functional controllers (used in routes)
- `./app/models` folder for describe business models and methods of your project
- `./app/queries` folder for describe queries for models of your project

### ./docs

**Folder with API Documentation**. This directory contains config files for auto-generated API Docs by Swagger.

### ./pkg

**Folder with project-specific functionality**. This directory contains all the project-specific code tailored only for your business use case, like _configs_, _middleware_, _routes_ or _utils_.

- `./pkg/configs` folder for configuration functions
- `./pkg/middleware` folder for add middleware (Fiber built-in and yours)
- `./pkg/repository` folder for describe `const` of your project
- `./pkg/routes` folder for describe routes of your project
- `./pkg/utils` folder with utility functions (server starter, error checker, etc)

### ./platform

**Folder with platform-level logic**. This directory contains all the platform-level logic that will build up the actual project, like _setting up the database_ or _cache server instance_ and _storing migrations_.

- `./platform/cache` folder with in-memory cache setup functions (by default, Redis)
- `./platform/database` folder with database setup functions (by default, PostgreSQL)
- `./platform/migrations` folder with migration files (used with [golang-migrate/migrate](https://github.com/golang-migrate/migrate) tool)

## ⚙️ Configuration

```ini
# Stage status to start server:
#   - "dev", for start server without graceful shutdown
#   - "prod", for start server with graceful shutdown
APP_ENV="dev"

# Server settings:
SERVER_HOST="0.0.0.0"
SERVER_PORT=5000
SERVER_READ_TIMEOUT=60

# JWT settings:
JWT_SECRET_KEY="secret"
JWT_SECRET_KEY_EXPIRE_MINUTES_COUNT=15
JWT_REFRESH_KEY="refresh"
JWT_REFRESH_KEY_EXPIRE_HOURS_COUNT=720

# Database settings:
DB_HOST="localhost"
DB_PORT=5432
DB_USER="postgres"
DB_PASSWORD="toor"
DB_NAME="gajah_db_dev"
DB_SSL_MODE="disable"
DB_MAX_CONNECTIONS=100
DB_MAX_IDLE_CONNECTIONS=10
DB_MAX_LIFETIME_CONNECTIONS=2

# Redis settings:
REDIS_HOST="localhost"
REDIS_PORT=6379
REDIS_PASSWORD=""
REDIS_DB_NUMBER=0

# Mail
MAIL_USER=
MAIL_PASSWORD=

# © 2022 Gajah. Terms Privacy
```

## ⚠️ License


