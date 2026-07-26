const contexts = [
  {
    tag: "Новый продукт",
    title: "ИИ-финдир для собственника СМБ",
  },
  {
    tag: "Enterprise Software",
    title: "ИИ-агенты для финансовых процессов",
  },
  {
    tag: "Roll-up",
    title: "Партнёрство и сделки с бухгалтерскими компаниями",
  },
];

const priorities = [
  {
    index: "01",
    title: "СМБ",
    description: "Собственная база предпринимателей и спрос на ИИ-финдира",
  },
  {
    index: "02",
    title: "Enterprise",
    description: "Отношения и встречи с целевыми ЛПР",
  },
  {
    index: "03",
    title: "Бух-аутсорс",
    description: "Тёплый поток владельцев и компаний для партнёрства и M&A",
  },
];

export function ContextFocusSection() {
  return (
    <>
      <section className="story-section" id="context" aria-labelledby="context-title">
        <aside className="section-index" aria-label="Раздел 01">
          <span>01</span>
          <h2 id="context-title">Контекст</h2>
        </aside>

        <div className="section-body">
          <p className="section-lead">
            Aivel одновременно запускает новый продукт, продаёт корпоративный
            ИИ-софт и консолидирует бухгалтерский аутсорсинг. Это не одна воронка
            и не один покупатель.
          </p>

          <div className="panel-grid cols-3">
            {contexts.map((context) => (
              <article className="panel" key={context.tag}>
                <span className="tag">{context.tag}</span>
                <strong>{context.title}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="story-section" id="focus" aria-labelledby="focus-title">
        <aside className="section-index" aria-label="Раздел 02">
          <span>02</span>
          <h2 id="focus-title">Фокус</h2>
        </aside>

        <div className="section-body">
          <p className="section-lead">
            Порядок фокуса — это порядок внимания и ресурсов, а не список
            равноправных инициатив.
          </p>

          <div className="priority-grid" aria-label="Порядок фокуса">
            {priorities.map((priority) => (
              <article className="priority-step" key={priority.index}>
                <span>{priority.index}</span>
                <strong>{priority.title}</strong>
                <p>{priority.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
