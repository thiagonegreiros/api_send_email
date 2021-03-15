const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

const port = process.env.PORT || 3333;

//* API routes
const index = require("./app/routes/index");
const emailf1 = require("./app/routes/emailf1.routes");
const emailf2 = require("./app/routes/emailf2.routes");

app.use(index);
app.use("/", emailf1);
app.use("/", emailf2);

app.listen(port, (req, res) => {
  console.log(`Funfando na porta ${port}`);
});
