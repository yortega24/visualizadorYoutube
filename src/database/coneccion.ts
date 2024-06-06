import { Sequelize } from "sequelize";
//Sequelize(uri: string, options?: Options | undefined): Sequelize

const sequelize =new Sequelize('prueba','YORTEGA','hola2',{
    host: 'localhost',
    dialect:'mssql',
});

export default sequelize;