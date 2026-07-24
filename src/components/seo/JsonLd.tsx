import { siteConfig } from "@/lib/seo";


export default function JsonLd() {


  const data = {

    "@context":
      "https://schema.org",

    "@type":
      "Organization",


    name:
      siteConfig.name,


    url:
      siteConfig.url,


    logo:
      siteConfig.logo,


    description:
      siteConfig.description,


    sameAs: [
      // بعداً شبکه‌های اجتماعی
    ],


    contactPoint: {

      "@type":
        "ContactPoint",

      contactType:
        "customer service",

    },

  };


  return (

    <script

      type="application/ld+json"

      dangerouslySetInnerHTML={{

        __html:
          JSON.stringify(data),

      }}

    />

  );

}