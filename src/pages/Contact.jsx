export default function Contact({ business }) {
    const telHref = business?.phone
      ? `tel:${business.phone.replace(/\s+/g, "")}`
      : "#";
  
    // Simple embed from address (works without API key)
    const mapEmbed = `https://www.google.com/maps?q=${encodeURIComponent(
      business.address
    )}&output=embed`;
  
    return (
      <main className="page contact">
        <div className="container">
          {/* ===== Header ===== */}
          <header className="contactHeader">
            <h1>Contact</h1>
            <p>Visit us in Newtown or call to order.</p>
          </header>
  
          <section className="contactGrid">
            {/* ===== Left: Info ===== */}
            <div className="contactCard">
              <h2>NewTown Pork Roll</h2>
  
              <div className="contactRow">
                <div className="contactLabel">Address</div>
                <div className="contactValue">{business.address}</div>
              </div>
  
              <div className="contactRow">
                <div className="contactLabel">Phone</div>
                <div className="contactValue">
                  <a className="contactLink" href={telHref}>
                    {business.phone}
                  </a>
                </div>
              </div>
  
              <div className="contactActions">
                <a className="btn btnPrimary" href={telHref}>
                  Call Now
                </a>
                <a
                  className="btn btnOutline"
                  href={business.maps}
                  target="_blank"
                  rel="noreferrer"
                >
                  Directions
                </a>
              </div>
  
              <div className="hoursBox">
                <h3>Opening Hours</h3>
  
                <div className="hoursGrid">
                  {Object.entries(business.hours).map(([day, hours]) => (
                    <div className="hoursRow" key={day}>
                      <span className="hoursDay">{day}</span>
                      <span className={`hoursTime ${hours === "Closed" ? "isClosed" : ""}`}>
                        {hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
  
            {/* ===== Right: Map ===== */}
            <div className="mapCard">
              <iframe
                title="NewTown Pork Roll Map"
                src={mapEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </section>
        </div>
      </main>
    );
  }
  