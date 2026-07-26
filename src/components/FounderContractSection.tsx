const ceoCommitments = [
  "Держит порядок приоритетов явным.",
  "Задаёт стратегическую и ресурсную рамку.",
  "Даёт доступ к продукту, экспертам, кейсам и согласованным позициям по сделкам.",
  "Принимает финальное решение, когда обещание продукта, публичный тезис или условия M&A меняют риск компании.",
];

const directorCommitments = [
  "Собирает функции и рабочую систему.",
  "Выбирает каналы и способы исполнения внутри согласованной рамки.",
  "Не растворяет Product Marketing в Digital.",
  "Даёт согласованные результаты по базе, обращениям, встречам и совместным M&A-метрикам.",
];

const jointDecisions = [
  "Продуктовый оффер и обещание запуска",
  "Распределение ресурсов между тремя приоритетами",
  "Заявления, влияющие на enterprise-delivery или экономику M&A",
];

export function FounderContractSection() {
  return (
    <section className="story-section" id="contract">
      <div className="section-index">
        <span>07</span>
        <h2>Контракт CEO ↔ директор</h2>
      </div>

      <div className="section-body">
        <p className="section-lead">
          Роль работает только как двусторонний контракт: у директора есть
          мандат собрать систему, у CEO — обязанность держать рамку и развязывать
          ключевые решения.
        </p>

        <div className="contract-panel">
          <article aria-labelledby="ceo-contract-title">
            <strong id="ceo-contract-title">CEO</strong>
            <ul>
              {ceoCommitments.map((commitment) => (
                <li key={commitment}>{commitment}</li>
              ))}
            </ul>
          </article>

          <div className="contract-arrow" aria-hidden="true">
            ↔
          </div>

          <article aria-labelledby="director-contract-title">
            <strong id="director-contract-title">Директор</strong>
            <ul>
              {directorCommitments.map((commitment) => (
                <li key={commitment}>{commitment}</li>
              ))}
            </ul>
          </article>
        </div>

        <p className="tag">Совместные решения</p>
        <div className="joint-grid">
          {jointDecisions.map((decision) => (
            <span key={decision}>{decision}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
