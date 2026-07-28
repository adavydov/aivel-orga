const handoffs = [
  {
    channel: "Собственная база",
    marketing: [
      "Собирает и сегментирует базу предпринимателей",
      "Прогревает её выступлениями, вебинарами, контентом и email-цепочками",
      "Формирует повод и оффер для контакта",
    ],
    sales: [
      "Выбирают приоритетные сегменты и аккаунты",
      "Ведут исходящие касания и звонки",
      "Квалифицируют, проводят встречи и закрывают договоры",
    ],
    metrics: [
      "Размер адресной базы",
      "Контакты → встречи",
      "Выручка из собственной базы",
    ],
  },
  {
    channel: "Inbound",
    marketing: [
      "Создаёт поток через SEO / GEO, performance, лендинги и контент",
      "Фиксирует целевое обращение и его источник",
      "Организует проведённую первую встречу",
    ],
    sales: [
      "Принимают проведённую встречу",
      "Квалифицируют задачу, клиента и бюджет",
      "Готовят предложение и закрывают договор",
    ],
    metrics: [
      "Целевые обращения",
      "Проведённые встречи",
      "Встреча → договор",
      "Inbound revenue",
    ],
  },
  {
    channel: "Партнёры",
    marketing: [
      "Развивает лидеров мнений, компании с аудиторией СМБ и сообщества",
      "Создаёт партнёрский нарратив, контент и совместные события",
      "Активирует партнёра и приводит лид в коммерческий контур",
    ],
    sales: [
      "Согласуют коммерческую модель и правила передачи лидов",
      "Ведут совместную воронку с партнёром",
      "Принимают лид, проводят встречу и закрывают сделку",
    ],
    metrics: [
      "Активные партнёры с лидами",
      "Партнёрские встречи",
      "Partner-sourced revenue",
    ],
  },
  {
    channel: "Действующие клиенты",
    marketing: [
      "Упаковывает офферы, кейсы и материалы для клиентских кампаний",
      "Поддерживает коммуникации для upsell, cross-sell и win-back",
    ],
    sales: [
      "Владеют клиентом и планом выручки",
      "Управляют удержанием, ценой, чеком, cross-sell и win-back",
      "Отвечают за договор и фактическую выручку",
    ],
    metrics: [
      "Удержанная выручка и churn",
      "Рост среднего чека",
      "Cross-sell revenue",
      "Win-back revenue",
    ],
  },
] as const;

export function CommercialBoundariesSection() {
  return (
    <section className="story-section" id="boundaries">
      <div className="section-index">
        <span>03</span>
        <h2>Стык с маркетингом</h2>
      </div>

      <div className="section-body">
        <p className="section-lead">
          Маркетинг создаёт и прогревает адресный спрос. Продажи входят в
          контакт и отвечают за конверсию в договор и выручку.
        </p>

        <div className="handoff-table">
          {handoffs.map((handoff) => (
            <article className="handoff-row" key={handoff.channel}>
              <div className="handoff-cell handoff-channel">
                <span className="boundary-name">{handoff.channel}</span>
              </div>

              <div className="handoff-cell">
                <strong>Маркетинг</strong>
                <ul>
                  {handoff.marketing.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="handoff-cell">
                <strong>Продажи</strong>
                <ul>
                  {handoff.sales.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="handoff-cell handoff-metrics">
                <strong>Метрики стыка</strong>
                <ul>
                  {handoff.metrics.map((metric) => (
                    <li key={metric}>{metric}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="handoff-rule">
          <strong>Правило передачи</strong>
          <p>
            Маркетинг отвечает за базу, повод и проведённую первую встречу.
            Продажи — за квалификацию, предложение, договор и выручку.
          </p>
        </div>

        <p className="org-note">
          Продукт и Delivery отвечают за функциональность, SLA и исполнение.
          Продажи — за цену, коммерческое обещание, договор и выручку.
        </p>
      </div>
    </section>
  );
}
