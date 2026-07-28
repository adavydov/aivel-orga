export function CommercialTargetOrgSection() {
  return (
    <section className="story-section" id="org">
      <div className="section-index">
        <span>02</span>
        <h2>Целевая орга</h2>
      </div>

      <div className="section-body">
        <p className="section-lead">
          Два владельца выручки под одним директором. Аналитика — отдельная
          цифровая функция, а не штат ручных аналитиков.
        </p>

        <div className="org-root">
          <span className="tag">Role owner</span>
          <strong>SMB Sales Director</strong>
        </div>

        <div className="org-branches smb-org-branches">
          <div className="org-branch">
            <strong>Действующая база</strong>

            <div className="org-segment">
              <span>Owner</span>
              <div className="org-roles">
                <div className="org-role">
                  Head of Customer Revenue
                  <small>
                    Account Managers
                    <br />
                    Win-back &amp; Cross-sell Managers
                  </small>
                </div>
              </div>
            </div>
          </div>

          <div className="org-branch">
            <strong>Новые клиенты</strong>
            <div className="org-segment">
              <span>Owner</span>
              <div className="org-roles">
                <div className="org-role">
                  Head of New SMB Sales
                  <small>
                    Inbound Sales Managers
                    <br />
                    Outbound Sales Managers
                    <br />
                    Partner Sales Managers
                  </small>
                </div>
              </div>
            </div>
          </div>

          <div className="org-branch shared-functions">
            <strong>Аналитика продаж</strong>

            <div className="org-segment">
              <span>Digital</span>
              <div className="org-roles">
                <div className="org-role">
                  Digital Sales Analytics
                  <small>
                    Funnel &amp; Revenue
                    <br />
                    Forecast &amp; Alerts
                    <br />
                    Churn &amp; Growth Signals
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="org-note">
          На старте директор может напрямую вести оба коммерческих контура.
          Команды расширяются по нагрузке; цифровая аналитика масштабируется
          автоматически, а не через найм аналитиков.
        </p>
      </div>
    </section>
  );
}
