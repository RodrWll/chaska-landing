import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Chaska Robotics | PUCP",
  description:
    "Equipo de robótica de la PUCP que compite en URC y ERC. Ingeniería de precisión para entornos extremos.",
  keywords: ["robótica", "PUCP", "URC", "ERC", "rover", "Chaska"],
  openGraph: {
    title: "Chaska Robotics",
    description: "Equipo de robótica universitaria — PUCP",
    type: "website",
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