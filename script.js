// JavaScript for changing language
function changeLanguage(lang) {
  document.documentElement.lang = lang;
  
  // Change text content based on selected language
  if (lang === 'fa') {
      document.querySelector('.home-link').textContent = 'خانه';
      document.querySelector('.about-link').textContent = 'درباره ما';
      document.querySelector('.services-link').textContent = 'خدمات';
      document.querySelector('.contact-link').textContent = 'تماس';
  } else if (lang === 'ar') {
      document.querySelector('.home-link').textContent = 'الصفحة الرئيسية';
      document.querySelector('.about-link').textContent = 'معلومات عنا';
      document.querySelector('.services-link').textContent = 'الخدمات';
      document.querySelector('.contact-link').textContent = 'اتصل';
  } else {
      document.querySelector('.home-link').textContent = 'Home';
      document.querySelector('.about-link').textContent = 'About Us';
      document.querySelector('.services-link').textContent = 'Services';
      document.querySelector('.contact-link').textContent = 'Contact';
  }
}
