// Fade in/out Chat
function toggleChat() {
  const chat = document.getElementById("chat-container");
  if (chat.style.display === "block") {
    chat.style.opacity = "0";
    setTimeout(() => { chat.style.display = "none"; }, 300);
  } else {
    chat.style.display = "block";
    setTimeout(() => { chat.style.opacity = "1"; }, 50);
  }
}

// Send Chat
function sendMessage() {
  const userInput = document.getElementById("userInput").value;
  const chatBox = document.getElementById("chatBox");
  if (userInput.trim() !== "") {
    chatBox.innerHTML += `<p><strong>You:</strong> ${userInput}</p>`;
    document.getElementById("userInput").value = "";
    setTimeout(() => {
      const response = getAIResponse(userInput);
      chatBox.innerHTML += `<p><strong>Fly Buddy AI:</strong> ${response}</p>`;
      chatBox.scrollTop = chatBox.scrollHeight;
    }, 800);
  }
}

// Handle Enter Key
function handleKeyPress(e) {
  if (e.key === "Enter") sendMessage();
}

// Prompt Buttons
function quickQuestion(text) {
  document.getElementById("userInput").value = text;
  sendMessage();
}

// Responses
function getAIResponse(input) {
  const responses = {
    "plan my flight from jfk to lax": "Your best route is via J80 SPI then J110 to LAX. Expect light turbulence mid-route.",
    "mayday! engine failure at 10,000 ft": "Stay calm. Best glide speed. Look for safe landing. Contact ATC immediately.",
    "what’s the metar for katl?": "KATL METAR: 25012KT 10SM FEW050 18/09 A2992. VFR conditions.",
    "explain how a jet engine works": "A jet engine compresses air, mixes it with fuel, ignites it, and expels it to generate thrust."
  };
  input = input.toLowerCase();
  return responses[input] || "I'm still learning! Try another aviation question.";
}

// Waitlist Form
document.getElementById("waitlist-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const email = document.getElementById("emailInput").value;
  fetch("https://script.google.com/macros/s/AKfycbzuGYFhjbbPmy7qPBv27lkFl3Z_VV0_2tBST8Dk5OKKBv5JR-QMIQB1NHmPaFNj-bEw/exec", {
    method: "POST",
    body: new URLSearchParams({ email })
  }).then(res => {
    document.getElementById("successMessage").innerText = "Welcome to the future of aviation!";
    document.getElementById("emailInput").value = "";
  }).catch(err => {
    document.getElementById("successMessage").innerText = "Error. Please try again.";
  });
});
