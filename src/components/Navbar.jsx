import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Icon } from "../utils/icons";
import { useTheme } from "../hooks/useTheme";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Experience & More", to: "/work" },
  { label: "Resume", to: "/resume" },
  { label: "Chat", to: "/chat" },
  { label: "Contact", to: "/contact" },
];

export function Navbar() {
  const { toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    onScroll();

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const closeMobileMenu = () => {
    setIsOpen(false);
  };

  const handleThemeToggle = () => {
    toggleTheme();
    closeMobileMenu();
  };

  return (
    <>
      <nav className={`nav${isScrolled ? " scrolled" : ""}`} id="nav">
        <div className="nav-container">
          <Link to="/" className="nav-logo" onClick={closeMobileMenu}>
            Vansh Jain
          </Link>

          <div className="nav-links">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.to === "/"}>
                {item.label}
              </NavLink>
            ))}

            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              <Icon name="Moon" className="icon-moon" />
              <Icon name="Sun" className="icon-sun" />
            </button>
          </div>

          <button
            className={`nav-toggle${isOpen ? " active" : ""}`}
            aria-label="Toggle navigation"
            onClick={() => setIsOpen((current) => !current)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <div className={`mobile-menu${isOpen ? " active" : ""}`}>
        <ul className="mobile-links">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.to === "/"}
                onClick={closeMobileMenu}
              >
                {item.label}
              </NavLink>
            </li>
          ))}

          <li>
            <button className="mobile-theme-toggle" onClick={handleThemeToggle}>
              Toggle theme
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}
