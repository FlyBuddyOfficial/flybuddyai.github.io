document.addEventListener("DOMContentLoaded", function () {
    fetch('join-count.json')
        .then(response => response.json())
        .then(data => {
            document.getElementById("joinCounter").innerText = data.count;
        })
        .catch(error => console.error("Error loading count:", error));
});

function joinWaitlist() {
    let email = document.getElementById("emailInput").value;
    if (email.trim() === "") {
        alert("Please enter a valid email.");
        return;
    }

    fetch('join-count.json')
        .then(response => response.json())
        .then(data => {
            let newCount = data.count + 1;
            document.getElementById("joinCounter").innerText = newCount;

            // Update JSON file (if using backend, send an update request)
            fetch('update-count.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ count: newCount })
            });
        })
        .catch(error => console.error("Error updating count:", error));

    alert("You've successfully joined the Fly Buddy Waitlist!");
}
