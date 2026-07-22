import Link from "next/link";
import { Button } from "./ui/button";

// components
import Nav from "../components/Nav";
import MobileNav from "../components/MobileNav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href="/">
          <h1 className="text-2xl font-semibold">Azar Bonian Marava</h1>
          <span className="text-accent text-left">Co.</span>
        </Link>
        {/* Desktop Navbar & button*/}

        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>Contact Us</Button>
          </Link>
        </div>

        {/* Mobile Navbar  */}

        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
