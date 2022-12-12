import sequelize from "database/sequelize";
import { DataTypes, Model } from "sequelize";
import Results from "./Results";

export interface FindingsModel {
    id: number
    result_id: number
    type: string
    rule_id: string
    location: string
    description: string
    severity: string
}

const Findings = sequelize.define<Model<FindingsModel>>("findings", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    result_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Results,
            key: 'id',
        },
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    rule_id: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    location: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    severity: {
        type: DataTypes.STRING,
        allowNull: false,
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

Findings.belongsTo(Results)

export default Findings;
