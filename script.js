// script.js

// Fade in the chatbox when Try FlyBuddy is clicked
document.addEventListener("DOMContentLoaded", function () {
  const tryButton = document.getElementById("try-flybuddy-btn");
  const chatBox = document.getElementById("chat-box");
  const prompts = [
    "How do I handle an engine failure at 10,000ft?",
    "What's the best route from JFK to LAX today?",
    "What are the NOTAMs for Heathrow?"
  ];

  let usedPrompts = 0;

  if (tryButton && chatBox) {
    tryButton.addEventListener("click", () => {
      chatBox.style.display = "block";
      chatBox.style.opacity = 0;
      setTimeout(() => {
        chatBox.style.opacity = 1;
      }, 100);
      showPrompt();
    });
  }

  function showPrompt() {
    if (usedPrompts < prompts.length) {
      const prompt = document.createElement("div");
      prompt.className = "prompt-message";
      prompt.textContent = prompts[usedPrompts];
      document.getElementById("chat-content").appendChild(prompt);
      usedPrompts++;
    }
  }

  // Simulate chat when prompt is clicked
  document.addEventListener("click", function (e) {
    if (e.target.classList.contains("prompt-message")) {
      const response = document.createElement("div");
      response.className = "ai-response";
      response.textContent = "Fly Buddy AI: Here's how I can help you with that...";
      document.getElementById("chat-content").appendChild(response);
      showPrompt();
    }
  });
});
