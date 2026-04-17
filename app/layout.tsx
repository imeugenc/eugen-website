import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eugen Costache | Trader & Builder",
  description:
    "A premium personal website for Eugen Costache, presenting his trading perspective and mobile app in a clean, professional format.",
  metadataBase: new URL("https://example.vercel.app")
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
