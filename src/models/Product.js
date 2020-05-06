import Sequelize from 'sequelize';
import { database } from '../database';
//import Price from './Price';

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

/*Product.hasMany(Price, {
    as: 'product',
    foreignKey: 'product_id',
    sourceKey: 'id'
});

Price.belongsTo(Product, {
    as: 'product',
    foreignKey: 'product_id',
    sourceKey: 'id'
});*/
 
export default Product;