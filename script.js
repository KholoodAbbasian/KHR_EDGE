// تغییر زبان
const translations = {
    fa: {
      about: "درباره ما",
      about-text: "ما در KHR EDGE به ارائه بهترین خدمات منابع انسانی می‌پردازیم.",
      services: "خدمات",
      services-text: "خدمات ما شامل مشاوره، آموزش و توسعه سیستم‌های منابع انسانی است.",
      contact: "تماس با ما",
      name: "نام:",
      email: "ایمیل:",
      message: "پیام:",
      submit: "ارسال"
    },
    ar: {
      about: "من نحن",
      about-text: "نحن في KHR EDGE نقدم أفضل خدمات الموارد البشرية.",
      services: "الخدمات",
      services-text: "تشمل خدماتنا الاستشارات والتدريب وتطوير أنظمة الموارد البشرية.",
      contact: "اتصل بنا",
      name: "الاسم:",
      email: "البريد الإلكتروني:",
      message: "الرسالة:",
      submit: "إرسال"
    },
    en: {
      about: "About Us",
      about-text: "At KHR EDGE, we provide the best HR services.",
      services: "Services",
      services-text: "Our services include consulting, training, and HR systems development.",
      contact: "Contact Us",
      name: "Name:",
      email: "Email:",
      message: "Message:",
      submit: "Submit"
    }
  };
  
  document.getElementById("lang-switch").addEventListener("click", (event) => {
    const lang = event.target.id;
    if (translations[lang]) {
      document.querySelectorAll(".lang").forEach((element) => {
        const key = element.getAttribute("key");
        element.textContent = translations[lang][key];
      });
      document.body.style.direction = lang === "en" ? "ltr" : "rtl";
    }
  });
  