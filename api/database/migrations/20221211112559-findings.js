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
            'findings',
            {
                id: {
                    type: Sequelize.DataTypes.INTEGER,
                    allowNull: false,
                    primaryKey: true,
                    autoIncrement: true,
                },
                result_id: {
                    type: Sequelize.DataTypes.INTEGER,
                    allowNull: false,
                },
                type: {
                    type: Sequelize.DataTypes.STRING,
                    allowNull: false,
                },
                rule_id: {
                    type: Sequelize.DataTypes.STRING,
                    allowNull: false,
                },
                location: {
                    type: Sequelize.DataTypes.TEXT,
                    allowNull: false,
                },
                description: {
                    type: Sequelize.DataTypes.STRING,
                    allowNull: false,
                },
                severity: {
                    type: Sequelize.DataTypes.STRING,
                    allowNull: false,
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
        return queryInterface.dropTable('findings');
    },
};
