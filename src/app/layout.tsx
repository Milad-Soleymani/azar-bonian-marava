import "./globals.css";
import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrainsMono",
});


export const metadata: Metadata = {
  metadataBase: new URL(
    "https://azar-bonian-marava.vercel.app"
  ),

  title: {
    default: "Azar Bonyan Marava",
    template: "%s | Azar Bonyan Marava",
  },

  description:
    "Azar Bonyan Marava is a construction, engineering and international trade company.",


  keywords: [
    "Construction",
    "Engineering",
    "International Trade",
    "Project Management",
    "Azar Bonyan Marava",
  ],


  authors: [
    {
      name: "Azar Bonyan Marava",
    },
  ],


  publisher:
    "Azar Bonyan Marava",


  robots: {
    index: true,
    follow: true,
  },


  icons: {
    icon: "/logo.png",
    apple: "/apple-touch-icon.png",
  },


  openGraph: {
    title:
      "Azar Bonyan Marava",

    description:
      "Construction, Engineering and International Trade Company.",

    url:
      "https://azar-bonian-marava.vercel.app",

    siteName:
      "Azar Bonyan Marava",

    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Azar Bonyan Marava",
      },
    ],

    locale: "en_US",

    type: "website",
  },


  twitter: {
    card: "summary_large_image",

    title:
      "Azar Bonyan Marava",

    description:
      "Construction, Engineering and International Trade Company.",

    images: [
      "/logo.png",
    ],
  },
  verification:{
   google: 'google',
    yandex: 'yandex',
    yahoo: 'yahoo',
    other: {
      me: ['miladcoder0@gmail.com', 'azar-bonian-marava.vercel.app'],
    },
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html
      suppressHydrationWarning
      className={jetbrainsMono.variable}
    >
    <meta name="google-site-verification" content="qUW9d1djKLfxa5JvCDMEpkcyzcKjQo09k6x2Usupxfs"/>
<meta name="y_key" content="yahoo" />
<meta name="yandex-verification" content="yandex" />
<meta name="me" content="miladcoder0@gmail.com" />
<meta name="me" content="azar-bonian-marava.vercel.app" />

      <body>
        {children}
      </body>

    </html>
  );
}