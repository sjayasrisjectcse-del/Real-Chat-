document.addEventListener("DOMContentLoaded", function () {
  // Elements
  const sendBtn = document.getElementById("sendBtn");
  const messageInput = document.getElementById("messageInput");
  const chatWindow = document.getElementById("chatWindow");
  const logoutBtn = document.getElementById("logoutBtn");
  const usersList = document.getElementById("users");
  const userCount = document.getElementById("userCount");
  const typingIndicator = document.getElementById("typingIndicator");

  // Sample online users
  const onlineUsers = ["John Doe", "Emma Watson", "Chris Evans", "Tony Stark"];

  // Function to update online users
  function updateUsers() {
    usersList.innerHTML = "";
    onlineUsers.forEach(user => {
      const li = document.createElement("li");
      li.textContent = user;
      usersList.appendChild(li);
    });
    userCount.textContent = onlineUsers.length;
  }

  updateUsers(); // initialize users list

  // Function to send message
  function sendMessage() {
    const text = messageInput.value.trim();
    if (text === "") return;

    const msg = document.createElement("p");
    msg.innerHTML = `<strong>You:</strong> ${text} <span class="timestamp">${getTime()}</span>`;
    chatWindow.appendChild(msg);

    messageInput.value = "";
    chatWindow.scrollTop = chatWindow.scrollHeight;

    // Simulate a reply after 1 second
    setTimeout(() => {
      const reply = document.createElement("p");
      reply.innerHTML = `<strong>Admin:</strong> Got your message: "${text}" <span class="timestamp">${getTime()}</span>`;
      chatWindow.appendChild(reply);
      chatWindow.scrollTop = chatWindow.scrollHeight;
    }, 1000);
  }

  // Send message on button click
  sendBtn.addEventListener("click", sendMessage);

  // Send message on Enter key
  messageInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      sendMessage();
    }
  });

  // Logout button
  logoutBtn.addEventListener("click", function () {
    alert("You have been logged out!");
    window.location.href = "login.html";
  });

  // Typing indicator
  messageInput.addEventListener("input", function () {
    if (messageInput.value.trim() !== "") {
      typingIndicator.textContent = "You are typing...";
    } else {
      typingIndicator.textContent = "";
    }
  });

  // Helper function to get current time
  function getTime() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    return `${hours}:${minutes} ${ampm}`;
  }
});
