const express = require("express");
const app = express();
const path = require("path");
const ejs = require("ejs");
const sendEmail = require("./mail/send_email");

const dotenv = require("dotenv");
dotenv.config();

const port = process.env.PORT || 3333;

app.get("/", (request, response) => {
  const pathFile = path.join(__dirname, "./templates/mac_sagemcon.ejs");
  ejs.renderFile(pathFile, (err, html) => {
    return response.send(html);
  });
});

app.post("/email", (req, res) => {
  const options = {
    value: 30000,
    to: `thiago_vieira@cal-comp.com.br, carlos_silva@cal-comp.com.br`,
    subject: `teste`,
    text: `teste`,
  };

  const pathFile = path.join(__dirname, "./templates/mac_sagemcon.ejs");
  ejs.renderFile(pathFile, { options }, (err, html) => {
    return sendEmail(html, options);
  });
});

app.listen(port, (req, res) => {
  console.log(`Funfando na porta ${port}`);
});
