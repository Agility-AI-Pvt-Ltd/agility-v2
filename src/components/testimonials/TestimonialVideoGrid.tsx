"use client";

import { useState } from "react";

export type TestimonialVideo = {
  id: string;
  name: string;
  organization: string;
  caption: string;
  /** Unlisted YouTube video ID. Empty until footage is uploaded. */
  youtubeId?: string;
  /** Optional thumbnail override. Falls back to YouTube thumb when available. */
  thumbnailUrl?: string;
};

type VideoGridProps = {
  videos: readonly TestimonialVideo[];
};

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-7" fill="currentColor" aria-hidden="true">
      <path d="M8 5.14v13.72L19 12 8 5.14z" />
    </svg>
  );
}

function VideoCard({ video }: { video: TestimonialVideo }) {
  const [playing, setPlaying] = useState(false);
  const hasVideo = Boolean(video.youtubeId);
  const thumbnail =
    video.thumbnailUrl ||
    (video.youtubeId
      ? `https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`
      : undefined);

  return (
    <article className="flex flex-col border border-neutral-200 bg-white">
      <div className="relative aspect-video overflow-hidden bg-neutral-900">
        {playing && hasVideo ? (
          <iframe
            title={`${video.name} — ${video.organization}`}
            src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full border-0"
          />
        ) : (
          <button
            type="button"
            onClick={() => hasVideo && setPlaying(true)}
            disabled={!hasVideo}
            className="group absolute inset-0 flex w-full items-center justify-center text-left"
            aria-label={
              hasVideo
                ? `Play testimonial from ${video.name}`
                : `Video coming soon — ${video.name}`
            }
          >
            {thumbnail ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={thumbnail}
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-80 transition-opacity group-hover:opacity-90"
              />
            ) : (
              <div
                className="absolute inset-0 bg-[linear-gradient(135deg,#1a1a1a_0%,#2c2c2c_50%,#111_100%)]"
                aria-hidden="true"
              />
            )}

            <span className="absolute inset-0 bg-black/25 transition-colors group-hover:bg-black/35" />

            <span
              className={[
                "relative z-10 flex size-14 items-center justify-center rounded-full transition-transform duration-300",
                hasVideo
                  ? "bg-white text-black shadow-[0_8px_24px_rgba(0,0,0,0.35)] group-hover:scale-105"
                  : "border border-white/25 bg-white/10 text-white/70",
              ].join(" ")}
            >
              <PlayIcon />
            </span>

            {!hasVideo && (
              <span className="absolute bottom-3 left-3 z-10 font-[family-name:var(--font-geist-mono)] text-[10px] uppercase tracking-[0.14em] text-white/55">
                Video coming soon
              </span>
            )}
          </button>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="font-[family-name:var(--font-geist-mono)] text-[10px] uppercase tracking-[0.14em] text-[#3b6ef5]">
          {video.organization}
        </p>
        <h3 className="mt-2 text-[16px] font-semibold tracking-[-0.01em] text-neutral-950">
          {video.name}
        </h3>
        <p className="mt-2 flex-1 text-[14px] leading-relaxed text-neutral-600">
          {video.caption}
        </p>
      </div>
    </article>
  );
}

export default function TestimonialVideoGrid({ videos }: VideoGridProps) {
  return (
    <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {videos.map((video) => (
        <li key={video.id}>
          <VideoCard video={video} />
        </li>
      ))}
    </ul>
  );
}
