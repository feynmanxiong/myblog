const path = require('path')
const express = require('express')
const app = express()
const mysql = require('mysql')

let db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '123456',
  port: 3306,
  database: 'myblog'
})

db.query(`INSERT INTO test (id, name) VALUES (1, "blog")`,
  (err, data) => {
    if (err) {
      console.log('database error')
    } else {
      console.log('success')
    }
  }
)

app.get('/api/getArticle', (req, res, next) => {
  res.json({
    data: '后台返回的结果 getArticle'
  })
})

app.listen(3000)
console.log('success listen at port: 3000 .....')
