import Sequelize from 'sequelize';
import { database } from '../database';
import Commerce from './Commerce';
import Product from './Product'

const Price = database.define('prices', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    value: { 
        type: Sequelize.FLOAT 
    },
    product_id: {
        type: Sequelize.INTEGER
    },
    commerce_id: {
        type: Sequelize.INTEGER
    },
    created_at: {
        type: Sequelize.DATE
    },
    updated_at: {
        type: Sequelize.DATE
    },
    expires_at: {
        type: Sequelize.DATE
    },
},{
    timestamps: false,
    underscored: true
});

Commerce.belongsToMany(Product, { trough: 'prices' });
Product.belongsToMany(Commerce, { trough: 'prices' });

export default Price;