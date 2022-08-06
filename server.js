const express = require("express");
const app = express();
const PORT = 8000;
const userRoute = require("./routes/users");
// const cors = require("cors");
const bodyParser = require("body-parser");

// app.use(cors());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  const test = {
    name: "aiueo",
    age: 30,
  };
  res.send(test);
});

// app.use(express.json());

app.use("/api/users", userRoute);

app.listen(PORT, () => console.log("サバー起動"));
