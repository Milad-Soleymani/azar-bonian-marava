"use client"
import {
    Target,
    Eye,
    Lightbulb,
    ShieldCheck,
    Award,
    Leaf,
    CheckCircle2,
    Briefcase,
    Users,
    User,
    ArrowRight,
    ChevronDown,
    Menu,
} from "lucide-react";
import { IconLinkedin, IconX, IconInstagram, IconYoutube } from "@/components/SocialIcons";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
    name: "about-us",
    path: "/about-us",
  },
  {
    name: "contact",
    path: "/contact",
  },
];const GREEN = "#00ff99";

const Footer = () => {
    const pathname = usePathname()
    return (
        <footer className="border-t border-white/10">
            <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-3">
                <div>
                    <div className="mb-4 flex items-center gap-2">
                        <Image src='/assets/logo.png' width={50} height={50} />
                        <span className="leading-tight">
                            <span className="block text-sm font-bold tracking-wide text-accent">AZAR</span>
                            <span className="block text-[9px] tracking-widest text-white/50">
                                BONYAN MARAVA
                            </span>
                        </span>
                    </div>
                    <p className="max-w-xs text-sm text-white/50">
                        Engineering innovation, delivering sustainable solutions and
                        building the future through advanced technology.
                    </p>
                </div>

                <div>
                    <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/40">
                        Quick Links
                    </p>
                    <ul className="space-y-2">
                        {links.map((link, index) => (
                            <li key={index}>
                                <Link href={link.path} className={`${link.path == pathname ? "text-accent border-b-2 border-accent" : " text-white" } text-semibold cursor-pointer capitalize hover:text-accent transition-all`}>
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/40">
                        Follow Us
                    </p>
                    <div className="flex gap-3">
                        {[IconLinkedin, IconX, IconInstagram, IconYoutube].map((Icon, i) => (
                            <a
                                key={i}
                                href="#"
                                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/70 hover:border-white/30 hover:text-white"
                            >
                                <Icon className="h-4 w-4" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <div className="border-t border-white/10 py-6 text-center text-xs text-white/40">
                © 2024–2026 Azar Bonyan Marava. All Rights Reserved.
            </div>
        </footer>
    )
}

export default Footer
