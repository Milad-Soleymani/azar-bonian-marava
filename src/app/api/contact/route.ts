import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const scriptUrl = process.env.GOOGLE_SCRIPT_URL;

    if (!scriptUrl) {
      return NextResponse.json(
        {
          success: false,
          message: "Google Script URL is missing",
        },
        {
          status: 500,
        }
      );
    }

    // ذخیره در Google Sheet
    const response = await fetch(scriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...body,
        secret: process.env.CONTACT_SECRET,
      }),
    });

    const text = await response.text();

    console.log("Google Script Response:", text);

    let result;

    try {
      result = JSON.parse(text);
    } catch {
      result = {
        success: false,
        message: text,
      };
    }

    // اگر ذخیره موفق بود، پیام تلگرام ارسال شود
    if (result.success) {
      try {
        const serviceNames: Record<string, string> = {
          construction: "ساخت‌وساز",
          import: "واردات",
          export: "صادرات",
        };

        const telegramResponse = await fetch(
          `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              chat_id: process.env.TELEGRAM_CHAT_ID,
              parse_mode: "HTML",
              text: `
📩 <b>درخواست جدید از فرم تماس</b>

👤 <b>نام:</b>
${body.firstname} ${body.lastname}

📧 <b>ایمیل:</b>
${body.email}

📞 <b>شماره تماس:</b>
${body.phone}

🛠 <b>خدمت انتخاب شده:</b>
${serviceNames[body.service] ?? body.service}

💬 <b>پیام:</b>
${body.message}
              `,
            }),
          }
        );

        const telegramResult = await telegramResponse.json();

        console.log("Telegram Response:", telegramResult);
      } catch (telegramError) {
        console.error("Telegram Error:", telegramError);
      }
    }

    return NextResponse.json(result);
  } catch (error) {
    console.error("CONTACT API ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Server error",
      },
      {
        status: 500,
      }
    );
  }
}