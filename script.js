document.addEventListener("DOMContentLoaded", function () {
  const tryBtn = document.getElementById("tryBuddyBtn");
  const chatContainer = document.getElementById("chat-container");
  const chatBox = document.getElementById("chatBox");
  const userInput = document.getElementById("userInput");
  const promptButtons = document.getElementById("promptButtons");

  tryBtn.addEventListener("click", function () {
    chatContainer.style.display = "block";
    setTimeout(() => {
      chatContainer.style.opacity = "1";
    }, 100);
  });

  window.sendMessage = function () {
    const input = userInput.value;
    if (!input.trim()) return;
    chatBox.innerHTML += `<p><strong>You:</strong> ${input}</p>`;
    userInput.value = "";

    setTimeout(() => {
      const reply = getAIResponse(input);
      chatBox.innerHTML += `<p><strong>Fly Buddy AI:</strong> ${reply}</p>`;
      chatBox.scrollTop = chatBox.scrollHeight;
      showNextPrompt();
    }, 800);
  };

  userInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") sendMessage();
  });

  window.quickPrompt = function (text) {
    userInput.value = text;
    sendMessage();
  };

  function getAIResponse(input) {
    // This is a placeholder — in production, use your OpenAI API or backend.
    return input.toLowerCase().includes("route")
      ? "To plan a flight route, start by checking weather and NOTAMs."
      : "Stay calm. Try to reestablish contact and follow lost comms protocol.";
  }

  function showNextPrompt() {
    const nextPrompt = document.createElement("button");
    nextPrompt.className = "prompt-btn";
    nextPrompt.innerText = "How do I file a flight plan?";
    nextPrompt.onclick = () => quickPrompt("How do I file a flight plan?");
    promptButtons.appendChild(nextPrompt);
  }
});
