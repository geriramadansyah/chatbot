const axios = require('axios');

const handleChat = async (req, res) => {
    const { message } = req.body;

    try {
        // Kirim pesan ke Rasa untuk mendapatkan respons
        const rasaResponse = await axios.post('http://localhost:5005/webhooks/rest/webhook', { sender: "user", message });
        const botReply = rasaResponse.data[0]?.text || "Maaf, saya tidak mengerti.";

        res.json({ reply: botReply });
    } catch (error) {
        console.error("Error contacting Rasa:", error);
        res.status(500).json({ reply: "Ada masalah dengan server." });
    }
};

module.exports = { handleChat };
