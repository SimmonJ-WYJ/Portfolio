import './PortfolioGallery.css'

// Adapted from the shadcn "portfolio-gallery" to this project's stack (Vite + JS + CSS).
// The 3D fan layout and the hover-lift interaction are pure CSS (no rAF dependency),
// so they render reliably. Desktop = fanned overlapping cards; mobile = marquee.
export function PortfolioGallery({
  title = 'Selected work',
  buttonText = 'View gallery',
  buttonHref = '#work',
  items = [],
  maxHeight = 120,
}) {
  const Card = ({ item }) =>
    item.src ? (
      <div className="pg-card pg-card--img">
        <img src={item.src} alt={item.name || ''} loading="lazy" decoding="async" />
        {item.name && <span className="pg-card-name">{item.name}</span>}
      </div>
    ) : (
      <div
        className="pg-card"
        style={{ background: `linear-gradient(135deg, ${item.color} 0%, ${item.color2} 100%)` }}
      >
        {item.name && <span className="pg-card-name">{item.name}</span>}
      </div>
    )

  return (
    <section aria-label={title} className="pg" id="work">
      <div className="pg-inner">
        <div className="pg-head">
          <h2 className="pg-title">{title}</h2>
          <a href={buttonHref} className="pg-btn" data-cursor="link">
            <span>{buttonText}</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="pg-arrow">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </div>

        {/* 3D overlapping fan with hover-lift */}
        <div className="pg-fan">
          <div className="pg-fan-row">
            {items.map((item, index) => {
              const total = items.length
              const middle = Math.floor(total / 2)
              const distanceFromMiddle = Math.abs(index - middle)
              const staggerOffset = maxHeight - distanceFromMiddle * 20
              const zIndex = total - index
              return (
                <div
                  key={index}
                  className="pg-card-wrap"
                  style={{ zIndex, '--offset': `${-staggerOffset}px` }}
                  data-cursor="media"
                  data-cursor-label="View"
                >
                  <Card item={item} />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PortfolioGallery
