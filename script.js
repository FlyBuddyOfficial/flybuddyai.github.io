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
            scrub: true
        }
    });
});

// Motion Path Example (For a Flying Plane Animation)
gsap.to(".plane-icon", {
    motionPath: {
        path: [{ x: 100, y: -50 }, { x: 200, y: 50 }, { x: 300, y: -30 }],
        curviness: 1.25,
        autoRotate: true
    },
    duration: 5,
    repeat: -1,
    ease: "power1.inOut"
});
