const priorities = [
  { value: "01", label: "СМБ" },
  { value: "02", label: "Enterprise" },
  { value: "03", label: "Бух-аутсорс" },
  { value: "2", label: "общие функции" },
];

export function HeroSection() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="shell">
        <p className="eyebrow">КОНТРАКТ РОЛИ · CEO ↔ ДИРЕКТОР ПО МАРКЕТИНГУ</p>
        <h1 id="hero-title">Построить три измеримые машины спроса</h1>
        <p className="hero-copy">
          Сначала СМБ. Затем Enterprise. Затем бух-аутсорс. Product Marketing
          нового направления и бренд связывают их в одну систему Aivel.
        </p>

        <div className="metric-grid cols-4 hero-metrics" aria-label="Архитектура мандата">
          {priorities.map((priority) => (
            <div className="metric-card" key={priority.label}>
              <strong>{priority.value}</strong>
              <span>{priority.label}</span>
            </div>
          ))}
        </div>

        <div className="hero-actions">
          <a className="button primary" href="#functions">
            Смотреть мандат
          </a>
          <a className="button" href="#boundaries">
            Границы роли
          </a>
        </div>
      </div>
    </section>
  );
}
