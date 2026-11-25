"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import type {
  ChatDaySummary,
  ChatMessageRow,
  ChatSessionSummary,
} from "@/lib/admin/chats";

type Props = {
  adminEmail: string;
  days: ChatDaySummary[];
  initialDay: string | null;
  initialSessions: ChatSessionSummary[];
};

function formatTime(iso: string) {
  try {
    return new Date(iso).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return "";
  }
}

export default function AdminChatHistory({
  adminEmail,
  days,
  initialDay,
  initialSessions,
}: Props) {
  const router = useRouter();
  const [selectedDay, setSelectedDay] = useState(initialDay);
  const [sessions, setSessions] = useState(initialSessions);
  const [selectedSessionId, setSelectedSessionId] = useState<string | null>(
    initialSessions[0]?.id ?? null,
  );
  const [sessionDetail, setSessionDetail] = useState<{
    session: ChatSessionSummary;
    messages: ChatMessageRow[];
  } | null>(null);
  const [loadingSessions, setLoadingSessions] = useState(false);
  const [loadingMessages, setLoadingMessages] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const selectedSessionMeta = useMemo(
    () => sessions.find((session) => session.id === selectedSessionId) ?? null,
    [sessions, selectedSessionId],
  );

  useEffect(() => {
    if (!selectedSessionId) {
      setSessionDetail(null);
      return;
    }

    let cancelled = false;
    setLoadingMessages(true);
    setError(null);

    void fetch(`/api/admin/chats/sessions/${selectedSessionId}`)
      .then(async (res) => {
        const body = await res.json();
        if (!res.ok) throw new Error(body.error || "Could not load messages.");
        if (!cancelled) {
          setSessionDetail({
            session: body.session,
            messages: body.messages,
          });
        }
      })
      .catch((err) => {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : "Failed to load chat.");
          setSessionDetail(null);
        }
      })
      .finally(() => {
        if (!cancelled) setLoadingMessages(false);
      });

    return () => {
      cancelled = true;
    };
  }, [selectedSessionId]);

  async function selectDay(day: string) {
    setSelectedDay(day);
    setLoadingSessions(true);
    setError(null);
    try {
      const res = await fetch(`/api/admin/chats?day=${encodeURIComponent(day)}`);
      const body = await res.json();
      if (!res.ok) throw new Error(body.error || "Could not load sessions.");
      const nextSessions = body.sessions as ChatSessionSummary[];
      setSessions(nextSessions);
      setSelectedSessionId(nextSessions[0]?.id ?? null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load day.");
      setSessions([]);
      setSelectedSessionId(null);
    } finally {
      setLoadingSessions(false);
    }
  }

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.replace("/admin");
    router.refresh();
  }

  return (
    <div className="mx-auto flex min-h-screen max-w-[1400px] flex-col px-4 py-6 sm:px-6 lg:px-8">
      <header className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
        <div>
          <p className="font-[family-name:var(--font-geist-mono)] text-[11px] uppercase tracking-[0.16em] text-white/45">
            Admin dashboard
          </p>
          <h1 className="mt-1 text-[1.5rem] font-semibold tracking-[-0.02em]">
            Chat history
          </h1>
          <p className="mt-1 text-[13px] text-white/45">Signed in as {adminEmail}</p>
        </div>
        <button
          type="button"
          onClick={() => void logout()}
          className="inline-flex h-10 items-center justify-center border border-white/20 px-4 font-[family-name:var(--font-geist-mono)] text-[11px] uppercase tracking-[0.08em] text-white/80 transition-colors hover:border-white/40 hover:text-white"
        >
          Log out
        </button>
      </header>

      {error ? (
        <p className="mb-4 text-[13px] text-red-400" role="alert">
          {error}
        </p>
      ) : null}

      <div className="grid min-h-0 flex-1 gap-4 lg:grid-cols-[220px_320px_minmax(0,1fr)]">
        <aside className="border border-white/10 bg-[#12151a]">
          <div className="border-b border-white/10 px-4 py-3">
            <p className="font-[family-name:var(--font-geist-mono)] text-[10px] uppercase tracking-[0.14em] text-white/45">
              Days
            </p>
          </div>
          <ul className="max-h-[70vh] overflow-y-auto">
            {days.length === 0 ? (
              <li className="px-4 py-6 text-[13px] text-white/45">
                No chat history yet.
              </li>
            ) : (
              days.map((day) => {
                const active = day.day === selectedDay;
                return (
                  <li key={day.day}>
                    <button
                      type="button"
                      onClick={() => void selectDay(day.day)}
                      className={[
                        "flex w-full flex-col items-start gap-1 border-b border-white/5 px-4 py-3 text-left transition-colors",
                        active ? "bg-white/10" : "hover:bg-white/5",
                      ].join(" ")}
                    >
                      <span className="text-[14px] font-medium">{day.day}</span>
                      <span className="text-[12px] text-white/45">
                        {day.sessionCount} sessions · {day.messageCount} messages
                      </span>
                    </button>
                  </li>
                );
              })
            )}
          </ul>
        </aside>

        <aside className="border border-white/10 bg-[#12151a]">
          <div className="border-b border-white/10 px-4 py-3">
            <p className="font-[family-name:var(--font-geist-mono)] text-[10px] uppercase tracking-[0.14em] text-white/45">
              Sessions {selectedDay ? `· ${selectedDay}` : ""}
            </p>
          </div>
          <ul className="max-h-[70vh] overflow-y-auto">
            {loadingSessions ? (
              <li className="px-4 py-6 text-[13px] text-white/45">Loading…</li>
            ) : sessions.length === 0 ? (
              <li className="px-4 py-6 text-[13px] text-white/45">
                No sessions for this day.
              </li>
            ) : (
              sessions.map((session) => {
                const active = session.id === selectedSessionId;
                return (
                  <li key={session.id}>
                    <button
                      type="button"
                      onClick={() => setSelectedSessionId(session.id)}
                      className={[
                        "flex w-full flex-col gap-1 border-b border-white/5 px-4 py-3 text-left transition-colors",
                        active ? "bg-white/10" : "hover:bg-white/5",
                      ].join(" ")}
                    >
                      <span className="truncate text-[13px] font-medium">
                        {session.preview || "Session"}
                      </span>
                      <span className="font-[family-name:var(--font-geist-mono)] text-[11px] text-white/45">
                        {session.ip || "IP unknown"} · {session.messageCount} msgs
                      </span>
                    </button>
                  </li>
                );
              })
            )}
          </ul>
        </aside>

        <section className="flex min-h-[70vh] flex-col border border-white/10 bg-[#0f1217]">
          {(sessionDetail?.session || selectedSessionMeta) && (
            <div className="border-b border-white/10 px-4 py-3 sm:px-5">
              <p className="font-[family-name:var(--font-geist-mono)] text-[10px] uppercase tracking-[0.14em] text-white/45">
                Visitor details
              </p>
              <dl className="mt-3 grid gap-2 text-[13px] sm:grid-cols-2">
                <div>
                  <dt className="text-white/40">User ID</dt>
                  <dd className="break-all text-white/85">
                    {(sessionDetail?.session || selectedSessionMeta)?.userId}
                  </dd>
                </div>
                <div>
                  <dt className="text-white/40">IP</dt>
                  <dd className="text-white/85">
                    {(sessionDetail?.session || selectedSessionMeta)?.ip || "—"}
                  </dd>
                </div>
                <div className="sm:col-span-2">
                  <dt className="text-white/40">User agent</dt>
                  <dd className="break-words text-white/85">
                    {(sessionDetail?.session || selectedSessionMeta)?.userAgent ||
                      "—"}
                  </dd>
                </div>
                <div className="sm:col-span-2">
                  <dt className="text-white/40">Accept-Language</dt>
                  <dd className="break-words text-white/85">
                    {(sessionDetail?.session || selectedSessionMeta)
                      ?.acceptLanguage || "—"}
                  </dd>
                </div>
              </dl>
            </div>
          )}

          <div className="flex-1 space-y-3 overflow-y-auto px-4 py-5 sm:px-5">
            {loadingMessages ? (
              <p className="text-[13px] text-white/45">Loading conversation…</p>
            ) : !sessionDetail ? (
              <p className="text-[13px] text-white/45">
                Select a session to view the conversation.
              </p>
            ) : sessionDetail.messages.length === 0 ? (
              <p className="text-[13px] text-white/45">No messages in this session.</p>
            ) : (
              sessionDetail.messages.map((message) => {
                const isUser = message.role === "user";
                return (
                  <div
                    key={message.id}
                    className={[
                      "flex",
                      isUser ? "justify-end" : "justify-start",
                    ].join(" ")}
                  >
                    <div
                      className={[
                        "max-w-[85%] rounded-2xl px-3.5 py-2.5 text-[14px] leading-relaxed whitespace-pre-wrap",
                        isUser
                          ? "rounded-br-md bg-[#2f6fed] text-white"
                          : "rounded-bl-md bg-[#1b2028] text-white/90",
                      ].join(" ")}
                    >
                      <p>{message.content}</p>
                      <p
                        className={[
                          "mt-1.5 font-[family-name:var(--font-geist-mono)] text-[10px]",
                          isUser ? "text-white/70" : "text-white/40",
                        ].join(" ")}
                      >
                        {isUser ? "Visitor" : "Bot"} · {formatTime(message.createdAt)}
                      </p>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
