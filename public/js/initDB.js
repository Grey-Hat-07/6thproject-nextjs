const express = require('express');
const app = express();
const mongoose = require('mongoose');
const data ='mongodb+srv://Subhamay:L7SFWH6o1aY58V3S@cluster0.izzj9.mongodb.net/Project?retryWrites=true&w=majority'
mongoose.connect(data,{
    useNewUrlParser:true,
    useUnifiedTopology:true
});
mongoose.connection.on("connected", () => {
    console.log("Mongoose is connected");
}
);
mongoose.connection.on("error", (err) => {
    console.log("Mongoose connection error: " + err);
}
);





app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});