const revenueMotions = [
  {
    name: "Inbound",
    focus: "Тёплый СМБ и новый продукт",
  },
  {
    name: "Partners",
    focus: "Партнёрский канал",
  },
  {
    name: "Enterprise",
    focus: "Новые крупные клиенты",
  },
  {
    name: "KAM",
    focus: "Удержание и развитие",
  },
];

export function CommercialHeroSection() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="shell">
        <p className="eyebrow">
          КОНТРАКТ РОЛИ · CEO ↔ КОММЕРЧЕСКИЙ ДИРЕКТОР
        </p>
        <h1 id="hero-title">Построить четыре измеримые машины выручки</h1>
        <p className="hero-copy">
          У Aivel три сегмента, но четыре коммерческих движения: единый Inbound
          для тёплого СМБ и нового продукта, партнёрский канал, Enterprise New
          Business и KAM действующих клиентов.
        </p>

        <div
          className="metric-grid cols-4 hero-metrics"
          aria-label="Четыре машины выручки"
        >
          {revenueMotions.map((motion) => (
            <div className="metric-card" key={motion.name}>
              <strong>{motion.name}</strong>
              <span>{motion.focus}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
