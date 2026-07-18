"use client";

import { useState } from "react";
import type { FaqItem } from "@/lib/faq";

type FaqAccordionProps = {
  items: readonly FaqItem[];
};

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <ul className="faq-list">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `faq-panel-${index}`;
        const buttonId = `faq-button-${index}`;

        return (
          <li
            key={item.question}
            className={[
              "faq-item",
              isOpen ? "faq-item-open" : "",
            ].join(" ")}
          >
            <button
              type="button"
              id={buttonId}
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="faq-trigger"
            >
              <span className="faq-index" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="faq-question">{item.question}</span>
              <span className="faq-icon" aria-hidden="true">
                <span className="faq-icon-h" />
                <span className="faq-icon-v" />
              </span>
            </button>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className="faq-panel"
              hidden={!isOpen}
            >
              <p className="faq-answer">{item.answer}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
