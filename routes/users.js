const router = require("express").Router();
const mysql = require("mysql");
require("dotenv").config();

// MySql連携
const connection = mysql.createConnection({
  host: process.env.MYSQLHOST,
  user: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  database: process.env.MYSQLDATABASE,
});

// connection.connect(function (err: any) {
//   if (err) throw err;
//   console.log("Connected");
// });

// 全てのユーザー取得
router.get("/", (request, response) => {
  const sql = "select * from users";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    response.send(result);
  });
});

// ユーザー登録
router.post("/register", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const ps = req.body.ps;
  const profileimg = req.body.profileimg;
  const isAdmin = req.body.isAdmin;
  const likes = req.body.likes;

  // const name = "user2";
  // const email = "user2@gmail.com";
  // const ps = "userPS2";
  // const profileimg = "user2.jpeg";
  // const isAdmin = false;
  // const likes = null;

  connection.query(
    "INSERT INTO users (name, email, ps, profileimg, isAdmin, likes) VALUES (?,?,?,?,?,?)",
    [name, email, ps, profileimg, isAdmin, likes],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        return res.send("Values Inserted");
      }
    }
  );
});

module.exports = router;
