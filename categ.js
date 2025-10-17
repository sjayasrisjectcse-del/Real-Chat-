document.addEventListener("DOMContentLoaded", function () {
  const categoryCards = document.querySelectorAll(".category-card");
  const logoutBtn = document.getElementById("logoutBtn");

  categoryCards.forEach(card => {
    card.addEventListener("click", function () {
      const category = card.dataset.category;

      if (category === "General") {
        window.location.href = "general.html";
      } 
      else if (category === "Sports") {
        window.location.href = "sports.html";
      } 
      else if (category === "Technology") {
        window.location.href = "tech.html";
      } 
      else if (category === "Movies") {
        window.location.href = "movies.html";  // ✅ Go to Movies Chat
      }
      else if (category === "Music") {
        window.location.href = "music.html"; 
      }
      else if (category === "Gaming") {
        window.location.href = "gaming.html"; 
      }
      else {
        alert(`"${category}" chat room will open soon!`);
      }
    });
  });

  logoutBtn.addEventListener("click", function () {
    alert("You have been logged out!");
    window.location.href = "login.html";
  });
});
