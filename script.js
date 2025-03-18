document.addEventListener("DOMContentLoaded", function () {
    let counter = localStorage.getItem("waitlistCounter") || 0;
    document.getElementById("waitlist-counter").innerText = counter;

    document.getElementById("waitlist-form").addEventListener("submit", function (event) {
        event.preventDefault();
        counter++;
        localStorage.setItem("waitlistCounter", counter);
        document.getElementById("waitlist-counter").innerText = counter;
        alert("You have successfully joined the waitlist!");
    });
});
