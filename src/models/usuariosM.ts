import { DataTypes } from "sequelize";
import sequelize from "../database/coneccion";

const usuarios=sequelize.define('usuario',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    nombreUsr:{
        type: DataTypes.STRING,
    },
    apellidoUsr:{
        type: DataTypes.STRING
    },
    
})