import Koa from "koa";
import Router from "@koa/router";

import { handleCreateResult, handleGetListResult, handleUpdateResult, handleGetResult, handleDeleteResult } from "domain/services";

export function ResultHandler(app: Koa) {
    const resultGroup = new Router({ prefix: "/api/result" });

    resultGroup.post("/", async ctx => {
        try {
            const { body }: any = ctx.request
            const response = await handleCreateResult(ctx, body)
            ctx.body = {
                status: 200,
                data: response,
                message: 'success create result'
            }
        } catch (error: any) {
            ctx.body = {
                status: ctx.status || 500,
                data: {},
                message: ctx.message
            };
        }
    });

    resultGroup.put("/:id", async ctx => {
        try {
            const { body }: any = ctx.request
            const id = parseInt(ctx.params.id);
            const response = await handleUpdateResult(ctx, id, body)
            ctx.body = {
                status: 200,
                data: response,
                message: 'success update result'
            }
        } catch (error: any) {
            ctx.body = {
                status: ctx.status || 500,
                data: {},
                message: ctx.message
            };
        }
    });

    resultGroup.get("/", async ctx => {
        try {
            const response = await handleGetListResult(ctx)
            ctx.body = {
                status: 200,
                data: response,
                message: 'success get all result'
            }
        } catch (error: any) {
            console.log(error)
            ctx.body = {
                status: ctx.status || 500,
                data: {},
                message: ctx.message
            };
        }
    });

    resultGroup.get("/:id", async ctx => {
        const id = parseInt(ctx.params.id);
        try {
            const response = await handleGetResult(ctx, id)
            ctx.body = {
                status: 200,
                data: response,
                message: 'success get all result'
            }
        } catch (error: any) {
            ctx.body = {
                status: ctx.status || 500,
                data: {},
                message: ctx.message
            };
        }
    });

    resultGroup.delete("/:id", async ctx => {
        try {
            const id = parseInt(ctx.params.id);
            const response = await handleDeleteResult(ctx, id)
            ctx.body = {
                status: 200,
                data: response,
                message: 'success get all result'
            }
        } catch (error: any) {
            ctx.body = {
                status: ctx.status || 500,
                data: {},
                message: ctx.message
            };
        }
    });

    app.use(resultGroup.routes());
    app.use(resultGroup.allowedMethods());

    return resultGroup;
}
