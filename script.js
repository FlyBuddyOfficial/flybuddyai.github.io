// Show Chat with Animation
function scrollToChat() {
    let chatBox = document.getElementById("chat-container");
    chatBox.style.display = "block";
    chatBox.style.opacity = 0;
    chatBox.style.transition = "opacity 0.5s ease-in-out";
    
    setTimeout(() => {
        chatBox.style.opacity = 1;
        chatBox.scrollIntoView({ behavior: "smooth" });
    }, 100);
}

// Handle Sending Messages
function sendMessage() {
    let userInput = document.getElementById("userInput").value;
    let chatBox = document.getElementById("chatBox");

    if (userInput.trim() !== "") {
        chatBox.innerHTML += `<p><strong>You:</strong> ${userInput}</p>`;
        document.getElementById("userInput").value = "";
        
        setTimeout(() => {
            let response = getAIResponse(userInput);
            chatBox.innerHTML += `<p><strong>Fly Buddy AI:</strong> ${response}</p>`;
            chatBox.scrollTop = chatBox.scrollHeight;
        }, 1000);
    }
}

// Handle Enter Key Press
function handleKeyPress(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}

// AI Responses
function getAIResponse(input) {
    const responses = {
        "hello": "Hi there! How can I assist you today?",
        "flight plan": "I can help you generate a flight plan. What is your departure and destination?",
        "weather": "Fetching the latest weather updates... Please wait!",
        "emergency": "Stay calm. What is your emergency situation? I’ll guide you step-by-step."
    };

    input = input.toLowerCase();
    return responses[input] || "I'm still learning! Try asking something else.";
}

// Quick Question Buttons
function quickAsk(question) {
    document.getElementById("userInput").value = question;
    sendMessage();
}
