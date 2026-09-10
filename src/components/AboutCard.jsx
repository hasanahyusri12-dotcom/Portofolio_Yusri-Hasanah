import React from "react";
import { Sparkles, GraduationCap, MapPin, Briefcase, Quote } from "lucide-react";
import { fontDisplay, fontMono, profile } from "../data";
import { Card, Eyebrow, Reveal } from "./ui";

/**
 * AboutCard — combines:
 *   • Real photo of Yusri (loaded from /profile.jpg, falls back gracefully)
 *   • Bio paragraphs in Bahasa Indonesia from profile.tentang
 *   • Quick mini facts grid
 */
export default function AboutCard() {
  const facts = [
    {
      icon: GraduationCap,
      label: "Pendidikan",
      value: profile.pendidikan,
    },
    {
      icon: Sparkles,
      label: "IPK",
      value: `${profile.ipk} — Cumlaude`,
    },
    {
      icon: Briefcase,
      label: "Fokus",
      value: "Frontend React.js & Integrasi REST API",
    },
    {
      icon: MapPin,
      label: "Domisili",
      value: profile.lokasi,
    },
  ];

  return (
    <section
      style={{
        maxWidth: 1160, margin: "0 auto", padding: "0 clamp(16px, 4vw, 24px) clamp(48px, 8vw, 96px)",
      }}
    >
      <Reveal>
        <div style={{ textAlign: "center", maxWidth: 720, margin: "0 auto 40px" }}>
          <Eyebrow icon={Sparkles}>Tentang Saya</Eyebrow>
          <h2 style={{
            fontFamily: fontDisplay, fontSize: "clamp(24px, 4vw, 36px)",
            fontWeight: 700, letterSpacing: "-0.02em",
            color: "var(--text-primary)", margin: "14px 0 10px", lineHeight: 1.2,
          }}>
            Sekilas tentang siapa saya dan cara saya bekerja
          </h2>
          <p style={{
            fontSize: "clamp(14px, 2vw, 15px)", color: "var(--text-secondary)", lineHeight: 1.65,
          }}>
            Latar belakang, fokus keahlian, dan nilai yang saya bawa ke setiap proyek web.
          </p>
        </div>
      </Reveal>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
        gap: "clamp(20px, 4vw, 28px)", alignItems: "start",
      }}>
        {/* Left: Photo + identity */}
        <Reveal>
          <Card
            hover
            accent
            accentColor="var(--terracotta)"
            style={{ overflow: "hidden", borderRadius: 20 }}
          >
            <div style={{
              position: "relative", aspectRatio: "4 / 5",
              background: `linear-gradient(135deg, var(--terracotta), #1E2D45)`,
              maxHeight: 400,
            }}>
              <img
                src={profile.fotoSrc}
                alt={`Foto ${profile.nama}`}
                onError={(e) => { e.currentTarget.style.display = "none"; }}
                style={{
                  position: "absolute", inset: 0,
                  width: "100%", height: "100%",
                  objectFit: "cover", display: "block",
                }}
              />
              <div style={{
                position: "absolute", top: 14, left: 14,
                background: "rgba(10, 15, 29, 0.75)", backdropFilter: "blur(6px)",
                color: "#FFFFFF", padding: "5px 12px", borderRadius: 999,
                fontSize: 11, fontFamily: fontMono, fontWeight: 600,
                letterSpacing: "0.04em",
                display: "inline-flex", alignItems: "center", gap: 6,
              }}>
                <Sparkles size={12} color="var(--terracotta-light)" />
                {profile.role}
              </div>
              <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0,
                padding: "20px 18px 16px",
                background: "linear-gradient(180deg, transparent 0%, rgba(10, 15, 29, 0.88) 100%)",
                color: "#FFFFFF",
              }}>
                <div style={{
                  fontFamily: fontMono, fontSize: 11, color: "var(--terracotta-light)",
                  letterSpacing: "0.08em", textTransform: "uppercase",
                  fontWeight: 600, marginBottom: 3,
                }}>
                  Frontend Developer
                </div>
                <h3 style={{
                  fontFamily: fontDisplay, fontSize: 20, fontWeight: 700,
                  letterSpacing: "-0.02em", lineHeight: 1.2,
                  color: "#FFFFFF",
                }}>
                  {profile.nama}
                </h3>
              </div>
            </div>

            <div style={{
              padding: "18px 20px 20px",
              display: "flex", flexDirection: "column", gap: 12,
            }}>
              {facts.map((f) => {
                const Icon = f.icon;
                return (
                  <div key={f.label} style={{
                    display: "flex", alignItems: "flex-start", gap: 12,
                  }}>
                    <div style={{
                      width: 34, height: 34, borderRadius: 10,
                      background: "var(--badge-bg)",
                      border: "1px solid var(--badge-border)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      flexShrink: 0,
                    }}>
                      <Icon size={15} color="var(--terracotta)" />
                    </div>
                    <div>
                      <div style={{
                        fontFamily: fontMono, fontSize: 10.5, color: "var(--text-faint)",
                        textTransform: "uppercase", letterSpacing: "0.06em",
                        marginBottom: 2, fontWeight: 600,
                      }}>
                        {f.label}
                      </div>
                      <div style={{
                        fontSize: 13, color: "var(--text-primary)",
                        fontWeight: 500, lineHeight: 1.45,
                      }}>
                        {f.value}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>
        </Reveal>

        {/* Right: Bio paragraphs + quote */}
        <Reveal delay={0.1}>
          <Card
            hover
            accent
            accentColor="var(--terracotta)"
            style={{ padding: "clamp(20px, 4vw, 32px) clamp(18px, 4vw, 28px)", height: "100%", borderRadius: 20 }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <Quote size={20} color="var(--terracotta)" />
              <span style={{
                fontFamily: fontMono, fontSize: 11.5,
                color: "var(--terracotta)", textTransform: "uppercase",
                letterSpacing: "0.08em", fontWeight: 600,
              }}>
                Perkenalan Singkat
              </span>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {profile.tentang.map((p, idx) => (
                <p key={idx} style={{
                  fontSize: "clamp(13.5px, 2vw, 14.5px)", lineHeight: 1.7,
                  color: "var(--text-secondary)",
                  margin: 0,
                }}>
                  {p}
                </p>
              ))}
            </div>

            <div style={{
              marginTop: 22, paddingTop: 18,
              borderTop: "1px solid var(--border-color)",
              display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center",
            }}>
              <span style={{
                fontFamily: fontMono, fontSize: 11.5, color: "var(--text-faint)",
                textTransform: "uppercase", letterSpacing: "0.06em",
                fontWeight: 600, width: "100%",
              }}>
                Saat ini terbuka untuk:
              </span>
              {[
                "Junior Frontend Developer",
                "IT Support / Helpdesk",
                "QA / Testing",
              ].map((label) => (
                <span key={label} style={{
                  fontSize: 12, padding: "5px 12px", borderRadius: 999,
                  background: "var(--badge-bg)", border: "1px solid var(--badge-border)",
                  color: "var(--terracotta)", fontWeight: 600,
                }}>
                  {label}
                </span>
              ))}
            </div>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
