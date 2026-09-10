import React from "react";
import {
  Code2,
  Server,
  Users,
  Terminal,
  Database,
  Layers,
  Wrench
} from "lucide-react";
import { fontDisplay, fontMono, technicalSkills, timeline, beyond, certificates } from "../data";
import { Card, SectionHeader, Reveal, CertificateGallery } from "../components/ui";

export default function Expertise() {
  const skillSections = [
    { title: "Programming", icon: Terminal, items: technicalSkills.programming },
    { title: "Frontend", icon: Layers, items: technicalSkills.frontend },
    { title: "Backend", icon: Server, items: technicalSkills.backend },
    { title: "Database", icon: Database, items: technicalSkills.database },
    { title: "Fundamentals", icon: Code2, items: technicalSkills.fundamentals },
    { title: "Tools & Deploy", icon: Wrench, items: technicalSkills.tools },
  ];

  return (
    <>
      {/* TECHNICAL SKILLS GRID (SESUAI CV) */}
      <section style={{ maxWidth: 1160, margin: "0 auto", padding: "clamp(36px, 6vw, 56px) clamp(16px, 4vw, 24px) clamp(40px, 6vw, 64px)" }}>
        <SectionHeader
          eyebrow="Technical Skills & Tools"
          title="Keahlian Teknis & Alat Pengembangan"
          desc="Kombinasi bahasa pemrograman, teknologi frontend modern, integrasi backend, database, dan tools kerja yang saya kuasai."
        />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap: 18 }}>
          {skillSections.map((sec, idx) => {
            const Icon = sec.icon;
            return (
              <Reveal key={sec.title} delay={idx * 0.08}>
                <Card
                  float
                  floatDelay={idx * 0.25}
                  accentColor="var(--terracotta)"
                  style={{ padding: "clamp(18px, 4vw, 24px)", height: "100%" }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                    <div style={{
                      width: 36, height: 36, borderRadius: 10,
                      background: "var(--badge-bg)", display: "flex", alignItems: "center",
                      justifyContent: "center", color: "var(--terracotta)", flexShrink: 0,
                    }}>
                      <Icon size={18} />
                    </div>
                    <h3 style={{ fontFamily: fontDisplay, fontSize: 16.5, fontWeight: 700, color: "var(--text-primary)" }}>
                      {sec.title}
                    </h3>
                  </div>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {sec.items.map((item) => (
                      <span
                        key={item}
                        style={{
                          fontSize: 12, padding: "4px 10px", borderRadius: 999,
                          background: "var(--bg-soft)", border: `1px solid var(--border-color)`,
                          color: "var(--text-primary)", fontWeight: 500,
                        }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* GALERI SERTIFIKAT TERVERIFIKASI */}
      <section style={{ maxWidth: 1160, margin: "0 auto", padding: "0 clamp(16px, 4vw, 24px) clamp(48px, 8vw, 80px)" }}>
        <SectionHeader
          eyebrow="Bukti Pelatihan & Kredensial"
          title="Sertifikat Resmi Terverifikasi"
          desc="Klik salah satu kartu sertifikat untuk membuka pratinjau resolusi penuh, rincian materi yang diujikan, dan dokumen sertifikat asli."
        />

        <CertificateGallery items={certificates} />
      </section>

      {/* RIWAYAT PENDIDIKAN & PELATIHAN (SESUAI CV) */}
      <section style={{ maxWidth: 1160, margin: "0 auto", padding: "0 clamp(16px, 4vw, 24px) clamp(48px, 8vw, 96px)" }}>
        <SectionHeader
          eyebrow="Pendidikan & Pelatihan"
          title="Riwayat Pendidikan & Program Pelatihan"
          desc="Jalur terstruktur dari perkuliahan D3 Manajemen Informatika di Universitas Nasional PASIM hingga program pelatihan intensif."
        />

        <div style={{ position: "relative", paddingLeft: "clamp(20px, 4vw, 32px)", borderLeft: `2px solid rgba(222, 126, 94, 0.35)`, marginLeft: 6 }}>
          {timeline.map((t, i) => (
            <Reveal key={t.title} delay={Math.min(i * 0.05, 0.3)} style={{ position: "relative", paddingBottom: i === timeline.length - 1 ? 0 : 32 }}>
              {/* Timeline Glowing Dot */}
              <span
                className={t.now ? "dot-pulse" : ""}
                style={{
                  position: "absolute", left: "calc(-1 * clamp(20px, 4vw, 32px) - 6px)", top: 6, width: 10, height: 10, borderRadius: "50%",
                  background: t.now ? "var(--terracotta)" : "var(--bg-surface)",
                  border: `2px solid var(--terracotta)`,
                  boxShadow: t.now ? `0 0 10px var(--terracotta)` : "none",
                }}
              />

              <Card style={{ padding: "clamp(16px, 3vw, 22px) clamp(16px, 3vw, 24px)", borderRadius: 16 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 10, flexWrap: "wrap", marginBottom: 6 }}>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap", marginBottom: 4 }}>
                      <h3 style={{ fontSize: "clamp(15px, 2.5vw, 16.5px)", fontWeight: 700, fontFamily: fontDisplay, color: "var(--text-primary)" }}>
                        {t.title}
                      </h3>
                      {t.badge && (
                        <span style={{
                          fontSize: 10.5, fontFamily: fontMono, padding: "2px 8px", borderRadius: 999,
                          background: t.now ? "var(--badge-bg)" : "var(--bg-soft)",
                          color: t.now ? "var(--terracotta)" : "var(--text-primary)",
                          fontWeight: 600,
                        }}>
                          {t.badge}
                        </span>
                      )}
                    </div>
                    <div style={{ fontSize: 12.5, color: "var(--terracotta)", fontWeight: 600 }}>{t.org}</div>
                  </div>

                  <span style={{ fontFamily: fontMono, fontSize: 11.5, color: "var(--text-faint)", whiteSpace: "nowrap" }}>
                    {t.period}
                  </span>
                </div>

                <p style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.6, marginTop: 6 }}>
                  {t.desc}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>

        {/* ORGANISASI & KEPANITIAAN (SESUAI CV) */}
        <div style={{ marginTop: 56 }}>
          <Reveal>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
              <Users size={20} color="var(--terracotta)" />
              <h3 style={{ fontFamily: fontDisplay, fontSize: "clamp(18px, 3vw, 20px)", fontWeight: 700, color: "var(--text-primary)" }}>
                Organisasi & Kepanitiaan
              </h3>
            </div>
          </Reveal>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap: 18 }}>
            {beyond.map((b, i) => (
              <Reveal key={b.title} delay={i * 0.1}>
                <Card float floatDelay={i * 0.3} accentColor="var(--terracotta)" style={{ padding: "clamp(18px, 4vw, 22px)", height: "100%" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 8, marginBottom: 4 }}>
                    <h4 style={{ fontSize: 15.5, fontWeight: 700, fontFamily: fontDisplay, color: "var(--text-primary)" }}>
                      {b.title}
                    </h4>
                    {b.role && (
                      <span style={{
                        fontSize: 10.5, fontFamily: fontMono, padding: "2px 8px", borderRadius: 999,
                        background: "var(--badge-bg)", color: "var(--terracotta)", fontWeight: 600,
                      }}>
                        {b.role}
                      </span>
                    )}
                  </div>
                  <span style={{ fontSize: 12, color: "var(--text-faint)" }}>{b.org}</span>
                  <p style={{ fontSize: 13, color: "var(--text-secondary)", marginTop: 10, lineHeight: 1.6 }}>
                    {b.desc}
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
