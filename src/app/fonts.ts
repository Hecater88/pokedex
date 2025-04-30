import localFont from "next/font/local";

export const customFontPokemon = localFont({
  src: [
    {
      path: "../../public/fonts/Pokemon-Classic.ttf",
      weight: "normal",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-pokemon",
});
