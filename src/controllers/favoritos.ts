import { Request,Response } from "express"
import favoritos from "../models/favoritoM"

export const getFavoritos= async (req: Request, resp:Response)=>{
    
    const listaFavoritos  = await favoritos.findAll();

    resp.json({
        listaFavoritos
    })

}