import nodemailer from "nodemailer"
import {promises as fs} from "fs"
import path from "path"

const smtp_config = {
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: true,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
    }
}

export async function send_email(data, from = "Happy Trails Waggy Tails") {
    const transporter = nodemailer.createTransport(smtp_config);
    const mailOptions = {
        from: {
            name: from,
            address: process.env.SMTP_MAIL
        },
        ...data
    }
    return await transporter.sendMail(mailOptions);
}

export async function format_email(template_name, replacements = {}){
    let email = await fs.readFile(path.join(process.cwd(), `/emails/${template_name}.html`), "utf-8");
    Object.keys(replacements).forEach(key => {
        email = email.replace(`{{${key}}}`, replacements[key]);
    });
    return email;
}