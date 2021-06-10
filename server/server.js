"use strict";
const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");

//
//
//Config global vari and json urlencoded
//
//
app.set("port", process.env.Port || 3000);
app.set("emailUser", process.env.emailUser || "email@adress");
app.set("emailPass", process.env.emailPass || "single-password-aplication");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
//
//
//
//config html and public folder
//
//
//
app.use(express.static("public"));
app.set("view engine", "ejs");
//
//
//email config
//
//
const nodemailer = require("nodemailer");
//
//
//import Email
//
//
const htmlMes = require("./email/email");

// async..await is not allowed in global scope, must use a wrapper
async function sendEmail(email, mens) {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: app.get("emailUser"), // generated ethereal user
      pass: app.get("emailPass"), // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <dplopez.sioux@gmail.com>', // sender address
    to: `dplopez.sioux@icloud.com, ${email}`, // list of receivers
    subject: "Hi! Confiormation email", // Subject line
    //text: "Hello world?", // plain text body
    html: htmlMes(email, mens), // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

//sendEmail().catch(console.error);

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
//load data
//
//
//
const dataS = require("./skill");
//
//
//

app.get("/api/skill", (req, res) => {
  return res.send(dataS);
});

//
//
//
//
//
//
//

app.get("/api/contact", (req, res) => {
  let email = req.query.email;
  let mens = req.query.mens;
  console.log(email, mens);
  sendEmail(email, mens);
  res.end();
});

app.listen(app.get("port"), () => {
  console.log(
    `Server is runing on port: ${app.get("port")}
    )}`
  );
  console.log(app.get("emailUser"), app.get("emailUser"));
});
