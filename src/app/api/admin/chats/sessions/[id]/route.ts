import { NextResponse } from "next/server";
import { getAdminSession } from "@/lib/admin/auth";
import { getSessionMessages } from "@/lib/admin/chats";

const UUID_RE =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

type Params = {
  params: Promise<{ id: string }>;
};

export async function GET(_request: Request, { params }: Params) {
  const admin = await getAdminSession();
  if (!admin) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  const { id } = await params;
  if (!UUID_RE.test(id)) {
    return NextResponse.json({ error: "Invalid session id." }, { status: 400 });
  }

  try {
    const result = await getSessionMessages(id);
    if (!result.session) {
      return NextResponse.json({ error: "Session not found." }, { status: 404 });
    }
    return NextResponse.json(result);
  } catch (error) {
    console.error("[admin/chats/session]", error);
    return NextResponse.json(
      { error: "Could not load session." },
      { status: 500 },
    );
  }
}
