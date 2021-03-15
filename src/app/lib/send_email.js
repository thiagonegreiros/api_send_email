const nodemailer = require("nodemailer");

async function sendEmail(html, options) {
  let transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  let info = await transporter.sendMail({
    from: '"Cal-comp" noreply@cal-comp.com.br',
    to: `${options.to}`,
    subject: `${options.subject}`,
    text: `${options.text}`,
    html: html,
  });
}

module.exports = sendEmail;
