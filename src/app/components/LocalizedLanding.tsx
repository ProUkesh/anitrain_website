import HeaderTools from "./HeaderTools";

export type LocalizedCopy = {
  lang: string;
  code: string;
  eyebrow: string;
  title: string;
  body: string;
  anime: string;
  daily: string;
  home: string;
  mobility: string;
  journal: string;
  journalText: string;
  download: string;
};

export const localizedCopies: Record<string, LocalizedCopy> = {
  hi: {
    lang: "hi", code: "HI", eyebrow: "दैनिक फिटनेस · एनीमे ऊर्जा",
    title: "AniTrain के साथ अपनी फिटनेस स्टोरी बनाइए।",
    body: "घर पर वर्कआउट, बॉडीवेट स्ट्रेंथ, कार्डियो, मोबिलिटी और रिकवरी — एनीमे से प्रेरित मोटिवेशन के साथ, लेकिन असली रोज़मर्रा की फिटनेस के लिए।",
    anime: "एनीमे-प्रेरित ट्रेनिंग", daily: "दैनिक फिटनेस", home: "होम वर्कआउट", mobility: "मोबिलिटी + रिकवरी",
    journal: "AniTrain जर्नल", journalText: "रूटीन, बॉडीवेट ट्रेनिंग, मोबिलिटी और कंसिस्टेंसी पर हमारे गाइड पढ़ें।", download: "Android पर AniTrain डाउनलोड करें",
  },
  pt: {
    lang: "pt-BR", code: "PT", eyebrow: "FITNESS DIÁRIO · ENERGIA DE ANIME",
    title: "Construa sua própria história de treino com AniTrain.",
    body: "Treinos em casa, força com peso corporal, cardio, mobilidade e recuperação — com motivação inspirada em anime, mas criada para a vida real.",
    anime: "Treino inspirado em anime", daily: "Fitness diário", home: "Treinos em casa", mobility: "Mobilidade + recuperação",
    journal: "Diário AniTrain", journalText: "Leia guias sobre rotina, treino com peso corporal, mobilidade e consistência.", download: "Baixar AniTrain no Android",
  },
  es: {
    lang: "es", code: "ES", eyebrow: "FITNESS DIARIO · ENERGÍA ANIME",
    title: "Construye tu propia historia de entrenamiento con AniTrain.",
    body: "Entrenamientos en casa, fuerza con peso corporal, cardio, movilidad y recuperación — con motivación inspirada en anime y un enfoque realista para el día a día.",
    anime: "Entrenamiento inspirado en anime", daily: "Fitness diario", home: "Entrenamientos en casa", mobility: "Movilidad + recuperación",
    journal: "Diario AniTrain", journalText: "Lee nuestras guías sobre rutinas, entrenamiento corporal, movilidad y constancia.", download: "Descargar AniTrain en Android",
  },
  de: {
    lang: "de", code: "DE", eyebrow: "ALLTAGSFITNESS · ANIME-ENERGIE",
    title: "Baue deine eigene Trainingsgeschichte mit AniTrain auf.",
    body: "Home-Workouts, Bodyweight-Krafttraining, Cardio, Mobilität und Regeneration — mit Anime-inspirierter Motivation und einem realistischen Ansatz für den Alltag.",
    anime: "Anime-inspiriertes Training", daily: "Alltagsfitness", home: "Home-Workouts", mobility: "Mobilität + Regeneration",
    journal: "AniTrain Journal", journalText: "Lies unsere Guides zu Routinen, Bodyweight-Training, Mobilität und Konstanz.", download: "AniTrain für Android herunterladen",
  },
  id: {
    lang: "id", code: "ID", eyebrow: "KEBUGARAN HARIAN · ENERGI ANIME",
    title: "Bangun cerita latihanmu sendiri bersama AniTrain.",
    body: "Latihan di rumah, kekuatan berat badan, kardio, mobilitas, dan pemulihan — dengan motivasi bergaya anime untuk kebugaran nyata sehari-hari.",
    anime: "Latihan terinspirasi anime", daily: "Kebugaran harian", home: "Latihan di rumah", mobility: "Mobilitas + pemulihan",
    journal: "Jurnal AniTrain", journalText: "Baca panduan tentang rutinitas, bodyweight, mobilitas, dan konsistensi latihan.", download: "Unduh AniTrain untuk Android",
  },
};

export default function LocalizedLanding({ copy }: { copy: LocalizedCopy }) {
  return (
    <main className="localized-shell" lang={copy.lang}>
      <header className="site-header localized-header">
        <a className="brand-mark brand-mark-image" href="/" aria-label="AniTrain home"><img src="/anitrain-icon.png" alt="" /></a>
        <span className="header-kicker">{copy.eyebrow}</span>
        <HeaderTools lang={copy.code} />
      </header>

      <section className="localized-hero">
        <div className="localized-art"><img src="/hero/anitrain-color.png" alt="AniTrain" /></div>
        <span className="localized-eyebrow">{copy.eyebrow}</span>
        <h1>{copy.title}</h1>
        <p>{copy.body}</p>
        <div className="localized-pills"><span>{copy.anime}</span><span>{copy.daily}</span><span>{copy.home}</span><span>{copy.mobility}</span></div>
        <a className="localized-play" href="https://play.google.com/store/apps/details?id=com.anitrain" target="_blank" rel="noopener noreferrer">{copy.download} <b>↗</b></a>
      </section>

      <section className="localized-journal">
        <span>ANITRAIN JOURNAL</span>
        <h2>{copy.journal}</h2>
        <p>{copy.journalText}</p>
        <a href="/blog">Open journal / Blog <b>→</b></a>
      </section>
    </main>
  );
}
