const express = require('express');
const multer = require('multer');
const fs = require('fs');
const { PDFDocument, rgb, degrees } = require('pdf-lib');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/watermark', upload.single('pdf'), async (req, res) => {
  try {
    // Extract user details from the request body
    const { name, email, phone, ip } = req.body;
    
    // Construct the watermark text.
    // Consider using a unique transaction ID or a short identifier instead of full details.
    const watermarkText = `Name: ${name} | Email: ${email} | Phone: ${phone} | IP: ${ip}`;
    
    // Read the uploaded PDF file from the temporary location
    const existingPdfBytes = fs.readFileSync(req.file.path);
    
    // Load the PDF with pdf-lib
    const pdfDoc = await PDFDocument.load(existingPdfBytes);
    
    // Get all pages and add watermark on each
    const pages = pdfDoc.getPages();
    pages.forEach(page => {
      const { width, height } = page.getSize();
      page.drawText(watermarkText, {
        x: 50,
        y: height / 2,
        size: 12,
        color: rgb(0.95, 0.1, 0.1),
        rotate: degrees(45),
        opacity: 0.5,
      });
    });
    
    // Save the modified PDF as bytes
    const pdfBytes = await pdfDoc.save();
    
    // Optionally, remove the temporary uploaded file
    fs.unlinkSync(req.file.path);
    
    // Set the response content type and send the watermarked PDF
    res.contentType("application/pdf");
    res.send(pdfBytes);
  } catch (error) {
    console.error("Error processing PDF:", error);
    res.status(500).send("An error occurred while processing the PDF.");
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
