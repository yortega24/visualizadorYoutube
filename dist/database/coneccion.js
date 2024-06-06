"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
//Sequelize(uri: string, options?: Options | undefined): Sequelize
const sequelize = new sequelize_1.Sequelize('prueba', 'YORTEGA', 'hola2', {
    host: 'localhost',
    dialect: 'mssql',
});
exports.default = sequelize;
