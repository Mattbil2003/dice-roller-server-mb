const express = require('express');
const cors = require("cors");

const corsOptions = {
    origin: 'https://server-dice-roller-r1-mb.azurewebsites.net',
  };

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors(corsOptions));
app.use(express.json());
app.get('/roll', (req, res) => {
    console.log(`request made`);
    const count = parseInt(req.query.count, 10);
    console.log(`for ${count}`);
    const results = [];
    for (let i = 0; i < count; i++) {
        results.push(Math.floor(Math.random() * 6) + 1);
    }
    console.log(`for ${results}`);
    res.json({results});
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
