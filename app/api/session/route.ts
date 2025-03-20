// app/api/session/route.ts
import { getSession } from "@/lib";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await getSession();
  console.log("session11 : ", session);
  return NextResponse.json(session?.user || null);
}
