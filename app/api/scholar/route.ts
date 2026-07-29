import { NextResponse } from "next/server";
import { fetchScholarData } from "@/lib/scholar";

export async function GET() {
  try {
    const scholar = await fetchScholarData();

    return NextResponse.json(scholar);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to fetch Google Scholar data.",
      },
      { status: 500 }
    );
  }
}