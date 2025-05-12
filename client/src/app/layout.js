// app/layout.js
import { Geist, Geist_Mono, Bonheur_Royale } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const bonheur = Bonheur_Royale({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-bonheur-royale",
});

export const metadata = {
  title: "James Attia",
  description: "A showcase of James Attia's work and projects.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

export { bonheur };
