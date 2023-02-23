const express = require("express")

const mongoose = require("mongoose");
const bodyParser = require("body-parser")
const app= express();
// const PORT = 3001;
const cors = require('cors');
mongoose.set('strictQuery', false);


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors({
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));

require('dotenv').config()


//connect to db
mongoose.connect(
    process.env.DB_CONNECTION, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    },
    () => console.log("Connected to DB")
);

//middleware
app.use(express.json());

//routes
app.use("/auth/", require("./routes/auth"));
app.use("/Subscription/", require("./routes/subscription"));
app.use("/manage_users/", require("./routes/ManageUser"));


const server= app.listen(3000, function () {
    console.log("server started on port 3000")
})


