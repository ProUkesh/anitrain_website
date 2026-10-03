import type { Metadata } from "next";
import LocalizedLanding, { localizedCopies } from "../components/LocalizedLanding";
export const metadata: Metadata = { title: "AniTrain em Português | App de treino inspirado em anime", description: "Treinos em casa, força, cardio, mobilidade e recuperação com a energia AniTrain.", alternates: { canonical: "/pt", languages: { en: "/", hi: "/hi", "pt-BR": "/pt", es: "/es", de: "/de", id: "/id" } } };
export default function Page(){ return <LocalizedLanding copy={localizedCopies.pt} />; }
