import { Router } from "express";
import { getUsuarios, logginUsr, newUsuario } from "../controllers/usuarios";

const ruta= Router();

ruta.get('/usuarios',getUsuarios);
ruta.post('/newUsr',newUsuario);
ruta.post('/login',logginUsr);

export default ruta;