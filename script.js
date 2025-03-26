document.getElementById("tryBtn").addEventListener("click", function () {
  const chatBox = document.getElementById("chat-container");
  if (chatBox.classList.contains("show")) {
    chatBox.classList.remove("show");
  } else {
    chatBox.classList.add("show");
  }
});

function handleKeyPress(event) {
  if (event.key === "Enter") {
    sendMessage();
  }
}

function quickQuestion(question) {
  document.getElementById("userInput").value = question;
  sendMessage();
}

function sendMessage() {
  const input = document.getElementById("userInput");
  const message = input.value.trim();
  const chatBox = document.getElementById("chatBox");

  if (!message) return;

  chatBox.innerHTML += `<p><strong>You:</strong> ${message}</p>`;
  input.value = "";

  let response = "Let me find that out for you...";

  if (message.includes("flight route")) {
    response = "To plan a flight route, start with your departure and arrival airports, then check weather, NOTAMs, and file the route using your airline system or app.";
  } else if (message.includes("radio contact")) {
    response = "If you lose radio contact, follow the standard AVIATE-NAVIGATE-COMMUNICATE procedure and use emergency frequencies.";
  } else if (message.includes("fuel")) {
    response = "To calculate fuel, consider trip fuel, reserve, alternate, holding, and taxi fuel. Always round up and plan for contingencies.";
  } else if (message.includes("bird strike")) {
    response = "In case of a bird strike, maintain control, assess damage, communicate with ATC, and prepare for return or emergency landing if necessary.";
  }

  setTimeout(() => {
    chatBox.innerHTML += `<p><strong>Fly Buddy AI:</strong> ${response}</p>`;
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 500);
}
