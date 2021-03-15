const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send({
    success: "true",
    message: "Welcome the send email API - Thiago Negreiros",
    version: "1.0.0",
  });
});

// router.get("/", async (request, response) => {
//   //http://10.58.64.185:8081/workshop/webservice.php?funcao=CDQCUUID::getMacUuidCompal&dados[s]=s
//   let mac_uuid_lenovo = await getJSON(
//     "http://10.58.64.185:8081/workshop/webservice.php?funcao=CDQCUUID::getMacUuidLenovo&dados[s]=s"
//   );

//   // let mac_uuid_compal = await getJSON(
//   //   "http://10.58.64.185:8081/workshop/webservice.php?funcao=CDQCUUID::getMacUuidCompal&dados[s]=s"
//   // );

//   // let new_rule_liteon = await getJSON(
//   //   "http://10.58.64.185:8081/workshop/webservice.php?funcao=CDQC311SS_WWN_TEMP::NewFreeEmail&dados[s]=s"
//   // );

//   // let old_rule_liteon = await getJSON(
//   //   "http://10.58.64.185:8081/workshop/webservice.php?funcao=CDQC311SS_WWN_TEMP::freeEmail&dados[s]=s"
//   // );

//   const options = {
//     value: {
//       mac_uuid_lenovo,
//     },
//     to: `thiago_vieira@cal-comp.com.br`,
//     subject: `teste`,
//     text: `teste`,
//   };

//   const pathFile = path.join(__dirname, "./templates/mac_sagemcon.ejs");
//   ejs.renderFile(pathFile, { options }, (err, html) => {
//     return response.send(html);
//   });
// });

module.exports = router;
