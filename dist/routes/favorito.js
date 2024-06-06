"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const favoritos_1 = require("../controllers/favoritos");
const validate_token_1 = __importDefault(require("./validate-token"));
const ruta = (0, express_1.Router)();
//recibe token para validar usuario
ruta.get('/favoritos', validate_token_1.default, favoritos_1.getFavoritos);
exports.default = ruta;
