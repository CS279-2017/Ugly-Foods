/**
 * Created by Alec on 2/27/2017.
 */
//get order page
const Produce = require('../models/Produce');
const multer = require ('multer')

exports.index = (req, res, next) => {

    res.render('register_produce', {
        title: 'Register Produce'
    });
};


/*
 * POST /register_produce
 *
 *
 */

exports.postProduce = (req, res, next) => {
    console.log('posting produce')
    req.assert('produce', 'Produce name cannot be empty').notEmpty();
    req.assert('units', 'Units must be number').isNumeric();
    req.assert('unitPrice', 'Unit price must be valid dollar amount').isCurrency();
    console.log('am i stuck 1')
    const errors = req.validationErrors();
    console.log('am i stuck 2')
    if (errors) {
        console.log('error found')
        //res.flash('errors', errors);
        console.log('flash')
        //res.redirect('/')
        //return next();
        res.status(400).send(errors)
    }
    console.log('am i stuck 3')
    const produceInstance = new Produce({
        produce: req.body.produce,
        units: req.body.units,
        UnitPrice: req.body.unitPrice,
        picture: req.body.picture
    });
    //if(req.body.farmerCheck)
    //  req.flash('success', {msg: "Signed up as farmer"})
    produceInstance.save((err) => {
        if (err) { return next(err); }
        res.status(201).send()
        //req.flash('success', "Produce successfully registered")
        //res.redirect('/')
    });
};