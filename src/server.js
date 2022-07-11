const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect("mongodb+srv://AjEcommerce:Aj8454@cluster0.mvrvvpm.mongodb.net/ecommerce?retryWrites=true&w=majority").then(
    function () {
        app.get("/", function (req, res) {
            res.send("Ecommerce setup")
        });

        const userRoutes = require('./routes/user_routes');
        app.use("/api/user", userRoutes);
    }
);



const PORT = 5000;
app.listen(PORT, function () {
    console.log(`server started at PORT: ${PORT}`);
});