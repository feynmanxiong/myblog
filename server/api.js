const mysql = require('mysql')
const dbConfig = require('./db')
const sqlMap = require('./sqlMap')

const pool = mysql.createPool({
  host: dbConfig.mysql.host,
  user: dbConfig.mysql.user,
  password: dbConfig.mysql.password,
  database: dbConfig.mysql.database,
  port: dbConfig.mysql.port,
  multipleStatements: true
})

pool.query(`INSERT INTO test (id, name) VALUES (1, "blog")`,
  (err, data) => {
    if (err) {
      console.log('database error')
    } else {
      console.log('success')
    }
  }
)
