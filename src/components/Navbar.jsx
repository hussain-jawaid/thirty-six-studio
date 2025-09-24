import React, { useState } from "react";
import { useTheme } from "../contexts/ThemeContext.jsx";

function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [isDownScroll, setIsDownScroll] = useState(false);

  const navItems = [
    { label: "What we do", href: "#what-we-do" },
    { label: "Who we are", href: "#who-we-are" },
    { label: "How we give back", href: "#give-back" },
    { label: "Talk to us", href: "#contact" },
  ];

  return (
    <nav className="bg-background/80 border-border sticky top-0 z-50 border-b text-[15px] backdrop-blur">
      {/* Desktop header */}
      <div className="mx-auto hidden items-center justify-between px-3 py-3 md:flex">
        {/* Brand */}
        <a href="#" className="text-foreground font-medium">
          Thirtysixstudio
        </a>

        {/* Theme switch - desktop */}
        <div
          role="button"
          onClick={toggleTheme}
          className="cursor-pointer items-center gap-1 rounded-full border border-gray-500 p-[2px] md:flex"
          aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
        >
          <div
            className={`flex items-center justify-center rounded-full px-3 ${
              !isDark && "bg-black text-white"
            }`}
          >
            <i className="ri-sun-line text-base" />
          </div>
          <div
            className={`flex items-center justify-center rounded-full px-3 ${
              isDark && "bg-white text-black"
            }`}
          >
            <i className="ri-moon-line text-base" />
          </div>
        </div>

        {/* Desktop nav */}
        <div className="flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* music play button */}
        <div className="hidden size-8 items-center justify-center gap-0.5 rounded-full border border-gray-200 md:flex">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className="block size-[2px] rounded-full bg-gray-500"
            ></span>
          ))}
        </div>
      </div>

      {/* Mobile header */}
      <div className="mx-auto flex items-center justify-between px-3 py-3 md:hidden">
        {/* brand and theme toggle button */}
        <div className="flex items-center gap-8">
          {/* Brand (mobile) */}
          <a href="#" className="text-foreground font-medium">
            Thirtysixstudio
          </a>

          {/* Theme switch - desktop */}
          <div
            role="button"
            onClick={toggleTheme}
            className="flex cursor-pointer items-center gap-1 rounded-full border border-gray-500 p-[2px]"
            aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
          >
            <div
              className={`flex items-center justify-center rounded-full px-3 ${
                !isDark && "bg-black text-white"
              }`}
            >
              <i className="ri-sun-line text-base" />
            </div>
            <div
              className={`flex items-center justify-center rounded-full px-3 ${
                isDark && "bg-white text-black"
              }`}
            >
              <i className="ri-moon-line text-base" />
            </div>
          </div>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-4">
          <p
            onClick={() => setOpen((v) => !v)}
            className="text-foreground transition-colors"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
          >
            Menu
          </p>
          {/* music play button */}
          <div className="flex size-7 items-center justify-center gap-0.5 rounded-full border border-gray-200">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className="block size-[1px] rounded-full bg-gray-500"
              ></span>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`${open ? "min-h-screen" : "max-h-0"} z-50 overflow-hidden transition-[max-height] duration-300 md:hidden`}
      >
        <div className="border-border border-t px-4 py-3">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-foreground/80 hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
