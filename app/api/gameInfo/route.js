"use server";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const reqURL = `https://api.rawg.io/api/games/${searchParams.get(
      "name"
    )}?key=${process.env.API_KEY}`;
    
    const response = await fetch(reqURL);

    if (!response.ok) {
      throw new Error(`Failed to fetch data, status: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json({ data }, { status: 200 });
  } catch (err) {
    console.error("Error fetching data: ", err);

    return new NextResponse({
      status: 500,
      body: { error: "Internal Server Error" },
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
