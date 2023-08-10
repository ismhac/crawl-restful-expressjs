import { Categories } from './categorires';
import { DataTypes } from 'sequelize'
import { sequelize, Sequelize } from '../base'

export const CategoriesOfShop = sequelize.define(
    'tbl_categories_of_shops',
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1,
            primaryKey: true,
        },
        shop_id: {
            type: DataTypes.UUID,
            allowNull: true,
            references: {
                model: 'tbl_shops',
                key: 'id',
            },
        },
        title: {
            type: DataTypes.STRING
        },
        link: {
            type: DataTypes.STRING
        },

    },
    {
        hooks: {

        },
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        paranoid: true,
        defaultScope: {
            attributes: { exclude: ['deletedAt'] },
        },
        scopes: {
            deleted: {
                where: { deletedAt: { $ne: null } },
                paranoid: false,
            },
        },
    },
)