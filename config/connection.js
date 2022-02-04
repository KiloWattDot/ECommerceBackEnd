require('dotenv').config();
const Sequelize = require('sequelize');

// let sequelize;
// const URI = process.env.MYSQL_URL || process.env.JAWSDB_URL || 'mysql://root:dorothy@localhost:3306/ecommerce_db';

// sequelize = new Sequelize(URI)

const sequelize = new Sequelize(
    // Database name
    'ecommerce_db',
    // User
    'root',
    // Password
    'dorothy',
    {
      // Database location
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
  );


// const sequelize = 
//     new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
//       host: 'localhost',
//       dialect: 'mysql',
//       dialectOptions: {
//         decimalNumbers: true,
//       },
//     });





module.exports = sequelize;
