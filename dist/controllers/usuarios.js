"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logginUsr = exports.getUsuarios = exports.newUsuario = void 0;
const newUsuario = (req, resp) => {
    const { body } = req;
    resp.json({
        msg: 'Se agrego un nuevo usuari',
        body: body,
    });
};
exports.newUsuario = newUsuario;
const getUsuarios = (req, resp) => {
    resp.json({
        msg: 'holaaa prueba de getusuarios',
    });
};
exports.getUsuarios = getUsuarios;
const logginUsr = (req, resp) => {
    console.log(req.body);
    resp.json({
        msg: 'Login user'
    });
};
exports.logginUsr = logginUsr;
