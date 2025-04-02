import { getSession } from "@/lib";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const session = await getSession();

    return NextResponse.json(session?.user || null);
  } catch (error) {
    console.log("error : ", error);
    return NextResponse.error();
  }
}
