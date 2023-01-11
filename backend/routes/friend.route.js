const express = require('express');
const freindRoute = express.Router();

// friend model
// mname = 'AllFields';
let FreindModel = require('../models/Freind');
let Users = require('../models/Users');
let Orders = require('../models/Orders');
let Items = require('../models/Items');
// abc = '../models/' + mname;
// let AllFields = require(abc);

freindRoute.route('/').get((req, res) => {
    FreindModel.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

freindRoute.route('/view-users').get((req, res) => {
    Users.aggregate([{
        $lookup: {
            from: 'courses',
            localField: 'course',
            foreignField: 'name',
            as: 'Courses'
        }
    }, ]).exec((err, data) => {
        if (err) {
            // console.log("error", err)
            return next(error)
        }
        if (data) {
            // console.log(result);
            res.json(data)
        }
    });
})

freindRoute.route('/view-ptoduct-items').get((req, res) => {
    Orders.aggregate([{ $lookup: { from: "Items", let: { order_item: "$item", order_qty: "$quantity" }, pipeline: [{ $match: { $expr: { $and: [{ $eq: ["$item", "$$order_item"] }, { $gte: ["$instock", "$$order_qty"] }] } } }, { $project: { item: 0, _id: 0 } }], as: "stockdata" } }]).exec((err, data) => {
        if (err) {
            // console.log("error", err)
            return next(error)
        }
        if (data) {
            // console.log(result);
            res.json(data)
        }
    });
})

freindRoute.route('/view-data').get((req, res) => {
    // console.log(req.query.mName);
    abc = '../models/' + req.query.mName;
    let AllFields = require(abc);
    AllFields.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    }).sort({ _id: -1, })
})

freindRoute.route('/insert-data').post((req, res, next) => {
    abc = '../models/' + req.body.mName;
    let AllFields = require(abc);
    AllFields.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});

freindRoute.route('/create-friend').post((req, res, next) => {
    FreindModel.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});

freindRoute.route('/edit-friend/:id').get((req, res) => {
    FreindModel.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// Update friend
freindRoute.route('/update-friend/:id').post((req, res, next) => {
    FreindModel.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data)
            console.log('Friend successfully updated!')
        }
    })
})

// Delete friend
freindRoute.route('/delete-friend/:id').delete((req, res, next) => {
    FreindModel.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

module.exports = freindRoute;