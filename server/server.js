const { json } = require("body-parser");
const express = require("express");
const dataTest = require("./loadskill");
const app = express();
//
//

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//
//

app.use(express.static("public"));
app.set("view engine", "ejs");
//
//
//
//
//

app.get("/", function (req, res) {
  res.render("pages/index");
});
//
//
//
//
//

const sendEmail = (email, mens) => {
  return "OK";
};

app.get("/contact", (req, res) => {
  console.log(req.query.email);
  console.log(req.query.mens);

  let email = req.query.email;
  let mens = req.query.mens;

  let response = sendEmail(email, mens);

  res.send(response);

  res.end();
});

//
//
//
//
//

app.get("/api", (req, res) => {
  res.status(200).json({ mens: "Welcome to my rest API" });
});

//
//
//
//
//load data
require("./loadskill");
const data = dataTest;
//
//
//
//
//sent to api/skill
app.get("/api/skill", (req, res) => {
  return res.send(data);
});
//
//
//
//
//
//
//
//
//
//localhost 3000
app.get("/api/contact", (req, res) => {
  let values = req.body;
  console.log(values);
});

app.listen(3000);
