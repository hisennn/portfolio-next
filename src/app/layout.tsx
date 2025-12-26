import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from '../contexts/LanguageContext';

export const metadata: Metadata = {
  title: "Gabriel Lemes",
  description: "Portfolio de Gabriel Lemes, desenvolvedor web.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg?v=2.2" />
        <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      </head>
      <body className="antialiased">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
