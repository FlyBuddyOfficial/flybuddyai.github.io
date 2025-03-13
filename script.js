// GSAP Animation
gsap.from(".logo", { opacity: 0, y: -50, duration: 1 });
gsap.from("nav ul li", { opacity: 0, y: -50, duration: 1, stagger: 0.2 });
gsap.from(".content h1", { opacity: 0, x: -100, duration: 1, delay: 0.5 });
gsap.from(".content p", { opacity: 0, x: -100, duration: 1, delay: 1 });
gsap.from(".cta-button", { opacity: 0, scale: 0.5, duration: 1, delay: 1.5 });

// Three.js Background Animation
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.querySelector("#bgCanvas") });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16);
const material = new THREE.MeshStandardMaterial({ color: 0x00aaff });
const torusKnot = new THREE.Mesh(geometry, material);
scene.add(torusKnot);

const light = new THREE.PointLight(0xffffff);
light.position.set(5, 5, 5);
scene.add(light);

camera.position.z = 30;

function animate() {
    requestAnimationFrame(animate);
    torusKnot.rotation.x += 0.01;
    torusKnot.rotation.y += 0.01;
    renderer.render(scene, camera);
}

animate();

// Resize canvas on window resize
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});
