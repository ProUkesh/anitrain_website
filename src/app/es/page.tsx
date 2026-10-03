import type { Metadata } from "next";
import LocalizedLanding, { localizedCopies } from "../components/LocalizedLanding";
export const metadata: Metadata = { title: "AniTrain en Español | App de entrenamiento anime y fitness", description: "Entrenamientos en casa, fuerza, cardio, movilidad y recuperación con motivación inspirada en anime.", alternates: { canonical: "/es", languages: { en: "/", hi: "/hi", "pt-BR": "/pt", es: "/es", de: "/de", id: "/id" } } };
export default function Page(){ return <LocalizedLanding copy={localizedCopies.es} />; }
