let chatVisible = false;

document.getElementById("tryBtn").addEventListener("click", () => {
  const chat = document.getElementById("chat-container");
  chatVisible = !chatVisible;

  if (chatVisible) {
    chat.classList.remove("hidden");
    chat.style.opacity = "1";
  } else {
    chat.style.opacity = "0";
    setTimeout(() => {
      chat.classList.add("hidden");
    }, 300);
  }
});

function handleKeyPress(event) {
  if (event.key === "Enter") {
    sendMessage();
  }
}

function sendMessage() {
  const userInput = document.getElementById("userInput").value.trim();
  const chatBox = document.getElementById("chatBox");
  if (!userInput) return;

  const userMsg = document.createElement("p");
  userMsg.innerHTML = `<strong>You:</strong> ${userInput}`;
  chatBox.appendChild(userMsg);

  const aiMsg = document.createElement("p");
  aiMsg.innerHTML = `<strong>Fly Buddy AI:</strong> (simulated response)`;
  chatBox.appendChild(aiMsg);

  document.getElementById("userInput").value = "";
  chatBox.scrollTop = chatBox.scrollHeight;
}

function quickQuestion(question) {
  document.getElementById("userInput").value = question;
  sendMessage();
}
