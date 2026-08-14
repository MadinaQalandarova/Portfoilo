/* =========================================================
   MADINA QALANDAROVA PORTFOLIO — COMPLETE SCRIPT.JS
   ========================================================= */

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
    stat_cert: "Sertifikatlar",
    stat_dir: "Asosiy Yo'nalishlar",
    stat_proj: "Katta Loyihalar",
    sec_intro: "Tanishuv",
    about_title: "Men haqimda ma'lumot",
    profile_name: "Qalandarova Madina",
    profile_role: "Frontend Dev + Cybersecurity",
    about_desc:
      "IT sohasida Frontend Development va Kiberxavfsizlik yo'nalishlarida o'qiyotgan yosh mutaxassisman.",
    about_desc2:
      "2 yil davomida IT Park binosida 'Al-Xorazimiy Vorislari' loyihasida amaliy bilimlarni egalladim.",
    certs_label: "Yutuqlar",
    certs_title: "Sertifikatlarim & Yutuqlarim",
    sec_edu: "Yo'nalish & Bilim",
    edu_title: "Ta'lim va O'rganish Yo'lim",
    edu_type1: "Texnikum",
    edu_title1: "Raqamli Texnologiyalari Texnikumi",
    edu_place1: "Kompyuter Ilmlari va Axborot Xavfsizligi",
    edu_desc1:
      "Urganch shahridagi Raqamli Texnologiyalari Texnikumida fundamental bilimlarni egallamoqdaman.",
    contact_label: "Aloqa",
    contact_title: "Men bilan bog'lanish:",
    contact_desc: "Loyiha, hamkorlik yoki savol bo'lsa — bemalol yozing:",
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
    stat_cert: "Сертификатов",
    stat_dir: "Осн. Направления",
    stat_proj: "Проектов",
    sec_intro: "Знакомство",
    about_title: "Информация обо мне",
    profile_name: "Каландарова Мадина",
    profile_role: "Frontend Dev + Cybersecurity",
    about_desc: "Специалист по Frontend Development и Кибербезопасности.",
    about_desc2: "Опыт работы в проекте IT Park 'Наследники Аль-Хорезми'.",
    certs_label: "Достижения",
    certs_title: "Сертификаты и Достижения",
    sec_edu: "Образование",
    edu_title: "Образовательный Путь",
    edu_type1: "Техникум",
    edu_title1: "Техникум Цифровых Технологий",
    edu_place1: "Компьютерные Науки",
    edu_desc1: "Обучаюсь в Техникуме Цифровых Технологий в Ургенче.",
    contact_label: "Контакты",
    contact_title: "Свяжитесь со мной:",
    contact_desc: "Если у вас есть предложения — пишите:",
    form_name_ph: "Ваше имя",
    form_email_ph: "Ваш Email",
    form_msg_ph: "Ваше сообщение...",
    contact_submit: "Отправить ✉",
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
    stat_cert: "Certificates",
    stat_dir: "Main Directions",
    stat_proj: "Projects",
    sec_intro: "Intro",
    about_title: "About Me",
    profile_name: "Madina Qalandarova",
    profile_role: "Frontend Dev + Cybersecurity",
    about_desc: "IT Specialist in Frontend Development and Cybersecurity.",
    about_desc2: "2 years experience at IT Park.",
    certs_label: "Achievements",
    certs_title: "Certificates & Achievements",
    sec_edu: "Education",
    edu_title: "My Education Path",
    edu_type1: "College",
    edu_title1: "College of Digital Technologies",
    edu_place1: "Computer Science",
    edu_desc1: "Studying Computer Science and Security at Urgench CDT.",
    contact_label: "Contact",
    contact_title: "Get in touch:",
    contact_desc: "Feel free to write for projects or queries:",
    form_name_ph: "Your Name",
    form_email_ph: "Your Email",
    form_msg_ph: "Your Message...",
    contact_submit: "Send Message ✉",
    footer_copyright: "© 2026 Madina Qalandarova. All rights reserved.",
  },
};

document.addEventListener("DOMContentLoaded", () => {
  // Hamburger menu toggle
  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const navMenu = document.getElementById("navMenu");

  if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });

    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => navMenu.classList.remove("active"));
    });
  }

  // Theme toggle
  const themeBtn = document.getElementById("themeBtn");
  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      const activeTheme = document.body.getAttribute("data-theme");
      const nextTheme = activeTheme === "dark" ? "light" : "dark";
      document.body.setAttribute("data-theme", nextTheme);
    });
  }

  // i18n Language change
  const langMenu = document.getElementById("langMenu");
  if (langMenu) {
    langMenu.addEventListener("change", (e) => {
      const lang = e.target.value;
      if (!i18n[lang]) return;

      document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.getAttribute("data-i18n");
        if (i18n[lang][key]) el.textContent = i18n[lang][key];
      });

      document.querySelectorAll("[data-i18n-placeholder]").forEach((input) => {
        const key = input.getAttribute("data-i18n-placeholder");
        if (i18n[lang][key]) input.placeholder = i18n[lang][key];
      });
    });
  }

  // Contact form submission to Telegram
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const name = document.getElementById("senderName").value.trim();
      const email = document.getElementById("senderEmail").value.trim();
      const message = document.getElementById("msgText").value.trim();
      const formMsg = document.getElementById("formMessage");

      if (!name || !email || !message) return;

      const botToken = "7820794537:AAHOfM_5aJytJ9a9lH10-UjXq3bN82b7_98";
      const chatId = "5806657962";
      const text = `📬 *New Portfolio Message!*\n\n👤 *Name:* ${name}\n📧 *Email:* ${email}\n💬 *Message:* ${message}`;

      try {
        const res = await fetch(
          `https://api.telegram.org/bot${botToken}/sendMessage`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              chat_id: chatId,
              text: text,
              parse_mode: "Markdown",
            }),
          },
        );

        if (res.ok) {
          formMsg.className = "form-message success";
          formMsg.textContent = "Xabaringiz muvaffaqiyatli yuborildi! ✅";
          contactForm.reset();
        } else {
          throw new Error("Telegram error");
        }
      } catch (err) {
        formMsg.className = "form-message error";
        formMsg.textContent = "Xabar yuborilmadi. Qayta urinib ko'ring.";
      }
    });
  }
});
