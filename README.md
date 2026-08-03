# Portfolio Zeva Lorensia — Versi HTML/CSS/JS Statis

Versi ini **tidak butuh PHP, Laravel, database, atau Node.js sama sekali** —
murni HTML + CSS + JavaScript, jadi bisa dihosting di **hosting gratis
manapun** yang hanya mendukung file statis, misalnya:

- GitHub Pages
- Netlify / Vercel (drag & drop folder ini)
- Cloudflare Pages
- Hosting gratis cPanel biasa (upload ke folder `public_html`)
- Bahkan Google Drive/Firebase Hosting

## Struktur folder

```
index.html                     ← halaman utama (jangan diubah kalau tidak perlu)
css/style.css                  ← semua styling
js/app.js                      ← logic carousel, modal, render data (jangan diubah kalau tidak perlu)
data/portfolio-data.js         ← ⭐ FILE YANG PERLU KAMU EDIT untuk ganti isi website
assets/images/projects/        ← taruh gambar cover project di sini
assets/images/certificates/    ← taruh gambar sertifikat di sini
assets/documents/              ← taruh file PDF dokumen project & sertifikat di sini
assets/videos/                 ← taruh file video demo (kalau tidak pakai link YouTube)
assets/cv/                     ← taruh file CV (PDF) di sini
```

## Cara mengedit isi website (tanpa coding)

Semua konten diatur di **satu file**: `data/portfolio-data.js`.
Buka dengan text editor apa saja (Notepad, VS Code, dll).

### 1. Ganti perkenalan & kontak
Edit bagian `profile` di paling atas file:
```js
profile: {
    name: "Nama Kamu",
    title: "Jabatan Kamu",
    greeting: "Hi, I'm ... 👋",
    headline: "Nama Kamu",
    subheadline: "Jabatan | Bidang",
    bio: "Paragraf perkenalan kamu di sini...",
    cvPath: "assets/cv/cv.pdf",
    cvFilename: "CV-Nama-Kamu.pdf",
    contact: {
        email: "email@kamu.com",
        linkedinLabel: "linkedin.com/in/username",
        linkedinUrl: "https://linkedin.com/in/username",
        whatsappLabel: "+62 8xx-xxxx-xxxx",
        whatsappUrl: "https://wa.me/628xxxxxxxxxx",
        githubLabel: "github.com/username",
        githubUrl: "https://github.com/username",
    },
},
```

### 2. Tambah/ubah/hapus Project
Edit array `projects`. Contoh menambah satu project baru:
```js
{
    title: "Nama Project",
    category: "Website Edukasi",
    description: "Deskripsi singkat perananmu di project ini.",
    image: "assets/images/projects/nama-file.jpg",   // taruh gambarnya di folder assets/images/projects/
    figmaLink: "https://www.figma.com/proto/...",     // kosongkan "" kalau tidak ada
    documentPath: "assets/documents/dokumen-x.pdf",   // kosongkan "" kalau tidak ada
    videoUrl: "https://youtube.com/watch?v=xxxxxxxx", // atau path lokal: "assets/videos/demo.mp4"
},
```
Tinggal **copy-paste blok `{ ... }` di atas** ke dalam array `projects: [ ... ]`,
lalu isi datanya. Urutan project di array = urutan tampil di website.
Kalau project lebih dari 3, panah geser otomatis muncul — tidak perlu setting apa pun.

### 3. Tambah/ubah/hapus Certificate
Sama seperti project, tapi di array `certificates`. Ada 2 link berbeda yang
bisa diisi:

```js
{
    title: "Nama Sertifikat",
    subtitle: "Certificate",
    image: "assets/images/certificates/nama-file.jpg",
    certificateLink: "https://drive.google.com/...",        // tombol "Lihat Sertifikat" — boleh link eksternal
    certificatePdf: "assets/documents/sertifikat-x.pdf",     // tombol "Unduh PDF" — WAJIB file lokal
},
```

**Penting soal `certificatePdf` (tombol Unduh PDF):**
- Supaya file benar-benar **ter-download** (bukan cuma kebuka di tab
  browser), file PDF-nya **harus** ditaruh di folder `assets/documents/`
  milik website ini sendiri, lalu isi path-nya, contoh:
  `"assets/documents/sertifikat-bangkit.pdf"`.
- Link eksternal (Google Drive, Dropbox, dsb) **tidak bisa** dipaksa
  langsung download oleh browser karena beda domain — kalau diisi link
  eksternal di `certificatePdf`, ada kemungkinan malah terbuka di tab baru,
  bukan otomatis ter-download. Untuk hasil yang pasti terdownload, selalu
  upload file PDF-nya langsung ke folder `assets/documents/`.
- Kosongkan `certificatePdf: ""` kalau sertifikat tersebut tidak punya file
  PDF untuk diunduh — tombol "Unduh PDF" otomatis tidak akan muncul.

### 4. Ganti file CV
Taruh file PDF CV kamu di `assets/cv/cv.pdf` (nama file boleh diganti,
tinggal sesuaikan `cvPath` di atas). Tombol "Download CV" otomatis mengunduh
file ini.

## Cara mengetes di komputer sendiri sebelum upload

Karena browser (khususnya Chrome) membatasi `file://`, sebaiknya jangan buka
`index.html` langsung dengan cara double-click. Jalankan server lokal
sederhana dulu, contoh:

```bash
# kalau ada Python
python3 -m http.server 8080
```
lalu buka `http://localhost:8080` di browser.

Atau kalau pakai VS Code, install extension **Live Server** lalu klik kanan
`index.html` → "Open with Live Server".

## Cara upload ke hosting gratis

1. **GitHub Pages**: push semua isi folder ini ke repository GitHub, lalu
   aktifkan GitHub Pages di Settings → Pages → pilih branch `main` / folder
   root.
2. **Netlify/Vercel**: tinggal drag & drop folder ini ke dashboard mereka
   (Netlify Drop: https://app.netlify.com/drop).
3. **Hosting cPanel gratis**: upload seluruh isi folder ini (bukan folder
   `portfolio-static` itu sendiri, tapi isinya) ke folder `public_html` lewat
   File Manager atau FTP.

Tidak ada langkah build/compile — upload apa adanya, langsung jalan.

## Catatan

- Gambar contoh di `data/portfolio-data.js` saat ini masih memakai gambar
  placeholder online (`placehold.co`) supaya bisa langsung dilihat hasilnya.
  Ganti dengan gambar asli kamu di folder `assets/images/...` lalu update
  path-nya.
- Bagian dekorasi di sisi kanan hero adalah ilustrasi SVG bawaan (bukan foto
  kamu), sesuai permintaan awal — ada di dalam `index.html`, bisa diganti
  kalau mau pakai gambar lain.
