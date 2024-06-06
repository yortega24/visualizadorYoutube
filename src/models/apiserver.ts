//import express from 'express';
import express,{Application} from 'express';
import newUsuario from '../routes/usuario';
import getfavorito from '../routes/favorito';
import { Sequelize } from 'sequelize';
import Usuario from './usuariosM';
import Favorito from './favoritoM';
import sequelize from '../database/coneccion';
import { getFavoritos } from '../controllers/favoritos';

class Apiserver{
    //private app:express.Application;
    private app: Application;
    private puerto: string;

    constructor(){
        this.app= express();
        this.puerto= process.env.PORT || '3001';
        this.listen();

        this.midleware();
        this.routes();

        this.dbConexion();

        //console.log(process.env.PORT);
    }


    listen(){
        this.app.listen(this.puerto,()=>{
            console.log('appp corriendo en puerto')
        })
    }
    routes(){
        this.app.use('/api/usuarios',newUsuario);
        this.app.use('/api/favoritos',getfavorito);
        
    }
    midleware(){
        this.app.use(express.json())
    }

    //testeo deconeccion
    async dbConexion(){
        try {
            await Usuario.sync();//crea tabla usuario
            await Favorito.sync();//crea tabla usuario
            //await sequelize.authenticate();
            //console.log('conexion exitosa')
             
        } catch (error) {
            console.log('Conexión perdida')
        }
        
    }
}

export default Apiserver;