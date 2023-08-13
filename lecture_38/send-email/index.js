const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  auth: {
    user: "anujgargcse@gmail.com",
    pass: "8I2TJpVwEGva4nCk",
  },
});

const mailOptions = {
  from: "anujgargcse@gmail.com",
  to: "anujgargcse@gmail.com",
  subject: "Sending Image",
  text: "That was easy!",
  attachments: [
    {
      filename: "thor.jpeg",
      path: __dirname + "/thor.jpeg",
    },
  ],
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
