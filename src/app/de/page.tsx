import type { Metadata } from "next";
import LocalizedLanding, { localizedCopies } from "../components/LocalizedLanding";
export const metadata: Metadata = { title: "AniTrain Deutsch | Anime Workout App & Alltagsfitness", description: "Home-Workouts, Kraft, Cardio, Mobilität und Regeneration mit Anime-inspirierter Motivation.", alternates: { canonical: "/de", languages: { en: "/", hi: "/hi", "pt-BR": "/pt", es: "/es", de: "/de", id: "/id" } } };
export default function Page(){ return <LocalizedLanding copy={localizedCopies.de} />; }
