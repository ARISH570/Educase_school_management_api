const mysql = require('mysql2');

let db;

if (process.env.MYSQL_PUBLIC_URL) {
  // 🚀 Production (Render + Railway)
  db = mysql.createPool({
    uri: process.env.MYSQL_PUBLIC_URL,
    ssl: {
      rejectUnauthorized: false
    }
  });
} else {
  // 💻 Local development
  db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT || 3306
  });
}

module.exports = db.promise();