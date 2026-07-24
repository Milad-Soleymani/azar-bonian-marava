"use client";

import { Link, usePathname } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "blog",
    path: "/blog",
  },
  {
    name: "about",
    path: "/about-us",
  },
  {
    name: "contact",
    path: "/contact",
  },
];


const Nav = () => {

  const pathname = usePathname();
  const t = useTranslations("navigation");


  return (
    <nav className="flex gap-8">

      {links.map((link) => (

        <Link
          href={link.path}
          key={link.path}
          className={`
            ${
              pathname === link.path
                ? "text-accent border-b-2 border-accent"
                : ""
            }
            capitalize font-medium hover:text-accent transition-all
          `}
        >
          {t(link.name)}

        </Link>

      ))}

    </nav>
  );
};


export default Nav;