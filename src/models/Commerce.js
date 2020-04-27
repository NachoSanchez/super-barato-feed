import Sequelize from 'sequelize';
import { database } from '../database';

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
    type: { type: Sequelize.INTEGER },
    brand: { type: Sequelize.TEXT },
    city: { type: Sequelize.TEXT }
},{
    timestamps: false
});

export default Commerce;