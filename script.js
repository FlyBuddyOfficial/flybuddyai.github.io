let chatVisible = false;

function toggleChat() {
  const chat = document.getElementById("chatSection");
  chatVisible = !chatVisible;
  if (chatVisible) {
    chat.classList.remove("hidden");
    chat.style.animation = "fadeIn 0.5s";
  } else {
    chat.style.animation = "fadeOut 0.5s";
    setTimeout(() => chat.classList.add("hidden"), 500);
  }
}

function showPrompt(text) {
  alert("Fly Buddy AI Response:\n" + getAnswer(text));
}

function getAnswer(prompt) {
  const responses = {
    "How do I plan a flight route?": "Start by checking weather and NOTAMs, then select your route with optimal fuel and alternates.",
    "What if I lose radio contact?": "Follow lost comm procedures: fly the route last assigned, squawk 7600, and follow standard altitudes.",
    "How do I calculate fuel?": "Factor in distance, climb, cruise, descent, reserves, and alternates. Fly Buddy helps automate this.",
    "How do I handle a bird strike?": "Maintain control. If impact is severe, declare emergency and land at nearest airport."
  };
  return responses[prompt] || "I'm still learning how to answer that!";
}
