document.getElementById("testFlyBuddyBtn").addEventListener("click", function () {
  const chatContainer = document.getElementById("chat-container");
  if (chatContainer.style.display === "none" || chatContainer.style.display === "") {
    chatContainer.style.display = "block";
    chatContainer.style.opacity = 0;
    setTimeout(() => {
      chatContainer.style.opacity = 1;
    }, 200);
  } else {
    chatContainer.style.opacity = 0;
    setTimeout(() => {
      chatContainer.style.display = "none";
    }, 200);
  }
});

function sendMessage() {
  const userInput = document.getElementById("userInput").value.trim();
  const chatBox = document.getElementById("chatBox");
  if (!userInput) return;

  chatBox.innerHTML += `<p><strong>You:</strong> ${userInput}</p>`;
  document.getElementById("userInput").value = "";
  chatBox.scrollTop = chatBox.scrollHeight;

  // Simulate response
  setTimeout(() => {
    const response = generateResponse(userInput);
    chatBox.innerHTML += `<p><strong>Fly Buddy AI:</strong> ${response}</p>`;
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 1000);
}

function handleKeyPress(event) {
  if (event.key === "Enter") {
    sendMessage();
  }
}

document.getElementById("userInput").addEventListener("keypress", handleKeyPress);

document.querySelectorAll(".prompt-button").forEach(button => {
  button.addEventListener("click", () => {
    document.getElementById("userInput").value = button.textContent;
    sendMessage();
  });
});

function generateResponse(input) {
  if (input.toLowerCase().includes("plan a flight")) {
    return "To plan a flight route, input your departure and destination airports, check weather and NOTAMs, and file your flight plan.";
  } else if (input.toLowerCase().includes("radio contact")) {
    return "If you lose radio contact, follow lost communication procedures, squawk 7600, and continue under your last clearance.";
  } else {
    return "Sorry, I didn’t understand that. Try asking about flight planning or emergencies.";
  }
}
