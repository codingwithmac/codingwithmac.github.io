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
    btn.classList.remove('active');
  });
}

function showPanel(id) {
  const panel = document.getElementById(id);
  if (panel) {
    panel.style.display = 'block';
    panel.style.opacity = '1';
  }
}

// Hide all panels immediately on page load
hideAllPanels();

// Show only the first panel on load
if (tabPanels.length > 0) {
  tabPanels[0].style.display = 'block';
  tabPanels[0].style.opacity = '1';
}

// Set first button as active on load
if (tabButtons.length > 0) {
  tabButtons[0].classList.add('active');
}

// Add click listener to each button
tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    const targetTab = button.getAttribute('data-tab');

    hideAllPanels();
    deactivateAllButtons();
    showPanel(targetTab);
    button.classList.add('active');
  });
});
