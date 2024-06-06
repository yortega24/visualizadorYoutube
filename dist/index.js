"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apiserver_1 = __importDefault(require("./models/apiserver"));
const dotenv_1 = __importDefault(require("dotenv"));
// se conf el puerto
dotenv_1.default.config();
const apiserver = new apiserver_1.default();
