import Koa from "koa";
import { ResultsModel } from "models/Results";
import { generateFindings } from "helper/finding";
import moment from "moment";
import { createResult, getAllResult, getResultById, updateResultById, deleteResultById } from "./repositories";


const handleCreateResult = async (ctx: Koa.Context, payload: ResultsModel) => {
    try {
        const now = Date.now()
        const data:any = {
            repository: payload.repository,
            status: 'QUEUED',
            // staticly generate findings
            findings: JSON.stringify(
                [
                    generateFindings(now)
                ]
            ),
            queue_at: moment().format(),
            scanning_at: null,
            finished_at: null
        }
        const result = await createResult(data)
        return result
    } catch (error) {
        console.error('Error:Service:Repository create result')
        ctx.throw(500, 'Error:Service:Repository create result')
    }
};

const handleUpdateResult = async (ctx: Koa.Context, id: number, payload: ResultsModel) => {
    try {
        const status = payload.status
        const data = {
            status: payload.status,
            scanning_at: status == 'IN_PROGRESS' ? moment().format() : undefined,
            finished_at: status == 'SUCCESS' || status == 'FAILURE'  ? moment().format() : undefined,
        }
        const result = await updateResultById(id, data)
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

const handleGetListResult = async (ctx: Koa.Context) => {
    try {
        const results = await getAllResult()
        return results
    } catch (error) {
        console.error('Error:Service:Repository get all result')
        ctx.throw(500, 'Error:Service:Repository get all result')
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