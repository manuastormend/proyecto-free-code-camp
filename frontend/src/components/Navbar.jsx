import { PlusIcon } from "lucide-react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <header className="bg-base-300 border-b border-base-content/10">
      <div className="mx-auto max-w-6xl px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-primary font-mono tracking-tighter">
            Thinkboard
          </h1>
          <Link to={"/create"} className="btn btn-primary">
            <PlusIcon className="size-5"></PlusIcon>
            <span>New note</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
