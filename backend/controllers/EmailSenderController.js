const nodemailer = require("nodemailer");
const SendEmail = async (req, res) => {
    const { fromAddress, FullName, PhoneNumber, EmailDescription } = req.body;
    try{
        let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com", 
        port: 465, 
        secure: true, 
        auth: {
            user: process.env.EmailAdress, // Your email address
            pass: process.env.PasswordEmailAdress, // Password (for gmail, your app password)
        },
        });
        let emailBody = `
            <div class="EmailSenderContainer">
                <h1>Contact Information</h1>
                <p><strong>Full Name:</strong> ${FullName}</p>
                <p><strong>Email:</strong> ${fromAddress}</p>
                <p><strong>Phone Number:</strong> ${PhoneNumber}</p>
                <h2>Email Description:</h2>
                <p>${EmailDescription}</p>
            </div>
        `;
        let info = await transporter.sendMail({
        from: process.env.EmailAdress, // Sender address
        to: process.env.Main_EmailAdress, // List of recipients
        subject: "Stream website contact",
        html: emailBody,
        });
        console.log(info.messageId);
        res.status(200).json({message: "Email sent successfully"});
    }catch(err){
        console.log(err);
    }
    
}
module.exports = {
    SendEmail
}