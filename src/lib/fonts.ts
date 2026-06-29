import { Bebas_Neue, DM_Sans } from "next/font/google";

export const fontBody = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-dm-sans",
  preload: true,
});

export const fontDisplay = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bebas",
  preload: true,
});
