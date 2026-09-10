import React, { useState } from "react";
import { ExternalLink, Github, CheckCircle2, Eye, Terminal } from "lucide-react";
import { fontDisplay, fontMono, projects } from "../data";
import { Card, Tag, SectionHeader, Reveal, ProjectModal } from "../components/ui";
import ProjectSlideshow from "../components/ProjectSlideshow";

export default function Work() {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    "Semua",
    "React Lanjutan",
    "React Dasar",
    "HTML & Web",
    "Bahasa C",
    "React + Java"
  ];

  const filteredProjects = activeCategory === "Semua"
    ? projects
    : projects.filter((p) => p.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <section style={{ maxWidth: 1160, margin: "0 auto", padding: "clamp(36px, 6vw, 56px) clamp(16px, 4vw, 24px) clamp(48px, 8vw, 96px)" }}>
      <SectionHeader
        eyebrow="Pengalaman Proyek & Portofolio"
        title="Daftar Proyek & Implementasi Teknis"
        desc="Seluruh pengalaman pembuatan aplikasi web modern dan sistem CLI yang telah saya bangun, lengkap dengan repositori GitHub dan live demo Vercel yang dapat dicoba langsung."
      />

      {/* Filter Tabs (Horizontal Scrollable on Mobile) */}
      <Reveal delay={0.05}>
        <div style={{ marginBottom: 32, overflowX: "auto", paddingBottom: 4 }}>
          <div
            className="filter-scroll-container"
            style={{
              padding: "4px", background: "var(--bg-surface)",
              borderRadius: 999, width: "max-content", border: `1px solid var(--border-color)`,
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.04)",
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  border: "none",
                  cursor: "pointer",
                  padding: "8px 16px",
                  borderRadius: 999,
                  fontSize: 12.5,
                  fontWeight: activeCategory === cat ? 600 : 500,
                  background: activeCategory === cat ? "var(--terracotta)" : "transparent",
                  color: activeCategory === cat ? "#FFFFFF" : "var(--text-primary)",
                  transition: "all 0.25s ease",
                  whiteSpace: "nowrap",
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Projects Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: "clamp(20px, 4vw, 28px)" }}>
        {filteredProjects.map((p, i) => {
          const Icon = p.icon;

          return (
            <Reveal key={p.id} delay={(i % 2) * 0.1}>
              <Card
                float
                floatDelay={(i % 3) * 0.35}
                accentColor={p.accentColor || "var(--terracotta)"}
                style={{ height: "100%", display: "flex", flexDirection: "column" }}
              >
                {/* Header Grafis dengan Slideshow Otomatis */}
                <div
                  onClick={() => setSelectedProject(p)}
                  style={{
                    height: "clamp(180px, 24vw, 210px)", background: p.grad, position: "relative",
                    overflow: "hidden", cursor: "pointer",
                  }}
                  title="Klik untuk membuka detail lengkap proyek"
                >
                  {p.screenshots && p.screenshots.length > 0 ? (
                    <ProjectSlideshow
                      images={p.screenshots}
                      alt={p.title}
                      fit="cover"
                    />
                  ) : (
                    <div style={{
                      position: "absolute", inset: 0,
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                      <Icon size={54} color="#FFFFFF" strokeWidth={1.4} />
                    </div>
                  )}

                  <div style={{
                    position: "absolute", top: 12, left: 14, zIndex: 5,
                    background: "rgba(255, 255, 255, 0.22)", backdropFilter: "blur(6px)",
                    color: "#FFFFFF", padding: "4px 10px", borderRadius: 999,
                    fontSize: 11, fontFamily: fontMono, fontWeight: 600,
                  }}>
                    {p.category}
                  </div>

                  {p.badge && (
                    <div style={{
                      position: "absolute", bottom: 10, right: 12, zIndex: 5,
                      background: "rgba(10, 15, 29, 0.85)", color: "#FFFFFF",
                      padding: "4px 8px", borderRadius: 6, fontSize: 10.5, fontFamily: fontMono,
                    }}>
                      {p.badge}
                    </div>
                  )}

                  {/* Click hint */}
                  <div style={{
                    position: "absolute", bottom: 10, left: 12, zIndex: 5,
                    background: "rgba(255, 255, 255, 0.2)", backdropFilter: "blur(4px)",
                    color: "#FFFFFF", padding: "3px 8px", borderRadius: 6, fontSize: 10.5,
                    fontFamily: fontMono, display: "flex", alignItems: "center", gap: 4,
                  }}>
                    <Eye size={12} /> Detail
                  </div>
                </div>

                {/* Info Konten */}
                <div style={{
                  padding: "20px clamp(16px, 4vw, 24px) 22px", flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between",
                }}>
                  <div>
                    <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 12 }}>
                      {p.tags.map((t) => <Tag key={t}>{t}</Tag>)}
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

                    <p style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: 12 }}>
                      {p.desc}
                    </p>

                    {/* Rincian Poin Tugas Proyek sesuai CV */}
                    {p.highlights && (
                      <div style={{
                        background: "var(--bg-soft)", padding: "12px 14px", borderRadius: 12,
                        border: `1px solid var(--border-color)`, margin: "12px 0 16px",
                      }}>
                        <span style={{ fontSize: 11, fontFamily: fontMono, color: "var(--terracotta)", fontWeight: 600, display: "block", marginBottom: 6 }}>
                          Fitur & Tanggung Jawab Utama:
                        </span>
                        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 5 }}>
                          {p.highlights.slice(0, 2).map((h, idx) => (
                            <li key={idx} style={{ fontSize: 12, color: "var(--text-secondary)", display: "flex", alignItems: "flex-start", gap: 6, lineHeight: 1.45 }}>
                              <CheckCircle2 size={13} color="var(--terracotta)" style={{ marginTop: 2, flexShrink: 0 }} />
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Tombol Aksi */}
                  <div style={{
                    paddingTop: 14, borderTop: `1px solid var(--border-color)`,
                    display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center",
                  }}>
                    {p.demoUrl ? (
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
                    ) : p.hasTerminalPreview ? (
                      <button
                        onClick={() => setSelectedProject(p)}
                        className="btn-primary"
                        style={{
                          padding: "8px 16px", borderRadius: 999, fontSize: 12,
                          display: "inline-flex", alignItems: "center", gap: 5,
                        }}
                      >
                        <Terminal size={13} /> Console
                      </button>
                    ) : (
                      <button
                        onClick={() => setSelectedProject(p)}
                        className="btn-primary"
                        style={{
                          padding: "8px 16px", borderRadius: 999, fontSize: 12,
                          display: "inline-flex", alignItems: "center", gap: 5,
                        }}
                      >
                        <Eye size={13} /> Rincian
                      </button>
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
                  </div>
                </div>
              </Card>
            </Reveal>
          );
        })}
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
