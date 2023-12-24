import Link from "next/link";
import { PiGameControllerDuotone as Logo } from "react-icons/pi";
import { FaGithub } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="border-b py-3 border-gray-500 flex items-center justify-between px-2">
      <Link href={"/"}>
        <div className="flex items-center justify-center w-fit gap-x-2">
          <Logo className="w-10 h-10 text-ui-400" />
          <span className="text-2xl bg-gradient-to-br to-accent-500 from-gray-300 font-bold bg-clip-text text-transparent">
            GamesLib
          </span>
        </div>
      </Link>
      <div className="flex items-center justify-center gap-x-12">
        <Link href={"/games"} className="hover:text-accent-200 text-accent-300">
          Games
        </Link>
        <Link
          href={"/genres"}
          className="hover:text-accent-200 text-accent-300"
        >
          Genres
        </Link>
        <Link
          href={"/developers"}
          className="hover:text-accent-200 text-accent-300"
        >
          Developers
        </Link>
        <Link href={"/tags"} className="hover:text-accent-200 text-accent-300">
          Tags
        </Link>
      </div>
      <div className="flex">
        <div>
          <button className="bg-ui-300 hover:bg-ui-400 transition-all text-background px-5 py-[.4rem] font-semibold rounded-full flex items-center justify-center gap-x-2">
            <FaGithub className="h-4 w-4" />
            Github
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
