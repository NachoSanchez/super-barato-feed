import Sequelize from 'sequelize';
import { database } from '../database';
import Product from './Product';


const ProductType = database.define('product_types', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
        type: Sequelize.TEXT
    },
    subcat_id: {
        type: Sequelize.INTEGER
    }
},{
    timestamps: false,
    underscored: true
});

ProductType.hasMany(Product, { 
    foreignKey: 'product_type_id', 
    sourceKey: 'id' 
});

Product.belongsTo(ProductType, { 
    foreignKey: 'product_type_id', 
    sourceKey: 'id' 
});

export default ProductType;