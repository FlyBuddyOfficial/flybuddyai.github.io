let submitted = false;

const toggleBtn = document.getElementById('toggleChat');
const chatbox = document.getElementById('chatbox');
const chatResponse = document.getElementById('chatResponse');

toggleBtn.addEventListener('click', () => {
  chatbox.classList.toggle('hidden');
});

function handlePrompt(prompt) {
  let response = '';
  if (prompt === 'How do I plan a flight route?') {
    response = "Start by checking weather and NOTAMs, then select your route with optimal fuel and alternates.";
  } else if (prompt === 'What if I lose radio contact?') {
    response = "Use transponder code 7600 and follow lost communication procedures.";
  } else if (prompt === 'How do I calculate fuel?') {
    response = "Use burn rate × estimated flight time, plus reserves and alternate fuel.";
  } else if (prompt === 'How do I handle a bird strike?') {
    response = "Maintain control, assess damage, communicate with ATC, and prepare for landing.";
  }
  chatResponse.innerText = "Fly Buddy AI: " + response;
}

// Fade in sections on scroll
const fadeSections = document.querySelectorAll('.fade-section');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1
});

fadeSections.forEach(section => {
  observer.observe(section);
});
