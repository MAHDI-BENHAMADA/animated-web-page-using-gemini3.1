import { useState, useEffect } from 'react'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`} id="navbar">
      <div className="nav-container">
        <a href="#" className="nav-logo" id="nav-logo">
          <svg className="logo-icon" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <rect width="32" height="32" rx="8" fill="white" />
            <path d="M10 22L16 10L22 22" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="16" cy="18" r="2" fill="black" />
          </svg>
          <span>NexusAI</span>
        </a>
        <ul className="nav-links" id="nav-links">
          <li><a href="#" className="nav-link">Services</a></li>
          <li><a href="#" className="nav-link">Case Studies</a></li>
          <li><a href="#" className="nav-link">About</a></li>
          <li><a href="#" className="nav-link">Blog</a></li>
        </ul>
        <div className="nav-actions">
          <a href="#" className="btn-nav" id="btn-contact">Get Started</a>
        </div>
      </div>
    </nav>
  )
}
