export default function About({ business }) {
    return (
      <main className="page about">
        <div className="container">
  
          {/* ===== Header ===== */}
          <header className="aboutHeader">
            <h1>About Us</h1>
            <p>Authentic Vietnamese street food, made fresh in Newtown.</p>
          </header>
  
          {/* ===== Content ===== */}
          <section className="aboutContent">
  
            <div className="aboutText">
              <h2>Our Story</h2>
  
              <p>
                <strong>NewTown Pork Roll</strong> is a local favourite on King Street,
                Newtown, known for serving fresh and authentic Vietnamese street food
                every day. What started as a simple goal — to make great pork rolls —
                has grown into a go-to spot for locals, students, and visitors alike.
              </p>
  
              <p>
                Our menu is inspired by traditional Vietnamese flavours, with a focus
                on crispy baguettes, fresh herbs, quality meats, and bold seasoning.
                From classic pork rolls to Vietnamese iced coffee, everything is
                prepared fresh and served fast.
              </p>
  
              <p>
                We believe good food doesn’t need to be complicated. It just needs to
                be done right. That’s why we keep our menu simple, our prices fair,
                and our quality consistent — day in and day out.
              </p>
  
              <div className="aboutHighlight">
                <p>
                  📍 Located at <strong>{business.address}</strong><br />
                  📞 Call us on <strong>{business.phone}</strong>
                </p>
              </div>
            </div>
  
            {/* ===== Image ===== */}
            <div className="aboutImage">
              <img
                src="/images/gallery/g1.jpg"
                alt="NewTown Pork Roll shop and food"
              />
            </div>
  
          </section>
  
        </div>
      </main>
    );
  }
  