const boundaries = [
  {
    counterpart: "Маркетинг",
    owns: [
      "Принять проведённую целевую встречу",
      "Провести sales-квалификацию",
      "Зафиксировать возможность и следующий шаг",
    ],
    excludes:
      "Рост базы, каналы коммуникации, кампании, создание обращения и организация первой встречи.",
    metrics: [
      "Встреча → квалифицированная возможность",
      "Возможность → договор",
      "Выручка по источнику спроса",
    ],
  },
  {
    counterpart: "Продукт",
    owns: [
      "Проблема клиента и business case",
      "Коммерческий scope и условия",
      "Продажа доступного продукта и рамка пилота",
    ],
    excludes:
      "Roadmap, функциональность, качество продукта и реализация разработки.",
    metrics: [
      "Выручка нового продукта",
      "Win rate",
      "Пилот → договор",
      "Длина цикла сделки",
    ],
  },
  {
    counterpart: "Delivery",
    owns: [
      "Полная передача проданного scope",
      "Владелец отношений с ключевым клиентом",
      "Продление, upsell, cross-sell и расширение",
    ],
    excludes:
      "Внедрение, SLA, качество сервиса и операционное исполнение обязательств.",
    metrics: [
      "Удержанная выручка",
      "Выручка расширения",
      "Churn",
      "Валовая маржа проданного — совместно с Delivery",
    ],
  },
  {
    counterpart: "M&A",
    owns: [
      "Коммерческое партнёрство и клиентская сделка",
      "Распознать интерес владельца к сделке с капиталом",
      "Передать владельца в M&A с контекстом",
    ],
    excludes:
      "Выбор целей, оценка, due diligence, переговоры о капитале и закрытие M&A-сделки.",
    metrics: [
      "Выручка партнёрского канала",
      "Встречи владельцев, переданные в M&A",
    ],
  },
] as const;

export function CommercialBoundariesSection() {
  return (
    <section className="story-section" id="boundaries">
      <div className="section-index">
        <span>03</span>
        <h2>Границы коммерции</h2>
      </div>

      <div className="section-body">
        <p className="section-lead">
          Коммерция отвечает за конверсию в договор и выручку. Она не подменяет
          создание спроса, продукт, исполнение или M&amp;A.
        </p>

        <div className="boundary-table">
          {boundaries.map((boundary) => (
            <article className="boundary-row" key={boundary.counterpart}>
              <div className="boundary-cell">
                <span className="boundary-name">{boundary.counterpart}</span>
              </div>

              <div className="boundary-cell boundary-scope">
                <strong>Коммерция отвечает за</strong>
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
          Числовые цели и SLA фиксируются вместе с ресурсной рамкой. Совместная
          метрика не переносит на коммерцию ответственность за чужую функцию.
        </p>
      </div>
    </section>
  );
}
