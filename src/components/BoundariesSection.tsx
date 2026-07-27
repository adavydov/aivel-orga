const boundaries = [
  {
    counterpart: "Продукт",
    owns: [
      "Сегменты и задачи покупателя",
      "Позиционирование, оффер и упаковка",
      "Запуск, кейсы, демо и создание спроса",
    ],
    excludes:
      "Функциональность, качество, roadmap и реализация продукта.",
    metrics: [
      "Заявки и демо на ИИ-финдира",
      "Премия к рынку за счёт силы бренда — совместно с Продуктом и Коммерцией",
    ],
  },
  {
    counterpart: "Коммерция",
    owns: [
      "Рост собственной целевой базы",
      "Целевые обращения",
      "Доведение обращения до проведённой встречи",
    ],
    excludes:
      "Квалификация в продажах, предложение, договор и закрытие сделки.",
    metrics: [
      "Размер целевой базы в контактах",
      "Целевые обращения",
      "Проведённые встречи",
      "Объём Enterprise-воронки и выручка — совместно с Коммерцией",
    ],
  },
  {
    counterpart: "M&A",
    owns: [
      "Доверие и тёплая база владельцев",
      "Партнёрский нарратив Aivel",
      "Тёплые встречи с владельцами компаний",
    ],
    excludes:
      "Выбор целей, оценка, due diligence, переговоры и закрытие сделки.",
    metrics: [
      "Размер тёплой базы владельцев",
      "Встречи с владельцами",
      "Совокупная выручка тёплых компаний",
      "Фактический мультипликатор закрытых сделок — совместно с M&A",
    ],
  },
] as const;

export function BoundariesSection() {
  return (
    <section className="story-section" id="boundaries">
      <div className="section-index">
        <span>03</span>
        <h2>Границы маркетинга</h2>
      </div>

      <div className="section-body">
        <p className="section-lead">
          Маркетинг строит адресный спрос и доводит его до следующего шага. Ниже
          — где заканчивается его ответственность и чем измеряется результат.
        </p>

        <div className="boundary-table">
          {boundaries.map((boundary) => (
            <article className="boundary-row" key={boundary.counterpart}>
              <div className="boundary-cell">
                <span className="boundary-name">{boundary.counterpart}</span>
              </div>

              <div className="boundary-cell boundary-scope">
                <strong>Маркетинг отвечает за</strong>
                <ul>
                  {boundary.owns.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="boundary-exclusion">
                  <b>Не отвечает за:</b> {boundary.excludes}
                </p>
              </div>

              <div className="boundary-cell boundary-metrics">
                <strong>Метрики</strong>
                <ul>
                  {boundary.metrics.map((metric) => (
                    <li key={metric}>{metric}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <p className="org-note">
          Числовые цели фиксируются вместе с ресурсной рамкой. Совместная
          outcome-метрика не переносит на маркетинг ответственность за продукт,
          продажу или закрытие M&amp;A-сделки.
        </p>
      </div>
    </section>
  );
}
