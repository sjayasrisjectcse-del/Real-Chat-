// Redirect functions for buttons
function goToLogin() {
  window.location.href = "login.html";
}

function goToSignup() {
  window.location.href = "signup.html";
}

// Optional: Smooth fade-in animation when the page loads
document.addEventListener("DOMContentLoaded", () => {
  const heroContent = document.querySelector(".hero-content");
  heroContent.style.opacity = 0;
  heroContent.style.transform = "translateY(20px)";
  
  setTimeout(() => {
    heroContent.style.transition = "opacity 1s ease, transform 1s ease";
    heroContent.style.opacity = 1;
    heroContent.style.transform = "translateY(0)";
  }, 100);
});

// Optional: Highlight the active nav link
const currentPage = window.location.pathname.split("/").pop();
document.querySelectorAll("nav a").forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});
