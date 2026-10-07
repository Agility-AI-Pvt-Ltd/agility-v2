"use client";

import { useEffect, useId, useState } from "react";

export type TestimonialVideo = {
  id: string;
  /** Local file under /public, e.g. /testimonials/clip.mp4 */
  src?: string;
  /** Public Google Drive file ID. Playback uses Drive's preview player. */
  driveFileId?: string;
  name?: string;
  organization?: string;
  caption?: string;
  /** Unlisted YouTube video ID. */
  youtubeId?: string;
  thumbnailUrl?: string;
  aspect?: "portrait" | "landscape";
};

function driveThumbnailUrl(fileId: string) {
  return `https://lh3.googleusercontent.com/d/${fileId}=w800`;
}

function drivePreviewUrl(fileId: string) {
  return `https://drive.google.com/file/d/${fileId}/preview`;
}

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

function isPortrait(video: TestimonialVideo) {
  if (video.aspect) return video.aspect === "portrait";
  return Boolean((video.src || video.driveFileId) && !video.youtubeId);
}

function hasPlayableVideo(video: TestimonialVideo) {
  return Boolean(video.src || video.driveFileId || video.youtubeId);
}

function VideoCard({
  video,
  index,
  onPlay,
}: {
  video: TestimonialVideo;
  index: number;
  onPlay: () => void;
}) {
  const hasVideo = hasPlayableVideo(video);
  const portrait = isPortrait(video);
  const thumbnail =
    video.thumbnailUrl ||
    (video.driveFileId
      ? driveThumbnailUrl(video.driveFileId)
      : video.youtubeId
        ? `https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`
        : undefined);
  const label = video.name
    ? `Play testimonial from ${video.name}`
    : `Play testimonial ${index + 1}`;

  return (
    <article className="flex flex-col border border-neutral-200 bg-white">
      <div
        className={[
          "relative overflow-hidden bg-neutral-900",
          portrait ? "aspect-[9/16]" : "aspect-video",
        ].join(" ")}
      >
        <button
          type="button"
          onClick={() => hasVideo && onPlay()}
          disabled={!hasVideo}
          className="group absolute inset-0 flex w-full items-center justify-center text-left"
          aria-label={hasVideo ? label : "Video coming soon"}
        >
          {video.src ? (
            <video
              src={`${video.src}#t=0.1`}
              preload="metadata"
              muted
              playsInline
              className="pointer-events-none absolute inset-0 h-full w-full object-cover"
              aria-hidden="true"
            />
          ) : thumbnail ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={thumbnail}
              alt=""
              referrerPolicy="no-referrer"
              className="absolute inset-0 h-full w-full object-cover opacity-80 transition-opacity group-hover:opacity-90"
            />
          ) : (
            <div
              className="absolute inset-0 bg-[linear-gradient(135deg,#1a1a1a_0%,#2c2c2c_50%,#111_100%)]"
              aria-hidden="true"
            />
          )}

          <span className="absolute inset-0 bg-black/25 transition-colors group-hover:bg-black/40" />

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
      </div>

      {(video.organization || video.name || video.caption) && (
        <div className="flex flex-1 flex-col p-5 sm:p-6">
          {video.organization && (
            <p className="font-[family-name:var(--font-geist-mono)] text-[10px] uppercase tracking-[0.14em] text-[#3b6ef5]">
              {video.organization}
            </p>
          )}
          {video.name && (
            <h3 className="mt-2 text-[16px] font-semibold tracking-[-0.01em] text-neutral-950">
              {video.name}
            </h3>
          )}
          {video.caption && (
            <p className="mt-2 flex-1 text-[14px] leading-relaxed text-neutral-600">
              {video.caption}
            </p>
          )}
        </div>
      )}
    </article>
  );
}

function PlayerDialog({
  video,
  onClose,
}: {
  video: TestimonialVideo;
  onClose: () => void;
}) {
  const titleId = useId();
  const portrait = isPortrait(video);
  const thumbnail =
    video.thumbnailUrl ||
    (video.driveFileId ? driveThumbnailUrl(video.driveFileId) : undefined);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    window.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-8">
      <button
        type="button"
        className="absolute inset-0 bg-black/70"
        aria-label="Close testimonial video"
        onClick={onClose}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative z-10 flex max-h-[min(92vh,960px)] flex-col bg-black shadow-2xl"
      >
        <div className="flex items-center justify-between gap-4 px-4 py-3 text-white">
          <p
            id={titleId}
            className="font-[family-name:var(--font-geist-mono)] text-[11px] font-medium uppercase tracking-[0.14em]"
          >
            {video.name ?? "Testimonial"}
          </p>
          <button
            type="button"
            onClick={onClose}
            className="font-[family-name:var(--font-geist-mono)] text-[11px] uppercase tracking-[0.1em] text-white/70 transition-colors hover:text-white"
          >
            Close
          </button>
        </div>

        {video.src ? (
          <video
            key={video.src}
            src={video.src}
            controls
            autoPlay
            playsInline
            className={
              portrait
                ? "h-[min(78vh,820px)] w-auto max-w-[calc(100vw-2rem)] bg-black object-contain"
                : "aspect-video w-[min(100vw-2rem,960px)] bg-black"
            }
          />
        ) : video.driveFileId ? (
          <div className="flex w-[min(100vw-2rem,420px)] flex-col">
            <div className="relative aspect-[9/16] w-full overflow-hidden bg-neutral-900">
              {thumbnail ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={thumbnail}
                  alt=""
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              ) : null}
              <div className="absolute inset-0 bg-black/35" />
              <a
                href={drivePreviewUrl(video.driveFileId)}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 text-white"
              >
                <span className="flex size-16 items-center justify-center rounded-full bg-white text-black shadow-[0_8px_24px_rgba(0,0,0,0.35)]">
                  <PlayIcon />
                </span>
                <span className="font-[family-name:var(--font-geist-mono)] text-[11px] uppercase tracking-[0.14em]">
                  Watch on Google Drive
                </span>
              </a>
            </div>
          </div>
        ) : (
          <iframe
            title={video.name ?? "Testimonial"}
            src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="aspect-video w-[min(100vw-2rem,960px)] border-0"
          />
        )}
      </div>
    </div>
  );
}

export default function TestimonialVideoGrid({ videos }: VideoGridProps) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = videos.find((video) => video.id === activeId) ?? null;

  return (
    <>
      <ul className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3">
        {videos.map((video, index) => (
          <li key={video.id}>
            <VideoCard
              video={video}
              index={index}
              onPlay={() => setActiveId(video.id)}
            />
          </li>
        ))}
      </ul>

      {active && hasPlayableVideo(active) && (
        <PlayerDialog video={active} onClose={() => setActiveId(null)} />
      )}
    </>
  );
}
