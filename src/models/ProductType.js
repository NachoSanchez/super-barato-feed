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

ProductType.hasMany(Product);
Product.belongsTo(ProductType);

export default ProductType;