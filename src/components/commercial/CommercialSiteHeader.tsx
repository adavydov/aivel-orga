import Link from "next/link";

const navigation = [
  { href: "#functions", label: "Функции" },
  { href: "#org", label: "Орга" },
  { href: "#boundaries", label: "Границы" },
];

export function CommercialSiteHeader() {
  return (
    <>
      <a className="skip-link" href="#content">
        К содержанию
      </a>

      <header className="site-header">
        <div className="shell header-inner">
          <a
            className="site-brand"
            href="#content"
            aria-label="Aivel — к началу страницы"
          >
            Aivel / продажи СМБ
          </a>

          <nav className="desktop-nav" aria-label="Основная навигация">
            {navigation.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
            <Link href="/">Маркетинг</Link>
          </nav>

          <details className="mobile-nav">
            <summary>Разделы</summary>
            <nav aria-label="Мобильная навигация">
              {navigation.map((item) => (
                <a key={item.href} href={item.href}>
                  {item.label}
                </a>
              ))}
              <Link href="/">Маркетинг</Link>
            </nav>
          </details>
        </div>
      </header>
    </>
  );
}
