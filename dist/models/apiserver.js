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
//import express from 'express';
const express_1 = __importDefault(require("express"));
const usuario_1 = __importDefault(require("../routes/usuario"));
const usuariosM_1 = __importDefault(require("./usuariosM"));
class Apiserver {
    constructor() {
        this.app = (0, express_1.default)();
        this.puerto = process.env.PORT || '3001';
        this.listen();
        this.midleware();
        this.routes();
        this.dbConexion();
        //console.log(process.env.PORT);
    }
    listen() {
        this.app.listen(this.puerto, () => {
            console.log('appp corriendo en puerto');
        });
    }
    routes() {
        this.app.use('/api/usuarios', usuario_1.default);
    }
    midleware() {
        this.app.use(express_1.default.json());
    }
    //testeo deconeccion
    dbConexion() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield usuariosM_1.default.sync(); //crea tabla usuario
                //await sequelize.authenticate();
                //console.log('conexion exitosa')
            }
            catch (error) {
                console.log('Conexión perdida');
            }
        });
    }
}
exports.default = Apiserver;
