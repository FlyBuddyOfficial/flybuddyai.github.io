// Fly Buddy AI Brain - Pre-programmed Aviation AI
const flyBuddyAI = {
    "hello": "Hi there, Captain! How can I assist you today?",
    "who are you": "I am Fly Buddy AI, your AI-powered copilot. Ready to assist you anytime!",
    "flight plan": "I can help generate a flight plan. Please provide your departure and destination airports.",
    "weather update": "Fetching the latest aviation weather... Please wait!",
    "metar taf": "To get the latest METAR and TAF, enter your airport ICAO code.",
    "turbulence": "Checking turbulence data... Avoid flying through areas marked in red on the forecast map.",
    "engine failure": "Stay calm, Captain. Maintain best glide speed and locate the nearest airfield or safe landing spot.",
    "emergency landing": "Fly Buddy recommends the nearest airport based on your location. Reducing speed and maintaining control is crucial.",
    "radio failure": "If you have a radio failure, follow lost communication procedures. Squawk 7600 and maintain VFR if possible.",
    "fuel calculation": "To calculate fuel needs, please provide aircraft type, route distance, and reserve fuel requirements.",
    "notam": "Fetching latest NOTAMs for your route... Stay updated on airspace restrictions.",
    "navigation": "I can assist with VOR tracking, GPS navigation, and flight route optimization. What do you need help with?",
    "ILS approach": "For an ILS approach, intercept the localizer and maintain glide slope until minimums.",
    "VOR navigation": "To navigate using VOR, tune to the station frequency and adjust your heading accordingly.",
    "how do I get a pilot license": "To obtain a pilot's license, you need ground school, flight training, and to pass the FAA written and practical exams.",
    "weather conditions": "What is your airport ICAO code? I’ll fetch the latest weather conditions for you.",
    "airspace restrictions": "Checking airspace restrictions... Avoid TFR areas and stay clear of controlled zones without clearance.",
    "alternate airports": "In case of diversions, I can suggest the nearest suitable airports based on your route."
};

// Function to process user input
function getAIResponse(input) {
    input = input.toLowerCase();
    return flyBuddyAI[input] || "I'm still learning! Try asking about flight planning, emergencies, or navigation.";
}

// Function to handle chat interactions
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

// Function to handle enter key press
function handleKeyPress(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}
