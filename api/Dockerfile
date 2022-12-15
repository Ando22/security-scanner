# Install dependencies only when needed
FROM node:16-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app/api

COPY tsconfig.json ./
RUN ls -a

# Install dependencies based on the preferred package manager
COPY . .
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi

# Run migrations
RUN npx sequelize-cli db:migrate

# Rebuild the source code only when needed
FROM node:16-alpine AS builder
WORKDIR /app/api
COPY --from=deps /app/api/node_modules ./node_modules
COPY . .

EXPOSE 8080

CMD ["npm", "run", "start"]
