require('./models/db')
const express = require('express');
const path = require('path');
const flash = require("connect-flash");
const session = require("express-session");
const passport = require("passport");
const bodyparser = require('body-parser')
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const orderController = require('./controllers/orderController')


const app = express();


//passport config
require("./config/passport")(passport)


// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

//bodyparser
app.use(express.urlencoded({ extended: false }))
app.use(bodyparser.urlencoded({
    extended: true
}))
app.use(bodyparser.json())

//set public

app.use(express.static(path.join(__dirname, 'public')))

//express session
app.use(session({
    secret: "secret",
    resave: false,
    saveUninitialized: true
}))

//passport middleware
app.use(passport.initialize())
app.use(passport.session())

//connect flash
app.use(flash())
    //gobal vars 
app.use((req, res, next) => {
        res.locals.success_msg = req.flash("success_msg")
        res.locals.error_msg = req.flash("error_msg")
        res.locals.error = req.flash("error")
        next()

    })
    //routes
app.use('/', indexRouter)
app.use('/users', usersRouter)
app.use('/', orderController)

// catch 404 and forward to error handler
/* app.use(function(req, res, next) {
    next(createError(404));
});
 */


app.listen(3000, () => {
    console.log("server started");
})