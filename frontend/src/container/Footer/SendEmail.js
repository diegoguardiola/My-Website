const nodemailer = require('nodemailer');

async function sendEmail(name, message, subject) {
  // create transporter using SMTP transport
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'your_email@gmail.com',
      pass: 'your_password',
    },
  });

  // send email
  let info = await transporter.sendMail({
    from: 'your_email@gmail.com',
    to: 'diegoguardiola01@gmail.com',
    subject: subject,
    html: `<p>${name} says:</p><p>${message}</p>`,
  });

  console.log(`Message sent: ${info.messageId}`);
}
