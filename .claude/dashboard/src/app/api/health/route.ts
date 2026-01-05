import { NextResponse } from "next/server";
import { getSystemHealth } from "@/lib/pai-reader";

export async function GET() {
  try {
    const health = getSystemHealth();
    return NextResponse.json(health);
  } catch (error) {
    console.error("Error fetching health:", error);
    return NextResponse.json({ error: "Failed to fetch health" }, { status: 500 });
  }
}
