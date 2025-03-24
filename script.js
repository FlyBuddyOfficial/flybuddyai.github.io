// script.js

// Show chatbox on Try Fly Buddy button click
const tryBtn = document.getElementById("tryFlyBuddyBtn");
const chatContainer = document.getElementById("chat-container");
const chatBox = document.getElementById("chatBox");
const userInput = document.getElementById("userInput");
const promptSuggestions = document.getElementById("promptSuggestions");

const prompts = [
  "Plan a flight from JFK to LAX",
  "What are the emergency procedures for engine failure?",
  "Show me the weather for Heathrow Airport",
  "Calculate fuel needed for a 3-hour flight",
  "Suggest an alternate airport near Paris"
];

let usedPrompts = [];

tryBtn.addEventListener("click", () => {
  chatContainer.style.display = "block";
  chatContainer.style.opacity = 0;
  setTimeout(() => (chatContainer.style.opacity = 1), 200);
  showPromptSuggestion();
});

function sendMessage() {
  const input = userInput.value.trim();
  if (!input) return;

  chatBox.innerHTML += `<p><strong>You:</strong> ${input}</p>`;
  userInput.value = "";

  // Simulated AI reply
  setTimeout(() => {
    const response = getResponse(input);
    chatBox.innerHTML += `<p><strong>Fly Buddy AI:</strong> ${response}</p>`;
    chatBox.scrollTop = chatBox.scrollHeight;
    showPromptSuggestion();
  }, 800);
}

function getResponse(input) {
  // Dummy responses
  return "This is a smart Fly Buddy AI response based on your question.";
}

function handleKeyPress(event) {
  if (event.key === "Enter") {
    sendMessage();
  }
}

function quickQuestion(question) {
  userInput.value = question;
  sendMessage();
}

function showPromptSuggestion() {
  // Remove used prompts from available pool
  const remaining = prompts.filter(p => !usedPrompts.includes(p));

  if (remaining.length === 0) return; // No more suggestions

  const prompt = remaining[Math.floor(Math.random() * remaining.length)];
  usedPrompts.push(prompt);

  promptSuggestions.innerHTML = `
    <div class="suggestion" onclick="quickQuestion('${prompt}')">
      ${prompt}
    </div>
  `;
}
