import Koa from "koa";
import { ResultsModel } from "models/Results";
import { createResult, getAllResult, getResultById, updateResultById, deleteResultById } from "./repositories";


const handleCreateResult = async (ctx: Koa.Context, payload: ResultsModel) => {
    try {
        const result = await createResult(payload)
        return result
    } catch (error) {
        console.error('Error:Service:Repository create result')
        ctx.throw(500, 'Error:Service:Repository create result')
    }
};

const handleUpdateResult = async (ctx: Koa.Context, id: number, payload: ResultsModel) => {
    try {
        const result = await updateResultById(id, payload)
        return result
    } catch (error) {
        console.error('Error:Service:Repository create result')
        ctx.throw(500, 'Error:Service:Repository create result')
    }
};

const handleGetResult = async (ctx: Koa.Context, id: number) => {
    try {
        const result = await getResultById(id)
        return result
    } catch (error) {
        console.error('Error:Service:Repository create result')
        ctx.throw(500, 'Error:Service:Repository create result')
    }
};

const handleGetListResult = async (ctx: Koa.Context, filter: { repository: string; status: string }) => {
    try {
        const results = await getAllResult(filter)
        return results
    } catch (error) {
        console.error('Error:Service:Repository get all history')
        ctx.throw(500, 'Error:Service:Repository get all history')
    }
};

const handleDeleteResult = async (ctx: Koa.Context, id: number) => {
    try {
        const result = await deleteResultById(id)
        return result
    } catch (error) {
        console.error('Error:Service:Repository create result')
        ctx.throw(500, 'Error:Service:Repository create result')
    }
};

export { handleCreateResult, handleGetListResult, handleUpdateResult, handleGetResult, handleDeleteResult }