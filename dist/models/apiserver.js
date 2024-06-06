"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//import express from 'express';
const express_1 = __importDefault(require("express"));
const usuario_1 = __importDefault(require("../routes/usuario"));
class Apiserver {
    constructor() {
        this.app = (0, express_1.default)();
        this.puerto = process.env.PORT || '3001';
        this.listen();
        this.midleware();
        this.routes();
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
}
exports.default = Apiserver;
