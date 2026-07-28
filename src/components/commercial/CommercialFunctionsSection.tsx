const functionGroups = [
  {
    label: "Действующая база",
    items: [
      {
        name: "Retention & Renewals",
        description:
          "Удержание клиентов, продления, ранняя работа с риском ухода и персональный план по ключевым клиентам.",
      },
      {
        name: "Price & Check Growth",
        description:
          "Рост цены и среднего чека через перепаковку условий, upsell и устранение ценовых утечек.",
      },
      {
        name: "Cross-sell",
        description:
          "Продажа действующим клиентам дополнительных сервисов и программных продуктов Aivel.",
      },
      {
        name: "Win-back",
        description:
          "Возврат ушедших и неактивных клиентов по причинам ухода, ценности и потенциалу выручки.",
      },
    ],
  },
  {
    label: "Новые клиенты",
    items: [
      {
        name: "Inbound Sales",
        description:
          "Входящие обращения и рекомендации: квалификация, диагностика, предложение и договор.",
      },
      {
        name: "Outbound Sales",
        description:
          "Адресный исходящий контакт по собственной базе не-клиентов и целевым спискам СМБ.",
      },
      {
        name: "Partner Sales",
        description:
          "Подключение партнёров, правила передачи лидов, совместная воронка и закрытие партнёрских сделок.",
      },
    ],
  },
  {
    label: "Аналитика продаж",
    shared: true,
    items: [
      {
        name: "Единая модель выручки",
        description:
          "Выручка и воронка по базе / новым клиентам, источнику, продукту, менеджеру и когорте.",
      },
      {
        name: "Digital Sales Analytics",
        description:
          "Цифровой контур ведёт прогноз, находит потери, churn-риски и точки роста. Отдельной команды ручных аналитиков нет.",
      },
    ],
  },
];

export function CommercialFunctionsSection() {
  return (
    <section className="story-section" id="functions">
      <div className="section-index">
        <span>01</span>
        <h2>Функции</h2>
      </div>

      <div className="section-body">
        <p className="section-lead">
          Две команды создают выручку: одна развивает действующих клиентов,
          вторая приводит новых. Единый цифровой контур показывает, где
          теряются деньги и куда направить усилия.
        </p>

        <div className="subsection first">
          {functionGroups.map((group) => (
            <div
              className={`function-group${group.shared ? " shared" : ""}`}
              key={group.label}
            >
              <div className="function-label">{group.label}</div>
              <div className="function-list">
                {group.items.map((item) => (
                  <div className="function-item" key={item.name}>
                    <strong>{item.name}</strong>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
