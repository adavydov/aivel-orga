import type { Metric } from "@/types/content";

const universalMetrics: Metric[] = [
  {
    value: "База",
    label: "Размер целевой собственной базы",
  },
  {
    value: "Обращения",
    label: "Целевые входящие обращения",
  },
  {
    value: "Встречи",
    label: "Проведённые целевые встречи",
  },
];

const segmentMetrics = [
  {
    contour: "SMB",
    base: "Количество целевых контактов предпринимателей",
    inquiries: "Заявки на ИИ-финдира",
    meetings: "Демо / встречи",
    downstream: "Возможность прайсить выше рынка за счёт силы бренда",
  },
  {
    contour: "Enterprise",
    base: "Целевые аккаунты и ЛПР",
    inquiries: "Целевые обращения",
    meetings: "Встречи с целевыми ролями",
    downstream: "Объём целевой воронки и выручка",
  },
  {
    contour: "Бух-аутсорс",
    base: "Владельцы и компании",
    inquiries: "Тёплые компании + их совокупная выручка",
    meetings: "Встречи с владельцами",
    downstream:
      "Фактический мультипликатор закрытых сделок из маркетингового контура",
  },
] as const;

export function MetricsSection() {
  return (
    <section className="story-section" id="metrics">
      <div className="section-index">
        <span>06</span>
        <h2>Метрики</h2>
      </div>

      <div className="section-body">
        <p className="section-lead">
          Система измеряется не охватами, а ростом адресного актива и движением
          к следующему коммерческому шагу.
        </p>

        <div className="metric-grid cols-3 metrics-summary">
          {universalMetrics.map((metric) => (
            <div className="metric-card" key={metric.value}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </div>

        <table className="metric-table">
          <thead>
            <tr>
              <th scope="col">Контур</th>
              <th scope="col">База</th>
              <th scope="col">Обращения</th>
              <th scope="col">Встречи</th>
              <th scope="col">Итог</th>
            </tr>
          </thead>
          <tbody>
            {segmentMetrics.map((metric) => (
              <tr key={metric.contour}>
                <th scope="row">{metric.contour}</th>
                <td>{metric.base}</td>
                <td>{metric.inquiries}</td>
                <td>{metric.meetings}</td>
                <td>{metric.downstream}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <p className="org-note">
          Числовые цели фиксируются вместе с ресурсной рамкой. До этого перед
          нами карта измерения роли, а не готовая бонусная схема. Премия к рынку
          и выручка Enterprise — совместные результаты с Продуктом и Коммерцией.
        </p>

        <p className="callout">
          Маркетинг снижает цену входа не торгом, а ценностью присоединения. При
          сопоставимом качестве компании более низкий фактический мультипликатор
          означает, что Aivel был продан собственнику как более ценный следующий
          шаг.
          <small>
            Выручка и мультипликатор — совместные outcome-метрики с M&amp;A.
            Оценка и закрытие сделки остаются в M&amp;A.
          </small>
        </p>
      </div>
    </section>
  );
}
