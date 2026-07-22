import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css";

//componnents
import Header from '../components/Header'
import PageTransition from '../components/PageTransition'
import StairTransition from '../components/StairTransition'


const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono"
});

export const metadata: Metadata = {
  title: "Azar Bonian Marava Co",
  description: "",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <StairTransition />
        <PageTransition>
        {children}

        </PageTransition>
        <SpeedInsights />
      </body>
      <Analytics />
    </html>
  );
}
