import {Request,Response} from 'express'
import bcrypt from 'bcrypt';
import usuarios from '../models/usuariosM';
import jwt from 'jsonwebtoken';
import { Token } from 'tedious/lib/token/token';

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
                psw:pswencriptada,
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
export const logginUsr= async( req:Request,resp:Response)=>{
    
    //validar existencia d eusuario
    const {nombreUsr,psw} =req.body;
    const usuario:any = await usuarios.findOne({where:{ nombreUsr:nombreUsr}})

    if (!usuario) {
        return resp.status(400).json({//return para que deje de ejecutarse
            msg:' No existe el usuario  '+nombreUsr,
        })
    } 
    
    //validar psw del usuario 
    const pswvalidada= await bcrypt.compare(psw,usuario.psw)
    if (!pswvalidada) {
        return resp.status(400).json({
            msg:"Contraseña incorrecta"
        })
    } 

    //Generar token
    const token= jwt.sign({
        //regresar a usuario
        newUsuario:nombreUsr
    },
    //palabra secreta
    process.env.SECRET_KEY || 'Parangari'
    ,//expira token en 3 min
    {expiresIn:'180000'}
)

    resp.json({
        token
    })
}