const revenueSystem = [
  {
    name: "База",
    focus: "Удержание · чек · win-back · cross-sell",
  },
  {
    name: "Новые",
    focus: "Inbound · Outbound · Partners",
  },
  {
    name: "Аналитика",
    focus: "CRM · прогноз · управленческие сигналы",
  },
];

export function CommercialHeroSection() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="shell">
        <p className="eyebrow">
          КОНТРАКТ РОЛИ · CEO ↔ ДИРЕКТОР ПО ПРОДАЖАМ СМБ
        </p>
        <h1 id="hero-title">Построить продажи СМБ как систему</h1>
        <p className="hero-copy">
          Aivel строит AI roll-up бухгалтерского аутсорсинга на собственной
          технологической платформе. За полгода собрали более 400 млн ₽
          выручки. Эта роль отвечает только за продажи СМБ: действующая база и
          новые клиенты.
        </p>

        <div
          className="metric-grid cols-3 hero-metrics"
          aria-label="Система продаж СМБ"
        >
          {revenueSystem.map((part) => (
            <div className="metric-card" key={part.name}>
              <strong>{part.name}</strong>
              <span>{part.focus}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
