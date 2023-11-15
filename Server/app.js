require("dotenv").config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
const app = express();
const authRoute = require("./routes/AuthRoute");
const cookieParser = require("cookie-parser");

const {MONGO_URL, PORT} = process.env;

mongoose.connect(MONGO_URL)
.then((x) => {
    console.log('connected to db');
}).catch(err => {
    console.error(`Error connecting to database: ${err}`);
})

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow_Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT")
    res.setHeader("Access-Controll-Allow-Headers", "Content-Type")
})

const corsOptions = {
    origin: ["http://localhost:3000"],
    allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept"],
    credentials: true,
    methods: ['GET', 'POST']
}

app.use(cors(corsOptions));

app.use(express.json());
app.use(cookieParser());
app.use('/', authRoute);

app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`)
})