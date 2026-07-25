"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

import {
  IconInstagram,
  IconLinkedin,
  IconX,
  IconYoutube,
} from "@/components/SocialIcons";

const links = [
  { name: "home", path: "/" },
  { name: "services", path: "/services" },
  { name: "blog", path: "/blog" },
  { name: "about", path: "/about-us" },
  { name: "contact", path: "/contact" },
];

const socialLinks = [
  { icon: IconLinkedin, label: "LinkedIn", href: "#" },
  { icon: IconX, label: "X", href: "#" },
  { icon: IconInstagram, label: "Instagram", href: "#" },
  { icon: IconYoutube, label: "Youtube", href: "#" },
];

export default function Footer() {
  const pathname = usePathname();
  const locale = useLocale();
  const isRTL = locale === "fa" || locale === "ar";

  const t = useTranslations("footer");
  const nav = useTranslations("navigation");

  return (
    <footer
      className="border-t border-white/10"
      aria-label={t("title")}
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">
        {/* Logo */}
        <div>
          <div className="mb-4 flex items-center gap-2">
            <Image
              src="/assets/logo.png"
              width={50}
              height={50}
              alt="Azar Bonyan Marava Logo"
            />

            <span className="leading-tight">
              <span className="block text-sm font-bold tracking-wide text-accent">
                AZAR
              </span>

              <span className="block text-[9px] tracking-widest text-white/50">
                BONYAN MARAVA
              </span>
            </span>
          </div>

          <p
            className={`max-w-xs text-sm text-white/50 leading-7 ${isRTL ? "text-right" : "text-left"
              }`}
          >
            {t("description")}
          </p>
        </div>

        {/* Navigation */}
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/40">
            {t("quickLinks")}
          </p>

          <ul className="space-y-2 ">
            {links.map((link) => {
              const href = `/${locale}${link.path}`;

              const active =
                pathname === href ||
                (link.path === "/" && pathname === `/${locale}`);

              return (
                <li key={link.name}>
                  <Link
                    href={href}
                    className={
                      active
                        ? "border-b-2 border-accent text-sm font-semibold capitalize text-accent transition-all"
                        : "text-sm font-semibold capitalize text-white transition-all hover:text-accent"
                    }
                  >
                    {nav(link.name)}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Social */}
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/40">
            {t("follow")}
          </p>

          <div className="flex gap-3">
            {socialLinks.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/70 transition hover:border-white/30 hover:text-white"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Enamad */}
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/40">
            eNAMAD
          </p>

          <div className="flex h-28 w-28 items-center justify-center rounded-xl border border-dashed border-white/15 bg-white/[0.03] text-xs text-white/40">
            eNAMAD
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-xs text-white/40">
        {t("copyright")}
      </div>
    </footer>
  );
}