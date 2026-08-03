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
        title: "System Analyst | QA",
        greeting: "Hi, I'm Zeva 👋",
        headline: "Zeva Lorensia",
        subheadline: "System Analyst | Quality Assurance",
        bio: "Saya berfokus pada System Analysis dan Quality Assurance dalam pengembangan aplikasi web maupun mobile. Saya senang memahami kebutuhan pengguna, menyusun dokumentasi sistem, serta memastikan setiap fitur berjalan sesuai dengan kebutuhan melalui proses analisis dan pengujian.",

        // File CV yang akan diunduh saat tombol "Download CV" diklik.
        // Taruh file PDF-nya di assets/cv/
        cvPath: "assets/cv/cv.pdf",
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
            description: "Menganalisis kebutuhan sistem dan memetakan hak akses multi-user ke dalam Use Case Specification. Serta merancang seluruh alur utama dan alur alternatif sistem, termasuk validasi bentrokan jadwal otomatis, manajemen lead time, serta mekanisme revisi laporan aktivitas.",
            image: "assets/images/projects/bmi.png",
            figmaLink: "https://www.figma.com/proto/DI0iUwM2N0K1R3KJToSGem/FIX-WIREFRAME",
            documentPath: "assets/documents/project/bmi_use_case.pdf",
            videoUrl: "",
        },
        {
            title: "Sistem Manajemen Aset & Risiko — PT Cybera",
            category: "Website Aplikasi (Enterprise)",
            description: "Berperan sebagai System Analyst dalam merancang sistem manajemen aset, pelaporan insiden, dan mitigasi risiko. Bertanggung jawab menyusun model proses bisnis (BPMN), arsitektur data (Class Diagram), serta spesifikasi logika sistem (Activity Diagram) untuk aktor Admin, User, Auditor, dan Verifikator.",
            image: "assets/images/projects/cybera.png",
            figmaLink: "https://fe-sso.vercel.app/dashboard",
            documentPath: "assets/documents/project/PT CYBERA - DOKUMEN ANALISIS.pdf",
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
            certificateLink: "",
            certificatePdf: "assets/documents/certificate/Sertifikat-Pelatihan/[Bangkit 2024 Batch 2] Certificate - M284B4KX4612.pdf",
        },
        {
            title: "Magang Kantor Imigrasi",
            subtitle: "Surat Keterangan Magang Mandiri",
            image: "assets/images/certificates/Magang Kantor Imrigrasi.png",
            certificateLink: "",
            certificatePdf: "assets/documents/certificate/Sertifikat-Magang/Penyampaian Selesai Magang 4 Mahasiswi Unesa.pdf",
        },
        {
            title: "Magang Petrokimia Gresik",
            subtitle: "Surat Keterangan Magang Mandiri",
            image: "assets/images/certificates/Magang Petrokimia.png",
            certificateLink: "",
            certificatePdf: "assets/documents/certificate/Sertifikat-Magang/Surat Keterangan Magang PETRO.pdf",
        },
        {
            title: "X-Project",
            subtitle: "Sertifikat Organisasi",
            image: "assets/images/certificates/X-Project.png",
            certificateLink: "",
            certificatePdf: "assets/documents/certificate/Sertifikat-Organisasi/Xproject.pdf",
        },
        {
            title: "BISIK 19",
            subtitle: "Sertifikat Organisasi",
            image: "assets/images/certificates/Bincang Bisik.png",
            certificateLink: "",
            certificatePdf: "assets/documents/certificate/Sertifikat-Organisasi/Zeva Lorensia Naibaho 2 (2)_compressed.pdf",
        },
        {
            title: "Danacita Ambassador",
            subtitle: "Sertifikat Organisasi",
            image: "assets/images/certificates/DanaCita.png",
            certificateLink: "",
            certificatePdf: "assets/documents/certificate/Sertifikat-Organisasi/Zeva Lorensia Naibaho 3_compressed.pdf",
        },
        {
            title: "Dicoding SQL",
            subtitle: "Sertifikat Pelatihan",
            image: "assets/images/certificates/dicoding.png",
            certificateLink: "",
            certificatePdf: "assets/documents/certificate/Sertifikat-Pelatihan/dicoding-sql.pdf",
        },
        {
            title: "SAP Analytics Cloud & SAP Build Apps",
            subtitle: "Sertifikat Pelatihan",
            image: "assets/images/certificates/SAP Analytics Cloud & SAP Build Apps.png",
            certificateLink: "",
            certificatePdf: "assets/documents/certificate/Sertifikat-Pelatihan/SAP.pdf",
        },
        {
            title: "Samsung Innovation Campus",
            subtitle: "Sertifikat Pelatihan",
            image: "assets/images/certificates/Samsung Inovation Campus.png",
            certificateLink: "",
            certificatePdf: "assets/documents/certificate/Sertifikat-Pelatihan/Sertifikat SIC6 Stage 1.pdf",
        },
    ],
};
