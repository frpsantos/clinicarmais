const nodemailer = require("nodemailer");

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Método não permitido" });
  }

  try {
    const { nome, email, whatsapp, mensagem } = req.body || {};

    if (!nome || !email) {
      return res.status(400).json({ ok: false, error: "Campos obrigatórios faltando" });
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.ZOHO_USER,
        pass: process.env.ZOHO_PASS,
      },
    });

    const html = `
      <h2>Novo contato - R+ | Mais Clínica</h2>
      <p><strong>Nome:</strong> ${nome}</p>
      <p><strong>E-mail:</strong> ${email}</p>
      <p><strong>WhatsApp:</strong> ${whatsapp || ""}</p>
      <p><strong>Mensagem:</strong><br/>${(mensagem || "").replace(/\n/g, "<br/>")}</p>
    `;

    const info = await transporter.sendMail({
      from: \`"Mais Clínica" <\${process.env.ZOHO_USER}>\`,
      to: "atendimento@clinicamais.com.br",
      replyTo: email,
      subject: `Novo contato - ${nome}`,
      html,
    });

    return res.status(200).json({ ok: true, id: info.messageId });
  } catch (err) {
    return res.status(500).json({ ok: false, error: err.message });
  }
};
