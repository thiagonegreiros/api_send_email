const router = require("express-promise-router")();
const sendEmail = require("../lib/send_email");
const path = require("path");
const ejs = require("ejs");
const bent = require("bent");
const getJSON = bent("json");

router.post("/email_mac_sagemcom", async (req, res) => {
  var mac_uuid_lenovo = await getJSON(
    "http://10.58.64.185:8081/workshop/webservice.php?funcao=CDQCUUID::getMacUuidLenovo&dados[s]=s"
  );

  const options = {
    value: {
      mac_uuid_lenovo,
    },
    to: `thiago_vieira@cal-comp.com.br`,
    subject: `teste`,
    text: `teste`,
  };

  const pathFile = path.join(__dirname, "../templates/F1/mac_sagemcon.ejs");
  ejs.renderFile(pathFile, { options }, async (err, html) => {
    return await sendEmail(html, options);
  });
});

module.exports = router;
