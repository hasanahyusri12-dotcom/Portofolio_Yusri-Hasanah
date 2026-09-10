import React, { useState } from "react";
import {
  Mail,
  MapPin,
  Github,
  Linkedin,
  Loader2,
  CheckCircle2,
  AlertCircle,
  Copy,
  MessageCircle,
  Send,
} from "lucide-react";
import { fontDisplay, fontBody, fontMono, profile } from "../data";
import { Card, Eyebrow, Avatar, Reveal, Toast } from "../components/ui";

const WEB3FORMS_ACCESS_KEY = "GANTI_DENGAN_ACCESS_KEY_KAMU";
const TARGET_EMAIL = profile.email;

const topicOptions = [
  "Peluang Kerja / Magang Frontend",
  "Pengembangan Proyek Web / React",
  "Tawaran Kolaborasi Full-Stack",
  "Pertanyaan Umum",
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [toastMessage, setToastMessage] = useState("");
  const [toastVisible, setToastVisible] = useState(false);

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const selectTopic = (topic) => {
    setForm((f) => ({ ...f, subject: topic }));
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(TARGET_EMAIL);
    setToastMessage(`Email berhasil disalin: ${TARGET_EMAIL}`);
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 3200);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(profile.telepon);
    setToastMessage(`Nomor WhatsApp tersalin: ${profile.telepon}`);
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 3200);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setStatus("error");
      return;
    }

    if (!WEB3FORMS_ACCESS_KEY || WEB3FORMS_ACCESS_KEY.startsWith("GANTI_")) {
      const body = encodeURIComponent(
        `Nama: ${form.name}\nEmail: ${form.email}\nSubjek: ${form.subject || "Kontak Portofolio"}\n\n${form.message}`
      );
      window.location.href = `mailto:${TARGET_EMAIL}?subject=${encodeURIComponent(
        form.subject || "Pesan dari Portofolio"
      )}&body=${body}`;
      return;
    }

    try {
      setStatus("sending");
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: form.name,
          email: form.email,
          subject: form.subject || "Pesan baru dari Portofolio",
          message: form.message,
          to: TARGET_EMAIL,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section style={{ maxWidth: 1160, margin: "0 auto", padding: "clamp(36px, 6vw, 56px) clamp(16px, 4vw, 24px) clamp(48px, 8vw, 96px)" }}>
      <Toast
        message={toastMessage}
        visible={toastVisible}
        onClose={() => setToastVisible(false)}
      />

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
        gap: "clamp(24px, 5vw, 48px)",
        alignItems: "start",
      }}>
        {/* Kolom Kiri: Info & Kontak */}
        <Reveal>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 16 }}>
              <Avatar size={54} />
              <div>
                <Eyebrow>Kontak & Kolaborasi</Eyebrow>
              </div>
            </div>

            <h1 style={{
              fontFamily: fontDisplay, fontSize: "clamp(26px, 4vw, 42px)",
              fontWeight: 700, letterSpacing: "-0.02em", margin: "12px 0 14px",
              color: "var(--text-primary)", lineHeight: 1.18,
            }}>
              Mari terhubung atau diskusikan peluang kerja.
            </h1>

            <p style={{ color: "var(--text-secondary)", fontSize: "clamp(14px, 2vw, 15px)", lineHeight: 1.65, marginBottom: 28, maxWidth: 480 }}>
              Terbuka untuk posisi <strong>Junior Frontend Developer</strong>, kesempatan magang, maupun proyek web freelance. Hubungi langsung melalui WhatsApp atau form di bawah ini.
            </p>

            {/* Kotak Kontak Interaktif */}
            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 28 }}>
              {/* WhatsApp Item */}
              <div style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                padding: "12px 16px", borderRadius: 14, background: "var(--bg-card)",
                border: `1px solid var(--border-color)`, boxShadow: "var(--card-shadow)",
                flexWrap: "wrap", gap: 10,
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, minWidth: 0 }}>
                  <div style={{
                    width: 38, height: 38, borderRadius: 10,
                    background: "var(--success-bg)", display: "flex", alignItems: "center",
                    justifyContent: "center", color: "var(--success)", flexShrink: 0,
                  }}>
                    <MessageCircle size={18} />
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <span style={{ fontSize: 11, color: "var(--text-faint)", fontFamily: fontMono, display: "block" }}>WhatsApp</span>
                    <b style={{ fontSize: 13.5, color: "var(--text-primary)" }}>{profile.telepon}</b>
                  </div>
                </div>
                <div style={{ display: "flex", gap: 6, marginLeft: "auto" }}>
                  <a
                    href={profile.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    style={{
                      padding: "7px 12px", borderRadius: 8, fontSize: 12,
                      textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 4,
                    }}
                  >
                    Chat WA →
                  </a>
                  <button
                    onClick={copyPhone}
                    className="icon-btn"
                    style={{
                      padding: "7px 9px", borderRadius: 8, cursor: "pointer",
                      fontSize: 12, display: "flex", alignItems: "center",
                    }}
                    title="Salin Nomor WhatsApp"
                  >
                    <Copy size={13} />
                  </button>
                </div>
              </div>

              {/* Email item with copy button */}
              <div style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                padding: "12px 16px", borderRadius: 14, background: "var(--bg-card)",
                border: `1px solid var(--border-color)`, boxShadow: "var(--card-shadow)",
                flexWrap: "wrap", gap: 10,
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, minWidth: 0 }}>
                  <div style={{
                    width: 38, height: 38, borderRadius: 10,
                    background: "var(--badge-bg)", display: "flex", alignItems: "center",
                    justifyContent: "center", color: "var(--terracotta)", flexShrink: 0,
                  }}>
                    <Mail size={18} />
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <span style={{ fontSize: 11, color: "var(--text-faint)", fontFamily: fontMono, display: "block" }}>Email Pribadi</span>
                    <b style={{ fontSize: 13, color: "var(--text-primary)", wordBreak: "break-all" }}>{TARGET_EMAIL}</b>
                  </div>
                </div>
                <button
                  onClick={copyEmail}
                  className="icon-btn"
                  style={{
                    padding: "7px 12px", borderRadius: 8, cursor: "pointer",
                    fontSize: 12, fontWeight: 600, display: "flex", alignItems: "center", gap: 4,
                    marginLeft: "auto",
                  }}
                  title="Salin Email"
                >
                  <Copy size={13} /> Salin
                </button>
              </div>

              {/* Lokasi Item */}
              <div style={{
                display: "flex", alignItems: "center", gap: 12,
                padding: "12px 16px", borderRadius: 14, background: "var(--bg-card)",
                border: `1px solid var(--border-color)`, boxShadow: "var(--card-shadow)",
              }}>
                <div style={{
                  width: 38, height: 38, borderRadius: 10,
                  background: "var(--badge-bg)", display: "flex", alignItems: "center",
                  justifyContent: "center", color: "var(--terracotta)", flexShrink: 0,
                }}>
                  <MapPin size={18} />
                </div>
                <div>
                  <span style={{ fontSize: 11, color: "var(--text-faint)", fontFamily: fontMono, display: "block" }}>Domisili</span>
                  <b style={{ fontSize: 13.5, color: "var(--text-primary)" }}>{profile.lokasi}</b>
                </div>
              </div>
            </div>

            {/* Social profiles sesuai CV */}
            <div>
              <span style={{ fontSize: 11.5, fontFamily: fontMono, color: "var(--text-faint)", display: "block", marginBottom: 8 }}>
                Tautan Profil Sesuai CV:
              </span>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{
                    padding: "9px 14px", borderRadius: 10, fontSize: 12.5,
                    display: "inline-flex", alignItems: "center", gap: 6,
                    textDecoration: "none",
                  }}
                >
                  <Github size={15} /> GitHub
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{
                    padding: "9px 14px", borderRadius: 10, fontSize: 12.5,
                    display: "inline-flex", alignItems: "center", gap: 6,
                    textDecoration: "none",
                  }}
                >
                  <Linkedin size={15} /> LinkedIn
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Kolom Kanan: Formulir Kirim Pesan */}
        <Reveal delay={0.12}>
          <Card
            hover={false}
            accentColor="var(--terracotta)"
            style={{ padding: "clamp(20px, 4vw, 32px)", borderRadius: 20 }}
          >
            <h3 style={{
              fontFamily: fontDisplay, fontSize: 19, fontWeight: 700,
              color: "var(--text-primary)", marginBottom: 6,
            }}>
              Kirim Pesan Formulir
            </h3>
            <p style={{ fontSize: 13, color: "var(--text-secondary)", marginBottom: 18 }}>
              Pesan akan otomatis diteruskan ke email {TARGET_EMAIL}.
            </p>

            {/* Quick Topic Chips */}
            <div style={{ marginBottom: 18 }}>
              <label style={{ display: "block", fontSize: 11.5, color: "var(--text-primary)", marginBottom: 8, fontWeight: 600, fontFamily: fontMono }}>
                Pilih Topik Pesan:
              </label>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {topicOptions.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => selectTopic(t)}
                    style={{
                      fontSize: 11.5, padding: "5px 10px", borderRadius: 999,
                      border: `1px solid ${form.subject === t ? "var(--terracotta)" : "var(--border-color)"}`,
                      background: form.subject === t ? "var(--badge-bg)" : "var(--bg-soft)",
                      color: form.subject === t ? "var(--terracotta)" : "var(--text-primary)",
                      fontWeight: form.subject === t ? 600 : 500,
                      cursor: "pointer", transition: "all 0.2s ease",
                    }}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: 14 }}>
                <label style={{ display: "block", fontSize: 12, color: "var(--text-primary)", marginBottom: 4, fontWeight: 600 }}>
                  Nama Lengkap *
                </label>
                <input
                  type="text"
                  placeholder="Contoh: Budi Santoso"
                  className="input-anim"
                  value={form.name}
                  onChange={update("name")}
                  required
                  style={{
                    width: "100%", borderRadius: 10, padding: "10px 12px", fontFamily: fontBody, fontSize: 14, outline: "none",
                  }}
                />
              </div>

              <div style={{ marginBottom: 14 }}>
                <label style={{ display: "block", fontSize: 12, color: "var(--text-primary)", marginBottom: 4, fontWeight: 600 }}>
                  Alamat Email *
                </label>
                <input
                  type="email"
                  placeholder="nama@perusahaan.com"
                  className="input-anim"
                  value={form.email}
                  onChange={update("email")}
                  required
                  style={{
                    width: "100%", borderRadius: 10, padding: "10px 12px", fontFamily: fontBody, fontSize: 14, outline: "none",
                  }}
                />
              </div>

              <div style={{ marginBottom: 14 }}>
                <label style={{ display: "block", fontSize: 12, color: "var(--text-primary)", marginBottom: 4, fontWeight: 600 }}>
                  Subjek / Topik
                </label>
                <input
                  type="text"
                  placeholder="Topik pesan..."
                  className="input-anim"
                  value={form.subject}
                  onChange={update("subject")}
                  style={{
                    width: "100%", borderRadius: 10, padding: "10px 12px", fontFamily: fontBody, fontSize: 14, outline: "none",
                  }}
                />
              </div>

              <div style={{ marginBottom: 18 }}>
                <label style={{ display: "block", fontSize: 12, color: "var(--text-primary)", marginBottom: 4, fontWeight: 600 }}>
                  Isi Pesan *
                </label>
                <textarea
                  placeholder="Ceritakan detail peluang, tawaran kerja, atau proyek Anda..."
                  className="input-anim"
                  value={form.message}
                  onChange={update("message")}
                  required
                  rows={4}
                  style={{
                    width: "100%", minHeight: 100, resize: "vertical",
                    borderRadius: 10, padding: "10px 12px", fontFamily: fontBody, fontSize: 14, outline: "none",
                  }}
                />
              </div>

              {status === "success" && (
                <div style={{
                  display: "flex", alignItems: "center", gap: 8, marginBottom: 16,
                  padding: "10px 14px", borderRadius: 10, background: "var(--success-bg)",
                  fontSize: 13, color: "var(--success)", border: "1px solid rgba(74, 222, 128, 0.4)",
                }}>
                  <CheckCircle2 size={16} flexShrink={0} />
                  <span>Pesan berhasil dikirimkan! Saya akan membalas secepatnya.</span>
                </div>
              )}

              {status === "error" && (
                <div style={{
                  display: "flex", alignItems: "center", gap: 8, marginBottom: 16,
                  padding: "10px 14px", borderRadius: 10, background: "var(--badge-bg)",
                  fontSize: 13, color: "var(--terracotta)", border: "1px solid var(--badge-border)",
                }}>
                  <AlertCircle size={16} flexShrink={0} />
                  <span>Mohon lengkapi semua kolom wajib (Nama, Email, Pesan).</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-primary"
                style={{
                  width: "100%", padding: "13px", borderRadius: 10,
                  fontSize: 14, display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
                }}
              >
                {status === "sending" ? (
                  <>Mengirim Pesan... <Loader2 size={15} className="spin" /></>
                ) : (
                  <>Kirim Pesan Sekarang <Send size={14} /></>
                )}
              </button>
            </form>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
