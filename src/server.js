const express = require("express");
const app = express();
const path = require("path");
const ejs = require("ejs");
const sendEmail = require("./mail/send_email");
const bent = require("bent");
const getJSON = bent("json");

const dotenv = require("dotenv");
dotenv.config();

const port = process.env.PORT || 3333;

app.get("/", async (request, response) => {
  //http://10.58.64.185:8081/workshop/webservice.php?funcao=CDQCUUID::getMacUuidCompal&dados[s]=s
  let mac_uuid_lenovo = await getJSON(
    "http://10.58.64.185:8081/workshop/webservice.php?funcao=CDQCUUID::getMacUuidLenovo&dados[s]=s"
  );

  let mac_uuid_compal = await getJSON(
    "http://10.58.64.185:8081/workshop/webservice.php?funcao=CDQCUUID::getMacUuidCompal&dados[s]=s"
  );

  let new_rule_liteon = await getJSON(
    "http://10.58.64.185:8081/workshop/webservice.php?funcao=CDQC311SS_WWN_TEMP::NewFreeEmail&dados[s]=s"
  );

  let old_rule_liteon = await getJSON(
    "http://10.58.64.185:8081/workshop/webservice.php?funcao=CDQC311SS_WWN_TEMP::freeEmail&dados[s]=s"
  );

  const options = {
    value: {
      mac_uuid_lenovo,
      mac_uuid_compal,
      new_rule_liteon,
      old_rule_liteon,
    },
    to: `thiago_vieira@cal-comp.com.br`,
    subject: `teste`,
    text: `teste`,
  };

  const pathFile = path.join(
    __dirname,
    "./templates/all_ranges_workshop_f1.ejs"
  );
  ejs.renderFile(pathFile, { options }, (err, html) => {
    console.log(mac_uuid_compal);
    return response.send(html);
  });
});

app.post("/all_range_seriais", (req, res) => {
  const options = {
    value: 30000,
    to: `thiago_vieira@cal-comp.com.br`,
    subject: `teste`,
    text: `teste`,
  };

  const pathFile = path.join(
    __dirname,
    "./templates/all_ranges_workshop_f1.ejs"
  );
  ejs.renderFile(pathFile, { options }, (err, html) => {
    return sendEmail(html, options);
  });
});

app.listen(port, (req, res) => {
  console.log(`Funfando na porta ${port}`);
});
