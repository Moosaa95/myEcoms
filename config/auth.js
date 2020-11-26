const express = require('express')
const router = express.Router()
module.exports = {
    ensureAuthenicated: function(req, res, next) {
        if (req.ensureAuthenicated()) {
            return next()
        }
        req.flash("error_msg", "Please log in to view this resource")
        res.redirect("/users/login")
    }
}