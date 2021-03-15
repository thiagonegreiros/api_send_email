const router = require("express-promise-router")();
const sendEmail = require("../lib/send_email");
const path = require("path");
const ejs = require("ejs");
const bent = require("bent");
const getJSON = bent("json");

router.post("/all_range_seriais", async (req, res) => {
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
    return sendEmail(html, options);
  });
});

module.exports = router;
