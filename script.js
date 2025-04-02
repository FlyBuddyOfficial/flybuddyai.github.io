document.getElementById("toggleChat").addEventListener("click", function () {
  const chat = document.getElementById("chatContainer");
  if (chat.style.display === "flex") {
    chat.style.display = "none";
  } else {
    chat.style.display = "flex";
  }
});

const prompts = document.querySelectorAll(".prompt");
const chatBox = document.getElementById("chatBox");

prompts.forEach((btn) => {
  btn.addEventListener("click", () => {
    const response = btn.getAttribute("data-response");
    const bubble = document.createElement("div");
    bubble.textContent = "Fly Buddy AI: " + response;
    bubble.style.marginTop = "10px";
    bubble.style.textAlign = "left";
    chatBox.appendChild(bubble);
  });
});
