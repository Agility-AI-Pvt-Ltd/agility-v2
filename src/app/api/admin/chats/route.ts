import { NextResponse } from "next/server";
import { getAdminSession } from "@/lib/admin/auth";
import { listChatDays, listSessionsForDay } from "@/lib/admin/chats";

export async function GET(request: Request) {
  const admin = await getAdminSession();
  if (!admin) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const day = searchParams.get("day");

  try {
    if (!day) {
      const days = await listChatDays();
      return NextResponse.json({ days });
    }

    if (!/^\d{4}-\d{2}-\d{2}$/.test(day)) {
      return NextResponse.json({ error: "Invalid day." }, { status: 400 });
    }

    const sessions = await listSessionsForDay(day);
    return NextResponse.json({ day, sessions });
  } catch (error) {
    console.error("[admin/chats]", error);
    return NextResponse.json(
      { error: "Could not load chat history." },
      { status: 500 },
    );
  }
}
