import { Sequelize } from "sequelize";
const db = new Sequelize('mern_db', 'ubuntu', 'sdf06', {
   host: "localhost",
   dialect: "mysql"
});
export default db;
