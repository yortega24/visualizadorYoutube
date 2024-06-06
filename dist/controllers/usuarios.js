"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logginUsr = exports.getUsuarios = exports.newUsuario = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const usuariosM_1 = __importDefault(require("../models/usuariosM"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const newUsuario = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { nombreUsr, psw } = req.body;
    const pswencriptada = yield bcrypt_1.default.hash(psw, 10);
    //validar existenmcia de ususario
    const usuario = yield usuariosM_1.default.findOne({ where: { nombreUsr: nombreUsr } });
    if (usuario) {
        return resp.status(400).json({
            msg: 'Ya existe el usuarioc ' + nombreUsr,
        });
    }
    try {
        //inserta a bd
        yield usuariosM_1.default.create({
            nombreUsr: nombreUsr,
            psw: pswencriptada,
        });
        resp.json({
            msg: 'Se agrego un nuevo usuario',
            //body: body,
        });
    }
    catch (error) {
        resp.status(400).json({
            msg: 'Error al dar de alta usuario',
            error
        });
    }
});
exports.newUsuario = newUsuario;
const getUsuarios = (req, resp) => {
    resp.json({
        msg: 'holaaa prueba de getusuarios',
    });
};
exports.getUsuarios = getUsuarios;
const logginUsr = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    //validar existencia d eusuario
    const { nombreUsr, psw } = req.body;
    const usuario = yield usuariosM_1.default.findOne({ where: { nombreUsr: nombreUsr } });
    if (!usuario) {
        return resp.status(400).json({
            msg: ' No existe el usuario  ' + nombreUsr,
        });
    }
    //validar psw del usuario 
    const pswvalidada = yield bcrypt_1.default.compare(psw, usuario.psw);
    if (!pswvalidada) {
        return resp.status(400).json({
            msg: "Contraseña incorrecta"
        });
    }
    //Generar token
    const token = jsonwebtoken_1.default.sign({
        //regresar a usuario
        newUsuario: nombreUsr
    }, 
    //palabra secreta
    process.env.SECRET_KEY || 'Parangari', //expira token en 3 min
    { expiresIn: '180000' });
    resp.json({
        token
    });
});
exports.logginUsr = logginUsr;
