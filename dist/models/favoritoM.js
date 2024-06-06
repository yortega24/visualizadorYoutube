"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const coneccion_1 = __importDefault(require("../database/coneccion"));
const favoritos = coneccion_1.default.define('favorito', {
    idFav: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    url: {
        type: sequelize_1.DataTypes.STRING,
    },
    idUsr: {
        type: sequelize_1.DataTypes.INTEGER
    }
});
exports.default = favoritos;
