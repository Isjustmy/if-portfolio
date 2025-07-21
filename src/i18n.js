// src/i18n.js
import { createI18n } from 'vue-i18n';

// Terjemahan untuk setiap bahasa
const messages = {
  en: {
    // Bagian Navbar
    navbarHomeButtonText: "Home",
    navbarAboutButtonText: "About",
    navbarSkillsButtonText: "Skills",
    navbarProjectsButtonText: "Projects",
    navbarCertificatesButtonText: "Certificates",
    navbarContactButtonText: "Contact Me",

    welcomeMessage1: "Hello, I'm",
    nameInWelcomeMessage1: "Ibnu Fajar",
    shortDescription: "A Person who loves backend programming.",
    textInButtonOnWelcome: "Check More About Me",

    // About Me Section
    aboutMeTitle: "About Me",
    descriptionAboutMe1: `My name is Ibnu Fajar, and I'm ${calculateAge()} years old. I am an experienced backend programmer proficient in various programming languages such as HTML, CSS, JavaScript, PHP, Python, and C++.`,
    descriptionAboutMe2: "Additionally, I'm skilled in using various frameworks, particularly Laravel for backend development and Vue for frontend development. With this combination of knowledge, I am capable of building and managing efficient and scalable web applications.",
    downloadTextButton: "Download CV",

    // Skills Section
    skillsTitle: "Skills",
    skillsDescription: "Here are the programming languages and frameworks I am proficient in.",

    // Project Section
    projectTitle: "Projects",
    projectDescription: "Here's project that I've worked on.",
    taskminderDescription: "Taskminder is an application designed for teachers and students to manage assignments.",
    taskminderTutorialButtonText: "Tutorial",
    taskminderPopupCheckMoreButtonText: "Check More",
    taskminderPopupCloseButtonText: "Close",
    classWebsiteProjectTitle: "Class 11 Website Project",
    classWebsiteProjectDescription: "Class 11 website project with four teammates, showcasing students along with their certificates, group photos, and the class organigram structure.",
    ifPortofolioDescription: "This Portofolio",
    smkcodingProjectDescription: "Project to create a simple ecommerce website using Nuxt.js",
    kostkitaDescription: "KostKita.id is a website to display coliving, apartments and boarding houses and can make bookings directly.",

    // Certificate Section
    certificateTitle: "Certificate",
    certificateDescription: "Here are the certificates I have",

    certificate_dicoding_javascript_title1: "Dicoding Certificate",
    certificate_dicoding_javascript_title2: "Learn Basic JavaScript Programming",
    certificate_dicoding_javascript_description: "The Dicoding certificate I received during the basic JavaScript programming training.",
    certificate_dicoding_javascript_textButton: "View",

    certificate_dicoding_backend_title1: "Dicoding Certificate",
    certificate_dicoding_backend_title2: "Learn to Create Back-End Applications for Beginners",
    certificate_dicoding_backend_description: "The certificate I received while learning to create back-end applications for beginners",
    certificate_dicoding_backend_textButton: "View",

    certificate_dicoding_logic_title1: "Dicoding Certificate",
    certificate_dicoding_logic_title2: "Introduction to Programming Logic (Programming Logic 101)",
    certificate_dicoding_logic_description: "The certificate I received while learning programming logic from Dicoding",
    certificate_dicoding_logic_textButton: "View",

    certificate_dicoding_basic_title1: "Dicoding Certificate",
    certificate_dicoding_basic_title2: " Starting Basic Programming to Become a Software Developer",
    certificate_dicoding_basic_description: "The certificate I received while learning basic software programming",
    certificate_dicoding_basic_textButton: "View",

    certificate_dicoding_visualdata_title1: "Dicoding Certificate",
    certificate_dicoding_visualdata_title2: "Learn Basic Data Visualization",
    certificate_dicoding_visualdata_description: "The certificate I received while learning basic data visualization",
    certificate_dicoding_visualdata_textButton: "View",

    certificate_smkcoding_report_title: "SMKCoding Report 2023",
    certificate_smkcoding_report_description: "SMKCoding Training Report 2023 from project simple ecommerce with NuxtJS",
    certificate_smkcoding_report_textButton: "View",

    certificate_smkcoding_title: "SMKCoding Certificate",
    certificate_smkcoding_description: "SMKCoding 2023 training certificate",
    certificate_smkcoding_textButton: "View",

    // Contact Me Section
    contactMeTitle: "Contact Me",
    contactMeDescription: "You can contact me via email: ",
    contactMeDescriptionTemporary: "(This feature isn't avalaible right now, DM my instagram instead (link is in the Instagram logo in the footer below).)",
    contactMeName: "Name",
    contactMeNamePlaceholder: "Name",
    contactMeEmail: "Email",
    contactMeEmailPlaceholder: "Email",
    contactMeMessage: "Message",
    contactMeMessagePlaceholder: "Message Here",
    contactMeButtonText: "Send",
    contactMeAlertSuccess: "Your message has been sent successfully!",
    contactMeAlertError: "An error occurred, your message could not be sent.",

    // Footer
    note1: "NOTE 1: This Website uses cookies ONLY JUST storing your languages preference.",
    note2: "NOTE 2: This website still in progress. Responsive Layout (e.g. mobile) possibly broken, and some features not avalaible.",

    loadingText: "Loading"
  },
  id: {
    // Bagian Navbar
    navbarHomeButtonText: "Home",
    navbarAboutButtonText: "Tentang",
    navbarSkillsButtonText: "Skill",
    navbarProjectsButtonText: "Projek",
    navbarCertificatesButtonText: "Sertifikat",
    navbarContactButtonText: "Kontak Saya",

    welcomeMessage1: 'Halo, Saya',
    nameInWelcomeMessage1: "Ibnu Fajar",
    shortDescription: "Seorang yang sangat menyukai backend programming.",
    textInButtonOnWelcome: "Selengkapnya Tentang Saya",

    // Bagian Tentang Saya
    aboutMeTitle: "Tentang Saya",
    descriptionAboutMe1: `Saya Ibnu Fajar, Umur saya ${calculateAge()} Tahun. Saya seorang programmer backend yang mahir dalam berbagai bahasa pemrograman seperti HTML, CSS, JavaScript, PHP, Python, dan C++`,
    descriptionAboutMe2: "Selain itu, saya juga terampil menggunakan berbagai kerangka kerja, terutama Laravel untuk pengembangan aplikasi backend dan Vue untuk pengembangan aplikasi frontend. Dengan kombinasi pengetahuan ini, saya mampu membangun dan mengelola aplikasi web yang efisien dan skalabel.",
    downloadTextButton: "Unduh CV",

    // Bagian Skill
    skillsTitle: "Skill",
    skillsDescription: "Berikut adalah bahasa pemrograman dan framework yang saya kuasai.",

    // Bagian Projek
    projectTitle: "Projek",
    projectDescription: "Berikut beberapa projek yang saya kerjakan",
    taskminderDescription: "Taskminder adalah aplikasi yang didesain untuk guru dan siswa agar dapat memanajemen tugas.",
    taskminderTutorialButtonText: "Tutorial",
    taskminderPopupCheckMoreButtonText: "Lihat Selengkapnya",
    taskminderPopupCloseButtonText: "Tutup",
    classWebsiteProjectTitle: "Projek Website Kelas 11",
    classWebsiteProjectDescription: "Projek website kelas 11 bersama empat rekan tim, menampilkan siswa-siswa kelas saya (11 PPLG/RPL 3) beserta sertifikat mereka, foto bersama, dan struktur organigram kelas.",
    ifPortofolioDescription: "Portofolio yang sedang anda lihat saat ini.",
    smkcodingProjectDescription: "Projek untuk membuat website toko ecommerce sederhana dengan Nuxt.JS",
    kostkitaDescription: "KostKita.id adalah sebuah website untuk menampilkan coliving, apartemen dan kost serta dapat membuat pemesanan kamar (booking) secara langsung.",

    // Certificate Section
    certificateTitle: "Sertifikat",
    certificateDescription: "Berikut sertifikat yang saya miliki",

    certificate_dicoding_javascript_title1: "Sertifikat Dicoding",
    certificate_dicoding_javascript_title2: "Belajar Dasar Pemrograman Javascript",
    certificate_dicoding_javascript_description: "Sertifikat yang saya dapatkan selama pelatihan dasar pemrograman javascript.",
    certificate_dicoding_javascript_textButton: "Lihat",

    certificate_dicoding_backend_title1: "Sertifikat Dicoding",
    certificate_dicoding_backend_title2: "Belajar Membuat Aplikasi Backend",
    certificate_dicoding_backend_description: "Sertifikat yang saya dapatkan selama belajar membuat aplikasi backend untuk pemula",
    certificate_dicoding_backend_textButton: "Lihat",

    certificate_dicoding_logic_title1: "Sertifikat Dicoding",
    certificate_dicoding_logic_title2: "Pengenalan Ke Logika Pemrograman (Programming Logic 101)",
    certificate_dicoding_logic_description: "Sertifikat yang saya dapatkan saat belajar logika pemrograman dari Dicoding",
    certificate_dicoding_logic_textButton: "Lihat",

    certificate_dicoding_basic_title1: "Sertifikat Dicoding",
    certificate_dicoding_basic_title2: "Memulai Dasar Pemrograman untuk Menjadi Pengembang Software",
    certificate_dicoding_basic_description: "Sertifikat yang saya dapatkan saat belajar pemrograman software dasar",
    certificate_dicoding_basic_textButton: "Lihat",

    certificate_dicoding_visualdata_title1: "Sertifikat Dicoding",
    certificate_dicoding_visualdata_title2: "Belajar Dasar Visualisasi Data",
    certificate_dicoding_visualdata_description: "Sertifikat yang saya dapatkan saat belajar visualisasi data dasar",
    certificate_dicoding_visualdata_textButton: "Lihat",

    certificate_smkcoding_report_title: "Raport Pelatihan SMKCoding 2023",
    certificate_smkcoding_report_description: "Raport Pelatihan SMKCoding 2023 dari projek ecommerce sederhana dengan NuxtJS",
    certificate_smkcoding_report_textButton: "Lihat",

    certificate_smkcoding_title: "Sertifikat SMKCoding",
    certificate_smkcoding_description: "Sertifikat Pelatihan SMKCoding 2023",
    certificate_smkcoding_textButton: "Lihat",

    // Bagian Kontak
    contactMeTitle: "Kontak",
    contactMeDescription: "Anda bisa menghubungi saya melalui email: ",
    contactMeDescriptionTemporary: "(Fitur ini belum tersedia, harap DM instagram saya sebagai gantinya (link berada di logo instagram pada footer dibawah ini).)",
    contactMeName: "Nama",
    contactMeNamePlaceholder: "Nama",
    contactMeEmail: "Email",
    contactMeEmailPlaceholder: "Email",
    contactMeMessage: "Pesan",
    contactMeMessagePlaceholder: "Pesan",
    contactMeButtonText: "Kirim",
    contactMeAlertSuccess: "Pesan anda berhasil dikirim!",
    contactMeAlertError: "Terjadi kesalahan, pesan anda gagal dikirim.",

    // Footer
    note1: "CATATAN 1: Website ini menggunakan cookies HANYA UNTUK menyimpan preferensi bahasa yang anda pilih.",
    note2: "CATATAN 2: Website ini masih dalam pengembangan. Layout Responsif (contohnya mobile) kemungkinan akan rusak, dan beberapa fitur masih belum tersedia.",

    loadingText: "Sedang Memproses"
  },
};

function calculateAge() {
  const birthdate = '2006-07-28';
  const birthDate = new Date(birthdate);
  const now = new Date();

  let age = now.getFullYear() - birthDate.getFullYear();
  const monthDiff = now.getMonth() - birthDate.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < birthDate.getDate())) {
      age--;
  }
  return age;
}

const i18n = createI18n({
  locale: 'id', // Bahasa default
  fallbackLocale: 'id',
  messages,
});

export default i18n;
