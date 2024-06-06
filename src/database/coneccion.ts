import { Sequelize } from "sequelize";
//import { MsSqlDialect } from 'sequelize/mssql';
//Sequelize(uri: string, options?: Options | undefined): Sequelize

var sequelize = new Sequelize('Vistas','hola','hola2',{
    dialect: 'mssql',
    host:'YESSENIAORTEGA',
    port: 1433,
    
  });

export default sequelize;