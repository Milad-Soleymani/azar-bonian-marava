import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  NextIntlClientProvider
} from "next-intl";

import {
  getMessages,
  setRequestLocale
} from "next-intl/server";


import { routing } from "@/i18n/routing";


import Header from "@/components/Header";
import Footer from "@/components/Footer";

import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";


import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import JsonLd from "@/components/seo/JsonLd";


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


  const titles = {

    en:
      "Azar Bonyan Marava | Construction & Global Trade",

    fa:
      "آذر بنیان ماراوا | ساخت و ساز و تجارت بین الملل",

    ar:
      "آذر بنيان مارافا | البناء والتجارة الدولية",

  };


  const descriptions = {

    en:
      "Azar Bonyan Marava provides construction, engineering solutions and international trade services.",


    fa:
      "شرکت آذر بنیان ماراوا فعال در حوزه ساخت و ساز، مهندسی و تجارت بین الملل.",


    ar:
      "شركة آذر بنيان مارافا متخصصة في البناء والهندسة والتجارة الدولية.",

  };



  const title =
    titles[locale as keyof typeof titles];


  const description =
    descriptions[locale as keyof typeof descriptions];



  return {

    title: {
      default: title,
      template:
        "%s | Azar Bonyan Marava",
    },


    description,


    keywords: [
      "Construction",
      "Engineering",
      "International Trade",
      "Project Management",
      "Azar Bonyan Marava",
    ],


    alternates: {

      canonical:
        `/${locale}`,

      languages: {

        en:
          "/en",

        fa:
          "/fa",

        ar:
          "/ar",

      },

    },



    openGraph: {

      title,

      description,


      url:
        `https://azar-bonian-marava.vercel.app/${locale}`,


      siteName:
        "Azar Bonyan Marava",


      images: [

        {

          url:
            "/og-image.jpg",

          width:
            1200,

          height:
            630,

          alt:
            "Azar Bonyan Marava",

        }

      ],


      locale:
        locale,


      type:
        "website",

    },



    twitter: {

      card:
        "summary_large_image",


      title,

      description,


      images:[
        "/og-image.jpg"
      ],

    },

  };

}



export default async function LocaleLayout({
  children,
  params,
}: Props) {


  const { locale } = await params;



  if (
    !routing.locales.includes(locale as never)
  ) {

    notFound();

  }



  setRequestLocale(locale);



  const messages =
    await getMessages();






  return (

    <NextIntlClientProvider messages={messages}>


      <JsonLd />


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