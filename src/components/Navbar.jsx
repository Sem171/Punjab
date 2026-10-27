import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Sun, Moon, Search, Compass, BookOpen, 
  Map, Sparkles, Utensils, Landmark, Users, 
  TrendingUp, Calendar, Languages, HelpCircle, Mail, ChevronDown 
} from 'lucide-react';

export default function Navbar({ theme, toggleTheme, onOpenSearch }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinksPrimary = [
    { name: 'Home', href: '#home', id: 'home', icon: Compass },
    { name: 'About', href: '#about', id: 'about', icon: BookOpen },
    { name: 'History', href: '#history', id: 'history', icon: Landmark },
    { name: 'Geography', href: '#geography', id: 'geography', icon: Map },
    { name: 'Culture', href: '#culture', id: 'culture', icon: Sparkles },
    { name: 'Food', href: '#food', id: 'food', icon: Utensils },
    { name: 'Tourism', href: '#tourism', id: 'tourism', icon: Compass },
  ];

  const navLinksSecondary = [
    { name: 'Personalities', href: '#personalities', id: 'personalities', icon: Users },
    { name: 'Economy', href: '#economy', id: 'economy', icon: TrendingUp },
    { name: 'Festivals', href: '#festivals', id: 'festivals', icon: Calendar },
    { name: 'Language', href: '#language', id: 'language', icon: Languages },
    { name: 'Quiz', href: '#quiz', id: 'quiz', icon: HelpCircle },
    { name: 'Contact', href: '#contact', id: 'contact', icon: Mail },
  ];

  const allNavLinks = [...navLinksPrimary, ...navLinksSecondary];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Scrollspy
      const sections = allNavLinks.map(link => document.getElementById(link.id)).filter(Boolean);
      const scrollPos = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec.offsetTop <= scrollPos) {
          setActiveSection(sec.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard shortcut Ctrl+K for search
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        onOpenSearch();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onOpenSearch]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setMoreDropdownOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'all var(--transition-normal)',
        backgroundColor: isScrolled ? 'var(--bg-card)' : 'transparent',
        borderBottom: isScrolled ? '1px solid var(--border-light)' : 'none',
        boxShadow: isScrolled ? 'var(--shadow-md)' : 'none',
        backdropFilter: isScrolled ? 'blur(12px)' : 'none'
      }}
    >
      <div 
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 'var(--navbar-height)'
        }}
      >
        {/* Brand Logo */}
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, '#home')}
          style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}
        >
          <div style={{
            width: '42px',
            height: '42px',
            borderRadius: 'var(--radius-sm)',
            background: 'linear-gradient(135deg, var(--color-crimson) 0%, var(--color-emerald) 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: 'var(--shadow-gold)',
            color: '#FFD700',
            flexShrink: 0
          }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L15 8H21L16 12L18 19L12 15L6 19L8 12L3 8H9L12 2Z" />
            </svg>
          </div>
          <div>
            <div style={{ 
              fontFamily: 'var(--font-serif)', 
              fontWeight: 800, 
              fontSize: '1.25rem', 
              color: isScrolled ? 'var(--text-primary)' : 'var(--text-primary)',
              lineHeight: 1.15 
            }}>
              Discover Punjab
            </div>
            <div style={{ 
              fontSize: '0.72rem', 
              fontWeight: 600, 
              letterSpacing: '0.04em', 
              color: 'var(--color-mustard)', 
              textTransform: 'uppercase' 
            }}>
              The Land of Five Rivers
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav 
          style={{ display: 'none', alignItems: 'center', gap: '0.25rem' }} 
          className="desktop-nav"
        >
          {navLinksPrimary.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              style={{
                padding: '0.45rem 0.75rem',
                fontSize: '0.88rem',
                fontWeight: activeSection === link.id ? 700 : 500,
                color: activeSection === link.id ? 'var(--color-emerald)' : 'var(--text-secondary)',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: activeSection === link.id ? 'var(--color-emerald-subtle)' : 'transparent',
                transition: 'all var(--transition-fast)'
              }}
              onMouseEnter={(e) => {
                if (activeSection !== link.id) e.currentTarget.style.color = 'var(--color-mustard)';
              }}
              onMouseLeave={(e) => {
                if (activeSection !== link.id) e.currentTarget.style.color = 'var(--text-secondary)';
              }}
            >
              {link.name}
            </a>
          ))}

          {/* More Dropdown for Secondary Navigation */}
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => setMoreDropdownOpen(!moreDropdownOpen)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.25rem',
                padding: '0.45rem 0.75rem',
                fontSize: '0.88rem',
                fontWeight: 600,
                color: 'var(--text-secondary)',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                borderRadius: 'var(--radius-sm)'
              }}
            >
              <span>Explore More</span>
              <ChevronDown size={14} style={{ transform: moreDropdownOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
            </button>

            {moreDropdownOpen && (
              <div 
                className="card"
                style={{
                  position: 'absolute',
                  top: '100%',
                  right: 0,
                  marginTop: '0.5rem',
                  width: '210px',
                  padding: '0.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.2rem',
                  boxShadow: 'var(--shadow-lg)',
                  zIndex: 10
                }}
              >
                {navLinksSecondary.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.id}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.6rem',
                        padding: '0.5rem 0.75rem',
                        fontSize: '0.85rem',
                        borderRadius: 'var(--radius-sm)',
                        color: activeSection === link.id ? 'var(--color-emerald)' : 'var(--text-primary)',
                        backgroundColor: activeSection === link.id ? 'var(--color-emerald-subtle)' : 'transparent',
                        fontWeight: activeSection === link.id ? 700 : 500
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--bg-secondary)'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = activeSection === link.id ? 'var(--color-emerald-subtle)' : 'transparent'}
                    >
                      <Icon size={16} style={{ color: 'var(--color-mustard)' }} />
                      <span>{link.name}</span>
                    </a>
                  );
                })}
              </div>
            )}
          </div>
        </nav>

        {/* Action Controls: Search, Theme Toggle, Mobile Menu Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          {/* Global Search Button */}
          <button
            onClick={onOpenSearch}
            aria-label="Search website"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.45rem 0.85rem',
              borderRadius: 'var(--radius-full)',
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border-light)',
              color: 'var(--text-secondary)',
              fontSize: '0.85rem',
              cursor: 'pointer',
              transition: 'all var(--transition-fast)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-mustard)';
              e.currentTarget.style.color = 'var(--color-mustard)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border-light)';
              e.currentTarget.style.color = 'var(--text-secondary)';
            }}
          >
            <Search size={16} />
            <span className="search-text" style={{ fontSize: '0.8rem' }}>Search</span>
            <kbd style={{
              fontSize: '0.68rem',
              padding: '0.1rem 0.35rem',
              borderRadius: '4px',
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-medium)',
              color: 'var(--text-muted)'
            }}>
              Ctrl+K
            </kbd>
          </button>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border-light)',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              transition: 'all var(--transition-fast)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            {theme === 'dark' ? (
              <Sun size={18} style={{ color: '#F1A31B' }} />
            ) : (
              <Moon size={18} style={{ color: '#184E33' }} />
            )}
          </button>

          {/* Mobile Drawer Hamburger */}
          <button
            className="mobile-hamburger-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            style={{
              width: '40px',
              height: '40px',
              borderRadius: 'var(--radius-sm)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border-light)',
              color: 'var(--text-primary)',
              cursor: 'pointer'
            }}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div 
          className="mobile-drawer"
          style={{
            position: 'fixed',
            top: 'var(--navbar-height)',
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'var(--bg-card)',
            borderTop: '1px solid var(--border-light)',
            overflowY: 'auto',
            padding: '1.25rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.4rem',
            zIndex: 99
          }}
        >
          <div style={{
            fontSize: '0.8rem',
            textTransform: 'uppercase',
            fontWeight: 700,
            letterSpacing: '0.05em',
            color: 'var(--text-muted)',
            marginBottom: '0.5rem',
            paddingLeft: '0.5rem'
          }}>
            Explore Punjab Sections
          </div>
          {allNavLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.85rem',
                  padding: '0.8rem 1rem',
                  borderRadius: 'var(--radius-md)',
                  color: activeSection === link.id ? 'var(--color-emerald)' : 'var(--text-primary)',
                  backgroundColor: activeSection === link.id ? 'var(--color-emerald-subtle)' : 'transparent',
                  fontWeight: activeSection === link.id ? 700 : 500,
                  fontSize: '1rem',
                  textDecoration: 'none'
                }}
              >
                <Icon size={20} style={{ color: 'var(--color-mustard)' }} />
                <span>{link.name}</span>
              </a>
            );
          })}
        </div>
      )}

      {/* Responsive Inline CSS for desktop vs mobile toggle */}
      <style>{`
        @media (min-width: 1040px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-hamburger-btn {
            display: none !important;
          }
        }
        @media (max-width: 580px) {
          .search-text {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
