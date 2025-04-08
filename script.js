document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".section");

  const reveal = () => {
    const triggerBottom = window.innerHeight * 0.85;

    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;

      if (sectionTop < triggerBottom) {
        section.classList.add("visible");
      }
    });
  };

  window.addEventListener("scroll", reveal);
  reveal();

  // Toggle AI Chat
  const toggleChatBtn = document.getElementById("toggleChat");
  const chatBox = document.getElementById("chatBox");

  toggleChatBtn.addEventListener("click", () => {
    chatBox.classList.toggle("hidden");
  });

  // Waitlist form
  window.submitWaitlist = function (event) {
    event.preventDefault();
    const email = document.getElementById("emailInput").value;
    const response = document.getElementById("form-response");

    if (email) {
      fetch("https://script.google.com/macros/s/YOUR_GOOGLE_APPS_SCRIPT_ID/exec", {
        method: "POST",
        body: JSON.stringify({ email }),
        headers: { "Content-Type": "application/json" }
      }).then(() => {
        response.classList.remove("hidden");
      }).catch(() => {
        response.textContent = "Something went wrong. Please try again.";
        response.classList.remove("hidden");
      });
    }
  };
});
