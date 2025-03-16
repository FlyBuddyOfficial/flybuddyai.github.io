document.addEventListener("DOMContentLoaded", function() {
    let counterElement = document.getElementById("counter");
    let count = 150; // Set to default count

    function updateCounter() {
        counterElement.textContent = count;
    }

    updateCounter();

    document.getElementById("waitlist-form").addEventListener("submit", function(event) {
        event.preventDefault();
        count++;
        updateCounter();
        alert("Thank you for joining the Fly Buddy waitlist!");
    });
});
