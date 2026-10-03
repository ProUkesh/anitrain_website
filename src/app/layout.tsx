import type { Metadata, Viewport } from "next";
import "./globals.css";
import SiteFooter from "./components/SiteFooter";

const base = process.env.NEXT_PUBLIC_SITE_URL || "https://anitrain.app";

export const metadata: Metadata = {
  metadataBase: new URL(base),
  title: {
    default: "AniTrain | Anime Workout App, Home Workouts & Daily Fitness",
    template: "%s | AniTrain",
  },
  description: "AniTrain is an Android fitness app for anime-inspired workouts and everyday training, including home workouts, bodyweight strength, cardio, mobility, recovery and consistency.",
  keywords: [
    "AniTrain",
    "anime workout app",
    "anime fitness app",
    "anime training app",
    "anime exercise app",
    "anime gym app",
    "home workout app",
    "bodyweight workouts",
    "daily fitness",
    "strength training",
    "cardio workouts",
    "mobility exercises",
    "recovery workouts",
    "workout consistency",
  ],
  applicationName: "AniTrain",
  category: "health and fitness",
  alternates: {
    canonical: "/",
    languages: {
      "x-default": "/",
      en: "/",
      hi: "/hi",
      "pt-BR": "/pt",
      es: "/es",
      de: "/de",
      id: "/id",
    },
  },
  icons: {
    icon: [{ url: "/anitrain-icon.png", type: "image/png" }],
    apple: [{ url: "/anitrain-icon.png", type: "image/png" }],
  },
  manifest: "/manifest.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: base,
    siteName: "AniTrain",
    title: "AniTrain | Anime Workout App & Daily Fitness",
    description: "Anime-inspired motivation for real training: home workouts, strength, cardio, mobility and recovery.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "AniTrain | Anime Workout App & Daily Fitness",
    description: "Train with anime energy or just build a better everyday fitness routine.",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}<SiteFooter /></body></html>;
}
