document.getElementById("testFlyBuddyBtn").addEventListener("click", function() {
    let chatContainer = document.getElementById("chat-container");
    chatContainer.style.display = "block";
    setTimeout(() => {
        chatContainer.style.opacity = "1";
    }, 200);
});

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

function handleKeyPress(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}

function quickQuestion(question) {
    document.getElementById("userInput").value = question;
    sendMessage();
}

function getAIResponse(input) {
    const responses = {
        "plan my flight from jfk to lax": "Your best route from JFK to LAX is via J80 SPI then J110 to LAX. Expect turbulence over the Midwest.",
        "what’s the latest metar for katl?": "Fetching latest METAR for KATL... [Insert real-time METAR API here]",
        "mayday! engine failure at 10,000 ft": "Stay calm. Maintain best glide speed and look for a safe landing site. Declare an emergency on 121.5 MHz.",
        "how do i avoid turbulence?": "Avoid flying near storm clouds. Use PIREPs and SIGMETs to detect turbulence-prone areas.",
        "explain how a jet engine works": "A jet engine sucks in air, compresses it, mixes it with fuel, and ignites it to produce thrust."
    };

    input = input.toLowerCase();
    return responses[input] || "I'm still learning! Try asking something else.";
}
