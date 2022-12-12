import sequelize from "database/sequelize";
import { DataTypes, Model } from "sequelize";
import Findings from "./Findings";

export interface ResultsModel {
    id: number
    repository: string
    status: string
    queue_at: string
    scanning_at: string
    finished_at: string
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
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: true,
    },
    finished_at: {
        type: 'TIMESTAMP',
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
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

Results.hasMany(Findings, {
    onDelete: 'CASCADE'
})

export default Results;
