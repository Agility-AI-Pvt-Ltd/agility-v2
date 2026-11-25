import { redirect } from "next/navigation";
import AdminLoginForm from "@/components/admin/AdminLoginForm";
import { getAdminSession } from "@/lib/admin/auth";
import { isDatabaseConfigured } from "@/lib/db";

export default async function AdminPage() {
  if (!isDatabaseConfigured()) {
    return (
      <main className="flex min-h-screen items-center justify-center px-6">
        <div className="max-w-md border border-white/10 bg-[#12151a] p-6 text-[14px] text-white/70">
          Database is not configured. Set <code>DATABASE_URL</code> to use the
          admin dashboard.
        </div>
      </main>
    );
  }

  const admin = await getAdminSession();
  if (admin) {
    redirect("/admin/chats");
  }

  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-10">
      <AdminLoginForm />
    </main>
  );
}
