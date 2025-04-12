document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".fade-section");
  const chatBox = document.getElementById("chatBox");
  const chatToggle = document.getElementById("chatToggle");

  // Hide chat box by default
  chatBox.style.display = "none";

  chatToggle.addEventListener("click", () => {
    chatBox.style.display =
      chatBox.style.display === "none" ? "block" : "none";
  });

  function fadeInOnScroll() {
    const triggerBottom = window.innerHeight * 0.9;
    sections.forEach((section, index) => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop < triggerBottom && index !== 0) {
        section.classList.add("visible");
      }
    });
  }

  window.addEventListener("scroll", fadeInOnScroll);
  fadeInOnScroll(); // call once to show home immediately
});

function showThankYou() {
  document.getElementById("thankYouMsg").classList.remove("hidden");
}

function chatResponse(promptText) {
  const chatReply = document.getElementById("chatReply");
  chatReply.innerText = `You asked: "${promptText}" — Fly Buddy AI is preparing a response...`;
}
