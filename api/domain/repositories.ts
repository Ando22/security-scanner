import Koa from "koa";
import Findings from "models/Findings";
import Results, { ResultsModel } from "models/Results";

const createResult = async (payload: ResultsModel) => {
    try {
        const result = await Results.create(payload, {
            include: {
                model: Findings,
                as: 'findings'
            }
        }
        )
        return result
    } catch (error) {
        throw error
    }
}


const updateResultById = async (id: number, payload: ResultsModel) => {
    try {
        const result = await Results.update({
            ...payload
        }, {
            where: {
                id: id
            },
            returning: true
        });
        return result;
    } catch (error) {
        throw error;
    }
};


const getAllResult = async (filter: { repository: string; status: string }) => {
    try {
        const results = await Results.findAll()
        return results
    } catch (error) {
        throw error
    }
}

const getResultById = async (id: number) => {
    try {
        const result = await Results.findByPk(id, {
            include: {
                model: Findings,
                as: 'findings'
            }
        });
        return result;
    } catch (error) {
        throw error;
    }
};

const deleteResultById = async (id: number) => {
    try {
        await Results.destroy({
            where: {
                id: id
            }
        });
        return true
    } catch (error) {
        throw error;
    }
};

export { createResult, getAllResult, getResultById, updateResultById, deleteResultById }