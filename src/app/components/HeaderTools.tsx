import DownloadNote from "./DownloadNote";
import LanguageSwitcher from "./LanguageSwitcher";

export default function HeaderTools({ lang = "EN" }: { lang?: string }) {
  return (
    <div className="header-tools">
      <LanguageSwitcher current={lang} />
      <DownloadNote compact lang={lang} />
    </div>
  );
}
