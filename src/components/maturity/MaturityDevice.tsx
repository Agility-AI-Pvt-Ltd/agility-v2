"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import {
  QUIZ_QUESTIONS,
  RUNGS,
  STORY_CHAPTERS,
  getResultForLevel,
  type RungLevel,
} from "@/lib/maturity-check";

export type DevicePhase = "intro" | "story" | "quiz" | "result";

type MaturityDeviceProps = {
  phase: DevicePhase;
  storyIndex: number;
  questionIndex: number;
  selectedOptionIndex: number;
  answers: Record<string, number | null>;
  resultLevel: RungLevel | null;
  onPrev: () => void;
  onNext: () => void;
  onSelect: () => void;
  onRetake: () => void;
};

function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="size-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      {direction === "left" ? (
        <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
      ) : (
        <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
      )}
    </svg>
  );
}

function DeviceButton({
  label,
  onClick,
  disabled,
  children,
  variant = "round",
}: {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  children: ReactNode;
  variant?: "round" | "rect";
}) {
  return (
    <button
      type="button"
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
      className={[
        "maturity-device-btn",
        variant === "round" ? "maturity-device-btn-round" : "maturity-device-btn-rect",
        disabled ? "maturity-device-btn-disabled" : "",
      ].join(" ")}
    >
      {children}
    </button>
  );
}

function RungModule({
  rung,
  active,
  lit,
}: {
  rung: (typeof RUNGS)[number];
  active: boolean;
  lit: boolean;
}) {
  return (
    <div
      className={[
        "maturity-rung-module",
        active ? "maturity-rung-module-active" : "",
      ].join(" ")}
    >
      <span className="maturity-rung-module-icon" aria-hidden="true" />
      <div className="min-w-0 flex-1">
        <p className="maturity-rung-module-label">Rung {String(rung.level).padStart(2, "0")}</p>
        <p className="maturity-rung-module-name">{rung.name}</p>
      </div>
      <span
        className={[
          "maturity-led",
          lit ? "maturity-led-on maturity-led-green" : "",
        ].join(" ")}
        aria-hidden="true"
      />
    </div>
  );
}

function DeviceScreen({
  phase,
  storyIndex,
  questionIndex,
  selectedOptionIndex,
  answers,
  resultLevel,
}: Pick<
  MaturityDeviceProps,
  | "phase"
  | "storyIndex"
  | "questionIndex"
  | "selectedOptionIndex"
  | "answers"
  | "resultLevel"
>) {
  if (phase === "intro") {
    return (
      <div className="maturity-screen-content maturity-screen-enter">
        <div className="flex items-start justify-between gap-3">
          <p className="maturity-screen-mode">Mode 00 · Boot</p>
          <p className="maturity-screen-counter">Ready</p>
        </div>
        <h2 className="maturity-screen-title">AI Maturity Check</h2>
        <p className="maturity-screen-body">
          Not just AI powered. AI fluent. Five questions. One minute. Find your
          rung on the ladder.
        </p>
        <p className="maturity-screen-hint">Press ▶ to start the story</p>
        <div className="maturity-screen-bar">
          <span style={{ width: "0%" }} />
        </div>
      </div>
    );
  }

  if (phase === "story") {
    const chapter = STORY_CHAPTERS[storyIndex];
    const progress = ((storyIndex + 1) / STORY_CHAPTERS.length) * 100;

    return (
      <div key={`story-${storyIndex}`} className="maturity-screen-content maturity-screen-enter">
        <div className="flex items-start justify-between gap-3">
          <p className="maturity-screen-mode">Mode 01 · Story</p>
          <p className="maturity-screen-counter">
            {String(storyIndex + 1).padStart(2, "0")} / {String(STORY_CHAPTERS.length).padStart(2, "0")}
          </p>
        </div>
        <p className="maturity-screen-eyebrow">{chapter.beat}</p>
        <h2 className="maturity-screen-title">{chapter.title}</h2>
        <p className="maturity-screen-body">{chapter.body}</p>
        <p className="maturity-screen-hint">
          {storyIndex < STORY_CHAPTERS.length - 1
            ? "Press ▶ for next chapter · SELECT to skip to quiz"
            : "Press SELECT to begin assessment"}
        </p>
        <div className="maturity-screen-bar">
          <span style={{ width: `${progress}%` }} />
        </div>
      </div>
    );
  }

  if (phase === "quiz") {
    const question = QUIZ_QUESTIONS[questionIndex];
    const progress = ((questionIndex + 1) / QUIZ_QUESTIONS.length) * 100;
    const answered = answers[question.id] !== null;

    return (
      <div key={`quiz-${questionIndex}-${selectedOptionIndex}`} className="maturity-screen-content maturity-screen-enter">
        <div className="flex items-start justify-between gap-3">
          <p className="maturity-screen-mode">Mode 02 · Assessment</p>
          <p className="maturity-screen-counter">
            {String(questionIndex + 1).padStart(2, "0")} / {String(QUIZ_QUESTIONS.length).padStart(2, "0")}
          </p>
        </div>
        <h2 className="maturity-screen-question">{question.prompt}</h2>
        <ul className="maturity-screen-options" role="listbox" aria-label="Answer options">
          {question.options.map((option, index) => {
            const isSelected = index === selectedOptionIndex;
            const isSaved = answers[question.id] === option.weight;

            return (
              <li
                key={option.label}
                role="option"
                aria-selected={isSelected}
                className={[
                  "maturity-screen-option",
                  isSelected ? "maturity-screen-option-selected" : "",
                  isSaved && !isSelected ? "maturity-screen-option-saved" : "",
                ].join(" ")}
              >
                <span className="maturity-screen-option-marker" aria-hidden="true">
                  {isSelected ? "›" : " "}
                </span>
                <span>{option.label}</span>
              </li>
            );
          })}
        </ul>
        <p className="maturity-screen-hint">
          ◀ ▶ move · SELECT confirms{answered ? " · answer saved" : ""}
        </p>
        <div className="maturity-screen-bar">
          <span style={{ width: `${progress}%` }} />
        </div>
      </div>
    );
  }

  if (phase === "result" && resultLevel !== null) {
    const result = getResultForLevel(resultLevel);
    const progress = (resultLevel / 5) * 100;

    return (
      <div className="maturity-screen-content maturity-screen-enter">
        <div className="flex items-start justify-between gap-3">
          <p className="maturity-screen-mode">Mode 03 · Result</p>
          <p className="maturity-screen-counter">
            Rung {String(resultLevel).padStart(2, "0")} / 05
          </p>
        </div>
        <h2 className="maturity-screen-title">{result.title}</h2>
        <p className="maturity-screen-body">{result.body}</p>
        <p className="maturity-screen-hint">Output routed to module below</p>
        <div className="maturity-screen-bar">
          <span style={{ width: `${progress}%` }} />
        </div>
      </div>
    );
  }

  return null;
}

export default function MaturityDevice({
  phase,
  storyIndex,
  questionIndex,
  selectedOptionIndex,
  answers,
  resultLevel,
  onPrev,
  onNext,
  onSelect,
  onRetake,
}: MaturityDeviceProps) {
  const currentQuestion = QUIZ_QUESTIONS[questionIndex];

  const activeRungLevel: RungLevel = (() => {
    if (phase === "story") return STORY_CHAPTERS[storyIndex].level;
    if (phase === "result" && resultLevel) return resultLevel;
    if (phase === "quiz") {
      return currentQuestion.options[selectedOptionIndex].weight;
    }
    return 1;
  })();

  const answeredCount = Object.values(answers).filter((v) => v !== null).length;
  const result = resultLevel ? getResultForLevel(resultLevel) : null;

  const prevDisabled =
    phase === "intro" ||
    (phase === "quiz" &&
      questionIndex === 0 &&
      selectedOptionIndex === 0) ||
    phase === "result";

  const nextDisabled = phase === "result";

  return (
    <div className="maturity-lab">
      <div className="maturity-lab-grid" aria-hidden="true" />

      <div className="mx-auto max-w-[1180px] px-4 py-10 sm:px-6 sm:py-14 lg:py-20">
        <div className="mb-8 text-center sm:mb-10">
          <p className="font-[family-name:var(--font-geist-mono)] text-[11px] uppercase tracking-[0.18em] text-white/35">
            Agility AI · Diagnostic Unit
          </p>
          <h1 className="mt-3 font-[family-name:var(--font-serif)] text-[clamp(1.8rem,4vw,2.8rem)] leading-[1.08] tracking-[-0.02em] text-white">
            AI Maturity Check
          </h1>
          <p className="mx-auto mt-3 max-w-[48ch] text-[14px] leading-relaxed text-white/50 sm:text-[15px]">
            Use the controls on the console. Questions and choices appear on the
            screen — navigate with ◀ ▶, confirm with SELECT.
          </p>
        </div>

        <div className="maturity-rig">
          <div className="maturity-perforated" aria-hidden="true" />

          <div className="maturity-rig-layout">
            {/* Left rung modules */}
            <div className="maturity-rung-stack hidden lg:flex">
              {RUNGS.map((rung) => (
                <RungModule
                  key={rung.level}
                  rung={rung}
                  active={rung.level === activeRungLevel}
                  lit={
                    phase === "quiz"
                      ? answeredCount >= rung.level
                      : rung.level <= activeRungLevel
                  }
                />
              ))}
              <svg className="maturity-cable maturity-cable-left" viewBox="0 0 120 420" aria-hidden="true">
                <path d="M8 40 C 40 40, 60 80, 90 120 S 110 200, 118 280" fill="none" stroke="#e85d04" strokeWidth="5" strokeLinecap="round" />
                <path d="M8 120 C 42 120, 58 160, 92 200 S 112 280, 118 340" fill="none" stroke="#e85d04" strokeWidth="5" strokeLinecap="round" />
              </svg>
            </div>

            {/* Center console */}
            <div className="maturity-console">
              <div className="maturity-console-shell">
                <div className="maturity-console-bezel">
                  <div className="maturity-screen">
                    <DeviceScreen
                      phase={phase}
                      storyIndex={storyIndex}
                      questionIndex={questionIndex}
                      selectedOptionIndex={selectedOptionIndex}
                      answers={answers}
                      resultLevel={resultLevel}
                    />
                  </div>
                </div>

                <div className="maturity-controls">
                  <DeviceButton label="Previous option" onClick={onPrev} disabled={prevDisabled}>
                    <ArrowIcon direction="left" />
                  </DeviceButton>

                  <DeviceButton
                    label={
                      phase === "intro"
                        ? "Start"
                        : phase === "story"
                          ? storyIndex < STORY_CHAPTERS.length - 1
                            ? "Skip to quiz"
                            : "Start quiz"
                          : phase === "quiz"
                            ? "Confirm selection"
                            : "Retake check"
                    }
                    onClick={onSelect}
                    variant="rect"
                    disabled={phase === "result" ? false : false}
                  >
                    SELECT
                  </DeviceButton>

                  <DeviceButton label="Next option" onClick={onNext} disabled={nextDisabled}>
                    <ArrowIcon direction="right" />
                  </DeviceButton>
                </div>
              </div>
            </div>

            {/* Right output modules */}
            <div className="maturity-output-stack hidden lg:flex">
              <div className="maturity-cartridge-slot">
                <div className="maturity-cartridge maturity-cartridge-inserted" />
              </div>
              {RUNGS.slice(0, 3).map((rung) => (
                <div key={rung.level} className="maturity-output-module">
                  <p className="maturity-output-label">Output {String(rung.level).padStart(2, "0")}</p>
                  <p className="maturity-output-name">{rung.name}</p>
                  <div className="maturity-output-dots" aria-hidden="true">
                    {[1, 2, 3].map((dot) => (
                      <span
                        key={dot}
                        className={[
                          "maturity-output-dot",
                          activeRungLevel >= rung.level && dot <= rung.level
                            ? "maturity-output-dot-on"
                            : "",
                        ].join(" ")}
                      />
                    ))}
                  </div>
                </div>
              ))}
              <svg className="maturity-cable maturity-cable-right" viewBox="0 0 80 320" aria-hidden="true">
                <path d="M4 280 C 20 260, 30 220, 40 180 S 60 80, 72 20" fill="none" stroke="#111" strokeWidth="6" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>

        {/* Mobile rung strip */}
        <div className="mt-6 flex gap-2 overflow-x-auto pb-2 lg:hidden">
          {RUNGS.map((rung) => (
            <div
              key={rung.level}
              className={[
                "shrink-0 rounded-sm border px-3 py-2",
                rung.level === activeRungLevel
                  ? "border-[#e85d04] bg-white/10 text-white"
                  : "border-white/10 bg-white/5 text-white/45",
              ].join(" ")}
            >
              <p className="text-[9px] uppercase tracking-[0.12em]">Rung {rung.level}</p>
              <p className="text-[12px]">{rung.name}</p>
            </div>
          ))}
        </div>

        {/* Result CTAs */}
        {phase === "result" && result && (
          <div className="maturity-result-panel maturity-screen-enter">
            <p className="font-[family-name:var(--font-geist-mono)] text-[10px] uppercase tracking-[0.16em] text-white/40">
              Recommended next step
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href={result.ctaHref} className="maturity-result-cta maturity-result-cta-primary">
                {result.ctaLabel}
              </Link>
              {result.secondaryLabel && result.secondaryHref && (
                <Link href={result.secondaryHref} className="maturity-result-cta">
                  {result.secondaryLabel}
                </Link>
              )}
              <button type="button" onClick={onRetake} className="maturity-result-cta maturity-result-cta-ghost">
                Retake check
              </button>
            </div>
          </div>
        )}

        {/* Rungs reference */}
        <div className="mt-14 border-t border-white/10 pt-10">
          <p className="mb-5 font-[family-name:var(--font-geist-mono)] text-[11px] uppercase tracking-[0.16em] text-white/35">
            The five rungs
          </p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {RUNGS.map((rung) => (
              <article key={rung.level} className="maturity-rung-card">
                <p className="text-[10px] uppercase tracking-[0.14em] text-[#e85d04]">
                  Rung {rung.level}
                </p>
                <h3 className="mt-1 font-[family-name:var(--font-serif)] text-[1.05rem]">
                  {rung.name}
                </h3>
                <p className="mt-2 text-[12px] leading-relaxed text-white/50">
                  {rung.summary}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
