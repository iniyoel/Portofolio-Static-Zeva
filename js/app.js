(function () {
    'use strict';

    const data = window.PORTFOLIO_DATA;
    if (!data) {
        console.error('PORTFOLIO_DATA tidak ditemukan. Pastikan data/portfolio-data.js dimuat sebelum js/app.js');
        return;
    }

    /* ================= PROFILE ================= */
    function renderProfile() {
        const p = data.profile;

        setText('brand-name', p.name);
        setText('brand-title', p.title);
        setText('brand-initials', initials(p.name));

        setText('hero-greeting', p.greeting);
        setText('hero-headline', p.headline);
        setText('hero-subheadline', p.subheadline);
        setText('hero-bio', p.bio);

        document.title = `${p.name} — ${p.title}`;

        // CV download buttons
        ['cv-download-desktop', 'cv-download-mobile'].forEach((id) => {
            const el = document.getElementById(id);
            if (!el) return;
            el.href = p.cvPath;
            el.setAttribute('download', p.cvFilename || '');
        });

        // Contact section
        const c = p.contact;
        const emailHref = `mailto:${c.email}`;
        document.getElementById('contact-email-cta').href = emailHref;
        document.getElementById('contact-email').href = emailHref;
        setText('contact-email-value', c.email);

        document.getElementById('contact-linkedin').href = c.linkedinUrl;
        setText('contact-linkedin-value', c.linkedinLabel);

        document.getElementById('contact-whatsapp').href = c.whatsappUrl;
        setText('contact-whatsapp-value', c.whatsappLabel);

        document.getElementById('contact-github').href = c.githubUrl;
        setText('contact-github-value', c.githubLabel);

        setText('footer-name', p.name);
        setText('footer-year', new Date().getFullYear());
    }

    function initials(name) {
        return name
            .split(' ')
            .filter(Boolean)
            .map((w) => w[0])
            .join('')
            .slice(0, 2)
            .toUpperCase();
    }

    function setText(id, value) {
        const el = document.getElementById(id);
        if (el) el.textContent = value ?? '';
    }

    /* ================= PROJECT / CERTIFICATE CARDS ================= */
    function projectCardHtml(project, index) {
        const actions = [];

        if (project.figmaLink) {
            actions.push(`
                <a href="${escapeAttr(project.figmaLink)}" target="_blank" rel="noopener" class="chip-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/></svg>
                    Prototype
                </a>
            `);
        }

        if (project.documentPath) {
            actions.push(`
                <button type="button" class="chip-btn" data-open-modal="document" data-index="${index}" data-source="projects">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 3h7l5 5v13H7z"/></svg>
                    Dokumen
                </button>
            `);
        }

        if (project.videoUrl) {
            actions.push(`
                <button type="button" class="chip-btn" data-open-modal="video" data-index="${index}" data-source="projects">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="m10 9 5 3-5 3Z"/></svg>
                    Video Demo
                </button>
            `);
        }

        if (project.zipPath) {
            const zipFilename = `${slugify(project.title)}.zip`;
            actions.push(`
                <a href="${escapeAttr(project.zipPath)}" download="${escapeAttr(zipFilename)}" class="chip-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 8v13H3V8"/><path d="M1 3h22v5H1z"/><path d="M10 12h4"/></svg>
                    Unduh ZIP
                </a>
            `);
        }

        return `
            <div class="card carousel-item" data-index="${index}">
                <div class="card-image">
                    <img src="${escapeAttr(project.image)}" alt="${escapeAttr(project.title)}" loading="lazy">
                </div>
                <div class="card-body">
                    <h3 class="card-title">${escapeHtml(project.title)}</h3>
                    <span class="card-tag">${escapeHtml(project.category)}</span>
                    <p class="card-desc">${escapeHtml(project.description)}</p>
                    <div class="card-actions">${actions.join('')}</div>
                </div>
            </div>
        `;
    }

    function certificateCardHtml(cert, index) {
        const viewLink = cert.certificateLink
            ? `<a href="${escapeAttr(cert.certificateLink)}" target="_blank" rel="noopener" class="cert-link-btn">Lihat Sertifikat</a>`
            : '';

        // The `download` attribute only forces a real download for same-origin
        // (local) files — that's why certificatePdf should point to a file
        // inside assets/documents/, not an external URL.
        const downloadFilename = `${slugify(cert.title)}.pdf`;
        const downloadLink = cert.certificatePdf
            ? `<a href="${escapeAttr(cert.certificatePdf)}" download="${escapeAttr(downloadFilename)}" class="cert-download-btn">
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14"/></svg>
                   Unduh PDF
               </a>`
            : '';

        return `
            <div class="card carousel-item" data-index="${index}">
                <div class="card-image cert-image">
                    <img src="${escapeAttr(cert.image)}" alt="${escapeAttr(cert.title)}" loading="lazy">
                </div>
                <div class="card-body cert-body">
                    <h3 class="card-title">${escapeHtml(cert.title)}</h3>
                    ${cert.subtitle ? `<p class="cert-subtitle">${escapeHtml(cert.subtitle)}</p>` : ''}
                    <div class="cert-actions">${viewLink}${downloadLink}</div>
                </div>
            </div>
        `;
    }

    function slugify(str) {
        return (str || 'sertifikat')
            .toLowerCase()
            .trim()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, '');
    }

    function escapeHtml(str) {
        const div = document.createElement('div');
        div.textContent = str ?? '';
        return div.innerHTML;
    }
    function escapeAttr(str) {
        return escapeHtml(str).replace(/"/g, '&quot;');
    }

    /* ================= CAROUSEL ================= */
    /**
     * Renders a windowed carousel: shows `visibleCount` items at a time.
     * Arrows/dots only appear when there are more items than fit at once.
     */
    function renderCarousel(containerId, items, visibleCount, cardHtmlFn, colsClass) {
        const container = document.getElementById(containerId);
        if (!container) return;

        if (!items || items.length === 0) {
            container.innerHTML = '<p class="empty-state">Belum ada data yang ditambahkan.</p>';
            return;
        }

        const canSlide = items.length > visibleCount;
        const dotsCount = Math.max(items.length - visibleCount + 1, 1);

        container.innerHTML = `
            <div class="carousel">
                <button type="button" class="carousel-arrow prev ${canSlide ? 'show' : ''}" aria-label="Sebelumnya">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="m15 18-6-6 6-6"/></svg>
                </button>
                <button type="button" class="carousel-arrow next ${canSlide ? 'show' : ''}" aria-label="Selanjutnya">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="m9 18 6-6-6-6"/></svg>
                </button>

                <div class="carousel-track ${colsClass}">
                    ${items.map(cardHtmlFn).join('')}
                </div>

                <div class="carousel-dots ${canSlide ? 'show' : ''}">
                    ${Array.from({ length: dotsCount }, (_, i) => `<button type="button" class="dot ${i === 0 ? 'active' : ''}" data-dot="${i}"></button>`).join('')}
                </div>
            </div>
        `;

        let start = 0;
        const track = container.querySelector('.carousel-track');
        const cards = Array.from(track.querySelectorAll('.carousel-item'));
        const dots = Array.from(container.querySelectorAll('.dot'));
        const prevBtn = container.querySelector('.carousel-arrow.prev');
        const nextBtn = container.querySelector('.carousel-arrow.next');

        function update() {
            cards.forEach((card, i) => {
                card.classList.toggle('is-hidden', i < start || i >= start + visibleCount);
            });
            dots.forEach((dot, i) => dot.classList.toggle('active', i === start));
        }

        function goTo(index) {
            const max = items.length - visibleCount;
            start = Math.min(Math.max(index, 0), max);
            update();
        }

        prevBtn.addEventListener('click', () => {
            const max = items.length - visibleCount;
            goTo(start <= 0 ? max : start - 1);
        });
        nextBtn.addEventListener('click', () => {
            const max = items.length - visibleCount;
            goTo(start >= max ? 0 : start + 1);
        });
        dots.forEach((dot) => {
            dot.addEventListener('click', () => goTo(Number(dot.dataset.dot)));
        });

        update();
    }

    /* ================= MODAL (Dokumen & Video) ================= */
    const modalOverlay = document.getElementById('modal-overlay');
    const modalTitle = document.getElementById('modal-title');
    const modalContent = document.getElementById('modal-content');

    function openModal(type, title, source) {
        modalTitle.textContent = title;
        modalContent.classList.remove('video-mode');

        if (type === 'document') {
            modalContent.innerHTML = `<iframe src="${escapeAttr(source)}" title="Dokumen"></iframe>`;
        } else if (type === 'video') {
            modalContent.classList.add('video-mode');
            const embed = toVideoEmbedUrl(source);
            if (embed.isLocal) {
                modalContent.innerHTML = `<video src="${escapeAttr(embed.url)}" controls></video>`;
            } else {
                modalContent.innerHTML = `<iframe src="${escapeAttr(embed.url)}" title="Video demo" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
            }
        }

        modalOverlay.classList.add('open');
    }

    function closeModal() {
        modalOverlay.classList.remove('open');
        modalContent.innerHTML = '';
    }

    function toVideoEmbedUrl(url) {
        if (url.includes('youtube.com/watch?v=')) {
            const id = new URL(url).searchParams.get('v');
            return { url: `https://www.youtube.com/embed/${id}`, isLocal: false };
        }
        if (url.includes('youtu.be/')) {
            const id = url.split('youtu.be/')[1].split(/[?&]/)[0];
            return { url: `https://www.youtube.com/embed/${id}`, isLocal: false };
        }
        if (url.startsWith('http')) {
            return { url, isLocal: false };
        }
        return { url, isLocal: true }; // local uploaded file path, e.g. assets/videos/demo.mp4
    }

    document.getElementById('modal-close').addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closeModal();
    });
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });

    // Event delegation for all "Dokumen" / "Video Demo" buttons
    document.addEventListener('click', (e) => {
        const btn = e.target.closest('[data-open-modal]');
        if (!btn) return;

        const type = btn.dataset.openModal;
        const index = Number(btn.dataset.index);
        const source = btn.dataset.source === 'projects' ? data.projects[index] : null;
        if (!source) return;

        if (type === 'document') {
            openModal('document', `${source.title} — Dokumen`, source.documentPath);
        } else if (type === 'video') {
            openModal('video', `${source.title} — Video Demo`, source.videoUrl);
        }
    });

    /* ================= MOBILE MENU ================= */
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    hamburgerBtn.addEventListener('click', () => mobileMenu.classList.toggle('open'));
    mobileMenu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => mobileMenu.classList.remove('open')));

    /* ================= INIT ================= */
    renderProfile();
    renderCarousel('projects-carousel', data.projects, 3, (p, i) => projectCardHtml(p, i), 'cols-3');
    renderCarousel('certificates-carousel', data.certificates, 4, (c, i) => certificateCardHtml(c, i), 'cols-4');
})();
