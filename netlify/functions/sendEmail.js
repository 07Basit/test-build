import nodemailer from "nodemailer";
 
// Netlify function handler
export async function handler(event) {
    if (event.httpMethod !== "POST") {
        return {
            statusCode: 405,
            body: JSON.stringify({ success: false, message: "Method Not Allowed" }),
        };
    }
 
    try {
        const { name, businessName, email, contact, productInterest, message } = JSON.parse(event.body);
 
        if (!name || !businessName || !email || !contact) {
            return {
                statusCode: 400,
                body: JSON.stringify({ success: false, message: "Please provide all required fields" }),
            };
        }
 
        // Initialize Nodemailer transporter
        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
            tls: {
                rejectUnauthorized: false, // Helps with some connection issues
            },
        });
 
        // Email options
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_RECEIVER,
            subject: `New Inquiry from ${name} - ${businessName}`,
            html: `
email send successfully `,
        };
 
        // Send email
        await transporter.sendMail(mailOptions);
 
        return {
            statusCode: 200,
            body: JSON.stringify({ success: true, message: "Your message has been sent successfully!" }),
        };
    } catch (error) {
        console.error("Error sending email:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ success: false, message: "Failed to send message. Please try again later." }),
        };
    }
}
