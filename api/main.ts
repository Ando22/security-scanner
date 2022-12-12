import dotenv from "dotenv";
dotenv.config();
// ---
import Koa from "koa";
import Router from "@koa/router";
import bodyParser from "koa-bodyparser";
import logger from "koa-logger";
import cors from '@koa/cors';
// ---
import { initSequelize } from "database/sequelize";

import { ResultHandler } from "handler/results";

const app = new Koa();
const PORT = process.env.PORT || 8080;

function HealthCheckHandler(app: Koa) {
  const healthCheckGroup = new Router({ prefix: "/api/healthcheck" });

  healthCheckGroup.get("/", (ctx) => {
    ctx.body = "OK";
  });

  app.use(healthCheckGroup.routes());
  app.use(healthCheckGroup.allowedMethods());

  return healthCheckGroup;
}

async function main() {
  await initSequelize();
  app.use(bodyParser());
  app.use(logger());
  app.use(cors());

  // Register handlers
  HealthCheckHandler(app);
  ResultHandler(app);

  app.listen(PORT).on("listening", () => {
    console.log(`Server listening on port ${8080}`);
  });
}

main();
