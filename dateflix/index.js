const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const methodOverride = require('method-override')

const app = express();

// Middleware
app.use(express.json()); // json body parser 
app.use(cors());
app.use(methodOverride('_method'))
const PORT = process.env.PORT || 3000;

//test if it's deployed on heroku/port
app.get("/status", (req,res) => res.status(200).json({status: "deployed on heroku"}) )
app.listen(PORT, () => console.log(`The server has started on port: ${PORT}`));



// Set up Mongoose
mongoose.connect(
    process.env.MONGODB_CONNECTION_STRING,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err) => {
        if (err) throw err;
        console.log("MongoDB connection established")
    }
);

// Set up routes
app.use("/users", require("./routes/userRouter"));