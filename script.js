// ============================================
//   ACTIVE NAV LINK ON SCROLL
// ============================================
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-link');

const observerOptions = {
  root: null,
  rootMargin: '-30% 0px -60% 0px',
  threshold: 0
};

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');

      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('active');
        }
      });
    }
  });
}, observerOptions);

sections.forEach(section => sectionObserver.observe(section));


// ============================================
//   MOBILE MENU — OPEN / CLOSE
// ============================================
const hamburger     = document.getElementById('hamburger');
const mobileMenu    = document.getElementById('mobile-menu');
const mobileClose   = document.getElementById('mobile-close');
const mobileLinks   = document.querySelectorAll('.mobile-nav-link');

// Create overlay element dynamically
const overlay = document.createElement('div');
overlay.classList.add('mobile-overlay');
document.body.appendChild(overlay);

function openMenu() {
  mobileMenu.style.display = 'flex';
  mobileMenu.classList.add('open');
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  mobileMenu.classList.remove('open');
  overlay.classList.remove('open');
  document.body.style.overflow = '';

  // Wait for transition to finish before hiding
  setTimeout(() => {
    mobileMenu.style.display = 'none';
  }, 300);
}

hamburger.addEventListener('click', openMenu);
mobileClose.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);

// Close menu when a mobile nav link is clicked
mobileLinks.forEach(link => {
  link.addEventListener('click', closeMenu);
});


// ============================================
//   EXPERIENCE TABS
// ============================================
const tabButtons = document.querySelectorAll('.tab-btn');
const tabPanels  = document.querySelectorAll('.tab-panel');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    const targetTab = button.getAttribute('data-tab');

    // Remove active from all buttons and panels
    tabButtons.forEach(btn => btn.classList.remove('active'));
    tabPanels.forEach(panel => panel.classList.remove('active'));

    // Add active to clicked button and matching panel
    button.classList.add('active');

    const targetPanel = document.getElementById(targetTab);
    if (targetPanel) {
      targetPanel.classList.add('active');
    }
  });
});

// Make sure first tab is active on page load
if (tabButtons.length > 0 && tabPanels.length > 0) {
  tabButtons[0].classList.add('active');
  tabPanels[0].classList.add('active');
}



// ============================================
//   SMOOTH SCROLL FOR ALL ANCHOR LINKS
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const target   = document.querySelector(targetId);

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});


// ============================================
//   FADE IN ANIMATION ON SCROLL
// ============================================
const fadeElements = document.querySelectorAll(
  '.section-heading, .about-text, .about-photo-wrapper, ' +
  '.featured-card, .other-card, .tabs-container, ' +
  '.contact-heading, .contact-body, .contact-btn'
);

const fadeObserverOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      // Stop observing once visible so it stays visible
      fadeObserver.unobserve(entry.target);
    }
  });
}, fadeObserverOptions);

fadeElements.forEach(el => {
  el.classList.add('fade-in');
  fadeObserver.observe(el);
});


// ============================================
//   MOBILE HEADER SHADOW ON SCROLL
// ============================================
const mobileHeader = document.getElementById('mobile-header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    mobileHeader.style.boxShadow = '0 4px 30px rgba(2, 12, 27, 0.7)';
  } else {
    mobileHeader.style.boxShadow = 'none';
  }
});


// ============================================
//   TYPING EFFECT ON SIDEBAR TAGLINE
// ============================================
const tagline     = document.querySelector('.sidebar-tagline');
const fullText    = tagline ? tagline.textContent.trim() : '';
let   charIndex   = 0;

if (tagline && fullText) {
  tagline.textContent = '';
  tagline.style.borderRight = '2px solid var(--teal)';

  function typeCharacter() {
    if (charIndex < fullText.length) {
      tagline.textContent += fullText.charAt(charIndex);
      charIndex++;
      setTimeout(typeCharacter, 60);
    } else {
      // Remove cursor blink after typing is done
      setTimeout(() => {
        tagline.style.borderRight = 'none';
      }, 1000);
    }
  }

  // Small delay before typing starts so page loads first
  setTimeout(typeCharacter, 800);
}
