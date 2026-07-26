import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://adavydov.github.io/aivel-orga/"),
  title: "Директор по маркетингу Aivel — контракт роли",
  description:
    "Контекст, приоритеты, функции, границы и метрики роли директора по маркетингу Aivel.",
  openGraph: {
    title: "Директор по маркетингу Aivel — контракт роли",
    description:
      "Три машины спроса: СМБ, Enterprise и бухгалтерский аутсорсинг.",
    type: "website",
    locale: "ru_RU",
    url: "https://adavydov.github.io/aivel-orga/",
    siteName: "Aivel",
    images: [
      {
        url: "https://adavydov.github.io/aivel-orga/og.png",
        width: 1736,
        height: 907,
        alt: "Aivel — три измеримые машины спроса",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Директор по маркетингу Aivel — контракт роли",
    description:
      "Три машины спроса: СМБ, Enterprise и бухгалтерский аутсорсинг.",
    images: ["https://adavydov.github.io/aivel-orga/og.png"],
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
