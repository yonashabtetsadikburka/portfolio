// ========== THEME TOGGLE ==========
const toggle = document.getElementById('theme-toggle');
const html = document.documentElement;

function syncThemeButton(theme) {
  toggle.setAttribute('aria-pressed', theme === 'light' ? 'true' : 'false');
}

const savedTheme = localStorage.getItem('theme')
  || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
html.setAttribute('data-theme', savedTheme);
syncThemeButton(savedTheme);

toggle.addEventListener('click', () => {
  const current = html.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  syncThemeButton(next);
});

// ========== HAMBURGER MENU ==========
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileOverlay = document.querySelector('.mobile-overlay');

function openMenu() {
  hamburger.classList.add('active');
  hamburger.setAttribute('aria-expanded', 'true');
  mobileMenu.classList.add('active');
  mobileOverlay.classList.add('active');
  mobileOverlay.style.display = 'block';
  document.body.style.overflow = 'hidden';
  const firstLink = mobileMenu.querySelector('a');
  if (firstLink) firstLink.focus();
}

function closeMenu(returnFocus) {
  hamburger.classList.remove('active');
  hamburger.setAttribute('aria-expanded', 'false');
  mobileMenu.classList.remove('active');
  mobileOverlay.classList.remove('active');
  document.body.style.overflow = '';
  setTimeout(() => { mobileOverlay.style.display = 'none'; }, 300);
  if (returnFocus) hamburger.focus();
}

hamburger.addEventListener('click', () => {
  hamburger.classList.contains('active') ? closeMenu(true) : openMenu();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && hamburger.classList.contains('active')) {
    closeMenu(true);
  }
});

mobileOverlay.addEventListener('click', () => closeMenu(false));

mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => closeMenu(false));
});

// ========== NAV ACTIVE STATE ON SCROLL ==========
const navLinks = document.querySelectorAll('.nav-link');
const mobileLinks = document.querySelectorAll('.mobile-menu a');
const sections = document.querySelectorAll('section[id]');

function updateActiveLink() {
  let current = '';
  sections.forEach(section => {
    const top = section.offsetTop - 120;
    if (window.scrollY >= top) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });

  mobileLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', updateActiveLink, { passive: true });
updateActiveLink();

// ========== SCROLL REVEAL ==========
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -40px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
  section.classList.add('reveal');
  observer.observe(section);
});
