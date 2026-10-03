import type { Metadata } from "next";
import LocalizedLanding, { localizedCopies } from "../components/LocalizedLanding";
export const metadata: Metadata = { title: "AniTrain हिंदी | एनीमे वर्कआउट और दैनिक फिटनेस", description: "AniTrain के साथ होम वर्कआउट, बॉडीवेट स्ट्रेंथ, कार्डियो, मोबिलिटी और रिकवरी।", alternates: { canonical: "/hi", languages: { en: "/", hi: "/hi", "pt-BR": "/pt", es: "/es", de: "/de", id: "/id" } } };
export default function Page(){ return <LocalizedLanding copy={localizedCopies.hi} />; }
