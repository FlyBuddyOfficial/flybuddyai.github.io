document.getElementById("tryFlyBuddyBtn").addEventListener("click", function () {
  const chatContainer = document.getElementById("chat-container");
  if (chatContainer.classList.contains("visible")) {
    chatContainer.classList.remove("visible");
  } else {
    chatContainer.classList.add("visible");
  }
});

function sendMessage() {
  let userInput = document.getElementById("userInput").value;
  let chatBox = document.getElementById("chatBox");

  if (userInput.trim() !== "") {
    chatBox.innerHTML += `<p><strong>You:</strong> ${userInput}</p>`;
    document.getElementById("userInput").value = "";

    setTimeout(() => {
      let response = getResponse(userInput);
      chatBox.innerHTML += `<p><strong>Fly Buddy AI:</strong> ${response}</p>`;
      chatBox.scrollTop = chatBox.scrollHeight;
    }, 1000);
  }
}

function handleKeyPress(event) {
  if (event.key === "Enter") {
    sendMessage();
  }
}

function quickQuestion(question) {
  document.getElementById("userInput").value = question;
  sendMessage();
}

function getResponse(userInput) {
  const responses = {
    "How do I plan a flight route?": "Start with your departure and arrival airports, check weather, NOTAMs, fuel, and alternate airports.",
    "What if I lose radio contact?": "Follow lost comms procedures: Squawk 7600, maintain current route and altitude, and attempt to re-establish contact.",
    "How do I calculate fuel?": "Use aircraft performance charts, include trip fuel, alternate fuel, contingency, holding, and taxi fuel.",
    "How do I handle a bird strike?": "Maintain control, assess damage, return or divert if necessary, and report the strike after landing."
  };
  return responses[userInput] || "Let me check that for you...";
}
