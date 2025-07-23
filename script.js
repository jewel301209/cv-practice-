function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');

  // Save user preference
  const isDark = document.body.classList.contains('dark-mode');
  localStorage.setItem('darkMode', isDark);
}

// Apply saved theme on page load
window.onload = () => {
  const savedMode = localStorage.getItem('darkMode');
  if (savedMode === 'true') {
    document.body.classList.add('dark-mode');
  }
};