(function () {
  "use strict";

  /* =========================================================
       DATA
    ========================================================= */

  const data = window.PORTFOLIO_DATA;

  if (!data) {
    console.error(
      "PORTFOLIO_DATA tidak ditemukan. Pastikan data/portfolio-data.js dimuat sebelum js/app.js",
    );
    return;
  }

  /* =========================================================
       PROFILE
    ========================================================= */

  function renderProfile() {
    const p = data.profile;

    if (!p) return;

    setText("brand-name", p.name);
    setText("brand-title", p.title);
    setText("brand-initials", initials(p.name));

    setText("hero-greeting", p.greeting);
    setText("hero-headline", p.headline);
    setText("hero-subheadline", p.subheadline);
    setText("hero-bio", p.bio);

    document.title = `${p.name} — ${p.title}`;

    /* CV */

    ["cv-download-desktop", "cv-download-mobile"].forEach((id) => {
      const el = document.getElementById(id);

      if (!el) return;

      el.href = p.cvPath || "#";

      if (p.cvFilename) {
        el.setAttribute("download", p.cvFilename);
      }
    });

    /* CONTACT */

    const c = p.contact || {};

    const emailCta = document.getElementById("contact-email-cta");

    const email = document.getElementById("contact-email");

    const linkedin = document.getElementById("contact-linkedin");

    const whatsapp = document.getElementById("contact-whatsapp");

    const github = document.getElementById("contact-github");

    if (emailCta) {
      emailCta.href = `mailto:${c.email || ""}`;
    }

    if (email) {
      email.href = `mailto:${c.email || ""}`;
    }

    if (linkedin) {
      linkedin.href = c.linkedinUrl || "#";
    }

    if (whatsapp) {
      whatsapp.href = c.whatsappUrl || "#";
    }

    if (github) {
      github.href = c.githubUrl || "#";
    }

    setText("contact-email-value", c.email);

    setText("contact-linkedin-value", c.linkedinLabel);

    setText("contact-whatsapp-value", c.whatsappLabel);

    setText("contact-github-value", c.githubLabel);

    setText("footer-name", p.name);

    setText("footer-year", new Date().getFullYear());
  }

  function initials(name) {
    return (name || "")
      .split(" ")
      .filter(Boolean)
      .map((word) => word[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();
  }

  function setText(id, value) {
    const el = document.getElementById(id);

    if (el) {
      el.textContent = value ?? "";
    }
  }

  /* =========================================================
       PROJECT CARD
    ========================================================= */

  function projectCardHtml(project, index) {
    const actions = [];

    /* PROTOTYPE */

    if (project.figmaLink) {
      actions.push(`
                <a
                    href="${escapeAttr(project.figmaLink)}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="chip-btn"
                >

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                    >
                        <circle
                            cx="12"
                            cy="12"
                            r="9"
                        />
                    </svg>

                    Prototype

                </a>
            `);
    }

    /* DOKUMEN */

    if (Array.isArray(project.documents) && project.documents.length > 0) {
      actions.push(`
                <button
                    type="button"
                    class="chip-btn"
                    data-open-modal="document"
                    data-index="${index}"
                    data-source="projects"
                >

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                    >
                        <path
                            d="M7 3h7l5 5v13H7z"
                        />
                    </svg>

                    Dokumen

                </button>
            `);
    }

    /* VIDEO */

    if (project.videoUrl) {
      actions.push(`
                <button
                    type="button"
                    class="chip-btn"
                    data-open-modal="video"
                    data-index="${index}"
                    data-source="projects"
                >

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                    >

                        <circle
                            cx="12"
                            cy="12"
                            r="9"
                        />

                        <path
                            d="m10 9 5 3-5 3Z"
                        />

                    </svg>

                    Video Demo

                </button>
            `);
    }

    /* ZIP */

    if (project.zipPath) {
      const zipFilename = `${slugify(project.title)}.zip`;

      actions.push(`
                <a
                    href="${escapeAttr(project.zipPath)}"
                    download="${escapeAttr(zipFilename)}"
                    class="chip-btn"
                >

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                    >

                        <path
                            d="M21 8v13H3V8"
                        />

                        <path
                            d="M1 3h22v5H1z"
                        />

                        <path
                            d="M10 12h4"
                        />

                    </svg>

                    Unduh ZIP

                </a>
            `);
    }

    /* CARD */

    return `
            <div
                class="card carousel-item"
                data-index="${index}"
            >

                <div class="card-image">

                    <img
                        src="${escapeAttr(project.image)}"
                        alt="${escapeAttr(project.title)}"
                        loading="lazy"
                    >

                </div>


                <div class="card-body">

                    <h3 class="card-title">
                        ${escapeHtml(project.title)}
                    </h3>


                    <span class="card-tag">
                        ${escapeHtml(project.category)}
                    </span>


                    <p class="card-desc">
                        ${escapeHtml(project.description)}
                    </p>


                    <div class="card-actions">
                        ${actions.join("")}
                    </div>

                </div>

            </div>
        `;
  }

  /* =========================================================
   CERTIFICATE CARD
========================================================= */

  function certificateCardHtml(cert) {
    const certificateFile = cert.certificatePdf || cert.certificateLink || "";

    const viewButton = certificateFile
      ? `
        <button
          type="button"
          class="cert-view-btn"
          data-certificate="${escapeAttr(certificateFile)}"
          data-title="${escapeAttr(cert.title)}"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 12s3.75-7.5 9.75-7.5 9.75 7.5 9.75 7.5-3.75 7.5-9.75 7.5S2.25 12 2.25 12Z"
            />

            <circle
              cx="12"
              cy="12"
              r="3"
            />
          </svg>

          Lihat Sertifikat
        </button>
      `
      : "";

    return `
    <div class="card carousel-item">

      <div class="card-image cert-image">

        <img
          src="${escapeAttr(cert.image)}"
          alt="${escapeAttr(cert.title)}"
          loading="lazy"
        >

      </div>

      <div class="card-body cert-body">

        <h3 class="card-title">
          ${escapeHtml(cert.title)}
        </h3>

        ${
          cert.subtitle
            ? `
              <p class="cert-subtitle">
                ${escapeHtml(cert.subtitle)}
              </p>
            `
            : ""
        }

        <div class="cert-actions">
          ${viewButton}
        </div>

      </div>

    </div>
  `;
  }

  /* =========================================================
       HELPER
    ========================================================= */

  function slugify(str) {
    return (str || "file")
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  }

  function escapeHtml(str) {
    const div = document.createElement("div");

    div.textContent = str ?? "";

    return div.innerHTML;
  }

  function escapeAttr(str) {
    return escapeHtml(str).replace(/"/g, "&quot;");
  }

  /* =========================================================
       CAROUSEL
    ========================================================= */

  function renderCarousel(
    containerId,
    items,
    visibleCount,
    cardHtmlFn,
    colsClass,
  ) {
    const container = document.getElementById(containerId);

    if (!container) return;

    if (!items || items.length === 0) {
      container.innerHTML =
        '<p class="empty-state">Belum ada data yang ditambahkan.</p>';

      return;
    }

    const canSlide = items.length > visibleCount;

    const maxStart = Math.max(items.length - visibleCount, 0);

    const dotsCount = Math.max(maxStart + 1, 1);

    container.innerHTML = `

            <div class="carousel">

                <button
                    type="button"
                    class="carousel-arrow prev ${canSlide ? "show" : ""}"
                    aria-label="Sebelumnya"
                >

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                    >

                        <path
                            d="m15 18-6-6 6-6"
                        />

                    </svg>

                </button>


                <button
                    type="button"
                    class="carousel-arrow next ${canSlide ? "show" : ""}"
                    aria-label="Selanjutnya"
                >

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                    >

                        <path
                            d="m9 18 6-6-6-6"
                        />

                    </svg>

                </button>


                <div
                    class="carousel-track ${colsClass}"
                >

                    ${items.map(cardHtmlFn).join("")}

                </div>


                <div
                    class="carousel-dots ${canSlide ? "show" : ""}"
                >

                    ${Array.from(
                      {
                        length: dotsCount,
                      },
                      (_, i) => `
                                <button
                                    type="button"
                                    class="dot ${i === 0 ? "active" : ""}"
                                    data-dot="${i}"
                                    aria-label="Slide ${i + 1}"
                                ></button>
                            `,
                    ).join("")}

                </div>

            </div>

        `;

    let start = 0;

    const track = container.querySelector(".carousel-track");

    if (!track) return;

    const cards = Array.from(track.querySelectorAll(".carousel-item"));

    const dots = Array.from(container.querySelectorAll(".dot"));

    const prevBtn = container.querySelector(".carousel-arrow.prev");

    const nextBtn = container.querySelector(".carousel-arrow.next");

    function update() {
      cards.forEach((card, i) => {
        card.classList.toggle(
          "is-hidden",
          i < start || i >= start + visibleCount,
        );
      });

      dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === start);
      });
    }

    function goTo(index) {
      start = Math.min(Math.max(index, 0), maxStart);

      update();
    }

    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        goTo(start <= 0 ? maxStart : start - 1);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        goTo(start >= maxStart ? 0 : start + 1);
      });
    }

    dots.forEach((dot) => {
      dot.addEventListener("click", () => {
        goTo(Number(dot.dataset.dot));
      });
    });

    update();
  }

  /* =========================================================
       MODAL
    ========================================================= */

  const modalOverlay = document.getElementById("modal-overlay");

  const modalTitle = document.getElementById("modal-title");

  const modalContent = document.getElementById("modal-content");

  const modalClose = document.getElementById("modal-close");

  /*
   * Menyimpan project yang sedang
   * dibuka pada modal dokumen.
   */

  let currentDocumentProject = null;

  /* =========================================================
       VIDEO MODAL
    ========================================================= */

  function openVideoModal(title, source) {
    if (!modalOverlay || !modalTitle || !modalContent) {
      return;
    }

    modalTitle.textContent = title;

    modalContent.classList.add("video-mode");

    const embed = toVideoEmbedUrl(source);

    if (!embed.url) {
      modalContent.innerHTML = `
                <p class="empty-state">
                    Video belum tersedia.
                </p>
            `;
    } else if (embed.isLocal) {
      modalContent.innerHTML = `
                <video
                    src="${escapeAttr(embed.url)}"
                    controls
                    playsinline
                ></video>
            `;
    } else {
      modalContent.innerHTML = `
                <iframe
                    src="${escapeAttr(embed.url)}"
                    title="${escapeAttr(title)}"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
            `;
    }

    modalOverlay.classList.add("open");
  }

  /* =========================================================
       DOCUMENT LIST MODAL
    ========================================================= */

  function openDocumentModal(project) {
    if (!modalOverlay || !modalTitle || !modalContent) {
      return;
    }

    currentDocumentProject = project;

    const documents = Array.isArray(project.documents) ? project.documents : [];

    modalTitle.textContent = "Dokumen Project";

    /*
     * Hapus mode video supaya
     * dokumen menggunakan layout
     * normal/compact.
     */

    modalContent.classList.remove("video-mode");

    if (documents.length === 0) {
      modalContent.innerHTML = `
                <div class="document-empty">
                    Belum ada dokumen.
                </div>
            `;
    } else {
      modalContent.innerHTML = `

                <div class="document-list">

                    ${documents
                      .map(
                        (doc, index) => `

                                    <button
                                        type="button"
                                        class="document-item"
                                        data-document-index="${index}"
                                    >

                                        <span
                                            class="document-item-left"
                                        >

                                            <svg
                                                class="document-icon"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="1.8"
                                            >

                                                <path
                                                    d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                                                />

                                                <polyline
                                                    points="14 2 14 8 20 8"
                                                />

                                            </svg>


                                            <span
                                                class="document-name"
                                            >
                                                ${escapeHtml(doc.title)}
                                            </span>

                                        </span>


                                        <svg
                                            class="document-arrow"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                        >

                                            <path
                                                d="m9 18 6-6-6-6"
                                            />

                                        </svg>

                                    </button>

                                `,
                      )
                      .join("")}

                </div>


                <button
                    type="button"
                    class="document-close-btn"
                    data-document-close
                >
                    Tutup
                </button>

            `;
    }

    modalOverlay.classList.add("open");
  }

  /* =========================================================
       PDF VIEWER
    ========================================================= */

  function openPdfViewer(project, documentIndex) {
    if (!modalOverlay || !modalTitle || !modalContent) {
      return;
    }

    const documents = Array.isArray(project.documents) ? project.documents : [];

    const doc = documents[documentIndex];

    if (!doc || !doc.file) {
      return;
    }

    modalTitle.textContent = doc.title || "Dokumen";

    modalContent.classList.remove("video-mode");

    /*
     * PDF ditampilkan langsung
     * di dalam modal menggunakan iframe.
     *
     * Tidak ada target="_blank".
     */

    modalContent.innerHTML = `

            <div class="pdf-viewer-wrapper">

                <iframe
                    class="pdf-viewer"
                    src="${escapeAttr(doc.file)}#toolbar=0&navpanes=0&scrollbar=1"
                    title="${escapeAttr(doc.title || "Dokumen PDF")}"
                ></iframe>

            </div>


            <button
                type="button"
                class="document-back-btn"
                data-document-back
            >
                ← Kembali ke Dokumen
            </button>

        `;

    modalOverlay.classList.add("open");
  }

  /* =========================================================
   CERTIFICATE MODAL
========================================================= */

  function openCertificateModal(title, source) {
    if (!modalOverlay || !modalTitle || !modalContent) {
      return;
    }

    if (!source) {
      return;
    }

    modalTitle.textContent = title || "Sertifikat";

    modalContent.classList.remove("video-mode");

    modalContent.innerHTML = `
    <div class="pdf-viewer-wrapper">

      <iframe
        class="pdf-viewer"
        src="${escapeAttr(source)}#toolbar=0&navpanes=0&scrollbar=1"
        title="${escapeAttr(title || "Sertifikat PDF")}"
      ></iframe>

    </div>
  `;

    modalOverlay.classList.add("open");
  }

  /* =========================================================
       CLOSE MODAL
    ========================================================= */

  function closeModal() {
    if (!modalOverlay) return;

    modalOverlay.classList.remove("open");

    if (modalTitle) {
      modalTitle.textContent = "";
    }

    if (modalContent) {
      modalContent.innerHTML = "";

      modalContent.classList.remove("video-mode");
    }

    currentDocumentProject = null;
  }

  /* =========================================================
       VIDEO URL
    ========================================================= */

  function toVideoEmbedUrl(url) {
    if (!url) {
      return {
        url: "",
        isLocal: true,
      };
    }

    try {
      const parsed = new URL(url, window.location.href);

      const hostname = parsed.hostname.replace(/^www\./, "");

      /* YouTube */

      if (hostname === "youtube.com" || hostname === "m.youtube.com") {
        const id = parsed.searchParams.get("v");

        if (id) {
          return {
            url: `https://www.youtube.com/embed/${encodeURIComponent(id)}`,

            isLocal: false,
          };
        }
      }

      /* YouTube short URL */

      if (hostname === "youtu.be") {
        const id = parsed.pathname.split("/").filter(Boolean)[0];

        if (id) {
          return {
            url: `https://www.youtube.com/embed/${encodeURIComponent(id)}`,

            isLocal: false,
          };
        }
      }

      /* External URL */

      if (parsed.protocol === "http:" || parsed.protocol === "https:") {
        return {
          url: parsed.href,

          isLocal: false,
        };
      }
    } catch (error) {
      console.warn("URL video tidak valid:", url, error);
    }

    return {
      url: url,

      isLocal: true,
    };
  }

  /* =========================================================
       MODAL EVENTS
    ========================================================= */

  if (modalClose) {
    modalClose.addEventListener("click", closeModal);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener("click", (event) => {
      /*
       * Klik area gelap di luar modal
       * = tutup modal.
       */

      if (event.target === modalOverlay) {
        closeModal();

        return;
      }

      /*
       * Tombol Tutup pada
       * daftar dokumen.
       */

      const closeButton = event.target.closest("[data-document-close]");

      if (closeButton) {
        closeModal();

        return;
      }

      /*
       * Tombol kembali dari
       * PDF ke daftar dokumen.
       */

      const backButton = event.target.closest("[data-document-back]");

      if (backButton) {
        if (currentDocumentProject) {
          openDocumentModal(currentDocumentProject);
        }

        return;
      }
    });
  }

  /* ESC = tutup */

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeModal();
    }
  });

  /* =========================================================
       DOCUMENT / VIDEO BUTTON
    ========================================================= */
  document.addEventListener("click", (event) => {
    /* =====================================================
     SERTIFIKAT
  ===================================================== */

    const certificateButton = event.target.closest(".cert-view-btn");

    if (certificateButton) {
      const certificateFile = certificateButton.dataset.certificate;

      const certificateTitle = certificateButton.dataset.title;

      openCertificateModal(certificateTitle, certificateFile);

      return;
    }

    /* =====================================================
     DOKUMEN PROJECT
  ===================================================== */

    const documentItem = event.target.closest("[data-document-index]");

    if (documentItem) {
      if (!currentDocumentProject) {
        return;
      }

      const documentIndex = Number(documentItem.dataset.documentIndex);

      openPdfViewer(currentDocumentProject, documentIndex);

      return;
    }

    /* =====================================================
     PROJECT DOCUMENT / VIDEO
  ===================================================== */

    const button = event.target.closest("[data-open-modal]");

    if (!button) {
      return;
    }

    const type = button.dataset.openModal;

    const index = Number(button.dataset.index);

    const source =
      button.dataset.source === "projects" ? data.projects[index] : null;

    if (!source) {
      return;
    }

    /* DOKUMEN */

    if (type === "document") {
      openDocumentModal(source);

      return;
    }

    /* VIDEO */

    if (type === "video") {
      openVideoModal(`${source.title} — Video Demo`, source.videoUrl);

      return;
    }
  });

  /* =========================================================
       MOBILE MENU
    ========================================================= */

  const hamburgerBtn = document.getElementById("hamburger-btn");

  const mobileMenu = document.getElementById("mobile-menu");

  if (hamburgerBtn && mobileMenu) {
    hamburgerBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("open");
    });

    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.remove("open");
      });
    });
  }

  /* =========================================================
       INITIALIZE
    ========================================================= */

  renderProfile();

  renderCarousel(
    "projects-carousel",
    data.projects,
    3,
    (project, index) => projectCardHtml(project, index),
    "cols-3",
  );

  renderCarousel(
    "certificates-carousel",
    data.certificates,
    4,
    (certificate, index) => certificateCardHtml(certificate, index),
    "cols-4",
  );
})();
