import Mail from "../lib/Mail";

export default {
  key: "SagemcomMail",
  options: { repeat: { cron: "* * * * *" } },

  async handle({ data }) {
    const { html, options } = data;

    console.log("SagemcomMail");

    await Mail.sendMail({
      from: '"Cal-comp" noreply@cal-comp.com.br',
      to: `${options.to}`,
      subject: `${options.subject}`,
      text: `${options.text}`,
      html: html,
    });
  },
};
