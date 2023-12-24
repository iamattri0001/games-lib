import { NextResponse } from "next/server";

export async function GET(req, res) {
  try {
    const response = await fetch(
      `https://api.rawg.io/api/games?key=${process.env.API_KEY}`
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch data, status: ${response.status}`);
    }

    const data = await response.json();

    return new NextResponse({ data: JSON.stringify(data) });
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
