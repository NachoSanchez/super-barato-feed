import Sequelize from 'sequelize';
import { database } from '../database';
import Commerce from './Commerce'

const CommerceType = database.define('commerce_types', {
    id: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    name: {
        type: Sequelize.TEXT
    }
},{
    timestamps: false,
});

CommerceType.hasMany(Commerce);
Commerce.belongsTo(CommerceType);

export default CommerceType;