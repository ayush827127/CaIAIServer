require('dotenv').config();
const nodemailer = require('nodemailer');


  // Create a transporter using SMTP
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.USER,
        pass: process.env.PASS // Use an app-specific password if using Gmail
    }
  });

// Function to send welcome email
const sendWelcomeEmail = (email, userName) => {
    const mailOptions = {
        from: `CaIAI ${process.env.USER}`,
        to: email,
        subject: 'Welcome to Our Shop!',
        html: `
            <p>Hello ${userName},</p>
            <p>Welcome to Our shop!</p>
            <p>Welcome to our shop, shop product with awesome discount.</p>
            <p>Best Regards,</p>
            <p>CaIA</p>
        `
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending welcome email:', error);
        } else {
            console.log('Welcome email sent:', info.response);
        }
    });
  };

  // Function to send welcome email
const sendPurchaseEmail = (email, userName) => {
    const mailOptions = {
        from: `CaIAI ${process.env.USER}`,
        to: email,
        subject: 'Thanks for shopping from Our Shop!',
        html: `
            <p>Hello ${userName},</p>
            <p>Thanks you for shopping</p>
            <p>Your payment has successfull and your product reached to your shipping address soon.</p>
            <p>Best Regards,</p>
            <p>CaIA</p>
        `
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending welcome email:', error);
        } else {
            console.log('Purchase email sent:', info.response);
        }
    });
  };

module.exports = {sendWelcomeEmail,sendPurchaseEmail};
