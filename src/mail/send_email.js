const nodemailer = require("nodemailer");

async function sendEmail(html, options) {
  let transporter = nodemailer.createTransport({
    host: "mailbm.cal-comp.com.br",
    port: 25,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  await transporter
    .sendMail({
      from: '"Cal-comp" noreply@cal-comp.com.br',
      to: `${options.to}`,
      subject: `${options.subject}`,
      text: `${options.text}`,
      html: html,
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

module.exports = sendEmail;
