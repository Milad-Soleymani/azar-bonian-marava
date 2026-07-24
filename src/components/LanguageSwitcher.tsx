"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

const languages = [
  {
    code: "en",
    name: "EN",
  },
  {
    code: "fa",
    name: "FA",
  },
  {
    code: "ar",
    name: "AR",
  },
];


export default function LanguageSwitcher() {

  const locale = useLocale();

  const pathname = usePathname();

  const router = useRouter();


  const changeLanguage = (newLocale: string) => {

    router.replace(pathname, {
      locale: newLocale,
    });

  };


  return (
    <div className="flex items-center gap-2">

      {languages.map((lang) => (

        <button
          key={lang.code}
          onClick={() => changeLanguage(lang.code)}
          className={`
            px-3 py-1
            rounded-md
            text-sm
            transition-all
            ${
              locale === lang.code
                ? "bg-accent text-primary"
                : "text-white hover:text-accent"
            }
          `}
        >
          {lang.name}
        </button>

      ))}

    </div>
  );
}