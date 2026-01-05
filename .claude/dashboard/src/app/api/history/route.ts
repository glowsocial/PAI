import { NextResponse } from "next/server";
import { getHistoryEntries } from "@/lib/pai-reader";

export async function GET() {
  try {
    const entries = getHistoryEntries(30);
    return NextResponse.json(entries);
  } catch (error) {
    console.error("Error fetching history:", error);
    return NextResponse.json({ error: "Failed to fetch history" }, { status: 500 });
  }
}
