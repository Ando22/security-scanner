'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add altering commands here.
         *
         * Example:
         * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
         */
        return queryInterface.createTable(
            'results',
            {
                id: {
                    type: Sequelize.DataTypes.INTEGER,
                    allowNull: false,
                    primaryKey: true,
                    autoIncrement: true,
                },
                repository: {
                    type: Sequelize.DataTypes.STRING,
                    allowNull: false,
                },
                status: {
                    type: Sequelize.DataTypes.STRING,
                    defaultValue: 'QUEUED',
                    allowNull: false,
                },
                findings: {
                    type: Sequelize.DataTypes.JSONB,
                    allowNull: true,
                },
                queue_at: {
                    type: 'TIMESTAMP',
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
                created_at: {
                    type: 'TIMESTAMP',
                    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
                    allowNull: false,
                },
                updated_at: {
                    type: 'TIMESTAMP',
                    allowNull: true,
                },
            },
            {
                timestamps: true,
                indexes: [
                    {
                        unique: true,
                        fields: ['id'],
                    },
                ],
            }
        );
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add reverting commands here.
         *
         * Example:
         * await queryInterface.dropTable('users');
         */
        return queryInterface.dropTable('results');
    },
};
