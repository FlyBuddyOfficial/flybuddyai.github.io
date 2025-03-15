document.addEventListener("DOMContentLoaded", function() {
    console.log("Fly Buddy website loaded successfully!");

    // Smooth scroll effect
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Adding slight 3D hover effect
    const heroSection = document.querySelector(".hero");
    heroSection.addEventListener("mousemove", (e) => {
        let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
        heroSection.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });

    heroSection.addEventListener("mouseleave", () => {
        heroSection.style.transform = "rotateY(0deg) rotateX(0deg)";
    });
});
