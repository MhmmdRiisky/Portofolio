import type {
  Profile,
  Project,
  Technology,
  LearningJourney,
  Education,
  Certification,
  Experience,
} from '@/types'

import jahitImg from '@/assets/Jasa Jahit.jpeg'
import deploymentImg from '@/assets/Deployment.jpeg'
import nmapImg from '@/assets/Nmap.jpeg'
import sembakoImg from '@/assets/Toko Sembako.jpeg'
import prelovedImg from '@/assets/Preloved.jpeg'
import nfServiceImg from '@/assets/NF Service.jpeg'
import sobatSehatImg from '@/assets/Sobat Sehat.jpeg'
import rentalMobilImg from '@/assets/Rental Mobil.jpeg'

export const profileData: Profile = {
  id: 1,
  name: 'Muhamad Risqi',
  headline: 'Fresh Graduate S1 Teknik Informatika | Web Development • DevOps • QA Testing • Cyber Security',
  about:
    'Fresh graduate S1 Teknik Informatika dari STT Terpadu Nurul Fikri dengan latar belakang komprehensif yang mencakup Cyber Security (Vulnerability Assessment & VAPT), Fullstack Web Development (pengembangan frontend responsif & backend API), DevOps & IT Infrastructure (administrasi Linux & containerization Docker), serta Software Testing & Quality Assurance (pengujian fungsional & REST API testing dengan Postman). Terbiasa berkolaborasi dalam tim, menyusun dokumentasi teknis seperti SRS, dan memiliki motivasi kuat untuk terus belajar serta berkontribusi nyata dalam berbagai posisi entry-level IT.',
  location: 'Jakarta & Depok, Indonesia',
  email: 'studentriskyjourney@gmail.com',
  github_url: 'https://github.com/MhmmdRiisky',
  linkedin_url: 'https://www.linkedin.com/in/muhamad-risqi-4a852b251/',
  cv_url: 'https://drive.google.com/file/d/1K8jy3bSIqE8ZVV7BxP726nSMaAtlEGTN/view?usp=sharing',
  profile_image: null,
}

export const openRoles = [
  {
    role: 'Web Developer / Junior Fullstack',
    desc: 'Pengembangan web frontend & backend, Laravel, React.js, REST API, & database MySQL',
    icon: 'Code2',
  },
  {
    role: 'Quality Assurance / Tester',
    desc: 'REST API testing dengan Postman, pengujian manual & fungsional, skenario test case, & SRS',
    icon: 'ShieldCheck',
  },
  {
    role: 'DevOps / IT Staff / Support',
    desc: 'Administrasi server Linux Ubuntu, Docker containerization, troubleshooting teknis, & IT operations',
    icon: 'Cpu',
  },
]

export const technologiesData: Technology[] = [
  // Web Development
  { id: 1, name: 'HTML5 & CSS3', category: 'web', description: 'Struktur semantik web, responsivitas layout, Flexbox, dan CSS Grid', order: 1 },
  { id: 2, name: 'JavaScript (ES6+)', category: 'web', description: 'Manipulasi DOM, asynchronous programming (Promise, Fetch/Axios), dan sintaks modern', order: 2 },
  { id: 3, name: 'PHP (OOP)', category: 'web', description: 'Pemrograman berorientasi objek, penanganan logika bisnis, dan integrasi backend', order: 3 },
  { id: 4, name: 'Laravel', category: 'web', description: 'Arsitektur MVC, Eloquent ORM, perancangan RESTful API, routing, dan middleware', order: 4 },
  { id: 5, name: 'React.js', category: 'web', description: 'Komponen berbasis fungsi, React hooks, state handling, dan konsumsi REST API', order: 5 },
  { id: 6, name: 'Tailwind CSS', category: 'web', description: 'Utility-first CSS styling, antarmuka responsif, dan desain antarmuka modern', order: 6 },
  { id: 7, name: 'Bootstrap', category: 'web', description: 'Framework styling responsif dengan komponen antarmuka siap pakai', order: 7 },
  { id: 8, name: 'RESTful API', category: 'web', description: 'Perancangan dan integrasi endpoint data HTTP JSON antara frontend dan backend', order: 8 },
  { id: 9, name: 'Git & GitHub', category: 'web', description: 'Version control system, kolaborasi tim, branching, dan manajemen repositori kode', order: 9 },

  // Database
  { id: 10, name: 'MySQL', category: 'database', description: 'Pengelolaan basis data relasional, relasi tabel foreign key, dan optimasi query SQL', order: 10 },
  { id: 11, name: 'SQL & Database Modeling', category: 'database', description: 'Perancangan Entity Relationship Diagram (ERD), normalisasi data (1NF–3NF), dan migrasi skema', order: 11 },

  // DevOps & IT Infrastructure
  { id: 12, name: 'Linux (Ubuntu)', category: 'devops', description: 'Administrasi sistem operasi server, CLI, shell scripting dasar, dan manajemen permissions', order: 12 },
  { id: 13, name: 'Docker & Docker Compose', category: 'devops', description: 'Containerization aplikasi dan orkestrasi multi-container untuk standardisasi environment', order: 13 },
  { id: 14, name: 'Nginx', category: 'devops', description: 'Konfigurasi web server dan reverse proxy untuk routing layanan aplikasi', order: 14 },
  { id: 15, name: 'CI/CD Fundamentals', category: 'devops', description: 'Pemahaman alur otomasi integrasi dan deployment berkelanjutan', order: 15 },
  { id: 16, name: 'AWS (EC2, S3, VPC, RDS)', category: 'devops', description: 'Mempelajari layanan komputasi EC2, penyimpanan S3, jaringan virtual VPC, dan basis data terkelola RDS', order: 16 },
  // Software Testing & QA
  { id: 17, name: 'Postman (API Testing)', category: 'qa', description: 'Pengujian endpoint REST API, pembuatan test collections, assertions respons, dan verifikasi status code', order: 17 },
  { id: 18, name: 'Manual & Functional Testing', category: 'qa', description: 'Penyusunan skenario uji, pengujian fungsionalitas fitur (positive/negative test cases), dan validasi boundary', order: 18 },
  { id: 19, name: 'Test Case Design & Bug Reporting', category: 'qa', description: 'Perancangan langkah pengujian sistematis, pelaporan reproducible bugs, dan dokumentasi hasil uji', order: 19 },
  { id: 20, name: 'SQL Data Verification', category: 'qa', description: 'Pemanfaatan query SQL untuk memverifikasi integritas data yang disimpan backend saat pengujian', order: 20 },
  // Cyber Security
  { id: 21, name: 'Vulnerability Assessment (VAPT)', category: 'cyber', description: 'Pemeriksaan potensi kerentanan keamanan pada website dan sistem dalam ruang lingkup pengujian akademik', order: 21 },
  { id: 22, name: 'Nmap', category: 'cyber', description: 'Tools pemindaian jaringan untuk mendeteksi host aktif, port terbuka, dan layanan sistem yang berjalan', order: 22 },
  { id: 23, name: 'Nikto', category: 'cyber', description: 'Tools scanner otomatis untuk mendeteksi potensi kerentanan konfigurasi web server', order: 23 },
  { id: 24, name: 'Burp Suite', category: 'cyber', description: 'Interupsi dan inspeksi lalu lintas request/response HTTP untuk evaluasi keamanan web aplikasi', order: 24 },
  { id: 25, name: 'Dasar Cyber Security & OWASP', category: 'cyber', description: 'Prinsip CIA Triad, pemahaman risiko keamanan umum OWASP Top 10, dan praktik sanitasi input', order: 25 },

  // Additional DevOps, QA, and database tools
  { id: 26, name: 'Kubernetes', category: 'devops', description: 'Mempelajari dasar orkestrasi container dan pengelolaan deployment aplikasi', order: 26 },
  { id: 27, name: 'Ansible', category: 'devops', description: 'Mempelajari dasar otomasi konfigurasi dan pengelolaan infrastruktur', order: 27 },
  { id: 28, name: 'Terraform', category: 'devops', description: 'Mempelajari dasar Infrastructure as Code untuk mendefinisikan dan mengelola infrastruktur', order: 28 },
  { id: 29, name: 'Jenkins CI/CD', category: 'devops', description: 'Mempelajari penyusunan pipeline integrasi dan deployment berkelanjutan menggunakan Jenkins', order: 29 },
  { id: 30, name: 'Prometheus', category: 'devops', description: 'Mempelajari pengumpulan dan pemantauan metrik sistem dan layanan', order: 30 },
  { id: 31, name: 'Grafana', category: 'devops', description: 'Mempelajari visualisasi metrik dan pembuatan dashboard monitoring', order: 31 },
  { id: 32, name: 'Selenium WebDriver', category: 'qa', description: 'Mempelajari dasar otomasi pengujian antarmuka web di browser, menjalankan skenario, dan memeriksa hasil interaksi pengguna', order: 32 },
  { id: 33, name: 'MongoDB', category: 'database', description: 'Mempelajari dasar basis data NoSQL berbasis dokumen, termasuk pengelolaan database, collection, dan document', order: 33 },
]

export const projectsData: Project[] = [
  {
    id: 1,
    title: 'RANCANG BANGUN APLIKASI PEMESANAN BERBASIS WEB DENGAN ANALISIS KEBUTUHAN DX FRAMEWORK PADA UMKM JAHIT K’ROS',
    slug: 'aplikasi-web-fullstack-umkm-jasa-jahit',
    category: 'Web Development',
    overview:
      'Aplikasi web fullstack yang dikembangkan sebagai proyek skripsi untuk membantu digitalisasi proses layanan dan operasional usaha UMKM jasa jahit, mulai dari katalog busana, pencatatan ukuran kustom, hingga pemantauan status pengerjaan pesanan.',
    problem:
      'Pencatatan pesanan dan ukuran tubuh pelanggan pada usaha jasa jahit umumnya masih dilakukan secara konvensional di buku manual, yang berisiko hilang, rusak, atau salah membaca ukuran sehingga menimbulkan kesalahan pemotongan bahan dan komplain pelanggan.',
    objectives:
      'Menyediakan sistem informasi berbasis web yang memfasilitasi pencatatan data pemesanan secara akurat, penyimpanan detail parameter ukuran pakaian kustom, serta transparansi pelacakan status pengerjaan jahitan secara real-time.',
    solution:
      'Mengembangkan aplikasi secara mandiri dengan metode Agile melalui proses iteratif. Frontend dibangun menggunakan React.js, JavaScript (ES6+), dan Tailwind CSS; backend menggunakan Laravel (PHP); dan database menggunakan MySQL. Pengujian dilakukan dengan Black Box Testing untuk menguji fungsionalitas sistem serta User Acceptance Testing (UAT) untuk mengevaluasi penerimaan sistem oleh pengguna. Solusi menyediakan formulir input ukuran terstruktur dan panel admin pengelolaan data pesanan.',
    features: [
      'Katalog digital model pakaian, referensi busana, dan kisaran estimasi biaya jasa',
      'Formulir pencatatan detail ukuran tubuh kustom dengan validasi parameter input',
      'Sistem tracking status progres pesanan (Pending, Pemotongan Pola, Proses Jahit, Selesai)',
      'Panel dashboard admin untuk rekap data pesanan, pengelolaan pelanggan, dan invoice',
    ],
    my_role: 'Fullstack Developer (Proyek Skripsi Mandiri)',
    challenges:
      'Merancang skema basis data yang fleksibel untuk menyimpan beragam atribut ukuran pakaian kustom yang variatif tanpa mengorbankan integritas data dan performa query relasional.',
    outcomes:
      'Berhasil menyelesaikan implementasi skripsi tepat waktu, mengintegrasikan arsitektur frontend dan backend secara mandiri, serta memahami penerapan rekayasa perangkat lunak untuk kebutuhan digitalisasi operasional UMKM.',
    year: 2024,
    status: 'published',
    is_featured: true,
    order: 1,
    thumbnail: jahitImg,
    technologies: [
      technologiesData[3], // Laravel
      technologiesData[4], // React.js
      technologiesData[9], // MySQL
      technologiesData[5], // Tailwind CSS
      technologiesData[1], // JavaScript
    ],
  },
  {
    id: 2,
    title: 'DevOps Final Project — Infrastructure & Containerization',
    slug: 'devops-final-project',
    category: 'DevOps & Infrastructure',
    overview:
      'Proyek akhir program pelatihan DevOps di NF Academy yang berfokus pada perancangan arsitektur deployment multi-container, standardisasi environment menggunakan Docker & Docker Compose, reverse proxy Nginx, dan dokumentasi infrastruktur sistem.',
    problem:
      'Ketidakkonsistenan konfigurasi antara lingkungan pengembangan lokal dan server deployment ("works on my machine") sering memicu kegagalan rilis dan mempersulit kolaborasi teknis.',
    objectives:
      'Membangun arsitektur deployment yang konsisten, reproducible, dan terisolasi dengan containerization serta menyusun dokumentasi arsitektur infrastruktur sistem yang terstruktur.',
    solution:
      'Mengonfigurasi multi-container Docker Compose untuk runtime aplikasi, web server Nginx sebagai reverse proxy, dan database MySQL, serta menerapkan manajemen permission pada sistem operasi Linux Ubuntu.',
    features: [
      'Multi-container orchestration dengan Docker Compose (App runtime, Nginx, MySQL DB)',
      'Konfigurasi Nginx sebagai reverse proxy dan web server routing',
      'Isolasi jaringan container (bridge network) dan persistent volume storage',
      'Pengelolaan konfigurasi environment variable (.env) dan dokumentasi alur deployment',
    ],
    my_role: 'Project Lead & DevOps Infrastructure Contributor',
    challenges:
      'Mengoordinasikan pembagian tugas tim sebagai Project Lead, menyelaraskan konfigurasi network antar kontainer, serta memastikan persistensi volume storage database pada sistem operasi Linux Ubuntu.',
    outcomes:
      'Memimpin tim menyelesaikan proyek akhir tepat waktu, menghasilkan environment deployment yang siap dijalankan ulang (reproducible), serta memperkuat pemahaman praktis mengenai administrasi Linux dan containerization.',
    year: 2025,
    status: 'published',
    is_featured: true,
    order: 2,
    thumbnail: deploymentImg,
    technologies: [
      technologiesData[11], // Linux Ubuntu
      technologiesData[12], // Docker & Docker Compose
      technologiesData[13], // Nginx
      technologiesData[8],  // Git & GitHub
      technologiesData[14], // CI/CD Fundamentals
    ],
  },
  {
    id: 3,
    title: 'VAPT — Vulnerability Assessment and Penetration Testing',
    slug: 'vapt-vulnerability-assessment-penetration-testing',
    category: 'Cyber Security',
    overview:
      'Proyek pengujian keamanan sistem berbasis akademik pada Semester 3–4 untuk mempelajari proses identifikasi, pemindaian, dan pemeriksaan potensi kerentanan keamanan pada website dan sistem target uji berizin.',
    problem:
      'Aplikasi web sering kali memiliki celah keamanan tersembunyi seperti miskonfigurasi server, port terbuka yang tidak perlu, atau kerentanan parameter input yang dapat berisiko jika tidak diidentifikasi sedini mungkin.',
    objectives:
      'Menerapkan metodologi Vulnerability Assessment secara terstruktur untuk mengidentifikasi potensi celah keamanan pada sistem target pengujian akademik serta menyusun laporan evaluasi dan rekomendasi mitigasi dasar.',
    solution:
      'Melakukan pemindaian jaringan dan port menggunakan Nmap, analisis kerentanan konfigurasi web server dengan Nikto, serta inspeksi request dan interupsi lalu lintas HTTP menggunakan Burp Suite sesuai etika pengujian keamanan.',
    features: [
      'Reconnaissance dan network mapping untuk identifikasi port terbuka menggunakan Nmap',
      'Pemindaian potensi celah konfigurasi web server dan file berisiko menggunakan Nikto',
      'Interupsi dan inspeksi lalu lintas parameter request/response HTTP menggunakan Burp Suite Proxy',
      'Penyusunan dokumen vulnerability assessment report yang memuat temuan celah dan rekomendasi perbaikan dasar',
    ],
    my_role: 'Security Tester (Proyek Akhir Akademik)',
    challenges:
      'Menganalisis hasil output pemindaian tools untuk membedakan antara false positive dengan potensi kerentanan nyata tanpa melakukan eksploitasi yang mengganggu integritas sistem.',
    outcomes:
      'Memahami alur kerja pemeriksaan kerentanan keamanan (vulnerability assessment), menguasai penggunaan tools standar industri (Nmap, Nikto, Burp Suite), serta menginternalisasi prinsip keamanan web defensif.',
    year: 2023,
    status: 'published',
    is_featured: true,
    order: 3,
    thumbnail: nmapImg,
    technologies: [
      technologiesData[21], // Nmap
      technologiesData[22], // Nikto
      technologiesData[23], // Burp Suite
      technologiesData[20], // Vulnerability Assessment
      technologiesData[24], // Dasar Cyber Security & OWASP
    ],
  },
  {
    id: 4,
    title: 'Website E-Commerce Toko Kelontong',
    slug: 'website-ecommerce-toko-kelontong',
    category: 'Web Development',
    overview:
      'Pengembangan website e-commerce untuk mendukung digitalisasi penjualan dan manajemen produk pada toko kelontong, menyediakan katalog produk yang mudah diakses serta pengelolaan inventaris dasar.',
    problem:
      'Pencatatan inventaris barang dagangan dan transaksi belanja harian pada toko kelontong fisik masih manual, membatasi kemudahan pelanggan mengecek ketersediaan barang dan menyulitkan rekapitulasi stok pedagang.',
    objectives:
      'Membangun website e-commerce fungsional yang menyajikan katalog produk terstruktur, alur pemesanan sederhana, serta panel admin untuk pembaruan inventaris barang.',
    solution:
      'Mengembangkan antarmuka web responsif dengan backend PHP dan basis data MySQL, mengintegrasikan fitur katalog produk, keranjang belanja, dan manajemen data barang di sisi panel admin.',
    features: [
      'Katalog produk toko kelontong dengan pembagian kategori barang yang jelas',
      'Sistem keranjang belanja interaktif dan formulir pemesanan produk',
      'Panel dashboard admin untuk pengelolaan inventaris, tambah/edit produk, dan cek stok',
      'Pencatatan dan pemantauan riwayat status pesanan masuk',
    ],
    my_role: 'Web Developer',
    challenges:
      'Menyinkronkan logika pembaruan stok barang saat transaksi diproses agar kuantitas inventaris dalam basis data tetap akurat dan konsisten.',
    outcomes:
      'Memperdalam implementasi operasi CRUD (Create, Read, Update, Delete) pada backend PHP dan database MySQL, serta merancang antarmuka transaksi yang praktis bagi pengguna.',
    year: 2024,
    status: 'published',
    is_featured: false,
    order: 4,
    thumbnail: sembakoImg,
    technologies: [
      technologiesData[2], // PHP
      technologiesData[9], // MySQL
      technologiesData[1], // JavaScript
      technologiesData[0], // HTML5 & CSS3
      technologiesData[6], // Bootstrap
    ],
  },
  {
    id: 5,
    title: 'Website Preloved — Pengembangan & Quality Assurance',
    slug: 'website-preloved-pengembangan-quality-assurance',
    category: 'QA & Software Testing',
    overview:
      'Proyek tim pengembangan aplikasi web marketplace preloved (jual-beli barang bekas) selama program pelatihan Fullstack Web Development di NF Academy. Berperan dalam pengembangan frontend dan backend sesuai wireframe, dengan fokus pada keamanan API, performa aplikasi, serta proses testing dan maintenance.',
    problem:
      'Aplikasi web yang dikembangkan dalam tim membutuhkan jaminan kualitas end-to-end — mulai dari konsistensi antarmuka frontend hingga keandalan endpoint backend — agar proses jual-beli di platform dapat berjalan tanpa hambatan bagi pengguna.',
    objectives:
      'Mengembangkan fitur frontend dan backend aplikasi marketplace preloved sesuai wireframe, sekaligus memastikan keandalan sistem melalui pengujian fungsional API, evaluasi keamanan endpoint, dan pemeliharaan performa aplikasi.',
    solution:
      'Berkontribusi sebagai anggota tim pengembang dengan mengimplementasikan komponen frontend dan logika backend, kemudian melakukan pengujian endpoint REST API menggunakan Postman — mencakup verifikasi status code, validasi skema JSON, pengujian autentikasi, dan skenario masukan negatif untuk memastikan stabilitas dan keamanan API.',
    features: [
      'Implementasi komponen frontend responsif sesuai wireframe desain aplikasi marketplace',
      'Pengembangan endpoint backend dan integrasi alur data antara frontend dan API',
      'Automated test assertions Postman untuk status code, validasi JSON schema, dan autentikasi Bearer token',
      'Pengujian keamanan endpoint API: parameter validation, boundary cases, dan penanganan error response',
      'Evaluasi performa dan pemeliharaan konsistensi response antar endpoint aplikasi',
    ],
    my_role: 'Fullstack Developer & Quality Assurance (Pelatihan NF Academy)',
    challenges:
      'Menyeimbangkan peran sebagai developer dan QA tester secara bersamaan — memastikan fitur yang dikembangkan sendiri tetap diuji secara objektif dengan skenario negatif dan edge-cases yang realistis.',
    outcomes:
      'Memahami alur pengembangan aplikasi web dalam tim secara menyeluruh, dari implementasi frontend dan backend hingga validasi kualitas API, serta internalisasi praktik testing sebagai bagian integral dari siklus pengembangan perangkat lunak.',
    year: 2024,
    status: 'published',
    is_featured: true,
    order: 5,
    thumbnail: prelovedImg,
    technologies: [
      technologiesData[3],  // Laravel
      technologiesData[4],  // React.js
      technologiesData[16], // Postman
      technologiesData[17], // Manual & Functional Testing
      technologiesData[18], // Test Case Design & Bug Reporting
      technologiesData[1],  // JavaScript
    ],
  },
  {
    id: 6,
    title: 'NF Service — Sistem Layanan Terpadu',
    slug: 'nf-service-sistem-layanan-terpadu',
    category: 'Academic Projects',
    overview:
      'Proyek kelompok pada mata kuliah Manajemen Proyek untuk merancang dan mendokumentasikan kebutuhan sistem aplikasi layanan terpadu (mencakup penanganan pengajuan layanan elektronik dan kebutuhan operasional).',
    problem:
      'Komunikasi dan penyelarasan kebutuhan antara perencana proyek, desainer, dan tim pengembang sering kali terhambat tanpa adanya notulensi rapat yang terstruktur serta dokumentasi perumusan masalah yang jelas.',
    objectives:
      'Mendukung kelancaran pelaksanaan proyek tim melalui pencatatan notulensi rapat berkala, perumusan inventaris kendala, penyusunan usulan solusi, dan pendokumentasian kebutuhan proyek.',
    solution:
      'Mengambil peran aktif dalam mendokumentasikan setiap hasil rapat koordinasi tim, menyusun rangkuman permasalahan dan alternatif solusi, membantu dokumentasi alur kebutuhan pengguna, serta menyusun copywriting teks antarmuka.',
    features: [
      'Dokumentasi notulensi rapat tim dan tindak lanjut tugas (action items) secara teratur',
      'Pencatatan inventaris permasalahan tim dan perumusan alternatif usulan solusi',
      'Penyusunan naskah copywriting teks label dan pesan panduan pengguna pada sistem',
      'Bantuan dokumentasi spesifikasi kebutuhan fungsionalitas aplikasi layanan terpadu',
    ],
    my_role: 'Copywriter & Dokumentasi Kebutuhan Proyek',
    challenges:
      'Menjembatani komunikasi teknis antar anggota tim dan merangkum hasil diskusi panjang menjadi dokumen notulensi yang ringkas, terarah, dan mudah ditindaklanjuti.',
    outcomes:
      'Melatih keterampilan komunikasi profesional, manajemen notulensi proyek, kolaborasi tim yang adaptif, serta pemahaman alur dokumentasi kebutuhan perangkat lunak.',
    year: 2024,
    status: 'published',
    is_featured: false,
    order: 6,
    thumbnail: nfServiceImg,
    technologies: [
      technologiesData[8],  // Git & GitHub
      technologiesData[0],  // HTML5 & CSS3
      technologiesData[2],  // PHP
      technologiesData[9],  // MySQL
    ],
  },
  {
    id: 7,
    title: 'Sobat Sehat System — Analisis Kebutuhan & Dokumentasi SRS',
    slug: 'sobat-sehat-system',
    category: 'Academic Projects',
    overview:
      'Proyek kelompok mata kuliah Rekayasa Perangkat Lunak untuk perancangan spesifikasi kebutuhan perangkat lunak (SRS) dan purwarupa sistem pelayanan konsultasi kesehatan masyarakat di lingkungan kampus.',
    problem:
      'Alur pelayanan kesehatan kampus sebelumnya belum memiliki dokumentasi spesifikasi kebutuhan dan pemodelan alur kerja terstruktur yang sesuai dengan standar rekayasa perangkat lunak.',
    objectives:
      'Menyusun dokumen Software Requirements Specification (SRS) terstandarisasi, merancang diagram pemodelan sistem (Use Case Diagram), serta mengelola alur kerja tim menggunakan Trello.',
    solution:
      'Mengidentifikasi kebutuhan pengguna dan sistem, menyusun spesifikasi kebutuhan fungsional dan non-fungsional, memodelkan interaksi aktor dengan Use Case Diagram, serta mengelola pembagian tugas tim menggunakan Trello.',
    features: [
      'Penyusunan dokumen Software Requirements Specification (SRS) terstandarisasi',
      'Pemodelan diagram Use Case untuk memetakan peran pengguna, dokter, dan staf administrasi',
      'Identifikasi kebutuhan fungsional sistem dan batasan operasional',
      'Pengelolaan alur pembagian tugas tim dan monitoring progres menggunakan Trello',
      'Dukungan perancangan antarmuka dan purwarupa web dasar',
    ],
    my_role: 'System Analyst & Kontributor Dokumentasi SRS',
    challenges:
      'Menganalisis kebutuhan sistem agar menyeluruh dan memastikan pemodelan diagram Use Case selaras dengan skenario pelayanan konsultasi kesehatan yang nyata.',
    outcomes:
      'Memahami tahapan Software Development Life Cycle (SDLC), perancangan dokumen spesifikasi teknis (SRS), pemodelan UML, dan manajemen kolaborasi proyek tim.',
    year: 2023,
    status: 'published',
    is_featured: false,
    order: 7,
    thumbnail: sobatSehatImg,
    technologies: [
      technologiesData[2], // PHP
      technologiesData[9], // MySQL
      technologiesData[0], // HTML5 & CSS3
    ],
  },
  {
    id: 8,
    title: 'Website Rental Mobil',
    slug: 'website-rental-mobil',
    category: 'Web Development',
    overview:
      'Proyek tim pengembangan aplikasi website rental mobil untuk memberikan kemudahan bagi calon penyewa dalam melihat informasi armada mobil, spesifikasi kendaraan, tarif sewa, dan pengajuan reservasi.',
    problem:
      'Proses penyewaan armada mobil yang masih manual melalui percakapan telepon atau pesan singkat sering menimbulkan miskomunikasi jadwal ketersediaan kendaraan dan rincian tarif.',
    objectives:
      'Membangun antarmuka website rental mobil yang informatif, menarik, dan mudah dinavigasi oleh pengguna pada berbagai perangkat.',
    solution:
      'Berkolaborasi dalam tim untuk merancang dan mengimplementasikan beberapa halaman antarmuka web (frontend), termasuk katalog armada kendaraan, rincian detail mobil, dan formulir pengajuan sewa.',
    features: [
      'Katalog interaktif armada mobil dengan informasi spesifikasi dan tarif sewa',
      'Halaman rincian detail kendaraan, kapasitas penumpang, dan jenis transmisi',
      'Formulir reservasi pemesanan sewa mobil yang responsif',
      'Tata letak desain yang kompatibel untuk tampilan desktop dan perangkat mobile',
    ],
    my_role: 'Frontend Contributor (Proyek Tim)',
    challenges:
      'Menjaga konsistensi styling antarmuka dengan komponen yang dikerjakan oleh anggota tim lainnya serta memastikan responsivitas form pemesanan pada berbagai resolusi layar.',
    outcomes:
      'Memperkuat keterampilan implementasi antarmuka web responsif, pembagian komponen UI, dan kerja sama tim dalam repositori Git bersama.',
    year: 2024,
    status: 'published',
    is_featured: false,
    order: 8,
    thumbnail: rentalMobilImg,
    technologies: [
      technologiesData[0], // HTML5 & CSS3
      technologiesData[1], // JavaScript
      technologiesData[6], // Bootstrap
      technologiesData[2], // PHP
      technologiesData[8], // Git & GitHub
    ],
  },
]

export const certificationsData: Certification[] = [
  {
    id: 1,
    title: 'Sertifikat Kompetensi Junior Web Developer (Pengembang Web Pratama)',
    issuer: 'Badan Nasional Sertifikasi Profesi (BNSP) / LSP TIK Global',
    date: 'Januari 2025',
    credential_id: null,
    credential_url: null,
    description:
      'Sertifikasi kompetensi kerja standar nasional Indonesia (SKKNI) bidang Pemrograman dan Pengembangan Software. Memvalidasi kompetensi sebagai Pengembang Web Pratama (Junior Web Developer) yang diterbitkan oleh LSP TIK Global.',
  },
  {
    id: 2,
    title: 'Sertifikat Studi Independen — Fullstack Web Developer',
    issuer: 'PT Nurul Fikri Cipta Inovasi (NF Academy) / Kampus Merdeka',
    date: '23 September – 31 Desember 2024',
    credential_id: null,
    credential_url: null,
    description:
      'Sertifikat kelulusan program Studi Independen Bersertifikat (SIB) Kampus Merdeka sebagai Fullstack Web Developer di NF Academy, mencakup pengembangan frontend, backend RESTful API, database MySQL, pengujian sistem, dan proyek akhir tim.',
  },
  {
    id: 3,
    title: 'Sertifikat Studi Independen — DevOps Engineer',
    issuer: 'PT Nurul Fikri Cipta Inovasi (NF Academy) / Kampus Merdeka',
    date: '17 Februari – 25 Juni 2025',
    credential_id: null,
    credential_url: null,
    description:
      'Sertifikat kelulusan program Studi Independen Bersertifikat (SIB) Kampus Merdeka sebagai DevOps Engineer di NF Academy, mencakup administrasi server Linux, containerization Docker, reverse proxy Nginx, pipeline CI/CD, dan infrastruktur cloud.',
  },
  {
    id: 4,
    title: 'AWS S3 Basics',
    issuer: 'Coursera Project Network',
    date: '11 Juni 2024',
    credential_id: null,
    credential_url: null,
    description:
      'Sertifikat proyek terpandu dari Coursera mencakup pengenalan dan praktik langsung layanan penyimpanan objek Amazon S3, termasuk pembuatan bucket, manajemen objek, pengaturan akses, dan konfigurasi hosting statis.',
  },
  {
    id: 5,
    title: 'Cloud Practitioner Essentials (Belajar Dasar AWS Cloud)',
    issuer: 'Dicoding Indonesia',
    date: 'Berlaku hingga 24 Juni 2027',
    credential_id: null,
    credential_url: null,
    description:
      'Sertifikat kelulusan kelas Dicoding yang mencakup konsep dasar cloud computing, layanan utama AWS (EC2, S3, RDS), model tanggung jawab bersama, keamanan cloud, dan praktik terbaik infrastruktur AWS.',
  },
  {
    id: 6,
    title: 'Belajar Dasar Pemrograman JavaScript',
    issuer: 'Dicoding Indonesia',
    date: 'Berlaku hingga 22 Oktober 2027',
    credential_id: null,
    credential_url: null,
    description:
      'Sertifikat kelulusan kelas Dicoding yang mencakup fundamental JavaScript, struktur data array dan object, Object-Oriented Programming (OOP), serta konsep asynchronous JavaScript (Promise, Async/Await).',
  },
  {
    id: 7,
    title: 'Belajar Dasar Pemrograman Web',
    issuer: 'Dicoding Indonesia',
    date: 'Berlaku hingga 24 November 2027',
    credential_id: null,
    credential_url: null,
    description:
      'Sertifikat kelulusan kelas Dicoding yang mencakup standar web internasional W3C, semantik HTML5, teknik layouting CSS3 modern (Flexbox & Grid), serta penerapan responsive web design.',
  },
  {
    id: 8,
    title: 'Certificate of Competence — Graphics Design',
    issuer: 'Hendevane Indonesia / HTP Global Knowledge',
    date: '17 Juli 2023',
    credential_id: null,
    credential_url: null,
    description:
      'Sertifikat kompetensi program pelatihan Graphics Design yang mencakup prinsip dasar desain grafis, penggunaan perangkat lunak desain, serta produksi materi visual digital.',
  },
  {
    id: 9,
    title: 'Certificate of Competency — Microsoft Office Profesional',
    issuer: 'NF Computer Training Center',
    date: '16 Januari 2023',
    credential_id: null,
    credential_url: null,
    description:
      'Sertifikat kelulusan program Pelatihan Literasi Digital Microsoft Office Profesional, mencakup pengoperasian Microsoft Word, Excel, dan PowerPoint untuk kebutuhan produktivitas dan administrasi perkantoran.',
  },
]

export const learningJourneysData: LearningJourney[] = [
  {
    id: 1,
    title: 'Semester 3–4: Cyber Security & Pengujian Keamanan (VAPT)',
    category: 'Cyber Security',
    description:
      'Mempelajari prinsip keamanan sistem informasi dan analisis kerentanan. Proyek akhir pada periode ini adalah Vulnerability Assessment and Penetration Testing (VAPT), yaitu proyek akademik yang berfokus pada identifikasi dan pemeriksaan potensi celah keamanan pada website atau sistem target pengujian berizin menggunakan tools standar.',
    technologies: 'Nmap, Nikto, Burp Suite, Vulnerability Assessment, OWASP Top 10',
    period: 'Semester 3–4 (Perkuliahan)',
    status_label: 'Praktik dalam proyek',
    order: 1,
  },
  {
    id: 2,
    title: 'Semester 5: Fullstack Web Development',
    category: 'Fullstack Web Development',
    description:
      'Memperdalam proses pengembangan aplikasi web secara menyeluruh, mencakup pembuatan antarmuka frontend yang responsif, logika pemrograman backend, pengelolaan basis data relasional MySQL, perancangan endpoint REST API, serta pengujian fungsional API menggunakan Postman.',
    technologies: 'HTML5, CSS3, JavaScript, PHP, Laravel, MySQL, REST API, Postman',
    period: 'Semester 5 (Perkuliahan & Pelatihan)',
    status_label: 'Praktik dalam proyek',
    order: 2,
  },
  {
    id: 3,
    title: 'Semester 6: DevOps & IT Infrastructure',
    category: 'DevOps & IT Infrastructure',
    description:
      'Mempelajari DevOps dan pengelolaan infrastruktur, mencakup administrasi Linux, containerization dan orkestrasi container, layanan AWS, otomasi infrastruktur, pipeline CI/CD, serta monitoring sistem.',
    technologies: 'Linux administration, Docker, container orchestration, AWS (EC2, S3, VPC, RDS), Kubernetes, Ansible, Terraform, Jenkins CI/CD, Prometheus, Grafana',
    period: 'Semester 6 (Perkuliahan & Pelatihan)',
    status_label: 'Praktik dalam proyek',
    order: 3,
  },
  {
    id: 4,
    title: 'Semester 7–8: Skripsi — RANCANG BANGUN APLIKASI PEMESANAN BERBASIS WEB DENGAN ANALISIS KEBUTUHAN DX FRAMEWORK PADA UMKM JAHIT K’ROS',
    category: 'Skripsi & Web Development',
    description:
      'Mengimplementasikan seluruh pengetahuan yang dipelajari selama masa perkuliahan ke dalam proyek skripsi berjudul "RANCANG BANGUN APLIKASI PEMESANAN BERBASIS WEB DENGAN ANALISIS KEBUTUHAN DX FRAMEWORK PADA UMKM JAHIT K’ROS". Berfokus pada perancangan frontend, backend, logika bisnis, dan basis data untuk membantu digitalisasi operasional dan proses layanan usaha jasa jahit.',
    technologies: 'Laravel, React.js, MySQL, Tailwind CSS, REST API, Git',
    period: 'Semester 7–8 (Skripsi)',
    status_label: 'Praktik dalam proyek',
    order: 4,
  },
]

export const educationData: Education[] = [
  {
    id: 1,
    degree: 'Sarjana Komputer (S1)',
    field_of_study: 'Teknik Informatika',
    institution: 'STT Terpadu Nurul Fikri',
    start_year: 2022,
    end_year: 2026,
    description:
      'Fresh Graduate S1 Teknik Informatika dengan rekam jejak akademik terstruktur: Semester 3–4 (Cyber Security & VAPT), Semester 5 (Fullstack Web Development & Database), Semester 6 (DevOps & IT Infrastructure), serta Semester 7–8 (Skripsi: Rancang Bangun Aplikasi Pemesanan Berbasis Web dengan Analisis Kebutuhan DX Framework pada UMKM Jahit K’Ros).',
    order: 1,
  },
  {
    id: 2,
    degree: 'Sekolah Menengah Atas (SMA)',
    field_of_study: 'MIPA (Matematika & Ilmu Pengetahuan Alam)',
    institution: 'SMAN 1 Madapangga',
    start_year: 2019,
    end_year: 2022,
    description:
      'Peminatan Matematika dan Ilmu Pengetahuan Alam, membangun landasan logika analitis dan pemecahan masalah komputasional.',
    order: 2,
  },
]

export const experienceData: Experience[] = [
  {
    id: 1,
    title: 'Fullstack Web Developer (Program Pelatihan)',
    company: 'NF Academy – PT Nurul Fikri Cipta Inovasi',
    location: 'Depok, Indonesia',
    start_date: 'September 2024',
    end_date: 'Desember 2024',
    is_current: false,
    description:
      'Mengikuti program pembelajaran intensif Fullstack Web Development yang mencakup pengembangan aplikasi web frontend dan backend, pengelolaan basis data, serta proses pengembangan aplikasi web.\n\n- Mempelajari HTML5, CSS3, JavaScript modern, PHP, dan SQL basis data\n- Mengembangkan aplikasi web dan mengintegrasikan frontend, backend, serta basis data MySQL\n- Menggunakan Postman untuk pengujian endpoint REST API secara fungsional\n- Mempelajari pengujian keamanan dan performa endpoint API\n- Berkolaborasi aktif dalam pengerjaan proyek akhir kelompok berdasarkan wireframe yang ditentukan',
    order: 1,
  },
  {
    id: 2,
    title: 'DevOps (Program Pelatihan & Project Lead)',
    company: 'NF Academy – PT Nurul Fikri Cipta Inovasi',
    location: 'Depok, Indonesia',
    start_date: 'Februari 2025',
    end_date: 'Juni 2025',
    is_current: false,
    description:
      'Mengikuti program pembelajaran DevOps dan infrastruktur IT yang mencakup administrasi server Linux, containerization, konsep cloud computing, otomasi, CI/CD, dan monitoring.\n\n- Mempelajari administrasi Linux, scripting dasar, dan manajemen permissions server\n- Mengimplementasikan containerization aplikasi multi-container menggunakan Docker & Docker Compose\n- Mengonfigurasi web server Nginx sebagai reverse proxy untuk routing layanan aplikasi\n- Berperan sebagai Project Lead dalam proyek akhir DevOps, mengoordinasikan pembagian tugas teknis dan perencanaan arsitektur deployment\n- Menyusun dokumentasi teknis infrastruktur dan panduan deployment sistem',
    order: 2,
  },
  {
    id: 3,
    title: 'IT Support & Technical Staff (Organisasi Mahasiswa)',
    company: 'Himpunan Mahasiswa Teknik Informatika — STT Terpadu Nurul Fikri',
    location: 'Depok, Indonesia',
    start_date: 'Januari 2023',
    end_date: 'Desember 2023',
    is_current: false,
    description:
      'Berpartisipasi aktif dalam divisi teknis organisasi mahasiswa untuk mendukung kelancaran operasional IT kampus dan kegiatan himpunan.\n\n- Melakukan troubleshooting teknis perangkat keras, software, dan konektivitas jaringan pada kegiatan organisasi\n- Mendukung operasional infrastruktur digital dan multimedia saat pelaksanaan acara kampus\n- Mendokumentasikan inventaris perangkat teknis dan laporan operasional kegiatan',
    order: 3,
  },
]
