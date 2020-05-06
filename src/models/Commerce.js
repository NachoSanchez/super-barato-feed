import Sequelize from 'sequelize';
import { database } from '../database';
import Price from './Price';

const Commerce = database.define('commerces', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: { type: Sequelize.TEXT },
    logo: { type: Sequelize.TEXT },
    lat: { type: Sequelize.FLOAT },
    lng: { type: Sequelize.FLOAT },
    geohash: { type: Sequelize.TEXT },
    commerce_type_id: { type: Sequelize.INTEGER },
    precios_cuidados: { type: Sequelize.BOOLEAN },
    tarjeta_alimentar: { type: Sequelize.BOOLEAN }
},{
    timestamps: false,
    underscored: true
});

Commerce.hasMany(Price, {
    as: 'commerce',
    foreignKey: 'commerce_id',
    sourceKey: 'id'
});
Price.belongsTo(Commerce, {
    as: 'commerce',
    foreignKey: 'commerce_id',
    sourceKey: 'id'
});

export default Commerce;