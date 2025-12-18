import { NavLink } from "react-router-dom";

export default function Footer({ business }) {
  const telHref = business?.phone ? `tel:${business.phone.replace(/\s+/g, "")}` : "#";

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <div className="footer__title">{business?.name || "NewTown Pork Roll"}</div>
          <div className="footer__muted">{business?.address}</div>
          <a className="footer__link" href={telHref}>
            {business?.phone}
          </a>
        </div>

        <div className="footer__col">
          <div className="footer__head">Pages</div>
          <NavLink className="footer__link" to="/menu">Menu</NavLink>
          <NavLink className="footer__link" to="/gallery">Gallery</NavLink>
          <NavLink className="footer__link" to="/about">About</NavLink>
          <NavLink className="footer__link" to="/contact">Contact</NavLink>
        </div>

        <div className="footer__col">
          <div className="footer__head">Hours</div>
          {business?.hours &&
            Object.entries(business.hours).map(([day, hours]) => (
              <div className="footer__row" key={day}>
                <span className="footer__muted">{day}</span>
                <span>{hours}</span>
              </div>
            ))}
        </div>

        <div className="footer__col">
          <div className="footer__head">Visit</div>
          <a className="footer__btn" href={business?.maps} target="_blank" rel="noreferrer">
            Directions
          </a>
        </div>
      </div>

      <div className="footer__bottom">
        <span>© {new Date().getFullYear()} {business?.name || "NewTown Pork Roll"}</span>
        <span className="footer__muted">Built with React</span>
      </div>
    </footer>
  );
}
