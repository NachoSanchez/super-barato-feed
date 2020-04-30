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
    underscored: true,
    timestamps: false
});


Commerce.belongsToMany(Product, {
     as: 'commerce', 
     through: 'prices', 
     foreignKey: 'commerce_id' 
});

Product.belongsToMany(Commerce, { 
    as: 'product', 
    through: 'prices', 
    foreignKey: 'product_id'
});

export default Price;