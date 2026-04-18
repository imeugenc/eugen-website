import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Market Mechanism",
  description:
    "Market Mechanism este un proiect construit în jurul clarității, structurii și execuției, prezentat într-un format premium și minimalist.",
  metadataBase: new URL("https://example.vercel.app"),
  icons: {
    icon: "/icon.png"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <body>{children}</body>
    </html>
  );
}
