
FROM node:16-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app/dashboard

COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi


FROM node:16-alpine AS builder
WORKDIR /app/dashboard
COPY --from=deps /app/dashboard/node_modules ./node_modules
COPY . .

RUN yarn build

EXPOSE 3000

CMD ["npm", "run", "start"]
