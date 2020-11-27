const express = require('express')
const mongoose = require('mongoose')
const { updateOne } = require('../models/User')
const Order = mongoose.model('Order')

let router = express.Router()
mongoose.set('useFindAndModify', false)

//router
router.get('/', (req, res) => {
    res.render('menu')
})
router.get('/cart', (req, res) => {
    res.render('cart')
})
router.get('/order', (req, res) => {
    res.render('orders')
})
router.get('/profile', (req, res) => {

    Order.find((err, docs) => {
        if (!err) {
            res.render("profile", {
                order: docs
            })
        } else {
            console.log(`error in order ${err}`);
        }
    })
})

router.get('/order/:id', (res, req) => {
    Order.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.render("orders", { order: doc })
        } else {
            console.log(`error findby: ${err}`);
        }
    })

})
router.get('/order/delete/:id', (req, res) => {
    Order.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.redirect('/profile')

        } else {
            console.log(`error in delete: ${err}`);
        }
    })
})


//Post
router.post('/cart', (req, res) => {
    insertOrder(req, res)
})

router.post('/orders', (req, res) => {
    updateOrder(req, res)
})

//functions
function updateOrder(req, res) {
    Order.findByIdAndUpdate({ id: req.body._id }, req.body, { new: true }, (err, doc) => {
        if (!err) {
            res.redirect('/profile')
        } else {
            console.log(`Update error ${err}`);
        }
    })

}

function insertOrder(req, res) {
    var d = new Date()
    var t = d.getTime()
    var counter = t
    counter += 1
    var order = new Order()
    order.total = req.body.total
    order.order = counter
    order.save((err, doc) => {
        if (!err) {
            console.log(`order:${order}`);
            res.redirect('/profile')
        } else {
            console.log(`error insertOrder ${err}`);
        }
    })
}

module.exports = router