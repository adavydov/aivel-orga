export function CommercialTargetOrgSection() {
  return (
    <section className="story-section" id="org">
      <div className="section-index">
        <span>02</span>
        <h2>Целевая орга</h2>
      </div>

      <div className="section-body">
        <p className="section-lead">
          Четыре владельца коммерческих движений под одним владельцем выручки.
          Это полный набор функций; численность растёт вместе с объёмом воронки.
        </p>

        <div className="org-root">
          <span className="tag">Role owner</span>
          <strong>Commercial Director</strong>
        </div>

        <div className="org-branches">
          <div className="org-branch">
            <strong>Новая выручка</strong>

            <div className="org-segment">
              <span>Inbound</span>
              <div className="org-roles">
                <div className="org-role">
                  Head of Inbound Sales
                  <small>Inbound Sales Managers</small>
                </div>
              </div>
            </div>

            <div className="org-segment">
              <span>Partners</span>
              <div className="org-roles">
                <div className="org-role">
                  Head of Partner Sales
                  <small>Partner Sales Managers</small>
                </div>
              </div>
            </div>

            <div className="org-segment">
              <span>Enterprise</span>
              <div className="org-roles">
                <div className="org-role">
                  Head of Enterprise New Business
                  <small>
                    Enterprise New Biz Managers
                    <br />
                    Presales / Solution Consultant
                  </small>
                </div>
              </div>
            </div>
          </div>

          <div className="org-branch shared-functions">
            <strong>Действующая выручка</strong>

            <div className="org-segment">
              <span>KAM</span>
              <div className="org-roles">
                <div className="org-role">
                  Head of Key Account Management
                  <small>Key Account Managers</small>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="org-note">
          На старте один руководитель может совмещать несколько ячеек.
          Presales остаётся внутри Enterprise; отдельного Product Sales и
          дублирующего Enterprise Account Management нет.
        </p>
      </div>
    </section>
  );
}
