document.addEventListener("DOMContentLoaded", function () {
    const counterElement = document.getElementById("counter");
    const form = document.getElementById("waitlist-form");
    let waitlistCount = localStorage.getItem("waitlistCount") || 0;

    // Display current counter value
    counterElement.textContent = waitlistCount;

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form from refreshing the page
        
        let emailInput = document.getElementById("email");
        if (emailInput.value.trim() !== "") {
            waitlistCount++;
            localStorage.setItem("waitlistCount", waitlistCount);
            counterElement.textContent = waitlistCount;
            emailInput.value = ""; // Clear input field
            alert("You have successfully joined the waitlist!");
        }
    });
});
