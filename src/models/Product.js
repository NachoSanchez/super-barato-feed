import Sequelize from 'sequelize';
import { database } from '../database';

const Product = database.define('products', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    presentation: {
        type: Sequelize.TEXT
    },
    brand: {
        type: Sequelize.TEXT
    },
    precios_cuidados: {
        type: Sequelize.BOOLEAN
    },
    oferta_temporal: {
        type: Sequelize.BOOLEAN
    },
    product_type_id: {
        type: Sequelize.INTEGER
    }

},{
    timestamps: false,
    underscored: true
});

export default Product;