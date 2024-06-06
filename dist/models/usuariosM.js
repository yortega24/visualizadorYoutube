"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const coneccion_1 = __importDefault(require("../database/coneccion"));
const usuarios = coneccion_1.default.define('Usuario', {
    idUsr: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombreUsr: {
        type: sequelize_1.DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    /*:{
        type: DataTypes.STRING,
        allowNull:false,
    },
    email:{
        type: DataTypes.STRING
    },*/
    psw: {
        type: sequelize_1.DataTypes.STRING
    }
});
exports.default = usuarios;
