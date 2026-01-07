import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { RootProviders } from "./RootProviders";
import { Analytics } from "@vercel/analytics/next";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Humano HR",
  description: "Modern HR management system",
  icons: {
    icon: [
      {
        url: '/images/logos/logo-dark.svg',
        type: "image/svg+xml",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: '/images/logos/logo-light.svg',
        type: "image/svg+xml",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} antialiased`}
      >
        <Analytics />
        <RootProviders>
          {children}
        </RootProviders>
      </body>
    </html>
  );
}
