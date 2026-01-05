import { NextResponse } from "next/server";
import { getSkills } from "@/lib/pai-reader";

export async function GET() {
  try {
    const skills = getSkills();
    return NextResponse.json(skills);
  } catch (error) {
    console.error("Error fetching skills:", error);
    return NextResponse.json({ error: "Failed to fetch skills" }, { status: 500 });
  }
}
