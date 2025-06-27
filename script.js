 <script>
    const sendBtn = document.getElementById("send-btn");
    const userInput = document.getElementById("user-input");
    const chatMessages = document.getElementById("chat-messages");

    sendBtn.onclick = async () => {
      const message = userInput.value.trim();
      if (!message) return;

      appendMessage("You", message, "user");
      userInput.value = "";

      try {
        // In a real application, you would send this to a backend that
        // communicates with OpenAI. For a client-side only example,
        // you would need to use a proxy or expose your API key (not recommended).
        // For demonstration, this will just echo the message as a "bot" reply.
        appendMessage("Bot", `You asked: "${message}". I'm an example bot.`, "bot");

      } catch (err) {
        appendMessage("Bot", "Something went wrong.", "bot");
        console.error(err);
      }
    };

    function appendMessage(sender, text, className) {
      const messageDiv = document.createElement("div");
      messageDiv.classList.add("message", className);
      messageDiv.innerText = `${text}`;
      chatMessages.appendChild(messageDiv);
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }
  </script>
