import Sequelize from 'sequelize';
import { database } from '../database';
import SubCategory from './SubCategory'

const Category = database.define('categories', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
        type: Sequelize.TEXT
    }
},{
    timestamps: false,
    underscored: true
});

Category.hasMany(SubCategory, { 
    foreignKey: 'cat_id', 
    sourceKey: 'id' 
});

SubCategory.belongsTo(Category, { 
    foreignKey: 'cat_id', 
    sourceKey: 'id'
});

export default Category;