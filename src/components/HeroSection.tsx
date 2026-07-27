const priorities = [
  {
    segment: "СМБ",
    focus: "Органический рост и новый продукт",
  },
  {
    segment: "Enterprise",
    focus: "Enterprise AI software",
  },
  {
    segment: "Бух-аутсорс",
    focus: "Roll-up через партнёрства и M&A",
  },
];

export function HeroSection() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="shell">
        <p className="eyebrow">КОНТРАКТ РОЛИ · CEO ↔ ДИРЕКТОР ПО МАРКЕТИНГУ</p>
        <h1 id="hero-title">Построить три измеримые машины спроса</h1>
        <p className="hero-copy">
          Aivel одновременно развивает новый продукт для СМБ, продаёт Enterprise
          AI software и строит roll-up бухгалтерского аутсорсинга. Порядок
          фокуса: СМБ → Enterprise → бух-аутсорс.
        </p>

        <div className="metric-grid cols-3 hero-metrics" aria-label="Три сегмента">
          {priorities.map((priority) => (
            <div className="metric-card" key={priority.segment}>
              <strong>{priority.segment}</strong>
              <span>{priority.focus}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
