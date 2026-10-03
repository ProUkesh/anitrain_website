import type { Metadata } from "next";
import LocalizedLanding, { localizedCopies } from "../components/LocalizedLanding";
export const metadata: Metadata = { title: "AniTrain Indonesia | Aplikasi workout anime & kebugaran harian", description: "Latihan di rumah, bodyweight, kardio, mobilitas, dan pemulihan dengan energi AniTrain.", alternates: { canonical: "/id", languages: { en: "/", hi: "/hi", "pt-BR": "/pt", es: "/es", de: "/de", id: "/id" } } };
export default function Page(){ return <LocalizedLanding copy={localizedCopies.id} />; }
