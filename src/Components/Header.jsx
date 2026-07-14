import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Database, Users, Menu, X } from "lucide-react";

const NAV_ITEMS = [{ label: "Users", path: "/", icon: Users }];

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="w-full bg-slate-950 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <span className="flex items-center justify-center w-8 h-8 rounded-md bg-amber-500 text-slate-950">
              <Database size={20} strokeWidth={2.5} />
            </span>
            <span className="font-semibold text-slate-100 tracking-tight text-[15px]">
              User<span className="text-amber-500">CRUD</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map(({ label, path, icon: Icon }) => {
              const isActive = pathname === path;
              return (
                <Link
                  key={path}
                  to={path}
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-slate-800 text-amber-400"
                      : "text-slate-400 hover:text-slate-100 hover:bg-slate-900"
                  }`}
                >
                  <Icon size={15} strokeWidth={2.25} />
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-md text-slate-300 hover:bg-slate-900"
            aria-label="Toggle menu"
          >
            {open ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>

        {/* Mobile nav */}
        {open && (
          <nav className="md:hidden flex flex-col gap-1 pb-4">
            {NAV_ITEMS.map(({ label, path, icon: Icon }) => {
              const isActive = pathname === path;
              return (
                <Link
                  key={path}
                  to={path}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-md text-sm font-medium text-left transition-colors ${
                    isActive
                      ? "bg-slate-800 text-amber-400"
                      : "text-slate-400 hover:text-slate-100 hover:bg-slate-900"
                  }`}
                >
                  <Icon size={16} strokeWidth={2.25} />
                  {label}
                </Link>
              );
            })}
          </nav>
        )}
      </div>
    </header>
  );
}