import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import {
  Award,
  X,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Calendar,
  Building2,
  FileCheck2,
  ZoomIn,
  Sparkles,
  Check,
  Github,
  Terminal,
  Code2,
  Layers,
  ArrowUpRight
} from "lucide-react";
import { C, fontMono, fontDisplay, profile } from "../data";

/* ---------------- scroll reveal ---------------- */
export function Reveal({ children, delay = 0, style = {}, as: Tag = "div", className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.65s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s, transform 0.65s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s`,
        ...style,
      }}
    >
      {children}
    </Tag>
  );
}

/* ---------------- avatar profil ---------------- */
export function Avatar({ size = 120, showStatus = true }) {
  const [gagalMuat, setGagalMuat] = useState(false);

  return (
    <div style={{ position: "relative", width: size, height: size, flexShrink: 0 }}>
      {/* Glowing ring */}
      <div style={{
        position: "absolute", inset: -4, borderRadius: "50%",
        background: `linear-gradient(135deg, var(--terracotta), var(--navy))`,
        opacity: 0.85,
        filter: "blur(2px)",
      }} />

      <div style={{
        position: "relative", width: size, height: size, borderRadius: "50%",
        overflow: "hidden", border: `3px solid var(--bg-surface)`,
        background: `linear-gradient(135deg, #1E2D45, #C46A4A)`,
        display: "flex", alignItems: "center", justifyContent: "center",
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.25)",
      }}>
        {!gagalMuat ? (
          <img
            src={profile.fotoSrc}
            alt={`Foto profil ${profile.nama}`}
            onError={() => setGagalMuat(true)}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        ) : (
          <span style={{
            color: "#FFFFFF", fontFamily: fontDisplay, fontWeight: 700,
            fontSize: size * 0.38, letterSpacing: "-0.02em",
          }}>
            {profile.inisial}
          </span>
        )}
      </div>

      {showStatus && (
        <div
          title="Tersedia untuk peluang kerja / magang"
          style={{
            position: "absolute", bottom: 4, right: 4, width: size * 0.22, height: size * 0.22,
            borderRadius: "50%", background: "var(--success)", border: `2.5px solid var(--bg-surface)`,
            display: "flex", alignItems: "center", justifyContent: "center",
          }}
          className="live-pulse"
        />
      )}
    </div>
  );
}

/* ---------------- eyebrow badge ---------------- */
export function Eyebrow({ children, icon: Icon = Sparkles }) {
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 8,
      fontFamily: fontMono, fontSize: 11.5, letterSpacing: "0.08em", textTransform: "uppercase",
      color: "var(--badge-color)", padding: "6px 14px", borderRadius: 999,
      border: `1px solid var(--badge-border)`, background: "var(--badge-bg)",
      fontWeight: 600,
    }}>
      <Icon size={13} color="var(--badge-color)" />
      {children}
    </span>
  );
}

/* ---------------- tag ---------------- */
export function Tag({ children }) {
  return (
    <span style={{
      fontFamily: fontMono, fontSize: 11, letterSpacing: "0.02em",
      padding: "4px 10px", borderRadius: 999,
      background: "var(--bg-soft)", color: "var(--text-primary)",
      border: "1px solid var(--border-color)",
      fontWeight: 500, display: "inline-flex", alignItems: "center",
    }}>{children}</span>
  );
}

/* ---------------- pill ---------------- */
export function Pill({ children, active = false, onClick }) {
  return (
    <button
      onClick={onClick}
      className="icon-btn"
      style={{
        fontSize: 13, padding: "8px 18px", borderRadius: 999,
        background: active ? "var(--terracotta)" : "var(--bg-surface)",
        border: `1px solid ${active ? "var(--terracotta)" : "var(--border-color)"}`,
        color: active ? "#FFFFFF" : "var(--text-primary)",
        fontWeight: active ? 600 : 500,
        cursor: onClick ? "pointer" : "default",
        display: "inline-flex", alignItems: "center", gap: 6,
      }}
    >
      {children}
    </button>
  );
}

/* ---------------- card ---------------- */
export function Card({
  children,
  style = {},
  hover = true,
  className = "",
  accent = true,
  accentColor = "var(--terracotta)",
  float = false,
  floatDelay = 0,
  onClick,
}) {
  const inner = (
    <div
      className={`${hover ? "card-hover" : ""} ${className}`}
      onClick={onClick}
      style={{
        background: "var(--bg-card)",
        border: `1px solid var(--border-color)`,
        borderRadius: 18,
        boxShadow: "var(--card-shadow)",
        overflow: "hidden",
        position: "relative",
        ...style,
      }}
    >
      {accent && (
        <div style={{
          height: 4,
          background: `linear-gradient(90deg, ${accentColor}, var(--terracotta-light))`,
        }} />
      )}
      {children}
    </div>
  );

  if (!float) return inner;

  return (
    <div className="card-float" style={{ animationDelay: `${floatDelay}s` }}>
      {inner}
    </div>
  );
}

/* ---------------- section header ---------------- */
export function SectionHeader({ eyebrow, title, desc, maxWidth = 650, align = "left" }) {
  return (
    <Reveal style={{ maxWidth, marginBottom: 44, textAlign: align, margin: align === "center" ? "0 auto 44px" : "0 0 44px" }}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 style={{
        fontFamily: fontDisplay, fontSize: "clamp(28px, 4vw, 40px)",
        fontWeight: 700, letterSpacing: "-0.02em", margin: "16px 0 12px",
        color: "var(--text-primary)", lineHeight: 1.18,
      }}>
        {title}
      </h2>
      {desc && <p style={{ color: "var(--text-secondary)", fontSize: 15.5, lineHeight: 1.7 }}>{desc}</p>}
    </Reveal>
  );
}

/* ---------------- Project Detail Modal ---------------- */
export function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "unset";
    };
  }, [onClose]);

  if (!project) return null;
  const Icon = project.icon;

  return createPortal(
    <div
      className="modal-portal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="modal-portal-card"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Tutup modal"
        >
          <X size={18} strokeWidth={2.5} />
        </button>

        {/* Modal Top Graphic Header */}
        <div style={{
          padding: "clamp(20px, 4vw, 32px) clamp(16px, 4vw, 28px)",
          paddingRight: "clamp(50px, 8vw, 64px)",
          background: project.grad,
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
          color: "#FFFFFF",
          overflow: "hidden",
          flexWrap: "wrap",
        }}>
          <div style={{ position: "relative", zIndex: 2, maxWidth: 580, flex: "1 1 240px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10, flexWrap: "wrap" }}>
              <span style={{
                background: "rgba(255, 255, 255, 0.22)", backdropFilter: "blur(6px)",
                color: "#FFFFFF", padding: "4px 10px", borderRadius: 999,
                fontSize: 11, fontFamily: fontMono, fontWeight: 600,
              }}>
                {project.category}
              </span>
              {project.year && (
                <span style={{
                  background: "rgba(0, 0, 0, 0.35)", padding: "4px 10px", borderRadius: 999,
                  fontSize: 11, fontFamily: fontMono, color: "#FFFFFF",
                }}>
                  Tahun {project.year}
                </span>
              )}
            </div>
            <h2 style={{ fontFamily: fontDisplay, fontSize: "clamp(20px, 4vw, 28px)", fontWeight: 700, lineHeight: 1.25, margin: "4px 0 8px" }}>
              {project.title}
            </h2>
            <p style={{ fontSize: "clamp(13px, 2vw, 14px)", color: "rgba(255, 255, 255, 0.9)", lineHeight: 1.55 }}>
              {project.desc}
            </p>
          </div>

          <div style={{
            width: "clamp(48px, 8vw, 72px)", height: "clamp(48px, 8vw, 72px)", borderRadius: 16,
            background: "rgba(255, 255, 255, 0.18)", backdropFilter: "blur(8px)",
            display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
          }}>
            <Icon size={32} color="#FFFFFF" strokeWidth={1.5} />
          </div>
        </div>

        {/* Modal Body */}
        <div style={{ padding: "clamp(18px, 4vw, 28px) clamp(16px, 4vw, 28px) clamp(24px, 4vw, 36px)", display: "flex", flexDirection: "column", gap: 20 }}>
          {/* Terminal Box for C Project */}
          {project.hasTerminalPreview && project.terminalArt && (
            <div>
              <span style={{ fontSize: 12, fontFamily: fontMono, color: "var(--terracotta)", fontWeight: 600, display: "block", marginBottom: 8 }}>
                Pratinjau Antarmuka Console (CLI):
              </span>
              <div className="terminal-window">
                <div className="terminal-header">
                  <div className="terminal-dots">
                    <span className="terminal-dot" style={{ background: "#EF4444" }} />
                    <span className="terminal-dot" style={{ background: "#F59E0B" }} />
                    <span className="terminal-dot" style={{ background: "#10B981" }} />
                  </div>
                  <span style={{ fontSize: 11, color: "rgba(255,255,255,0.6)" }}>laundry_system.exe</span>
                  <div style={{ width: 40 }} />
                </div>
                <div
                  className="terminal-body"
                  style={{
                    fontSize: "clamp(8px, 2.3vw, 12px)",
                    overflowX: "auto",
                    WebkitOverflowScrolling: "touch",
                    lineHeight: 1.45,
                    padding: "12px 14px",
                  }}
                >
                  {project.terminalArt}
                </div>
              </div>
            </div>
          )}

          {/* Highlights / Responsibilities */}
          {project.highlights && (
            <div>
              <span style={{ fontSize: 12, fontFamily: fontMono, color: "var(--terracotta)", fontWeight: 600, display: "block", marginBottom: 10 }}>
                Rincian Fitur & Implementasi Teknis:
              </span>
              <div style={{
                background: "var(--bg-soft)", padding: "clamp(14px, 3vw, 18px) clamp(14px, 3vw, 20px)", borderRadius: 14,
                border: "1px solid var(--border-color)",
              }}>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                  {project.highlights.map((h, i) => (
                    <li key={i} style={{ fontSize: "clamp(12.5px, 2.5vw, 13.5px)", color: "var(--text-secondary)", display: "flex", alignItems: "flex-start", gap: 8, lineHeight: 1.55 }}>
                      <CheckCircle2 size={15} color="var(--terracotta)" style={{ marginTop: 3, flexShrink: 0 }} />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Tech Stacks */}
          <div>
            <span style={{ fontSize: 12, fontFamily: fontMono, color: "var(--text-faint)", fontWeight: 600, display: "block", marginBottom: 8 }}>
              Teknologi yang Digunakan:
            </span>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {project.tags.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div style={{
            paddingTop: 16, borderTop: `1px solid var(--border-color)`,
            display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center",
          }}>
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{
                  padding: "10px 20px", borderRadius: 10, fontSize: 13.5,
                  display: "inline-flex", alignItems: "center", gap: 6,
                  textDecoration: "none",
                }}
              >
                <ExternalLink size={15} /> Live Demo (Vercel)
              </a>
            )}

            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{
                  padding: "10px 18px", borderRadius: 10, fontSize: 13.5,
                  display: "inline-flex", alignItems: "center", gap: 6,
                  textDecoration: "none",
                }}
              >
                <Github size={15} /> Repositori GitHub
              </a>
            )}

            {project.vercelDeployUrl && (
              <a
                href={project.vercelDeployUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: 12, color: "var(--text-secondary)", textDecoration: "underline",
                  marginLeft: "auto", display: "inline-flex", alignItems: "center", gap: 4,
                  padding: "6px 0",
                }}
              >
                Vercel Dashboard <ArrowUpRight size={13} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}

/* ---------------- Modal Sertifikat (via React Portal) ---------------- */
export function CertificateModal({ item, onClose, onPrev, onNext, currentIndex, totalItems }) {
  const [imgBroken, setImgBroken] = useState(false);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && onPrev) onPrev();
      if (e.key === "ArrowRight" && onNext) onNext();
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "unset";
    };
  }, [onClose, onPrev, onNext]);

  if (!item) return null;

  return createPortal(
    <div
      className="modal-portal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="cert-modal-title"
    >
      <div
        className="modal-portal-card"
        onClick={(e) => e.stopPropagation()}
        style={{ padding: 0 }}
      >
        {/* Tombol Tutup */}
        <button
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Tutup modal sertifikat"
        >
          <X size={18} strokeWidth={2.5} />
        </button>

        {/* Modal Header bar */}
        <div style={{
          padding: "14px clamp(14px, 4vw, 24px)",
          paddingRight: "clamp(50px, 8vw, 64px)",
          borderBottom: `1px solid var(--border-color)`,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "var(--bg-soft)",
          flexWrap: "wrap",
          gap: 10,
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
            <span style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              background: "var(--badge-bg)", color: "var(--terracotta)",
              padding: "4px 10px", borderRadius: 999, fontSize: 11.5, fontWeight: 600, fontFamily: fontMono,
            }}>
              <CheckCircle2 size={13} color="var(--terracotta)" /> Sertifikat Terverifikasi
            </span>
            <span style={{ fontSize: 12, color: "var(--text-secondary)", fontFamily: fontMono }}>
              {currentIndex + 1} dari {totalItems}
            </span>
          </div>

          {/* Navigasi panah */}
          <div style={{ display: "flex", gap: 6 }}>
            <button
              onClick={onPrev}
              className="icon-btn"
              title="Sertifikat Sebelumnya"
              style={{
                width: 32, height: 32, borderRadius: "50%",
                display: "flex", alignItems: "center",
                justifyContent: "center", cursor: "pointer",
              }}
            >
              <ChevronLeft size={17} />
            </button>
            <button
              onClick={onNext}
              className="icon-btn"
              title="Sertifikat Berikutnya"
              style={{
                width: 32, height: 32, borderRadius: "50%",
                display: "flex", alignItems: "center",
                justifyContent: "center", cursor: "pointer",
              }}
            >
              <ChevronRight size={17} />
            </button>
          </div>
        </div>

        {/* Modal Body: Image Preview + Details */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
          gap: 20,
          padding: "clamp(16px, 4vw, 24px)",
          alignItems: "start",
        }}>
          {/* Gambar Sertifikat */}
          <div style={{
            background: "#1E2D45",
            borderRadius: 14,
            overflow: "hidden",
            border: `1px solid var(--border-color)`,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.25)",
          }}>
            {!imgBroken ? (
              <img
                src={item.img}
                alt={item.title}
                onError={() => setImgBroken(true)}
                style={{
                  width: "100%",
                  maxHeight: "clamp(220px, 45vh, 440px)",
                  objectFit: "contain",
                  display: "block",
                  background: "#1E2D45",
                }}
              />
            ) : (
              <div style={{
                padding: "48px 20px", textAlign: "center", color: "#FFFFFF",
                display: "flex", flexDirection: "column", alignItems: "center", gap: 10,
              }}>
                <Award size={48} color="var(--terracotta-light)" strokeWidth={1.5} />
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.8)" }}>Pratinjau visual sertifikat</p>
              </div>
            )}

            {/* Quick Action under image */}
            <div style={{
              width: "100%", padding: "10px 14px", background: "rgba(10, 15, 29, 0.95)",
              display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid rgba(255,255,255,0.1)",
              flexWrap: "wrap", gap: 8,
            }}>
              <span style={{ color: "rgba(255,255,255,0.7)", fontSize: 11.5, fontFamily: fontMono }}>
                ID: {item.credentialId || "PUB-VERIFIED"}
              </span>
              <a
                href={item.img}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 6,
                  color: "var(--terracotta-light)", fontSize: 12, fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                <ZoomIn size={13} /> Resolusi Penuh
              </a>
            </div>
          </div>

          {/* Informasi Sertifikat */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div>
              <span style={{
                fontSize: 11, fontFamily: fontMono, color: "var(--terracotta)",
                textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 600,
              }}>
                Kredensial Kompetensi
              </span>
              <h3 id="cert-modal-title" style={{
                fontFamily: fontDisplay, fontSize: "clamp(18px, 3.5vw, 22px)", fontWeight: 700,
                color: "var(--text-primary)", margin: "4px 0 8px", lineHeight: 1.3,
              }}>
                {item.title}
              </h3>
              <p style={{ fontSize: "clamp(13px, 2vw, 14px)", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                {item.description || "Program pelatihan teknis intensif dengan pengujian proyek akhir dan evaluasi kompetensi standar industri."}
              </p>
            </div>

            {/* Info Items */}
            <div style={{
              display: "grid", gridTemplateColumns: "1fr", gap: 10,
              background: "var(--bg-soft)", padding: "14px 16px", borderRadius: 12, border: `1px solid var(--border-color)`,
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <Building2 size={16} color="var(--terracotta)" flexShrink={0} />
                <div>
                  <span style={{ display: "block", fontSize: 11, color: "var(--text-faint)", fontFamily: fontMono }}>Penerbit</span>
                  <b style={{ fontSize: 13, color: "var(--text-primary)" }}>{item.issuer}</b>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <Calendar size={16} color="var(--terracotta)" flexShrink={0} />
                <div>
                  <span style={{ display: "block", fontSize: 11, color: "var(--text-faint)", fontFamily: fontMono }}>Tanggal Terbit</span>
                  <b style={{ fontSize: 13, color: "var(--text-primary)" }}>{item.date}</b>
                </div>
              </div>
            </div>

            {/* Topik / Keterampilan yang Dipelajari */}
            {item.topics && (
              <div>
                <span style={{
                  display: "block", fontSize: 12, fontWeight: 600, color: "var(--text-primary)", marginBottom: 8,
                }}>
                  Materi & Keterampilan Teruji:
                </span>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {item.topics.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontSize: 11.5, padding: "4px 10px", borderRadius: 999,
                        background: "var(--badge-bg)", color: "var(--text-primary)",
                        border: "1px solid var(--badge-border)",
                        fontWeight: 500,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Footer Buttons */}
            <div style={{ display: "flex", gap: 10, marginTop: 4, flexWrap: "wrap" }}>
              <a
                href={item.img}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{
                  flex: "1 1 140px", padding: "11px 18px", borderRadius: 10, fontSize: 13,
                  display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 6,
                  textDecoration: "none",
                }}
              >
                <ExternalLink size={14} /> Dokumen Asli
              </a>
              <button
                onClick={onClose}
                className="btn-secondary"
                style={{
                  padding: "11px 18px", borderRadius: 10, fontSize: 13,
                }}
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}

/* ---------------- Galeri Sertifikat ---------------- */
function CertificateCard({ c, delay, index, onOpen }) {
  const [broken, setBroken] = useState(false);

  return (
    <Reveal delay={delay}>
      <Card
        onClick={() => onOpen(index)}
        float
        floatDelay={delay}
        accentColor="var(--terracotta)"
        style={{ borderRadius: 16, cursor: "pointer", height: "100%", display: "flex", flexDirection: "column" }}
      >
        {/* Gambar Thumbnail */}
        <div
          className="cert-card-img-wrap"
          style={{ aspectRatio: "16 / 10", width: "100%" }}
        >
          {!broken ? (
            <img
              src={c.img}
              alt={c.title}
              className="cert-card-img"
              onError={() => setBroken(true)}
            />
          ) : (
            <div style={{
              width: "100%", height: "100%", display: "flex", alignItems: "center",
              justifyContent: "center", background: "rgba(30, 45, 69, 0.05)",
            }}>
              <Award size={36} color="var(--terracotta)" strokeWidth={1.5} />
            </div>
          )}

          {/* Hover Overlay Hint */}
          <div className="cert-hover-overlay">
            <span style={{
              background: "var(--bg-surface)", color: "var(--text-primary)", padding: "7px 14px", borderRadius: 999,
              fontSize: 12, fontWeight: 600, display: "inline-flex", alignItems: "center", gap: 6,
              boxShadow: "0 6px 18px rgba(0,0,0,0.25)",
            }}>
              <ZoomIn size={14} color="var(--terracotta)" /> Buka Sertifikat
            </span>
          </div>

          {/* Verified Badge Tag */}
          <div style={{
            position: "absolute", top: 10, right: 10,
            background: "rgba(10, 15, 29, 0.85)", backdropFilter: "blur(4px)",
            color: "#FFFFFF", padding: "4px 8px", borderRadius: 6, fontSize: 10.5,
            fontFamily: fontMono, display: "flex", alignItems: "center", gap: 4,
          }}>
            <CheckCircle2 size={12} color="var(--terracotta-light)" /> Verified
          </div>
        </div>

        {/* Content */}
        <div style={{ padding: "16px 18px", flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div>
            <span style={{
              fontSize: 11, fontFamily: fontMono, color: "var(--terracotta)",
              display: "block", marginBottom: 4, fontWeight: 600,
            }}>
              {c.date}
            </span>
            <h4 style={{
              fontSize: 15, fontWeight: 600, marginBottom: 4,
              fontFamily: fontDisplay, color: "var(--text-primary)", lineHeight: 1.35,
            }}>
              {c.title}
            </h4>
            <span style={{ fontSize: 12, color: "var(--text-secondary)" }}>{c.issuer}</span>
          </div>

          <div style={{
            marginTop: 12, paddingTop: 10, borderTop: `1px solid var(--border-color)`,
            display: "flex", alignItems: "center", justifyContent: "space-between",
          }}>
            <span style={{ fontSize: 11.5, color: "var(--terracotta)", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: 4 }}>
              Buka Bukti Sertifikat →
            </span>
            <FileCheck2 size={15} color="var(--text-faint)" />
          </div>
        </div>
      </Card>
    </Reveal>
  );
}

export function CertificateGallery({ items }) {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openItem = (index) => setSelectedIndex(index);
  const closeItem = () => setSelectedIndex(null);

  const prevItem = () => {
    setSelectedIndex((curr) => (curr > 0 ? curr - 1 : items.length - 1));
  };

  const nextItem = () => {
    setSelectedIndex((curr) => (curr < items.length - 1 ? curr + 1 : 0));
  };

  return (
    <>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 270px), 1fr))",
        gap: 20,
      }}>
        {items.map((c, i) => (
          <CertificateCard
            key={c.id || c.title}
            c={c}
            index={i}
            delay={Math.min(i * 0.08, 0.35)}
            onOpen={openItem}
          />
        ))}
      </div>

      {selectedIndex !== null && (
        <CertificateModal
          item={items[selectedIndex]}
          currentIndex={selectedIndex}
          totalItems={items.length}
          onClose={closeItem}
          onPrev={prevItem}
          onNext={nextItem}
        />
      )}
    </>
  );
}

/* ---------------- Toast Notification ---------------- */
export function Toast({ message, visible, onClose }) {
  if (!visible) return null;

  return createPortal(
    <div className="toast-container" onClick={onClose}>
      <div style={{
        background: "var(--bg-card)", color: "var(--text-primary)", padding: "12px 18px", borderRadius: 14,
        boxShadow: "0 15px 35px rgba(0, 0, 0, 0.35)", display: "flex", alignItems: "center", gap: 10,
        border: `1px solid var(--terracotta)`, maxWidth: "calc(100vw - 32px)", cursor: "pointer",
      }}>
        <div style={{
          width: 24, height: 24, borderRadius: "50%", background: "var(--terracotta)",
          display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
        }}>
          <Check size={14} color="#FFFFFF" strokeWidth={3} />
        </div>
        <span style={{ fontSize: 13, fontWeight: 500, lineHeight: 1.4 }}>
          {message}
        </span>
      </div>
    </div>,
    document.body
  );
}
