"use client";

import { useState } from "react";

function fallbackCopy(text: string) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();

  let copied = false;

  try {
    copied = document.execCommand("copy");
  } finally {
    document.body.removeChild(textarea);
  }

  return copied;
}

export function ClosingSection() {
  const [copied, setCopied] = useState(false);

  async function copyLink() {
    const link = window.location.href;
    let didCopy = false;

    if (navigator.clipboard?.writeText) {
      try {
        await navigator.clipboard.writeText(link);
        didCopy = true;
      } catch {
        didCopy = fallbackCopy(link);
      }
    } else {
      didCopy = fallbackCopy(link);
    }

    if (didCopy) {
      setCopied(true);
    }
  }

  return (
    <section className="story-section" id="closing">
      <div className="section-index">
        <span>08</span>
        <h2>Следующий шаг</h2>
      </div>

      <div className="section-body">
        <h3 className="closing-title">Совпали — обсуждаем ресурсы и старт</h3>
        <p className="closing-copy">
          Если контекст, порядок фокуса, функции, границы и метрики прочитаны
          одинаково, следующий разговор нужен не для расшифровки роли, а для
          фиксации условий работы.
        </p>
        <div className="hero-actions">
          <button className="button primary" onClick={copyLink} type="button">
            {copied ? "Ссылка скопирована" : "Скопировать ссылку"}
          </button>
        </div>
      </div>
    </section>
  );
}
