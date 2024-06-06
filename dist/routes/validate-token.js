"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const validateToken = (req, res, next) => {
    const header = req.headers['authorization'];
    if (header != undefined
        //validar que no use otro tipo de token
        && header.startsWith('Bearer ')) {
        try {
            const bearerTk = header.slice(7);
            jsonwebtoken_1.default.verify(bearerTk, process.env.SECRET_KEY || 'parangari');
            next();
        }
        catch (error) {
            res.status(401).json({
                msg: 'Token inválido'
            });
        }
    }
    else {
        res.status(401).json({
            msg: 'Acceso denegado'
        });
    }
};
exports.default = validateToken;
