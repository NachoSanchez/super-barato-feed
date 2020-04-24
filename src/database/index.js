import Sequelize from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const DB_PASS = process.env.DB_PASS || 'root';
const DB_PORT = process.env.DB_PORT || '5432';
const DB_DIALECT = process.env.DB_DIALECT || 'mssql';
const DB_HOST = process.env.DB_HOST || 'mssql';

export const database = new Sequelize(
    DB_DIALECT,
    DB_DIALECT,
    DB_PASS,
    {
        host: DB_HOST,
        port: DB_PORT,
        dialect: DB_DIALECT,
        pool:{
            max: 5,
            min: 0,
            require: 30000,
            idle: 10000
        },
        logging: false
    }
);
