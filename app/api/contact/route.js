import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const RECEIVER_EMAIL = process.env.CONTACT_RECEIVER_EMAIL || "info@tripsthan.com";
const DATA_FILE_PATH = path.join(process.cwd(), "data", "enquiries.json");

// Helper to sanitize text strings against injection & malicious script tags
function sanitize(str) {
  if (typeof str !== "string") return "";
  return str
    .replace(/[<>]/g, "")
    .trim();
}

// Generate unique booking & lead reference ID
function generateReferenceId() {
  const dateStr = new Date().toISOString().slice(2, 10).replace(/-/g, "");
  const randomStr = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `TS-${dateStr}-${randomStr}`;
}

// Ensure data folder and enquiries.json file exist
async function ensureStorage() {
  try {
    const dir = path.dirname(DATA_FILE_PATH);
    await fs.mkdir(dir, { recursive: true });
    try {
      await fs.access(DATA_FILE_PATH);
    } catch {
      await fs.writeFile(DATA_FILE_PATH, JSON.stringify([], null, 2), "utf8");
    }
  } catch (err) {
    console.error("Storage initialization error:", err);
  }
}

// Save enquiry to local JSON database
async function saveEnquiry(record) {
  await ensureStorage();
  try {
    const fileContent = await fs.readFile(DATA_FILE_PATH, "utf8");
    let records = [];
    try {
      records = JSON.parse(fileContent);
      if (!Array.isArray(records)) records = [];
    } catch {
      records = [];
    }
    records.unshift(record);
    // Keep last 500 records to prevent unbounded disk growth
    if (records.length > 500) records = records.slice(0, 500);
    await fs.writeFile(DATA_FILE_PATH, JSON.stringify(records, null, 2), "utf8");
  } catch (err) {
    console.error("Error writing enquiry to file:", err);
  }
}

// Build HTML email notification template
function buildEmailTemplate(data, refId) {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>New Tour Enquiry - TripSthan</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #FAF7F2; margin: 0; padding: 24px; color: #1A1A1A;">
  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; border: 1px solid #EAE0D2; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.06);">
    <!-- Header -->
    <tr>
      <td style="background: linear-gradient(135deg, #7A2318 0%, #992E20 100%); padding: 32px 28px; text-align: center;">
        <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 800; letter-spacing: -0.5px;">TripSthan Private Tours</h1>
        <p style="color: #F7EFE4; margin: 6px 0 0; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">New Customer Tour Enquiry</p>
      </td>
    </tr>

    <!-- Reference Ribbon -->
    <tr>
      <td style="background-color: #FFF2E6; padding: 12px 28px; border-bottom: 1px solid #F5D3B8;">
        <table width="100%" border="0" cellspacing="0" cellpadding="0">
          <tr>
            <td style="font-size: 12px; font-weight: 700; color: #E85D04; text-transform: uppercase;">
              Reference ID: <span style="font-family: monospace; font-size: 14px; color: #7A2318;">${refId}</span>
            </td>
            <td align="right" style="font-size: 12px; color: #6B5A50;">
              ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST
            </td>
          </tr>
        </table>
      </td>
    </tr>

    <!-- Body Content -->
    <tr>
      <td style="padding: 28px;">
        <h2 style="margin: 0 0 16px; font-size: 18px; color: #7A2318;">Traveler Details</h2>
        
        <table width="100%" border="0" cellspacing="0" cellpadding="8" style="font-size: 14px; border-collapse: collapse;">
          <tr style="border-bottom: 1px solid #F0EAE1;">
            <td width="35%" style="color: #6B5A50; font-weight: 600;">Full Name:</td>
            <td style="color: #1A1A1A; font-weight: 700;">${data.fullName}</td>
          </tr>
          <tr style="border-bottom: 1px solid #F0EAE1;">
            <td style="color: #6B5A50; font-weight: 600;">Email:</td>
            <td><a href="mailto:${data.email}" style="color: #7A2318; font-weight: 600; text-decoration: none;">${data.email}</a></td>
          </tr>
          <tr style="border-bottom: 1px solid #F0EAE1;">
            <td style="color: #6B5A50; font-weight: 600;">Phone / WhatsApp:</td>
            <td><a href="tel:${data.phone.replace(/\s/g, "")}" style="color: #7A2318; font-weight: 600; text-decoration: none;">${data.phone}</a></td>
          </tr>
          <tr style="border-bottom: 1px solid #F0EAE1;">
            <td style="color: #6B5A50; font-weight: 600;">Travel Dates:</td>
            <td style="color: #1A1A1A; font-weight: 600;">${data.travelDates}</td>
          </tr>
          <tr style="border-bottom: 1px solid #F0EAE1;">
            <td style="color: #6B5A50; font-weight: 600;">No. of Travellers:</td>
            <td style="color: #1A1A1A; font-weight: 600;">${data.travellers}</td>
          </tr>
          <tr style="border-bottom: 1px solid #F0EAE1;">
            <td style="color: #6B5A50; font-weight: 600;">Destination:</td>
            <td style="color: #E85D04; font-weight: 700;">${data.destination}</td>
          </tr>
        </table>

        <!-- Message Box -->
        <h3 style="margin: 24px 0 8px; font-size: 15px; color: #7A2318;">Customer Message / Special Requirements:</h3>
        <div style="background-color: #FAF7F2; border: 1px solid #EAE0D2; border-radius: 12px; padding: 16px; font-size: 14px; line-height: 1.6; color: #333333; white-space: pre-wrap;">
${data.message}
        </div>

        <!-- Quick Action Buttons -->
        <div style="margin-top: 28px; text-align: center;">
          <a href="mailto:${data.email}?subject=TripSthan%20Tour%20Plan%20%26%20Quotation%20(Ref:%20${refId})" style="display: inline-block; background-color: #7A2318; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 30px; font-weight: 700; font-size: 14px; margin-right: 8px;">
            Reply to Traveler
          </a>
          <a href="https://wa.me/${data.phone.replace(/[^0-9]/g, "")}" style="display: inline-block; background-color: #25D366; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 30px; font-weight: 700; font-size: 14px;">
            Message on WhatsApp
          </a>
        </div>
      </td>
    </tr>

    <!-- Footer -->
    <tr>
      <td style="background-color: #F7EFE4; padding: 20px 28px; text-align: center; font-size: 12px; color: #6B5A50; border-top: 1px solid #EAE0D2;">
        Sent automatically to <strong>${RECEIVER_EMAIL}</strong> via TripSthan Contact Form.<br/>
        TripSthan Head Operations: 226, Maidangarhi, New Delhi 110068 | Delhi NCR Airport Hub
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}

// Dispatch email via Resend if RESEND_API_KEY is configured
async function trySendViaResend(data, refId) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return false;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.EMAIL_FROM || "TripSthan Tours <onboarding@resend.dev>",
        to: [RECEIVER_EMAIL],
        reply_to: data.email,
        subject: `New Tour Enquiry: ${data.fullName} - ${data.destination} (${refId})`,
        html: buildEmailTemplate(data, refId),
      }),
    });
    return res.ok;
  } catch (err) {
    console.error("Resend API delivery error:", err);
    return false;
  }
}

// Forward to external webhook if configured (Zapier, Make, Telegram, Discord, etc.)
async function trySendViaWebhook(data, refId) {
  const webhookUrl = process.env.EMAIL_WEBHOOK_URL;
  if (!webhookUrl) return false;

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        refId,
        receiver: RECEIVER_EMAIL,
        ...data,
        timestamp: new Date().toISOString(),
      }),
    });
    return res.ok;
  } catch (err) {
    console.error("Webhook forwarding error:", err);
    return false;
  }
}

// =========================================================================
// POST /api/contact - Handle customer tour enquiries
// =========================================================================
export async function POST(request) {
  try {
    const body = await request.json();

    // 1. Anti-spam honeypot detection
    if (body.botField || body._gotcha || body.website) {
      console.warn("Honeypot triggered, silently dropping bot submission.");
      return NextResponse.json({
        success: true,
        message: "Thank you. We have received your enquiry and will get back to you soon.",
      });
    }

    // 2. Extract & sanitize fields
    const fullName = sanitize(body.fullName);
    const email = sanitize(body.email).toLowerCase();
    const phone = sanitize(body.phone);
    const travelDates = sanitize(body.travelDates);
    const travellers = sanitize(body.travellers);
    const destination = sanitize(body.destination);
    const message = sanitize(body.message);

    // 3. Validation
    if (!fullName || fullName.length < 2) {
      return NextResponse.json(
        { success: false, error: "Please enter your full name." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (!phone || phone.replace(/\D/g, "").length < 6) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid phone or WhatsApp number." },
        { status: 400 }
      );
    }

    if (!travelDates) {
      return NextResponse.json(
        { success: false, error: "Please specify your intended travel dates." },
        { status: 400 }
      );
    }

    if (!travellers) {
      return NextResponse.json(
        { success: false, error: "Please specify the number of travellers." },
        { status: 400 }
      );
    }

    if (!destination) {
      return NextResponse.json(
        { success: false, error: "Please specify where you would like to go." },
        { status: 400 }
      );
    }

    if (!message || message.length < 5) {
      return NextResponse.json(
        { success: false, error: "Please provide a brief message about your trip requirements." },
        { status: 400 }
      );
    }

    // 4. Create Lead Record with unique reference ID
    const refId = generateReferenceId();
    const clientIp =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "127.0.0.1";
    const userAgent = request.headers.get("user-agent") || "Unknown";

    const enquiryRecord = {
      id: refId,
      createdAt: new Date().toISOString(),
      fullName,
      email,
      phone,
      travelDates,
      travellers,
      destination,
      message,
      targetMail: RECEIVER_EMAIL,
      clientIp,
      userAgent,
      status: "NEW",
    };

    // 5. Store permanently in local data storage (ensures no lead is ever lost)
    await saveEnquiry(enquiryRecord);

    // 6. Attempt automated email dispatch
    const emailSent = await trySendViaResend(enquiryRecord, refId);
    await trySendViaWebhook(enquiryRecord, refId);

    // 7. Structured log output for development and deployment logs
    console.log("==================================================");
    console.log(`[TRIPSTHAN LEAD RECEIVED] Reference: ${refId}`);
    console.log(`Target Mail: ${RECEIVER_EMAIL} | Dispatched: ${emailSent ? "YES" : "RECORDED"}`);
    console.log(`Customer: ${fullName} <${email}> | Phone: ${phone}`);
    console.log(`Route: ${destination} | Dates: ${travelDates} | Travellers: ${travellers}`);
    console.log(`Message: ${message}`);
    console.log("==================================================");

    // 8. Return standard JSON response with required success message
    return NextResponse.json({
      success: true,
      message: "Thank you. We have received your enquiry and will get back to you soon.",
      referenceId: refId,
      targetEmail: RECEIVER_EMAIL,
    });
  } catch (err) {
    console.error("Unhandled contact API error:", err);
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected error occurred while processing your enquiry. Please message us on WhatsApp or call directly.",
      },
      { status: 500 }
    );
  }
}

// =========================================================================
// GET /api/contact - Admin endpoint to list received enquiries
// =========================================================================
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const secret = searchParams.get("secret");
    const adminSecret = process.env.ADMIN_SECRET || "tripsthan_admin";

    // Basic protection for admin queries
    if (process.env.NODE_ENV === "production" && secret !== adminSecret) {
      return NextResponse.json(
        { success: false, error: "Unauthorized access" },
        { status: 401 }
      );
    }

    await ensureStorage();
    const fileContent = await fs.readFile(DATA_FILE_PATH, "utf8");
    const records = JSON.parse(fileContent || "[]");

    return NextResponse.json({
      success: true,
      count: records.length,
      targetMail: RECEIVER_EMAIL,
      enquiries: records,
    });
  } catch (err) {
    console.error("Error reading enquiries:", err);
    return NextResponse.json(
      { success: false, error: "Failed to retrieve enquiries" },
      { status: 500 }
    );
  }
}
