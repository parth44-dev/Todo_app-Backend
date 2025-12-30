const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const dbconnect = require('./config/dbconnect');
const router = require('./routes/routes');

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"]
}));

app.get('/', (req, res) => {
    res.send("API is running...");
});

dbconnect();

app.use('/api/', router);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
