import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Chaska Robotics | Equipo de Robótica PUCP",
  description:
    "Chaska es el equipo de robótica de la PUCP que compite en URC y ERC. Diseñamos y construimos rovers para exploración espacial y aplicaciones terrestres.",
  keywords: [
    "robótica", "PUCP", "URC", "ERC", "rover", "Chaska",
    "ingeniería", "Peru", "competencia robótica"
  ],
  authors: [{ name: "Chaska Robotics PUCP" }],
  openGraph: {
    title: "Chaska Robotics | PUCP",
    description:
      "Equipo de robótica universitaria que lleva la ingeniería peruana al mundo.",
    type: "website",
    locale: "es_PE",
    siteName: "Chaska Robotics",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chaska Robotics | PUCP",
    description:
      "Equipo de robótica universitaria que lleva la ingeniería peruana al mundo.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}