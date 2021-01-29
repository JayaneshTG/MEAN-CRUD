const express = require('express');
const app = express();
const detailRoute  = express.Router();

//Detail model
let Detail = require('../models/Detail');

//add Detail
detailRoute.route('/create').post((req, res, next) => {
    Detail.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});

//get all details
detailRoute.route('/').get((req, res) => {
    Detail.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});

//get single detail
detailRoute.route('/read/:id').get((req, res) => {
    Detail.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});

// update detail
detailRoute.route('/update/:id').put((req, res, next) => {
    Detail.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
            console.log(error)
        } else {
            res.json(data)
            console.log('Data updated successfully')
        }
    })
});

//delete detail
detailRoute.route('/delete/:id').delete((req, res, next) => {
    Detail.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
    
});

module.exports = detailRoute;