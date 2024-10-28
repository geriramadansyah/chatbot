async function sendMessage() {
    const input = document.getElementById("user-input");
    const message = input.value;

    if (message) {
        addMessageToChat("User", message);
        input.value = '';

        // Kirim pesan ke backend
        const response = await fetch('http://localhost:5000/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message })
        });
        const data = await response.json();
        addMessageToChat("Bot", data.reply);
    }
}

function addMessageToChat(sender, message) {
    const chatbox = document.getElementById("chatbox");
    const messageElement = document.createElement("p");
    messageElement.textContent = `${sender}: ${message}`;
    chatbox.appendChild(messageElement);
    chatbox.scrollTop = chatbox.scrollHeight;
}
