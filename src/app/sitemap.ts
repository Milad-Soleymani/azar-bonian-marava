import type { MetadataRoute } from "next";


const baseUrl =
  "https://azar-bonian-marava.vercel.app";


export default function sitemap(): MetadataRoute.Sitemap {

  const locales = [
    "en",
    "fa",
    "ar",
  ];


  const pages = [
    "",
    "/about-us",
    "/services",
    "/blog",
    "/contact",
  ];


  return locales.flatMap((locale) =>
    pages.map((page) => ({

      url:
        `${baseUrl}/${locale}${page}`,


      lastModified:
        new Date(),


      changeFrequency:
        "monthly",


      priority:
        page === ""
          ? 1
          : 0.8,

    }))
  );

}