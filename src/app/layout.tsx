import "./globals.css";
import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { Inter, Vazirmatn } from "next/font/google";
import Script from "next/script";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-en",
  display: "swap",
});

export const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  variable: "--font-fa",
  display: "swap",
});
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
   <html>
    <meta name="google-site-verification" content="qUW9d1djKLfxa5JvCDMEpkcyzcKjQo09k6x2Usupxfs"/>
<meta name="y_key" content="yahoo" />
<meta name="yandex-verification" content="yandex" />
<meta name="me" content="miladcoder0@gmail.com" />
<meta name="me" content="azar-bonian-marava.vercel.app" />
      <head>
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
        >
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];
            w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});
            var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
            j.async=true;
            j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
            f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-K7N7T2WP');
          `}
        </Script>
        <Script
  src="https://www.googletagmanager.com/gtag/js?id=G-K2LX2N4GK6"
  strategy="afterInteractive"
/>

<Script id="google-analytics" strategy="afterInteractive">
{`
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-K2LX2N4GK6');
`}
</Script>
      </head>
      <body
      className={`${inter.variable} ${vazirmatn.variable}`}>
        {children}
      </body>

    </html>
  );
}