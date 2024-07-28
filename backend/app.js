const express = require('express');
const cors = require("cors");
const app = express();
const dotenv = require('dotenv');
dotenv.config();

// allow traffic from client only
let corsOptions = {
    origin: process.env.CLIENT_URL + ":" + process.env.CLIENT_PORT
};

app.use(cors(corsOptions));

// load application routes
const routes = require('./routes/routes');

app.use(express.json());
app.use('/country', routes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});