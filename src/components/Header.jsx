"use client";
import { Button } from "./ui/button";
import { Link } from "@/i18n/navigation";

import Nav from "../components/Nav";
import MobileNav from "../components/MobileNav";
import LanguageSwitcher from "./LanguageSwitcher";

import { useTranslations } from "next-intl";

const Header = () => {
  const t = useTranslations("header");

  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">

        {/* Logo */}
        <Link href="/" className="flex flex-col">
          <h1 className="text-2xl font-semibold">
            {t("company")}
          </h1>

          <span className="text-accent text-left">
            Co.
          </span>
        </Link>


        {/* Desktop Navbar */}
        <div className="hidden xl:flex items-center gap-8">

          <Nav />

          <LanguageSwitcher />

          <Link href="/contact">
            <Button>
              {t("contact")}
            </Button>
          </Link>

        </div>


        {/* Mobile Navbar */}
        <div className="xl:hidden flex items-center gap-4">

          <LanguageSwitcher />

          <MobileNav />

        </div>


      </div>
    </header>
  );
};

export default Header;