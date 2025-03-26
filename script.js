document.addEventListener("DOMContentLoaded", () => {
  const tryBtn = document.getElementById("testFlyBuddyBtn");
  const chatContainer = document.getElementById("chat-container");
  const chatBox = document.getElementById("chat-box");
  const userInput = document.getElementById("userInput");
  const promptButtons = document.querySelectorAll(".chat-prompts button");

  tryBtn.addEventListener("click", () => {
    chatContainer.style.display = "block";
    setTimeout(() => {
      chatContainer.style.opacity = "1";
    }, 50);
  });

  function sendMessage(message) {
    const userMsg = `<p><strong>You:</strong> ${message}</p>`;
    chatBox.innerHTML += userMsg;

    userInput.value = "";

    setTimeout(() => {
      const response = getAIResponse(message);
      const aiMsg = `<p><strong>Fly Buddy AI:</strong> ${response}</p>`;
      chatBox.innerHTML += aiMsg;

      // Auto scroll
      chatBox.scrollTop = chatBox.scrollHeight;

      // Add new prompt dynamically (simulated)
      addDynamicPrompt("How do I handle an engine failure?");
    }, 1000);
  }

  function getAIResponse(input) {
    if (input.toLowerCase().includes("flight route")) {
      return "Start with the departure and arrival airport, then check waypoints and airspace restrictions.";
    } else if (input.toLowerCase().includes("radio contact")) {
      return "If you lose contact, squawk 7600 and follow lost communication procedures.";
    } else if (input.toLowerCase().includes("engine")) {
      return "Maintain control, pitch for glide, and locate a suitable emergency landing site.";
    } else {
      return "Let me guide you through it step-by-step.";
    }
  }

  promptButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      sendMessage(btn.textContent);
      btn.disabled = true; // Optional: disable after click
    });
  });

  userInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && userInput.value.trim() !== "") {
      sendMessage(userInput.value.trim());
    }
  });

  function addDynamicPrompt(text) {
    const newBtn = document.createElement("button");
    newBtn.textContent = text;
    newBtn.style.opacity = "0";
    newBtn.style.transition = "opacity 0.5s ease-in-out";
    newBtn.addEventListener("click", () => {
      sendMessage(text);
      newBtn.disabled = true;
    });

    document.querySelector(".chat-prompts").appendChild(newBtn);

    setTimeout(() => {
      newBtn.style.opacity = "1";
    }, 300);
  }
});
