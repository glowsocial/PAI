import { NextRequest, NextResponse } from "next/server";
import { readFile } from "@/lib/pai-reader";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const filePath = searchParams.get("path");

  if (!filePath) {
    return NextResponse.json({ error: "No path provided" }, { status: 400 });
  }

  const content = readFile(filePath);

  if (content === null) {
    return NextResponse.json({ error: "File not found or not readable" }, { status: 404 });
  }

  return NextResponse.json({ content, path: filePath });
}
