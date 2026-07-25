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