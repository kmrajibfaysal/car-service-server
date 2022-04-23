const express = require('express');
const cors = require('cors');

const port = process.env.PORT || 5000;
require('dotenv').config();

const app = express();

// middleware
app.use(cors());
app.use(express.json());

//

app.get('/', (req, res) => {
    res.send('Running car service server.');
});

// Port listener
app.listen(port, () => {
    console.log('Running car service server in port 5000!');
});
