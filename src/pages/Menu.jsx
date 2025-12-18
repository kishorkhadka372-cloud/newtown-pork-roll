import { menu } from "../data/menu.js";


export default function Menu({ business }) {
  const telHref = business?.phone
    ? `tel:${business.phone.replace(/\s+/g, "")}`
    : "#";

  return (
    <main className="page menu">
      <div className="container">

        {/* ===== Header ===== */}
        <header className="menuHeader">
          <h1>Menu</h1>
          <p>Fresh Vietnamese street food, made daily.</p>

          <a href={telHref} className="btn btnPrimary">
            Call to Order
          </a>
        </header>

        {/* ===== Pork Rolls ===== */}
        <section className="menuSection">
          <h2>Pork Rolls (Bánh Mì)</h2>

          <ul className="menuList">
            {menu.porkRolls.map((item) => (
              <li key={item.name} className="menuItem">
                <span className="menuItem__name">{item.name}</span>
                <span className="menuItem__price">{item.price}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* ===== Rolls & Snacks ===== */}
        <section className="menuSection">
          <h2>Rolls & Snacks</h2>

          <ul className="menuList">
            {menu.snacks.map((item) => (
              <li key={item.name} className="menuItem">
                <span className="menuItem__name">{item.name}</span>
                <span className="menuItem__price">{item.price}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* ===== Drinks ===== */}
        <section className="menuSection">
          <h2>Drinks</h2>

          <ul className="menuList">
            {menu.drinks.map((item) => (
              <li key={item.name} className="menuItem">
                <span className="menuItem__name">{item.name}</span>
                <span className="menuItem__price">{item.price}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* ===== Footer CTA ===== */}
        <div className="menuCTA">
          <p>Visit us at <strong>{business.address}</strong></p>
          <a href={business.maps} target="_blank" rel="noreferrer" className="btn btnOutline">
            Get Directions
          </a>
        </div>

      </div>
    </main>
  );
}
