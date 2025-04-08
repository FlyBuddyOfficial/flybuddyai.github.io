// Reveal on scroll
const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.2
});

sections.forEach(section => {
  observer.observe(section);
});

// Chat toggle
function toggleChat() {
  const chat = document.getElementById('chat-container');
  chat.classList.toggle('hidden');
}

// Chat response
function respond(message) {
  const response = document.getElementById('ai-response');
  response.textContent = `Fly Buddy AI Response: ${message}`;
  response.classList.remove('hidden');
}

// Waitlist form handler
const form = document.getElementById('waitlist-form');
form.addEventListener('submit', e => {
  e.preventDefault();
  document.getElementById('thank-you').classList.remove('hidden');
});
