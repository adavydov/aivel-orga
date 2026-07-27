const functionGroups = [
  {
    label: "Новая выручка",
    items: [
      {
        name: "Inbound Sales",
        description:
          "Единая очередь тёплых обращений: СМБ, рекомендации и новый продукт. Квалификация, discovery, демо, предложение, договор.",
      },
      {
        name: "Partner Sales",
        description:
          "Подключение партнёров, совместная воронка, правила передачи лидов, экономика канала и закрытие партнёрских сделок.",
      },
      {
        name: "Enterprise New Business",
        description:
          "Целевые аккаунты, выход на ЛПР и чемпиона, диагностика, платный пилот, business case, закупка и договор.",
      },
      {
        name: "Presales",
        description:
          "Собирает решение и рамку пилота для сложной сделки. Это поддержка Enterprise-продажи, а не отдельный Product Sales.",
      },
    ],
  },
  {
    label: "Действующая выручка",
    items: [
      {
        name: "Key Account Management",
        description:
          "Один владелец отношений с действующим ключевым клиентом: продление, удержание, upsell, cross-sell и расширение.",
      },
    ],
  },
  {
    label: "Общая функция",
    shared: true,
    items: [
      {
        name: "Sales Management",
        description:
          "Единые стадии CRM, правила квалификации, прогноз, deal review, коммерческие условия и дисциплина следующего шага.",
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
          Коммерция принимает созданный спрос и превращает его в договоры,
          выручку и развитие клиентов. Product Sales не выделяется: весь
          входящий спрос идёт через Inbound.
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
