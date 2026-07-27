const priorities = [
  "СМБ",
  "Enterprise",
  "Бух-аутсорс",
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

        <div className="metric-grid cols-3 hero-metrics" aria-label="Три сегмента">
          {priorities.map((priority) => (
            <div className="metric-card" key={priority}>
              <strong>{priority}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
