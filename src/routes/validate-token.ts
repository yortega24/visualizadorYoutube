import {Request,Response,NextFunction} from 'express'
import jwt from 'jsonwebtoken'
import { json } from 'sequelize';

const validateToken= ( req:Request, res:Response, next:NextFunction) => {
    
    const header=req.headers['authorization']
    

    if (header != undefined
        //validar que no use otro tipo de token
        && header.startsWith('Bearer ')
     ) {
        try {
            const bearerTk=header.slice(7);
            jwt.verify(bearerTk,process.env.SECRET_KEY || 'parangari');

            next();

        } catch (error) {
            res.status(401).json({
                msg: 'Token inválido'
            })
        }
        
    } else {
        res.status(401).json({
            msg:'Acceso denegado'
        })
    }
}

export default validateToken;