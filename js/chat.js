async function sendMessage() {
    const input = document.getElementById("user-input");
    const message = input.value;

    if (message) {
        addMessageToChat("User", message);
        input.value = '';

        const response = await fetch('https://2927-103-171-31-166.ngrok-free.app/chat', {
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
