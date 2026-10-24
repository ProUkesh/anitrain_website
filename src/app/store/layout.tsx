import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Design Studio Preview | AniTrain Store",
  description: "Try the interactive AniTrain apparel customizer. Preview only: no purchases yet.",
  robots: { index: false, follow: false },
};
export default function StoreLayout({children}:{children:React.ReactNode}) { return children; }
