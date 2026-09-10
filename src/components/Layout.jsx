import React from "react";
import { Outlet, NavLink, useNavigate, useLocation } from "react-router-dom";
import { Home, Briefcase, Award, MessageSquare, ArrowUpRight, Github, Linkedin, Mail, Sun, Moon, Sparkles } from "lucide-react";
import { C, fontDisplay, fontBody, fontMono, profile } from "../data";
import { useTheme } from "../context/ThemeContext";

const navItems = [
  { path: "/", label: "Beranda" },
  { path: "/work", label: "Karya" },
  { path: "/expertise", label: "Keahlian & Sertifikat" },
  { path: "/contact", label: "Kontak" },
];

const mobileNavItems = [
  { path: "/", label: "Beranda", Icon: Home },
  { path: "/work", label: "Karya", Icon: Briefcase },
  { path: "/expertise", label: "Keahlian", Icon: Award },
  { path: "/contact", label: "Kontak", Icon: MessageSquare },
];

export default function Layout() {
  const navigate = useNavigate();
  const location = useLocation();
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <div style={{
      background: "var(--bg-primary)",
      color: "var(--text-primary)",
      fontFamily: fontBody,
      minHeight: "100vh",
      backgroundImage: isDark
        ? `
          radial-gradient(circle at 10% 15%, rgba(222, 126, 94, 0.15) 0%, transparent 40%),
          radial-gradient(circle at 90% 35%, rgba(96, 165, 250, 0.12) 0%, transparent 45%),
          radial-gradient(circle at 30% 85%, rgba(222, 126, 94, 0.1) 0%, transparent 40%),
          radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px)
        `
        : `
          radial-gradient(circle at 10% 15%, rgba(196, 106, 74, 0.12) 0%, transparent 40%),
          radial-gradient(circle at 90% 35%, rgba(30, 45, 69, 0.1) 0%, transparent 45%),
          radial-gradient(circle at 30% 85%, rgba(196, 106, 74, 0.08) 0%, transparent 40%),
          radial-gradient(rgba(30, 45, 69, 0.06) 1px, transparent 1px)
        `,
      backgroundSize: "auto, auto, auto, 28px 28px",
      backgroundRepeat: "no-repeat, no-repeat, no-repeat, repeat",
      position: "relative",
      overflowX: "hidden",
      display: "flex",
      flexDirection: "column",
      transition: "background 0.3s ease, color 0.3s ease",
    }}>
      {/* Garis Aksen Top Bar Tiga Warna */}
      <div style={{
        position: "fixed", top: 0, left: 0, right: 0, height: 3.5, zIndex: 100,
        background: `linear-gradient(90deg, var(--terracotta), var(--terracotta-light), #38BDF8)`,
      }} />

      {/* Ambient Floating Glow Blobs */}
      <div className="blob blob-terracotta" style={{
        top: -100, left: "5%", width: 440, height: 440,
      }} />
      <div className="blob blob-navy" style={{
        top: 280, right: "-4%", width: 500, height: 500,
      }} />
      <div className="blob blob-terracotta" style={{
        bottom: 120, left: "25%", width: 380, height: 380,
      }} />

      {/* HEADER NAVIGATION */}
      <header style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 80,
        background: "var(--nav-bg)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: `1px solid var(--border-color)`,
        transition: "all 0.3s ease",
      }}>
        <div style={{
          maxWidth: 1160, margin: "0 auto", padding: "0 clamp(14px, 4vw, 24px)", height: 74,
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          {/* Logo / Monogram */}
          <NavLink
            to="/"
            style={{
              display: "flex", alignItems: "center", gap: 10,
              textDecoration: "none", color: "var(--text-primary)",
              minWidth: 0,
            }}
          >
            <div style={{
              width: 38, height: 38, borderRadius: 10, flexShrink: 0,
              background: `linear-gradient(135deg, var(--terracotta), #1E2D45)`,
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "#FFFFFF", fontFamily: fontDisplay, fontWeight: 700, fontSize: 16,
              boxShadow: "0 4px 12px rgba(196, 106, 74, 0.3)",
            }}>
              YH
            </div>
            <div style={{ display: "flex", flexDirection: "column", minWidth: 0 }}>
              <span style={{
                fontFamily: fontDisplay, fontWeight: 700, fontSize: "clamp(15px, 4vw, 17px)", letterSpacing: "-0.01em", color: "var(--text-primary)",
                whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
              }}>
                {profile.nama}
              </span>
              <span style={{ fontSize: 11, color: "var(--text-secondary)", fontFamily: fontMono, whiteSpace: "nowrap" }}>
                Frontend Developer
              </span>
            </div>
          </NavLink>

          {/* Desktop Nav Links */}
          <nav className="nav-links-desktop" style={{
            display: "flex", alignItems: "center", gap: 8,
            background: "var(--bg-surface)", padding: "4px 8px",
            borderRadius: 999, border: `1px solid var(--border-color)`,
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.05)",
          }}>
            {navItems.map(({ path, label }) => (
              <NavLink
                key={path}
                to={path}
                end={path === "/"}
                className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
                style={{
                  fontSize: 13.5, textDecoration: "none",
                }}
              >
                {label}
              </NavLink>
            ))}
          </nav>

          {/* Action CTA Header + Theme Toggle Switcher */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="theme-toggle-btn"
              title={isDark ? "Ganti ke Mode Terang (Light Mode)" : "Ganti ke Mode Gelap (Dark Mode)"}
              aria-label="Toggle dark/light mode"
            >
              {isDark ? (
                <Sun size={19} color="#FBBF24" strokeWidth={2.2} />
              ) : (
                <Moon size={19} color="#1E2D45" strokeWidth={2.2} />
              )}
            </button>

            <button
              onClick={() => navigate("/contact")}
              className="btn-primary header-cta-desktop"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "10px 20px", borderRadius: 999, fontSize: 13.5,
                textDecoration: "none",
              }}
            >
              Hubungi Saya <ArrowUpRight size={15} />
            </button>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT AREA */}
      <main
        key={location.pathname}
        className="page-fade-in"
        style={{
          paddingTop: 80,
          paddingBottom: "clamp(40px, 8vw, 60px)",
          position: "relative",
          zIndex: 1,
          flex: 1,
          width: "100%",
        }}
      >
        <Outlet />
      </main>

      {/* FOOTER */}
      <footer style={{
        position: "relative",
        zIndex: 1,
        borderTop: `1px solid var(--border-color)`,
        background: "var(--bg-card-subtle)",
        marginTop: 48,
        padding: "48px clamp(16px, 4vw, 24px) calc(96px + env(safe-area-inset-bottom, 0px))",
      }}>
        <div style={{
          maxWidth: 1160, margin: "0 auto",
          display: "flex", justifyContent: "space-between", alignItems: "center",
          flexWrap: "wrap", gap: 24,
        }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8, flexWrap: "wrap" }}>
              <b style={{ fontFamily: fontDisplay, fontSize: 18, color: "var(--text-primary)" }}>
                {profile.nama}
              </b>
              <span style={{
                background: "var(--success-bg)", color: "var(--success)",
                padding: "3px 8px", borderRadius: 999, fontSize: 11, fontFamily: fontMono, fontWeight: 600,
              }}>
                ● Available for hire
              </span>
            </div>
            <p style={{ fontSize: 13, color: "var(--text-secondary)", maxWidth: 420, lineHeight: 1.6 }}>
              Membangun antarmuka web modern dengan React.js, mengutamakan performa, arsitektur bersih, dan pengalaman pengguna optimal.
            </p>
          </div>

          {/* Social Links & Copyright */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 10 }}>
            <div style={{ display: "flex", gap: 10 }}>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-btn"
                style={{
                  width: 38, height: 38, borderRadius: 10,
                  display: "flex", alignItems: "center",
                  justifyContent: "center", textDecoration: "none",
                }}
                title="GitHub"
              >
                <Github size={17} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-btn"
                style={{
                  width: 38, height: 38, borderRadius: 10,
                  display: "flex", alignItems: "center",
                  justifyContent: "center", textDecoration: "none",
                }}
                title="LinkedIn"
              >
                <Linkedin size={17} />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="icon-btn"
                style={{
                  width: 38, height: 38, borderRadius: 10,
                  display: "flex", alignItems: "center",
                  justifyContent: "center", textDecoration: "none",
                }}
                title="Email Langsung"
              >
                <Mail size={17} />
              </a>
            </div>
            <span style={{ fontSize: 12, color: "var(--text-faint)" }}>
              © 2026 {profile.nama} · Mode {isDark ? "Gelap" : "Terang"} aktif
            </span>
          </div>
        </div>
      </footer>

      {/* MOBILE BOTTOM NAVIGATION DOCK */}
      <nav
        className="mobile-nav-dock"
        style={{
          display: "flex", alignItems: "center", gap: 4, background: "var(--dock-bg)", backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          border: `1px solid var(--dock-border)`, borderRadius: 999, padding: "6px 8px",
          boxShadow: "0 12px 36px rgba(0, 0, 0, 0.28)",
        }}
      >
        {mobileNavItems.map(({ path, label, Icon }) => {
          const isActive = location.pathname === path || (path !== "/" && location.pathname.startsWith(path));
          return (
            <NavLink
              key={path}
              to={path}
              end={path === "/"}
              style={{
                display: "flex", alignItems: "center", gap: 5,
                padding: isActive ? "8px 12px" : "8px 10px", borderRadius: 999,
                background: isActive ? "var(--terracotta)" : "transparent",
                color: isActive ? "#FFFFFF" : "var(--text-secondary)",
                textDecoration: "none", fontSize: 12, fontWeight: isActive ? 600 : 500,
                transition: "all 0.25s ease",
                whiteSpace: "nowrap",
              }}
            >
              <Icon size={17} />
              {isActive && (
                <span>
                  {label}
                </span>
              )}
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
}