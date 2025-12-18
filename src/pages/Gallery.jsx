import { useMemo, useState } from "react";
import "./Gallery.css";

// Local images
import g1 from "../assets/images/gallery-1.jpg";
import g2 from "../assets/images/gallery-2.jpg";

export default function Gallery() {
  const images = useMemo(
    () => [
      { src: g1, alt: "Gallery image 1" },
      { src: g2, alt: "Gallery image 2" },
      { src: g1, alt: "Gallery image 3" },
      { src: g2, alt: "Gallery image 4" },
      { src: g1, alt: "Gallery image 5" },
      { src: g2, alt: "Gallery image 6" },
      { src: g1, alt: "Gallery image 7" },
      { src: g2, alt: "Gallery image 8" },
    ],
    []
  );

  const [activeIndex, setActiveIndex] = useState(null);

  const open = (i) => setActiveIndex(i);
  const close = () => setActiveIndex(null);

  const next = () => setActiveIndex((i) => (i + 1) % images.length);
  const prev = () => setActiveIndex((i) => (i - 1 + images.length) % images.length);

  return (
    <main className="galleryPage">
      {/* Header */}
      <header className="galleryHero">
        <div className="container galleryHero__inner">
          <div>
            <p className="galleryHero__eyebrow">NewTown Pork Roll</p>
            <h1 className="galleryHero__title">Gallery</h1>
            <p className="galleryHero__sub">
              Food-first, clean and authentic — a look at what we do best.
            </p>
          </div>

          <div className="galleryHero__hint">
            <div className="hintCard">
              <p className="hintCard__title">Tip</p>
              <p className="hintCard__text">Click any image to view it larger.</p>
            </div>
          </div>
        </div>
      </header>

      {/* Grid */}
      <section className="gallerySection">
        <div className="container">
          <div className="galleryGrid">
            {images.map((img, i) => (
              <button
                key={`${img.src}-${i}`}
                className="galleryItem"
                onClick={() => open(i)}
                type="button"
                aria-label={`Open image ${i + 1}`}
              >
                <img className="galleryImg" src={img.src} alt={img.alt} loading="lazy" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {activeIndex !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={close}>
          <div className="lightbox__inner" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox__close" type="button" onClick={close} aria-label="Close">
              ✕
            </button>

            <button className="lightbox__nav lightbox__nav--left" type="button" onClick={prev} aria-label="Previous">
              ‹
            </button>

            <img
              className="lightbox__img"
              src={images[activeIndex].src}
              alt={images[activeIndex].alt}
            />

            <button className="lightbox__nav lightbox__nav--right" type="button" onClick={next} aria-label="Next">
              ›
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
