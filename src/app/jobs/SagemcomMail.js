import Mail from "../lib/Mail";

export default {
  key: "SagemcomMail",
  options: {
    repeat: {
      cron: "0 0 12 1/1 *",
    },
  },

  async handle({ data }) {
    const { html, options } = data;

    await Mail.sendMail({
      from: '"Cal-comp" noreply@cal-comp.com.br',
      to: `${options.to}`,
      subject: `${options.subject}`,
      text: `${options.text}`,
      html: html,
    });
  },
};
