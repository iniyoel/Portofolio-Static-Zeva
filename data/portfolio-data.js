/**
 * ==========================================================
 *  DATA PORTOFOLIO — edit file ini untuk mengubah isi website
 * ==========================================================
 *
 *  - profile        : nama, jabatan, bio, dan link kontak
 *  - projects        : daftar project (maksimal ditampilkan 3 per geser)
 *  - certificates    : daftar sertifikat (maksimal ditampilkan 4 per geser)
 *
 *  Taruh file gambar/dokumen/video di folder assets/, lalu isi
 *  path-nya di bawah ini, contoh: "assets/images/projects/nama-file.jpg"
 * ==========================================================
 */

window.PORTFOLIO_DATA = {
  profile: {
    name: "Zeva Lorensia",
    title: "System Analyst | QA | Data Administration",
    greeting: "Hi, I'm Zeva 👋",
    headline: "Zeva Lorensia",
    subheadline: "System Analyst | Quality Assurance | Data Administration",
    bio: "Lulusan Sistem Informasi Universitas Negeri Surabaya yang berfokus pada bidang System Analysis dan Quality Assurance. Berpengalaman dalam menganalisis kebutuhan pengguna, menyusun dokumentasi sistem, serta melakukan pengujian untuk memastikan setiap fitur berjalan sesuai kebutuhan bisnis dan pengguna.",

    // Pas-foto/foto profil yang tampil di Hero (bagian atas website).
    // Taruh file fotonya (jpg/png, disarankan rasio potret 3:4 atau 4:5,
    // resolusi minimal 800x1000px, background rapi/formal) di assets/images/profile/
    // lalu isi nama filenya di sini. Kosongkan ("") jika belum punya foto —
    // website otomatis akan menampilkan inisial nama sebagai gantinya.
    photo: "assets/images/profile/zeva.jpeg",
    photoAlt: "Pas foto Zeva Lorensia",

    // Teks kecil pada badge di pojok foto (opsional, kosongkan "" untuk sembunyikan)
    photoBadge: "Open to Work",

    // File CV yang akan diunduh saat tombol "Download CV" diklik.
    // Taruh file PDF-nya di assets/cv/
    cvPath: "assets/cv/CV ATS ZEVA 2026.pdf",
    cvFilename: "CV-Zeva-Lorensia.pdf",

    contact: {
      email: "zevanaibaho@gmail.com",

      linkedinLabel: "linkedin.com/in/zevalorensian",
      linkedinUrl: "https://id.linkedin.com/in/zevalorensian",

      whatsappLabel: "+62 822-7666-5550",
      // format wa.me/<kode negara><nomor tanpa 0 di depan>
      whatsappUrl: "https://wa.me/6282276665550",
    },
  },

  // Setiap project: figmaLink (opsional), documentPath (opsional, PDF),
  // videoUrl (opsional, link YouTube ATAU path file video lokal)
  projects: [
    {
      title: "BMI",
      category: "Website Aplikasi",
      description:
        "Berperan sebagai System Analyst dan UI/UX Designer dalam pengembangan aplikasi manajemen proyek untuk Divisi IT. Menganalisis kebutuhan stakeholder, merancang Use Case dan ERD, membuat desain UI/UX dari low-fidelity hingga high-fidelity, serta mengimplementasikan desain ke dalam Front-End menggunakan Tailwind CSS. Hasilnya berupa aplikasi dengan alur dan tampilan yang terstruktur untuk mendukung pengelolaan project, aktivitas, laporan, meeting, dan lead time.",
      image: "assets/images/projects/bmi.png",
      figmaLink:
        "https://www.figma.com/proto/DI0iUwM2N0K1R3KJToSGem/FIX-WIREFRAME",
      documents: [
        {
          title: "BMI Use Case",
          file: "assets/documents/project/BMI/bmi_use_case.pdf",
        },
        {
          title: "BMI Manual Book",
          file: "assets/documents/project/BMI/Buku Panduan Aplikasi Manajemen Project .pdf",
        },
        {
          title: "PDM",
          file: "assets/documents/project/BMI/PDM.png",
        },
      ],
      videoUrl: "",
    },
    {
      title: "PT Cybera - Sirasa",
      category: "Website Aplikasi (Enterprise)",
      description:
        "Berperan sebagai System Analyst dalam pengembangan aplikasi SIRASA dengan menganalisis kebutuhan pengguna, memetakan proses bisnis, menentukan fitur dan hak akses, serta menyusun dokumentasi sistem seperti SRS, BPMN, Use Case, ERD, dan diagram UML. Turut melakukan pengecekan kesesuaian desain UI/UX, pengujian fungsional, validasi fitur, serta verifikasi hasil implementasi untuk memastikan sistem yang dikembangkan sesuai dengan kebutuhan dan rancangan. Hasilnya berupa dokumentasi analisis dan perancangan sistem sebagai acuan pengembangan aplikasi.",
      image: "assets/images/projects/cybera.png",
      figmaLink: "https://fe-sso.vercel.app/dashboard",
      documents: [
        {
          title: "Cybera - Dokumen Kebutuhan Sistem dan Perencanaan ",
          file: "assets/documents/project/PT CYBERA/PT CYBERA - Dokumen Kebutuhan Sistem dan Perencanaan.pdf",
        },
        {
          title: "Cybera - Dokumen Analis",
          file: "assets/documents/project/PT CYBERA/PT CYBERA - DOKUMEN ANALISIS.pdf",
        },
        {
          title: "SRS",
          file: "assets/documents/project/PT CYBERA/SRS -Aplikasi Manajemen Aset dan Risiko.pdf",
        },
        {
          title: "ERD",
          file: "assets/documents/project/PT CYBERA/ERD Cybera Finallllllllllyyyyyyyyyy.png",
        },
        {
          title: "Testing Dokumen",
          file: "assets/documents/project/PT CYBERA/Testing Sirasa.xlsx",
        },
      ],
      videoUrl: "",
    },
    {
      title: "LD Indonesia",
      category: "Website Aplikasi",
      description:
        "Berperan sebagai Asisten System Analyst pada pengembangan platform pembelajaran bahasa Jerman. Bertanggung jawab menggali kebutuhan stakeholder, merancang fitur dan alur sistem, membuat prototype UI/UX, serta menyusun dokumentasi untuk mendukung proses pengembangan aplikasi. Turut melakukan pengujian fungsional dan validasi fitur guna memastikan implementasi sistem sesuai dengan kebutuhan pengguna.",
      image: "assets/images/projects/ld_indonesia.png",
      figmaLink:
        "https://www.figma.com/proto/WvyQFMpOkx5BA1ajPbC15p/Project-LD-INDONESIA?node-id=663-2130&t=9UcEUg204uV6SCGb-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=182%3A1629",
      documents: [
        {
          title: "LD Indonesia - System Analysis Document",
          file: "assets/documents/project/LD Indonesia/System Analysis Document.pdf",
        },
        {
          title: "Testing Dokumen",
          file: "assets/documents/project/LD Indonesia/Testing LD-2026.xlsx",
        },
      ],
      videoUrl: "",
    },
  ],

  // Setiap sertifikat punya 2 link yang terpisah (boleh diisi salah satu atau keduanya):
  //   - certificateLink : untuk tombol "Lihat Sertifikat" (boleh link eksternal, mis. Google Drive)
  //   - certificatePdf  : untuk tombol "Unduh PDF" — WAJIB file lokal di assets/documents/
  //                       supaya benar-benar ke-download (bukan cuma kebuka di tab baru).
  //                       Link eksternal/domain lain umumnya tidak bisa dipaksa download oleh browser.
  certificates: [
    {
      title: "Bangkit Academy 2024",
      subtitle: "Studi Independen - Machine Learning Path",
      image: "assets/images/certificates/bangkit.png",
      certificatePdf:
        "assets/documents/certificate/Sertifikat-Pelatihan/[Bangkit 2024 Batch 2] Certificate - M284B4KX4612.pdf",
    },

    {
      title: "Magang Kantor Imigrasi",
      subtitle: "Surat Keterangan Magang Mandiri",
      image: "assets/images/certificates/Magang Kantor Imrigrasi.png",
      certificatePdf:
        "assets/documents/certificate/Sertifikat-Magang/Penyampaian Selesai Magang 4 Mahasiswi Unesa.pdf",
    },

    {
      title: "Magang Petrokimia Gresik",
      subtitle: "Surat Keterangan Magang Mandiri",
      image: "assets/images/certificates/Magang Petrokimia.png",
      certificatePdf:
        "assets/documents/certificate/Sertifikat-Magang/Surat Keterangan Magang PETRO.pdf",
    },

    {
      title: "X-Project",
      subtitle: "Sertifikat Organisasi",
      image: "assets/images/certificates/X-Project.png",
      certificatePdf:
        "assets/documents/certificate/Sertifikat-Organisasi/Xproject.pdf",
    },

    {
      title: "BISIK 19",
      subtitle: "Sertifikat Organisasi",
      image: "assets/images/certificates/Bincang Bisik.png",
      certificatePdf:
        "assets/documents/certificate/Sertifikat-Organisasi/Zeva Lorensia Naibaho 2 (2)_compressed.pdf",
    },

    {
      title: "Danacita Ambassador",
      subtitle: "Sertifikat Organisasi",
      image: "assets/images/certificates/DanaCita.png",
      certificatePdf:
        "assets/documents/certificate/Sertifikat-Organisasi/Zeva Lorensia Naibaho 3_compressed.pdf",
    },

    {
      title: "Dicoding SQL",
      subtitle: "Sertifikat Pelatihan",
      image: "assets/images/certificates/dicoding.png",
      certificatePdf:
        "assets/documents/certificate/Sertifikat-Pelatihan/dicoding-sql.pdf",
    },

    {
      title: "SAP Analytics Cloud & SAP Build Apps",
      subtitle: "Sertifikat Pelatihan",
      image:
        "assets/images/certificates/SAP Analytics Cloud & SAP Build Apps.png",
      certificatePdf:
        "assets/documents/certificate/Sertifikat-Pelatihan/SAP.pdf",
    },

    {
      title: "Samsung Innovation Campus",
      subtitle: "Sertifikat Pelatihan",
      image: "assets/images/certificates/Samsung Inovation Campus.png",
      certificatePdf:
        "assets/documents/certificate/Sertifikat-Pelatihan/Sertifikat SIC6 Stage 1.pdf",
    },
  ],
};
