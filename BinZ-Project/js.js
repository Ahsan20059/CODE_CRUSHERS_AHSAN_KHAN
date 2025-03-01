document.addEventListener("DOMContentLoaded", function () {
    const usernameElement = document.getElementById("username"); // Ensure ID is correct
    const bookBtn = document.getElementById("bookBtn"); // Ensure button ID is correct
    const phoneNumberInput = document.getElementById("phoneNumber"); // Input field for phone number

    const storedName = localStorage.getItem("firstName"); // Fetch stored name
    const storedEmail = localStorage.getItem("email"); // Fetch stored email for logged-in user

    console.log("Stored Name:", storedName); // Debugging output
    console.log("Stored Email:", storedEmail); // Debugging output

    // Display username
    if (storedName && storedName !== "undefined" && storedName !== "null") {
        usernameElement.textContent = storedName;
    } else {
        usernameElement.textContent = "Guest";
    }

    // ➤ Book Button Click Event
    
        bookBtn.addEventListener("click", function () {
            const phoneNumber = phoneNumberInput.value.trim();
    
            if (!phoneNumber || phoneNumber.length !== 10) {
                alert("⚠️ Please enter a valid 10-digit phone number!");
                return;
            }
    
            // Send phone number to server
            fetch("http://localhost:5000/sendSMS", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ phoneNumber: phoneNumber }),
            })
            .then(response => response.json())
            .then(data => {
                alert(data.message); // Show success or error message
            })
            .catch(error => {
                console.error("❌ Error:", error);
                alert("❌ Something went wrong. Try again!");
            });
        });
    });
    
document.addEventListener("DOMContentLoaded", function () {
    const coinElement = document.getElementById("coin");
    
    if (!coinElement) {
        console.error("❌ Coin element not found!");
        return;
    }

    // Fetch coins from localStorage
    let coins = localStorage.getItem("coins");

    if (!coins) {
        coins = 0; // Default value if no coins are found
    }

    // Update the UI
    coinElement.textContent = coins;
});
document.addEventListener("DOMContentLoaded", async function () {
    try {
        const response = await fetch("http://localhost:5000/leaderboard");
        const result = await response.json();

        if (!response.ok) {
            console.error("❌ Failed to fetch leaderboard:", result.message);
            return;
        }

        const leaderboard = result.leaderboard;
        if (!leaderboard || leaderboard.length === 0) {
            console.warn("⚠️ No leaderboard data available!");
            return;
        }

        // Update first rank
        if (leaderboard[0]) {
            document.getElementById("first-name").textContent = leaderboard[0].firstName;
            document.getElementById("first-id").textContent = leaderboard[0]._id;
            document.getElementById("first-coins").textContent = leaderboard[0].coins;
        }

        // Update second rank
        if (leaderboard[1]) {
            document.getElementById("second-name").textContent = leaderboard[1].firstName;
            document.getElementById("second-id").textContent = leaderboard[1]._id;
            document.querySelector(".second-coins").textContent = leaderboard[1].coins;
        }

        // Update third rank
        if (leaderboard[2]) {
            document.getElementById("third-name").textContent = leaderboard[2].firstName;
            document.getElementById("third-id").textContent = leaderboard[2]._id;
            document.getElementById("third-coins").textContent = leaderboard[2].coins;
        }

        console.log("✅ Leaderboard updated successfully!", leaderboard);

    } catch (error) {
        console.error("❌ Error fetching leaderboard:", error);
    }
});

document.addEventListener("DOMContentLoaded", function () {
    // Floating Button Click Event - Show Chat
    document.getElementById("chat-toggle").addEventListener("click", function () {
        let chatContainer = document.getElementById("chat-container");
        chatContainer.classList.toggle("hidden");
    });

    // Close Button Click Event - Hide Chat
    document.getElementById("close-chat").addEventListener("click", function () {
        document.getElementById("chat-container").classList.add("hidden");
    });
});

// Function to Show Dynamic Content
function showSection(section) {
    let content = document.getElementById("content-area");
    content.style.display = "block"; // Show the content area

    if (section === "about") {
        content.innerHTML = `
            <h3>About Us</h3>
            <p>Welcome to Z-Chat, your AI-powered support assistant designed for seamless and efficient customer service.</p>
        `;
    } else if (section === "schedule") {
        let slots = ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM"];
        let options = slots.map(slot => `<option value="${slot}">${slot}</option>`).join("");

        content.innerHTML = `
            <h3>Schedule a Service</h3>
            <p>Select a time slot:</p>
            <select id="schedule-time">${options}</select>
            <p id="confirmation-message" style="display:none; color: green; font-weight: bold;"></p>
        `;
    } else if (section === "contact") {
        content.innerHTML = `
            <h3>Contact Us</h3>
            <p>Email: <a href="mailto:support@bin-z.com">support@bin-z.com</a></p>
            <p>Phone: 9696822349</p>
        `;
    } else if (section === "ewaste") {
        content.innerHTML = `
            <button id="raise-ticket-btn" class="ticket-btn" onclick="window.location.href='test.html';">Raise Your Ticket</button>
        `;

        // Event Listener for Raise Your Ticket Button (Redirect to another page)
        document.getElementById("raise-ticket-btn").addEventListener("click", function () {
            window.location.href = "test.html"; // Change this to your actual ticket page
        });
    }
}

// Function to Redirect to a New Page
function redirectToPage(url) {
    window.location.href = url;
}





window.addEventListener("load", function() {
    if (localStorage.getItem("firstName")) {
        usernameElement.textContent = localStorage.getItem("firstName");
    }
});
