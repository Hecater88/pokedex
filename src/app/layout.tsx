import type { Metadata } from "next";
import { customFontPokemon } from "./fonts";
import "./globals.css";
/* import "nes.css/css/nes.min.css"; */

export const metadata: Metadata = {
  title: "Pokedex",
  description: "Pokedex by Virgilio Nayal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={customFontPokemon.variable}>
      <body className={"antialiased"}>{children}</body>
    </html>
  );
}
