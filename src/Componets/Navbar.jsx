import { LogoAcrobat } from "@gravity-ui/icons";
import Link from "next/link";
import ToggleTheme from "./ToggleTheme";

const Navbar = () => {
  return (
    <div>
      {/* Basic */}
      <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
        <header className="flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <LogoAcrobat />
            <p className="font-bold">ACME</p>
          </div>
          <ul className="flex items-center gap-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/books">Books</Link>
            </li>
            {/* <li>
              <p>name</p>
            </li> */}
          </ul>
          <div>
            <ToggleTheme />
          </div>
        </header>
      </nav>
    </div>
  );
};

export default Navbar;
