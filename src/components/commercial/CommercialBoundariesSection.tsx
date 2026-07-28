const boundaries = [
  {
    counterpart: "Маркетинг",
    owns: [
      "Inbound: от проведённой целевой встречи до договора",
      "Outbound: от адресного контакта до договора",
      "Partners: от принятого лида до договора",
    ],
    excludes:
      "Публичные коммуникации, развитие маркетинговой базы, кампании и создание входящего спроса.",
    metrics: [
      "Новая выручка и валовая маржа",
      "Конверсия в договор по источнику",
      "Длина цикла сделки",
    ],
  },
  {
    counterpart: "Продукт и Delivery",
    owns: [
      "Удержание и коммерческий план по клиенту",
      "Цена, рост чека, upsell и cross-sell",
      "Win-back и полная передача проданного scope",
    ],
    excludes:
      "Roadmap, функциональность, внедрение, SLA и операционное качество сервиса.",
    metrics: [
      "Удержанная выручка и churn",
      "Рост среднего чека",
      "Cross-sell revenue",
      "Win-back revenue",
    ],
  },
  {
    counterpart: "Данные",
    owns: [
      "Единые стадии и обязательные поля CRM",
      "Качество и своевременность данных",
      "Решения по сигналам цифровой аналитики",
    ],
    excludes:
      "Ручное производство отчётов и отдельный штат аналитиков.",
    metrics: [
      "Полнота CRM",
      "Точность прогноза",
      "Pipeline coverage",
      "Доля потерь с указанной причиной",
    ],
  },
] as const;

export function CommercialBoundariesSection() {
  return (
    <section className="story-section" id="boundaries">
      <div className="section-index">
        <span>03</span>
        <h2>Границы и метрики</h2>
      </div>

      <div className="section-body">
        <p className="section-lead">
          Продажи отвечают за новую и действующую выручку СМБ. Маркетинг создаёт
          спрос, Продукт и Delivery исполняют обещание, цифровой контур даёт
          данные для решений.
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
          метрика не переносит на продажи ответственность за чужую функцию.
        </p>
      </div>
    </section>
  );
}
