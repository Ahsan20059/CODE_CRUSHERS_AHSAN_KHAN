document.addEventListener("DOMContentLoaded", function () {
    const registerForm = document.getElementById("registrationForm");

    registerForm.addEventListener("submit", async function (event) {
        event.preventDefault(); // Prevent default form submission

        // Correct field selectors
        const firstName = document.getElementById("firstName").value.trim();
        const lastName = document.getElementById("lastName").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        const state = document.getElementById("state").value;

        if (!firstName || !lastName || !email || !password || !state) {
            alert("❌ Please fill in all fields.");
            return;
        }

        console.log("🔄 Sending data:", { firstName, lastName, email, password, state });

        try {
            const response = await fetch("http://localhost:5000/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ firstName, lastName, email, password, state }), // ✅ Correct field names
            });

            const result = await response.json();

            if (response.ok) {
                alert(result.message);
                localStorage.setItem("firstName", firstName); // Store name
                localStorage.setItem("email", email); // Store email ✅ ADD THIS LINE
                window.location.href = "home-page.html"; // Redirect
            } else {
                alert(result.message || "❌ Registration failed!");
            }
        } catch (error) {
            console.error("Registration Error:", error);
            alert("❌ Registration failed. Please try again.");
        }
    });
});
