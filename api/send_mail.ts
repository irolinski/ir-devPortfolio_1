import nodemailer from "nodemailer";

export const config = {
  api: {
    bodyParser: true, // enabled by default, but explicitly safe
  },
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST allowed" });
  }

  const { name, email, message } = await req.body;
  console.log(name, email, message);

  try {
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_KEY,
      },
    });

    const info = await transporter.sendMail({
      from: `"${name}" <${email}>`,
      replyTo: email,
      to: "ignacy.rolinski@gmail.com",
      subject: `A message from ${name} via website form`,
      text: message,
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.error("Mail error:", err);
    res.status(500).json({ error: "Failed to send email" });
  }
}
