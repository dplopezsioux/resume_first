const express = require("express");
const bodyParser = require("body-parser");
const dataTest = require("./loadskill");
const app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("pages/index");
});

app.get("/api", (req, res) => {
  res.status(200).json({ mens: "Welcome to my rest API" });
});

//load data
require("./loadskill");
const data = dataTest;
//sent to api/skill
app.get("/api/skill", (req, res) => {
  res.status(200).json(data);
});

//localhost 3000
app.listen(3000);
