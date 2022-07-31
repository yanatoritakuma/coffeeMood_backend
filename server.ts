const express = require("express");
const mysql = require("mysql");
const app = express();
const PORT = 8000;
require("dotenv").config();

const connection = mysql.createConnection({
  host: process.env.MYSQLHOST,
  user: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  database: process.env.MYSQLDATABASE,
});

connection.connect(function (err: any) {
  if (err) throw err;
  console.log("Connected");
});

// app.use(express.json());

app.get("/", (req: any, res: any) => {
  const test = {
    name: "aiueo",
    age: 30,
  };
  res.send(test);
});

app.get("/users", (request: any, response: any) => {
  const sql = "select * from users";
  connection.query(sql, function (err: any, result: any) {
    if (err) throw err;
    response.send(result);
  });
});

app.listen(PORT, () => console.log("サバー起動"));
