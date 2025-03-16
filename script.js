document.addEventListener("DOMContentLoaded", function() {
    // Live Counter Animation
    let counterElement = document.getElementById("live-counter");
    let count = 0;
    let targetCount = 150; // This should dynamically update
    
    function updateCounter() {
        if (count < targetCount) {
            count++;
            counterElement.textContent = count;
            setTimeout(updateCounter, 50);
        }
    }
    
    if (counterElement) {
        updateCounter();
    }
    
    // Scroll-based Animation
    const animatedElements = document.querySelectorAll(".stat-number");
    function revealOnScroll() {
        animatedElements.forEach((el) => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                el.style.transform = "translateY(0)";
                el.style.opacity = "1";
            }
        });
    }
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll()
});
