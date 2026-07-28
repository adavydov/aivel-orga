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
    channel: "Partner Sales",
    marketing: [
      "Не владеет каналом и не отвечает за поиск партнёров",
      "После запуска поддерживает канал материалами и co-marketing по запросу коммерции",
    ],
    sales: [
      "Самостоятельно находят банки, платформы и компании с базой клиентов СМБ",
      "Договариваются об экономике, механике передачи лидов и подписывают соглашение",
      "Запускают поток, ведут партнёра и закрывают полученные сделки",
    ],
    metrics: [
      "Активные партнёры с выручкой",
      "Лиды и встречи от партнёров",
      "Партнёрская выручка и маржа",
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
          Маркетинг создаёт и прогревает собственную базу и inbound. Partner
          Sales — самостоятельный коммерческий канал: продажи сами находят
          партнёров, запускают поток и отвечают за выручку.
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
            В собственной базе и inbound маркетинг отвечает за адресный спрос
            и проведённую первую встречу. В партнёрском канале продажи владеют
            всем циклом — от выбора партнёра до фактической выручки.
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
