import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LipsyncMakerAI - Runway Style",
  description: "Upload face + voice → AI lip-sync generated automatically",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
