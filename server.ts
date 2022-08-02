const express = require("express");
const app = express();
const PORT = 8000;
const userRoute = require("./routes/users");

app.get("/", (req: any, res: any) => {
  const test = {
    name: "aiueo",
    age: 30,
  };
  res.send(test);
});

app.use("/api/users", userRoute);

app.listen(PORT, () => console.log("サバー起動"));
