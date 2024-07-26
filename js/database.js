require('dotenv').config()
const mysql = require('mysql2')


const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    // port: 3306,
    user: process.env.DB_USERNAME,
    password:process.env.DATABASE_SIFRE,
    database: process.env.DB_DBNAME
  });
  
  db.connect((err) => {
    if (err) {
      throw err;
    }
    console.log('MySQL bağlantısı başarıyla gerçekleştirildi.');
  });
    module.exports = db;

