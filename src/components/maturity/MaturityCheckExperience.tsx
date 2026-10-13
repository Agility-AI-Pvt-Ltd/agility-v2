"use client";

import { useCallback, useEffect, useState } from "react";
import MaturityDevice, { type DevicePhase } from "@/components/maturity/MaturityDevice";
import {
  QUIZ_QUESTIONS,
  STORY_CHAPTERS,
  scoreToRungLevel,
  type RungLevel,
} from "@/lib/maturity-check";

export default function MaturityCheckExperience() {
  const [phase, setPhase] = useState<DevicePhase>("intro");
  const [storyIndex, setStoryIndex] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number | null>>(() =>
    Object.fromEntries(QUIZ_QUESTIONS.map((question) => [question.id, null])),
  );
  const [resultLevel, setResultLevel] = useState<RungLevel | null>(null);

  const currentQuestion = QUIZ_QUESTIONS[questionIndex];

  const syncSelectionToSavedAnswer = useCallback(
    (index: number) => {
      const question = QUIZ_QUESTIONS[index];
      const saved = answers[question.id];
      if (saved === null) {
        setSelectedOptionIndex(0);
        return;
      }
      const savedIndex = question.options.findIndex(
        (option) => option.weight === saved,
      );
      setSelectedOptionIndex(savedIndex >= 0 ? savedIndex : 0);
    },
    [answers],
  );

  const confirmCurrentOption = useCallback(() => {
    if (phase === "intro") {
      setPhase("story");
      return;
    }

    if (phase === "story") {
      setPhase("quiz");
      setQuestionIndex(0);
      syncSelectionToSavedAnswer(0);
      return;
    }

    if (phase === "quiz") {
      const option = currentQuestion.options[selectedOptionIndex];
      const nextAnswers = {
        ...answers,
        [currentQuestion.id]: option.weight,
      };
      setAnswers(nextAnswers);

      if (questionIndex < QUIZ_QUESTIONS.length - 1) {
        const nextIndex = questionIndex + 1;
        setQuestionIndex(nextIndex);
        const nextQuestion = QUIZ_QUESTIONS[nextIndex];
        const saved = nextAnswers[nextQuestion.id];
        if (saved === null) {
          setSelectedOptionIndex(0);
        } else {
          const savedIndex = nextQuestion.options.findIndex(
            (item) => item.weight === saved,
          );
          setSelectedOptionIndex(savedIndex >= 0 ? savedIndex : 0);
        }
        return;
      }

      const weights = QUIZ_QUESTIONS.map((question) =>
        question.id === currentQuestion.id
          ? option.weight
          : nextAnswers[question.id],
      ).filter((value): value is number => value !== null);

      setResultLevel(scoreToRungLevel(weights));
      setPhase("result");
    }
  }, [
    answers,
    currentQuestion,
    phase,
    questionIndex,
    selectedOptionIndex,
    syncSelectionToSavedAnswer,
  ]);

  const handlePrev = useCallback(() => {
    if (phase === "story") {
      setStoryIndex((index) => Math.max(0, index - 1));
      return;
    }

    if (phase === "quiz") {
      if (selectedOptionIndex > 0) {
        setSelectedOptionIndex((index) => index - 1);
        return;
      }

      if (questionIndex > 0) {
        const prevIndex = questionIndex - 1;
        setQuestionIndex(prevIndex);
        syncSelectionToSavedAnswer(prevIndex);
      }
    }
  }, [phase, questionIndex, selectedOptionIndex, syncSelectionToSavedAnswer]);

  const handleNext = useCallback(() => {
    if (phase === "intro") {
      setPhase("story");
      return;
    }

    if (phase === "story") {
      if (storyIndex < STORY_CHAPTERS.length - 1) {
        setStoryIndex((index) => index + 1);
      } else {
        setPhase("quiz");
        setQuestionIndex(0);
        syncSelectionToSavedAnswer(0);
      }
      return;
    }

    if (phase === "quiz") {
      const maxIndex = currentQuestion.options.length - 1;
      if (selectedOptionIndex < maxIndex) {
        setSelectedOptionIndex((index) => index + 1);
      } else {
        confirmCurrentOption();
      }
    }
  }, [
    confirmCurrentOption,
    currentQuestion.options.length,
    phase,
    selectedOptionIndex,
    storyIndex,
    syncSelectionToSavedAnswer,
  ]);

  const handleRetake = useCallback(() => {
    setPhase("intro");
    setStoryIndex(0);
    setQuestionIndex(0);
    setSelectedOptionIndex(0);
    setAnswers(
      Object.fromEntries(QUIZ_QUESTIONS.map((question) => [question.id, null])),
    );
    setResultLevel(null);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (phase === "result") return;

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        handlePrev();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        handleNext();
      } else if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        confirmCurrentOption();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [confirmCurrentOption, handleNext, handlePrev, phase]);

  return (
    <MaturityDevice
      phase={phase}
      storyIndex={storyIndex}
      questionIndex={questionIndex}
      selectedOptionIndex={selectedOptionIndex}
      answers={answers}
      resultLevel={resultLevel}
      onPrev={handlePrev}
      onNext={handleNext}
      onSelect={phase === "result" ? handleRetake : confirmCurrentOption}
      onRetake={handleRetake}
      onPickOption={setSelectedOptionIndex}
    />
  );
}
