import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"]
})

export const metadata: Metadata = {
  title: "Guilherme Moraes",
  description: "Portfólio de Guilherme Moraes",
  icons: {
    icon: "/favicon.ico",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={plusJakartaSans.className}>
        {children}
      </body>
    </html>
  );
}
