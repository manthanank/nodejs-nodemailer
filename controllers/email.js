const sendEmail = require("../utils/sendEmails");

require("dotenv").config();

exports.sendEmail = async (req, res) => {
    try {
        // console.log(req.body);
        const { email, message } = req.body;

        if (!email) {
            return res.status(400).json({ message: "Email is required." });
        }

        const options = {
            to: email, // Assuming 'email' is the recipient's email address
            subject: "Test",
            message: message,
        };

        await sendEmail(options); // Ensure that the email sending is awaited

        res.status(200).json({
            message: "Check your mail!",
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};
