import Queue from "../lib/Queue";
const router = require("express-promise-router")();
const path = require("path");
const ejs = require("ejs");
const bent = require("bent");
const { json } = require("express");
const getJSON = bent("json");

router.post("/email_mac_sagemcom", async (req, res) => {
  var mac_sagemcom = await getJSON(
    "http://10.57.72.51/CCBR-CR_Workshop/webservice.php?funcao=CDQC311NONNET4T::getMacSagemcom&dados[s]=s"
  );

  const options = {
    value: {
      mac_sagemcom,
    },
    //? Email a serem enviados: sagemcom_warning@cal-comp.com.br, mis_bz,
    to: `thiago_vieira@cal-comp.com.br`,
    subject: `Sagemcom Mac avalible`,
    text: `Sagemcom Mac avalible`,
  };

  const pathFile = path.join(__dirname, "../templates/F1/mac_sagemcon.ejs");
  ejs.renderFile(pathFile, { options }, async (err, html) => {
    await Queue.add("SagemcomMail", { html, options });
  });

  return res.json({ message: "Email enviado" });
});

module.exports = router;
