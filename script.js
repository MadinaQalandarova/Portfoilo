/* =========================================================
   MADINA QALANDAROVA PORTFOLIO — COMPLETE SCRIPT.JS
   ========================================================= */

// 1. TIL SOZLAMALARI (i18n Dictionaries)
// --- COMPLETE I18N DICTIONARY ---
const i18n = {
  uz: {
    nav_about: "Haqimda",
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
    about_title: "Men haqimda",
    sec_certs: "Yutuqlar",
    certs_title: "Sertifikatlar va Natijalar",
    sec_edu: "Yo'nalish & Bilim",
    edu_title: "Ta'lim va Rivojlanish",
    contact_label: "Aloqa",
    contact_title: "Men bilan bog'lanish:",
    contact_subtitle:
      "Loyiha, hamkorlik yoki savol bo'lsa — bemalol yozing yoki ijtimoiy tarmoqlarim orqali bog'laning:",
    form_name_ph: "Ismingiz",
    form_email_ph: "Emailingiz",
    form_msg_ph: "Xabaringiz...",
    form_submit: "Xabar yuborish ✉",
  },
  ru: {
    nav_about: "Обо мне",
    nav_skills: "Навыки",
    nav_certs: "Сертификаты",
    nav_education: "Образование",
    nav_contact: "Контакты",
    about_title: "Обо мне",
    sec_certs: "Достижения",
    certs_title: "Сертификаты и Результаты",
    sec_edu: "Образование",
    edu_title: "Образование и Развитие",
    contact_label: "Контакты",
    contact_title: "Связаться со мной:",
    about_desc2:
      "Я молодой специалист в IT — создаю современные интерфейсы и обеспечиваю цифровую безопасность.",
    about_desc:
      "Я молодой специалист в IT — создаю современные интерфейсы и обеспечиваю цифровую безопасность.",
    contact_subtitle:
      "Если есть проект, предложение или вопрос — пишите или свяжитесь через соцсети:",
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
    about_title: "Обо мне",
    sec_certs: "Достижения",
    certs_title: "Сертификаты и Результаты",
    sec_edu: "Образование",
    edu_title: "Образование и Развитие",
    contact_label: "Контакты",
    contact_title: "Связаться со мной:",
    contact_subtitle:
      "Если есть проект, предложение или вопрос — пишите или свяжитесь через соцсети:",
    form_name_ph: "Ваше имя",
    form_email_ph: "Ваш Email",
    form_msg_ph: "Ваше сообщение...",
    form_submit: "Отправить сообщение ✉",
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
    btn_contact: "Contact Me ✉",
    btn_certs: "Certificates 📜",
    hero_scroll: "Scroll Down",
    stat_cert: "Certificates",
    stat_dir: "Main Directions",
    stat_proj: "Major Projects",
    sec_intro: "Introduction",
    about_title: "About Me",
    sec_certs: "Achievements",
    certs_title: "Certificates & Achievements",
    sec_edu: "Education",
    edu_title: "Education & Growth",
    contact_label: "Contact",
    contact_title: "Get in touch with me:",
    contact_subtitle:
      "Have a project, collaboration idea, or question? Feel free to write or contact me via social networks:",
    form_name_ph: "Your Name",
    form_email_ph: "Your Email",
    form_msg_ph: "Your Message...",
    form_submit: "Send Message ✉",
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

  // Text kontentlarni yangilash
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (i18n[currentLang][key]) {
      el.textContent = i18n[currentLang][key];
    }
  });

  // Placeholderlarni yangilash
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (i18n[currentLang][key]) {
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
  const savedTheme = localStorage.getItem("theme") || "dark";
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
    navMenu.classList.toggle("active");
  });

  // Navbardagi link bosilganda mobil menyu yopilishi uchun
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
    e.preventDefault(); // Sahifa yuklanib ketishini oldini oladi

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

    // Tugmani vaqtincha bloklash va kutish matnini ko'rsatish
    submitBtn.disabled = true;
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.innerHTML = "Yuborilmoqda... ⏳";

    // Sizning yangi Bot Token va Chat ID
    const TELEGRAM_BOT_TOKEN = "8461587456:AAFwVMvF9wbENcVnznYa8nKdZmAYmqNaX-M";
    const CHAT_ID = "8562164104";

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

// 6. DOM TO'LIQ YUKLANGANDA ISHGA TUSHMASI KERA
document.addEventListener("DOMContentLoaded", () => {
  // Saqlangan mavzuni o'rnatish
  initTheme();

  // Saqlangan tilni o'rnatish
  const savedLang = localStorage.getItem("selected_lang") || "uz";
  setLanguage(savedLang);
});
