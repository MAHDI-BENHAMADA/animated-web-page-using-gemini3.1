import { useEffect, useRef } from 'react'
import './Hero.css'

/* ── tiny helpers ────────────────────────── */
function createParticles(container) {
  for (let i = 0; i < 30; i++) {
    const p = document.createElement('div')
    p.classList.add('particle')
    p.style.left = Math.random() * 100 + '%'
    p.style.top = Math.random() * 100 + '%'
    p.style.animationDelay = Math.random() * 8 + 's'
    p.style.animationDuration = (6 + Math.random() * 6) + 's'
    const size = 1 + Math.random() * 2
    p.style.width = size + 'px'
    p.style.height = size + 'px'
    container.appendChild(p)
  }
}

function animateValue(el, target, isDecimal, duration = 2000) {
  const start = performance.now()
  function tick(now) {
    const progress = Math.min((now - start) / duration, 1)
    const eased = 1 - Math.pow(1 - progress, 4)
    el.textContent = isDecimal
      ? (target * eased).toFixed(1)
      : Math.floor(target * eased)
    if (progress < 1) requestAnimationFrame(tick)
  }
  requestAnimationFrame(tick)
}

/* ── brand list (duplicated for seamless scroll) ── */
const brands = [
  'TechCorp', 'Velocity', 'NovaPay', 'Stratosphere',
  'QuantumLeap', 'Axion', 'PulseMedia',
]

const metrics = [
  { target: 3.2, suffix: 'x', label: 'Avg. ROAS Increase', decimal: true },
  { target: 97, suffix: '%', label: 'Client Retention Rate', decimal: false },
  { target: 50, suffix: 'M+', label: 'Ad Spend Managed', decimal: false },
]

/* ── component ──────────────────────────── */
export default function Hero() {
  const particlesRef = useRef(null)
  const metricRefs = useRef([])

  useEffect(() => {
    if (particlesRef.current) createParticles(particlesRef.current)

    /* count-up with a delay matching the CSS fade-in */
    const timer = setTimeout(() => {
      metricRefs.current.forEach((el) => {
        if (!el) return
        const t = parseFloat(el.dataset.target)
        animateValue(el, t, t % 1 !== 0)
      })
    }, 1200)

    return () => clearTimeout(timer)
  }, [])

  const tickerItems = [...brands, ...brands] // duplicate for infinite scroll

  return (
    <section className="hero" id="hero">
      {/* grid bg */}
      <div className="hero-grid" id="hero-grid">
        {[20, 40, 60, 80].map((v) => (
          <div key={`h${v}`} className="grid-line grid-line-h" style={{ top: `${v}%` }} />
        ))}
        {[20, 40, 60, 80].map((v) => (
          <div key={`v${v}`} className="grid-line grid-line-v" style={{ left: `${v}%` }} />
        ))}
      </div>

      {/* particles */}
      <div className="particles" ref={particlesRef} id="particles" />

      {/* orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />

      {/* content */}
      <div className="hero-container">
        <div className="hero-badge" id="hero-badge">
          <span className="badge-dot" />
          <span>AI-Powered Marketing Solutions</span>
        </div>

        <h1 className="hero-title" id="hero-title">
          <span className="title-line">Marketing That</span>
          <span className="title-line title-accent">
            Thinks For Itself<span className="cursor-blink">_</span>
          </span>
        </h1>

        <p className="hero-subtitle" id="hero-subtitle">
          We deploy autonomous AI agents that analyze, optimize, and scale your
          marketing campaigns in real-time — delivering results that traditional
          agencies can't match.
        </p>

        <div className="hero-cta" id="hero-cta">
          <a href="#" className="btn-primary" id="btn-primary">
            <span>Book a Strategy Call</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a href="#" className="btn-secondary" id="btn-secondary">
            <span>See Our Results</span>
          </a>
        </div>

        <div className="hero-metrics" id="hero-metrics">
          {metrics.map((m, i) => (
            <div className="metric-block" key={i}>
              {i > 0 && <div className="metric-divider" />}
              <div className="metric" id={`metric-${i + 1}`}>
                <span
                  className="metric-value"
                  data-target={m.target}
                  ref={(el) => (metricRefs.current[i] = el)}
                >
                  0
                </span>
                <span className="metric-suffix">{m.suffix}</span>
                <span className="metric-label">{m.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* brand ticker */}
      <div className="brand-ticker" id="brand-ticker">
        <div className="ticker-label">Trusted by industry leaders</div>
        <div className="ticker-track">
          <div className="ticker-content">
            {tickerItems.map((b, i) => (
              <span key={i}>
                <span className="ticker-brand">{b}</span>
                <span className="ticker-dot">●</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
