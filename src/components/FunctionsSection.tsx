const functionGroups = [
  {
    label: "СМБ · машина спроса",
    items: [
      {
        name: "Публичные коммуникации и развитие базы",
        description:
          "Медиа, выступления, вебинары и полезные материалы собирают собственную базу предпринимателей как актив.",
      },
      {
        name: "Digital Marketing",
        description:
          "Лендинги, SEO / GEO, платное привлечение и digital-воронки нового продукта «ИИ-финдир».",
      },
    ],
  },
  {
    label: "Enterprise · машина спроса",
    items: [
      {
        name: "Network Marketing",
        description:
          "Отраслевые события, бизнес-клубы, доверенные знакомства, отношения с ЛПР и истории коллег.",
      },
    ],
  },
  {
    label: "Бух-аутсорс · машина спроса",
    items: [
      {
        name: "Influencer Marketing",
        description:
          "Работа с лидерами мнений, у которых есть доверие владельцев бухгалтерских компаний.",
      },
      {
        name: "Corporate Partnerships",
        description:
          "Партнёрства с компаниями и организациями, имеющими аудиторию бухгалтеров.",
      },
      {
        name: "Community Marketing",
        description:
          "Профессиональные сообщества, бизнес-клубы и события для владельцев бухгалтерских компаний.",
      },
    ],
  },
  {
    label: "Общая функция",
    shared: true,
    items: [
      {
        name: "Product Marketing нового направления",
        description:
          "Сегменты и задачи покупателя; позиционирование; оффер; упаковка; запуск; кейсы, демо и материалы для продаж. Два рыночных пакета: ИИ-финдир для СМБ и enterprise AI software.",
      },
    ],
  },
  {
    label: "Бренд",
    shared: true,
    items: [
      {
        name: "Brand Management",
        description:
          "Корпоративный и продуктовый бренд, единая репутация и узнаваемость Aivel во всех трёх контурах.",
      },
    ],
  },
];

export function FunctionsSection() {
  return (
    <section className="story-section" id="functions">
      <div className="section-index">
        <span>01</span>
        <h2>Функции</h2>
      </div>

      <div className="section-body">
        <p className="section-lead">
          Три сегмента — три разные машины спроса. Product Marketing и бренд
          работают поперёк всей системы.
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
