const express = require('express');
const cors = require("cors");

const corsOptions = {
    origin: 'https://zealous-pebble-00057ad0f.4.azurestaticapps.net',
  };

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors(corsOptions));
app.use(express.json());
app.get('/roll', (req, res) => {
    const count = parseInt(req.query.count, 10);
    if (isNaN(count) || count < 1) {
        return res.status(400).json({ error: 'Invalid count provided' });
    }
    const results = [];
    for (let i = 0; i < count; i++) {
        results.push(Math.floor(Math.random() * 6) + 1);
    }
    res.json({ results });
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
