function toggleChat() {
  const chatBox = document.getElementById("chatBox");
  chatBox.style.display = chatBox.style.display === "none" ? "flex" : "none";
}

function showResponse(message) {
  const responseBox = document.getElementById("response");
  responseBox.textContent = "Fly Buddy AI Response: " + message;
}

function handleWaitlistSubmit(event) {
  event.preventDefault();
  document.getElementById("thankYouMsg").textContent = "Thank you for joining the future of aviation!";
  event.target.reset();
}

// Hide chat box by default on load
window.onload = function () {
  document.getElementById("chatBox").style.display = "none";
};
