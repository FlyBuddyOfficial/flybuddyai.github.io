// Reveal sections on scroll
const sections = document.querySelectorAll('.section');
window.addEventListener('scroll', () => {
  sections.forEach((sec) => {
    const top = window.scrollY;
    const offset = sec.offsetTop - 300;
    const height = sec.offsetHeight;
    if (top > offset && top < offset + height) {
      sec.classList.add('visible');
    }
  });
});

// Toggle Chat
const toggleChatBtn = document.getElementById('toggleChat');
const chatBox = document.getElementById('chatContainer');
toggleChatBtn.addEventListener('click', () => {
  chatBox.classList.toggle('hidden');
});

// Simulate AI responses
function sendPrompt(text) {
  const responseBox = document.getElementById('chatResponse');
  let response = '';

  if (text.includes('flight route')) {
    response = 'Start by checking weather and NOTAMs, then select your route with optimal fuel and alternates.';
  } else if (text.includes('radio contact')) {
    response = 'Follow lost comms procedure: switch to 7600 and follow last clearance.';
  } else if (text.includes('calculate fuel')) {
    response = 'Calculate based on distance, weather, alternate requirements, and taxi fuel.';
  } else if (text.includes('bird strike')) {
    response = 'Maintain control, assess damage, and return to the nearest safe airport if needed.';
  } else {
    response = 'Let me look into that...';
  }

  responseBox.innerText = `Fly Buddy AI: ${response}`;
}

// Google Sheet form handler
function handleFormSubmit() {
  const emailInput = document.getElementById("emailInput");
  const email = emailInput.value;

  fetch("https://script.google.com/macros/s/YOUR_DEPLOYED_SCRIPT_URL/exec", {
    method: "POST",
    body: new URLSearchParams({ email: email }),
  })
    .then((res) => res.text())
    .then(() => {
      document.getElementById("confirmationMessage").innerText = "You're on the list, Captain!";
      emailInput.value = "";
    })
    .catch(() => {
      document.getElementById("confirmationMessage").innerText = "There was an error. Please try again.";
    });

  return false;
}
