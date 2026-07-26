import type { Boundary } from "@/types/content";

const boundaries: Boundary[] = [
  {
    counterpart: "Продукт",
    marketingOwns:
      "Сегмент, позиционирование, оффер, упаковка, запуск и спрос.",
    counterpartOwns:
      "Функциональность, качество, roadmap и реализация продуктовой возможности.",
    sharedSeam:
      "Обещание запуска и доказательства соответствуют тому, что реально делает продукт.",
  },
  {
    counterpart: "Коммерция",
    marketingOwns:
      "Собственная база, спрос, целевое обращение и создание встречи.",
    counterpartOwns:
      "Квалификация в продажах, предложение, договор и выручка.",
    sharedSeam:
      "Проведённая целевая встреча: понятны источник, сегмент и оффер.",
  },
  {
    counterpart: "M&A",
    marketingOwns:
      "Доверие, тёплая аудитория собственников, партнёрский нарратив и тёплые встречи.",
    counterpartOwns:
      "Выбор целей, оценка, DD, переговоры и закрытие.",
    sharedSeam:
      "Выручка тёплых компаний и фактический мультипликатор покупки.",
  },
];

export function BoundariesSection() {
  return (
    <section className="story-section" id="boundaries">
      <div className="section-index">
        <span>05</span>
        <h2>Границы</h2>
      </div>

      <div className="section-body">
        <p className="section-lead">
          Маркетинг не подменяет Продукт, Коммерцию или M&amp;A. На каждом
          стыке есть свой результат передачи.
        </p>

        <div className="boundary-table">
          {boundaries.map((boundary) => (
            <div className="boundary-row" key={boundary.counterpart}>
              <div className="boundary-cell">
                <span className="boundary-name">{boundary.counterpart}</span>
              </div>
              <div className="boundary-cell">
                <strong>Маркетинг</strong>
                <p>{boundary.marketingOwns}</p>
              </div>
              <div className="boundary-cell">
                <strong>{boundary.counterpart}</strong>
                <p>{boundary.counterpartOwns}</p>
              </div>
              <div className="boundary-cell seam">
                <strong>Общий стык</strong>
                <p>{boundary.sharedSeam}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
