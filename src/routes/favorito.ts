import { Router } from "express";
import { getFavoritos } from "../controllers/favoritos";
import validateToken from "./validate-token";

const ruta= Router();
//recibe token para validar usuario
ruta.get('/favoritos',validateToken,getFavoritos);

export default ruta;