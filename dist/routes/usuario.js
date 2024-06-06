"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuarios_1 = require("../controllers/usuarios");
const ruta = (0, express_1.Router)();
ruta.get('/usuarios', usuarios_1.getUsuarios);
ruta.post('/newUsr', usuarios_1.newUsuario);
ruta.post('/login', usuarios_1.logginUsr);
exports.default = ruta;
