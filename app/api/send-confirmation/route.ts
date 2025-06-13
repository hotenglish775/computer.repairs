import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const bookingData = await request.json();
    
    // Create transporter (you'll need to configure with your SMTP settings)
    const transporter = nodemailer.createTransporter({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.SMTP_FROM || 'support@evolutionpcrepairs.com',
      to: bookingData.email,
      subject: 'Booking Confirmation - Evolution PC Repairs',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">Booking Confirmation</h2>
          <p>Dear ${bookingData.name},</p>
          <p>Thank you for booking with Evolution PC Repairs. We have received your appointment request and will contact you within 2 hours to confirm the details.</p>
          
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3>Booking Details:</h3>
            <p><strong>Service:</strong> ${bookingData.service}</p>
            <p><strong>Device:</strong> ${bookingData.deviceType}</p>
            <p><strong>Preferred Date:</strong> ${bookingData.preferredDate}</p>
            <p><strong>Preferred Time:</strong> ${bookingData.preferredTime}</p>
            <p><strong>Issue:</strong> ${bookingData.issue}</p>
          </div>
          
          <p><strong>What happens next?</strong></p>
          <ul>
            <li>We'll call you to confirm your appointment</li>
            <li>Bring your device and any accessories</li>
            <li>Free diagnostic and quote provided</li>
            <li>Most repairs completed same day</li>
          </ul>
          
          <p>If you need to make any changes or have questions, please call us on 01554 123456.</p>
          
          <p>Best regards,<br>Evolution PC Repairs Team</p>
          <p style="font-size: 12px; color: #666;">ERW Road, Llanelli, SA15 2TE</p>
        </div>
      `,
    };

    // Send email (only if SMTP is configured)
    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      await transporter.sendMail(mailOptions);
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Confirmation email sent' 
    });
  } catch (error) {
    console.error('Error sending confirmation email:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send confirmation email' },
      { status: 500 }
    );
  }
}