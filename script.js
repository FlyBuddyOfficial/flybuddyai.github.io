// Fade in sections on scroll
const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

sections.forEach(section => {
  observer.observe(section);
});

// Chat functionality
function toggleChat() {
  const chat = document.getElementById('chatBox');
  chat.classList.toggle('hidden');
  document.getElementById('responseText').textContent = '';
}

function showResponse(message) {
  document.getElementById('responseText').textContent = 'Fly Buddy AI Response: ' + message;
}

// Waitlist form submission
document.getElementById('waitlist-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('email').value;

  fetch('https://script.google.com/macros/s/YOUR_GOOGLE_SCRIPT_ID/exec', {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `email=${encodeURIComponent(email)}`,
  });

  document.getElementById('thankYouMessage').classList.remove('hidden');
  document.getElementById('email').value = '';
});
