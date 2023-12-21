const nodeMailer = require("nodemailer");

const sendEmail = async (options) => {
    // console.log(options);
    const transporter = nodeMailer.createTransport({
        host: process.env.SMPT_HOST,
        port: process.env.SMPT_PORT,
        service: process.env.SMPT_SERVICE,
        auth: {
            user: process.env.SMPT_MAIL,
            pass: process.env.SMPT_APP_PASS,
        },
    });

    const mailOptions = {
        from: process.env.SMPT_MAIL,
        to: options.to,
        subject: options.subject,
        html: options.message,
    };
    // console.log(mailOptions);
    // console.log(transporter);
    await transporter.sendMail(mailOptions);
};


module.exports = sendEmail;