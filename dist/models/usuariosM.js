"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const coneccion_1 = __importDefault(require("../database/coneccion"));
const usuarios = coneccion_1.default.define('usuario', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombreUsr: {
        type: sequelize_1.DataTypes.STRING,
    },
    apellidoUsr: {
        type: sequelize_1.DataTypes.STRING
    },
});
