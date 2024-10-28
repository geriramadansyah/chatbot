const express = require('express');
const app = express();
const chatRoutes = require('./routes/chatRoutes');
const cors = require('cors');

app.use(express.json());
app.use(cors()); // Memungkinkan koneksi dari frontend

app.use('/chat', chatRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
