/* =================================
   MADINA QALANDAROVA PORTFOLIO — COMPLETE SCRIPT.JS
   ================================= */

// 1. TIL SOZLAMALARI (i18n Dictionaries)
const i18n = {
  uz: {
    nav_about: "Ma'lumot",
    nav_skills: "Ko'nikmalar",
    nav_certs: "Sertifikatlar",
    nav_education: "Ta'lim",
    nav_contact: "Aloqa",
    hero_tag: "Frontend Dev & Cybersecurity",
    hero_hello: "Salom, men",
    hero_name: "Qalandarova Madina",
    hero_desc:
      "IT sohasidagi yosh mutaxassis — zamonaviy interfeys yarataman va raqamli xavfsizlikni ta'minlayman.",
    btn_contact: "Bog'lanish",
    btn_certs: "Sertifikatlar",
    hero_scroll: "Pastga suring",
    stat_cert: "Sertifikatlar",
    stat_dir: "Asosiy Yo'nalishlar",
    stat_proj: "Katta Loyihalar",
    sec_intro: "Tanishuv",
    about_title: "Men haqimda ma'lumot",
    about_desc:
      "Salom! Men Qalandarova Madina — IT sohasida Frontend Development va Kiberxavfsizlik yo'nalishlarida o'qiyotgan yosh mutaxassisman.",
    about_desc2:
      'Men 2 yil davomida Yangiariq tumanidagi IT Park binosida "Al-Xorazimiy Vorislari" loyihasida Frontend va Backend dasturlash bo\'yicha amaliy bilimlarni egalladim.',
    about_desc3:
      "Coursera platformasida 2–3 ta sertifikat olganman, ular Frontend va Backend yo'nalishlarini qamrab oladi.",
    about_desc4:
      "Mening maqsadim — chiroyli, xavfsiz va samarali veb-ilovalar yaratish.",
    profile_name: "Qalandarova Madina",
    profile_role: "Frontend Dev + Cybersecurity",
    profile_education: "IT sohasida talaba",
    profile_location: "O'zbekiston",
    profile_role2: "Frontend Developer",
    profile_role3: "Kiberxavfsizlik mutaxassisi",
    profile_certs: "Coursera · 2-3 sertifikat",
    certs_label: "Yutuqlar",
    certs_title: "Sertifikatlarim & Yutuqlarim",
    cert_title1: "Build AI Apps with ChatGPT",
    cert_title2: "Intro to Generative AI",
    cert_issuer: "COURSERA",
    cert_status: "Olindi",
    sec_edu: "Yo'nalish & Bilim",
    edu_title: "Ta'lim va O'rganish Yo'lim",
    edu_desc:
      "Dasturlash va kiberxavfsizlik sohasidagi nazariy hamda amaliy bilimlarim",
    edu_type1: "Texnikum",
    edu_title1: "Raqamli Texnologiyalari Texnikumi",
    edu_place1: "Kompyuter Ilmlari va Axborot Xavfsizligi",
    edu_desc1:
      "Men hozir Urganch shahridagi Raqamli Texnologiyalari Texnikumida Kompyuter bilmlari, dasturlash asoslari va axborot xavfsizligi bo'yicha fundamental bilimlarni egallamoqdaman.",
    edu_type2: "Online & Bootcamps",
    edu_title2: "Frontend Development & Kiberxavfsizlik",
    edu_place2: "Coursera, YouTube & Amaliy Loyihalar",
    edu_desc2:
      "HTML, CSS, JavaScript hamda Veb xavfsizlik (Web Security) boyicha 4–5 ta xalqaro sertifikatlar va amaliy loyihalar ustida ishlaganman.",
    contact_label: "Aloqa",
    contact_title: "Men bilan bog'lanish:",
    contact_desc:
      "Loyiha, hamkorlik yoki savol bo'lsa — bemalol yozing yoki ijtimoiy tarmoqlarim orqali bog'laning:",
    contact_email: "Email",
    contact_telegram: "Telegram",
    contact_instagram: "Instagram",
    contact_github: "GitHub",
    form_name_ph: "Ismingiz",
    form_email_ph: "Emailingiz",
    form_msg_ph: "Xabaringiz...",
    contact_submit: "Xabar yuborish ✉",
    footer_copyright:
      "© 2026 Qalandarova Madina. Barcha huquqlar himoyalangan.",
  },
  ru: {
    nav_about: "Информация",
    nav_skills: "Навыки",
    nav_certs: "Сертификаты",
    nav_education: "Образование",
    nav_contact: "Контакты",
    hero_tag: "Frontend Dev & Cybersecurity",
    hero_hello: "Привет, я",
    hero_name: "Каландарова Мадина",
    hero_desc:
      "Молодой специалист в IT — создаю современные интерфейсы и обеспечиваю цифровую безопасность.",
    btn_contact: "Связаться",
    btn_certs: "Сертификаты",
    hero_scroll: "Прокрутите вниз",
    stat_cert: "Сертификатов",
    stat_dir: "Осн. Направления",
    stat_proj: "Проекта",
    sec_intro: "Знакомство",
    about_title: "Информация обо мне",
    about_desc:
      "Привет! Я Каландарова Мадина — молодой специалист, обучающийся в сфере IT по направлениям Frontend Development и Кибербезопасность.",
    about_desc2:
      "В течение 2 лет в IT Park Янгиарыкского района в проекте «Наследники Аль-Хорезми» я получила практические знания по Frontend и Backend программированию.",
    about_desc3:
      "Получила 2–3 сертификата на платформе Coursera, охватывающих направления Frontend и Backend.",
    about_desc4:
      "Моя цель — создавать красивые, безопасные и эффективные веб-приложения.",
    profile_name: "Каландарова Мадина",
    profile_role: "Frontend Dev + Cybersecurity",
    profile_education: "Студент в сфере IT",
    profile_location: "Узбекистан",
    profile_role2: "Frontend Developer",
    profile_role3: "Специалист по кибербезопасности",
    profile_certs: "Coursera · 2-3 сертификата",
    certs_label: "Достижения",
    certs_title: "Мои Сертификаты и Достижения",
    cert_title1: "Build AI Apps with ChatGPT",
    cert_title2: "Введение в генеративный ИИ",
    cert_issuer: "COURSERA",
    cert_status: "Получен",
    sec_edu: "Направление и Знания",
    edu_title: "Образование и Путь Обучения",
    edu_desc:
      "Мои теоретические и практические знания в области программирования и кибербезопасности",
    edu_type1: "Техникум",
    edu_title1: "Техникум Цифровых Технологий",
    edu_place1: "Компьютерные Науки и Информационная Безопасность",
    edu_desc1:
      "В настоящее время я получаю фундаментальные знания по компьютерным наукам, основам программирования и информационной безопасности в Техникуме Цифровых Технологий города Ургенч.",
    edu_type2: "Онлайн и Буткемпы",
    edu_title2: "Frontend Development и Кибербезопасность",
    edu_place2: "Coursera, YouTube и Практические Проекты",
    edu_desc2:
      "Работала над международными сертификатами (4–5) и практическими проектами по HTML, CSS, JavaScript и веб-безопасности.",
    contact_label: "Контакты",
    contact_title: "Связаться со мной:",
    contact_desc:
      "Если есть проект, предложение или вопрос — пишите или свяжитесь через соцсети:",
    contact_email: "Email",
    contact_telegram: "Telegram",
    contact_instagram: "Instagram",
    contact_github: "GitHub",
    form_name_ph: "Ваше имя",
    form_email_ph: "Ваш Email",
    form_msg_ph: "Ваше сообщение...",
    contact_submit: "Отправить сообщение ✉",
    footer_copyright: "© 2026 Каландарова Мадина. Все права защищены.",
  },
  en: {
    nav_about: "About",
    nav_skills: "Skills",
    nav_certs: "Certificates",
    nav_education: "Education",
    nav_contact: "Contact",
    hero_tag: "Frontend Dev & Cybersecurity",
    hero_hello: "Hello, I am",
    hero_name: "Qalandarova Madina",
    hero_desc:
      "Young IT specialist — creating modern interfaces and ensuring digital security.",
    btn_contact: "Contact Me",
    btn_certs: "Certificates",
    hero_scroll: "Scroll Down",
    stat_cert: "Certificates",
    stat_dir: "Main Directions",
    stat_proj: "Major Projects",
    sec_intro: "Introduction",
    about_title: "About Me",
    about_desc:
      "Hello! I am Qalandarova Madina — a young specialist studying Frontend Development and Cybersecurity in IT.",
    about_desc2:
      "For 2 years at the IT Park in Yangiariq district, under the 'Successors of Al-Khwarizmi' project, I acquired practical knowledge in Frontend and Backend development.",
    about_desc3:
      "I have obtained 2–3 certificates on Coursera, covering Frontend and Backend tracks.",
    about_desc4:
      "My goal is to create beautiful, secure, and efficient web applications.",
    profile_name: "Qalandarova Madina",
    profile_role: "Frontend Dev + Cybersecurity",
    profile_education: "IT Student",
    profile_location: "Uzbekistan",
    profile_role2: "Frontend Developer",
    profile_role3: "Cybersecurity Specialist",
    profile_certs: "Coursera · 2-3 certificates",
    certs_label: "Achievements",
    certs_title: "My Certificates & Achievements",
    cert_title1: "Build AI Apps with ChatGPT",
    cert_title2: "Intro to Generative AI",
    cert_issuer: "COURSERA",
    cert_status: "Completed",
    sec_edu: "Path & Knowledge",
    edu_title: "Education & Learning Path",
    edu_desc:
      "My theoretical and practical knowledge in programming and cybersecurity",
    edu_type1: "Technical College",
    edu_title1: "College of Digital Technologies",
    edu_place1: "Computer Science & Information Security",
    edu_desc1:
      "I am currently gaining fundamental knowledge in computer science, programming basics, and information security at the College of Digital Technologies in Urgench.",
    edu_type2: "Online & Bootcamps",
    edu_title2: "Frontend Development & Cybersecurity",
    edu_place2: "Coursera, YouTube & Practical Projects",
    edu_desc2:
      "Earned 4–5 international certificates and worked on practical projects in HTML, CSS, JavaScript, and Web Security.",
    contact_label: "Contact",
    contact_title: "Get in touch with me:",
    contact_desc:
      "Have a project, collaboration idea, or question? Feel free to write or contact me via social networks:",
    contact_email: "Email",
    contact_telegram: "Telegram",
    contact_instagram: "Instagram",
    contact_github: "GitHub",
    form_name_ph: "Your Name",
    form_email_ph: "Your Email",
    form_msg_ph: "Your Message...",
    contact_submit: "Send Message ✉",
    footer_copyright: "© 2026 Qalandarova Madina. All rights reserved.",
  },
};

// 2. TILNI O'ZGARTIRISH LOGIKASI
const langMenu = document.getElementById("langMenu");

function setLanguage(lang) {
  const currentLang = i18n[lang] ? lang : "uz";
  localStorage.setItem("selected_lang", currentLang);

  if (langMenu) {
    langMenu.value = currentLang;
  }
  document.documentElement.lang = currentLang;

  // Text kontentlarni yangilash
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (i18n[currentLang] && i18n[currentLang][key]) {
      el.textContent = i18n[currentLang][key];
    }
  });

  // Placeholderlarni yangilash
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (i18n[currentLang] && i18n[currentLang][key]) {
      el.placeholder = i18n[currentLang][key];
    }
  });
}

if (langMenu) {
  langMenu.addEventListener("change", (e) => {
    setLanguage(e.target.value);
  });
}

// 3. MAVZU (DARK / LIGHT THEME) TOGGLE LOGIKASI
const themeBtn = document.getElementById("themeBtn");
const body = document.body;

function initTheme() {
  const saved = localStorage.getItem("theme");
  const savedTheme = saved === "light" ? "light" : "dark";
  body.setAttribute("data-theme", savedTheme);
  body.className = savedTheme + "-theme";
}

if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    const currentTheme = body.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    body.setAttribute("data-theme", newTheme);
    body.className = newTheme + "-theme";
    localStorage.setItem("theme", newTheme);
  });
}

// 4. MOBIL HAMBURGER MENYU LOGIKASI
const hamburgerBtn = document.getElementById("hamburgerBtn");
const navMenu = document.getElementById("navMenu");

if (hamburgerBtn && navMenu) {
  hamburgerBtn.addEventListener("click", () => {
    const isActive = navMenu.classList.toggle("active");
    hamburgerBtn.setAttribute("aria-expanded", String(isActive));
  });

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
    });
  });
}

// 5. TELEGRAM BOT ORQALI XABAR YUBORISH (CONTACT FORM)
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm) {
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const nameInput = document.getElementById("senderName");
    const emailInput = document.getElementById("senderEmail");
    const msgInput = document.getElementById("msgText");
    const submitBtn = contactForm.querySelector('button[type="submit"]');

    const name = nameInput ? nameInput.value.trim() : "";
    const email = emailInput ? emailInput.value.trim() : "";
    const message = msgInput ? msgInput.value.trim() : "";

    if (!name || !email || !message) {
      if (formMessage) {
        formMessage.className = "form-message error";
        formMessage.textContent = "Iltimos, barcha maydonlarni to'ldiring!";
      }
      return;
    }

    if (formMessage) {
      formMessage.className = "form-message";
      formMessage.textContent = "";
    }

    submitBtn.disabled = true;
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.innerHTML = "Yuborilmoqda... ⏳";

    try {
      const response = await fetch("/api/sendMessage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json();

      if (response.ok && data.ok) {
        if (formMessage) {
          formMessage.className = "form-message success";
          formMessage.textContent = "Xabaringiz muvaffaqiyatli yuborildi! ✅";
        }
        contactForm.reset();
      } else {
        throw new Error(data.error || "Xatolik yuz berdi");
      }
    } catch (err) {
      console.error("Xatolik yuz berdi:", err);
      if (formMessage) {
        formMessage.className = "form-message error";
        formMessage.textContent =
          "Xabar yuborib bo'lmadi. Iltimos, qayta urinib ko'ring yoki telegram orqali bog'laning!";
      }
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;
    }
  });
}

// 6. TIL VA MAVZUNI DARHOL QO'LLASH (FOUC oldini olish uchun)
// Script body oxirida yuklangani uchun DOM tayyor
initTheme();
const savedLang = localStorage.getItem("selected_lang") || "uz";
setLanguage(savedLang);
