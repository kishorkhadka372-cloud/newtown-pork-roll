import "./Home.css";

// Local images (Vite import)
import porkBelly from "../assets/images/pork-belly-roll.jpg";
import bbqPork from "../assets/images/bbq-pork-roll.jpg";
import icedCoffee from "../assets/images/viet-iced-coffee.jpg";
import gallery1 from "../assets/images/gallery-1.jpg";
import gallery2 from "../assets/images/gallery-2.jpg";
import heroImg from "../assets/images/hero.jpg";

export default function Home() {
  return (
    <main className="home">
      {/* HERO (Premium) */}
      <section className="hero">
        {/* Use CSS variable so background works perfectly in Vite builds */}
        <div
          className="hero__bg"
          aria-hidden="true"
          style={{ "--hero-img": `url(${heroImg})` }}
        />
        <div className="hero__overlay" aria-hidden="true" />

        {/* ✅ removed split layout + removed right panels */}
        <div className="container hero__content">
          <div className="hero__text">
            <p className="hero__eyebrow">NEWTOWN • VIETNAMESE STREET FOOD</p>

            <h1 className="hero__title">
              Fresh, fast <span className="hero__accent">pork rolls</span> &amp; Vietnamese coffee
            </h1>

            <p className="hero__subtitle">
              Bánh mì, rice paper rolls, spring rolls — made fresh and served quick.
            </p>

            <div className="hero__actions">
              <a className="btn btn--primary" href="tel:+61414101111">
                Call to order
              </a>
              <a className="btn btn--ghost" href="/menu">
                View menu
              </a>
              <a
                className="btn btn--ghost"
                href="https://www.google.com/maps?q=207+King+St,+Newtown+NSW+2042"
                target="_blank"
                rel="noreferrer"
              >
                Directions
              </a>
            </div>

            <div className="hero__chips">
              <div className="chip">
                <span className="chip__label">Address</span>
                <span className="chip__value">207 King St, Newtown NSW 2042</span>
              </div>
              <div className="chip">
                <span className="chip__label">Hours</span>
                <span className="chip__value">Tue–Sat • 9am–6pm</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SIGNATURE DISHES */}
      <section className="section section--premium" id="signature">
        <div className="container">
          <header className="premiumHead">
            <h2 className="premiumTitle">Our Signature Dishes</h2>
            <p className="premiumSub">First time here? Start with these.</p>
          </header>

          <div className="signatureGrid">
            <a className="signatureCard" href="/menu">
              <img
                className="signatureImg"
                src={porkBelly}
                alt="Crispy Pork Belly Roll"
                loading="lazy"
              />
              <div className="signatureOverlay" />
              <div className="signatureBody">
                <span className="signatureChip">Bánh Mì</span>
                <h3 className="signatureName">Crispy Pork Belly Roll</h3>
                <p className="signatureMeta">$7.00</p>
                <span className="signatureCta">View Details →</span>
              </div>
            </a>

            <a className="signatureCard" href="/menu">
              <img className="signatureImg" src={bbqPork} alt="BBQ Pork Roll" loading="lazy" />
              <div className="signatureOverlay" />
              <div className="signatureBody">
                <span className="signatureChip">Classic</span>
                <h3 className="signatureName">BBQ Pork Roll</h3>
                <p className="signatureMeta">$7.00</p>
                <span className="signatureCta">View Details →</span>
              </div>
            </a>

            <a className="signatureCard" href="/menu">
              <img
                className="signatureImg"
                src={icedCoffee}
                alt="Vietnamese Iced Coffee"
                loading="lazy"
              />
              <div className="signatureOverlay" />
              <div className="signatureBody">
                <span className="signatureChip">Coffee</span>
                <h3 className="signatureName">Vietnamese Iced Coffee</h3>
                <p className="signatureMeta">$6.00</p>
                <span className="signatureCta">View Details →</span>
              </div>
            </a>
          </div>

          <div className="sectionCta">
            <a className="btn btn--primary" href="/menu">
              View Full Menu
            </a>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="section section--alt" id="gallery-preview">
        <div className="container">
          <header className="premiumHead premiumHead--left">
            <div>
              <h2 className="premiumTitle premiumTitle--sm">Gallery</h2>
              <p className="premiumSub">A glimpse of what we serve every day.</p>
            </div>
            <a className="btn btn--outline" href="/gallery">
              View Full Gallery
            </a>
          </header>

          <div className="galleryPremiumGrid">
            <a className="galleryTilePremium" href="/gallery">
              <img src={gallery1} alt="Gallery image 1" loading="lazy" />
            </a>
            <a className="galleryTilePremium is-tall" href="/gallery">
              <img src={gallery2} alt="Gallery image 2" loading="lazy" />
            </a>
            <a className="galleryTilePremium" href="/gallery">
              <img src={gallery1} alt="Gallery image 3" loading="lazy" />
            </a>
            <a className="galleryTilePremium is-wide" href="/gallery">
              <img src={gallery2} alt="Gallery image 4" loading="lazy" />
            </a>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="section">
        <div className="container">
          <header className="premiumHead">
            <h2 className="premiumTitle premiumTitle--sm">Reviews</h2>
            <p className="premiumSub">Rated 4.8/5 on Google Reviews</p>
          </header>

          <div className="reviewsGrid">
            <div className="reviewCard">
              <div className="reviewTop">
                <span className="stars">★★★★★</span>
                <span className="reviewTag">Local favourite</span>
              </div>
              <p className="reviewText">“Best pork roll in Newtown — always fresh and fast.”</p>
              <p className="reviewBy">— Local Customer</p>
            </div>

            <div className="reviewCard">
              <div className="reviewTop">
                <span className="stars">★★★★★</span>
                <span className="reviewTag">Must try</span>
              </div>
              <p className="reviewText">“Crispy pork belly roll is unreal. Coffee is strong!”</p>
              <p className="reviewBy">— Regular</p>
            </div>

            <div className="reviewCard">
              <div className="reviewTop">
                <span className="stars">★★★★★</span>
                <span className="reviewTag">Great value</span>
              </div>
              <p className="reviewText">“Consistent quality every time. Perfect lunch spot.”</p>
              <p className="reviewBy">— Visitor</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
