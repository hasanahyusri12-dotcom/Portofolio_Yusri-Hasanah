/* ---------------- design tokens & constants ---------------- */
export const C = {
  // Palet Utama yang Ditentukan:
  terracotta: "var(--terracotta)",
  terracottaLight: "var(--terracotta-light)",
  terracottaDark: "var(--terracotta-dark)",
  navy: "var(--text-primary)",
  navyLight: "var(--text-secondary)",
  navyDark: "var(--bg-card-subtle)",
  bg: "var(--bg-primary)",
  bgSoft: "var(--bg-soft)",
  bgAlt: "var(--bg-alt)",

  // Surface & Cards
  card: "var(--bg-card)",
  cardBorder: "var(--border-color)",
  cardBorderHover: "var(--border-hover)",

  // Text colors
  text: "var(--text-primary)",
  textDim: "var(--text-secondary)",
  textFaint: "var(--text-faint)",

  // Accents & Gradients
  gold: "#D4983D",
  success: "var(--success)",
};

export const fontDisplay = "var(--font-display)";
export const fontBody = "var(--font-body)";
export const fontMono = "var(--font-mono)";

/* ---------------- profil (Sesuai CV Resmi) ---------------- */
export const profile = {
  nama: "Yusri Hasanah",
  inisial: "YH",
  role: "Junior Frontend Developer | React.js",
  lokasi: "Bandung, Indonesia",
  pendidikan: "D3 Manajemen Informatika — Universitas Nasional PASIM Bandung",
  ipk: "3,73/4,00",
  status: "Terbuka untuk Junior Frontend Developer",
  ringkasan:
    "Saya Yusri Hasanah, Lulusan D3 Manajemen Informatika dengan IPK 3,73/4,00 yang memiliki keahlian utama pada pengembangan aplikasi web modern, khususnya frontend berbasis React.js. Berpengalaman membangun Single Page Application yang responsif, modular, dan terintegrasi dengan REST API. Saat ini aktif memperluas kemampuan ke arsitektur full-stack modern.",
  tentang: [
    "Saya adalah mahasiswa D3 Manajemen Informatika yang memiliki minat pada pengembangan website, terutama pada bagian frontend menggunakan React.js.",

    "Selama mengikuti perkuliahan dan pelatihan, saya telah mempelajari HTML, CSS, JavaScript, React.js, REST API, database, serta Git dan GitHub.",

    "Saya telah membuat beberapa proyek website, seperti aplikasi resep, aplikasi manajemen klinik, website Al-Qur'an digital, dan BagiPakai sebagai sarana untuk menerapkan apa yang telah saya pelajari.",

    "Saat ini saya ingin terus mengembangkan kemampuan dan mendapatkan pengalaman di dunia kerja sebagai Junior Frontend Developer, Frontend Developer Intern, Junior Web Developer, atau Manual QA Tester.",
  ],
  email: "hasanahyusri12@gmail.com",
  telepon: "08886037566",
  whatsapp: "https://wa.me/628886037566",
  github: "https://github.com/hasanahyusri12-dotcom",
  linkedin: "https://linkedin.com/in/yusri-hasanah",
  fotoSrc: "/profile.jpg",
};

/* ---------------- data proyek (Sesuai CV & Update Tautan Resmi) ---------------- */
import { Sparkles, ChefHat, BookOpen, Terminal, Code2, Workflow, Server, Layers, Cpu } from "lucide-react";

export const projects = [
  {
    id: "klinik-anak",
    category: "React Lanjutan",
    icon: Sparkles,
    grad: "linear-gradient(135deg, #C46A4A 0%, #1E2D45 100%)",
    accentColor: "#C46A4A",
    iconColor: "#ffffff",
    tags: ["React.js", "JavaScript", "REST API", "SQL Server", "CSS3 / Tailwind"],
    title: "KidsCare — Aplikasi Manajemen Klinik Anak",
    badge: "React Lanjutan",
    year: "2026",
    desc: "Aplikasi manajemen klinik terintegrasi untuk memudahkan pengelolaan data operasional medis, rekam medis pasien, dan jadwal dokter secara real-time.",
    highlights: [
      "Mengembangkan dashboard admin interaktif untuk mengelola data pasien, dokter, jadwal praktik, dan antrean.",
      "Mengintegrasikan alur CRUD terpadu dengan REST API serta manajemen state berbasis React Hooks (useState, useEffect, useMemo).",
      "Memecah antarmuka kompleks menjadi komponen-komponen modular yang reusable dan berperforma tinggi.",
    ],
    repoUrl: "https://github.com/hasanahyusri12-dotcom/Uas-React-lanjutan-Kidscare",
    demoUrl: "https://uas-react-lanjutan-kidscare.vercel.app",
    vercelDeployUrl: "https://vercel.com/yusrihasanahs-projects/uas-react-lanjutan-kidscare/AjhK55ABMvvxV7SGZrn4e9W8nAUB",
    screenshots: ["/projects/kidscare/1.png", "/projects/kidscare/2.png", "/projects/kidscare/3.png"],
  },
  {
    id: "buku-resep",
    category: "React Dasar",
    icon: ChefHat,
    grad: "linear-gradient(135deg, #DE7E5E 0%, #A85335 100%)",
    accentColor: "#DE7E5E",
    iconColor: "#ffffff",
    tags: ["React.js", "JavaScript", "CSS3", "REST API (Fetch)", "Responsive Design"],
    title: "Buku Resep — Cook Recipe Web App",
    badge: "React Dasar",
    year: "2025",
    desc: "Aplikasi katalog resep masakan interaktif dengan fitur pencarian cepat, filter kategori masakan, serta penambahan dan manipulasi data resep.",
    highlights: [
      "Membangun fitur CRUD resep masakan lengkap (tambah, lihat detail, edit, dan hapus).",
      "Menerapkan filter dinamis berdasarkan kategori kuliner dan pencarian kata kunci berbasis real-time state.",
      "Merancang struktur folder komponen yang rapi serta antarmuka responsif ramah mobile.",
    ],
    repoUrl: "https://github.com/hasanahyusri12-dotcom/cook-resipe",
    demoUrl: "https://cook-resipe.vercel.app",
    vercelDeployUrl: "https://vercel.com/yusrihasanahs-projects/cook-resipe/G2emdotQQTvCDdvUQx1TfJmGnTH9",
    screenshots: ["/projects/cookrecipe/1.png", "/projects/cookrecipe/2.png", "/projects/cookrecipe/3.png"],
  },
  {
    id: "quran-web",
    category: "HTML & Web",
    icon: BookOpen,
    grad: "linear-gradient(135deg, #1E2D45 0%, #2E7D5B 100%)",
    accentColor: "#2E7D5B",
    iconColor: "#ffffff",
    tags: ["HTML5", "CSS3", "JavaScript (ES6+)", "REST API Publik", "Audio API", "Vercel"],
    title: "Al-Qur'an Digital — Quran Web Platform",
    badge: "Web Programming",
    year: "2025",
    desc: "Platform Al-Qur'an digital modern yang menampilkan 114 surah lengkap dengan teks Arab, transliterasi Latin, terjemahan bahasa Indonesia, dan audio murottal.",
    highlights: [
      "Mengambil data asinkron dari REST API publik menggunakan Fetch API murni tanpa framework eksternal.",
      "Mengimplementasikan pemutar audio murottal per surah, navigasi cepat antar ayat, serta pencarian surah.",
      "Dideploy dan dioptimasi secara penuh di Vercel dengan performa loading cepat.",
    ],
    repoUrl: "https://github.com/hasanahyusri12-dotcom/Projek_Al_quran_Html",
    demoUrl: "https://projek-al-quran-html.vercel.app",
    vercelDeployUrl: "https://vercel.com/yusrihasanahs-projects/projek-al-quran-html/Ei6jR1hPj7e7cig3CPiU6Y8XY2h4",
    screenshots: ["/projects/quran/1.png", "/projects/quran/2.png", "/projects/quran/3.png"],
  },
  {
    id: "laundry-cli",
    category: "Bahasa C",
    icon: Terminal,
    grad: "linear-gradient(135deg, #131E30 0%, #1E2D45 100%)",
    accentColor: "#38BDF8",
    iconColor: "#ffffff",
    tags: ["Bahasa C", "File Handling (.txt)", "CLI Architecture", "CRUD System", "Algorithms"],
    title: "Kaay Laundry — Sistem Kasir Laundry Berbasis Console",
    badge: "Programming Fundamental",
    year: "2024",
    hasTerminalPreview: true,
    desc: "Aplikasi manajemen operasional laundry berbasis terminal (CLI) dengan sistem autentikasi 2 role (Admin & User), kalkulasi biaya otomatis, dan penyimpanan file teks persisten.",
    highlights: [
      "Mengembangkan antarmuka CLI dengan menu interaktif ASCII art dan sistem multi-role.",
      "Menyediakan fitur manajemen satuan item, pencatatan transaksi kilat & reguler, serta cetak struk otomatis.",
      "Mengimplementasikan persistensi data secara manual menggunakan File Handling I/O (.txt) tanpa database eksternal.",
    ],
    repoUrl: "https://github.com/hasanahyusri12-dotcom/Projek-Laundry-C",
    demoUrl: "",
    screenshots: ["/projects/laundry/1.png", "/projects/laundry/2.png", "/projects/laundry/3.png"],
    terminalArt: `
  _  __     __     __     _     _   _ _   _ ____  ______   __
 | |/ /    /  \\    \\ \\   / /   | |   / \\ | | |  _ \\|  _ \\ \\ / /
 | ' /    / /\\ \\    \\ \\_/ /    | |  / _ \\| | | | | | |_) \\ V / 
 | . \\   / ____ \\    \\   /     | |_/ ___ \\ |_| |_| |  _ < | |  
 |_|\\_\\ /_/    \\_\\    |_|      |____/_/   \\_\\___/____|_| \\_\\|_|  
------------------ SISTEM MANAJEMEN LAUNDRY MODERN ------------------

+--------+--------+
| (o) [=] KAAY    |   >> Layanan Laundry Cepat, Bersih & Wangi
|  /----------\\  |   * Paket Kilat 2 Hari & Reguler 4 Hari
| |   ( ~ )   | |   * Layanan Antar ke Rumah atau Ambil di Toko
|  \\__________/  |   * Pencatatan Transaksi & Struk Otomatis
+--------+--------+   * Manajemen Satuan Item Lengkap & Fleksibel
    `,
  },
  {
    id: "react-java",
    category: "React + Java",
    icon: Cpu,
    grad: "linear-gradient(135deg, #1E2D45 0%, #C46A4A 100%)",
    accentColor: "#DE7E5E",
    iconColor: "#ffffff",
    tags: ["React.js", "Java", "Spring Boot / REST API", "PostgreSQL", "Full-Stack"],
    title: "Sistem Informasi Enterprise (React.js + Java)",
    badge: "Sedang Dikembangkan",
    year: "2026",
    isRoadmap: true,
    desc: "Pengembangan sistem web skala enterprise yang menggabungkan antarmuka modular React.js dengan backend tangguh berbasis Java dan basis data relasional PostgreSQL.",
    highlights: [
      "Perancangan antarmuka pengguna interaktif dan modular menggunakan React.js dan Tailwind CSS.",
      "Integrasi komunikasi REST API yang aman dan terstruktur dengan backend arsitektur Java.",
      "Manajemen relasi database dan optimalisasi query SQL menggunakan PostgreSQL & DBeaver.",
    ],
    repoUrl: "https://github.com/hasanahyusri12-dotcom",
    demoUrl: "",
  },
];

/* ---------------- keahlian utama ---------------- */
export const expertiseCards = [
  {
    icon: Code2,
    title: "Frontend Engineering & React.js",
    desc: "Membangun antarmuka web modern berbasis komponen modular dengan React.js, React Hooks (useState, useEffect, useMemo), Tailwind CSS, dan standar HTML5/CSS3 yang responsif.",
    skills: ["React.js", "JavaScript (ES6+)", "React Hooks", "HTML5 & CSS3", "Tailwind CSS", "Responsive Web Design"],
  },
  {
    icon: Server,
    title: "Backend & Database Fundamentals",
    desc: "Membangun dan mengintegrasikan RESTful API dengan Express.js / Java serta mengelola basis data relasional menggunakan PostgreSQL, MySQL, dan SQL Server via DBeaver.",
    skills: ["Express.js", "Java Basics", "RESTful API", "PostgreSQL", "MySQL", "DBeaver", "SQL Server"],
  },
  {
    icon: Workflow,
    title: "Programming Logic & Version Control",
    desc: "Fondasi logika pemrograman yang kuat dengan Bahasa C, algoritma struktur data, konsep OOP, serta kolaborasi version control terstruktur via Git & GitHub.",
    skills: ["Bahasa C", "Logika & Algoritma", "Struktur Data", "OOP Dasar & CRUD", "Git & GitHub", "Postman", "VS Code"],
  },
];

/* ---------------- Technical Skills (Sesuai CV) ---------------- */
export const technicalSkills = {
  programming: ["C", "JavaScript (ES6+)", "Java Fundamentals"],
  frontend: ["HTML5", "CSS3", "React.js", "Tailwind CSS", "React Hooks", "Responsive Web Design"],
  backend: ["Express.js", "RESTful API", "Java API"],
  database: ["PostgreSQL", "MySQL", "SQL Server", "DBeaver"],
  fundamentals: ["Logika & Algoritma", "Struktur Data", "OOP Dasar", "CRUD Operations", "File Handling"],
  tools: ["Visual Studio Code", "Git", "GitHub", "Postman", "DBeaver", "Vercel"],
};

/* Running Marquee Items */
export const marqueeSkills = ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "RESTful API", "HTML5 & CSS3", "PostgreSQL", "MySQL", "Express.js", "Bahasa C", "Git & GitHub", "Postman", "DBeaver", "Vercel", "SQL Server", "Struktur Data"];

/* ---------------- timeline riwayat (Sesuai CV Resmi) ---------------- */
export const timeline = [
  {
    now: true,
    title: "React.js Lanjutan, Express.js & PostgreSQL (DBeaver)",
    period: "Feb 2026 — Sekarang",
    org: "Program Pelatihan Intensif · Bandung",
    badge: "Sedang Berjalan",
    desc: "Mendalami pengembangan aplikasi full-stack: React.js lanjutan, integrasi REST API dengan Express.js, serta perancangan & query basis data PostgreSQL menggunakan DBeaver.",
  },
  {
    title: "D3 Manajemen Informatika (IPK 3,73/4,00)",
    period: "2024 — Sekarang",
    org: "Universitas Nasional PASIM Bandung",
    badge: "Pendidikan Formal",
    desc: "Mempelajari pengembangan perangkat lunak, basis data, struktur data, algoritma, OOP, JavaScript, React.js, SQL, REST API, dan rekayasa web.",
  },
  {
    title: "Git & GitHub Version Control",
    period: "Jan 2026 — Feb 2026",
    org: "Program Pelatihan Intensif · Bandung",
    badge: "Pelatihan",
    desc: "Penguasaan version control Git, alur kerja kolaboratif di GitHub, manajemen percabangan (branching), dan pull requests.",
  },
  {
    title: "React.js Dasar",
    period: "Agt 2025 — Jan 2026",
    org: "Program Pelatihan Intensif · Bandung",
    badge: "Pelatihan",
    desc: "Pengembangan antarmuka komponen modular dengan React.js, React Hooks (useState, useEffect), dan pembuatan aplikasi Buku Resep.",
  },
  {
    title: "Pemrograman Web (HTML, CSS & JavaScript)",
    period: "Jun 2025 — Agt 2025",
    org: "Program Pelatihan Intensif · Bandung",
    badge: "Pelatihan",
    desc: "Standar HTML semantik, CSS Flexbox/Grid, manipulasi DOM, asynchronous fetch(), berujung pada deployment Al-Qur'an Digital.",
  },
  {
    title: "Struktur Data & Basis Data (MySQL)",
    period: "Jan 2025 — Jun 2025",
    org: "Program Pelatihan Intensif · Bandung",
    badge: "Pelatihan",
    desc: "Pemahaman konsep struktur data, perancangan basis data relasional, query SQL, dan normalisasi tabel dengan MySQL.",
  },
  {
    title: "Logika Algoritma & Pemrograman Dasar (Bahasa C)",
    period: "Sep 2024 — Jan 2025",
    org: "Program Pelatihan Intensif · Bandung",
    badge: "Pelatihan",
    desc: "Fondasi logika komputasional, algoritma kontrol alur, manipulasi pointer dan file handling (.txt) dengan proyek akhir Laundry Management CLI.",
  },
];

/* ---------------- Organisasi & Kepanitiaan ---------------- */
export const beyond = [
  {
    title: "Panitia PKKMB 2025 — Divisi Acara",
    org: "Universitas Nasional PASIM Bandung",
    role: "Divisi Acara",
    desc: "Merancang rundown kegiatan, mengoordinasikan sesi acara, dan berkolaborasi lintas divisi demi kelancaran kegiatan.",
  },
  {
    title: "Staff Bendahara — HIMAMI",
    org: "Himpunan Mahasiswa Manajemen Informatika",
    role: "Staff Bendahara",
    desc: "Mengelola pencatatan keuangan organisasi, rekapitulasi anggaran, dan pelaporan kas program kerja himpunan.",
  },
];

/* ---------------- sertifikat terverifikasi ---------------- */
export const certificates = [
  {
    id: "git-github",
    title: "Git & GitHub Version Control",
    issuer: "Program Pelatihan PUB · Bandung",
    date: "22 Januari 2026",
    credentialId: "PUB-GIT-2026-0122",
    img: "/certificates/git-github.png",
    topics: ["Git Workflow & CLI", "Branching & Merging", "Pull Requests", "GitHub Collaboration"],
    description: "Sertifikasi kelulusan pelatihan version control Git & GitHub dengan fokus pada alur kerja tim, manajemen repositori, dan praktik kolaboratif modern.",
  },
  {
    id: "react-fundamentals",
    title: "Fundamental Front-End (React.js)",
    issuer: "Program Pelatihan PUB · Bandung",
    date: "1 Januari 2026",
    credentialId: "PUB-RCT-2026-0101",
    img: "/certificates/react-fundamentals.png",
    topics: ["React Architecture", "Hooks (useState, useEffect)", "Component Lifecycle", "SPA State & Routing"],
    description: "Sertifikasi penguasaan fundamental framework React.js: pembuatan Single Page Application berbasis komponen modular, manajemen state dinamis, dan konsumsi API.",
  },
  {
    id: "web-programming",
    title: "Web Programming (HTML, CSS, JS)",
    issuer: "Program Pelatihan PUB · Bandung",
    date: "14 Agustus 2025",
    credentialId: "PUB-WEB-2025-0814",
    img: "/certificates/web-programming.png",
    topics: ["Semantic HTML5", "CSS3 Flexbox & Grid", "DOM Manipulation", "ES6+ Async JavaScript"],
    description: "Sertifikasi kelulusan pemrograman web dasar hingga menengah, mencakup standar web semantik, teknik layout responsif modern, serta pemrograman logika JavaScript interaktif.",
  },
  {
    id: "database-training",
    title: "Database Relational & SQL Training",
    issuer: "Program Pelatihan PUB · Bandung",
    date: "29 Mei 2025",
    credentialId: "PUB-DBS-2025-0529",
    img: "/certificates/database.png",
    topics: ["ERD Modeling", "Normalisasi Tabel", "SQL DDL & DML", "Relational Query & Joins"],
    description: "Sertifikasi perancangan dan manajemen basis data relasional: penyusunan Entity Relationship Diagram, normalisasi hingga 3NF, dan eksekusi query SQL kompleks.",
  },
  {
    id: "data-structure",
    title: "Struktur Data & Algoritma",
    issuer: "Program Pelatihan PUB · Bandung",
    date: "29 Mei 2025",
    credentialId: "PUB-STR-2025-0529",
    img: "/certificates/data-structure.png",
    topics: ["Array & Linked List", "Stack & Queue", "Tree & Graph Basics", "Kompleksitas Algoritma (Big-O)"],
    description: "Sertifikasi kompetensi analisis dan implementasi struktur data abstrak serta algoritma pencarian dan pengurutan yang efisien untuk menyelesaikan masalah komputasi.",
  },
  {
    id: "logika-c",
    title: "Logika Pemrograman & Bahasa C",
    issuer: "Program Pelatihan PUB · Bandung",
    date: "23 Januari 2025",
    credentialId: "PUB-LGC-2025-0123",
    img: "/certificates/logika-c.png",
    topics: ["Algoritma Logika & Flowchart", "Sintaks Bahasa C", "Pointers & Memory", "File Handling I/O"],
    description: "Sertifikasi fondasi pemikiran komputasional dan pemrograman sistem dasar menggunakan Bahasa C, mencakup struktur kontrol, manipulasi memori, dan pembuatan sistem CLI.",
  },
];
