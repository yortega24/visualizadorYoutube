import {Request,Response} from 'express'
import bcrypt from 'bcrypt'
import usuarios from '../models/usuariosM';
export const newUsuario= async(req:Request,resp:Response)=>{
   
    const {body} =req;
    const {nombreUsr,psw} =req.body;

   
    const pswencriptada=  await bcrypt.hash(psw,10);

    //validar existenmcia de ususario
    const usuario = await usuarios.findOne({where:{ nombreUsr:nombreUsr}})

    if (usuario) {
        return resp.status(400).json({//return para que deje de ejecutarse
            msg:'Ya existe el usuarioc '+nombreUsr,
        })
    } 

    try {
        //inserta a bd
        await usuarios.create(
            {
                nombreUsr:nombreUsr,
                apellidoUsr:apellidoUsr,
                psw:pswencriptada,
                email
            }
        )

        resp.json({
            msg: 'Se agrego un nuevo usuario',
            //body: body,
        })
    } catch (error) {
        resp.status(400).json({
            msg:'Error al dar de alta usuario',
            error
        })
    }
    
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