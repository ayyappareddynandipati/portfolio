
import { useState, useEffect } from 'react';
import { useTheme } from '../../hooks/useTheme';
import './Header.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleContactClick = () => {
    scrollToSection('contact');
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''} ${isDarkMode ? 'dark' : 'light'}`}>
      <nav className="nav-container">
        <div className="nav-content">
          {/* Logo/Brand */}
          <div className="brand">
            <div className="logo-icon">
              <span>&lt;/&gt;</span>
            </div>
            <span className="brand-text">Ayyappa Reddy</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="nav-menu">
            <button 
              onClick={() => scrollToSection('home')}
              className="nav-link"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="nav-link"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="nav-link"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('certifications')}
              className="nav-link"
            >
              Certifications
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="nav-link"
            >
              Contact
            </button>
          </div>
          
          {/* Right Side Actions */}
          <div className="nav-actions">
            <button
              onClick={toggleTheme}
              className="theme-toggle"
              title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              <span className="theme-icon">
                {isDarkMode ? '☀️' : '🌙'}
              </span>
            </button>
            <button onClick={handleContactClick} className="hire-btn">
              Hire Me
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="mobile-controls">
            <button
              onClick={toggleTheme}
              className="theme-toggle mobile-theme"
              title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              <span className="theme-icon">
                {isDarkMode ? '☀️' : '🌙'}
              </span>
            </button>
            <button 
              className="mobile-menu-btn"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
                <span></span>
                <span></span>
                <span></span>
              </span>
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
          <div className="mobile-menu-content">
            <button onClick={() => scrollToSection('home')} className="mobile-nav-link">
              <span className="mobile-link-icon">🏠</span>
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="mobile-nav-link">
              <span className="mobile-link-icon">👨‍💻</span>
              About
            </button>
            <button onClick={() => scrollToSection('projects')} className="mobile-nav-link">
              <span className="mobile-link-icon">💼</span>
              Projects
            </button>
            <button onClick={() => scrollToSection('certifications')} className="mobile-nav-link">
              <span className="mobile-link-icon">🏆</span>
              Certifications
            </button>
            <button onClick={() => scrollToSection('contact')} className="mobile-nav-link">
              <span className="mobile-link-icon">📧</span>
              Contact
            </button>
            <button onClick={handleContactClick} className="mobile-hire-btn">
              Let's Work Together
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
