import Link from "next/link";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white bg-pink-50/20">
      <div className="container mx-auto">
        {/* logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Azar Bonian Marava
            <span className="text-accent">
                Co.
            </span>
             </h1>
        </Link>
      </div>
    </header>
  );
};

export default Header;
