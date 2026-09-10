import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Code2,
  Sparkles,
  ExternalLink,
  Github,
  Layers,
  GraduationCap,
  FolderGit2,
  MessageCircle,
  Server,
} from "lucide-react";
import { fontDisplay, fontMono, profile, projects, marqueeSkills } from "../data";
import { Eyebrow, Avatar, Card, Tag, Reveal, Toast, ProjectModal } from "../components/ui";
import AboutCard from "../components/AboutCard";

export default function Home() {
  const navigate = useNavigate();
  const [toastMessage, setToastMessage] = useState("");
  const [toastVisible, setToastVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setToastMessage(`Email tersalin: ${profile.email}`);
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 3200);
  };

  return (
    <div style={{ position: "relative" }}>
      <Toast
        message={toastMessage}
        visible={toastVisible}
        onClose={() => setToastVisible(false)}
      />

      {/* HERO SECTION */}
      <section style={{
        maxWidth: 1160, margin: "0 auto", padding: "clamp(36px, 6vw, 64px) clamp(16px, 4vw, 24px) clamp(40px, 6vw, 64px)",
        position: "relative",
      }}>
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          gap: "clamp(28px, 5vw, 44px)", flexWrap: "wrap-reverse",
        }}>
          {/* Text content */}
          <div style={{ maxWidth: 740, flex: "1 1 min(100%, 340px)", minWidth: 0 }}>
            <Reveal>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
                <span style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  padding: "6px 14px", borderRadius: 999, fontSize: 12, fontWeight: 600,
                  background: "var(--success-bg)", color: "var(--success)",
                  border: "1px solid rgba(74, 222, 128, 0.3)",
                }}>
                  <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--success)" }} className="live-pulse" />
                  {profile.role} · {profile.status}
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 style={{
                fontFamily: fontDisplay,
                fontSize: "clamp(32px, 5vw, 58px)",
                lineHeight: 1.12,
                fontWeight: 700,
                letterSpacing: "-0.025em",
                margin: "10px 0 18px",
                color: "var(--text-primary)",
              }}>
                Membangun antarmuka web modern dengan{" "}
                <span className="hero-gradient-text">
                  React.js, kecepatan, dan presisi.
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p style={{
                fontSize: "clamp(14.5px, 2vw, 16px)",
                lineHeight: 1.7,
                color: "var(--text-secondary)",
                maxWidth: 640,
                marginBottom: 32,
              }}>
                {profile.ringkasan}
              </p>
            </Reveal>

            {/* Action Buttons */}
            <Reveal delay={0.24}>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
                <button
                  onClick={() => navigate("/work")}
                  className="btn-primary"
                  style={{
                    display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8,
                    padding: "13px 24px", borderRadius: 999, fontSize: 14,
                  }}
                >
                  Lihat Pengalaman Proyek <ArrowRight size={16} />
                </button>

                <a
                  href={profile.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{
                    display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8,
                    padding: "13px 20px", borderRadius: 999, fontSize: 13.5,
                    textDecoration: "none",
                  }}
                  title="Hubungi via WhatsApp"
                >
                  <MessageCircle size={16} color="var(--success)" /> Chat WhatsApp
                </a>

                <button
                  onClick={copyEmail}
                  style={{
                    background: "none", border: "none", color: "var(--text-primary)",
                    fontWeight: 600, fontSize: 13.5, cursor: "pointer",
                    padding: "12px 14px", textDecoration: "underline", textUnderlineOffset: 4,
                  }}
                >
                  Salin Email
                </button>
              </div>
            </Reveal>

            {/* Quick Metrics Grid */}
            <Reveal delay={0.32}>
              <div style={{
                display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 130px), 1fr))",
                gap: 12, marginTop: 36, maxWidth: 640,
              }}>
                {[
                  { value: "3,73", label: "IPK / 4,00", icon: GraduationCap, sub: "PASIM Bandung" },
                  { value: "5", label: "Pengalaman Proyek", icon: FolderGit2, sub: "React, Web, C & Java" },
                  { value: "6", label: "Pelatihan Resmi", icon: Sparkles, sub: "PUB Bandung" },
                  { value: "Full-Stack", label: "Arah Kemampuan", icon: Server, sub: "Express, Java & SQL" },
                ].map((m) => {
                  const Icon = m.icon;
                  return (
                    <div
                      key={m.label}
                      style={{
                        background: "var(--bg-card)",
                        border: `1px solid var(--border-color)`,
                        padding: "14px 16px",
                        borderRadius: 14,
                        boxShadow: "var(--card-shadow)",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 4 }}>
                        <b style={{
                          fontFamily: fontDisplay, fontSize: 20, fontWeight: 700, color: "var(--terracotta)",
                        }}>
                          {m.value}
                        </b>
                        <Icon size={15} color="var(--terracotta)" opacity={0.8} />
                      </div>
                      <div style={{ fontSize: 12, fontWeight: 600, color: "var(--text-primary)" }}>{m.label}</div>
                      <div style={{ fontSize: 10.5, color: "var(--text-faint)" }}>{m.sub}</div>
                    </div>
                  );
                })}
              </div>
            </Reveal>
          </div>

          {/* Profile Card / Avatar Box */}
          <Reveal delay={0.12} style={{ margin: "0 auto" }}>
            <div style={{
              display: "flex", flexDirection: "column", alignItems: "center",
              background: "var(--bg-card)", border: `1px solid var(--border-color)`,
              borderRadius: 24, padding: "28px 24px",
              boxShadow: "var(--card-shadow)",
              textAlign: "center", maxWidth: 290, width: "100%",
            }}>
              <Avatar size={130} />

              <h2 style={{
                fontFamily: fontDisplay, fontSize: 18, fontWeight: 700,
                color: "var(--text-primary)", marginTop: 16, marginBottom: 4,
              }}>
                {profile.nama}
              </h2>
              <span style={{ fontSize: 12.5, color: "var(--terracotta)", fontWeight: 600, marginBottom: 12 }}>
                Junior Frontend Developer
              </span>

              <div style={{
                fontSize: 12, color: "var(--text-secondary)", background: "var(--bg-soft)",
                padding: "8px 12px", borderRadius: 8, width: "100%", lineHeight: 1.5,
              }}>
                📍 {profile.lokasi}
              </div>

              <div style={{
                marginTop: 14, paddingTop: 12, borderTop: `1px solid var(--border-color)`,
                width: "100%", display: "flex", flexDirection: "column", gap: 8,
              }}>
                <a
                  href={profile.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: 12, color: "var(--success)", fontWeight: 600, textDecoration: "none",
                    display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
                  }}
                >
                  <MessageCircle size={14} /> WhatsApp: {profile.telepon}
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: 11.5, color: "var(--text-secondary)", textDecoration: "none",
                    display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
                  }}
                >
                  <Github size={13} /> github.com/hasanahyusri12-dotcom
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* MARQUEE TECH STACK TICKER */}
      <section style={{
        borderTop: `1px solid var(--border-color)`,
        borderBottom: `1px solid var(--border-color)`,
        background: "var(--bg-card-subtle)",
        padding: "14px 0",
        margin: "0 0 56px",
      }}>
        <div className="marquee-container">
          <div className="marquee-track">
            {marqueeSkills.concat(marqueeSkills).map((skill, idx) => (
              <span
                key={`${skill}-${idx}`}
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  padding: "7px 16px", borderRadius: 999,
                  background: "var(--bg-surface)", border: `1px solid var(--border-color)`,
                  fontSize: 12.5, fontWeight: 600, color: "var(--text-primary)",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.04)",
                  whiteSpace: "nowrap",
                }}
              >
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--terracotta)" }} />
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT ME PROFILE SECTION (Integrated AboutCard) */}
      <AboutCard />

      {/* CORE SKILLS HIGHLIGHT */}
      <section style={{ maxWidth: 1160, margin: "0 auto", padding: "0 clamp(16px, 4vw, 24px) clamp(48px, 8vw, 80px)" }}>
        <Reveal>
          <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 40px" }}>
            <Eyebrow>Kompetensi Utama</Eyebrow>
            <h2 style={{
              fontFamily: fontDisplay, fontSize: "clamp(24px, 3.5vw, 36px)", fontWeight: 700,
              color: "var(--text-primary)", margin: "14px 0 10px",
            }}>
              Fondasi teknis terstruktur & siap pakai
            </h2>
            <p style={{ fontSize: "clamp(13.5px, 2vw, 15px)", color: "var(--text-secondary)", lineHeight: 1.65 }}>
              Mencakup pemrograman web modern, manajemen state React, basis data relasional, dan version control.
            </p>
          </div>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap: 20 }}>
          {[
            {
              icon: Layers,
              title: "Frontend: React.js & Tailwind CSS",
              desc: "Mengembangkan antarmuka berbasis komponen modular, React Hooks (useState, useEffect), dan responsive web design.",
            },
            {
              icon: Server,
              title: "Backend & Database: Express.js, Java & SQL",
              desc: "Konsumsi dan pembuatan REST API, serta manajemen basis data relasional PostgreSQL (DBeaver), MySQL, dan SQL Server.",
            },
            {
              icon: Code2,
              title: "Programming: C, JavaScript & Git",
              desc: "Pemahaman logika algoritma, struktur data, OOP dasar, CRUD, serta version control kolaboratif dengan Git & GitHub.",
            },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={idx * 0.1}>
                <Card
                  float
                  floatDelay={idx * 0.3}
                  accentColor="var(--terracotta)"
                  style={{ padding: "clamp(20px, 4vw, 26px)", height: "100%" }}
                >
                  <div style={{
                    width: 44, height: 44, borderRadius: 12,
                    background: "var(--badge-bg)",
                    border: "1px solid var(--badge-border)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    marginBottom: 16,
                  }}>
                    <Icon size={22} color="var(--terracotta)" />
                  </div>
                  <h3 style={{
                    fontFamily: fontDisplay, fontSize: 17, fontWeight: 700,
                    color: "var(--text-primary)", marginBottom: 8,
                  }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: 13.5, color: "var(--text-secondary)", lineHeight: 1.6 }}>
                    {item.desc}
                  </p>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* FEATURED WORK PREVIEW */}
      <section style={{ maxWidth: 1160, margin: "0 auto", padding: "0 clamp(16px, 4vw, 24px) clamp(48px, 8vw, 96px)" }}>
        <Reveal>
          <div style={{
            display: "flex", justifyContent: "space-between", alignItems: "flex-end",
            flexWrap: "wrap", gap: 16, marginBottom: 32,
          }}>
            <div>
              <Eyebrow>Pengalaman Proyek Unggulan</Eyebrow>
              <h2 style={{
                fontFamily: fontDisplay, fontSize: "clamp(24px, 3.5vw, 36px)", fontWeight: 700,
                color: "var(--text-primary)", margin: "12px 0 6px",
              }}>
                Proyek yang telah diselesaikan
              </h2>
              <p style={{ fontSize: "clamp(13.5px, 2vw, 14.5px)", color: "var(--text-secondary)" }}>
                Implementasi langsung melalui proyek pelatihan dan capstone mandiri dengan live demo Vercel & GitHub.
              </p>
            </div>
            <button
              onClick={() => navigate("/work")}
              className="btn-secondary"
              style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                padding: "10px 18px", borderRadius: 999, fontSize: 13,
              }}
            >
              Lihat Semua ({projects.length} Proyek) <ArrowRight size={15} />
            </button>
          </div>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: "clamp(20px, 4vw, 28px)" }}>
          {projects.slice(0, 3).map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.id} delay={i * 0.12}>
                <Card
                  float
                  floatDelay={i * 0.4}
                  accentColor={p.accentColor || "var(--terracotta)"}
                  style={{ height: "100%", display: "flex", flexDirection: "column" }}
                >
                  {/* Header visual */}
                  <div
                    onClick={() => setSelectedProject(p)}
                    style={{
                      height: 180, background: p.grad, position: "relative",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      overflow: "hidden", cursor: "pointer",
                    }}
                    title="Klik untuk membuka detail lengkap"
                  >
                    <div style={{
                      position: "absolute", top: 12, left: 16,
                      background: "rgba(255, 255, 255, 0.2)", backdropFilter: "blur(6px)",
                      color: "#FFFFFF", padding: "4px 10px", borderRadius: 999,
                      fontSize: 11, fontFamily: fontMono, fontWeight: 600,
                    }}>
                      {p.category}
                    </div>

                    <Icon size={52} color="#FFFFFF" strokeWidth={1.4} />

                    {p.badge && (
                      <div style={{
                        position: "absolute", bottom: 12, right: 16,
                        background: "rgba(10, 15, 29, 0.8)", color: "#FFFFFF",
                        padding: "4px 10px", borderRadius: 6, fontSize: 11, fontFamily: fontMono,
                      }}>
                        {p.badge}
                      </div>
                    )}
                  </div>

                  {/* Body info */}
                  <div style={{ padding: "20px clamp(16px, 4vw, 24px) 22px", flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                    <div>
                      <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 12 }}>
                        {p.tags.slice(0, 3).map((t) => <Tag key={t}>{t}</Tag>)}
                      </div>

                      <h3
                        onClick={() => setSelectedProject(p)}
                        style={{
                          fontSize: 18, fontWeight: 700, marginBottom: 6,
                          fontFamily: fontDisplay, color: "var(--text-primary)", lineHeight: 1.3,
                          cursor: "pointer",
                        }}
                      >
                        {p.title}
                      </h3>

                      <p style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: 16 }}>
                        {p.desc}
                      </p>
                    </div>

                    {/* Action Links */}
                    <div style={{
                      paddingTop: 14, borderTop: `1px solid var(--border-color)`,
                      display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center",
                    }}>
                      {p.demoUrl && (
                        <a
                          href={p.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary"
                          style={{
                            padding: "8px 16px", borderRadius: 999, fontSize: 12,
                            display: "inline-flex", alignItems: "center", gap: 5,
                            textDecoration: "none",
                          }}
                        >
                          <ExternalLink size={13} /> Live Demo
                        </a>
                      )}
                      {p.repoUrl && (
                        <a
                          href={p.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-secondary"
                          style={{
                            padding: "8px 16px", borderRadius: 999, fontSize: 12,
                            display: "inline-flex", alignItems: "center", gap: 5,
                            textDecoration: "none",
                          }}
                        >
                          <Github size={13} /> GitHub
                        </a>
                      )}
                      <button
                        onClick={() => setSelectedProject(p)}
                        style={{
                          background: "none", border: "none", color: "var(--terracotta)",
                          fontSize: 12, fontWeight: 600, cursor: "pointer", padding: "4px 6px",
                          marginLeft: "auto",
                        }}
                      >
                        Detail →
                      </button>
                    </div>
                  </div>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* QUICK CTA BANNER */}
      <section style={{ maxWidth: 1160, margin: "0 auto", padding: "0 clamp(16px, 4vw, 24px) clamp(48px, 8vw, 96px)" }}>
        <Reveal>
          <div style={{
            background: `linear-gradient(135deg, #111A2E 0%, #1E2D45 100%)`,
            borderRadius: 24, padding: "clamp(28px, 5vw, 48px) clamp(20px, 5vw, 36px)", color: "#FFFFFF",
            boxShadow: "0 25px 50px rgba(0, 0, 0, 0.35)",
            border: "1px solid rgba(222, 126, 94, 0.2)",
            display: "flex", justifyContent: "space-between", alignItems: "center",
            flexWrap: "wrap", gap: 24, position: "relative", overflow: "hidden",
          }}>
            <div style={{
              position: "absolute", top: -80, right: -80, width: 280, height: 280,
              borderRadius: "50%", background: "radial-gradient(circle, rgba(222, 126, 94, 0.35), transparent 70%)",
            }} />

            <div style={{ position: "relative", zIndex: 1, maxWidth: 620 }}>
              <span style={{
                fontFamily: fontMono, fontSize: 11.5, textTransform: "uppercase", letterSpacing: "0.1em",
                color: "var(--terracotta-light)", fontWeight: 600,
              }}>
                Hubungi Langsung
              </span>
              <h2 style={{
                fontFamily: fontDisplay, fontSize: "clamp(22px, 3.5vw, 32px)", fontWeight: 700,
                margin: "8px 0 10px", lineHeight: 1.25, color: "#FFFFFF",
              }}>
                Siap berkontribusi pada tim atau proyek web Anda
              </h2>
              <p style={{ fontSize: "clamp(13.5px, 2vw, 14.5px)", color: "rgba(242, 246, 250, 0.85)", lineHeight: 1.6 }}>
                Silakan hubungi melalui WhatsApp <strong>{profile.telepon}</strong> atau kirim pesan formulir online.
              </p>
            </div>

            <div style={{ position: "relative", zIndex: 1, display: "flex", gap: 10, flexWrap: "wrap" }}>
              <a
                href={profile.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{
                  padding: "12px 22px", borderRadius: 999, fontSize: 13.5,
                  display: "inline-flex", alignItems: "center", gap: 6,
                  textDecoration: "none",
                }}
              >
                <MessageCircle size={16} /> Chat WhatsApp
              </a>
              <button
                onClick={() => navigate("/contact")}
                className="btn-secondary"
                style={{
                  padding: "12px 20px", borderRadius: 999, fontSize: 13.5,
                }}
              >
                Form Kontak
              </button>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}