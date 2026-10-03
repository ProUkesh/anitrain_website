export const languageLinks = [
  { href: "/", code: "EN", label: "English" },
  { href: "/hi", code: "HI", label: "हिन्दी" },
  { href: "/pt", code: "PT", label: "Português" },
  { href: "/es", code: "ES", label: "Español" },
  { href: "/de", code: "DE", label: "Deutsch" },
  { href: "/id", code: "ID", label: "Bahasa Indonesia" },
];

export default function LanguageSwitcher({ current = "EN" }: { current?: string }) {
  return (
    <details className="language-switcher">
      <summary aria-label="Change language"><span>{current}</span><b aria-hidden="true">⌄</b></summary>
      <div className="language-menu">
        {languageLinks.map((language) => (
          <a key={language.code} href={language.href} hrefLang={language.code === "PT" ? "pt-BR" : language.code.toLowerCase()}>
            <span>{language.code}</span><strong>{language.label}</strong>
          </a>
        ))}
      </div>
    </details>
  );
}
