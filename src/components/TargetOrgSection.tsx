export function TargetOrgSection() {
  return (
    <section className="story-section" id="org">
      <div className="section-index">
        <span>04</span>
        <h2>Целевая орга</h2>
      </div>

      <div className="section-body">
        <p className="section-lead">
          Директор собирает не отдел «вообще», а владельцев конкретных функций.
          Это ячейки ответственности, а не утверждённый штат.
        </p>

        <div className="org-root">
          <span className="tag">Role owner</span>
          <strong>Marketing Director</strong>
        </div>

        <div className="org-branches">
          <div className="org-branch">
            <strong>Сегментные машины спроса</strong>

            <div className="org-segment">
              <span>СМБ</span>
              <div className="org-roles">
                <div className="org-role">
                  Public Communications &amp; Audience Lead
                </div>
                <div className="org-role">Digital Marketing Lead</div>
              </div>
            </div>

            <div className="org-segment">
              <span>Enterprise</span>
              <div className="org-roles">
                <div className="org-role">
                  Enterprise Network Marketing Lead
                </div>
              </div>
            </div>

            <div className="org-segment">
              <span>Бух-аутсорс</span>
              <div className="org-roles">
                <div className="org-role">
                  Partner Marketing Lead
                  <small>
                    Influencer Partnerships Manager
                    <br />
                    Corporate Partnerships Manager
                    <br />
                    Community &amp; Events Manager
                  </small>
                </div>
              </div>
            </div>
          </div>

          <div className="org-branch">
            <strong>Общие функции</strong>

            <div className="org-segment">
              <span>Поперёк</span>
              <div className="org-roles">
                <div className="org-role">Head of Product Marketing</div>
                <div className="org-role">Brand Lead</div>
                <div className="org-role">
                  Контент-студия
                  <small>
                    Managing Editor / Content Producer + Designer / Creative
                    Producer
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="org-note">
          Один человек на старте может совмещать несколько ячеек; производство
          может быть внутренним или внешним. Но у каждой функции должен быть один
          названный владелец.
        </p>
      </div>
    </section>
  );
}
