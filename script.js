document.addEventListener('DOMContentLoaded', () => {

  // ============================================
  //   EXPERIENCE TABS — DIRECT STYLE APPROACH
  // ============================================
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabPanels  = document.querySelectorAll('.tab-panel');

  function hideAllPanels() {
    tabPanels.forEach(panel => {
      panel.style.display = 'none';
      panel.style.opacity = '0';
    });
  }

  function deactivateAllButtons() {
  tabButtons.forEach(btn => {
    btn.style.background = 'transparent';
    btn.style.borderLeftColor = 'var(--navy-light)';
    btn.style.borderLeftWidth = '2px';
    btn.style.borderLeftStyle = 'solid';
    btn.style.color = 'var(--text-secondary)';
  });
}

function activateButton(btn) {
  btn.style.background = 'rgba(100,255,218,0.05)';
  btn.style.borderLeftColor = 'var(--green)';
  btn.style.borderLeftWidth = '2px';
  btn.style.borderLeftStyle = 'solid';
  btn.style.color = 'var(--green)';
}


  function showPanel(id) {
    const panel = document.getElementById(id);
    if (panel) {
      panel.style.display = 'block';
      panel.style.opacity = '1';
    }
  }

  hideAllPanels();

  if (tabPanels.length > 0) {
    tabPanels[0].style.display = 'block';
    tabPanels[0].style.opacity = '1';
  }

  if (tabButtons.length > 0) {
    activateButton(tabButtons[0]);
  }

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetTab = button.getAttribute('data-tab');
      hideAllPanels();
      deactivateAllButtons();
      showPanel(targetTab);
      activateButton(button);
    });
  });

// ============================================
//   TYPING ANIMATION
// ============================================
const taglineEl = document.querySelector('.typed-tagline');
const cursor = document.querySelector('.cursor');
const text = 'I build useful, thoughtful Python projects.';
let index = 0;

function type() {
  if (index < text.length) {
    taglineEl.textContent += text.charAt(index);
    index++;
    setTimeout(type, 60);
  }
}

type();


}); // end DOMContentLoaded
