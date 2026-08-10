import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";

/** Body copy — humanist geometric, warm yet technical, excellent legibility. */
export const fontBody = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-jakarta",
  preload: true,
});

/** Display / headings — geometric grotesque, sharp AI-tech energy, wide weight range. */
export const fontDisplay = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
  variable: "--font-space",
  preload: true,
});
