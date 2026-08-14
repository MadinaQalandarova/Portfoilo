/* =========================================================
   MADINA QALANDAROVA PORTFOLIO — COMPLETE SCRIPT.JS
   ========================================================= */

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
    btn_contact: "Bog'lanish ✉",
    btn_certs: "Sertifikatlar 📜",
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
    btn_contact: "Связаться ✉",
    btn_certs: "Сертификаты 📜",
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
    edu_type2: "Online & Bootcamps",
    edu_title2: "Frontend Development & Кибербезопасность",
    edu_place2: "Coursera, YouTube & Практические Проекты",
    edu_desc2:
      "Работал над 4–5 международными сертификатами и практической работой по HTML, CSS, JavaScript и веб-безопасности.",
    contact_label: "Контакты",
    contact_title: "Свяжитесь со мной:",
    contact_desc:
      "Если у вас есть проект, сотрудничество или вопрос — пишите или связывайтесь со мной через социальные сети:",
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
    hero_hello: "Hello, I'm",
    hero_name: "Madina Qalandarova",
    hero_desc:
      "Young IT specialist — creating modern interfaces and ensuring digital security.",
    btn_contact: "Contact Me ✉",
    btn_certs: "Certificates 📜",
    hero_scroll: "Scroll Down",
    stat_cert: "Certificates",
    stat_dir: "Main Directions",
    stat_proj: "Major Projects",
    sec_intro: "Introduction",
    about_title: "About Me",
    about_desc:
      "Hello! I am Madina Qalandarova — a young specialist studying Frontend Development and Cybersecurity in IT.",
    about_desc2:
      "For 2 years at the IT Park in Yangiarik district, I gained practical knowledge in Frontend and Backend programming through 'Heirs of Al-Khwarizmi' project.",
    about_desc3:
      "I hold 2–3 certificates from Coursera covering Frontend and Backend technologies.",
    about_desc4:
      "My goal is to create beautiful, secure, and efficient web applications.",
    profile_name: "Madina Qalandarova",
    profile_role: "Frontend Dev + Cybersecurity",
    profile_education: "IT Student",
    profile_location: "Uzbekistan",
    profile_role2: "Frontend Developer",
    profile_role3: "Cybersecurity Specialist",
    profile_certs: "Coursera · 2-3 Certificates",
    certs_label: "Achievements",
    certs_title: "Certificates & Achievements",
    cert_title1: "Build AI Apps with ChatGPT",
    cert_issuer: "COURSERA",
    cert_status: "Earned",
    sec_edu: "Direction & Knowledge",
    edu_title: "My Education Path",
    edu_desc:
      "My theoretical and practical knowledge in programming and cybersecurity",
    edu_type1: "Technicum",
    edu_title1: "College of Digital Technologies",
    edu_place1: "Computer Science & Information Security",
    edu_desc1:
      "Currently acquiring fundamental knowledge in Computer Science, Programming, and Information Security at the College of Digital Technologies in Urgench.",
    edu_type2: "Online & Bootcamps",
    edu_title2: "Frontend Development & Cybersecurity",
    edu_place2: "Coursera, YouTube & Hands-on Projects",
    edu_desc2:
      "Completed 4–5 international certificates and practical projects in HTML, CSS, JavaScript, and Web Security.",
    contact_label: "Contact",
    contact_title: "Get in touch:",
    contact_desc:
      "For projects, collaborations or questions — feel free to write or reach out via social media:",
    contact_email: "Email",
    contact_telegram: "Telegram",
    contact_instagram: "Instagram",
    contact_github: "GitHub",
    form_name_ph: "Your Name",
    form_email_ph: "Your Email",
    form_msg_ph: "Your Message...",
    contact_submit: "Send Message ✉",
    footer_copyright: "© 2026 Madina Qalandarova. All rights reserved.",
  },
};

document.addEventListener("DOMContentLoaded", () => {
  // 1. HAMBURGER MENU
  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const navMenu = document.getElementById("navMenu");
  const navLinks = document.querySelectorAll(".nav-link");

  if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener("click", () => {
      hamburgerBtn.classList.toggle("active");
      navMenu.classList.toggle("active");
      document.body.style.overflow = navMenu.classList.contains("active")
        ? "hidden"
        : "auto";
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        hamburgerBtn.classList.remove("active");
        navMenu.classList.remove("active");
        document.body.style.overflow = "auto";
      });
    });
  }

  // 2. THEME TOGGLE
  const themeBtn = document.getElementById("themeBtn");
  const currentTheme = localStorage.getItem("theme") || "dark";

  document.body.setAttribute("data-theme", currentTheme);

  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      const activeTheme = document.body.getAttribute("data-theme");
      const newTheme = activeTheme === "dark" ? "light" : "dark";

      document.body.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);
    });
  }

  // 3. TIL O'ZGARTIRISH
  const langMenu = document.getElementById("langMenu");
  if (langMenu) {
    langMenu.addEventListener("change", (e) => {
      const selectedLang = e.target.value;
      changeLanguage(selectedLang);
    });
  }

  // 4. TELEGRAM BOT YUBORISH
  const contactForm = document.getElementById("contactForm");
  const formMessage = document.getElementById("formMessage");
  const submitBtn = document.getElementById("submitBtn");

  const TELEGRAM_BOT_TOKEN = "7820794537:AAHOfM_5aJytJ9a9lH10-UjXq3bN82b7_98";
  const CHAT_ID = "5806657962";

  if (contactForm) {
    contactForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const name = document.getElementById("senderName").value.trim();
      const email = document.getElementById("senderEmail").value.trim();
      const message = document.getElementById("msgText").value.trim();

      if (!name || !email || !message) return;

      const originalBtnText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.textContent = "Yuborilmoqda...";

      const text = `📬 *Yangi Portfolio Xabari!*\n\n👤 *Ism:* ${name}\n📧 *Email:* ${email}\n💬 *Xabar:* ${message}`;

      try {
        const response = await fetch(
          `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              chat_id: CHAT_ID,
              text: text,
              parse_mode: "Markdown",
            }),
          },
        );

        const data = await response.json();

        if (response.ok && data.ok) {
          if (formMessage) {
            formMessage.className = "form-message success";
            formMessage.textContent = "Xabaringiz muvaffaqiyatli yuborildi! ✅";
          }
          contactForm.reset();
        } else {
          throw new Error(data.description || "Telegram API xatosi");
        }
      } catch (err) {
        console.error("Xatolik yuz berdi:", err);
        if (formMessage) {
          formMessage.className = "form-message error";
          formMessage.textContent =
            "Xabar yuborib bo'lmadi. Telegramda botga /start bosilganini tekshiring!";
        }
      } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;
      }
    });
  }
});

function changeLanguage(lang) {
  if (!i18n[lang]) return;

  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (i18n[lang][key]) {
      el.textContent = i18n[lang][key];
    }
  });

  const inputs = document.querySelectorAll("[data-i18n-placeholder]");
  inputs.forEach((input) => {
    const key = input.getAttribute("data-i18n-placeholder");
    if (i18n[lang][key]) {
      input.placeholder = i18n[lang][key];
    }
  });
}
