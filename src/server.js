const express = require('express');
const app = express();

app.get("/", function (req, res) {
    res.send("Ecommerce setup")
});

const PORT = 5000;
app.listen(PORT, function () {
    console.log(`server started at PORT: ${PORT}`);
});