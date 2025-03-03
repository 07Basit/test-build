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
<div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 600px; margin: auto; border: 1px solid #ddd; padding: 20px; border-radius: 8px;">
<h2 style="color: #4CAF50; text-align: center;">🌿 Fruits and Vegetable Inquiry</h2>
<p>Dear Team,</p>
<p>You have received a new inquiry from your website. Here are the details:</p>
<table style="width: 100%; border-collapse: collapse;">
<tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Name:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${name}</td></tr>
<tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Business Name:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${businessName}</td></tr>
<tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Email:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${email}</td></tr>
<tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Contact No:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${contact}</td></tr>
<tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Product Interest:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${productInterest || 'Not Provided'}</td></tr>
<tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Message:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${message ? message.replace(/\n/g, '<br>') : 'Not Provided'}</td></tr>
</table>
<p>We appreciate your interest in our fresh fruits and vegetables. Please respond promptly to provide further details or discuss the inquiry.</p>
<p style="text-align: center; color: #4CAF50;"><strong>🍏 Raiyan Global - Fresh & Organic Produce</strong></p>
<hr>
<p style="font-size: 12px; text-align: center; color: gray;">This message was sent via the contact form on our website. Please do not reply directly to this email.</p>
</div> `,
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
