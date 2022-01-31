require('dotenv').config();
const Sequelize = require('sequelize');


let sequelize;
const URI = process.env.MYSQL_URL || process.env.JAWSDB_URL || 'mysql://root:dorothy@localhost:3306/ecommerce_db';

sequelize = new Sequelize(URI)


module.exports = sequelize;
