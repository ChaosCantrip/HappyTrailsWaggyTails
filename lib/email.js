import nodemailer from "nodemailer"

const smtp_config = {
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: true,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
    }
}

export async function send_email(data) {
    const transporter = nodemailer.createTransport(smtp_config);
    const mailOptions = {
        from: process.env.SMTP_MAIL,
        ...data
    }
    return await transporter.sendMail(mailOptions);
}