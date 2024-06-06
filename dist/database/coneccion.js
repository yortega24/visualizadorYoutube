"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
//import { MsSqlDialect } from 'sequelize/mssql';
//Sequelize(uri: string, options?: Options | undefined): Sequelize
var sequelize = new sequelize_1.Sequelize('Vistas', 'hola', 'hola2', {
    dialect: 'mssql',
    host: 'YESSENIAORTEGA',
    port: 1433,
});
exports.default = sequelize;
