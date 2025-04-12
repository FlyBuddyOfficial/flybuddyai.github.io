/* === script.js === */
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".fade-section");
  const chatBox = document.getElementById("chatBox");
  const chatToggle = document.getElementById("chatToggle");
  const homeSection = document.getElementById("home");

  // Show home section immediately
  homeSection.classList.add("visible");

  // Hide chat box by default
  chatBox.style.display = "none";

  chatToggle.addEventListener("click", () => {
    chatBox.style.display =
      chatBox.style.display === "none" ? "block" : "none";
  });

  function fadeInOnScroll() {
    const triggerBottom = window.innerHeight * 0.9;
    sections.forEach((section) => {
      if (section.id !== "home") {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < triggerBottom) {
          section.classList.add("visible");
        }
      }
    });
  }

  window.addEventListener("scroll", fadeInOnScroll);
  fadeInOnScroll();
});

function showThankYou() {
  document.getElementById("thankYouMsg").classList.remove("hidden");
}
