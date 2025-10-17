document.addEventListener("DOMContentLoaded", function () {
  const sendBtn = document.getElementById("sendBtn");
  const messageInput = document.getElementById("messageInput");
  const chatWindow = document.getElementById("chatWindow");
  const logoutBtn = document.getElementById("logoutBtn");

  // Send message
  sendBtn.addEventListener("click", function () {
    const message = messageInput.value.trim();
    if (message === "") return;

    const msgElem = document.createElement("p");
    msgElem.innerHTML = `<strong>You:</strong> ${message}`;
    chatWindow.appendChild(msgElem);
    messageInput.value = "";
    chatWindow.scrollTop = chatWindow.scrollHeight;
  });

  // Press Enter to send
  messageInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      sendBtn.click();
    }
  });

  // Logout
  logoutBtn.addEventListener("click", function () {
    alert("You have been logged out!");
    window.location.href = "login.html";
  });
});
