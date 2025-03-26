// script.js
let chatVisible = false;

function toggleChat() {
  const chat = document.getElementById('chat-container');
  chatVisible = !chatVisible;
  chat.style.display = chatVisible ? 'flex' : 'none';
  chat.style.opacity = chatVisible ? '1' : '0';
}

function quickQuestion(question) {
  const userInput = document.getElementById('userInput');
  userInput.value = question;
  sendMessage();
}

function handleKeyPress(event) {
  if (event.key === 'Enter') sendMessage();
}

function sendMessage() {
  const userInput = document.getElementById('userInput');
  const chatBox = document.getElementById('chatBox');
  const message = userInput.value.trim();

  if (!message) return;

  chatBox.innerHTML += `<p><strong>You:</strong> ${message}</p>`;
  userInput.value = '';

  let response = getResponse(message);
  setTimeout(() => {
    chatBox.innerHTML += `<p><strong>Fly Buddy AI:</strong> ${response}</p>`;
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 600);
}

function getResponse(input) {
  input = input.toLowerCase();

  if (input.includes('flight route')) return 'To plan a flight route, file your flight plan with waypoints, altitudes, and submit it via your country\'s ATC.';
  if (input.includes('radio contact')) return 'In case of lost radio contact, follow your last clearance and try to re-establish communication.';
  if (input.includes('declare an emergency')) return 'You can declare an emergency by saying \"Mayday\" three times followed by your situation.';
  if (input.includes('fuel requirements')) return 'Fuel requirements include taxi fuel, trip fuel, contingency fuel, alternate fuel, and final reserve.';

  return 'I\'m here to help! Please ask another aviation-related question.';
}
