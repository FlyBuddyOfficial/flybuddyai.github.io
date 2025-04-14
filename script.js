document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".fade-section");
  const chatBox = document.getElementById("chatBox");
  const chatToggle = document.getElementById("chatToggle");
  const chatReply = document.getElementById("chatReply");

  // Show chat box toggle
  chatToggle.addEventListener("click", () => {
    chatBox.style.display = chatBox.style.display === "none" ? "block" : "none";
  });

  // Scroll fade-in effect
  function fadeInOnScroll() {
    const triggerBottom = window.innerHeight * 0.9;
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop < triggerBottom) {
        section.classList.add("visible");
      }
    });
  }

  window.addEventListener("scroll", fadeInOnScroll);
  fadeInOnScroll(); // initial

  // Prompt reply handler
  window.chatResponse = function (question) {
    const responseMap = {
      "How do I plan a flight route?": "To plan a flight route, Fly Buddy uses your departure, destination, and waypoints, optimizing for fuel and weather.",
      "What if I lose radio contact?": "If radio contact is lost, Fly Buddy will help you follow standard ICAO procedures for lost comms and guide you step-by-step.",
      "How do I calculate fuel?": "Fly Buddy considers distance, winds, aircraft performance, and reserves to calculate your optimal fuel load.",
      "How do I handle a bird strike?": "Fly Buddy provides emergency checklist support immediately and guides you on post-impact procedures and landing options."
    };

    const reply = responseMap[question] || "Fly Buddy is thinking...";

    chatReply.innerHTML = `<strong>You asked:</strong> "${question}"<br><strong>Fly Buddy:</strong> ${reply}`;
  };
});

// Join Now confirmation
function showThankYou() {
  document.getElementById("thankYouMsg").classList.remove("hidden");
}
