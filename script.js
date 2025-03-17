// Register GSAP Plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, MotionPathPlugin, TextPlugin, ExpoScaleEase, CustomEase);

// Smooth Scrolling Effect
document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        gsap.to(window, { duration: 1.5, scrollTo: this.getAttribute("href"), ease: "power2.out" });
    });
});

// Text Animation on Home Page
gsap.from(".glowing-text", {
    opacity: 0,
    y: -50,
    duration: 1.5,
    ease: "power3.out",
});

// Button 3D Effect
gsap.from(".button", {
    opacity: 0,
    scale: 0.8,
    duration: 1.2,
    ease: "power2.out",
});

// Features Page Scroll Animations
gsap.utils.toArray(".feature-item").forEach((item) => {
    gsap.from(item, {
        opacity: 0,
        y: 50,
        duration: 1.2,
        scrollTrigger: {
            trigger: item,
            start: "top 80%",
            end: "top 50%",
            scrub: true,
        }
    });
});
