// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mainNav = document.getElementById('mainNav');

if (mobileMenuBtn && mainNav) {
  mobileMenuBtn.addEventListener('click', () => {
    mainNav.querySelector('ul').classList.toggle('show');
  });
}

// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
  });
}

// Form Validation (Contact Page)
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('userEmail').value.trim();
    const message = document.getElementById('userMessage').value.trim();
    const feedback = document.getElementById('formFeedback');

    // Reset feedback
    feedback.className = '';
    feedback.style.display = 'none';

    // Validate
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showFeedback('Please enter a valid email.', 'error');
      return;
    }

    if (message.length < 10) {
      showFeedback('Message must be at least 10 characters.', 'error');
      return;
    }

    // Success (in real app: send to server)
    showFeedback('✅ Message sent! We’ll reply soon.', 'success');
    this.reset();
  });

  function showFeedback(text, type) {
    const feedback = document.getElementById('formFeedback');
    feedback.textContent = text;
    feedback.className = type;
    feedback.style.display = 'block';
  }
}
