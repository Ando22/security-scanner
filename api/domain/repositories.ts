import sequelize from "database/sequelize";
import Results, { ResultsModel } from "models/Results";

const createResult = async (payload: ResultsModel) => {
    try {
        const result = await Results.create({
            ...payload
        }, {
            returning: true
        })
        return result
    } catch (error) {
        throw error
    }
}

const updateResultById = async (id: number, payload: {
    status: string
    scanning_at: string | null | undefined;
    finished_at: string | null | undefined;
}) => {
    try {
        const result = await Results.update({
            ...payload
        }, {
            where: {
                id: id
            },
            returning: true
        });
        return result[1][1];
    } catch (error) {
        throw error;
    }
};

const getAllResult = async () => {
    try {
        const results: any = await Results.findAll({
            attributes: [
                'id',
                'repository',
                'status',
                'findings',
                'queue_at',
                'scanning_at',
                'finished_at',
            ]
        })
        return results.map((res: any) => {
            const findings = JSON.parse(res.findings)
            return {
                id: res.id,
                repository: res.repository,
                status: res.status,
                total_findings: findings.length,
                queue_at: res.queue_at,
                scanning_at: res.scanning_at,
                finished_at: res.finished_at,

            }
        })
    } catch (error) {
        console.log(error)
        throw error
    }
}

const getResultById = async (id: number) => {
    try {
        const result: any = await Results.findByPk(id);
        return {
            id: result.id,
            repository: result.repository,
            status: result.status,
            findings: JSON.parse(result.findings),
            queue_at: result.queue_at,
            scanning_at: result.scanning_at,
            finished_at: result.finished_at,
        };
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