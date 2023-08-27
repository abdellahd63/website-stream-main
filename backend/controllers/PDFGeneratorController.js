const pdf = require('html-pdf');
const pdfTemplate = require('../documents');
const { v4: uuidv4 } = require('uuid');
const path = require('path');

const PDFGenerator = async (req, res) => {
    try {
        const uniqueFilename = `${uuidv4()}.pdf`;
        const filePath = path.join(__dirname, uniqueFilename); // Use the correct path
        pdf.create(pdfTemplate(req.body), {}).toFile(filePath, (err) => {
            if (err) {
                console.log(err);
                res.status(500).send("Error generating PDF");
            } else {
                res.status(200).send(uniqueFilename); // Send the unique filename back to the client
            }
        });
    } catch (err) {
        console.log(err);
        res.status(500).send("Error generating PDF");
    }
};

const PDFSender = async (req, res) => {
    try {
        const filename = req.query.filename;
        if (!filename) {
            return res.status(400).send("Filename parameter missing");
        }

        const filePath = path.join(__dirname, filename); // Use the correct path
        res.sendFile(filePath);
    } catch (err) {
        console.log(err);
        res.status(500).send("Error sending PDF");
    }
};
module.exports = {
    PDFGenerator,
    PDFSender
}