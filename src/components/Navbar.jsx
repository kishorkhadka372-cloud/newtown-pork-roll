import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar({ business }) {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const classes = [
    "nav",
    isHome ? "nav--home" : "nav--page",
    scrolled ? "nav--scrolled" : "",
  ].join(" ");

  return (
    <header className={classes}>
      <div className="nav__inner">
        <NavLink to="/" className="nav__brand" aria-label="Go to home">
          <img className="nav__logo" src="/brand/logo.png" alt={`${business?.name || "Logo"}`} />
          <div className="nav__brandText">
            <div className="nav__name">{business?.name || "NewTown Pork Roll"}</div>
            <div className="nav__sub">{business?.address || "207 King St, Newtown NSW 2042"}</div>
          </div>
        </NavLink>

        <nav className="nav__links" aria-label="Primary navigation">
          <NavLink to="/" end className={({ isActive }) => `nav__link ${isActive ? "isActive" : ""}`}>
            Home
          </NavLink>
          <NavLink to="/menu" className={({ isActive }) => `nav__link ${isActive ? "isActive" : ""}`}>
            Menu
          </NavLink>
          <NavLink to="/gallery" className={({ isActive }) => `nav__link ${isActive ? "isActive" : ""}`}>
            Gallery
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => `nav__link ${isActive ? "isActive" : ""}`}>
            About
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => `nav__link ${isActive ? "isActive" : ""}`}>
            Contact
          </NavLink>
        </nav>

        <div className="nav__actions">
          <a className="nav__cta" href={business?.maps} target="_blank" rel="noreferrer">
            Directions
          </a>
        </div>
      </div>
    </header>
  );
}
