import Sequelize from 'sequelize';
import { database } from '../database';
import ProductType from './ProductType';

const SubCategory = database.define('sub_categories', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
        type: Sequelize.TEXT
    },
    cat_id: {
        type: Sequelize.INTEGER
    }
},{
    timestamps: false,
    underscored: true
});

SubCategory.hasMany(ProductType, { 
    foreignKey: 'subcat_id', 
    sourceKey: 'id'
});

ProductType.belongsTo(SubCategory, { 
    foreignKey: 'subcat_id', 
    sourceKey: 'id' 
});

export default SubCategory;