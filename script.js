const chatbox = document.getElementById("chatbox");
const toggleChatBtn = document.getElementById("toggleChatBtn");
const aiResponse = document.getElementById("aiResponse");

toggleChatBtn.addEventListener("click", () => {
  chatbox.classList.toggle("visible");
});

function sendPrompt(prompt) {
  const responses = {
    "How do I plan a flight route?": "Start by checking weather and NOTAMs, then select your route with optimal fuel and alternates.",
    "What if I lose radio contact?": "Follow lost communication procedures: AVEF for route, MEA for altitude. Squawk 7600 and proceed to destination.",
    "How do I calculate fuel?": "Calculate taxi, trip, alternate, reserve, and contingency fuel. Use aircraft-specific fuel burn rates.",
    "How do I handle a bird strike?": "Maintain control, assess damage, consider return or divert. Follow QRH and report to ATC immediately."
  };

  aiResponse.innerHTML = `<strong>Fly Buddy AI:</strong> ${responses[prompt] || "I'm here to help! Please try asking a different question."}`;
}
