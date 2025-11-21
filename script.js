// ======== CONFIGURACIÓN ========
const phrases = {
  es: [
    "Estudiante de Ingeniería Informática 💻",
    "Desarrollador Web Full Stack 🌐",
    "Apasionado por la Tecnología 🚀",
    "Creando el Futuro Digital ✨"
  ],
  en: [
    "Computer Engineering Student 💻",
    "Full Stack Web Developer 🌐",
    "Passionate about Technology 🚀",
    "Creating the Digital Future ✨"
  ]
};

const translations = {
  es: {
    aboutTitle: "Sobre Mí",
    aboutSubtitle: "Estudiante de Ingeniería Informática 🎓",
    aboutText1: "Actualmente curso el 6to ciclo de <strong>Ingeniería Informática</strong> en la <strong>Universidad Peruana Cayetano Heredia (UPCH)</strong>. Mi pasión es crear soluciones tecnológicas innovadoras que tengan un impacto real.",
    aboutText2: "Me especializo en desarrollo de software, con experiencia en múltiples lenguajes de programación y frameworks modernos. Estoy constantemente aprendiendo nuevas tecnologías y buscando oportunidades para aplicar mis conocimientos en proyectos desafiantes.",
    aboutText3: "Mi objetivo es convertirme en un desarrollador Full Stack competente y contribuir al mundo tech con proyectos que marquen la diferencia.",
    statCycle: "Ciclo",
    statProjects: "Proyectos",
    statLanguages: "Lenguajes",
    skillsTitle: "Habilidades Técnicas",
    projectsTitle: "Proyectos Destacados",
    educationTitle: "Educación y Certificaciones",
    contactTitle: "Contáctame",
    contactInfo: "Información de Contacto",
    contactEmail: "Email",
    contactPhone: "Teléfono",
    contactLocation: "Ubicación",
    contactSocial: "Redes Sociales",
    contactFormName: "Nombre",
    contactFormEmail: "Email",
    contactFormMessage: "Mensaje",
    contactFormButton: "Enviar Mensaje",
    contactFormSuccess: "✅ ¡Mensaje enviado con éxito!",
    footerText: "Ingeniero Informático | UPCH",
    footerMade: "Hecho con ❤️ y mucho código",
    btnTalk: "Hablemos",
    btnProjects: "Ver Proyectos"
  },
  en: {
    aboutTitle: "About Me",
    aboutSubtitle: "Computer Engineering Student 🎓",
    aboutText1: "Currently in the 6th semester of <strong>Computer Engineering</strong> at <strong>Universidad Peruana Cayetano Heredia (UPCH)</strong>. My passion is creating innovative technological solutions that have a real impact.",
    aboutText2: "I specialize in software development, with experience in multiple programming languages and modern frameworks. I am constantly learning new technologies and seeking opportunities to apply my knowledge in challenging projects.",
    aboutText3: "My goal is to become a competent Full Stack developer and contribute to the tech world with projects that make a difference.",
    statCycle: "Semester",
    statProjects: "Projects",
    statLanguages: "Languages",
    skillsTitle: "Technical Skills",
    projectsTitle: "Featured Projects",
    educationTitle: "Education and Certifications",
    contactTitle: "Contact Me",
    contactInfo: "Contact Information",
    contactEmail: "Email",
    contactPhone: "Phone",
    contactLocation: "Location",
    contactSocial: "Social Media",
    contactFormName: "Name",
    contactFormEmail: "Email",
    contactFormMessage: "Message",
    contactFormButton: "Send Message",
    contactFormSuccess: "✅ Message sent successfully!",
    footerText: "Computer Engineer | UPCH",
    footerMade: "Made with ❤️ and lots of code",
    btnTalk: "Let's Talk",
    btnProjects: "View Projects"
  }
};

let currentLang = 'es';

// ======== TYPING EFFECT ========
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 100;
const deletingSpeed = 50;
const pauseTime = 2000;

function typeEffect() {
  const typingText = document.getElementById('typing-text');
  const currentPhrase = phrases[currentLang][phraseIndex];

  if (!isDeleting) {
    typingText.textContent = currentPhrase.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentPhrase.length) {
      isDeleting = true;
      setTimeout(typeEffect, pauseTime);
      return;
    }
  } else {
    typingText.textContent = currentPhrase.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases[currentLang].length;
    }
  }

  setTimeout(typeEffect, isDeleting ? deletingSpeed : typingSpeed);
}

// ======== PARTICLES ========
function createParticles() {
  const container = document.getElementById('particles');
  for (let i = 0; i < 50; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 20 + 's';
    particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
    container.appendChild(particle);
  }
}

// ======== NAVBAR SCROLL EFFECT ========
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ======== HAMBURGER MENU ========
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// Cerrar menú al hacer click en un link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
  });
});

// Cerrar menú al hacer click fuera
document.addEventListener('click', (e) => {
  if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
  }
});

// ======== THEME TOGGLE ========
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Cargar tema guardado
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  body.classList.add('dark-mode');
  themeToggle.textContent = '☀️';
}

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  const isDark = body.classList.contains('dark-mode');
  themeToggle.textContent = isDark ? '☀️' : '🌙';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// ======== SCROLL ANIMATIONS ========
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      
      // Animar barras de progreso
      if (entry.target.classList.contains('skill-category')) {
        const progressBars = entry.target.querySelectorAll('.skill-progress');
        progressBars.forEach(bar => {
          const progress = bar.getAttribute('data-progress');
          setTimeout(() => {
            bar.style.width = progress + '%';
          }, 200);
        });
      }
    }
  });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// ======== SCROLL TO TOP ========
const scrollTopBtn = document.getElementById('scroll-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollTopBtn.classList.add('visible');
  } else {
    scrollTopBtn.classList.remove('visible');
  }
});

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ======== FORM HANDLING ========
const contactForm = document.getElementById('contact-form');
const formSuccess = document.getElementById('form-success');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  formSuccess.style.display = 'block';
  contactForm.reset();
  
  setTimeout(() => {
    formSuccess.style.display = 'none';
  }, 5000);
});

// ======== SMOOTH SCROLL FOR LINKS ========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const offsetTop = target.offsetTop - 80;
      window.scrollTo({ 
        top: offsetTop, 
        behavior: 'smooth' 
      });
    }
  });
});

// ======== PARALLAX BACKGROUNDS ========
function updateParallaxBackgrounds() {
  try {
    const sections = document.querySelectorAll('section[data-bg]');
    const scrollPos = window.scrollY + window.innerHeight / 2;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;
      const bgId = section.getAttribute('data-bg');
      const bgElement = document.getElementById(bgId);

      if (bgElement) {
        if (scrollPos >= sectionTop && scrollPos <= sectionBottom) {
          // Desactivar todos los fondos
          document.querySelectorAll('.section-bg').forEach(bg => {
            bg.classList.remove('active');
          });
          // Activar el fondo actual
          bgElement.classList.add('active');
        }
      }
    });
  } catch (error) {
    console.log('Parallax backgrounds disabled');
  }
}

// ======== LANGUAGE SWITCHER ========
const langEs = document.getElementById('lang-es');
const langEn = document.getElementById('lang-en');

function switchLanguage(lang) {
  currentLang = lang;
  
  // Actualizar botones activos
  if (lang === 'es') {
    langEs.classList.add('active');
    langEn.classList.remove('active');
  } else {
    langEn.classList.add('active');
    langEs.classList.remove('active');
  }

  // Actualizar navegación
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.textContent = link.getAttribute(`data-${lang}`);
  });

  // Actualizar contenido
  const t = translations[lang];
  
  // Sección Sobre Mí
  document.querySelector('#sobre-mi .section-title').textContent = t.aboutTitle;
  document.querySelector('.about-text h3').textContent = t.aboutSubtitle;
  const aboutPs = document.querySelectorAll('.about-text p');
  aboutPs[0].innerHTML = t.aboutText1;
  aboutPs[1].innerHTML = t.aboutText2;
  aboutPs[2].innerHTML = t.aboutText3;
  
  // Stats
  document.querySelectorAll('.stat-label')[0].textContent = t.statCycle;
  document.querySelectorAll('.stat-label')[1].textContent = t.statProjects;
  document.querySelectorAll('.stat-label')[2].textContent = t.statLanguages;
  
  // Títulos de secciones
  document.querySelector('#habilidades .section-title').textContent = t.skillsTitle;
  document.querySelector('#proyectos .section-title').textContent = t.projectsTitle;
  document.querySelector('#educacion .section-title').textContent = t.educationTitle;
  document.querySelector('#contacto .section-title').textContent = t.contactTitle;
  
  // Contacto
  document.querySelectorAll('.contact-info h3')[0].textContent = t.contactInfo;
  document.querySelectorAll('.contact-item strong')[0].textContent = t.contactEmail;
  document.querySelectorAll('.contact-item strong')[1].textContent = t.contactPhone;
  document.querySelectorAll('.contact-item strong')[2].textContent = t.contactLocation;
  document.querySelectorAll('.contact-info h3')[1].textContent = t.contactSocial;
  
  // Formulario
  document.querySelector('label[for="name"]').textContent = t.contactFormName;
  document.querySelector('label[for="email"]').textContent = t.contactFormEmail;
  document.querySelector('label[for="message"]').textContent = t.contactFormMessage;
  document.querySelector('#contact-form button').textContent = t.contactFormButton;
  document.querySelector('#form-success').textContent = t.contactFormSuccess;
  
  // Hero buttons
  document.querySelector('.btn-primary').textContent = t.btnTalk;
  document.querySelector('.btn-outline').textContent = t.btnProjects;
  
  // Footer
  const footerFirstP = document.querySelector('footer p');
  footerFirstP.innerHTML = `<strong>© 2025 Jesus Morales</strong> - ${t.footerText}`;
  document.querySelectorAll('footer p')[1].textContent = t.footerMade;

  // Reiniciar efecto de typing
  phraseIndex = 0;
  charIndex = 0;
  isDeleting = false;
}

langEs.addEventListener('click', () => switchLanguage('es'));
langEn.addEventListener('click', () => switchLanguage('en'));

// ======== INITIALIZE ========
window.addEventListener('DOMContentLoaded', () => {
  typeEffect();
  createParticles();
  
  // Intentar cargar fondos parallax de forma segura
  try {
    updateParallaxBackgrounds();
    window.addEventListener('scroll', updateParallaxBackgrounds);
  } catch (error) {
    console.log('Parallax initialization failed, continuing without it');
  }
});