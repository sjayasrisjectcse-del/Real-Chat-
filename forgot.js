// Run this only after the HTML is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // 1. Define all constant elements once
  const form = document.getElementById("forgotForm");
  const emailInput = document.getElementById("email");
  const message = document.getElementById("message");
  let messageTimeout; // To manage the timer

  // 2. Check if all required elements exist to prevent crashes
  if (!form || !emailInput || !message) {
    console.error("A required form element is missing from the page.");
    return;
  }

  // Handle the form submission
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // 3. Clear any previous message and its timer
    clearTimeout(messageTimeout);
    message.textContent = "";
    message.className = ""; // Reset styling classes

    const email = emailInput.value.trim();
    // 4. Added a regular expression for email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validation: empty field
    if (email === "") {
      message.textContent = "⚠️ Please enter your email address.";
      // 5. Use CSS classes instead of direct styling
      message.classList.add("warning");
      return;
    }

    // Validation: invalid email format
    if (!emailRegex.test(email)) {
      message.textContent = "📧 Please enter a valid email format.";
      message.classList.add("warning");
      return;
    }

    // In a real app, an API call would happen here.
    // A loading state would be shown to the user.

    // Simulated success response
    message.textContent = "✅ A password reset link has been sent to your email!";
    message.classList.add("success");

    form.reset();

    // Set a new timeout to clear the message
    messageTimeout = setTimeout(function () {
      message.textContent = "";
      message.className = "";
    }, 4000);
  });
});