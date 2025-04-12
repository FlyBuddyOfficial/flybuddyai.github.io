// Reveal sections on scroll
const sections = document.querySelectorAll('.section');

function revealSections() {
  const trigger = window.innerHeight * 0.85;
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < trigger) {
      section.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', revealSections);
window.addEventListener('load', revealSections);

// Chat toggle
function toggleChat() {
  const chat = document.getElementById('chat-container');
  chat.classList.toggle('hidden');
}

// Simulate AI chat response
function respond(question) {
  const responseBox = document.getElementById('chat-response');
  const responses = {
    "How do I plan a flight route?": "Start by checking weather and NOTAMs, then select your route with optimal fuel and alternates.",
    "What if I lose radio contact?": "Follow lost comms procedures: maintain altitude and route, squawk 7600, and try all backup radios.",
    "How do I calculate fuel?": "Use aircraft burn rates + reserves + alternates. Fly Buddy automates this with voice input and destination.",
    "How do I handle a bird strike?": "Fly Buddy recommends assessing damage, communicating with ATC, and returning to base if needed."
  };
  responseBox.textContent = responses[question] || "Let me help you with that!";
}

// Waitlist form handler
document.getElementById('waitlist-form').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('thank-you-message').textContent = "Thank you for joining the future of aviation!";
});
