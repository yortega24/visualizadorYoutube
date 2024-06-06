import { DataTypes } from "sequelize";
import sequelize from "../database/coneccion";

const usuarios=sequelize.define('Usuario',{
    idUsr:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    
    nombreUsr:{
        type: DataTypes.STRING,
        unique:true,
        allowNull:false
    },
    /*:{
        type: DataTypes.STRING,
        allowNull:false,
    },
    email:{
        type: DataTypes.STRING
    },*/
    psw:{
        type: DataTypes.STRING
    }

})
export default usuarios;