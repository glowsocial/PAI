import { NextResponse } from "next/server";
import { getFabricPatterns } from "@/lib/pai-reader";

export async function GET() {
  try {
    const patterns = getFabricPatterns();
    return NextResponse.json(patterns);
  } catch (error) {
    console.error("Error fetching fabric patterns:", error);
    return NextResponse.json({ error: "Failed to fetch patterns" }, { status: 500 });
  }
}
