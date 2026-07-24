import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { JetBrains_Mono } from "next/font/google";

import { routing } from "@/i18n/routing";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

type Props = {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: {
      default: "Azar Bonyan Marava",
      template: "%s | Azar Bonyan Marava",
    },

    description:
      "Construction, Engineering and International Trade Company.",

    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        fa: "/fa",
        ar: "/ar",
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as never)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
  <NextIntlClientProvider messages={messages}>
    <Header />

    <StairTransition />

    <PageTransition>
      <main className="flex min-h-screen flex-col">
        {children}
      </main>

      <Footer />
    </PageTransition>

    <SpeedInsights />
    <Analytics />
  </NextIntlClientProvider>
);
}