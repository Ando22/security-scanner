import sequelize from "database/sequelize";
import { DataTypes, Model } from "sequelize";

export interface ResultsModel {
    id: number | null | undefined;
    repository: string
    status: string
    queue_at: string
    scanning_at: string | null | undefined;
    finished_at: string | null | undefined;
    findings: any
}

const Results = sequelize.define<Model<ResultsModel>>("results", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    repository: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        defaultValue: 'QUEUED', // "QUEUED" | "IN_PROGRESS" | "SUCCESS" | "FAILURE"
        allowNull: false,
    },
    queue_at: {
        type: 'TIMESTAMP',
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: true,
    },
    scanning_at: {
        type: 'TIMESTAMP',
        allowNull: true,
    },
    finished_at: {
        type: 'TIMESTAMP',
        allowNull: true,
    },
    findings: {
        type: DataTypes.JSONB,
        allowNull: true,
    },
}, {
    updatedAt: 'updated_at',
    createdAt: 'created_at',
    tableName: 'results',
    indexes: [
        {
            unique: true,
            fields: ['id']
        },
    ]
});

export default Results;
