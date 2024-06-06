import {Request,Response} from 'express'

export const newUsuario=(req:Request,resp:Response)=>{
   
    const {body} =req;

    resp.json({
        msg: 'Se agrego un nuevo usuari',
        body: body,
    })
}
export const getUsuarios=(req: Request, resp:Response)=>{
    
    
    resp.json({
        msg:'holaaa prueba de getusuarios', 
        
    })

}
export const logginUsr=(req:Request,resp:Response)=>{
    console.log(req.body);

    resp.json({
        msg: 'Login user'
    })
}