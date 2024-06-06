import { DataTypes } from "sequelize";
import sequelize from "../database/coneccion";

const favoritos =sequelize.define(
    'favorito',{
        idFav:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        url:{
            type: DataTypes.STRING,

        },
        idUsr:{
            type:DataTypes.INTEGER
        }
    }
)

export default favoritos;