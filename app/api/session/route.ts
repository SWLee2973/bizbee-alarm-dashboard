import { getSession } from "@/lib";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await getSession();
  return NextResponse.json(session?.user || null);
}
