document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(".fade-in").forEach(section => {
    observer.observe(section);
  });

  const tryBtn = document.getElementById("tryBtn");
  const chatBox = document.getElementById("chat-box");

  tryBtn.addEventListener("click", () => {
    if (chatBox.style.display === "block") {
      chatBox.style.display = "none";
    } else {
      chatBox.style.display = "block";
    }
  });
});
