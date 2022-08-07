const router = require("express").Router();
const mysql = require("mysql");
// const bodyParser = require("body-parser");
require("dotenv").config();

// router.use(bodyParser.urlencoded({ extended: true }));

// MySql連携
const connection = mysql.createConnection({
  host: process.env.MYSQLHOST,
  user: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  database: process.env.MYSQLDATABASE,
});

// 全てのユーザー取得
router.get("/", (req, res) => {
  const sql = "select * from users";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    res.send(result);
  });
});

// ユーザー登録
router.post("/create", (req, res) => {
  const sql = "insert into users (name) values (?)";
  connection.query(sql, [req.body.name], (err, result) => {
    if (err) console.log(err);
    const id = result.inserttId;
    // return res.json(id);
    return console.log(req.body);
  });
});

module.exports = router;
