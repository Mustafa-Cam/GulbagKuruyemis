if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const mysql = require('mysql');

const db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DATABASE_SIFRE,
  database: process.env.DB_DBNAME
});

const User = {
  findByUseremail: (email, callback) => {
    db.query('SELECT * FROM users WHERE usersemail = ?', [email], (err, results) => {
      if (err) {
        return callback(err);
      }
      if (results.length === 0) {
        return callback(null, null);
      }
      const user = results[0];
      callback(null, user);
    });
  },
  findById: (id, callback) => {
    db.query('SELECT * FROM users WHERE id = ?', [id], (err, results) => {
      if (err) {
        return callback(err);
      }
      if (results.length === 0) {
        return callback(null, null);
      }
      const user = results[0];
      callback(null, user);
    });
  }
};

module.exports = User;
