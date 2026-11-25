import { redirect } from "next/navigation";
import AdminChatHistory from "@/components/admin/AdminChatHistory";
import { getAdminSession } from "@/lib/admin/auth";
import { listChatDays, listSessionsForDay } from "@/lib/admin/chats";
import { isDatabaseConfigured } from "@/lib/db";

export default async function AdminChatsPage() {
  if (!isDatabaseConfigured()) {
    redirect("/admin");
  }

  const admin = await getAdminSession();
  if (!admin) {
    redirect("/admin");
  }

  const days = await listChatDays();
  const initialDay = days[0]?.day ?? null;
  const initialSessions = initialDay ? await listSessionsForDay(initialDay) : [];

  return (
    <AdminChatHistory
      adminEmail={admin.email}
      days={days}
      initialDay={initialDay}
      initialSessions={initialSessions}
    />
  );
}
