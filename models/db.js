const mongoose = require("mongoose");
//connect db
/* mongoose.connect('mongodb://localhost:27017/Orders', { useNewUrlParser: true }, (err) => {
    if (!err) {
        console.log('mongodb connected');
    } else {
        console.log('error' + err);
    }
}) */
mongoose.connect("mongodb://localhost/authen", { useNewUrlParser: true })
    .then(() => console.log("db connected"))
    .catch(err => console.log(err))


require('./order.model')